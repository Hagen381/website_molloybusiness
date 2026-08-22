import type { Metadata } from "next";
import heroImage from "@/assets/images/angebote/DSC01461-scaled.jpg";
import Leistungsseite, { BODY } from "@/components/Leistungsseite";
import { services, siteConfig } from "@/lib/site-config";

const angebot = services.find((s) => s.title === "Pinterest Audit")!;

const path = "/pinterest-audit/";

// Von der Markeninhaberin freigegeben; der Titel steht absolut, die
// Description ist aus den Intro-Sätzen der Seite gebildet und wird auch vom
// WebPage-Schema unten gelesen.
const pageTitle = "Pinterest Audit für Unternehmen | molloy business";
const pageDescription =
  "Pinterest Account Analyse für Unternehmen: Wir prüfen Profil, Pinnwände, Keywords, Pins und Performance und zeigen, wo Optimierungspotenzial besteht.";

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
  "Einstiegs-Call zur Aufnahme des aktuellen Status",
  "Profil- und Pinnwandanalyse",
  "Pin- und Content-Analyse",
  "Performance-Analyse anhand deiner Pinterest Analytics",
  "Keyword- und Pinterest-SEO-Check",
  "Wettbewerbs-Check",
  "Abschluss-Call mit priorisierten Handlungsempfehlungen",
] as const;

// Zielgruppen-Liste wörtlich, inklusive der Satzzeichen am Zeilenende.
const zielgruppeItems = [
  "Reichweite oder Website-Traffic stagnieren,",
  "Keywords fehlen oder nicht strategisch eingesetzt werden,",
  "Pinnwände und Profilstruktur überprüft werden sollen,",
  "deine Pins keine klare Content- oder SEO-Strategie verfolgen,",
  "du deine Pinterest Analytics besser verstehen möchtest,",
  "oder du vor der weiteren Umsetzung wissen möchtest, wo die größten Potenziale deines Accounts liegen.",
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
      name: "Pinterest Audit für Unternehmen",
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

export default function PinterestAudit() {
  return (
    <>
      <Leistungsseite
        h1="Pinterest Audit für Unternehmen"
        subline="Fundierte Analyse deines Pinterest Business Accounts mit klaren Prioritäten und konkreten Handlungsempfehlungen."
        image={heroImage}
        imageAlt="Pinterest audit"
        /* Quelle 2560×1707 (querformatig): object-fit: cover skaliert auf
           500px Höhe, also ~750px Breite, von denen 401px sichtbar sind —
           `sizes` folgt dieser internen Skalierung, nicht der sichtbaren
           Breite (siehe src/app/page.tsx). */
        imageSizes="(min-width: 1024px) 750px, 100vw"
        intro={
          <>
            <p className={`${BODY} mt-6`}>
              Du nutzt Pinterest bereits, aber bist unsicher, warum dein
              Account nicht die gewünschte Sichtbarkeit oder den erwarteten
              Website-Traffic entwickelt?
            </p>

            <p className={`${BODY} mt-6`}>
              Mit unserem Pinterest Audit analysieren wir deinen bestehenden
              Business Account strategisch und zeigen dir, wo
              Optimierungspotenzial besteht – von Profil und Pinnwänden über
              Keywords und Pins bis zur bisherigen Performance.
            </p>

            <p className={`${BODY} mt-6`}>
              Als Pinterest Marketing Agentur betrachten wir dabei nicht nur
              einzelne Kennzahlen, sondern auch Pinterest SEO, Content,
              Struktur und Wettbewerb.
            </p>
          </>
        }
        zielgruppe={{
          heading: "Wann ist ein Pinterest Audit sinnvoll?",
          lead: <p>Ein Pinterest Audit passt zu dir, wenn:</p>,
          items: zielgruppeItems,
          outro: (
            <p>
              Du erhältst eine klare Einschätzung deines aktuellen
              Pinterest-Auftritts und priorisierte Handlungsempfehlungen, die
              du anschließend selbst umsetzen oder an uns übergeben kannst.
            </p>
          ),
        }}
        cardTitle="Pinterest Audit – das ist enthalten"
        scope={angebot.scope}
        features={features}
        crossSell={{
          heading: "Du möchtest die Optimierung anschließend abgeben?",
          body: (
            <p>
              Wenn du deinen Pinterest Account nach dem Audit nicht selbst
              weiterentwickeln möchtest, können wir die laufende Betreuung mit
              unserem Pinterest Account Management übernehmen.
            </p>
          ),
          buttonLabel: "Zum Pinterest Account Management",
          href: "/pinterest-account-management/",
        }}
        abschluss={{
          heading: "Pinterest Account analysieren lassen",
          body: (
            <p>
              In einem kostenfreien Erstgespräch klären wir zunächst, ob ein
              Pinterest Audit zu deiner aktuellen Situation passt.
            </p>
          ),
          buttonLabel: "Pinterest Audit anfragen",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
