# Fehlende Bilder

Bilder, die das Original an dieser Stelle zeigt, die aber noch nicht im
Repo liegen. Der Nachbau steht an diesen Stellen vorlaeufig mit einer
Platzhalterflaeche in der Zielgroesse — Layout und Maße stimmen also
bereits, es fehlt nur die Datei. Diese Liste wird spaeter in einem
Durchgang nachgeladen; danach nur noch den Import an der im Code
vermerkten Stelle eintragen.

## Stand

**Offen ist nur noch eine Gruppe: die 17 Vorschaubilder der Artikelliste**
(unterste Tabelle). Die drei Hintergrundbilder sind nachgeladen **und
eingebaut** — siehe den naechsten Abschnitt.

## Wie die Dateien ins Repo kommen

Die Entwicklungsumgebung hat keinen Netzzugang zur alten Domain. Geholt
werden die Dateien deshalb auf einem GitHub-Runner, per Hand gestartet:

**Actions → Workflow in der linken Spalte waehlen → "Run workflow"
(Branch `main`).** Es gibt zwei davon:

| Workflow | laedt | Stand |
| --- | --- | --- |
| "Hintergrundbilder nachladen" (`.github/workflows/hintergrundbilder-holen.yml`) | die drei Dateien unter "Hintergrundbilder" | erledigt, muss nicht noch einmal laufen |
| "Beitragsbilder nachladen" (`.github/workflows/beitragsbilder-holen.yml`) | die 17 Dateien unter "Vorschaubilder der Artikelliste" | noch nicht gestartet |

Beide arbeiten gleich. Sie laden die jeweils gelisteten Dateien mit
unveraenderten Dateinamen, schreiben Groesse und Pixelmasse jeder Datei in die
Zusammenfassung des Laufs und committen sie als `github-actions[bot]` — nur,
wenn es tatsaechlich Aenderungen gibt. Commit-Nachricht ist "Fehlende
Hintergrundbilder nachgeladen" beziehungsweise "Beitragsbilder der Blogartikel
nachgeladen". Schlaegt ein Download fehl, endet der Lauf mit Fehler und es
wird nichts committet.

"Beitragsbilder nachladen" legt seine Dateien **neben** die schon vorhandenen
Bilder unter `src/assets/images/blog/<slug>/` — dort wird nichts geloescht oder
ueberschrieben, die vorhandenen Dateien stecken in den Artikeltexten.

**Stolperstein, schon einmal aufgetreten:** Mit dem Standard-User-Agent von
`curl` antwortet der Host mit HTTP 200, liefert aber kein Bild, sondern eine
HTML-Seite. `--fail` greift erst ab HTTP 400 und laesst das durch — die Datei
landet dann mit richtigem Namen, aber falschem Inhalt im Repo. Beide Workflows
senden deshalb denselben Browser-User-Agent wie `scripts/archiv-holen.py` und
pruefen nach jedem Download per `file --mime-type`, ob wirklich Bilddaten
angekommen sind. Ist es keins, schreiben sie HTTP-Status, Content-Type und den
Anfang der Antwort in die Zusammenfassung des Laufs, loeschen die Datei und
lassen den Lauf rot enden.

## Hintergrundbilder — **erledigt**

Diese drei Dateien holt "Hintergrundbilder nachladen". Sie sind mit Commit
`97393f7` im Repo angekommen, geprueft (echte JPEG-Daten) und inzwischen an
allen drei Stellen eingebaut. Hier steht nichts mehr offen.

| Zielpfad im Repo | Pixelmasse | eingebaut in | Stand |
| --- | --- | --- | --- |
| `src/assets/images/angebote/katsia-jazwinska-dxiFrXpcyCA-unsplash-scaled.jpg` | 2560 x 1707 px | `src/app/angebote/page.tsx` — Hintergrundfoto des Zitat-Blocks oberhalb der Angebots-Kacheln (cover, Position 0% 0%, Schleier #D9D9D9 bei 62 %) | erledigt |
| `src/assets/images/blog/Juliette-Oppel-Pinterest-Blog.jpg` | 780 x 520 px | `src/app/blog/page.tsx` — rechte Spalte des Hero (436x500, Eckenradius 200px oben) | erledigt |
| `src/assets/images/blog/Juliette-Oppel-Header-Kontakt-Pinterest.jpg` | 1920 x 1280 px | `src/app/blog/page.tsx` — Hintergrundfoto des Abschluss-Blocks (cover, Position 50% 50%, Schleier #D9D9D9 bei 21 %, Ueberschrift und Fliesstext weiss) | erledigt |

Alle drei kommen ueber `next-image-export-optimizer` ins Layout (die beiden
Hintergruende absolut und formatfuellend hinter dem Inhalt, `sizes="100vw"`,
`alt=""`), nicht als CSS-Hintergrund.

**Anmerkung zum Kontrast** (bei 1536px nachgemessen, nichts geaendert): die
weisse Ueberschrift im Abschluss-Block von /blog/ liegt ueber die Breite der
Zeile gemittelt bei 5.9:1, faellt an der hellsten Stelle des Fotos aber auf
1.57:1 — rund 44 % der Zeilenflaeche liegen unter 4.5:1. Der Link "Pinterest
Angebote" im Fliesstext steht unveraendert in #856434 und kommt dort im Mittel
auf 1.88:1. Das entspricht dem Original; eine Aenderung braucht einen eigenen
Auftrag.

## /blog/ — Vorschaubilder der Artikelliste

Je Artikel das Beitragsbild des Originals (dort auch als `og:image`
hinterlegt). In der Karte auf 326x217 zugeschnitten. Geholt werden sie vom
Workflow "Beitragsbilder nachladen" — er liest genau diese Tabelle. Nach dem
Nachladen in `src/app/blog/page.tsx` unter `vorschaubilder` eintragen; bis
dahin zeigen die Karten weiter das jeweils erste Bild aus dem Artikeltext.

| Artikel | Original-URL | Zielpfad im Repo |
| --- | --- | --- |
| `/blog/podcast-pinterest-marketing/` | https://molloybusiness.com/wp-content/uploads/2026/06/podcast-pinterest-1.jpg | `src/assets/images/blog/podcast-pinterest-marketing/podcast-pinterest-1.jpg` |
| `/blog/telegram-gruppe-pinterest-marketing-profis/` | https://molloybusiness.com/wp-content/uploads/2026/06/pinterest-marketing-profis-1.jpg | `src/assets/images/blog/telegram-gruppe-pinterest-marketing-profis/pinterest-marketing-profis-1.jpg` |
| `/blog/pinterest-mere-exposure-effekt/` | https://molloybusiness.com/wp-content/uploads/2026/05/pommespinterest-5.jpg | `src/assets/images/blog/pinterest-mere-exposure-effekt/pommespinterest-5.jpg` |
| `/blog/pinterest-openai-learnings/` | https://molloybusiness.com/wp-content/uploads/2026/01/openai_pinterest-1.jpg | `src/assets/images/blog/pinterest-openai-learnings/openai_pinterest-1.jpg` |
| `/blog/pinterest-predicts-report-2026/` | https://molloybusiness.com/wp-content/uploads/2025/12/Pinterest-Predicts-Report-2.jpg | `src/assets/images/blog/pinterest-predicts-report-2026/Pinterest-Predicts-Report-2.jpg` |
| `/blog/online-business-management/` | https://molloybusiness.com/wp-content/uploads/2025/11/Online-Business-Management-1.jpg | `src/assets/images/blog/online-business-management/Online-Business-Management-1.jpg` |
| `/blog/online-business-vs-realitaet/` | https://molloybusiness.com/wp-content/uploads/2025/07/Online-Business-1.png | `src/assets/images/blog/online-business-vs-realitaet/Online-Business-1.png` |
| `/blog/selbststaendigkeit-unsichtbare-arbeit/` | https://molloybusiness.com/wp-content/uploads/2025/05/Selbststaendigkeit-1.png | `src/assets/images/blog/selbststaendigkeit-unsichtbare-arbeit/Selbststaendigkeit-1.png` |
| `/blog/online-schuelerpraktika/` | https://molloybusiness.com/wp-content/uploads/2025/02/Online-Fachkraeftegewinnung-5.png | `src/assets/images/blog/online-schuelerpraktika/Online-Fachkraeftegewinnung-5.png` |
| `/blog/10-dinge-im-online-business/` | https://molloybusiness.com/wp-content/uploads/2024/12/Jahresrueckblick-1.png | `src/assets/images/blog/10-dinge-im-online-business/Jahresrueckblick-1.png` |
| `/blog/geschenkideen-homeoffice/` | https://molloybusiness.com/wp-content/uploads/2024/11/WeihnachtsgeschenkefuersHomeoffice-3.png | `src/assets/images/blog/geschenkideen-homeoffice/WeihnachtsgeschenkefuersHomeoffice-3.png` |
| `/blog/affiliate-marketing/` | https://molloybusiness.com/wp-content/uploads/2024/09/AffiliateMarketing-2.png | `src/assets/images/blog/affiliate-marketing/AffiliateMarketing-2.png` |
| `/blog/social-media-strategie-chatgpt/` | https://molloybusiness.com/wp-content/uploads/2024/09/SocialMediaStrategiemitChatGPT-3.png | `src/assets/images/blog/social-media-strategie-chatgpt/SocialMediaStrategiemitChatGPT-3.png` |
| `/blog/formel-60-minuten-arbeitszeit/` | https://molloybusiness.com/wp-content/uploads/2024/07/60MinutenFormel-3.jpg | `src/assets/images/blog/formel-60-minuten-arbeitszeit/60MinutenFormel-3.jpg` |
| `/blog/kunden-abgelehnt/` | https://molloybusiness.com/wp-content/uploads/2024/05/Kundenabgelehnt-1.png | `src/assets/images/blog/kunden-abgelehnt/Kundenabgelehnt-1.png` |
| `/blog/pinterest-marketing/` | https://molloybusiness.com/wp-content/uploads/2024/04/CoverbildPinterestArtikel.png | `src/assets/images/blog/pinterest-marketing/CoverbildPinterestArtikel.png` |
| `/blog/website-fuer-dein-business/` | https://molloybusiness.com/wp-content/uploads/2022/03/BlogWebsite-3.png | `src/assets/images/blog/website-fuer-dein-business/BlogWebsite-3.png` |
