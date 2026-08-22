import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import portraitImage from "@/assets/images/ueber-mich/DSC01078-scaled.jpg";
import logoImage from "@/assets/images/ueber-mich/mb.png";
import ortsunabhaengigImage from "@/assets/images/ueber-mich/Juliette-Oppel-ortsunabhaengiges-Business.jpg";
import abschlussHintergrund from "@/assets/images/blog/Juliette-Oppel-Header-Kontakt-Pinterest.jpg";
import { siteConfig } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";

const path = "/ueber-mich/";

// Wortgleich im BreadcrumbList-Schema (sichtbaren Brotkrumenpfad hat das
// Original auf keiner Seite, siehe CLAUDE.md). Die Route bleibt
// /ueber-mich/, der Name folgt der Menübeschriftung "Über uns".
const pageName = "Über uns";

const pageTitle = "Über molloy business – Pinterest Marketing Agentur";
const pageDescription =
  "molloy business ist eine spezialisierte Pinterest Marketing Agentur für Unternehmen, die Pinterest strategisch, organisch und langfristig nutzen möchten.";

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
// Typografie, am Original (OceanWP + Elementor) bei 1536px nachgemessen —
// dieselben Bausteine wie auf src/app/page.tsx. Die Basiswerte sind die
// mobile Verkleinerung (~72 %), die Werte hinter `md:` die Desktop-Maße.
// NICHT ohne ausdrücklichen Auftrag ändern.
// ---------------------------------------------------------------------------

// H1 dieser Seite — Antic Didone 47/50, 600, ls 1.4px, #595959.
// Achtung: Zeilenhöhe 50px, nicht 65.8px wie auf den anderen Seiten.
const H1 =
  "tracking-[1.4px] text-[34px] leading-[36px] md:text-[47px] md:leading-[50px]";
// H2 gold — Antic Didone 37/40, 400, ls 1.4px, #C49C5E
const H2_GOLD =
  "font-normal tracking-[1.4px] text-gold-light text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";
// H2 im goldenen Textblock — Antic Didone 30/50, 600, ls 1.4px, #FFFFFF
const H2_AUF_GOLD =
  "tracking-[1.4px] text-white text-[24px] leading-[38px] md:text-[30px] md:leading-[50px]";
// H2 im Abschluss-Block — Antic Didone 37/40, 400, ls 1.4px, #FFFFFF, zentriert
const H2_ABSCHLUSS =
  "text-center font-normal tracking-[1.4px] text-white text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";
// Kicker-Absatz — Antic Didone 20/30, 500, ls 1.4px, #C49C5E
const KICKER =
  "font-heading font-medium tracking-[1.4px] text-gold-light text-[18px] leading-[28px] md:text-[20px] md:leading-[30px]";
// Hervorgehobene Leitzeile ("Struktur trifft Sichtbarkeit.") — Antic Didone,
// eine Stufe über dem Fließtext, Goldhell #C49C5E.
const LEITZEILE =
  "font-heading font-normal tracking-[1.4px] text-gold-light text-[24px] leading-[36px] md:text-[28px] md:leading-[40px]";

// Fließtext: 18/30, ls 1.4px, #545454 — kommt aus den <body>-Regeln in
// globals.css, hier nur die Schriftfamilie absichern.
const BODY = "font-body";

// Elementor-Spaltenabstand ("column gap: default"): der 1140px-Rahmen wird
// ohne Grid-Gap geteilt, die sichtbaren 10px je Spalte sitzen als
// Innenabstand in der Spalte selbst. Abschnitt 4 hat im Original
// "column gap: no" — dort stehen die beiden Blöcke bündig nebeneinander und
// bekommen deshalb bewusst KEIN COL.
const COL = "lg:px-[10px]";

// Seiten-Schema: WebPage + BreadcrumbList + Person. Der Organization-Knoten
// trägt dieselbe feste @id wie der globale in layout.tsx und der
// ProfessionalService der Startseite — gleiche @id heißt für Schema-Leser
// dieselbe Entität, die Angaben werden zusammengeführt. Hier kommt der
// Gründer-Bezug dazu: Juliette Oppel ist ausdrücklich `founder` von molloy
// business (Rechtsträger bleibt die molloy Management OÜ, das steht im
// Impressum). Die Person hat dieselbe @id wie auf der Startseite und im
// BlogPosting-Schema — eine verknüpfte Entität website-weit.
const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
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
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      founder: { "@id": `${siteConfig.url}/#juliette-oppel` },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#juliette-oppel`,
      name: siteConfig.brandFace,
      jobTitle: "Pinterest Marketing Expertin",
      worksFor: { "@id": `${siteConfig.url}/#organization` },
      knowsAbout: "Pinterest Marketing",
      sameAs: [
        siteConfig.social.instagram,
        siteConfig.social.facebook,
        siteConfig.social.linkedin,
        siteConfig.social.pinterest,
      ],
    },
  ],
};

export default function UeberMich() {
  return (
    <>
      {/* ------------------------------------------------------------------
          1) HERO — Hintergrund #D9D9D9, 80px/80px, Spalten 570/570.
          Links Überschrift und Einleitung, rechts das Porträt.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page py-[80px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-0">
            <div className={COL}>
              <h1 className={H1}>
                Über molloy business – Pinterest Marketing mit Strategie und
                Struktur
              </h1>

              <p className={`${BODY} mt-6`}>
                molloy business ist eine spezialisierte Pinterest Marketing
                Agentur für Unternehmen, die Pinterest strategisch, organisch
                und langfristig als Marketingkanal nutzen möchten.
              </p>

              <p className={`${BODY} mt-6`}>
                Gegründet wurde molloy business von Juliette Oppel, Pinterest
                Marketing Expertin mit langjähriger Erfahrung in Tourismus,
                Marketing und Sales.
              </p>

              <p className={`${BODY} mt-6`}>
                Heute verbindet molloy business Pinterest SEO,
                Content-Strategie, Design, Analyse und klare Prozesse, um
                Unternehmen dabei zu unterstützen, mit ihren vorhandenen
                Inhalten langfristig auf Pinterest sichtbar zu werden.
              </p>
            </div>

            {/* Ab 1024px feste 374×500px, RECHTSBÜNDIG in der 570px-Spalte
                (10px Abstand zum rechten Spaltenrand = der
                Elementor-Spalteninnenabstand). Eckenradius 200px oben. */}
            <div className={COL}>
              <div className="relative mx-auto aspect-[374/500] w-full overflow-hidden rounded-t-[200px] lg:aspect-auto lg:mr-0 lg:ml-auto lg:h-[500px] lg:w-[374px] lg:max-w-full">
                <ExportedImage
                  src={portraitImage}
                  alt="Juliette Oppel sitzt mit einem Laptop auf einer Rattanbank vor einer Wand mit Trockenblumen"
                  fill
                  className="object-cover"
                  /* Quelle 1707×2560 (hochkant), Ausschnitt 374×500 ebenfalls
                     hochkant — die sichtbare Breite genügt für `sizes`. */
                  sizes="(min-width: 1024px) 374px, 100vw"
                  basePath={basePath}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2) "Erfahrung, die über Pinterest hinausgeht" — #FFFFFF, 100px/100px.
          Spaltenmodell wie im gleichartigen Textabschnitt der Startseite
          (45 % / 55 %): links Überschrift und goldene Trennlinie, rechts der
          Fließtext. Unter 1024px stapelt beides in Markup-Reihenfolge.
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="container-page py-[100px]">
          <div className="grid gap-10 lg:grid-cols-[45%_55%] lg:gap-x-0">
            <div className={COL}>
              <h2 className={H2_GOLD}>
                Erfahrung, die über Pinterest hinausgeht
              </h2>

              {/* Trennlinie: 1.6px, #C49C5E, 330px breit, linksbündig — wie
                  im entsprechenden Abschnitt der Startseite. */}
              <hr className="border-gold-light mt-6 w-[330px] max-w-full border-t-[1.6px]" />
            </div>

            <div className={COL}>
              <p className={BODY}>
                Die inhabergeführte Agentur bezieht ihre Expertise aus vielen
                Jahren Tourismus-Erfahrung sowie Marketing- und Sales-Expertise.
              </p>

              <p className={`${BODY} mt-6`}>
                Diese Kombination prägt bis heute die Arbeit von molloy
                business: Zielgruppen verstehen, Customer Journeys mitdenken,
                Inhalte strategisch einsetzen und Marketing nicht isoliert,
                sondern immer aus Unternehmenssicht betrachten.
              </p>

              <p className={`${BODY} mt-6`}>
                Dazu kommt ein ausgeprägter Fokus auf Struktur und Prozesse.
                Denn auch eine gute Pinterest Strategie funktioniert langfristig
                nur dann, wenn Planung, Content und Umsetzung sauber
                ineinandergreifen.
              </p>

              <p className={`${BODY} mt-6`}>
                Genau daraus ist einer der Grundgedanken von molloy business
                entstanden:
              </p>

              <p className={`${LEITZEILE} mt-6`}>
                Struktur trifft Sichtbarkeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3) "Warum eigentlich molloy? Und warum eine Jurte?" — #D9D9D9,
          100px/100px, Spalten 456/684. Links Kicker, Überschrift, goldene
          Trennlinie und darunter das Markenlogo; rechts ausschließlich der
          Fließtext. Unter 1024px stapelt sich beides in Markup-Reihenfolge,
          die Überschrift steht also weiterhin vor dem Text.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page py-[100px]">
          {/* 40 % / 60 % — im Original 456px / 684px bei 1140px Rahmen */}
          <div className="grid gap-10 lg:grid-cols-[40%_60%] lg:gap-x-0">
            {/* Linke Spalte (456px): Kicker, Überschrift, Trennlinie, Logo. */}
            <div className={COL}>
              <p className={KICKER}>molloy business</p>

              <h2 className={`${H2_GOLD} mt-2`}>
                Warum eigentlich molloy? Und warum eine Jurte?
              </h2>

              {/* Trennlinie zwischen H2 und Logo: 1.6px solid #AC8343
                  (das kräftige Button-Gold, NICHT #C49C5E), 371px breit,
                  linksbündig. `w-full max-w-[371px]` statt `w-[371px]`: eine
                  feste Breite wäre die min-content-Größe der Grid-Spalte und
                  würde auf 390px-Screens den Abschnitt überlaufen lassen. */}
              <hr className="mt-6 w-full max-w-[371px] border-0 border-t-[1.6px] border-solid border-gold" />

              {/* Markenlogo als Bildfläche: 292×292px, keine abgerundeten
                  Ecken, LINKSBÜNDIG in der 456px-Spalte (10px Abstand zum
                  linken Spaltenrand = Elementor-Spalteninnenabstand). */}
              <ExportedImage
                src={logoImage}
                alt="Logo von molloy business mit stilisierter Jurte"
                width={292}
                height={292}
                className="mt-6 h-auto w-[292px] max-w-full lg:mr-auto lg:ml-0"
                sizes="(min-width: 1024px) 292px, 100vw"
                basePath={basePath}
              />
            </div>

            {/* Rechte Spalte (684px): ausschließlich der Fließtext. */}
            <div className={COL}>
              <p className={BODY}>
                Der Name molloy business geht auf einen kleinen Caravan Park in
                Westaustralien zurück.
              </p>

              <p className={`${BODY} mt-6`}>
                Juliette war dort mit ihrer Familie unterwegs. Der Campingplatz
                selbst war eher unspektakulär und das Wetter alles andere als
                perfekt – aber morgens kamen Kängurus bis an den
                Frühstückstisch. Einer dieser Reisemomente, die unerwartet im
                Kopf bleiben.
              </p>

              <p className={`${BODY} mt-6`}>
                Danach wurde „molloy“ zum Namen für immer neue Ideen. Als daraus
                schließlich ein Unternehmen entstand, war der Name längst
                gesetzt.
              </p>

              <p className={`${BODY} mt-6`}>
                Die Jurte im Logo steht für Freiheit und Ortsunabhängigkeit.
                Nomaden nehmen ihr Zuhause mit dorthin, wo sie gerade sind – und
                auch molloy business war von Anfang an so aufgebaut, dass
                professionelle Zusammenarbeit nicht an einen bestimmten Ort
                gebunden ist.
              </p>

              <p className={`${BODY} mt-6`}>
                Und weil die Frage regelmäßig kommt: molloy hat zwei o. Nicht
                molly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4) "Ortsunabhängig arbeiten heißt nicht unpersönlich arbeiten" —
          #D9D9D9, 100px/100px, Spalten 570/570. Im Original hat dieser
          Abschnitt "column gap: no": der goldene Textblock und die Bildfläche
          stehen bündig nebeneinander, beide 575px hoch. Deshalb hier KEIN COL.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page py-[100px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-0 lg:gap-y-0">
            {/* Goldener Textblock: #C49C5E, 60px Innenabstand ringsum, 575px
                hoch. `min-h` statt fester Höhe, weil der Text dieses
                Abschnitts länger ist als der frühere — die 575px bleiben das
                Maß, der Block wächst aber mit, statt zu überlaufen. Unter
                1024px fällt der Innenabstand auf 32px, damit auf 390px Breite
                noch Text und nicht nur Rand zu sehen ist. */}
            <div className="bg-gold-light p-[32px] lg:min-h-[575px] lg:p-[60px]">
              <h2 className={H2_AUF_GOLD}>
                Ortsunabhängig arbeiten heißt nicht unpersönlich arbeiten
              </h2>

              <p className={`${BODY} mt-6 text-white`}>
                molloy business arbeitet vollständig digital und ortsunabhängig
                mit Unternehmen zusammen.
              </p>

              <p className={`${BODY} mt-6 text-white`}>
                Für unsere Kunden bedeutet das vor allem: klare Kommunikation,
                strukturierte Abläufe und verlässliche Zusammenarbeit –
                unabhängig davon, von welchem Ort aus gerade gearbeitet wird.
              </p>

              <p className={`${BODY} mt-6 text-white`}>
                Entscheidend ist nicht, wo jemand sitzt, sondern dass Absprachen
                funktionieren, Deadlines eingehalten werden und jederzeit klar
                ist, was als Nächstes passiert.
              </p>
            </div>

            {/* Bildfläche 570×575px, cover, mittig, ohne Eckenradius. Ab
                1024px ohne eigene Höhe: die Grid-Zeile wird vom goldenen Block
                bestimmt (Standard `align-items: stretch`), die Fläche bleibt
                also exakt so hoch wie er. Die Quelle ist mit 800×533
                querformatig — der Ausschnitt ist nahezu quadratisch, `sizes`
                folgt der sichtbaren Breite. */}
            <div className="relative aspect-[570/575] w-full overflow-hidden lg:aspect-auto">
              <ExportedImage
                src={ortsunabhaengigImage}
                alt="Juliette Oppel liegt mit einem Laptop auf einem Bett und arbeitet"
                fill
                className="object-cover object-[50%_50%]"
                sizes="(min-width: 1024px) 570px, 100vw"
                basePath={basePath}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5) ABSCHLUSS — Hintergrundfoto
          (Juliette-Oppel-Header-Kontakt-Pinterest.jpg, cover, Position
          50% 50%) mit einem Schleier in #D9D9D9 bei 21 % Deckkraft darüber.
          80px/80px, Inhaltsbreite 770px zentriert. Einbindung wie auf
          /blog/: über next-image-export-optimizer absolut hinter dem Inhalt.
          ------------------------------------------------------------------ */}
      <section className="relative isolate overflow-hidden">
        <ExportedImage
          src={abschlussHintergrund}
          alt=""
          aria-hidden="true"
          fill
          className="-z-10 object-cover object-[50%_50%]"
          sizes="100vw"
          basePath={basePath}
        />
        {/* Schleier: #D9D9D9 bei 21 % Deckkraft */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[rgba(217,217,217,0.21)]"
        />
        <div className="container-page py-[80px]">
          <div className="mx-auto w-full max-w-[770px] text-white">
            <h2 className={H2_ABSCHLUSS}>
              Pinterest Marketing mit molloy business
            </h2>

            <p className={`${BODY} mt-6`}>
              Du möchtest Pinterest professionell aufbauen, einen bestehenden
              Account weiterentwickeln oder das Pinterest Management vollständig
              auslagern?
            </p>

            <p className={`${BODY} mt-6`}>
              Wir unterstützen Unternehmen mit Pinterest Strategie, Pinterest
              Account Aufbau, Pinterest Account Management und Pinterest Audits.
            </p>

            <div className="mt-8 text-center">
              <Link href="/angebote/" className="btn btn-secondary">
                Pinterest Marketing Angebote ansehen
              </Link>
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
