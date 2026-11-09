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

Die alte WordPress-Blätterung hatte immer `page` im Pfad und wird von einer
Sammelregel abgefangen (siehe Abschnitt 6).

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

Die Sammelregel wurde am 07.09.2026 auf die Feed-Spielarten von WordPress
erweitert (`/feed/atom/`, `/feed/rss2/` …) — siehe Abschnitt 6.

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

→ **21 Einzeleinträge plus 3 Sammelregeln** (`/tag/`, `/author/`, `*/feed…`).
Die früher hier mitgezählte Regel für `/blog/<Zahl>/` gibt es nicht mehr (siehe
5c); die Sammelregel für die alte Blätterung steht in Abschnitt 6.

---

## 6. Nachtrag aus dem Search-Console-Bericht vom 07.09.2026

Alle Einträge dieses Abschnitts stammen aus einem Bericht der Google Search
Console vom **07.09.2026**: Google meldete für diese alten Adressen einen 404.
Sie waren in den Abschnitten 1 bis 5 nicht enthalten, sind aber noch im Index
bzw. von außen verlinkt.

### 6a. Einzelne Adressen

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `/ueber-juliette-oppel/` | `/ueber-mich/` | Ältere Über-mich-Seite unter dem Klarnamen — **Search Console 07.09.2026** |
| `/beratung-online-selbststaendigkeit/` | `/angebote/` | Eingestelltes Beratungsangebot, Seite war indexiert — **Search Console 07.09.2026** |
| `/audio-blog-erstellen/` | `/blog/` | Entfallener Blogartikel, wird nicht übernommen — **Search Console 07.09.2026** |

### 6b. Alte Blätterung (Sammelregel)

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `<beliebiger Pfad>/page/<Zahl>/` | `/blog/` | Blätterung des alten WordPress-Blogs und der Kategorie-Archive — **Search Console 07.09.2026** |

Gemeldet wurden `/blog/page/2/`, `/online-business/page/2/`, `/reisen/page/2/`
und `/pinterest-marketing/page/2/`. Statt vier Einzelzeilen fängt eine
Sammelregel alle ab:

```
RewriteRule ^(.+/)?page/[0-9]+/?$   /blog/ [R=301,L]
```

> **Wichtig:** Die Regel verlangt das Wort `page` im Pfad. Die Blätterung des
> Nachbaus läuft über `/blog/2/` und `/blog/3/` **ohne** `page` und wird von
> ihr deshalb nicht erfasst — diese beiden Seiten bleiben normal erreichbar
> (siehe 5c). Das ist beim Nachprüfen der wichtigste Punkt.

### 6c. Feeds (bestehende Sammelregel erweitert)

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `<beliebiger Pfad>/feed/<Spielart>/` | `/blog/` | `/feed/atom/`, `/feed/rss2/` usw. — **Search Console 07.09.2026** |

Die bisherige Regel endete auf `feed/?$` und traf damit nur `/feed/` selbst.
Die Feed-Spielarten von WordPress hängen aber noch ein Segment an. Deshalb:

```
vorher:  RewriteRule ^(.+/)?feed/?$      /blog/ [R=301,L]
nachher: RewriteRule ^(.+/)?feed(/.*)?$  /blog/ [R=301,L]
```

Das `(/.*)?` greift nur nach einem Schrägstrich hinter `feed`. Adressen wie
`/newsfeed/` oder `/blog/feedback/` werden dadurch **nicht** erfasst.

→ **3 Einzelweiterleitungen, 1 neue Sammelregel, 1 erweiterte Sammelregel.**

---

## 7. Nachtrag aus der Search-Console-Meldung vom 09.11.2026

Google meldete am **09.11.2026** „Some fixes failed for Page indexing issues"
für die Property `https://molloybusiness.com/`: Die zuvor angeforderte
Überprüfung der Korrektur für **„Nicht gefunden (404)"** ist fehlgeschlagen,
es seien weiterhin Seiten betroffen.

### 7a. Was die Live-Prüfung ergeben hat

Geprüft wurden am 09.11.2026 alle 86 Alt-Adressen aus dem Archiv
(`docs/original/html/`) direkt gegen die Live-Seite. Ergebnis: **jede einzelne
antwortet mit 301 auf das richtige Ziel** oder mit 200, die `.htaccess` ist
also aktiv und vollständig. `robots.txt` und `sitemap.xml` (30 Adressen) sind
ebenfalls in Ordnung.

Mit 404 antworten live nur noch:

| Adresse | Bewertung |
| --- | --- |
| `/wp-content/…`, `/wp-includes/…`, `/wp-json/…`, `/xmlrpc.php`, `/wp-login.php`, `/wp-admin/` | **Richtig so, siehe unten** |
| `/category/<name>/` | Lücke — mit 7b geschlossen |
| `/2023/`, `/2023/05/` … | Lücke — mit 7b geschlossen |

**Warum die Überprüfung trotzdem fehlschlagen kann:** Die technischen
WordPress-Pfade werden absichtlich nicht weitergeleitet (Begründung im
Abschnitt „Adressen aus dem Archiv ohne Weiterleitung"). Sie antworten dauerhaft
mit 404 — korrekt, aber in der Search Console zählen sie weiter als „betroffen".
Waren sie beim Klick auf „Korrektur überprüfen" in der Liste, **kann** die
Überprüfung gar nicht gelingen, ohne dass etwas kaputt wäre. Diese Adressen
gehören in der Search Console nicht weitergeleitet, sondern ausgelassen.

### 7b. Zwei vorsorgliche Sammelregeln

Beide Muster gab es im Archiv nicht als Link, sie sind aber
WordPress-Standard und können deshalb im Google-Index stehen:

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `/category/<name>/` | `/blog/` | Kategorie-Archive in der Standardschreibweise mit Präfix — **vorsorglich 09.11.2026** |
| `/<Jahr>/`, `/<Jahr>/<Monat>/`, `/<Jahr>/<Monat>/<Tag>/` | `/blog/` | Datums-Archive, die WordPress automatisch anlegt — **vorsorglich 09.11.2026** |

```
RewriteRule ^category/                      /blog/ [R=301,L]
RewriteRule ^[0-9]{4}(/[0-9]{2}){0,2}/?$    /blog/ [R=301,L]
```

> **Geprüft:** Die Datumsregel trifft nur Pfade, die ausschließlich aus Ziffern
> bestehen. Alle 30 Adressen der aktuellen Sitemap wurden gegen den kompletten
> Regelsatz getestet — **keine** davon wird von einer Regel erfasst, die
> Blätterung `/blog/2/` und `/blog/3/` eingeschlossen.

→ **2 neue Sammelregeln**, keine bestehende Zeile verändert.

### 7c. Stand der offenen Frage

Beim Schreiben von 7a/7b war die konkrete Liste der betroffenen Adressen noch
nicht bekannt — 7b war damit eine begründete Vermutung. Die Liste wurde
**noch am 09.11.2026** in der Search Console eingesehen; sie steht in 7d.

Ergebnis für 7b: Weder `/category/…` noch ein Datums-Archiv stand im Bericht.
Die beiden Sammelregeln bleiben trotzdem bestehen — sie kosten nichts, können
keine echte Seite erfassen (gegengeprüft, siehe 7b) und fangen die Muster ab,
falls Google sie später doch meldet. Sie sind damit Vorsorge, nicht Reparatur.

### 7d. Der tatsächliche Bericht (eingesehen am 09.11.2026)

Der 404-Bericht wurde in der Search Console direkt eingesehen. Stand des
Berichts: 06.11.2026, jüngster Crawl 02.11.2026. Die Validierung lief vom
07.09.2026 bis 07.11.2026 und ist fehlgeschlagen. **7 Adressen** waren
betroffen:

| Adresse | zuletzt gecrawlt | Live-Status am 09.11.2026 | Bewertung |
| --- | --- | --- | --- |
| `/wp-includes/js/wp-emoji-release.min.js?ver=7.0.4` | 02.11.2026 | 404 | **Richtig so** — WordPress-Innereien |
| `/wp-content/themes/oceanwp/*` | 20.08.2026 | 403 | **Richtig so** — WordPress-Innereien |
| `/ueber-juliette-oppel/` | 01.09.2026 | 301 → `/ueber-mich/` | Erledigt durch Abschnitt 6a |
| `/audio-blog-erstellen/` | 30.08.2026 | 301 → `/blog/` | Erledigt durch Abschnitt 6a |
| `/beratung-online-selbststaendigkeit/` | 20.08.2026 | 301 → `/angebote/` | Erledigt durch Abschnitt 6a |
| `/zussammenarbeit` | 19.07.2026 | 301 → `/kontakt/` | Erledigt durch Abschnitt 4 |
| `/online-business-managerin/` | 02.11.2026 | **404** | **Echte Lücke** — mit 7e geschlossen |

**Warum die Validierung fehlschlug:** Vier der sieben Adressen wurden zuletzt
*vor* dem Nachtrag vom 07.09.2026 gecrawlt — ihre Einträge sind veralteter
Berichtsstand, keine echten Fehler. Übrig bleiben die zwei WordPress-Pfade,
die absichtlich mit 404 antworten und das deshalb dauerhaft tun werden, sowie
die eine echte Lücke.

> **Folgerung für die Zukunft:** Eine Validierung dieses Berichts kann nicht
> gelingen, solange die WordPress-Innereien darin stehen — unabhängig davon,
> wie vollständig die Weiterleitungen sind. Das ist kein Mangel. Die
> veralteten Einträge verschwinden von selbst, sobald Google sie neu crawlt.

### 7e. Die geschlossene Lücke

| Alt-URL | Neue URL | Grund |
| --- | --- | --- |
| `/online-business-managerin/` | `/angebote/` | Eigene Seite zum früheren Online-Business-Management (klassische VA-Leistung). Im Archiv nicht enthalten, aber indexiert — **Search Console 09.11.2026** |

```
RewriteRule ^online-business-managerin/?$   /angebote/ [R=301,L]
```

Seit dem Update 11/2025 liegt der Fokus voll auf Pinterest-Marketing, das
Angebot entfällt — deshalb dasselbe Ziel wie bei den anderen eingestellten
Angeboten (`/pinterest-marketing-workshops/`, `/pinterest-content-paket-unternehmen/`,
`/beratung-online-selbststaendigkeit/`).

> **Abgrenzung geprüft:** Die Regel kollidiert nicht mit dem Kategorie-Archiv
> `^online-business/?$` → `/blog/` (das verlangt das Wortende direkt nach
> `online-business`) und nicht mit dem Blogartikel
> `/blog/online-business-management/`, der unberührt bleibt.

### 7f. Weiterer Befund: alte Sitemap noch eingereicht

In der Search Console ist neben `/sitemap.xml` (eingereicht 24.08.2026,
zuletzt gelesen 05.11.2026, „Success", 30 Seiten) weiterhin die alte
`/sitemap_index.xml` eingetragen (eingereicht 15.11.2025, zuletzt gelesen
01.11.2026, ebenfalls „Success", 30 Seiten). Beide melden dieselben 30 Seiten,
weil die alte Adresse per 301 auf die neue zeigt (Regel in Teil 5). Schaden
richtet das keinen an; der Eintrag kann in der Search Console entfernt werden,
damit die Liste eindeutig ist. `page-sitemap.xml` und `post-sitemap.xml` sind
dort gar nicht eingetragen.

Sicherheitsprobleme und manuelle Maßnahmen: jeweils ohne Befund.

→ **1 Einzelweiterleitung.**

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
