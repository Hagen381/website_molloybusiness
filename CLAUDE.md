@AGENTS.md

# Projekt-Richtlinien: molloybusiness.com Rebuild (WordPress → Next.js)

## Kontext

Dieses Repo ist der Next.js-Nachbau (App Router, Static Export) von
molloybusiness.com (aktuell WordPress/Elementor). Ziel: pixelgenaues Design,
gehostet später auf SiteGround (klassisches Shared Hosting, kein Node.js-Server).
Deshalb bleibt `output: "export"` in `next.config.ts` verpflichtend, ebenso
`next-image-export-optimizer` statt Next/Image-Serveroptimierung.

Design-Tokens (Farben, Fonts, Button-Stil) sind aus dem Original extrahiert
(siehe `src/app/globals.css`, `src/lib/site-config.ts`) und dürfen nicht ohne
ausdrücklichen Auftrag geändert werden — Struktur, Texte und Technik werden
modernisiert, das Erscheinungsbild bleibt erhalten.

## SEO-Grundregeln

- **Jede neue Seite MUSS ihr eigenes Canonical-Tag setzen** (`export const
  metadata: Metadata = { alternates: { canonical: "/pfad/" } }` in der
  jeweiligen `page.tsx`). Das globale `layout.tsx` setzt bewusst KEIN
  Canonical mehr, weil Unterseiten das sonst erben und sich selbst
  fälschlich als Startseite deklarieren würden.
- **Jede neue Seite gehört in `sitePages` in `src/lib/site-config.ts`**,
  damit `src/app/sitemap.ts` sie automatisch mit aufnimmt.
- `trailingSlash: true` in `next.config.ts` ist Pflicht (alle URLs enden auf
  `/`, wichtig für die späteren 301-Redirects von den alten WordPress-URLs).
- **Kein sichtbarer Brotkrumenpfad.** Das Original zeigt auf keiner Seite
  einen, deshalb hat auch der Nachbau keinen (die frühere Komponente
  `src/components/Breadcrumb.tsx` ist gelöscht). Das `BreadcrumbList`-Schema
  im `pageJsonLd` jeder Unterseite bleibt dagegen Pflicht — es ist unsichtbar
  und für die Suche nützlich.

## Vorschau-Kanal: GitHub Pages

Zusätzlich zum späteren SiteGround-Hosting gibt es einen GitHub-Pages-Kanal,
der **ausschließlich der internen Kontrolle** dient (kein Ersatz für
SiteGround). Bei jedem Push auf den Standard-Branch deployt eine GitHub
Action automatisch einen frischen Static-Export-Build dorthin. Kein manueller
Zusatzschritt nötig — nach jedem Push kurz warten, bis der Actions-Run grün
ist, dann ist die Vorschau aktuell.

## Automatische Abschluss-Zusammenfassung

Am Ende JEDER Aufgabe (egal wie klein) IMMER eine Zusammenfassung in genau
diesem Format ausgeben, ohne dass der Nutzer danach fragen muss:

```
- Erledigt: [was konkret gebaut/geändert wurde, stichpunktartig]
- Geänderte/neue Dateien bzw. Routen: [Liste]
- Abweichungen vom Original oder von der Anweisung (falls es welche gab) und warum
- Offene Punkte / was noch fehlt für diesen Abschnitt
- Vorschau-Link: [GitHub-Pages-URL, ggf. mit Hinweis auf betroffene Unterseite]
```

Regeln dazu:
- Diese Zusammenfassung ersetzt keine sonstige Kommunikation während der
  Arbeit, sie steht zusätzlich am Ende.
- "Abweichungen" nur auflisten, wenn es welche gab — sonst kurz "keine".
- Der Vorschau-Link muss die tatsächliche GitHub-Pages-Basis-URL dieses Repos
  sein (siehe unten), nicht molloybusiness.com.
- Vor der Zusammenfassung: sicherstellen, dass der Stand committet (und wenn
  vom Nutzer für diese Aufgabe erlaubt) gepusht ist, damit der Vorschau-Link
  auch tatsächlich den beschriebenen Stand zeigt.

## GitHub-Pages-Basis-URL

**https://hagen381.github.io/website_molloybusiness/**

(Homepage-Vorschau entsprechend: https://hagen381.github.io/website_molloybusiness/index.html
bzw. einfach die Basis-URL, da `/` auf `index.html` zeigt.)

Repo: `https://github.com/Hagen381/website_molloybusiness` (Owner: Hagen381),
**public** (Pflicht — GitHub Pages ist auf dem aktuellen Plan für private
Repos nicht verfügbar), Default-Branch `main`, Pages-Quelle: GitHub Actions.

Hinweis für künftige Sessions in dieser Sandbox: `gh` CLI ist unter
`C:\Program Files\GitHub CLI\gh.exe` installiert und war bereits einmal
per Device-Code-Flow authentifiziert (Account Hagen381, Scopes inkl.
`workflow`). Falls `git push` erneut an fehlender Auth scheitert
(`terminal prompts disabled`), NICHT einen lokalen Terminal-Workaround
vorschlagen, sondern zuerst prüfen ob `gh auth status` noch eingeloggt ist;
falls nicht, denselben Device-Code-Weg (`gh auth login --web`, Code an den
Nutzer weitergeben) erneut gehen.
