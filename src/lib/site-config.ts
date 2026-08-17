export const siteConfig = {
  name: "molloy business",
  // Rechtsträger der Website — erscheint in Copyright, Impressum und JSON-LD.
  legalName: "molloy Management OÜ",
  // Gesicht der Marke (Marketing-Kontext) — Rechtsträger ist allein die OÜ.
  brandFace: "Juliette Oppel",
  // Vorstand der OÜ — für Impressum und rechtliche Angaben.
  legalRepresentative: "Hagen Winkler",
  // Ohne www — die Live-Domain läuft auf molloybusiness.com, www leitet dorthin um.
  url: "https://molloybusiness.com",
  titleTemplate: "%s | molloy business",
  defaultTitle: "Pinterest Marketing Agentur für Unternehmen | molloy business",
  description:
    "Pinterest Marketing Agentur im deutschsprachigen Raum: organisch statt Ads – Strategie, Pin-Design und laufende Betreuung für dein Unternehmen.",
  email: "info@molloybusiness.com",
  phone: "+49 15678 196744",
  locations: "Deutschland, Schweiz, Österreich & weltweit (remote)",
  // Firmendaten der molloy Management OÜ — Impressum, Datenschutzerklärung
  // und JSON-LD lesen ausschließlich aus diesem Block (keine Duplikate in
  // Komponenten).
  legal: {
    street: "Sepapaja tn 6",
    zip: "15551",
    city: "Tallinn",
    country: "Estland",
    countryCode: "EE",
    registerNumber: "17268439",
    vatId: "EE102875722",
  },
  // Terminbuchung läuft über einen normalen Link zu Calendly — niemals das
  // Calendly-Widget oder deren JavaScript einbinden (Website bleibt
  // cookie- und trackerfrei). Alle CTA-Buttons lesen NUR aus diesem Feld.
  calendly: "https://calendly.com/molloybusiness-erstgespraech/30min",
  social: {
    instagram: "https://www.instagram.com/molloy_business/",
    facebook: "https://www.facebook.com/profile.php?id=61554803184566",
    linkedin: "https://www.linkedin.com/in/juliette-oppel-b8a112245/",
    pinterest: "https://www.pinterest.de/julietteoppel/",
  },
} as const;

export const navigation = {
  main: [
    { label: "Start", href: "/" },
    {
      label: "Angebote",
      href: "/",
      children: [
        {
          label: "Pinterest Account Management für Unternehmen",
          href: "/pinterest-account-management/",
        },
        {
          label: "Pinterest Account Aufbau für Unternehmen",
          href: "/pinterest-account-aufbau/",
        },
        { label: "Pinterest Strategie Call", href: "/pinterest-strategie-call/" },
        { label: "Pinterest Workshop", href: "/pinterest-workshop/" },
        { label: "Pinterest Audit", href: "/pinterest-audit/" },
        {
          label: "Pinterest Content Paket",
          href: "/pinterest-content-paket/",
        },
      ],
    },
    { label: "Über mich", href: "/ueber-mich/" },
    { label: "Blog", href: "/blog/" },
    { label: "Kontakt", href: `mailto:${siteConfig.email}` },
  ],
  legal: [
    { label: "Kontakt", href: `mailto:${siteConfig.email}` },
    { label: "Impressum", href: "/impressum/" },
    { label: "Datenschutz", href: "/datenschutz/" },
  ],
} as const;

// Zentrale Seitenliste für sitemap.ts — jede neue Route hier eintragen,
// damit sie nicht vergessen wird.
export const sitePages = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  {
    path: "/pinterest-account-management/",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/pinterest-account-aufbau/",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/pinterest-strategie-call/",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/pinterest-workshop/",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/pinterest-audit/",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/pinterest-content-paket/",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/ueber-mich/",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "/blog/pinterest-fuer-reiseveranstalter/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/pinterest-selbst-machen-oder-auslagern/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/organisch-statt-ads/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/pinterest-seo-reiseangebote/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/lohnt-sich-pinterest-fuer-kleine-unternehmen/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/podcast-pinterest-marketing/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/telegram-gruppe-pinterest-marketing-profis/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/pinterest-mere-exposure-effekt/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/pinterest-openai-learnings/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/pinterest-predicts-report-2026/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/pinterest-marketing/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/online-business-management/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/online-business-vs-realitaet/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/selbststaendigkeit-unsichtbare-arbeit/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/social-media-strategie-chatgpt/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/formel-60-minuten-arbeitszeit/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/website-fuer-dein-business/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/online-schuelerpraktika/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/10-dinge-im-online-business/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/geschenkideen-homeoffice/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/affiliate-marketing/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/kunden-abgelehnt/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/impressum/",
    changeFrequency: "yearly",
    priority: 0.1,
  },
  {
    path: "/datenschutz/",
    changeFrequency: "yearly",
    priority: 0.1,
  },
] as const;

// Zentrale Artikelliste für /blog/ — neue Artikel nur hier eintragen
// (plus eigener Eintrag in sitePages oben), Übersicht und Schema bauen
// daraus automatisch auf. `title` wird wortgleich in Übersicht, Breadcrumb
// und BreadcrumbList-Schema des Artikels verwendet.
export const blogPosts = [
  {
    slug: "pinterest-fuer-reiseveranstalter",
    title: "Pinterest für Reiseveranstalter: So funktioniert der Einstieg",
    date: "2026-08-15",
    excerpt:
      "Reiseplanung beginnt auf Pinterest – oft Monate vor der Buchung. Wie du als Reiseveranstalter dort startest: Business-Account, Boards, Pin-Design und der Weg vom Pin zur Buchungsanfrage.",
  },
  {
    slug: "pinterest-selbst-machen-oder-auslagern",
    title: "Pinterest Marketing: selbst machen oder auslagern?",
    date: "2026-08-15",
    excerpt:
      "Selbst betreuen oder abgeben? Ehrliche Kriterien für beide Wege: wie viel laufende Arbeit Pinterest wirklich bedeutet, wann Selbermachen die richtige Wahl ist – und wann Auslagern.",
  },
  {
    slug: "organisch-statt-ads",
    title: "Pinterest organisch oder mit Werbeanzeigen?",
    date: "2026-08-15",
    excerpt:
      "Organische Pins bleiben auffindbar, Anzeigen enden mit dem Budget. Warum molloy business auf organische Sichtbarkeit setzt – und wann Pinterest Ads trotzdem das richtige Werkzeug sind.",
  },
  {
    slug: "pinterest-seo-reiseangebote",
    title: "Pinterest SEO: So werden deine Reiseangebote gefunden",
    date: "2026-08-15",
    excerpt:
      "Pinterest ist eine Suchmaschine: Gefunden wird, was beschriftet ist. Wie du die Suchbegriffe deiner Wunschkunden findest und an Profil, Boards und Pins richtig einsetzt.",
  },
  {
    slug: "lohnt-sich-pinterest-fuer-kleine-unternehmen",
    title: "Lohnt sich Pinterest für kleine Unternehmen?",
    date: "2026-08-08",
    excerpt:
      "Eine ehrliche Einordnung: wann Pinterest für kleine Unternehmen und Selbstständige funktioniert, wann nicht – und wie du mit überschaubarem Aufwand anfängst.",
  },
  {
    slug: "podcast-pinterest-marketing",
    title: "Podcast Pinterest Marketing: Wie dein Podcast auf Pinterest gefunden wird",
    date: "2026-06-30",
    excerpt:
      "Warum „neue Podcastfolge online“ selten jemanden interessiert – und wie dein Podcast über Themen statt Folgen auf Pinterest langfristig gefunden wird.",
  },
  {
    slug: "telegram-gruppe-pinterest-marketing-profis",
    title: "Pinterest Marketing Profis: Telegram-Gruppe für erfahrene Pinterest-Dienstleister",
    date: "2026-06-17",
    excerpt:
      "Viele Communities richten sich an Einsteiger. Die Telegram-Gruppe „Pinterest Marketing Profis“ vernetzt erfahrene Dienstleister für echten Fach-Austausch.",
  },
  {
    slug: "pinterest-mere-exposure-effekt",
    title: "Pinterest, Loaded Fries und der Mere-Exposure-Effekt",
    date: "2026-05-20",
    excerpt:
      "Warum wiederholte Bilder Kaufentscheidungen prägen: der Mere-Exposure-Effekt, erklärt am Beispiel Loaded Fries – und was Marken daraus für Pinterest lernen.",
  },
  {
    slug: "pinterest-openai-learnings",
    title: "4 Learnings aus dem OpenAI-Pinterest-Gerücht",
    date: "2026-01-19",
    excerpt:
      "Ob OpenAI Pinterest übernimmt, ist offen. Spannend ist etwas anderes: was das Gerücht über den Wert visueller Suche und Suchintention für Unternehmen verrät.",
  },
  {
    slug: "pinterest-predicts-report-2026",
    title: "Pinterest Predicts Report 2026: Wie du als Marke von den Trends wirklich profitierst",
    date: "2026-01-05",
    excerpt:
      "Der Pinterest Predicts Report zeigt, was morgen gesucht wird. So nutzt du die Trends 2026 strategisch für deine Inhalte, Produkte und Boards.",
  },
  {
    slug: "online-business-management",
    title: "Warum ich mich gegen OBM und für Pinterest Marketing entschieden habe",
    date: "2025-11-29",
    excerpt:
      "Online Business Management war lange Teil von molloy business. Die Geschichte einer Fokus-Entscheidung: warum OBM nicht mehr zur Vision passte und Pinterest zum Kern wurde.",
  },
  {
    slug: "online-business-vs-realitaet",
    title: "Freiheit durch Online-Business? Warum der Traum oft an der Realität scheitert",
    date: "2025-07-08",
    excerpt:
      "Laptop, Freiheit, Selbstbestimmung – der Traum vom Online-Business klingt verlockend. Warum die Realität oft anders aussieht und wie aus dem Wunsch ein tragfähiges Konzept wird.",
  },
  {
    slug: "selbststaendigkeit-unsichtbare-arbeit",
    title: "Warum sich Selbstständigkeit oft nicht nach Arbeit anfühlt – und trotzdem Arbeit ist",
    date: "2025-05-12",
    excerpt:
      "Aufbauen, lernen, planen – und am Monatsende kein Gehalt. Warum sich die Anfangszeit der Selbstständigkeit so seltsam anfühlt und was sich mit dem ersten Kunden verändert.",
  },
  {
    slug: "online-schuelerpraktika",
    title: "Online-Fachkräftegewinnung durch Online-Schülerpraktika",
    date: "2025-02-28",
    excerpt:
      "Transkript des Gastauftritts bei Local Lights: Wie Unternehmen mit Online-Schülerpraktika früh Nachwuchs gewinnen – mit Antworten auf typische Vorurteile und fünf Tipps für den Start.",
  },
  {
    slug: "10-dinge-im-online-business",
    title: "10 Dinge, die ich dieses Jahr in meinem Online-Business zum ersten Mal gemacht habe",
    date: "2024-12-23",
    excerpt:
      "Für eine Bank gearbeitet, einen Videokurs erstellt, das Firmenkonto bis auf 92 Cent ausgereizt: ein ehrlicher Jahresrückblick über zehn Premieren im Online-Business.",
  },
  {
    slug: "geschenkideen-homeoffice",
    title: "15 Geschenkideen fürs Homeoffice",
    date: "2024-11-12",
    excerpt:
      "Von der Zwitscherbox bis zum Massage-Sitzkissen: 15 durchdachte Geschenkideen für alle, die im Homeoffice arbeiten oder ihr eigenes Online-Business führen.",
  },
  {
    slug: "affiliate-marketing",
    title: "Was ist eigentlich Affiliate Marketing?",
    date: "2024-09-26",
    excerpt:
      "Was Affiliate Marketing bedeutet, wie das Provisionsmodell funktioniert und worin es sich vom Network Marketing unterscheidet – nüchtern erklärt, ohne große Einnahme-Versprechen.",
  },
  {
    slug: "social-media-strategie-chatgpt",
    title: "Social-Media-Strategie von ChatGPT zum Nachmachen",
    date: "2024-09-13",
    excerpt:
      "Eine Rolle, drei Prompts, ein kompletter Action-Plan: wie ChatGPT eine Social-Media-Strategie samt 4-Wochen-Zeitplan erstellt hat – mit allen Prompts zum Nachmachen.",
  },
  {
    slug: "formel-60-minuten-arbeitszeit",
    title: "Meine Formel für 60 Minuten Arbeitszeit",
    date: "2024-07-08",
    excerpt:
      "1 Stunde Arbeitszeit = 1 Stunde Lebenszeit. Warum es keine unterschiedlichen Stundensätze für „einfache“ und „schwere“ Aufgaben braucht – und wie du deinen Preis findest.",
  },
  {
    slug: "kunden-abgelehnt",
    title: "Warum ich einen potenziellen Kunden abgelehnt habe, obwohl ich 0 Aufträge hatte",
    date: "2024-05-28",
    excerpt:
      "Kein einziger Auftrag – und trotzdem Nein gesagt: warum Bauchgefühl und klare Grenzen wichtiger sind als der erste Umsatz und was ein fauler Apfel damit zu tun hat.",
  },
  {
    slug: "pinterest-marketing",
    title: "Was ist Pinterest Marketing und wie funktioniert es?",
    date: "2024-04-23",
    excerpt:
      "Pinterest ist keine Social-Media-Plattform, sondern eine visuelle Suchmaschine. Was Pinterest Marketing bedeutet und wie deine Inhalte dort gefunden werden.",
  },
  {
    slug: "website-fuer-dein-business",
    title: "Brauchst du eine Website für dein Business?",
    date: "2024-03-08",
    excerpt:
      "Instagram reicht doch – oder? Warum eine eigene Website das Zuhause deines Business ist und Social-Media-Kanäle nur Cafés sind: eine persönliche Antwort auf eine alte Streitfrage.",
  },
] as const;

// Leistungen zentral hier pflegen — Kacheln, Leistungsübersicht und
// Service-Schemas lesen aus diesen Feldern. `scope` ist der prägnante
// Umfangs-Satz, der überall dort steht, wo früher der Preis stand.
//
// NICHT RENDERN — historische Preise, Stand August 2026 (Referenz für eine
// spätere Reaktivierung):
//   Pinterest Account Management: 666 € pro Monat — 90 Pins pro Monat · Vorkasse · monatlich kündbar
//   Pinterest Account Aufbau:     2777 € einmalig — 50 % Vorkasse, 50 % nach Upload aller Pins
//   Pinterest Strategie Call:     144 € einmalig — 90 Minuten · wird bei einer Zusammenarbeit voll angerechnet
//   Pinterest Workshop:           250 € einmalig — 1 Stunde online · inkl. Q&A und Factsheet
//   Pinterest Audit:              333 € einmalig — Vorkasse
//   Pinterest Content Paket:      444 € pro Monat — 30 Premium-Pins pro Monat
//   (dazu gehörte: priceVatNote = "Alle Preise in Euro.")
export const services = [
  {
    title: "Pinterest Account Management",
    description:
      "Laufende Betreuung deines Pinterest-Accounts: Content, Pins und Strategie aus einer Hand. Du gibst den Kanal komplett ab und bekommst jeden Monat frische, SEO-optimierte Pins samt Auswertung.",
    href: "/pinterest-account-management/",
    scope:
      "90 SEO-optimierte Pins pro Monat – Einplanung, Recherche und Auswertung inklusive.",
  },
  {
    title: "Pinterest Account Aufbau",
    description:
      "Professioneller Neuaufbau deines Accounts mit klarer Struktur von Anfang an. Von Profil und Boards bis zu den ersten Pins entsteht ein Fundament, auf dem dein Pinterest Marketing langfristig aufbaut.",
    href: "/pinterest-account-aufbau/",
    scope:
      "Profil, 8 strategische Boards und 50 gestaltete Pins – inklusive zwei Korrekturschleifen.",
  },
  {
    title: "Pinterest Strategie Call",
    description:
      "Individuelle Beratung, um deine Pinterest-Strategie auf den Punkt zu bringen. In 90 Minuten klären wir deine Fragen und du bekommst konkrete nächste Schritte für deinen Account.",
    href: "/pinterest-strategie-call/",
    scope:
      "90 Minuten individuelle Beratung mit konkreten nächsten Schritten für deinen Account.",
  },
  {
    title: "Pinterest Workshop",
    description:
      "Praxisnahes Workshop-Format für Teams und Online-Events rund um Pinterest Marketing. Eine Stunde kompaktes Wissen, verständlich aufbereitet und mit Raum für deine Fragen.",
    href: "/pinterest-workshop/",
    scope:
      "Eine Stunde online für dein Team – inklusive Q&A und Factsheet zum Download.",
  },
  {
    title: "Pinterest Audit",
    description:
      "Detaillierte Analyse deines bestehenden Accounts mit konkreten Handlungsempfehlungen. Du erfährst, was bereits funktioniert und an welchen Stellen dein Account Potenzial verschenkt.",
    href: "/pinterest-audit/",
    scope:
      "Analyse von Profil, Boards, Pin-Performance und Wettbewerb – mit priorisierten Empfehlungen.",
  },
  {
    title: "Pinterest Content Paket",
    description:
      "SEO-optimierte Pins, Headlines und Beschreibungen – fertig für deinen Redaktionsplan. Du veröffentlichst selbst, molloy business liefert dir den passenden Content.",
    href: "/pinterest-content-paket/",
    scope:
      "30 upload-fertige Premium-Pins pro Monat – markenangepasst, mit Headlines und Beschreibungen.",
  },
] as const;
