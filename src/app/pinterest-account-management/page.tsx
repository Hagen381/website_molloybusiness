import type { Metadata } from "next";
import heroImage from "@/assets/images/angebote/DSC01061-scaled.jpg";
import Leistungsseite, { BODY } from "@/components/Leistungsseite";
import { services, siteConfig } from "@/lib/site-config";

const angebot = services.find((s) => s.title === "Pinterest Account Management")!;

const path = "/pinterest-account-management/";

// Von der Markeninhaberin freigegeben; der Titel steht absolut, die
// Description ist aus den Intro-Sätzen der Seite gebildet und wird auch vom
// WebPage-Schema unten gelesen.
const pageTitle =
  "Pinterest Account Management für Unternehmen | molloy business";
const pageDescription =
  "Laufende Pinterest Betreuung für Unternehmen: Keyword-Recherche, Content-Planung, Pin-Design, Texte, Veröffentlichung und Auswertung aus einer Hand.";

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
  "90 Pins pro Monat",
  "90 Headlines und Pinterest-Beschreibungen, optimiert anhand relevanter Keywords und Suchinteressen",
  "regelmäßige Veröffentlichung über ein Planungstool",
  "laufende Keyword- und Interessenrecherche",
  "Beobachtung von Pinterest Trends und saisonalen Themen",
  "Hinweise zu relevanten Content-Themen und Potenzialen",
  "Auswertung der Pinterest Analytics mit konkreten Handlungsempfehlungen",
] as const;

// Zielgruppen-Liste wörtlich, inklusive der Satzzeichen am Zeilenende.
const zielgruppeItems = [
  "bereits einen professionell eingerichteten Pinterest Business Account haben,",
  "regelmäßig neuen Pinterest Content veröffentlichen möchten,",
  "Pinterest Strategie und Umsetzung vollständig auslagern wollen,",
  "bestehenden Content langfristig weiterverwenden möchten,",
  "und Pinterest SEO kontinuierlich weiterentwickeln wollen.",
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
      name: "Pinterest Account Management für Unternehmen",
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

export default function PinterestAccountManagement() {
  return (
    <>
      <Leistungsseite
        h1="Pinterest Account Management für Unternehmen"
        subline="Strategische Pinterest Betreuung – von Content und SEO bis zur Veröffentlichung und Analyse."
        image={heroImage}
        imageAlt="pinterest account management für unternehmen"
        /* Quelle 2560×1707 (querformatig): object-fit: cover skaliert auf
           500px Höhe, also ~750px Breite, von denen 401px sichtbar sind —
           `sizes` folgt dieser internen Skalierung, nicht der sichtbaren
           Breite (siehe src/app/page.tsx). */
        imageSizes="(min-width: 1024px) 750px, 100vw"
        intro={
          <>
            <p className={`${BODY} mt-6`}>
              Du hast bereits einen Pinterest Business Account, aber im Alltag
              fehlt dir die Zeit, ihn konsequent und strategisch
              weiterzuführen?
            </p>

            <p className={`${BODY} mt-6`}>
              Als Pinterest Marketing Agentur übernehmen wir mit unserem
              Pinterest Account Management die laufende Betreuung deines
              Profils – inklusive Keyword-Recherche, Content-Planung,
              Pin-Design, Texten, Veröffentlichung und Auswertung.
            </p>

            <p className={`${BODY} mt-6`}>
              Dabei nutzen wir vorhandene Inhalte gezielt weiter und bereiten
              sie für die Pinterest-Suche auf. So wird Pinterest zu einem
              langfristigen organischen Marketingkanal, ohne dass du die
              Umsetzung intern übernehmen musst.
            </p>
          </>
        }
        zielgruppe={{
          heading: "Für wen eignet sich das Pinterest Account Management?",
          lead: <p>Das Angebot passt zu Unternehmen, die:</p>,
          items: zielgruppeItems,
        }}
        cardTitle="Pinterest Account Management – das ist enthalten"
        scope={angebot.scope}
        features={features}
        cardOutro={
          <p>
            Die Strategie wird dabei regelmäßig anhand von Suchverhalten,
            Trends und Performance weiterentwickelt.
          </p>
        }
        crossSell={{
          heading: "Noch keinen Pinterest Business Account?",
          body: (
            <>
              <p>
                Wenn du Pinterest komplett neu starten möchtest, ist zunächst
                unser Pinterest Account Aufbau das passende Angebot.
              </p>
              <p className="mt-6">
                Wir entwickeln dort die strategische Grundlage, richten Profil
                und Pinnwände ein und erstellen die ersten Pins für deinen
                Start.
              </p>
            </>
          ),
          buttonLabel: "Zum Pinterest Account Aufbau",
          href: "/pinterest-account-aufbau/",
        }}
        abschluss={{
          heading: "Pinterest Management komplett auslagern",
          body: (
            <>
              <p>
                Du möchtest Pinterest langfristig nutzen, Strategie und
                laufende Umsetzung aber nicht selbst übernehmen?
              </p>
              <p className="mt-6">
                In einem kostenfreien Erstgespräch schauen wir uns deinen
                bestehenden Account und deine Inhalte an und klären, ob unser
                Pinterest Account Management zu deinem Unternehmen passt.
              </p>
            </>
          ),
          buttonLabel: "Pinterest Account Management anfragen",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
