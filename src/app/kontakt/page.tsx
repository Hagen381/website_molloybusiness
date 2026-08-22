import type { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import kontaktImage from "@/assets/images/kontakt/DSC01040-scaled-e1763199028368.jpg";
import { siteConfig } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";

const path = "/kontakt/";

// Wortgleich im BreadcrumbList-Schema (sichtbaren Brotkrumenpfad hat das
// Original auf keiner Seite, siehe CLAUDE.md).
const pageName = "Kontakt";

const pageTitle = "Kontakt zu molloy business | Pinterest Marketing Agentur";
const pageDescription =
  "Du suchst eine Pinterest Marketing Agentur, die Strategie und Umsetzung übernimmt – oder möchtest herausfinden, ob Pinterest zu deinem Unternehmen passt?";

export const metadata: Metadata = {
  // Absolut, damit die globale Titelvorlage "%s | molloy business" hier
  // nicht greift — der Markenname steht schon im Titel.
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: `${siteConfig.url}${path}`,
    siteName: siteConfig.name,
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

// ---------------------------------------------------------------------------
// Typografie, am Original (OceanWP + Elementor) bei 1536px nachgemessen.
// Die Basiswerte sind die mobile Verkleinerung (~72 %), die Werte hinter `md:`
// die Desktop-Maße. NICHT ohne ausdrücklichen Auftrag ändern.
// ---------------------------------------------------------------------------

// H1 dieser Seite — Antic Didone 47/50, 600, ls 1.4px, #595959, zentriert.
// Zeilenhöhe 50px wie auf /ueber-mich/, nicht 65.8px wie auf den Leistungsseiten.
const H1 =
  "text-center tracking-[1.4px] text-[34px] leading-[36px] md:text-[47px] md:leading-[50px]";
// H2 der linken Spalte — Antic Didone 28/40, 400, ls 1.4px, #C49C5E, linksbündig.
const H2_GOLD =
  "font-normal tracking-[1.4px] text-gold-light text-[22px] leading-[32px] md:text-[28px] md:leading-[40px]";

// Fließtext: 18/30, ls 1.4px, #545454 — kommt aus den <body>-Regeln in
// globals.css, hier nur die Schriftfamilie absichern.
const BODY = "font-body";

// Elementor-Spaltenabstand ("column gap: default"): der 1140px-Rahmen wird
// ohne Grid-Gap geteilt, die sichtbaren 10px je Spalte sitzen als
// Innenabstand in der Spalte selbst.
const COL = "lg:px-[10px]";

// tel:-Ziel — Telefonnummern gehören ohne Leerzeichen in den Link,
// sichtbar bleibt die formatierte Schreibweise aus siteConfig.
const telHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;

// Seiten-Schema: WebPage + ContactPage (ContactPage ist die Unterklasse von
// WebPage, deshalb ein Knoten mit beiden Typen) und der übliche
// BreadcrumbList. KEIN Formular-Schema — die Seite hat bewusst kein Formular.
const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["WebPage", "ContactPage"],
      "@id": `${siteConfig.url}${path}#webpage`,
      url: `${siteConfig.url}${path}`,
      name: pageTitle,
      description: pageDescription,
      about: { "@id": `${siteConfig.url}/#organization` },
      isPartOf: { "@id": `${siteConfig.url}/#organization` },
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
          name: pageName,
          item: `${siteConfig.url}${path}`,
        },
      ],
    },
  ],
};

export default function Kontakt() {
  return (
    <>
      {/* ------------------------------------------------------------------
          1) KOPF — Hintergrund #D9D9D9, 80px oben / 50px unten. Der
          Inhaltsrahmen ist hier NUR 770px breit (nicht die üblichen 1140px)
          und komplett zentriert. Unterhalb davon läuft er über die volle
          Breite, der Seitenabstand kommt aus `container-page`.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page pt-[80px] pb-[50px]">
          <div className="mx-auto w-full max-w-[770px] text-center">
            <h1 className={H1}>Kontakt zu molloy business</h1>

            <p className={`${BODY} mt-6`}>
              Du suchst eine Pinterest Marketing Agentur, die Strategie und
              Umsetzung übernimmt – oder möchtest zunächst herausfinden, ob
              Pinterest zu deinem Unternehmen passt?
            </p>

            <p className={`${BODY} mt-6`}>Dann melde dich gern bei uns.</p>

            <p className={`${BODY} mt-6`}>
              Ob du Pinterest neu aufbauen, einen bestehenden Account optimieren
              oder dein laufendes Pinterest Marketing komplett auslagern
              möchtest: Wir schauen uns deine Ausgangssituation an und finden
              heraus, welche Form der Zusammenarbeit sinnvoll ist.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2) INHALT — Hintergrund #FFFFFF, 80px/80px, Rahmen 1140px,
          Spalten 570/570. Links stand im Original ein Kontaktformular; es
          wird bewusst NICHT nachgebaut: die Website bleibt cookie- und
          trackerfrei und verarbeitet keine Formulardaten (ein Formular
          bräuchte eine erweiterte Datenschutzerklärung und ggf. ein
          Cookie-Banner). An seiner Stelle stehen die direkten Kontaktwege.
          E-Mail-Adresse und Telefonnummer stehen NUR hier — im Kopfbereich
          bewusst nicht noch einmal.
          Unter 1024px stapeln die Spalten in Markup-Reihenfolge, der Text
          steht also vor dem Bild.
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="container-page py-[80px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-0">
            <div className={COL}>
              <h2 className={H2_GOLD}>So erreichst du uns</h2>

              <p className={`${BODY} mt-6`}>
                <strong>E-Mail:</strong>{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gold-text hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>

              <p className={`${BODY} mt-2`}>
                <strong>Telefon / WhatsApp:</strong>{" "}
                <a href={telHref} className="text-gold-text hover:underline">
                  {siteConfig.phone}
                </a>
              </p>

              <p className={`${BODY} mt-6`}>
                Zusammenarbeit: vollständig digital und ortsunabhängig – für
                Unternehmen in Deutschland, Österreich, der Schweiz und
                international
              </p>

              <p className={`${BODY} mt-6`}>
                Wir antworten in der Regel innerhalb eines Werktages.
              </p>

              <h2 className={`${H2_GOLD} mt-10`}>
                Pinterest Marketing anfragen
              </h2>

              <p className={`${BODY} mt-6`}>
                Du interessierst dich für Pinterest Account Aufbau, Pinterest
                Account Management, einen Strategie-Call oder Pinterest Audit?
              </p>

              <p className={`${BODY} mt-6`}>
                In einem kostenfreien Erstgespräch besprechen wir dein
                Unternehmen, deinen bisherigen Pinterest-Stand und deine Ziele.
                Anschließend können wir dir sagen, welches Angebot zu deiner
                Situation passt.
              </p>

              <div className="mt-8">
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Erstgespräch vereinbaren
                </a>
              </div>
            </div>

            {/* Ab 1024px feste 396×500px, RECHTSBÜNDIG in der 570px-Spalte
                (10px Abstand zum rechten Spaltenrand = der
                Elementor-Spalteninnenabstand). Eckenradius 150px oben. */}
            <div className={COL}>
              <div className="relative mx-auto aspect-[396/500] w-full overflow-hidden rounded-t-[150px] lg:mr-0 lg:ml-auto lg:aspect-auto lg:h-[500px] lg:w-[396px] lg:max-w-full">
                <ExportedImage
                  src={kontaktImage}
                  alt="Juliette Oppel steht in einem hellen Raum und telefoniert mit dem Handy"
                  fill
                  className="object-cover"
                  /* Quelle 1694×2236 (hochkant), Ausschnitt 396×500 ebenfalls
                     hochkant — die sichtbare Breite genügt für `sizes`. */
                  sizes="(min-width: 1024px) 396px, 100vw"
                  basePath={basePath}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
