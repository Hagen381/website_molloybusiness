import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import heroImage from "@/assets/images/start/DSC01156-scaled-e1763214118889.jpg";
import julietteChairImage from "@/assets/images/start/Juliette-Oppel-Pinterest-Businessmanagement.jpg";
import juliettePortraitImage from "@/assets/images/start/DSC01285-scaled.jpg";
import iconAuthenzitaet from "@/assets/images/start/Authenzitaet.png";
import iconVerlaesslichkeit from "@/assets/images/start/1.png";
import iconWeitblick from "@/assets/images/start/3.png";
import { siteConfig } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";

// Absoluter Title (ohne titleTemplate aus layout.tsx) — von der
// Markeninhaberin freigegeben, wird auch vom WebPage-Schema unten gelesen.
const pageTitle = "Pinterest Marketing Agentur | molloy business";

// Jede Seite setzt ihr eigenes Canonical-Tag (siehe CLAUDE.md) — sonst
// erben Unterseiten das globale "/" aus layout.tsx und deklarieren sich
// selbst fälschlich als Startseite.
export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description:
    "molloy business ist eine spezialisierte Pinterest Marketing Agentur für Unternehmen und Marken. Pinterest SEO, Strategie, Content, Design und Account Management für langfristige organische Sichtbarkeit.",
  alternates: {
    canonical: "/",
  },
};

// ---------------------------------------------------------------------------
// Typografie, am Original (OceanWP + Elementor) nachgemessen. Die Werte hinter
// `md:` sind die gemessenen Desktop-Werte; die Basiswerte sind die mobile
// Verkleinerung (~72 %), die das Größenverhältnis der Ebenen zueinander
// erhält. NICHT ohne ausdrücklichen Auftrag ändern.
// ---------------------------------------------------------------------------

// H1 — Antic Didone 47/65.8, 600, ls 1px, #595959 (Default aus globals.css)
const H1 = "text-[34px] leading-[47.6px] md:text-[47px] md:leading-[65.8px]";
// H2 Standard — Antic Didone 37/51.8, 600, ls 1px, #595959
const H2_STANDARD =
  "text-[27px] leading-[37.8px] md:text-[37px] md:leading-[51.8px]";
// H2 gold — Antic Didone 37/40, 400, ls 1.4px, #C49C5E
const H2_GOLD =
  "font-normal tracking-[1.4px] text-gold-light text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";
// H2 auf dunkel — Antic Didone 37/40, 400, ls 1.4px, #D9D9D9
const H2_DARK =
  "font-normal tracking-[1.4px] text-gray-light text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";
// H2 in Abschnitt 4 — Antic Didone 35/40, 400, ls 1.4px, #595959
const H2_35 =
  "font-normal tracking-[1.4px] text-[26px] leading-[30px] md:text-[35px] md:leading-[40px]";
// H3 zentriert — Antic Didone 37/40, 400, ls 1.4px; Farbe je Abschnitt
// (#C49C5E hell, #FFFFFF auf dunklem Grund) — deshalb hier ohne Farbe.
const H3_CENTERED =
  "text-center tracking-[1.4px] text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";
// H5 Wert-Titel — Antic Didone 24/40, 500, ls 1.4px, #C49C5E
const H5_VALUE =
  "font-heading font-medium tracking-[1.4px] text-gold-light text-[21px] leading-[32px] md:text-[24px] md:leading-[40px]";
// Kicker-Absatz — Antic Didone 20/30, 500, ls 1.4px. Die Farbe wechselt je
// Abschnitt, deshalb steht sie nicht in der Konstante.
const KICKER =
  "font-heading font-medium tracking-[1.4px] text-[18px] leading-[28px] md:text-[20px] md:leading-[30px]";

// Fließtext: 18/30, ls 1.4px, #545454 — kommt aus den <body>-Regeln in
// globals.css, hier nur die Schriftfamilie absichern.
const BODY = "font-body";

// ---------------------------------------------------------------------------
// Spaltenmodell, am Original (Elementor) nachgemessen: Der 1140px-Rahmen wird
// ohne Grid-Gap in Prozentspalten geteilt (60/40, 45/55, 50/50), der sichtbare
// Abstand entsteht wie bei Elementor durch 10px Innenabstand je Spalte
// ("column gap: default"). Deshalb `lg:gap-x-0` + COL auf jeder Spalte.
// Unter 1024px stapeln die Spalten wie bisher.
// ---------------------------------------------------------------------------
const COL = "lg:px-[10px]";

// Seiten-spezifisches Schema: WebPage + die Marke als ProfessionalService.
// Der Organization-Knoten trägt bewusst dieselbe @id wie der globale in
// layout.tsx — gleiche @id heißt für Schema-Leser dieselbe Entität, die
// Angaben beider Knoten werden zusammengeführt. So bekommt die Startseite
// den engeren Typ ProfessionalService und den Gründer-Bezug, ohne dass ein
// zweites, konkurrierendes Unternehmen im Graph entsteht. Das frühere
// eigenständige Person-Schema entfällt.
const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: `${siteConfig.url}/`,
      name: pageTitle,
      about: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      founder: {
        "@type": "Person",
        name: siteConfig.brandFace,
      },
      sameAs: Object.values(siteConfig.social),
    },
  ],
};

// Abschnitt 5 — Wert-Kacheln. Die Titel sind im Original Links auf "#";
// hier bewusst schlichter Text, ein Link ins Leere ist ein Fehler.
const values = [
  {
    title: "Authentizität",
    icon: iconAuthenzitaet,
    text: "Wir verkaufen dir keine Strategie, nur weil sie gerade im Trend liegt. Du bekommst von uns ehrliche Einschätzungen und klare Empfehlungen – auch dann, wenn etwas für dein Unternehmen keinen Sinn ergibt.",
  },
  {
    title: "Verlässlichkeit",
    icon: iconVerlaesslichkeit,
    text: "Klare Absprachen, transparente Prozesse und eingehaltene Deadlines gehören für uns zu einer guten Zusammenarbeit dazu.",
  },
  {
    title: "Weitblick",
    icon: iconWeitblick,
    text: "Wir betrachten Pinterest nicht isoliert. Wir schauen darauf, wie Suchverhalten, Content, Website und Customer Journey zusammenspielen und wie Pinterest sich sinnvoll in dein bestehendes Marketing integrieren lässt.",
  },
];

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------------------------
          1) HERO + 2) "Pinterest Marketing für Unternehmen"
          Ein gemeinsamer Block: Hintergrund #D9D9D9, 80px oben / 50px unten.
          Das Bild steht rechts und läuft neben beiden Textblöcken durch.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page pt-[80px] pb-[50px]">
          {/* 60 % Text / 40 % Bild — im Original 684px / 456px bei 1140px Rahmen */}
          <div className="grid gap-10 lg:grid-cols-[60%_40%] lg:gap-x-0">
            <div className={COL}>
              <h1 className={H1}>
                Pinterest Marketing Agentur für nachhaltige Sichtbarkeit
              </h1>

              {/* Kicker-Zeile direkt unter der H1 — Antic Didone 20px,
                  #C49C5E (KICKER = die Standardgröße 20/30). */}
              <p className={`${KICKER} text-gold-light mt-4`}>
                Pinterest Marketing mit Struktur – für Marken, die nicht nur
                heute sichtbar sein wollen.
              </p>

              <p className={`${BODY} mt-6`}>
                molloy business ist eine spezialisierte Pinterest Marketing
                Agentur für Unternehmen und Marken, die Pinterest als
                langfristigen, organischen Sichtbarkeits- und Traffic-Kanal
                nutzen möchten.
              </p>

              <p className={`${BODY} mt-6`}>
                Wir verbinden Pinterest SEO, klare Strategien, professionelles
                Pin-Design und strukturierte Umsetzung. So wird aus bestehendem
                Content ein nachhaltiger Marketingkanal, über den Inhalte auch
                lange nach ihrer Veröffentlichung gefunden werden können.
              </p>

              <p className={`${BODY} mt-6`}>
                Wir übernehmen für dich Strategie, Keyword-Recherche,
                Content-Planung, Design, Texte und Pinterest Management – damit
                Pinterest für dein Unternehmen arbeitet und nicht umgekehrt.
              </p>

              {/* 2) — gleicher Hintergrund, kein neuer Abschnitt */}
              <h2 className={`${H2_STANDARD} mt-12`}>
                Pinterest Marketing für Unternehmen – organisch, suchbasiert
                und langfristig
              </h2>

              <p className={`${BODY} mt-6`}>
                Pinterest ist eine visuelle Such- und Inspirationsplattform.
                Nutzer verwenden sie, um Ideen zu entdecken, Produkte zu
                recherchieren und zukünftige Entscheidungen zu planen.
              </p>

              <p className={`${BODY} mt-6`}>
                Genau darin liegt der Unterschied zu schnelllebigem
                Social-Media-Content: Ein gut optimierter Pin kann über die
                Pinterest-Suche über einen langen Zeitraum auffindbar bleiben
                und immer wieder neue Nutzer auf deine Website führen.
              </p>

              <p className={`${BODY} mt-6`}>
                Mit einer strategischen Pinterest-SEO-Strategie wirst du
                bereits dann sichtbar, wenn potenzielle Kunden anfangen, nach
                Lösungen, Produkten oder Inspiration zu suchen – und nicht
                erst, wenn sie deine Marke schon kennen.
              </p>

              <p className={`${BODY} mt-6`}>Wir unterstützen dich dabei,</p>

              <ul className={`${BODY} mt-2 list-disc space-y-2 pl-6`}>
                <li>
                  eine Pinterest-Strategie auf Basis deiner Ziele und deiner
                  Zielgruppe zu entwickeln,
                </li>
                <li>bestehende Inhalte gezielt für Pinterest weiterzuverwenden,</li>
                <li>SEO-optimierte Pins und Pinterest-Texte zu erstellen,</li>
                <li>
                  relevante Suchbegriffe und Themen frühzeitig zu erkennen,
                </li>
                <li>
                  und einen nachhaltigen Pinterest-Kanal aufzubauen, der
                  kontinuierlich auf deine Website einzahlt.
                </li>
              </ul>

              <p className={`${BODY} mt-6`}>
                Das Ergebnis: langfristige Sichtbarkeit, qualifizierter
                Website-Traffic und ein Marketingkanal, der nicht jeden Tag
                neuen Content verlangt.
              </p>

              {/* Interne Route statt der alten WordPress-URL. */}
              <div className="mt-8">
                <Link href="/angebote/" className="btn btn-primary">
                  direkt zu den angeboten
                </Link>
              </div>
            </div>

            {/* Bild rechts, oben bündig. Ab 1024px feste 336×500px,
                RECHTSBÜNDIG in der 456px-Spalte (am Original nachgemessen:
                110px links, 10px rechts — das Bild liegt am äußeren
                Seitenrand, die 10px sind der Elementor-Spalteninnenabstand).
                Darunter volle Breite im Seitenverhältnis 336:500. */}
            <div className={`self-start ${COL}`}>
              <div className="relative mx-auto aspect-[336/500] w-full overflow-hidden rounded-t-[200px] lg:aspect-auto lg:mr-0 lg:ml-auto lg:h-[500px] lg:w-[336px] lg:max-w-full">
                <ExportedImage
                  src={heroImage}
                  alt="pinterest marketing"
                  fill
                  className="object-cover"
                  /* Die Quelle ist mit 1737×1707 nahezu quadratisch, der
                     Ausschnitt mit 336×500 hochkant: object-fit: cover skaliert
                     auf die Höhe von 500px, also ~509px Breite, von denen 336px
                     sichtbar sind. sizes muss dieser internen Skalierung
                     folgen, nicht der sichtbaren Breite — sonst wird das Bild
                     unscharf. Bei den anderen beiden Bildern ist die Quelle
                     hochformatiger als der Ausschnitt, dort genügt die
                     sichtbare Breite. */
                  sizes="(min-width: 1024px) 510px, 100vw"
                  basePath={basePath}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3) "Was du von uns erwarten kannst" — Hintergrund #FFFFFF, 100px/100px
          Links Überschriftenblock mit Trennlinie, rechts der Fließtext.
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="container-page py-[100px]">
          {/* 45 % / 55 % — im Original 513px / 627px */}
          <div className="grid gap-10 lg:grid-cols-[45%_55%] lg:gap-x-0">
            <div className={COL}>
              <h2 className={H2_GOLD}>Was du von uns erwarten kannst</h2>

              {/* Die H3 steht links unter der H2, gleiche Schriftfamilie,
                  eine Stufe kleiner (H5-Größe) und in der Fließtextfarbe. */}
              <h3 className={`${H5_VALUE} text-heading mt-4`}>
                Pinterest Marketing, das langfristig gedacht ist
              </h3>

              {/* Trennlinie: 1.6px, #C49C5E, 330px breit, linksbündig */}
              <hr className="border-gold-light mt-6 w-[330px] max-w-full border-t-[1.6px]" />
            </div>

            <div className={COL}>
              <p className={BODY}>
                Als spezialisierte Pinterest Marketing Agentur entwickeln wir
                keine Inhalte für einen kurzen Reichweiten-Peak, sondern eine
                suchbasierte Pinterest-Strategie, die langfristig Sichtbarkeit
                und Website-Traffic aufbauen kann.
              </p>

              <p className={`${BODY} mt-6`}>
                Pinterest funktioniert anders als schnelllebige
                Social-Media-Kanäle. Genau darauf ist unsere Arbeit
                ausgerichtet: Wir verbinden Pinterest SEO, Content und
                Strategie so, dass bestehende Inhalte über einen langen
                Zeitraum gefunden werden können.
              </p>

              <p className={`${BODY} mt-6`}>Bei molloy business bekommst du:</p>

              <ul className={`${BODY} mt-2 list-disc space-y-2 pl-6`}>
                <li>
                  Pinterest Marketing mit klarer Strategie statt planlosem
                  Pinnen
                </li>
                <li>Pinterest SEO und fundierte Keyword-Recherche</li>
                <li>Designs, Texte und Content-Planung aus einer Hand</li>
                <li>Content-Recycling statt ständig neuer Inhalte</li>
                <li>strukturierte und planbare Abläufe</li>
                <li>
                  ehrliche Einschätzungen statt Reichweiten- und
                  Erfolgsversprechen
                </li>
              </ul>

              <p className={`${BODY} mt-6`}>
                Dabei schauen wir nicht nur auf einzelne Pins. Entscheidend
                ist, wie Content, Suchverhalten, saisonale Themen und deine
                Website zusammenspielen, damit Pinterest langfristig auf deine
                Unternehmensziele einzahlt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4) "Warum molloy business als Pinterest Marketing Agentur?"
          #D9D9D9, 100px/100px. Links Bild, rechts Text. Unter 1024px steht der
          Text zuerst, deshalb liegt der Textblock im Markup vorn und wird ab
          lg in Spalte 2 gesetzt.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page py-[100px]">
          {/* 45 % Bild / 55 % Text — im Original 513px / 627px */}
          <div className="grid gap-10 lg:grid-cols-[45%_55%] lg:gap-x-0">
            <div className={`lg:col-start-2 lg:row-start-1 ${COL}`}>
              <h2 className={H2_35}>
                Warum molloy business als Pinterest Marketing Agentur?
              </h2>

              <p className={`${BODY} mt-6`}>
                Unser Fokus liegt auf organischem Pinterest Marketing, das
                strategisch aufgebaut ist und vorhandenen Content sinnvoll
                weiterverwendet.
              </p>

              <p className={`${BODY} mt-6`}>
                Aus Blogartikeln, Produkten, Angeboten, Podcasts, Ratgebern
                oder anderen bestehenden Inhalten entwickeln wir
                Pinterest-Content, der gezielt auf relevante Suchanfragen
                ausgerichtet wird.
              </p>

              <p className={`${BODY} mt-6`}>
                So entsteht Schritt für Schritt ein zusätzlicher
                Marketingkanal, der nicht davon abhängig ist, jeden Tag neuen
                Content zu produzieren oder dauerhaft Werbebudget einzusetzen.
              </p>

              <p className={`${BODY} mt-6`}>
                Als Pinterest Marketing Agentur übernehmen wir je nach Bedarf
                Strategie, Keyword-Recherche, Content-Planung, Pin-Design,
                Pinterest-Texte und laufendes Account Management.
              </p>

              <p className={`${BODY} mt-6`}>
                Wir versprechen dir keine bestimmten Klickzahlen, Rankings oder
                Kundenanfragen. Was du von uns bekommst, ist eine klare
                Strategie, professionelle Umsetzung und eine ehrliche
                Einschätzung dessen, was mit Pinterest für dein Unternehmen
                sinnvoll und realistisch ist.
              </p>
            </div>

            {/* Ab 1024px feste 421×500px, LINKSBÜNDIG in der 513px-Spalte (am
                Original nachgemessen: 0px links, 92px rechts). Das Bild liegt
                bündig am äußeren Seitenrand, also noch vor dem 10px-Innen-
                abstand der Spalte — daher der negative linke Rand. */}
            <div className={`lg:col-start-1 lg:row-start-1 ${COL}`}>
              <div className="relative mx-auto aspect-[421/500] w-full overflow-hidden rounded-tl-[200px] lg:aspect-auto lg:-ml-[10px] lg:h-[500px] lg:w-[421px] lg:max-w-full lg:mr-auto">
                <ExportedImage
                  src={julietteChairImage}
                  alt="Juliette sitzt auf einem Stuhl, schaut in die Ferne, hat Laptop auf dem Schoß und Köpfhörer in den Ohren"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 421px, 100vw"
                  basePath={basePath}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5) "Wofür wir stehen" — Hintergrund #FFFFFF,
          oberer Teil 50px/10px, Kachelbereich 0/100px.
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="container-page pt-[50px] pb-[10px] text-center">
          {/* Optisch die zentrierte goldene Überschrift wie bisher, semantisch
              eine H2 — die Wert-Titel darunter sind die zugehörigen H3. */}
          <h2 className={`${H3_CENTERED} text-gold-light`}>Wofür wir stehen</h2>
        </div>

        <div className="container-page pt-0 pb-[100px]">
          <div className="grid gap-10 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <ExportedImage
                  src={value.icon}
                  alt=""
                  width={90}
                  height={90}
                  className="mx-auto h-auto w-[90px]"
                  sizes="(min-width: 768px) 90px, 90px"
                  basePath={basePath}
                />
                <h3 className={`${H5_VALUE} mt-4`}>{value.title}</h3>
                <p className={`${BODY} mt-2`}>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          6) "Wer steckt hinter molloy business?" — Hintergrund #595959,
          80px/80px. Links Text, rechts Bild.
          ------------------------------------------------------------------ */}
      <section className="bg-footer">
        <div className="container-page pt-[80px] pb-[80px]">
          {/* 50 % / 50 % — im Original 570px / 570px */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-0">
            <div className={COL}>
              <h2 className={H2_DARK}>Wer steckt hinter molloy business?</h2>

              <p className={`${BODY} text-gray-light mt-6`}>
                Du möchtest mehr darüber erfahren, wie molloy business
                entstanden ist, welche Erfahrung hinter unserer Arbeit steckt
                und wie wir arbeiten?
              </p>

              <p className={`${BODY} text-gray-light mt-6`}>
                Auf unserer Über-uns-Seite erfährst du mehr.
              </p>

              <div className="mt-8">
                <Link href="/ueber-mich/" className="btn btn-secondary">
                  Mehr über molloy business
                </Link>
              </div>
            </div>

            {/* Ab 1024px feste 374×500px, mittig in der 570px-Spalte.
                Eckenradius im Original 150px (nicht 200px wie die anderen). */}
            <div className={COL}>
              <div className="relative mx-auto aspect-[374/500] w-full overflow-hidden rounded-t-[150px] lg:aspect-auto lg:h-[500px] lg:w-[374px] lg:max-w-full">
                <ExportedImage
                  src={juliettePortraitImage}
                  alt="pinterest marketing expertin"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 374px, 100vw"
                  basePath={basePath}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          7) "Passt Pinterest zu deinem Unternehmen?"
          Schließt ohne Farbwechsel an Abschnitt 6 an (#595959).
          ------------------------------------------------------------------ */}
      <section className="bg-footer">
        <div className="container-page pt-0 pb-[80px] text-center">
          {/* Wie in Abschnitt 5: zentrierte Überschrift im bisherigen Format,
              semantisch eine H2. */}
          <h2 className={`${H3_CENTERED} text-surface`}>
            Passt Pinterest zu deinem Unternehmen?
          </h2>

          <p className={`${BODY} text-gray-light mx-auto mt-6 max-w-3xl`}>
            Du möchtest wissen, welches Potenzial Pinterest für dein
            Unternehmen hat oder dein Pinterest Marketing komplett auslagern?
          </p>

          <p className={`${BODY} text-gray-light mx-auto mt-6 max-w-3xl`}>
            In einem kostenfreien Erstgespräch schauen wir gemeinsam darauf, wo
            du aktuell stehst, was du erreichen möchtest und ob Pinterest der
            richtige Kanal dafür ist.
          </p>

          <p className={`${BODY} text-gray-light mx-auto mt-6 max-w-3xl`}>
            Wenn wir zusammenpassen, zeigen wir dir im nächsten Schritt, wie
            eine Zusammenarbeit aussehen kann.
          </p>

          <div className="mt-8">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Erstgespräch vereinbaren
            </a>
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
