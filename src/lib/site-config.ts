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
        { label: "Pinterest Strategie Call", href: "#" },
        { label: "Pinterest Workshop", href: "#" },
        { label: "Pinterest Audit", href: "#" },
        { label: "Pinterest Content Paket", href: "#" },
      ],
    },
    { label: "Über mich", href: "#" },
    { label: "Blog", href: "#" },
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
    href: "#",
    price: 144,
    priceUnit: "einmalig",
    priceNote: "90 Minuten · wird bei einer Zusammenarbeit voll angerechnet",
  },
  {
    title: "Pinterest Workshop",
    description:
      "Praxisnahes Workshop-Format für Teams und Online-Events rund um Pinterest Marketing. Eine Stunde kompaktes Wissen, verständlich aufbereitet und mit Raum für deine Fragen.",
    href: "#",
    price: 250,
    priceUnit: "einmalig",
    priceNote: "1 Stunde online · inkl. Q&A und Factsheet",
  },
  {
    title: "Pinterest Audit",
    description:
      "Detaillierte Analyse deines bestehenden Accounts mit konkreten Handlungsempfehlungen. Du erfährst, was bereits funktioniert und an welchen Stellen dein Account Potenzial verschenkt.",
    href: "#",
    price: 333,
    priceUnit: "einmalig",
    priceNote: "Vorkasse",
  },
  {
    title: "Pinterest Content Paket",
    description:
      "SEO-optimierte Pins, Headlines und Beschreibungen – fertig für deinen Redaktionsplan. Du veröffentlichst selbst, molloy business liefert dir den passenden Content.",
    href: "#",
    price: 444,
    priceUnit: "pro Monat",
    priceNote: "30 Premium-Pins pro Monat",
  },
] as const;

// TODO: Formulierung zur Umsatzsteuer wird nach Rücksprache mit dem
// Steuerberater ergänzt.
export const priceVatNote = "Alle Preise in Euro.";
