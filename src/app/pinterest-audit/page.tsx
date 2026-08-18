import type { Metadata } from "next";
import Link from "next/link";
import heroImage from "@/assets/images/angebote/DSC01461-scaled.jpg";
import Leistungsseite, { BODY, H2 } from "@/components/Leistungsseite";
import { services, siteConfig } from "@/lib/site-config";

const angebot = services.find((s) => s.title === "Pinterest Audit")!;

const path = "/pinterest-audit/";

// Meta-Title und -Description stammen wörtlich aus dem Original, nur ohne
// Emoji (die dort als Trenner dienten) und ohne Preisangaben.
export const metadata: Metadata = {
  title: {
    absolute: "Pinterest Audit für Unternehmen | Pinterest Account Analyse",
  },
  description:
    "Professionelles Pinterest Audit für deinen bestehenden Business-Account: Performance-Check, Mitbewerberanalyse, Tipps & Strategie.",
  alternates: {
    canonical: path,
  },
};

// Merkmalsliste wörtlich aus dem Original.
const features = [
  "Einstiegs-Call zur Aufnahme des Status Quo",
  "Profil & Pinnwand Analyse",
  "Pin Analyse",
  "Performance Analyse anhand von Pinterest Analytics",
  "Wettbewerbs-Check",
  "Abschluss-Call mit Handlungsempfehlung",
] as const;

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${path}#webpage`,
      url: `${siteConfig.url}${path}`,
      name: "Pinterest Audit für Unternehmen",
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
        h1="Pinterest Audit für Unternehmen – Analyse & für deinen Business Account"
        image={heroImage}
        imageAlt="Pinterest audit"
        /* Quelle 2560×1707 (querformatig): object-fit: cover skaliert auf
           500px Höhe, also ~750px Breite, von denen 401px sichtbar sind —
           `sizes` folgt dieser internen Skalierung, nicht der sichtbaren
           Breite (siehe src/app/page.tsx). */
        imageSizes="(min-width: 1024px) 750px, 100vw"
        cardTitle="Pinterest Audit"
        scope={angebot.scope}
        features={features}
        buttonLabel="jetzt pinterest audit sichern"
        outro={
          <p>
            <strong>Du willst nach dem Audit die Betreuung abgeben?</strong>
            <br />
            Dann ist mein Angebot{" "}
            <Link
              href="/pinterest-account-management/"
              className="text-gold-text underline"
            >
              <em>
                <strong>„Pinterest Account Management für Unternehmen“</strong>
              </em>
            </Link>{" "}
            ideal für dich.
          </p>
        }
        intro={
          <>
            <p className={`${BODY} mt-6`}>
              Du hast bereits einen Pinterest Business Account, aber bist
              unsicher, warum deine Pins keine Reichweite aufbauen oder warum
              der Traffic ausbleibt? Dann ist das{" "}
              <strong>Pinterest Audit</strong> genau das richtige Angebot für
              dich.
            </p>

            <p className={`${BODY} mt-6`}>
              Ich analysiere deinen Account gründlich, identifiziere Fehler,
              Lücken und Potenziale – und gebe dir einen klaren Fahrplan an die
              Hand, wie du Pinterest strategisch und nachhaltig verbessern
              kannst.
            </p>

            <h2 className={`${H2} mt-12`}>
              Warum eine Pinterest Account Analyse sinnvoll ist
            </h2>

            <p className={`${BODY} mt-6`}>
              Viele Unternehmen starten mit Pinterest, ohne zu wissen, was
              wirklich funktioniert. Typische Probleme sind:
            </p>

            <ul className={`${BODY} mt-2 list-disc space-y-2 pl-6`}>
              <li>kaum Reichweite oder stagnierende Zahlen</li>
              <li>falsche oder fehlende Keywords</li>
              <li>unsichtbare Boards oder chaotische Strukturen</li>
              <li>inkonsistente Designs</li>
              <li>fehlende Strategie</li>
              <li>unklare Zielgruppenansprache</li>
              <li>keine SEO-Optimierung</li>
            </ul>

            <p className={`${BODY} mt-6`}>
              Durch meine Erfahrung bekommst du <strong>Transparenz</strong>,{" "}
              <strong>Klarheit</strong> und{" "}
              <strong>konkrete Handlungsschritte</strong>, die du direkt umsetzen
              kannst – egal, ob du später selbst weitermachst oder mir die
              Betreuung übergibst.
            </p>
          </>
        }
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
