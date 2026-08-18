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
// Original auf keiner Seite, siehe CLAUDE.md).
const pageName = "Über mich";

// Titel und Beschreibung wörtlich aus dem Original
// (/ueber-pinterest-marketing-expertin/), nur ohne die dortigen Emoji.
export const metadata: Metadata = {
  title: "Pinterest Marketing Expertin Juliette Oppel",
  description:
    "Ich bin Juliette Oppel – Pinterest Marketing Expertin & Strukturprofi. Ich helfe Marken nachhaltig sichtbar zu werden. Lass uns sprechen!",
  alternates: {
    canonical: path,
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
// H4 in Abschnitt 4 — Antic Didone 37/40, 400, ls 1.4px, #C49C5E
const H4_GOLD =
  "font-normal tracking-[1.4px] text-gold-light text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";
// H3 im Abschluss-Block — Antic Didone 37/40, 400, ls 1.4px, #FFFFFF, zentriert
const H3_ABSCHLUSS =
  "text-center font-normal tracking-[1.4px] text-white text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";
// Kicker-Absatz — Antic Didone 20/30, 500, ls 1.4px, #C49C5E
const KICKER =
  "font-heading font-medium tracking-[1.4px] text-gold-light text-[18px] leading-[28px] md:text-[20px] md:leading-[30px]";

// Fließtext: 18/30, ls 1.4px, #545454 — kommt aus den <body>-Regeln in
// globals.css, hier nur die Schriftfamilie absichern.
const BODY = "font-body";

// Elementor-Spaltenabstand ("column gap: default"): der 1140px-Rahmen wird
// ohne Grid-Gap geteilt, die sichtbaren 10px je Spalte sitzen als
// Innenabstand in der Spalte selbst. Abschnitt 3 hat im Original
// "column gap: no" — dort stehen die beiden Blöcke bündig nebeneinander und
// bekommen deshalb bewusst KEIN COL.
const COL = "lg:px-[10px]";

// Seiten-Schema: WebPage + Person. Organization steht global in layout.tsx.
// Die Person hat dieselbe feste @id wie auf der Startseite und im
// BlogPosting-Schema (eine verknüpfte Entität website-weit). KEIN "founder"
// und kein "owner": Juliette Oppel ist das Gesicht der Marke, Rechtsträger
// ist allein die molloy Management OÜ.
const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${path}#webpage`,
      url: `${siteConfig.url}${path}`,
      name: "Pinterest Marketing Expertin Juliette Oppel",
      about: { "@id": `${siteConfig.url}/#juliette-oppel` },
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
          Links Überschrift, Einleitung und Button, rechts das Porträt.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page py-[80px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-0">
            <div className={COL}>
              <h1 className={H1}>
                Juliette Oppel - Pinterest Marketing Expertin und Strukturprofi
              </h1>

              {/* Im Original behauptet dieser Satz eine Gründungsrolle —
                  umformuliert, weil Rechtsträger allein die molloy Management
                  OÜ ist und Juliette Oppel das Gesicht der Marke. */}
              <p className={`${BODY} mt-6`}>
                Das bin ich – <strong>das Gesicht von molloy business</strong> –
                <br />
                Pinterest-Marketing-Expertin, Struktur-Liebhaberin und digitale
                Nomadin.
              </p>

              <p className={`${BODY} mt-6`}>
                Ich helfe <strong>Lifestyle-Marken und KMU</strong>, auf
                Pinterest <strong>sichtbar zu werden</strong> und ihr
                Online-Business so zu strukturieren, dass Marketing wieder
                leicht, ehrlich und effizient wird –{" "}
                <strong>von überall auf der Welt</strong>.
              </p>

              <div className="mt-8">
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Und wer bist du?
                </a>
              </div>
            </div>

            {/* Ab 1024px feste 374×500px, RECHTSBÜNDIG in der 570px-Spalte
                (10px Abstand zum rechten Spaltenrand = der
                Elementor-Spalteninnenabstand). Eckenradius 200px oben. */}
            <div className={COL}>
              <div className="relative mx-auto aspect-[374/500] w-full overflow-hidden rounded-t-[200px] lg:aspect-auto lg:mr-0 lg:ml-auto lg:h-[500px] lg:w-[374px] lg:max-w-full">
                <ExportedImage
                  src={portraitImage}
                  alt="pinterest marketing expertin"
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
          2) "Warum molloy? Und warum eine Jurte?" — #FFFFFF, 100px/100px,
          Spalten 456/684. Links Kicker, Überschrift, goldene Trennlinie und
          darunter das Markenlogo; rechts ausschließlich der Fließtext.
          Unter 1024px stapelt sich beides in Markup-Reihenfolge, die
          Überschrift steht also weiterhin vor dem Text.
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="container-page py-[100px]">
          {/* 40 % / 60 % — im Original 456px / 684px bei 1140px Rahmen */}
          <div className="grid gap-10 lg:grid-cols-[40%_60%] lg:gap-x-0">
            {/* Linke Spalte (456px): Kicker, Überschrift, Trennlinie, Logo. */}
            <div className={COL}>
              <p className={KICKER}>molloy business</p>

              <h2 className={`${H2_GOLD} mt-2`}>
                Warum molloy? Und warum eine Jurte?
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
                alt="Das Bild zeigt das Logo von molloy business. Es hat eine Jurte und den Schriftzug molloy business darunter"
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
                Die Geschichte zum Namen und dem Logo habe ich schon auf meiner
                vorherigen Website erzählt, bei Instagram und in Workshops. Da
                sie überall so gut ankommt, erzähle ich sie hier auch.
              </p>

              <p className={`${BODY} mt-6`}>
                Ich frage mich tatsächlich bei abstrakten Firmennamen auch
                immer, wie jemand darauf kam.
              </p>

              <p className={`${BODY} mt-6`}>
                Ich reise sehr gern. Das ist meine größte Leidenschaft.
                Unterwegs fühle ich mich frei und wenn es so etwas wie frühere
                Leben gibt, dann war ich in einem davon (oder in allen) eine
                Nomadin. Ich sehe mich manchmal in einem Nomadenvolk wandern.
                Über eine große Steppe, im Wind und sandigem Licht.
              </p>

              {/* Im Original: "kann ich mein Unternehmen überall mit
                  hinnehmen" — umformuliert, siehe Zusammenfassung. */}
              <p className={`${BODY} mt-6`}>
                Die Jurte ist für mich das Sinnbild von Freiheit und „unterwegs
                sein“. Genau wie die Nomaden ihr zu Hause – die Jurte – überall
                mit hinnehmen können, kann ich meine Arbeit überall mit
                hinnehmen. molloy business funktioniert von überall auf der
                Welt. Ich bin mit meinen Dienstleistungen nicht an einen
                bestimmten Ort gebunden.
              </p>

              <p className={`${BODY} mt-6`}>
                molloy enthält übrigens zwei o. Es heißt also nicht molly 😉
              </p>

              <p className={`${BODY} mt-6`}>
                Molloy Caravanpark ist ein kleiner Campingplatz in
                Westaustralien. Er ist gar nicht mal besonders hübsch und als
                ich mit meinem Partner und unseren zwei Kindern da war, hat es
                sogar die ganze Zeit geregnet. Dennoch ist dieser Ort tief in
                unseren Herzen geblieben, denn dort kamen die Kängurus zum
                Frühstück mit an den Tisch. Es war so magisch diese Tiere so
                hautnah zu erleben.
              </p>

              <p className={`${BODY} mt-6`}>
                Und so kam es, dass ich fortan alle Ideen mit molloy bezeichnete
                (ich hatte schon ein paar andere Geschäftsideen davor) und mein
                privater Instagram-Account heißt auch was mit molloy ⟶{" "}
                <a
                  href="https://www.instagram.com/molloycrew/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold italic underline"
                >
                  molloy_crew
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3) "Ortsunabhängiges Business" — #D9D9D9, 100px/100px,
          Spalten 570/570. Im Original hat dieser Abschnitt
          "column gap: no": der goldene Textblock und die Bildfläche stehen
          bündig nebeneinander, beide 575px hoch. Deshalb hier KEIN COL.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page py-[100px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-0 lg:gap-y-0">
            {/* Goldener Textblock: #C49C5E, 60px Innenabstand ringsum, 575px
                hoch. Unter 1024px fällt der Innenabstand auf 32px, damit auf
                390px Breite noch Text und nicht nur Rand zu sehen ist. */}
            <div className="bg-gold-light p-[32px] lg:h-[575px] lg:p-[60px]">
              <h2 className={H2_AUF_GOLD}>Ortsunabhängiges Business</h2>

              {/* Im Original: "Wenn ich überall mit meinem Business sein kann"
                  und "manchmal sind sie auch auf Bali während ich gerade in
                  Ägypten bin" — beides angepasst, siehe Zusammenfassung. */}
              <p className={`${BODY} mt-6 text-white`}>
                Wenn molloy business von überall aus funktioniert, dann kannst
                du auch überall sein. Meine Kunden kommen aus Deutschland, der
                Schweiz, Portugal und manchmal sind sie auch auf Bali, während
                ich ganz woanders sitze. Ich bin kürzlich sogar ausgewandert und
                für meine Kunden hat sich rein gar nichts geändert. Also egal wo
                du mit deinem Unternehmen bist, lass uns zusammen arbeiten – den
                die Welt ist unser Meetingraum.
              </p>

              <div className="mt-8">
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Lass uns loslegen
                </a>
              </div>
            </div>

            {/* Bildfläche 570×575px, cover, mittig, ohne Eckenradius. Die
                Quelle ist mit 800×533 querformatig — der Ausschnitt ist
                nahezu quadratisch, `sizes` folgt der sichtbaren Breite. */}
            <div className="relative aspect-[570/575] w-full overflow-hidden lg:aspect-auto lg:h-[575px]">
              <ExportedImage
                src={ortsunabhaengigImage}
                alt="Juliette Oppel ortsunabhängiges Business"
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
          4) "Warum ist mir das Online Business so wichtig?" — #FFFFFF,
          50px/50px. Im Original steht der Fließtext in der BREITEN linken
          Spalte und die Überschrift allein in der schmalen rechten.
          ACHTUNG: Dieser eine Abschnitt nutzt NICHT den sonst üblichen
          1140px-Rahmen, sondern 1200px — deshalb hier ein eigener Container
          statt `container-page`. Alle anderen Abschnitte bleiben bei 1140px.
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        {/* 1200px-Rahmen, zentriert. Wie `container-page` greift unterhalb von
            1248px (1200 + 2×24) ein 24px-Seitenabstand, damit der Text auf
            schmalen Screens nicht am Fensterrand klebt. */}
        <div className="mx-auto w-full max-w-[1200px] px-6 py-[50px] min-[1248px]:px-0">
          {/* 804 : 396 im 1200px-Rahmen = exakt 67 % / 33 % */}
          <div className="grid gap-10 lg:grid-cols-[67%_33%] lg:gap-x-0">
            {/* Unter 1024px steht die Überschrift zuerst (im Original
                "elementor-reverse-mobile"), deshalb liegt sie im Markup vorn
                und wird ab lg in die schmale zweite Spalte gesetzt. */}
            <div className={`lg:col-start-2 lg:row-start-1 ${COL}`}>
              <h4 className={H4_GOLD}>
                Warum ist mir das Online Business so wichtig?
              </h4>
            </div>

            <div className={`lg:col-start-1 lg:row-start-1 ${COL}`}>
              <p className={BODY}>
                Wie schon erwähnt, hatte ich einige Geschäftsideen. Alle davon
                waren stationär. Heißt, ich hätte einen Laden, ein Grundstück,
                eine Halle, etc. benötigt. Doch es gab eine Zeit in Deutschland
                und der Welt, in der sich ständig die Regularien änderten,
                welche Gruppe von Menschen unter welchen Bedingungen was
                betreten durften und wer draußen bleiben musste. Dieses Spiel
                wollte ich nicht mitspielen.
              </p>

              {/* Im Original: "Also entschied ich mich für eine reine
                  Online-Selbstständigkeit" — umformuliert, siehe
                  Zusammenfassung. */}
              <p className={`${BODY} mt-6`}>
                Also entschied ich mich für den rein digitalen Weg. Ich wollte
                örtlich und zeitlich flexibel sein. Ich wollte auf meine Kinder
                aufpassen können, wenn Schulen oder Kitas wieder geschlossen
                wurden, ohne dass ich mich zwischen meinem Arbeitgeber und
                meinen Kindern zerreißen musste. Und ich wollte von überall aus
                arbeiten können, damit ich nicht auf bestimmte Urlaubstage im
                Jahr angewiesen bin.
              </p>

              <p className={`${BODY} mt-6`}>
                Heute bin ich überzeugt:
                <br />
                Ein digitales Business schafft{" "}
                <strong>Freiheit, Sicherheit und Wachstum</strong> –
                <br />
                wenn es mit Struktur geführt wird. Ein gut organisiertes
                Online-Business schenkt dir Ruhe. Pinterest-Marketing schenkt
                dir Sichtbarkeit. Beides zusammen ergibt das, was molloybusiness
                ausmacht: <strong>Struktur trifft Sichtbarkeit.</strong>
              </p>
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
            <h3 className={H3_ABSCHLUSS}>
              Du möchtest mit mir als deine Pinterest Marketing Expertin
              zusammenarbeiten?
            </h3>

            <p className={`${BODY} mt-6`}>
              Du möchtest Pinterest endlich so nutzen, dass es{" "}
              <strong>sichtbar Ergebnisse bringt</strong>? Ich helfe{" "}
              <strong>Lifestyle-Marken und KMU</strong>, Pinterest strategisch
              aufzubauen – mit klarer Struktur, SEO-optimierten Pins und
              Inhalten, die deine Zielgruppe wirklich ansprechen.
            </p>

            <p className={`${BODY} mt-6`}>
              Ich übernehme für dich{" "}
              <strong>Strategie, Gestaltung und Umsetzung</strong>, damit dein
              Pinterest-Account <strong>kontinuierlich wächst</strong>, Traffic
              auf deine Website bringt und dir neue Kunden liefert –{" "}
              <strong>langfristig, authentisch und effizient</strong>.
            </p>

            <div className="mt-8 text-center">
              <Link href="/angebote/" className="btn btn-secondary">
                ich will deine angebote sehen
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
