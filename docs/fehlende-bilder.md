# Bilder aus dem Original — vollstaendig **erledigt**

Diese Datei hat frueher die Bilder gefuehrt, die das Original zeigt, die aber
noch nicht im Repo lagen. **Es fehlt keins mehr.** Alle Dateien sind
nachgeladen, geprueft (echte Bilddaten, keine HTML-Fehlerseiten) und an ihrer
Stelle im Nachbau eingebaut. Platzhalterflaechen gibt es keine mehr.

Die Datei bleibt als Nachweis stehen: die Tabellen unten belegen, welche
Original-Adresse hinter welcher Datei im Repo steckt. Zu tun ist hier nichts
mehr.

## Stand auf einen Blick

| Gruppe | Anzahl | geholt mit | im Repo seit | Stand |
| --- | --- | --- | --- | --- |
| Hintergrundbilder | 3 | Workflow "Hintergrundbilder nachladen" | Commit `97393f7` | erledigt und eingebaut |
| Vorschaubilder der Artikelliste | 17 | Workflow "Beitragsbilder nachladen" | Commit `6bb54d1` | erledigt und eingebaut |

Beide Workflows haben ihren Zweck erfuellt und muessen **nicht erneut laufen**.
Sie bleiben nur fuer den Fall liegen, dass eine Datei einmal neu geholt werden
muss.

## Wie die Dateien seinerzeit ins Repo kamen

Die Entwicklungsumgebung hat keinen Netzzugang zur alten Domain. Geholt wurden
die Dateien deshalb auf einem GitHub-Runner, per Hand gestartet über
**Actions → Workflow in der linken Spalte waehlen → "Run workflow"
(Branch `main`)**:

| Workflow | laedt | Stand |
| --- | --- | --- |
| "Hintergrundbilder nachladen" (`.github/workflows/hintergrundbilder-holen.yml`) | die drei Dateien unter "Hintergrundbilder" | erledigt, muss nicht noch einmal laufen |
| "Beitragsbilder nachladen" (`.github/workflows/beitragsbilder-holen.yml`) | die 17 Dateien unter "Vorschaubilder der Artikelliste" | erledigt, muss nicht noch einmal laufen |

Beide arbeiten gleich. Sie laden die jeweils gelisteten Dateien mit
unveraenderten Dateinamen, schreiben Groesse und Pixelmasse jeder Datei in die
Zusammenfassung des Laufs und committen sie als `github-actions[bot]` — nur,
wenn es tatsaechlich Aenderungen gibt. Commit-Nachricht war "Fehlende
Hintergrundbilder nachgeladen" beziehungsweise "Beitragsbilder der Blogartikel
nachgeladen". Schlaegt ein Download fehl, endet der Lauf mit Fehler und es wird
nichts committet.

"Beitragsbilder nachladen" hat seine Dateien **neben** die schon vorhandenen
Bilder unter `src/assets/images/blog/<slug>/` gelegt — dort wurde nichts
geloescht oder ueberschrieben, die vorhandenen Dateien stecken in den
Artikeltexten.

**Stolperstein, damals aufgetreten und abgefangen:** Mit dem
Standard-User-Agent von `curl` antwortet der Host mit HTTP 200, liefert aber
kein Bild, sondern eine HTML-Seite. `--fail` greift erst ab HTTP 400 und laesst
das durch — die Datei landet dann mit richtigem Namen, aber falschem Inhalt im
Repo. Beide Workflows senden deshalb denselben Browser-User-Agent wie
`scripts/archiv-holen.py` und pruefen nach jedem Download per
`file --mime-type`, ob wirklich Bilddaten angekommen sind. Ist es keins,
schreiben sie HTTP-Status, Content-Type und den Anfang der Antwort in die
Zusammenfassung des Laufs, loeschen die Datei und lassen den Lauf rot enden.

## Hintergrundbilder — **erledigt**

Mit Commit `97393f7` im Repo angekommen, geprueft (echte JPEG-Daten) und an
allen drei Stellen eingebaut.

| Zielpfad im Repo | Pixelmasse | eingebaut in | Stand |
| --- | --- | --- | --- |
| `src/assets/images/angebote/katsia-jazwinska-dxiFrXpcyCA-unsplash-scaled.jpg` | 2560 x 1707 px | `src/app/angebote/page.tsx` — Hintergrundfoto des Zitat-Blocks oberhalb der Angebots-Kacheln (cover, Position 0% 0%, Schleier #D9D9D9 bei 62 %) | erledigt |
| `src/assets/images/blog/Juliette-Oppel-Pinterest-Blog.jpg` | 780 x 520 px | `src/components/BlogUebersicht.tsx` — rechte Spalte des Hero (436x500, Eckenradius 200px oben) | erledigt |
| `src/assets/images/blog/Juliette-Oppel-Header-Kontakt-Pinterest.jpg` | 1920 x 1280 px | `src/components/BlogUebersicht.tsx` — Hintergrundfoto des Abschluss-Blocks (cover, Position 50% 50%, Schleier #D9D9D9 bei 21 %, Ueberschrift und Fliesstext weiss) | erledigt |

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

## /blog/ — Vorschaubilder der Artikelliste — **erledigt**

Je Artikel das Beitragsbild des Originals (dort auch als `og:image`
hinterlegt). Alle 17 Dateien sind mit Commit `6bb54d1` im Repo angekommen,
geprueft (echte Bilddaten, je 1200 x 800 px) und in
`src/components/BlogUebersicht.tsx` unter `vorschaubilder` eingetragen. Die
Karten der Artikelliste zeigen damit das Beitragsbild und nicht mehr das erste
Bild aus dem Artikeltext. In der Karte des dreispaltigen Rasters werden sie
auf 323x213 zugeschnitten (`object-cover`, oben 50px Eckenradius).

Der Schluessel in `vorschaubilder` ist der Dateiname; welcher Artikel welches
Bild bekommt, steht bei `blogPosts` in `src/lib/site-config.ts` im Feld
`image`.

| Artikel | Original-URL | Zielpfad im Repo | Stand |
| --- | --- | --- | --- |
| `/blog/podcast-pinterest-marketing/` | https://molloybusiness.com/wp-content/uploads/2026/06/podcast-pinterest-1.jpg | `src/assets/images/blog/podcast-pinterest-marketing/podcast-pinterest-1.jpg` | erledigt |
| `/blog/telegram-gruppe-pinterest-marketing-profis/` | https://molloybusiness.com/wp-content/uploads/2026/06/pinterest-marketing-profis-1.jpg | `src/assets/images/blog/telegram-gruppe-pinterest-marketing-profis/pinterest-marketing-profis-1.jpg` | erledigt |
| `/blog/pinterest-mere-exposure-effekt/` | https://molloybusiness.com/wp-content/uploads/2026/05/pommespinterest-5.jpg | `src/assets/images/blog/pinterest-mere-exposure-effekt/pommespinterest-5.jpg` | erledigt |
| `/blog/pinterest-openai-learnings/` | https://molloybusiness.com/wp-content/uploads/2026/01/openai_pinterest-1.jpg | `src/assets/images/blog/pinterest-openai-learnings/openai_pinterest-1.jpg` | erledigt |
| `/blog/pinterest-predicts-report-2026/` | https://molloybusiness.com/wp-content/uploads/2025/12/Pinterest-Predicts-Report-2.jpg | `src/assets/images/blog/pinterest-predicts-report-2026/Pinterest-Predicts-Report-2.jpg` | erledigt |
| `/blog/online-business-management/` | https://molloybusiness.com/wp-content/uploads/2025/11/Online-Business-Management-1.jpg | `src/assets/images/blog/online-business-management/Online-Business-Management-1.jpg` | erledigt |
| `/blog/online-business-vs-realitaet/` | https://molloybusiness.com/wp-content/uploads/2025/07/Online-Business-1.png | `src/assets/images/blog/online-business-vs-realitaet/Online-Business-1.png` | erledigt |
| `/blog/selbststaendigkeit-unsichtbare-arbeit/` | https://molloybusiness.com/wp-content/uploads/2025/05/Selbststaendigkeit-1.png | `src/assets/images/blog/selbststaendigkeit-unsichtbare-arbeit/Selbststaendigkeit-1.png` | erledigt |
| `/blog/online-schuelerpraktika/` | https://molloybusiness.com/wp-content/uploads/2025/02/Online-Fachkraeftegewinnung-5.png | `src/assets/images/blog/online-schuelerpraktika/Online-Fachkraeftegewinnung-5.png` | erledigt |
| `/blog/10-dinge-im-online-business/` | https://molloybusiness.com/wp-content/uploads/2024/12/Jahresrueckblick-1.png | `src/assets/images/blog/10-dinge-im-online-business/Jahresrueckblick-1.png` | erledigt |
| `/blog/geschenkideen-homeoffice/` | https://molloybusiness.com/wp-content/uploads/2024/11/WeihnachtsgeschenkefuersHomeoffice-3.png | `src/assets/images/blog/geschenkideen-homeoffice/WeihnachtsgeschenkefuersHomeoffice-3.png` | erledigt |
| `/blog/affiliate-marketing/` | https://molloybusiness.com/wp-content/uploads/2024/09/AffiliateMarketing-2.png | `src/assets/images/blog/affiliate-marketing/AffiliateMarketing-2.png` | erledigt |
| `/blog/social-media-strategie-chatgpt/` | https://molloybusiness.com/wp-content/uploads/2024/09/SocialMediaStrategiemitChatGPT-3.png | `src/assets/images/blog/social-media-strategie-chatgpt/SocialMediaStrategiemitChatGPT-3.png` | erledigt |
| `/blog/formel-60-minuten-arbeitszeit/` | https://molloybusiness.com/wp-content/uploads/2024/07/60MinutenFormel-3.jpg | `src/assets/images/blog/formel-60-minuten-arbeitszeit/60MinutenFormel-3.jpg` | erledigt |
| `/blog/kunden-abgelehnt/` | https://molloybusiness.com/wp-content/uploads/2024/05/Kundenabgelehnt-1.png | `src/assets/images/blog/kunden-abgelehnt/Kundenabgelehnt-1.png` | erledigt |
| `/blog/pinterest-marketing/` | https://molloybusiness.com/wp-content/uploads/2024/04/CoverbildPinterestArtikel.png | `src/assets/images/blog/pinterest-marketing/CoverbildPinterestArtikel.png` | erledigt |
| `/blog/website-fuer-dein-business/` | https://molloybusiness.com/wp-content/uploads/2022/03/BlogWebsite-3.png | `src/assets/images/blog/website-fuer-dein-business/BlogWebsite-3.png` | erledigt |
