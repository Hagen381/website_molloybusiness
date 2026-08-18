import type { Metadata } from "next";
import Link from "next/link";
import heroImage from "@/assets/images/angebote/DSC01103-scaled.jpg";
import Leistungsseite, { BODY } from "@/components/Leistungsseite";
import { services, siteConfig } from "@/lib/site-config";

const angebot = services.find((s) => s.title === "Pinterest Strategie Call")!;

const path = "/pinterest-strategie-call/";

// Meta-Title und -Description stammen wörtlich aus dem Original, nur ohne
// Emoji (die dort als Trenner dienten) und ohne Preisangaben.
export const metadata: Metadata = {
  title: {
    absolute: "Pinterest Strategie-Call für Unternehmen | Für mehr Klarheit",
  },
  description:
    "Pinterest Strategie-Call für Unternehmen, KMU & Lifestyle-Marken: klare Einschätzung, Strategieideen, Orientierung für dein Business.",
  alternates: {
    canonical: path,
  },
};

// Merkmalsliste wörtlich aus dem Original.
const features = [
  "90 Minuten Video-Call",
  "Analyse deiner Ausgangslage (Thema, Zielgruppe, Website, Produkte)",
  "Konkrete Strategie-Impulse für deinen Start",
  "Ideen für erste Pinnwände & Pin-Themen",
  "Antworten auf alle deine Pinterest-Fragen – ohne Fachchinesisch",
] as const;

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${path}#webpage`,
      url: `${siteConfig.url}${path}`,
      name: "Pinterest Strategie-Call für Unternehmen",
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
        h1="Pinterest Strategie-Call – Klarheit, Fokus & Orientierung für dein Business"
        image={heroImage}
        imageAlt="Pinterest strategie"
        /* Quelle 2560×1707 (querformatig): object-fit: cover skaliert auf
           500px Höhe, also ~750px Breite, von denen 401px sichtbar sind —
           `sizes` folgt dieser internen Skalierung, nicht der sichtbaren
           Breite (siehe src/app/page.tsx). */
        imageSizes="(min-width: 1024px) 750px, 100vw"
        cardTitle="Pinterest Strategie-Call"
        scope={angebot.scope}
        features={features}
        buttonLabel="jetzt call buchen"
        outro={
          <p>
            <strong>Du willst deine Pinterest-Strategie direkt umsetzen?</strong>
            <br />
            Dann empfehle ich dir meinen{" "}
            <Link
              href="/pinterest-account-aufbau/"
              className="text-gold-text underline"
            >
              <strong>Pinterest Account Aufbau für Unternehmen</strong>
            </Link>{" "}
            – dort kümmere ich mich um die vollständige technische und
            strategische Einrichtung deines Accounts.
          </p>
        }
        intro={
          <>
            <p className={`${BODY} mt-6`}>
              Du möchtest verstehen, ob Pinterest der richtige Marketingkanal
              für dein Unternehmen ist – ohne dich durch widersprüchliche
              Blogartikel und veraltete Tipps zu kämpfen?
              <br />
              Im <em>Pinterest Strategie-Call</em> bekommst du in kurzer Zeit
              genau das, was dir fehlt: Klarheit, Orientierung und eine
              realistische Einschätzung, wie Pinterest für dein Business
              funktionieren kann.
            </p>

            <p className={`${BODY} mt-6`}>
              Gemeinsam schauen wir uns an, wie deine Themen auf Pinterest
              performen, welche Formate sinnvoll sind und welche ersten Schritte
              dir wirklich Ergebnisse bringen.
              <br />
              90 Minuten, die dir Zeit sparen, Fehlentscheidungen vermeiden und
              dir helfen, mit einem klaren Plan weiterzugehen.
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
