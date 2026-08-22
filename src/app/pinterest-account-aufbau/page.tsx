import type { Metadata } from "next";
import heroImage from "@/assets/images/angebote/DSC01181-scaled.jpg";
import Leistungsseite, { BODY } from "@/components/Leistungsseite";
import { services, siteConfig } from "@/lib/site-config";

const angebot = services.find((s) => s.title === "Pinterest Account Aufbau")!;

const path = "/pinterest-account-aufbau/";

// Von der Markeninhaberin freigegeben; der Titel steht absolut (also ohne die
// Vorlage aus layout.tsx), die Description ist aus den Intro-Sätzen der Seite
// gebildet und wird auch vom WebPage-Schema unten gelesen.
const pageTitle = "Pinterest Account Aufbau für Unternehmen | molloy business";
const pageDescription =
  "Wir übernehmen den kompletten Pinterest Account Aufbau: Keyword-Recherche, Pinterest SEO, Profil, Pinnwände und die ersten Pins für dein Unternehmen.";

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

// Merkmalsliste wörtlich aus den freigegebenen Texten.
const features = [
  "Mitbewerberanalyse",
  "Keyword- und Interessenrecherche inklusive Schlagwortliste",
  "individuelles Pinterest Konzept für dein Unternehmen",
  "optimiertes Pinterest Profil inklusive Profilcover und Beschreibung",
  "8 strategische Pinnwände inklusive Cover und SEO-Beschreibungen",
  "50 individuell gestaltete Pins inklusive Headlines und Beschreibungen",
  "2 Korrekturschleifen",
] as const;

// Zielgruppen-Liste wörtlich, inklusive der Satzzeichen am Zeilenende.
const zielgruppeItems = [
  "mit Pinterest neu starten möchtest,",
  "bereits einen Business Account hast, dem eine klare Strategie fehlt,",
  "vorhandenen Content gezielt über Pinterest sichtbar machen möchtest,",
  "oder eine professionelle Grundlage für das spätere Pinterest Management brauchst.",
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
      name: "Pinterest Account Aufbau für Unternehmen",
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

export default function PinterestAccountAufbau() {
  return (
    <>
      <Leistungsseite
        h1="Pinterest Account Aufbau für Unternehmen"
        subline="Professionell eingerichtet, strategisch strukturiert und von Anfang an für die Pinterest-Suche optimiert."
        image={heroImage}
        imageAlt="Pinterest account aufbau"
        /* Quelle 1707×2560 (hochformatig): sichtbare Breite = Renderbreite. */
        imageSizes="(min-width: 1024px) 401px, 100vw"
        intro={
          <>
            <p className={`${BODY} mt-6`}>
              Du möchtest Pinterest als Marketingkanal nutzen, aber nicht mit
              einem leeren Profil, beliebigen Pinnwänden und planlos
              veröffentlichten Pins starten?
            </p>

            <p className={`${BODY} mt-6`}>
              Wir übernehmen den kompletten Pinterest Account Aufbau und
              schaffen die strategische Grundlage für langfristige organische
              Sichtbarkeit und Website-Traffic.
            </p>

            <p className={`${BODY} mt-6`}>
              Dafür verbinden wir Keyword-Recherche, Pinterest SEO,
              Markenauftritt und Content-Strategie zu einem Business Account,
              der von Anfang an klar aufgebaut ist und zu deinem Unternehmen
              passt.
            </p>
          </>
        }
        zielgruppe={{
          heading: "Für wen eignet sich der Pinterest Account Aufbau?",
          lead: <p>Das Angebot passt zu dir, wenn du:</p>,
          items: zielgruppeItems,
          outro: (
            <p>
              Besonders sinnvoll ist Pinterest, wenn deine Website mehrere
              relevante Seiten bietet, auf die wir gezielt verlinken können –
              zum Beispiel Produkte, Angebote, Kategorien, Blogartikel oder
              Ratgeber.
            </p>
          ),
        }}
        cardTitle="Pinterest Account Aufbau – das ist enthalten"
        features={features}
        cardOutro={
          <p>
            Nach Abschluss hast du einen professionell aufgebauten Pinterest
            Business Account, eine klare Keyword- und Pinnwandstruktur und 50
            fertige Pins als Grundlage für dein weiteres Pinterest Marketing.
          </p>
        }
        crossSell={{
          heading: "Du möchtest Pinterest anschließend komplett auslagern?",
          body: (
            <p>
              Wenn der Account steht und du die laufende Betreuung nicht selbst
              übernehmen möchtest, können wir anschließend auch dein Pinterest
              Account Management übernehmen.
            </p>
          ),
          buttonLabel: "Zum Pinterest Account Management",
          href: "/pinterest-account-management/",
        }}
        abschluss={{
          heading: "Pinterest Account professionell aufbauen lassen",
          body: (
            <p>
              In einem kostenfreien Erstgespräch schauen wir uns deine
              Ausgangssituation an und klären, ob der Pinterest Account Aufbau
              zu deinem Unternehmen passt.
            </p>
          ),
          buttonLabel: "Pinterest Account Aufbau anfragen",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
