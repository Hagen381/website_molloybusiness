# Fehlende Bilder

Bilder, die das Original an dieser Stelle zeigt, die aber noch nicht im
Repo liegen. Der Nachbau steht an diesen Stellen vorlaeufig mit einer
Platzhalterflaeche in der Zielgroesse — Layout und Maße stimmen also
bereits, es fehlt nur die Datei. Diese Liste wird spaeter in einem
Durchgang nachgeladen; danach nur noch den Import an der im Code
vermerkten Stelle eintragen.

## Wie die Dateien ins Repo kommen

Die Entwicklungsumgebung hat keinen Netzzugang zur alten Domain. Geholt
werden die Dateien deshalb auf einem GitHub-Runner, per Hand gestartet:

**Actions → "Hintergrundbilder nachladen" → "Run workflow" (Branch `main`).**

Der Workflow (`.github/workflows/hintergrundbilder-holen.yml`) laedt die drei
unten unter "Hintergrundbilder" gelisteten Dateien mit unveraenderten
Dateinamen, schreibt Groesse und Pixelmasse jeder Datei in die
Zusammenfassung des Laufs und committet sie als `github-actions[bot]` mit der
Nachricht "Fehlende Hintergrundbilder nachgeladen" — nur, wenn es tatsaechlich
Aenderungen gibt. Schlaegt ein Download fehl, endet der Lauf mit Fehler und es
wird nichts committet.

Die Vorschaubilder der Artikelliste (unterste Tabelle) sind **nicht** Teil
dieses Workflows.

## Hintergrundbilder — vom Workflow abgedeckt

Diese drei Dateien holt "Hintergrundbilder nachladen":

| Original-URL | Zielpfad im Repo | gebraucht als |
| --- | --- | --- |
| https://molloybusiness.com/wp-content/uploads/2024/03/katsia-jazwinska-dxiFrXpcyCA-unsplash-scaled.jpg | `src/assets/images/angebote/katsia-jazwinska-dxiFrXpcyCA-unsplash-scaled.jpg` | Hintergrundfoto des Zitat-Blocks oberhalb der Angebots-Kacheln auf /angebote/ |
| https://molloybusiness.com/wp-content/uploads/2024/03/Juliette-Oppel-Header-Kontakt-Pinterest.jpg | `src/assets/images/blog/Juliette-Oppel-Header-Kontakt-Pinterest.jpg` | Hintergrundfoto im Abschluss-Block von /blog/ |
| https://molloybusiness.com/wp-content/uploads/2024/04/Juliette-Oppel-Pinterest-Blog.jpg | `src/assets/images/blog/Juliette-Oppel-Pinterest-Blog.jpg` | Bild in der rechten Spalte des /blog/-Hero |

Die Einbau-Details je Stelle stehen unveraendert in den Abschnitten darunter.

## /angebote/ — Zitat-Block oberhalb der Kacheln

| Original-URL | Zielpfad im Repo | gebraucht als |
| --- | --- | --- |
| https://molloybusiness.com/wp-content/uploads/2024/03/katsia-jazwinska-dxiFrXpcyCA-unsplash-scaled.jpg | `src/assets/images/angebote/katsia-jazwinska-dxiFrXpcyCA-unsplash-scaled.jpg` | Hintergrundfoto hinter dem Zitat "Das geht nicht!, sagten sie alle." — der Nachbau zeigt dort bis dahin den cremen Body-Grund |

## /blog/ — Abschluss-Block

| Original-URL | Zielpfad im Repo | gebraucht als |
| --- | --- | --- |
| https://molloybusiness.com/wp-content/uploads/2024/03/Juliette-Oppel-Header-Kontakt-Pinterest.jpg | `src/assets/images/blog/Juliette-Oppel-Header-Kontakt-Pinterest.jpg` | Hintergrundfoto im Abschluss-Block von /blog/ (im Original mit hellgrauem Schleier #D9D9D9 bei 21 % Deckkraft, Ueberschrift weiss) |

## /blog/ — Hero

| Original-URL | Zielpfad im Repo | gebraucht als |
| --- | --- | --- |
| https://molloybusiness.com/wp-content/uploads/2024/04/Juliette-Oppel-Pinterest-Blog.jpg | `src/assets/images/blog/Juliette-Oppel-Pinterest-Blog.jpg` | Bild in der rechten Spalte des /blog/-Hero (780x520), alt-Text: "Juliette sitzt mit offenem Laptop auf einer Couch. Finger liegen auf der Tastatur." |

## /blog/ — Vorschaubilder der Artikelliste

Je Artikel das Beitragsbild des Originals (dort auch als `og:image`
hinterlegt). In der Karte auf 326x217 zugeschnitten. Nach dem Nachladen
in `src/app/blog/page.tsx` unter `vorschaubilder` eintragen.

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
