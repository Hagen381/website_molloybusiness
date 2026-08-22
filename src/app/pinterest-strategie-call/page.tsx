import type { Metadata } from "next";
import heroImage from "@/assets/images/angebote/DSC01103-scaled.jpg";
import Leistungsseite, { BODY } from "@/components/Leistungsseite";
import { services, siteConfig } from "@/lib/site-config";

const angebot = services.find((s) => s.title === "Pinterest Strategie Call")!;

const path = "/pinterest-strategie-call/";

// Von der Markeninhaberin freigegeben; der Titel steht absolut, die
// Description ist aus den Intro-Sätzen der Seite gebildet und wird auch vom
// WebPage-Schema unten gelesen.
const pageTitle = "Pinterest Strategie-Call für Unternehmen | molloy business";
const pageDescription =
  "90 Minuten individuelle Pinterest Beratung: Wir schauen auf deine Ausgangslage und klären, welche Rolle Pinterest in deinem Marketing spielen kann.";

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
  "90 Minuten Video-Call",
  "Analyse deiner Ausgangslage – Thema, Zielgruppe, Website, Produkte oder Angebote",
  "strategische Empfehlungen für deinen Pinterest-Auftritt",
  "Ideen für relevante Pinnwände und Pin-Themen",
  "Impulse zu Pinterest SEO, Keywords und Content",
  "Antworten auf deine individuellen Pinterest-Fragen",
] as const;

// Zielgruppen-Liste wörtlich, inklusive der Satzzeichen am Zeilenende.
const zielgruppeItems = [
  "herausfinden möchtest, ob Pinterest für dein Unternehmen sinnvoll ist,",
  "bereits Pinterest nutzt, aber keine klare Strategie hast,",
  "wissen möchtest, welche Themen und Inhalte sich für Pinterest eignen,",
  "deine nächsten Schritte priorisieren möchtest,",
  "oder Pinterest künftig selbst bzw. intern umsetzen willst.",
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
      name: "Pinterest Strategie-Call für Unternehmen",
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

export default function PinterestStrategieCall() {
  return (
    <>
      <Leistungsseite
        h1="Pinterest Strategie-Call für Unternehmen"
        subline="90 Minuten individuelle Pinterest Beratung für Klarheit, Orientierung und einen konkreten nächsten Schritt."
        image={heroImage}
        imageAlt="Pinterest strategie"
        /* Quelle 2560×1707 (querformatig): object-fit: cover skaliert auf
           500px Höhe, also ~750px Breite, von denen 401px sichtbar sind —
           `sizes` folgt dieser internen Skalierung, nicht der sichtbaren
           Breite (siehe src/app/page.tsx). */
        imageSizes="(min-width: 1024px) 750px, 100vw"
        intro={
          <>
            <p className={`${BODY} mt-6`}>
              Du möchtest wissen, ob Pinterest zu deinem Unternehmen passt,
              welche Chancen deine Themen auf der Plattform haben und wie du
              sinnvoll starten oder deinen bestehenden Account weiterentwickeln
              kannst?
            </p>

            <p className={`${BODY} mt-6`}>
              Im Pinterest Strategie-Call schauen wir gemeinsam auf deine
              Ausgangslage, deine Zielgruppe, deine Website und deine Inhalte.
              Du bekommst eine realistische Einschätzung, welche Rolle
              Pinterest in deinem Marketing spielen kann und worauf du dich bei
              der Umsetzung konzentrieren solltest.
            </p>

            <p className={`${BODY} mt-6`}>
              Als Pinterest Marketing Agentur verbinden wir dabei strategisches
              Pinterest Marketing mit Pinterest SEO, Suchverhalten und
              Content-Planung – statt dir allgemeine Standardtipps mitzugeben.
            </p>
          </>
        }
        zielgruppe={{
          heading: "Für wen eignet sich der Pinterest Strategie-Call?",
          lead: <p>Der Call passt zu dir, wenn du:</p>,
          items: zielgruppeItems,
        }}
        cardTitle="Pinterest Strategie-Call – das ist enthalten"
        scope={angebot.scope}
        features={features}
        cardOutro={
          <p>
            Nach dem Call weißt du, welche nächsten Schritte für dein
            Unternehmen sinnvoll sind und worauf du dich bei deiner Pinterest
            Strategie konzentrieren solltest.
          </p>
        }
        crossSell={{
          heading: "Du möchtest die Strategie nicht selbst umsetzen?",
          body: (
            <p>
              Wenn du Pinterest professionell starten möchtest, die technische
              und strategische Einrichtung aber nicht selbst übernehmen willst,
              ist unser Pinterest Account Aufbau der passende nächste Schritt.
            </p>
          ),
          buttonLabel: "Zum Pinterest Account Aufbau",
          href: "/pinterest-account-aufbau/",
        }}
        abschluss={{
          heading: "Pinterest Strategie besprechen",
          body: (
            <>
              <p>
                Du möchtest herausfinden, wie Pinterest sinnvoll in dein
                Marketing integriert werden kann?
              </p>
              <p className="mt-6">
                In einem kostenfreien Erstgespräch klären wir zunächst, ob der
                Pinterest Strategie-Call zu deiner Ausgangssituation passt.
              </p>
            </>
          ),
          buttonLabel: "Pinterest Strategie-Call anfragen",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
