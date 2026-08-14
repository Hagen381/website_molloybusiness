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
    path: "/pinterest-marketing-tourismus/",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/pinterest-marketing-food/",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/pinterest-marketing-finanzdienstleister/",
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
    path: "/blog/lohnt-sich-pinterest-fuer-kleine-unternehmen/",
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
    slug: "lohnt-sich-pinterest-fuer-kleine-unternehmen",
    title: "Lohnt sich Pinterest für kleine Unternehmen?",
    date: "2026-08-08",
    excerpt:
      "Eine ehrliche Einordnung: wann Pinterest für kleine Unternehmen und Selbstständige funktioniert, wann nicht – und wie du mit überschaubarem Aufwand anfängst.",
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
