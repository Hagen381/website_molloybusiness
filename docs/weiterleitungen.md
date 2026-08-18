# Weiterleitungsliste für den Livegang (301)

Vollständige Liste aller alten WordPress-Adressen von molloybusiness.com und
ihrer neuen Ziele im Nachbau. Grundlage sind die beiden Sitemaps des Originals
(Seiten- und Beitrags-Sitemap), das Seiten-Inventar unter
`docs/original/seiten-inventar.md` und alle archivierten Seiten unter
`docs/original/html/`.

**Wozu das Ganze:** Die alten Adressen sind bei Google indexiert und werden von
den vorhandenen Pinterest-Pins verlinkt. Ohne 301-Weiterleitung laufen diese
Klicks nach dem Relaunch in einen 404 — der aufgebaute Traffic wäre weg.

**Wo das eingebaut wird:** Zielhosting ist SiteGround (Apache). Die fertige
Vorlage liegt in `docs/htaccess-vorlage.txt` und gehört in die `.htaccess` im
Wurzelverzeichnis der Domain. Diese Datei hier ist die Dokumentation dazu —
sie ist nirgends aktiv, sondern die Nachschlage- und Prüfliste.

**Regeln, die für die ganze Liste gelten:**

- Alle neuen Adressen enden auf einen Schrägstrich (`trailingSlash: true` in
  `next.config.ts`).
- Adressen, bei denen alt und neu identisch sind, bekommen **keine**
  Weiterleitung (sonst Endlosschleife). Sie stehen trotzdem in der Liste,
  damit nachvollziehbar ist, dass sie geprüft wurden.
- Keine Weiterleitung zeigt auf eine Adresse, die selbst weitergeleitet wird
  (keine Ketten).
- Einträge mit dem Hinweis **von mir ergänzt** standen nicht in der
  Aufgabenstellung, kamen aber im Archiv vor und würden sonst ins Leere laufen.

---

## 1. Seiten

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `/pinterest-marketing-angebote/` | `/angebote/` | Angebotsübersicht, neuer kürzerer Pfad |
| `/pinterest-account-aufbau-fuer-unternehmen/` | `/pinterest-account-aufbau/` | Leistungsseite, neuer kürzerer Pfad |
| `/pinterest-strategie-call-unternehmen/` | `/pinterest-strategie-call/` | Leistungsseite, neuer kürzerer Pfad |
| `/pinterest-audit-pinterest-account-analyse/` | `/pinterest-audit/` | Leistungsseite, neuer kürzerer Pfad |
| `/pinterest-marketing-workshops/` | `/angebote/` | Angebot entfällt, Seite war indexiert |
| `/pinterest-content-paket-unternehmen/` | `/angebote/` | Angebot entfällt, Seite war indexiert |
| `/ueber-pinterest-marketing-expertin/` | `/ueber-mich/` | Über-mich-Seite, neuer kürzerer Pfad |
| `/kontakt-pinterest-marketing/` | `/kontakt/` | Kontaktseite, neuer kürzerer Pfad |
| `/online-schulerpraktikum-innovativer-arbeitgeber/` | `/blog/online-schuelerpraktika/` | War eine eigene Seite, ist jetzt ein Blogartikel |
| `/cookie-richtlinie-eu/` | `/datenschutz/` | Seite entfällt, Inhalt steckt in der Datenschutzerklärung |
| `/pinterest-account-management/` | `/pinterest-account-management/` | **Unverändert — keine Weiterleitung nötig** |
| `/blog/` | `/blog/` | **Unverändert — keine Weiterleitung nötig** |
| `/impressum/` | `/impressum/` | **Unverändert — keine Weiterleitung nötig** |
| `/datenschutz/` | `/datenschutz/` | **Unverändert — keine Weiterleitung nötig** |
| `/` | `/` | **Unverändert — keine Weiterleitung nötig** |

→ **11 Weiterleitungen**, 4 unveränderte Seiten plus Startseite.

---

## 2. Blogartikel

Im Original lagen die Artikel **ohne** `/blog/`-Präfix direkt unter der Domain.
Im Nachbau liegen alle unter `/blog/`. Deshalb braucht jeder einzelne Artikel
eine Weiterleitung — auch die, deren Slug sich sonst nicht ändert.

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `/podcast-pinterest-marketing/` | `/blog/podcast-pinterest-marketing/` | Artikel jetzt unter `/blog/` |
| `/telegram-gruppe-pinterest-marketing-profis/` | `/blog/telegram-gruppe-pinterest-marketing-profis/` | Artikel jetzt unter `/blog/` |
| `/pinterest-mere-exposure-effekt/` | `/blog/pinterest-mere-exposure-effekt/` | Artikel jetzt unter `/blog/` |
| `/pinterest-openai-learnings/` | `/blog/pinterest-openai-learnings/` | Artikel jetzt unter `/blog/` |
| `/pinterest-predicts-report-2026/` | `/blog/pinterest-predicts-report-2026/` | Artikel jetzt unter `/blog/` |
| `/affiliatemarketing/` | `/blog/affiliate-marketing/` | Artikel jetzt unter `/blog/`, Slug lesbar gemacht |
| `/blogartikel-pinterest-marketing/` | `/blog/pinterest-marketing/` | Artikel jetzt unter `/blog/`, Präfix `blogartikel-` entfällt |
| `/formel-fuer-60-minuten-arbeitszeit/` | `/blog/formel-60-minuten-arbeitszeit/` | Artikel jetzt unter `/blog/`, Slug gekürzt |
| `/social-media-strategie-von-chatgptzumnachmachen/` | `/blog/social-media-strategie-chatgpt/` | Artikel jetzt unter `/blog/`, Slug gekürzt |
| `/warum-ich-einen-kunden-abgelehnt-habe/` | `/blog/kunden-abgelehnt/` | Artikel jetzt unter `/blog/`, Slug gekürzt |
| `/blogartikel-website-fuer-dein-business/` | `/blog/website-fuer-dein-business/` | Artikel jetzt unter `/blog/`, Präfix `blogartikel-` entfällt |
| `/10-dinge-im-online-business-zum-1-mal/` | `/blog/10-dinge-im-online-business/` | Artikel jetzt unter `/blog/`, Slug gekürzt |
| `/online-schuelerpraktika/` | `/blog/online-schuelerpraktika/` | Artikel jetzt unter `/blog/` |
| `/selbststaendigkeitundunsichtbarearbeit/` | `/blog/selbststaendigkeit-unsichtbare-arbeit/` | Artikel jetzt unter `/blog/`, Slug lesbar gemacht |
| `/blogartikel-online-business-vs-realitaet/` | `/blog/online-business-vs-realitaet/` | Artikel jetzt unter `/blog/`, Präfix `blogartikel-` entfällt |
| `/online-business-management-fuer-unternehmen/` | `/blog/online-business-management/` | Artikel jetzt unter `/blog/`, Slug gekürzt |
| `/blogartikl-15-geschenkideen-fuers-homeoffice/` | `/blog/geschenkideen-homeoffice/` | Artikel jetzt unter `/blog/`, Tippfehler `blogartikl-` entfällt |

→ **17 Weiterleitungen.**

---

## 3. Nicht migrierte Artikel

Diese drei Artikel werden nicht übernommen. Damit die alten Adressen nicht ins
Leere laufen, zeigen sie auf die Blog-Übersicht.

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `/blogartikel-1-jahr-in-thailand-leben/` | `/blog/` | Artikel wird nicht übernommen |
| `/fakelifeofinsta/` | `/blog/` | Artikel wird nicht übernommen |
| `/work-and-travel-mit-kindern-online-business/` | `/blog/` | Artikel wird nicht übernommen |

→ **3 Weiterleitungen.**

---

## 4. Sonderfälle aus den alten Fußzeilen-Links

Die alte Fußzeile enthielt Links, die von den offiziellen Adressen abwichen —
mal groß geschrieben, mal ohne Schrägstrich, einmal mit Tippfehler. Weil sie
über Jahre auf jeder Seite standen, können sie von Google erfasst und von außen
verlinkt sein.

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `/Datenschutz` | `/datenschutz/` | Fußzeilen-Link mit großem D |
| `/impressum` | `/impressum/` | Fußzeilen-Link ohne abschließenden Schrägstrich |
| `/zusammenarbeit` | `/kontakt/` | Fußzeilen-Link, Seite gab es nie — Ziel ist die Kontaktseite |
| `/zussammenarbeit` | `/kontakt/` | Fußzeilen-Link mit Tippfehler (doppeltes s) |
| `/angebote-pinterest-marketing/` | `/angebote/` | Ziel eines defekten Buttons auf der Angebotsübersicht (lief schon im Original in einen 404) |

→ **5 Weiterleitungen.**

---

## 5. Von mir ergänzt

Diese Adressen kommen im Archiv unter `docs/original/html/` vor, standen aber
nicht in der Aufgabenstellung. Ohne Weiterleitung würden sie nach dem Relaunch
einen 404 liefern.

### 5a. Kategorie-Archive

WordPress hatte die Kategorie-Basis entfernt, die Archive lagen also direkt
unter der Domain. Im Nachbau gibt es keine Kategorie-Archive.

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `/online-business/` | `/blog/` | Kategorie-Archiv, im Nachbau nicht vorhanden — **von mir ergänzt** |
| `/pinterest-marketing/` | `/blog/` | Kategorie-Archiv, im Nachbau nicht vorhanden — **von mir ergänzt** |
| `/privat/` | `/blog/` | Kategorie-Archiv, im Nachbau nicht vorhanden — **von mir ergänzt** |
| `/reisen/` | `/blog/` | Kategorie-Archiv, im Nachbau nicht vorhanden — **von mir ergänzt** |
| `/virtuelle-assistenz/` | `/blog/` | Kategorie-Archiv, im Nachbau nicht vorhanden — **von mir ergänzt** |

> **Achtung, leicht zu verwechseln:** Das alte Kategorie-Archiv
> `/pinterest-marketing/` zeigt auf `/blog/`, **nicht** auf den neuen Artikel
> `/blog/pinterest-marketing/`. Dieser Artikel ist der Nachfolger von
> `/blogartikel-pinterest-marketing/` (siehe Abschnitt 2), nicht der des
> Archivs.

### 5b. Schlagwort-Archive

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `/tag/online-business/` | `/blog/` | Schlagwort-Archiv, im Nachbau nicht vorhanden — **von mir ergänzt** |
| `/tag/online-schuelerpraktika/` | `/blog/` | Schlagwort-Archiv, im Nachbau nicht vorhanden — **von mir ergänzt** |
| `/tag/privat/` | `/blog/` | Schlagwort-Archiv, im Nachbau nicht vorhanden — **von mir ergänzt** |
| `/tag/selbststaendigkeit/` | `/blog/` | Schlagwort-Archiv, im Nachbau nicht vorhanden — **von mir ergänzt** |
| `/tag/website/` | `/blog/` | Schlagwort-Archiv, im Nachbau nicht vorhanden — **von mir ergänzt** |

Die `.htaccess` fängt `/tag/` komplett mit einer Regel ab, damit auch
Schlagwörter erwischt werden, die im Archiv nicht auftauchen.

### 5c. Autoren-Archive und Blättern

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `/author/molloy/` | `/blog/` | Autoren-Archiv, im Nachbau nicht vorhanden — **von mir ergänzt** |
| `/author/britta/` | `/blog/` | Autoren-Archiv, im Nachbau nicht vorhanden — **von mir ergänzt** |

Die `.htaccess` fängt `/author/` komplett ab, nicht nur die zwei gefundenen
Adressen.

**Für `/blog/<Zahl>/` gibt es bewusst keine Weiterleitung mehr.** Hier stand
früher eine Regel `^blog/[0-9]+/?$ → /blog/`, weil der Nachbau alle Artikel auf
einer Seite zeigte. Inzwischen blättert die Artikelliste wie das Original
(sechs Artikel je Seite), und `/blog/2/` sowie `/blog/3/` existieren als eigene
Seiten. Die Regel würde sie per 301 auf `/blog/` umleiten und damit
unerreichbar machen — sie ist deshalb aus dieser Liste und aus
`htaccess-vorlage.txt` entfernt. Die alten Blätter-Adressen zeigen jetzt auf
die gleichnamigen neuen Seiten und brauchen keine Umleitung.

### 5d. RSS-Feeds

Der Nachbau hat keinen RSS-Feed. Alle alten Feed-Adressen laufen sonst leer.

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `/feed/` | `/blog/` | Haupt-Feed, im Nachbau nicht vorhanden — **von mir ergänzt** |
| `/comments/feed/` | `/blog/` | Kommentar-Feed, im Nachbau nicht vorhanden — **von mir ergänzt** |
| `<beliebiger Pfad>/feed/` | `/blog/` | Artikel-Feeds (20 Stück im Archiv), eine Sammelregel — **von mir ergänzt** |

### 5e. Alte Sitemaps

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `/sitemap_index.xml` | `/sitemap.xml` | Yoast-Sitemap-Index, neuer Nachbau hat eine einzelne Sitemap — **von mir ergänzt** |
| `/page-sitemap.xml` | `/sitemap.xml` | Seiten-Sitemap des Originals — **von mir ergänzt** |
| `/post-sitemap.xml` | `/sitemap.xml` | Beitrags-Sitemap des Originals — **von mir ergänzt** |

### 5f. Sonstiges

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `/ueber-pinterest-marketing-expertin/l` | `/ueber-mich/` | Tippfehler im „rüber hüpfen"-Button auf der Startseite (Original lieferte 404) — **von mir ergänzt** |
| `/pinterest-account-management` | `/pinterest-account-management/` | Link ohne Schrägstrich im Archiv; Ziel ist die gleichnamige neue Seite — **von mir ergänzt** |
| `/blog` | `/blog/` | Schrägstrich ergänzen — **von mir ergänzt** |
| `/datenschutz` | `/datenschutz/` | Schrägstrich ergänzen — **von mir ergänzt** |

Für alle anderen Alt-Adressen ist die Variante ohne Schrägstrich in der
`.htaccess` bereits mit abgedeckt (`/?$` am Ende jeder Regel) — zum Beispiel
`/warum-ich-einen-kunden-abgelehnt-habe`, das im Archiv ohne Schrägstrich
vorkommt.

→ **21 Einzeleinträge plus 4 Sammelregeln** (`/tag/`, `/author/`,
`/blog/<Zahl>/`, `*/feed/`).

---

## Prüfergebnis

**Existieren alle Zieladressen?** Ja. Jede in dieser Liste genannte neue
Adresse ist im Repo sowohl als Ordner unter `src/app/` als auch als Eintrag in
`sitePages` (`src/lib/site-config.ts`) vorhanden — 28 Routen, 28 Einträge,
deckungsgleich. Einzige Ausnahme ist `/sitemap.xml`, das von
`src/app/sitemap.ts` erzeugt wird und deshalb bewusst nicht in `sitePages`
steht.

**Gibt es Weiterleitungsketten?** Nein. Geprüft wurde, ob eine Zieladresse
selbst als Alt-Adresse in der Liste steht. Die Zieladressen sind `/angebote/`,
`/pinterest-account-aufbau/`, `/pinterest-strategie-call/`,
`/pinterest-audit/`, `/pinterest-account-management/`, `/ueber-mich/`,
`/kontakt/`, `/datenschutz/`, `/impressum/`, `/blog/`, die 17
Blogartikel-Adressen und `/sitemap.xml` — keine davon wird weitergeleitet.

Die einzige Stelle, an der eine Kette entstehen könnte, sind die vier Seiten,
deren Adresse sich nicht ändert (`/pinterest-account-management/`, `/blog/`,
`/impressum/`, `/datenschutz/`). Für sie ist in der `.htaccess` bewusst
**keine** Regel auf sich selbst gesetzt; dort greift nur die Variante ohne
Schrägstrich (`^impressum$` statt `^impressum/?$`).

**Adressen aus dem Archiv ohne Weiterleitung:** Ausgelassen sind nur die
technischen WordPress-Pfade, die es im Nachbau nicht mehr gibt und die auch
niemand aufruft — `/wp-content/…`, `/wp-includes/…`, `/wp-json/…`,
`/xmlrpc.php`. Die will man ausdrücklich **nicht** weiterleiten: eine
Weiterleitung würde alte Bild-URLs auf HTML-Seiten schicken, statt sie sauber
mit 404 zu beantworten.

**Nicht im Archiv gefunden:** `/online-schulerpraktikum-innovativer-arbeitgeber/`
taucht in keiner der archivierten HTML-Dateien auf (das Archiv enthält nur die
elf Hauptseiten und die zwanzig Blogartikel). Die Adresse stammt aus der
Vorgabe und ist übernommen worden — sie schadet auch dann nicht, wenn es sie
nie gab.

---

## Nach dem Livegang prüfen

1. Stichprobe mit `curl -I https://molloybusiness.com/<alte-adresse>` — es muss
   `301` und ein `Location:` auf die neue Adresse kommen, **nicht** `302`.
2. Bei drei bis vier Adressen zweimal hintereinander folgen
   (`curl -IL`) — es darf immer nur **eine** Weiterleitung nötig sein.
3. In der Google Search Console die neue Sitemap
   (`https://molloybusiness.com/sitemap.xml`) einreichen und die alte
   (`sitemap_index.xml`) entfernen.
4. Ein paar Pinterest-Pins anklicken und schauen, ob sie auf der richtigen
   neuen Seite landen.
