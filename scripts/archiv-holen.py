#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Archiviert die alte WordPress-Seite molloybusiness.com als Referenzmaterial
fuer den optischen 1:1-Nachbau.

Das Skript ist fuer den Lauf in GitHub Actions gedacht (der Runner hat freien
Netzzugang) und legt ab:

    docs/original/html/<name>.html          Roh-HTML der Hauptseiten
    docs/original/html/blog/<slug>.html     Roh-HTML aller Blogartikel
    docs/original/text/<name>.md            lesbare Textfassung
    docs/original/text/blog/<slug>.md       lesbare Textfassung der Blogartikel
    docs/original/bild-inventar.md          Tabelle aller geladenen Bilder
    docs/original/seiten-inventar.md        Struktur-Uebersicht je Seite
    src/assets/images/<ordner>/<datei>      die Bilddateien selbst

src/assets/images/blog/ wird bewusst nicht angefasst — die Blogbilder sind
bereits migriert. Fuer Blogartikel werden deshalb auch keine Bilder geladen.

Aufruf:  python scripts/archiv-holen.py
"""

from __future__ import annotations

import re
import sys
import time
import urllib.parse
from pathlib import Path
from xml.etree import ElementTree

try:
    import requests
except ImportError:  # pragma: no cover
    sys.exit("Modul 'requests' fehlt  ->  pip install requests")

try:
    from bs4 import BeautifulSoup, NavigableString, Tag
except ImportError:  # pragma: no cover
    sys.exit("Modul 'beautifulsoup4' fehlt  ->  pip install beautifulsoup4")

try:
    from PIL import Image
except ImportError:  # pragma: no cover
    Image = None


# --------------------------------------------------------------------------
# Konfiguration
# --------------------------------------------------------------------------

BASIS = "https://molloybusiness.com"
SITEMAP = f"{BASIS}/post-sitemap.xml"

ROOT = Path(__file__).resolve().parents[1]
HTML_DIR = ROOT / "docs" / "original" / "html"
TEXT_DIR = ROOT / "docs" / "original" / "text"
INVENTAR_DIR = ROOT / "docs" / "original"
BILD_DIR = ROOT / "src" / "assets" / "images"

TIMEOUT = 30          # Sekunden pro Request
WIEDERHOLUNGEN = 1    # ein zusaetzlicher Versuch pro URL
PAUSE = 0.4           # Hoeflichkeitspause zwischen Requests
WARN_KANTE = 1200     # Warnung, wenn die laengste Kante darunter liegt

USER_AGENT = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/124.0 Safari/537.36 molloybusiness-archiv/1.0"
)

# (Pfad, Kurzname, Zielordner fuer die Bilder dieser Seite)
SEITEN = [
    ("/", "start", "start"),
    ("/pinterest-marketing-angebote/", "angebote-uebersicht", "angebote"),
    ("/pinterest-account-management/", "account-management", "angebote"),
    ("/pinterest-account-aufbau-fuer-unternehmen/", "account-aufbau", "angebote"),
    ("/pinterest-strategie-call-unternehmen/", "strategie-call", "angebote"),
    ("/pinterest-audit-pinterest-account-analyse/", "audit", "angebote"),
    ("/pinterest-marketing-workshops/", "workshop", "angebote"),
    ("/pinterest-content-paket-unternehmen/", "content-paket", "angebote"),
    ("/ueber-pinterest-marketing-expertin/", "ueber-mich", "ueber-mich"),
    ("/kontakt-pinterest-marketing/", "kontakt", "kontakt"),
    ("/blog/", "blog-uebersicht", "sonstige"),
]

BILD_ORDNER = ["start", "angebote", "ueber-mich", "kontakt", "sonstige"]

# Bloecke, die nicht in die Textfassung gehoeren: Navigation, Footer,
# Cookie-Banner, Sharing-Leisten.
SKIP_MUSTER = re.compile(
    r"(cookie|cmplz|borlabs|consent|gdpr|usercentrics|cookiebot|iubenda|complianz"
    r"|elementor-location-header|elementor-location-footer"
    r"|site-header|site-footer|page-header|page-footer"
    r"|elementor-nav-menu|nav-menu|main-navigation|site-navigation|menu-item"
    r"|breadcrumb|skip-link|screen-reader|sr-only"
    r"|elementor-menu-toggle|back-to-top|scroll-to-top"
    r"|social-icons-list|elementor-share-buttons)",
    re.I,
)

SKIP_ELEMENTOR_TYP = {"header", "footer", "popup"}
SKIP_TAGS = {"script", "style", "noscript", "svg", "template", "form",
             "select", "option", "textarea", "iframe", "head", "nav", "footer"}

# Elemente, die als eigenstaendiger Textblock ausgegeben werden, sobald sie
# keine weitere Struktur mehr enthalten.
STRUKTUR_TAGS = {"h1", "h2", "h3", "h4", "h5", "h6", "img", "p", "li", "div",
                 "section", "ul", "ol", "table", "tr", "article", "header",
                 "footer", "blockquote", "figure"}

UEBERSCHRIFTEN = {"h1", "h2", "h3", "h4", "h5", "h6"}

BUTTON_MUSTER = re.compile(r"(elementor-button|\bbtn\b|\bbutton\b|wp-block-button)", re.I)

BILD_ENDUNGEN = (".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".avif")

# Groessen-Suffix -BREITExHOEHE direkt vor der Dateiendung.
# "-scaled" und Zusaetze wie "-e1763214118889" bleiben ausdruecklich erhalten.
GROESSEN_SUFFIX = re.compile(r"-\d+x\d+(?=\.[A-Za-z0-9]+$)")

# Platzhalter des Cookie-Plugins
PLATZHALTER = re.compile(r"-350x100\.[A-Za-z0-9]+$")

UPLOADS_IN_TEXT = re.compile(
    r"https?://[^\s\"'()\\]+/wp-content/uploads/[^\s\"'()\\]+?"
    r"\.(?:jpg|jpeg|png|gif|webp|svg|avif)",
    re.I,
)


# --------------------------------------------------------------------------
# Zustand
# --------------------------------------------------------------------------

session = requests.Session()
session.headers.update({"User-Agent": USER_AGENT, "Accept-Language": "de-DE,de;q=0.9"})

fehlgeschlagen: list[tuple[str, str]] = []   # (URL, Grund)
link_cache: dict[str, str] = {}              # URL -> "ok" / "HTTP 404" / ...
belegte_dateien: dict[str, str] = {}         # Dateipfad -> Original-URL


def notiere_fehler(url: str, grund: str) -> None:
    fehlgeschlagen.append((url, grund))
    print(f"    ! FEHLER {url} — {grund}")


# --------------------------------------------------------------------------
# Laden mit Timeout und einem Wiederholungsversuch
# --------------------------------------------------------------------------

def hole(url: str, binaer: bool = False):
    """Laedt eine URL. Gibt (inhalt, None) oder (None, grund) zurueck."""
    letzter_grund = "unbekannt"
    for versuch in range(WIEDERHOLUNGEN + 1):
        try:
            antwort = session.get(url, timeout=TIMEOUT)
            if antwort.status_code == 200:
                time.sleep(PAUSE)
                return (antwort.content if binaer else antwort.text), None
            letzter_grund = f"HTTP {antwort.status_code}"
            if antwort.status_code in (404, 403, 410):
                # Dauerhafter Fehler — kein zweiter Versuch noetig.
                return None, letzter_grund
        except requests.RequestException as fehler:
            letzter_grund = f"{type(fehler).__name__}: {fehler}"
        if versuch < WIEDERHOLUNGEN:
            time.sleep(2)
    return None, letzter_grund


def pruefe_link(url: str) -> str:
    """Prueft eine Ziel-URL. Ergebnis wird zwischengespeichert."""
    if url in link_cache:
        return link_cache[url]
    ergebnis = "ok"
    try:
        antwort = session.head(url, timeout=TIMEOUT, allow_redirects=True)
        if antwort.status_code in (403, 405, 501):
            antwort = session.get(url, timeout=TIMEOUT, allow_redirects=True, stream=True)
            antwort.close()
        if antwort.status_code >= 400:
            ergebnis = f"HTTP {antwort.status_code}"
    except requests.RequestException as fehler:
        ergebnis = f"nicht erreichbar ({type(fehler).__name__})"
    link_cache[url] = ergebnis
    time.sleep(0.1)
    return ergebnis


# --------------------------------------------------------------------------
# HTML-Hilfsfunktionen
# --------------------------------------------------------------------------

def klassen_text(tag: Tag) -> str:
    teile = []
    klasse = tag.get("class")
    if klasse:
        teile.append(" ".join(klasse) if isinstance(klasse, list) else str(klasse))
    for attribut in ("id", "role", "aria-label"):
        wert = tag.get(attribut)
        if wert:
            teile.append(str(wert))
    return " ".join(teile)


def ist_zu_ueberspringen(tag: Tag) -> bool:
    if tag.name in SKIP_TAGS:
        return True
    if str(tag.get("data-elementor-type", "")).lower() in SKIP_ELEMENTOR_TYP:
        return True
    if tag.get("role") == "navigation":
        return True
    return bool(SKIP_MUSTER.search(klassen_text(tag)))


def ist_button(tag: Tag) -> bool:
    if tag.name == "button":
        return True
    if tag.name != "a":
        return False
    if tag.get("role") == "button":
        return True
    if BUTTON_MUSTER.search(klassen_text(tag)):
        return True
    eltern = tag.parent
    if isinstance(eltern, Tag) and BUTTON_MUSTER.search(klassen_text(eltern)):
        return True
    return False


def hat_struktur(tag: Tag) -> bool:
    """True, wenn das Element weitere Bloecke enthaelt und aufgeklappt werden muss."""
    for kind in tag.find_all(True, recursive=True):
        if kind.name in STRUKTUR_TAGS or ist_button(kind):
            return True
    return False


def text_von(tag: Tag) -> str:
    return re.sub(r"\s+", " ", tag.get_text(" ", strip=True)).strip()


def inhalts_wurzel(suppe: BeautifulSoup) -> Tag:
    """Findet den Container mit dem eigentlichen Seiteninhalt."""
    kandidaten = [
        lambda: suppe.select_one('div[data-elementor-type="wp-page"]'),
        lambda: suppe.select_one('div[data-elementor-type="wp-post"]'),
        lambda: suppe.select_one("div.elementor-location-single"),
        lambda: suppe.select_one("main"),
        lambda: suppe.select_one("article"),
        lambda: suppe.select_one("div.elementor"),
        lambda: suppe.body,
    ]
    for kandidat in kandidaten:
        treffer = kandidat()
        if treffer is not None:
            return treffer
    return suppe


# --------------------------------------------------------------------------
# Schritt 2: Textfassung erzeugen
# --------------------------------------------------------------------------

def sammle_bloecke(knoten, ausgabe: list) -> None:
    """Laeuft den Baum in Dokumentreihenfolge ab und sammelt Bloecke."""
    for kind in list(knoten.children):
        if isinstance(kind, NavigableString):
            text = re.sub(r"\s+", " ", str(kind)).strip()
            if text:
                ausgabe.append(("text", text))
            continue
        if not isinstance(kind, Tag):
            continue
        if ist_zu_ueberspringen(kind):
            continue

        name = kind.name.lower()

        if name == "img":
            quelle = (kind.get("src") or kind.get("data-src")
                      or kind.get("data-lazy-src") or "")
            ausgabe.append(("bild", quelle, kind.get("alt", "") or ""))
            continue

        if name in UEBERSCHRIFTEN:
            text = text_von(kind)
            if text:
                ausgabe.append(("ueberschrift", int(name[1]), text))
            continue

        if ist_button(kind):
            beschriftung = text_von(kind)
            ziel = kind.get("href", "") or ""
            if beschriftung or ziel:
                ausgabe.append(("button", beschriftung, ziel))
            continue

        if name in ("br", "hr"):
            continue

        if hat_struktur(kind):
            sammle_bloecke(kind, ausgabe)
        else:
            text = text_von(kind)
            if text:
                ausgabe.append(("liste" if name == "li" else "text", text))


def bloecke_der_seite(suppe: BeautifulSoup) -> list:
    bloecke: list = []
    sammle_bloecke(inhalts_wurzel(suppe), bloecke)

    # Direkt aufeinanderfolgende Wiederholungen entfernen (Elementor verschachtelt
    # denselben Text gelegentlich mehrfach).
    bereinigt: list = []
    for block in bloecke:
        if bereinigt and bereinigt[-1] == block:
            continue
        bereinigt.append(block)
    return bereinigt


def schreibe_textfassung(pfad: Path, alt_url: str, titel: str, bloecke: list) -> None:
    zeilen = [f"<!-- Quelle: {alt_url} -->", ""]
    if titel:
        zeilen += [f"<!-- Seitentitel: {titel} -->", ""]

    for block in bloecke:
        art = block[0]
        if art == "ueberschrift":
            ebene = min(block[1], 6)
            zeilen += ["", "#" * ebene + " " + block[2], ""]
        elif art == "button":
            ziel = block[2] or "(kein Ziel)"
            zeilen.append(f"[BUTTON] {block[1]} -> {ziel}")
        elif art == "bild":
            dateiname = dateiname_aus_url(block[1]) if block[1] else "(ohne Quelle)"
            alt_text = block[2].strip() or "(kein alt-Text)"
            zeilen.append(f"[BILD] {dateiname} — {alt_text}")
        elif art == "liste":
            zeilen.append(f"- {block[1]}")
        else:
            zeilen += [block[1], ""]

    text = "\n".join(zeilen)
    text = re.sub(r"\n{3,}", "\n\n", text).strip() + "\n"
    pfad.parent.mkdir(parents=True, exist_ok=True)
    pfad.write_text(text, encoding="utf-8")


# --------------------------------------------------------------------------
# Schritt 3: Bilder
# --------------------------------------------------------------------------

def bereinige_url(url: str) -> str:
    """Entfernt nur das Groessen-Suffix -BREITExHOEHE vor der Dateiendung."""
    teile = urllib.parse.urlsplit(url)
    pfad = GROESSEN_SUFFIX.sub("", teile.path)
    return urllib.parse.urlunsplit((teile.scheme, teile.netloc, pfad, "", ""))


def dateiname_aus_url(url: str) -> str:
    pfad = urllib.parse.urlsplit(bereinige_url(url)).path
    return urllib.parse.unquote(pfad.rsplit("/", 1)[-1])


def lies_srcset(wert: str) -> list[tuple[str, int]]:
    varianten = []
    for treffer in re.finditer(r"(\S+)\s+(\d+)w", wert or ""):
        varianten.append((treffer.group(1), int(treffer.group(2))))
    return varianten


class Bild:
    def __init__(self, url: str, alt: str, seite: str, ordner: str):
        self.url = url                      # bereinigte URL
        self.alt = alt
        self.seite = seite
        self.ordner = ordner
        self.varianten: list[tuple[str, int]] = []
        self.dateiname = dateiname_aus_url(url)
        self.pfad: Path | None = None
        self.geladen_von = ""
        self.breite = 0
        self.hoehe = 0


def ist_uploads_bild(url: str) -> bool:
    if "/wp-content/uploads/" not in url:
        return False
    pfad = urllib.parse.urlsplit(url).path.lower()
    return pfad.endswith(BILD_ENDUNGEN)


def sammle_bilder(suppe: BeautifulSoup, roh_html: str, seite: str, ordner: str,
                  bilder: dict[str, Bild]) -> int:
    """Sammelt alle /wp-content/uploads/-Bilder einer Seite. Gibt die Anzahl
    der auf dieser Seite gefundenen Bilder zurueck."""
    auf_seite = set()

    def merke(roh_url: str, alt: str) -> None:
        if not roh_url:
            return
        voll = urllib.parse.urljoin(BASIS, roh_url.strip())
        if not ist_uploads_bild(voll):
            return
        if PLATZHALTER.search(urllib.parse.urlsplit(voll).path):
            return  # Platzhalter des Cookie-Plugins
        sauber = bereinige_url(voll)
        auf_seite.add(sauber)
        vorhanden = bilder.get(sauber)
        if vorhanden is None:
            vorhanden = Bild(sauber, alt.strip(), seite, ordner)
            bilder[sauber] = vorhanden
        elif not vorhanden.alt and alt.strip():
            vorhanden.alt = alt.strip()
        # Die urspruengliche URL zaehlt selbst als Variante (Fallback).
        if voll != sauber:
            vorhanden.varianten.append((voll, 0))

    for tag in suppe.find_all(["img", "source"]):
        alt = tag.get("alt", "") or ""
        for attribut in ("src", "data-src", "data-lazy-src", "data-large_image"):
            merke(tag.get(attribut) or "", alt)
        for attribut in ("srcset", "data-srcset", "data-lazy-srcset"):
            for variante_url, breite in lies_srcset(tag.get(attribut) or ""):
                voll = urllib.parse.urljoin(BASIS, variante_url)
                if not ist_uploads_bild(voll):
                    continue
                if PLATZHALTER.search(urllib.parse.urlsplit(voll).path):
                    continue
                sauber = bereinige_url(voll)
                merke(variante_url, alt)
                if sauber in bilder:
                    bilder[sauber].varianten.append((voll, breite))

    # Hintergrundbilder aus style-Attributen, <style>-Bloecken und Elementor-JSON
    for weitere in UPLOADS_IN_TEXT.findall(roh_html):
        merke(weitere, "")

    return len(auf_seite)


def lade_bild(bild: Bild) -> bool:
    """Laedt ein Bild. Bei 404 wird die groesste srcset-Variante versucht."""
    versuche = [bild.url]
    for variante_url, _ in sorted(bild.varianten, key=lambda v: -v[1]):
        if variante_url not in versuche:
            versuche.append(variante_url)

    for kandidat in versuche:
        inhalt, grund = hole(kandidat, binaer=True)
        if inhalt:
            ordner = BILD_DIR / bild.ordner
            ordner.mkdir(parents=True, exist_ok=True)
            ziel = ordner / bild.dateiname
            # Namenskollision zweier verschiedener Original-URLs abfangen
            zaehler = 2
            while belegte_dateien.get(str(ziel), bild.url) != bild.url:
                stamm, punkt, endung = bild.dateiname.rpartition(".")
                ziel = ordner / f"{stamm}-{zaehler}{punkt}{endung}"
                zaehler += 1
            belegte_dateien[str(ziel)] = bild.url
            ziel.write_bytes(inhalt)
            bild.pfad = ziel
            bild.dateiname = ziel.name
            bild.geladen_von = kandidat
            return True
        if kandidat == versuche[-1]:
            notiere_fehler(kandidat, f"Bild nicht ladbar ({grund})")
    return False


def miss_bild(bild: Bild) -> None:
    if Image is None or bild.pfad is None:
        return
    if bild.pfad.suffix.lower() == ".svg":
        return
    try:
        with Image.open(bild.pfad) as datei:
            bild.breite, bild.hoehe = datei.size
    except Exception as fehler:  # noqa: BLE001 - jedes Format-Problem ist tolerierbar
        print(f"    ! Groesse nicht lesbar: {bild.pfad.name} ({fehler})")


# --------------------------------------------------------------------------
# Schritt 4: Inventare
# --------------------------------------------------------------------------

def tabellen_zelle(wert: str) -> str:
    return (wert or "").replace("|", "\\|").replace("\n", " ").strip() or "—"


def schreibe_bild_inventar(bilder: list[Bild]) -> list[Bild]:
    zeilen = [
        "# Bild-Inventar der alten Seite",
        "",
        "Automatisch erzeugt von `scripts/archiv-holen.py`.",
        "Pixelmasse sind aus der heruntergeladenen Datei ausgelesen (Pillow).",
        "",
        "| Repo-Pfad | Original-URL | Breite x Hoehe | alt-Text | Herkunftsseite | Warnung |",
        "| --- | --- | --- | --- | --- | --- |",
    ]
    gewarnt = []
    for bild in sorted(bilder, key=lambda b: (b.ordner, b.dateiname)):
        if bild.pfad is None:
            continue
        repo_pfad = bild.pfad.relative_to(ROOT).as_posix()
        if bild.breite and bild.hoehe:
            masse = f"{bild.breite} x {bild.hoehe}"
            if max(bild.breite, bild.hoehe) < WARN_KANTE:
                warnung = f"zu klein (laengste Kante {max(bild.breite, bild.hoehe)} px)"
                gewarnt.append(bild)
            else:
                warnung = ""
        else:
            masse = "unbekannt"
            warnung = "Masse nicht lesbar"
        zeilen.append(
            f"| `{repo_pfad}` | {tabellen_zelle(bild.geladen_von or bild.url)} "
            f"| {masse} | {tabellen_zelle(bild.alt)} | {bild.seite} "
            f"| {tabellen_zelle(warnung)} |"
        )

    (INVENTAR_DIR / "bild-inventar.md").write_text("\n".join(zeilen) + "\n", encoding="utf-8")
    return gewarnt


def bewerte_ziel(url: str) -> tuple[str, str]:
    """Gibt (aufbereitete URL, Markierung) zurueck."""
    if not url:
        return "(kein Ziel)", "**kein Ziel**"
    if url.startswith(("mailto:", "tel:")):
        return url, ""
    if url.startswith("#"):
        return url, "Sprungmarke"
    voll = urllib.parse.urljoin(BASIS, url)
    host = urllib.parse.urlsplit(voll).netloc.lower().removeprefix("www.")
    markierungen = []
    if host and host != "molloybusiness.com":
        markierungen.append("**EXTERN**")
    zustand = pruefe_link(voll)
    if zustand != "ok":
        markierungen.append(f"**{zustand}**")
    return voll, " ".join(markierungen)


def schreibe_seiten_inventar(seiten_daten: list[dict]) -> list[str]:
    zeilen = [
        "# Seiten-Inventar der alten Seite",
        "",
        "Automatisch erzeugt von `scripts/archiv-holen.py`.",
        "Ziel-URLs sind markiert, wenn sie auf eine fremde Domain zeigen (**EXTERN**)",
        "oder nicht erreichbar sind (**HTTP 404** usw.).",
        "",
    ]
    auffaellig: list[str] = []

    for daten in seiten_daten:
        zeilen += [
            f"## {daten['name']}",
            "",
            f"- **Alt-URL:** {daten['url']}",
            f"- **Titel:** {daten['titel'] or '—'}",
            f"- **Meta-Description:** {daten['beschreibung'] or '—'}",
            f"- **H1:** {daten['h1'] or '—'}",
            f"- **Anzahl Bilder:** {daten['bildanzahl']}",
            f"- **Archiviert als:** `{daten['html_pfad']}` / `{daten['text_pfad']}`",
            "",
            "### Ueberschriften in Dokumentreihenfolge",
            "",
        ]
        if daten["ueberschriften"]:
            for ebene, text in daten["ueberschriften"]:
                zeilen.append(f"{'  ' * (ebene - 1)}- H{ebene}: {text}")
        else:
            zeilen.append("- (keine)")
        zeilen += ["", "### Buttons", ""]

        if daten["buttons"]:
            zeilen += ["| Beschriftung | Ziel-URL | Markierung |",
                       "| --- | --- | --- |"]
            for beschriftung, ziel in daten["buttons"]:
                voll, markierung = bewerte_ziel(ziel)
                zeilen.append(
                    f"| {tabellen_zelle(beschriftung)} | {tabellen_zelle(voll)} "
                    f"| {markierung or '—'} |"
                )
                if markierung:
                    auffaellig.append(
                        f"{daten['name']}: \"{beschriftung or '(ohne Text)'}\" "
                        f"-> {voll} [{markierung.replace('**', '')}]"
                    )
        else:
            zeilen.append("- (keine)")
        zeilen.append("")

    (INVENTAR_DIR / "seiten-inventar.md").write_text("\n".join(zeilen) + "\n", encoding="utf-8")
    return auffaellig


# --------------------------------------------------------------------------
# Ablauf
# --------------------------------------------------------------------------

def meta_beschreibung(suppe: BeautifulSoup) -> str:
    for wahl in ('meta[name="description"]', 'meta[property="og:description"]'):
        tag = suppe.select_one(wahl)
        if tag and tag.get("content"):
            return re.sub(r"\s+", " ", tag["content"]).strip()
    return ""


def slugs_aus_sitemap() -> list[tuple[str, str]]:
    """Liest die Blog-URLs aus der post-sitemap.xml."""
    inhalt, grund = hole(SITEMAP)
    if inhalt is None:
        notiere_fehler(SITEMAP, f"Sitemap nicht ladbar ({grund})")
        return []
    try:
        baum = ElementTree.fromstring(inhalt.encode("utf-8"))
    except ElementTree.ParseError as fehler:
        notiere_fehler(SITEMAP, f"Sitemap nicht lesbar ({fehler})")
        return []

    eintraege = []
    for element in baum.iter():
        if not element.tag.endswith("}loc") and element.tag != "loc":
            continue
        url = (element.text or "").strip()
        if not url:
            continue
        slug = urllib.parse.urlsplit(url).path.strip("/").rsplit("/", 1)[-1]
        if slug:
            eintraege.append((url, slug))
    return eintraege


def verarbeite_seite(url: str, name: str, ordner: str, ist_blog: bool,
                     bilder: dict[str, Bild]) -> dict | None:
    print(f"  -> {url}")
    roh_html, grund = hole(url)
    if roh_html is None:
        notiere_fehler(url, f"Seite nicht ladbar ({grund})")
        return None

    unterordner = "blog/" if ist_blog else ""
    html_pfad = HTML_DIR / f"{unterordner}{name}.html"
    html_pfad.parent.mkdir(parents=True, exist_ok=True)
    html_pfad.write_text(roh_html, encoding="utf-8")

    suppe = BeautifulSoup(roh_html, "html.parser")
    titel = suppe.title.get_text(strip=True) if suppe.title else ""
    bloecke = bloecke_der_seite(suppe)

    text_pfad = TEXT_DIR / f"{unterordner}{name}.md"
    schreibe_textfassung(text_pfad, url, titel, bloecke)

    # Blogartikel liefern kein Bildmaterial — die Bilder sind bereits migriert.
    if ist_blog:
        bildanzahl = sum(1 for block in bloecke if block[0] == "bild")
    else:
        bildanzahl = sammle_bilder(suppe, roh_html, name, ordner, bilder)

    h1_tag = suppe.find("h1")
    return {
        "name": name,
        "url": url,
        "titel": titel,
        "beschreibung": meta_beschreibung(suppe),
        "h1": text_von(h1_tag) if h1_tag else "",
        "ueberschriften": [(b[1], b[2]) for b in bloecke if b[0] == "ueberschrift"],
        "buttons": [(b[1], b[2]) for b in bloecke if b[0] == "button"],
        "bildanzahl": bildanzahl,
        "html_pfad": html_pfad.relative_to(ROOT).as_posix(),
        "text_pfad": text_pfad.relative_to(ROOT).as_posix(),
    }


def main() -> int:
    for verzeichnis in (HTML_DIR / "blog", TEXT_DIR / "blog", INVENTAR_DIR):
        verzeichnis.mkdir(parents=True, exist_ok=True)

    bilder: dict[str, Bild] = {}
    seiten_daten: list[dict] = []

    print("Schritt 1+2: Hauptseiten laden und Textfassung erzeugen")
    for pfad, name, ordner in SEITEN:
        daten = verarbeite_seite(urllib.parse.urljoin(BASIS, pfad), name, ordner,
                                 False, bilder)
        if daten:
            seiten_daten.append(daten)
    anzahl_seiten = len(seiten_daten)

    print("\nSchritt 1+2: Blogartikel aus der Sitemap laden")
    blog_eintraege = slugs_aus_sitemap()
    print(f"  {len(blog_eintraege)} URLs in der Sitemap gefunden")
    anzahl_blog = 0
    for url, slug in blog_eintraege:
        daten = verarbeite_seite(url, slug, "sonstige", True, bilder)
        if daten:
            seiten_daten.append(daten)
            anzahl_blog += 1

    print(f"\nSchritt 3: {len(bilder)} eindeutige Bilder laden")
    geladen: list[Bild] = []
    for bild in bilder.values():
        if lade_bild(bild):
            miss_bild(bild)
            geladen.append(bild)

    print("\nSchritt 4: Inventare schreiben")
    gewarnt = schreibe_bild_inventar(geladen)
    auffaellige_links = schreibe_seiten_inventar(seiten_daten)

    # ---------------------------------------------------------------- Bericht
    print("\n" + "=" * 70)
    print("ZUSAMMENFASSUNG")
    print("=" * 70)
    print(f"Seiten archiviert:      {anzahl_seiten} von {len(SEITEN)}")
    print(f"Blogartikel archiviert: {anzahl_blog} von {len(blog_eintraege)}")

    print("\nBilder je Zielordner:")
    for ordner in BILD_ORDNER:
        anzahl = sum(1 for bild in geladen if bild.ordner == ordner)
        print(f"  src/assets/images/{ordner}/ : {anzahl}")
    print(f"  gesamt geladen             : {len(geladen)}")
    print("  (src/assets/images/blog/ wurde nicht angefasst)")

    print(f"\nBilder mit Warnung (laengste Kante unter {WARN_KANTE} px): {len(gewarnt)}")
    for bild in gewarnt:
        print(f"  - {bild.pfad.relative_to(ROOT).as_posix()} "
              f"({bild.breite} x {bild.hoehe}) — Seite: {bild.seite}")
    if not gewarnt:
        print("  keine")

    print(f"\nNicht ladbare URLs: {len(fehlgeschlagen)}")
    for url, grund in fehlgeschlagen:
        print(f"  - {url} — {grund}")
    if not fehlgeschlagen:
        print("  keine")

    print(f"\nKaputte oder externe Button-Ziele: {len(auffaellige_links)}")
    for eintrag in auffaellige_links:
        print(f"  - {eintrag}")
    if not auffaellige_links:
        print("  keine")

    print("=" * 70)
    # Einzelne Fehlschlaege sind kein Grund, den Workflow rot zu faerben.
    return 0


if __name__ == "__main__":
    sys.exit(main())
