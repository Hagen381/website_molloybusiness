import type { Metadata } from "next";
import Link from "next/link";
import heroImage from "@/assets/images/angebote/DSC01061-scaled.jpg";
import Leistungsseite, { BODY, H2 } from "@/components/Leistungsseite";
import { services, siteConfig } from "@/lib/site-config";

const angebot = services.find((s) => s.title === "Pinterest Account Management")!;

const path = "/pinterest-account-management/";

// Meta-Title und -Description stammen wörtlich aus dem Original, nur ohne
// Emoji (die dort als Trenner dienten) und ohne Preisangaben.
export const metadata: Metadata = {
  title: {
    absolute: "Pinterest Account Management für Unternehmen | Hier anfragen",
  },
  description:
    "Pinterest Account Management für KMU & Lifestyle-Marken: Done-for-you-Service, Keywords & Texte, Design & Pin-Upload.",
  alternates: {
    canonical: path,
  },
};

// Merkmalsliste wörtlich aus dem Original. Beim Punkt zum Planungstool ist
// nur der Klammerzusatz zur Preisabgrenzung entfallen.
const features = [
  "90 Pins pro Monat (3 pro Tag)",
  "90 Headlines und Beschreibungen – suchoptimiert anhand neuer Keywords und Interessen",
  "Tägliches Pinnen von 3 Pins via Planungstool",
  "Regelmäßige Keyword- und Interessenrecherche",
  "Hinweise zu Trends und möglichen Content-Strategien",
  "Auswertung der Pinterest Analytics mit klaren Handlungsempfehlungen",
] as const;

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${path}#webpage`,
      url: `${siteConfig.url}${path}`,
      name: "Pinterest Account Management für Unternehmen",
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
        image={heroImage}
        imageAlt="pinterest account management für unternehmen"
        /* Quelle 2560×1707 (querformatig): object-fit: cover skaliert auf
           500px Höhe, also ~750px Breite, von denen 401px sichtbar sind —
           `sizes` folgt dieser internen Skalierung, nicht der sichtbaren
           Breite (siehe src/app/page.tsx). */
        imageSizes="(min-width: 1024px) 750px, 100vw"
        cardTitle="Pinterest Account Management für Unternehmen"
        scope={angebot.scope}
        features={features}
        buttonLabel="jetzt pinterest account management anfragen"
        cardNote={
          <p>
            Hinweis: Pinterest empfiehlt je nach Branche 3–5 frische Pins pro
            Tag. Mit diesem Paket decken wir bereits eine wirkungsvolle und
            nachhaltige Basis ab, die bei vielen Unternehmen zu kontinuierlichem
            Wachstum führt.
          </p>
        }
        intro={
          <>
            <p className={`${BODY} mt-6`}>
              Du hast bereits einen Pinterest Business Account, aber im Alltag
              fehlt dir die Zeit, ihn konsequent zu bespielen? Du möchtest
              regelmäßig pinnen, ohne dich selbst um Grafiken, Texte, Keywords
              und Analytics kümmern zu müssen?
            </p>

            <p className={`${BODY} mt-6`}>
              Mit meinem{" "}
              <strong>Pinterest Account Management für Unternehmen</strong>{" "}
              übernehme ich die komplette laufende Betreuung deines Profils –
              strategisch, suchoptimiert und passend zu deiner Marke. Ideal für
              KMU und Lifestyle-Brands, die Pinterest als nachhaltigen
              Marketingkanal nutzen wollen, ohne ein eigenes Team aufzubauen.
            </p>

            <p className={`${BODY} mt-6`}>
              Du erhältst jeden Monat 90 hochwertige Pins, klare Strukturen und
              eine verlässliche Umsetzung, die deine Reichweite langfristig
              stärkt.
            </p>

            <h2 className={`${H2} mt-12`}>
              Noch keinen Pinterest Business Account?
            </h2>

            <p className={`${BODY} mt-6`}>
              Kein Problem!
              <br />
              Wenn du Pinterest komplett neu starten möchtest, schau dir gern
              mein Angebot{" "}
              <Link
                href="/pinterest-account-aufbau/"
                className="text-gold-text underline"
              >
                <em>„Pinterest Account Aufbau für Unternehmen“</em>
              </Link>{" "}
              an. Dort richte ich deinen gesamten Pinterest Business Account
              professionell ein – inklusive Strategie, Pinnwänden, Profil und 50
              fertigen Pins.
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
