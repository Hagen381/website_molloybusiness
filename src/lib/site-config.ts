export const siteConfig = {
  name: "molloy business",
  owner: "Juliette Oppel",
  // Ohne www — die Live-Domain läuft auf molloybusiness.com, www leitet dorthin um.
  url: "https://molloybusiness.com",
  titleTemplate: "%s | molloy business",
  defaultTitle: "Pinterest Marketing Agentur für Unternehmen | molloy business",
  description:
    "Pinterest Marketing Agentur im deutschsprachigen Raum: organisch statt Ads – Strategie, Pin-Design und laufende Betreuung für dein Unternehmen.",
  email: "info@molloybusiness.com",
  phone: "+49 15678 196744",
  locations: "Deutschland, Schweiz, Österreich & weltweit (remote)",
  social: {
    instagram: "https://www.instagram.com/molloy_business/",
    facebook: "https://www.facebook.com/profile.php?id=61554803184566",
    whatsapp: "https://wa.me/+4915678196744",
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
    { label: "Über mich", href: "#" },
    { label: "Blog", href: "/blog/" },
    { label: "Kontakt", href: "#" },
  ],
  legal: [
    { label: "Kontakt", href: "#" },
    { label: "Impressum", href: "#" },
    { label: "Datenschutz", href: "#" },
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
    path: "/blog/",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "/blog/was-kostet-pinterest-marketing/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/blog/lohnt-sich-pinterest-fuer-kleine-unternehmen/",
    changeFrequency: "monthly",
    priority: 0.6,
  },
] as const;

// Zentrale Artikelliste für /blog/ — neue Artikel nur hier eintragen
// (plus eigener Eintrag in sitePages oben), Übersicht und Schema bauen
// daraus automatisch auf. `title` wird wortgleich in Übersicht, Breadcrumb
// und BreadcrumbList-Schema des Artikels verwendet.
export const blogPosts = [
  {
    slug: "was-kostet-pinterest-marketing",
    title: "Was kostet Pinterest Marketing?",
    date: "2026-08-08",
    excerpt:
      "Von Strategie Call bis laufender Betreuung: wovon der Preis für Pinterest Marketing abhängt, wie Angebote üblicherweise aufgebaut sind – und alle Preise von molloy business im Überblick.",
  },
  {
    slug: "lohnt-sich-pinterest-fuer-kleine-unternehmen",
    title: "Lohnt sich Pinterest für kleine Unternehmen?",
    date: "2026-08-08",
    excerpt:
      "Eine ehrliche Einordnung: wann Pinterest für kleine Unternehmen und Selbstständige funktioniert, wann nicht – und wie du mit überschaubarem Aufwand anfängst.",
  },
] as const;

// Preise zentral hier pflegen — JEDE Preisanzeige (Text wie Schema) liest aus
// diesen Feldern, niemals Zahlen direkt in Komponenten schreiben.
export const services = [
  {
    title: "Pinterest Account Management",
    description:
      "Laufende Betreuung deines Pinterest-Accounts: Content, Pins und Strategie aus einer Hand. Du gibst den Kanal komplett ab und bekommst jeden Monat frische, SEO-optimierte Pins samt Auswertung.",
    href: "/pinterest-account-management/",
    price: 666,
    priceUnit: "pro Monat",
    priceNote: "90 Pins pro Monat · Vorkasse · monatlich kündbar",
  },
  {
    title: "Pinterest Account Aufbau",
    description:
      "Professioneller Neuaufbau deines Accounts mit klarer Struktur von Anfang an. Von Profil und Boards bis zu den ersten Pins entsteht ein Fundament, auf dem dein Pinterest Marketing langfristig aufbaut.",
    href: "/pinterest-account-aufbau/",
    price: 2777,
    priceUnit: "einmalig",
    priceNote: "50 % Vorkasse, 50 % nach Upload aller Pins",
  },
  {
    title: "Pinterest Strategie Call",
    description:
      "Individuelle Beratung, um deine Pinterest-Strategie auf den Punkt zu bringen. In 90 Minuten klären wir deine Fragen und du bekommst konkrete nächste Schritte für deinen Account.",
    href: "/pinterest-strategie-call/",
    price: 144,
    priceUnit: "einmalig",
    priceNote: "90 Minuten · wird bei einer Zusammenarbeit voll angerechnet",
  },
  {
    title: "Pinterest Workshop",
    description:
      "Praxisnahes Workshop-Format für Teams und Online-Events rund um Pinterest Marketing. Eine Stunde kompaktes Wissen, verständlich aufbereitet und mit Raum für deine Fragen.",
    href: "/pinterest-workshop/",
    price: 250,
    priceUnit: "einmalig",
    priceNote: "1 Stunde online · inkl. Q&A und Factsheet",
  },
  {
    title: "Pinterest Audit",
    description:
      "Detaillierte Analyse deines bestehenden Accounts mit konkreten Handlungsempfehlungen. Du erfährst, was bereits funktioniert und an welchen Stellen dein Account Potenzial verschenkt.",
    href: "/pinterest-audit/",
    price: 333,
    priceUnit: "einmalig",
    priceNote: "Vorkasse",
  },
  {
    title: "Pinterest Content Paket",
    description:
      "SEO-optimierte Pins, Headlines und Beschreibungen – fertig für deinen Redaktionsplan. Du veröffentlichst selbst, molloy business liefert dir den passenden Content.",
    href: "/pinterest-content-paket/",
    price: 444,
    priceUnit: "pro Monat",
    priceNote: "30 Premium-Pins pro Monat",
  },
] as const;

// TODO: Formulierung zur Umsatzsteuer wird nach Rücksprache mit dem
// Steuerberater ergänzt.
export const priceVatNote = "Alle Preise in Euro.";
