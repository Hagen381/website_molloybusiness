import type { Metadata } from "next";
import heroImage from "@/assets/images/angebote/DSC00909-scaled.jpg";
import Leistungsseite, { BODY } from "@/components/Leistungsseite";
import { services, siteConfig } from "@/lib/site-config";

const angebot = services.find(
  (s) => s.title === "Pinterest Account als digitales Schaufenster",
)!;

const path = "/pinterest-schaufenster/";

// Kompakte Variante des Pinterest Account Aufbaus für kleine Unternehmen:
// dieselben Leistungen, aber 4 statt 8 Pinnwände und 40 statt 50 Pins. Die
// Texte dieser Seite sind neu formuliert und noch NICHT von der
// Markeninhaberin freigegeben. Der Titel steht absolut (also ohne die
// Vorlage aus layout.tsx), die Description wird auch vom WebPage-Schema
// unten gelesen.
const pageTitle =
  "Pinterest Account als digitales Schaufenster für kleine Unternehmen | molloy business";
const pageDescription =
  "Dein Pinterest Account als digitales Schaufenster: professionell aufgebaut mit Keyword-Recherche, Pinterest SEO, 4 Pinnwänden und 40 Pins – für kleine Unternehmen.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
  alternates: {
    canonical: path,
  },
};

// Merkmalsliste wie beim Pinterest Account Aufbau, nur mit dem kleineren
// Umfang bei Pinnwänden und Pins.
const features = [
  "Mitbewerberanalyse",
  "Keyword- und Interessenrecherche inklusive Schlagwortliste",
  "individuelles Pinterest Konzept für dein Unternehmen",
  "optimiertes Pinterest Profil inklusive Profilcover und Beschreibung",
  "4 thematisch passende Pinnwände inklusive Cover und SEO-Beschreibungen",
  "40 individuell gestaltete Pins inklusive Headlines und Beschreibungen",
  "2 Korrekturschleifen",
] as const;

// Zielgruppen-Liste, Satzzeichen am Zeilenende wie auf den anderen
// Leistungsseiten.
const zielgruppeItems = [
  "ein kleines Unternehmen führst und mit überschaubarem Aufwand auf Pinterest starten möchtest,",
  "ein klares Angebot hast, das sich gut in wenigen Themen bündeln lässt,",
  "auf Pinterest professionell auftreten möchtest, ohne selbst Pins zu gestalten,",
  "oder erst einmal ausprobieren möchtest, was Pinterest für dein Unternehmen bewirken kann.",
] as const;

// WebPage + Service (ohne offers, ohne Review/AggregateRating) sowie der
// unsichtbare BreadcrumbList — siehe CLAUDE.md.
const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${path}#webpage`,
      url: `${siteConfig.url}${path}`,
      name: "Pinterest Account als digitales Schaufenster für kleine Unternehmen",
      description: pageDescription,
      about: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Start",
          item: `${siteConfig.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Angebote",
          item: `${siteConfig.url}/angebote/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: angebot.title,
          item: `${siteConfig.url}${path}`,
        },
      ],
    },
    {
      "@type": "Service",
      name: angebot.title,
      description: angebot.description,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: ["DE", "AT", "CH"],
    },
  ],
};

export default function PinterestSchaufenster() {
  return (
    <>
      <Leistungsseite
        h1="Pinterest Account als digitales Schaufenster für kleine Unternehmen"
        subline="Kompakt aufgebaut, strategisch durchdacht und von Anfang an für die Pinterest-Suche optimiert."
        image={heroImage}
        imageAlt="Pinterest Account als digitales Schaufenster"
        /* Quelle 1707×2560 (hochformatig): sichtbare Breite = Renderbreite. */
        imageSizes="(min-width: 1024px) 401px, 100vw"
        intro={
          <>
            <p className={`${BODY} mt-6`}>
              Du führst ein kleines Unternehmen und möchtest auf Pinterest
              gefunden werden, ohne gleich einen großen Account mit vielen
              Pinnwänden aufzubauen?
            </p>

            <p className={`${BODY} mt-6`}>
              Mit dem digitalen Schaufenster bekommst du einen Pinterest
              Business Account, der dein Angebot klar und ansprechend zeigt –
              wie ein gut gestaltetes Schaufenster, an dem jeden Tag Menschen
              vorbeikommen, die genau nach dem suchen, was du anbietest.
            </p>

            <p className={`${BODY} mt-6`}>
              Dafür nutzen wir dieselbe strategische Grundlage wie beim
              Pinterest Account Aufbau: Mitbewerberanalyse, Keyword-Recherche
              und Pinterest SEO. Nur der Umfang ist kompakter – mit vier
              thematisch passenden Pinnwänden und 40 Pins.
            </p>
          </>
        }
        zielgruppe={{
          heading: "Für wen eignet sich das digitale Schaufenster?",
          lead: <p>Das Angebot passt zu dir, wenn du:</p>,
          items: zielgruppeItems,
          outro: (
            <p>
              Besonders gut passt das Schaufenster, wenn deine Website einige
              zentrale Seiten bietet, auf die wir gezielt verlinken können –
              zum Beispiel deine Leistungen, ausgewählte Produkte oder deine
              Kontaktseite.
            </p>
          ),
        }}
        cardTitle="Digitales Schaufenster – das ist enthalten"
        features={features}
        cardOutro={
          <p>
            Nach Abschluss hast du einen professionell aufgebauten Pinterest
            Business Account mit klarer Keyword-Struktur, vier thematisch
            passenden Pinnwänden und 40 fertigen Pins – dein digitales
            Schaufenster ist geöffnet.
          </p>
        }
        crossSell={{
          heading: "Du brauchst mehr Raum für deine Themen?",
          body: (
            <p>
              Wenn dein Angebot breiter ist und mehr als vier Themen umfasst,
              ist der Pinterest Account Aufbau mit acht Pinnwänden und 50 Pins
              die passendere Grundlage.
            </p>
          ),
          buttonLabel: "Zum Pinterest Account Aufbau",
          href: "/pinterest-account-aufbau/",
        }}
        abschluss={{
          heading: "Dein digitales Schaufenster auf Pinterest",
          body: (
            <p>
              In einem kostenfreien Erstgespräch schauen wir uns dein
              Unternehmen an und klären, ob das digitale Schaufenster zu dir
              passt.
            </p>
          ),
          buttonLabel: "Digitales Schaufenster anfragen",
          mailSubject: "Anfrage: Pinterest Account als digitales Schaufenster",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
