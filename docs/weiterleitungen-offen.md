# Offene 301-Weiterleitungen für den Livegang

> **Überholt.** Die vollständige Liste steht jetzt in
> [`weiterleitungen.md`](weiterleitungen.md), die fertige Apache-Vorlage in
> [`htaccess-vorlage.txt`](htaccess-vorlage.txt). Diese Datei bleibt nur als
> Notiz zu den fünf Adressen erhalten, bei denen ein Inhalt ersatzlos entfällt.

Merkliste — hier ist **nichts konfiguriert**. Die Einträge werden erst beim
Umzug auf SiteGround in der `.htaccess` (oder im Hosting-Panel) angelegt.

Betroffen sind Alt-URLs, die es auf molloybusiness.com tatsächlich gab, die
indexiert sind und teils von Pinterest-Pins verlinkt werden — sie dürfen nach
dem Relaunch nicht ins Leere laufen.

| Alt-URL | Ziel | Grund |
| --- | --- | --- |
| `/pinterest-marketing-workshops/` | `/angebote/` | Angebot entfällt, Seite war indexiert |
| `/pinterest-content-paket-unternehmen/` | `/angebote/` | Angebot entfällt, Seite war indexiert |
| `/blogartikel-1-jahr-in-thailand-leben/` | `/blog/` | Artikel wird nicht übernommen |
| `/fakelifeofinsta/` | `/blog/` | Artikel wird nicht übernommen |
| `/work-and-travel-mit-kindern-online-business/` | `/blog/` | Artikel wird nicht übernommen |

## Hinweise

- Alle Ziel-URLs enden auf `/` — passend zu `trailingSlash: true` in
  `next.config.ts`.
- `/angebote/` existiert noch nicht und wird in einem späteren Schritt gebaut.
  Vor dem Livegang prüfen, dass die Seite steht, sonst zeigen die beiden ersten
  Weiterleitungen auf einen 404.
- Für die drei Routen `/pinterest-marketing-tourismus/`,
  `/pinterest-marketing-food/` und `/pinterest-marketing-finanzdienstleister/`
  braucht es **keine** Weiterleitung — die gab es auf der alten Domain nie.
