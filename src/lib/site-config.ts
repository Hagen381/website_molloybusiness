export const siteConfig = {
  name: "molloy business",
  owner: "Juliette Oppel",
  url: "https://www.molloybusiness.com",
  titleTemplate: "%s | molloy business",
  defaultTitle: "Pinterest Marketing Agentur für Unternehmen | molloy business",
  description:
    "Pinterest Marketing Agentur für Unternehmen im deutschsprachigen Raum: organischer Aufbau statt Ads, für touristische Unternehmen, Food-Marken, Finanzdienstleister, KMU & Selbstständige.",
  email: "info@molloybusiness.com",
  phone: "+49 15678 196744",
  locations: "Deutschland, Schweiz, Österreich & weltweit (remote)",
  social: {
    instagram: "https://www.instagram.com/molloy_business/",
    facebook: "https://www.facebook.com/profile.php?id=61554803184566",
    whatsapp: "https://wa.me/+4915678196744",
    linkedin: "https://www.linkedin.com/in/juliette-oppel-b8a112245/",
    pinterest: "https://www.pinterest.com/",
  },
} as const;

export const navigation = {
  main: [
    { label: "Start", href: "/" },
    {
      label: "Angebote",
      href: "/pinterest-marketing-agentur/",
      children: [
        { label: "Pinterest Account Management für Unternehmen", href: "#" },
        { label: "Pinterest Account Aufbau für Unternehmen", href: "#" },
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

export const services = [
  {
    title: "Pinterest Account Management",
    description:
      "Laufende Betreuung deines Pinterest-Accounts: Content, Pins und Strategie aus einer Hand.",
    href: "#",
  },
  {
    title: "Pinterest Account Aufbau",
    description:
      "Professioneller Neuaufbau deines Accounts mit klarer Struktur von Anfang an.",
    href: "#",
  },
  {
    title: "Pinterest Strategie Call",
    description:
      "Individuelle Beratung, um deine Pinterest-Strategie auf den Punkt zu bringen.",
    href: "#",
  },
  {
    title: "Pinterest Workshop",
    description:
      "Praxisnahes Workshop-Format für Teams und Online-Events rund um Pinterest Marketing.",
    href: "#",
  },
  {
    title: "Pinterest Audit",
    description:
      "Detaillierte Analyse deines bestehenden Accounts mit konkreten Handlungsempfehlungen.",
    href: "#",
  },
  {
    title: "Pinterest Content Paket",
    description:
      "SEO-optimierte Pins, Headlines und Beschreibungen – fertig für deinen Redaktionsplan.",
    href: "#",
  },
] as const;
