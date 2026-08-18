import type { Metadata } from "next";
import Link from "next/link";
import heroImage from "@/assets/images/angebote/DSC01181-scaled.jpg";
import Leistungsseite, { BODY, H2 } from "@/components/Leistungsseite";
import { services, siteConfig } from "@/lib/site-config";

const angebot = services.find((s) => s.title === "Pinterest Account Aufbau")!;

const path = "/pinterest-account-aufbau/";

// Meta-Title und -Description stammen wörtlich aus dem Original, nur ohne
// Emoji (die dort als Trenner dienten, hier durch Kommas ersetzt) und ohne
// Preisangaben. Deshalb `absolute`: der Original-Title trägt seinen eigenen
// Zusatz und soll nicht zusätzlich die Template-Endung bekommen.
export const metadata: Metadata = {
  title: { absolute: "Pinterest Account Aufbau für Unternehmen | Hier anfragen!" },
  description:
    "Professioneller Pinterest Account Aufbau für Unternehmen - strategisch, zielgruppengerecht, seo-optimiert, Evergreen-Content.",
  alternates: {
    canonical: path,
  },
};

// Merkmalsliste wörtlich aus dem Original.
const features = [
  "Mitbewerberanalyse",
  "Keyword & Interessen Recherche inkl. Schlagwortliste",
  "Individuelles Pinterest Konzept für dein Business",
  "Professionelles Profilcover & optimierte Beschreibung",
  "8 strategische Pinnwände inkl. Cover & SEO-Beschreibungen",
  "50 Pins inkl. Design, Headlines & Beschreibungen",
  "2 Korrekturschleifen",
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
        h1="Pinterest Account Aufbau – professionell, strategisch, bereit für Wachstum"
        image={heroImage}
        imageAlt="Pinterest account aufbau"
        /* Quelle 1707×2560 (hochformatig): sichtbare Breite = Renderbreite. */
        imageSizes="(min-width: 1024px) 401px, 100vw"
        cardTitle="Pinterest Account Aufbau für Unternehmen"
        scope={angebot.scope}
        features={features}
        buttonLabel="pinterest account aufbau - hier anfragen"
        cardNote={
          <p>
            Mit deinem komplett eingerichteten Pinterest Business Account
            erhältst du: einen professionellen Markenauftritt, 50 fertige,
            geplante Pins (Planungstool nicht inklusive), eine klare Struktur
            für zukünftige Inhalte, die Basis für kontinuierliches Wachstum auf
            Pinterest, und die Möglichkeit, direkt Traffic auf deine Website zu
            leiten. Wenn du möchtest, übernehme ich anschließend gern das
            monatliche Pinterest Management, damit du dich voll auf dein
            Kerngeschäft konzentrieren kannst.
          </p>
        }
        intro={
          <>
            <p className={`${BODY} mt-6`}>
              Pinterest ist eine der effektivsten Plattformen, wenn es darum
              geht{" "}
              <strong>
                langfristig sichtbar zu werden, Website-Traffic zu steigern und
                neue Zielgruppen zu erreichen
              </strong>
              . Anders als Social Media funktionieren Pins wie Suchergebnisse:
              Sie bleiben monatelang auffindbar und liefern nachhaltige
              Ergebnisse, ohne dass du täglich posten musst.
            </p>

            <p className={`${BODY} mt-6`}>
              Wenn du Pinterest als <strong>Marketingkanal</strong> nutzen
              möchtest – aber kein eigenes Team dafür hast –, richte ich deinen
              Business Account so ein, dass er{" "}
              <strong>
                von Anfang an professionell, strukturiert und SEO-optimiert
              </strong>{" "}
              ist.
            </p>

            <h2 className={`${H2} mt-12`}>
              Pinterest Account Aufbau für Unternehmen – ideal für
              Lifestyle-Marken &amp; KMU
            </h2>

            <p className={`${BODY} mt-6`}>
              Ich übernehme den kompletten Pinterest Account Aufbau für dein
              Unternehmen – nach klarer Strategie, mit Fokus auf Suchintention,
              Markenauftritt und nachhaltigen Ergebnissen.
              <br />
              Du bekommst einen Account, der:
            </p>

            <ul className={`${BODY} mt-2 list-disc space-y-2 pl-6`}>
              <li>perfekt zu deiner Marke passt,</li>
              <li>algorithmusfreundlich aufgebaut ist,</li>
              <li>klar strukturiert ist,</li>
              <li>und langfristig Traffic erzeugen kann</li>
            </ul>

            <p className={`${BODY} mt-6`}>
              Du hast bereits einen Pinterest Business Account und suchst
              jemanden, der die monatliche Pflege übernimmt? Dann schau dir mal
              mein Angebot{" "}
              <Link
                href="/pinterest-account-management/"
                className="text-gold-text underline"
              >
                <em>
                  <strong>„Pinterest Account Management für Unternehmen“</strong>
                </em>
              </Link>{" "}
              an.
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
