import type { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import kontaktImage from "@/assets/images/kontakt/DSC01040-scaled-e1763199028368.jpg";
import { siteConfig } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";

const path = "/kontakt/";

// Wortgleich im BreadcrumbList-Schema (sichtbaren Brotkrumenpfad hat das
// Original auf keiner Seite, siehe CLAUDE.md).
const pageName = "Kontakt";

// Titel und Beschreibung wörtlich aus dem Original
// (/kontakt-pinterest-marketing/), nur ohne die dortigen Emoji.
export const metadata: Metadata = {
  title: "Kontakt | Pinterest Marketing & Struktur",
  description:
    "Kontaktiere Juliette Oppel – Pinterest Marketing Expertin & Strukturprofi. Anfrage für Zusammenarbeit oder Fragen zu molloy business.",
  alternates: {
    canonical: path,
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
      name: "Kontakt | Pinterest Marketing & Struktur",
      description:
        "Kontaktiere Juliette Oppel – Pinterest Marketing Expertin & Strukturprofi. Anfrage für Zusammenarbeit oder Fragen zu molloy business.",
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
            <h1 className={H1}>Kontakt – Pinterest Marketing</h1>

            <p className={`${BODY} mt-6`}>
              Du möchtest mit mir über <strong>Pinterest Marketing</strong> oder
              eine mögliche Zusammenarbeit sprechen?
            </p>

            <p className={`${BODY} mt-6`}>
              <strong>Hier bist du richtig.</strong>
            </p>

            <p className={`${BODY} mt-6`}>
              Ich bin <strong>Juliette Oppel</strong>, Pinterest Marketing
              Expertin &amp; Strukturprofi für Lifestyle-Marken und KMU.
              <br />
              Schreib mir, wenn du Pinterest{" "}
              <strong>professionell, ehrlich und langfristig wirksam</strong>{" "}
              nutzen möchtest – oder prüfen willst, ob ich die passende
              Partnerin für dein Projekt bin.
            </p>

            <p className={`${BODY} mt-6`}>
              Wähle den Weg, der für dich am angenehmsten ist:
            </p>

            {/* Im Original stehen Adresse und Nummer hier als reiner Text
                (die Mailadresse trägt zwar ein <a>, aber ohne href).
                Beides ist hier anklickbar — gleicher Wortlaut, nur nutzbar. */}
            <p className={`${BODY} mt-6`}>
              📩 <strong>E-Mail:</strong>{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-gold-text hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>

            <p className={`${BODY} mt-6`}>
              📞 <strong>Telefon / WhatsApp:</strong>{" "}
              <a href={telHref} className="text-gold-text hover:underline">
                {siteConfig.phone}
              </a>
            </p>

            <p className={`${BODY} mt-6`}>
              🌍 <strong>Remote:</strong> Betreuung für Kunden in Deutschland,
              Schweiz, Österreich &amp; weltweit
            </p>

            <p className={`${BODY} mt-6`}>
              🕒 Ich antworte dir in der Regel innerhalb von einem Werktag.
            </p>

            <p className={`${BODY} mt-6`}>
              <em>(Fax gibt’s nicht 😉)</em>
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
          Unter 1024px stapeln die Spalten in Markup-Reihenfolge, der Text
          steht also vor dem Bild.
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="container-page py-[80px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-0">
            <div className={COL}>
              {/* Einleitungssatz des Originals über dem Formular — er trägt
                  auch ohne Formular. Der Satz "Oder du nutzt dieses Formular
                  hier." entfällt ersatzlos, deshalb rückt dieser an dessen
                  Stelle über die Überschrift. */}
              <p className={BODY}>
                Du hast Fragen zu meinen Angeboten oder möchtest direkt ein
                Projekt anfragen?
              </p>

              <h2 className={`${H2_GOLD} mt-6`}>Anfrage Pinterest Marketing</h2>

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
                <strong>Telefon:</strong>{" "}
                <a href={telHref} className="text-gold-text hover:underline">
                  {siteConfig.phone}
                </a>
              </p>

              <p className={`${BODY} mt-6`}>
                In einem kostenfreien Erstgespräch klären wir in Ruhe, ob und
                wie eine Zusammenarbeit zu dir passt.
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
                  alt="pinterest marketing"
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
