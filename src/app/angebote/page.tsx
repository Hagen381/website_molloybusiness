import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import heroImage from "@/assets/images/angebote/Juliette-Oppel-Online-Business.jpg";
import laptopImage from "@/assets/images/angebote/Juliette-Oppel-Online-Businessmanagement.jpg";
import phoneImage from "@/assets/images/angebote/Juliette-Oppel-Pinterest.jpg";
import kachelAufbau from "@/assets/images/angebote/PinterestAccountAufbau.png";
import kachelManagement from "@/assets/images/angebote/PinterestAccountManagement.png";
import kachelStrategie from "@/assets/images/angebote/Pinterest-Strategie-Call.png";
import kachelAudit from "@/assets/images/angebote/Pinterest-Audit.png";
import fotoDaniela from "@/assets/images/angebote/DanielaBatistadosSantos.jpg";
import fotoJudithGastner from "@/assets/images/angebote/JudithGastner.jpg";
import fotoJulia from "@/assets/images/angebote/JuliaKallenborn.jpg";
import fotoNathalie from "@/assets/images/angebote/Nathalie-Weimar.jpg";
import fotoPostFinance from "@/assets/images/angebote/Bild-PostFinance.svg";
import fotoJudithKenk from "@/assets/images/angebote/Judith-Kenk.jpg";
import { services, siteConfig } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";

const path = "/angebote/";
const pageName = "Angebote";

// Von der Markeninhaberin freigegeben; der Titel steht absolut (also ohne die
// Vorlage aus layout.tsx), die Description wird auch vom WebPage-Schema unten
// gelesen.
const pageTitle =
  "Pinterest Marketing Angebote für Unternehmen | molloy business";
const pageDescription =
  "Pinterest strategisch aufbauen, optimieren oder komplett auslagern: Pinterest SEO, Content-Strategie, Design und Analyse für dein Unternehmen.";

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

// ---------------------------------------------------------------------------
// Typografie und Spaltenmodell wie in src/app/page.tsx — dieselben am Original
// nachgemessenen Werte, damit beide Seiten identisch wirken. NICHT ohne
// ausdrücklichen Auftrag ändern.
// ---------------------------------------------------------------------------
const H1 = "text-[34px] leading-[47.6px] md:text-[47px] md:leading-[65.8px]";
const H2_GOLD =
  "font-normal tracking-[1.4px] text-gold-light text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";
const H2_CENTERED =
  "text-center tracking-[1.4px] text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";
// H3-Größe innerhalb eines Abschnitts — Antic Didone 24/40, 500, ls 1.4px,
// #C49C5E (wie die Wert-Titel der Startseite).
const H3_INLINE =
  "font-heading font-medium tracking-[1.4px] text-gold-light text-[21px] leading-[32px] md:text-[24px] md:leading-[40px]";
const KICKER =
  "font-heading font-medium tracking-[1.4px] text-[18px] leading-[28px] md:text-[20px] md:leading-[30px]";
const BODY = "font-body";
const COL = "lg:px-[10px]";

// Abschluss-Abschnitt auf Goldhell: am Original gemessen 28px/40px, Stärke 400,
// letter-spacing 1.4px, weiß und linksbündig.
const H2_ABSCHLUSS =
  "font-heading font-normal tracking-[1.4px] text-white text-[28px] leading-[40px]";

// ---------------------------------------------------------------------------
// Die vier Angebote. Titel und Route kommen aus site-config; hier steht nur
// noch die Kachelgrafik und die Beschriftung. Es sind die Originalgrafiken der
// alten Seite (780×520) mit eingebranntem Angebotstitel — gold, oben links. Aus
// ihnen wurden Preise und Zahlungskonditionen entfernt, sonst sind sie
// unverändert.
// `beschriftung` ist die HTML-Beschriftung des Originals, Zeile für Zeile und
// mit dessen Zeilenumbruch (dort ein <br> in der verlinkten Überschrift). Sie
// liegt im Ruhezustand auf Deckkraft 0 — sichtbar ist dann nur der goldene
// Titel in der Grafik — und blendet beim Überfahren ein.
// ---------------------------------------------------------------------------
const kacheln = [
  {
    href: "/pinterest-account-aufbau/",
    bild: kachelAufbau,
    beschriftung: ["PINTEREST", "ACCOUNT AUFBAU"],
  },
  {
    href: "/pinterest-account-management/",
    bild: kachelManagement,
    beschriftung: ["PINTEREST ACCOUNT", "MANAGEMENT"],
  },
  {
    href: "/pinterest-strategie-call/",
    bild: kachelStrategie,
    beschriftung: ["PINTEREST", "STRATEGIE CALL"],
  },
  {
    href: "/pinterest-audit/",
    bild: kachelAudit,
    beschriftung: ["PINTEREST", "AUDIT"],
  },
] as const;

// Titel aus dem services-Array lesen, statt sie neu einzutippen — derselbe
// Titel bedient aria-label und alt-Text.
const angebote = kacheln.map((kachel) => {
  const service = services.find((s) => s.href === kachel.href);
  if (!service) {
    throw new Error(`Kein Angebot in site-config für ${kachel.href}`);
  }
  return { ...kachel, title: service.title };
});

// ---------------------------------------------------------------------------
// Branchen-Abschnitt — freigegebene Texte, Reihenfolge wie in der Vorlage.
// Ab 768px stehen die Blöcke zweispaltig, damit der Abschnitt nicht endlos
// lang wird; die Lesereihenfolge bleibt dabei erhalten.
// ---------------------------------------------------------------------------
const branchen = [
  {
    titel: "Online-Shops und E-Commerce",
    text: "Produkte, Kollektionen, Kategorien und Ratgeber lassen sich über Pinterest langfristig auffindbar machen und gezielt mit den passenden Seiten im Shop verknüpfen.",
  },
  {
    titel: "Reiseveranstalter, Destinationen und Hospitality-Unternehmen",
    text: "Reisen werden oft lange vor der eigentlichen Buchung geplant. Pinterest bietet die Möglichkeit, potenzielle Gäste bereits während der Inspirations- und Planungsphase mit Destinationen, Reiseideen, Routen und Angeboten zu erreichen.",
  },
  {
    titel: "Food- und Lebensmittelmarken",
    text: "Rezepte, Produkte, saisonale Themen, Inspiration und erklärungsbedürftige Lebensmittel bieten zahlreiche Suchanlässe und können langfristig auf relevante Website-Inhalte verweisen.",
  },
  {
    titel: "Interior-, Wohn-, Garten- und Lifestyle-Marken",
    text: "Pinterest wird intensiv zur Planung und Inspiration rund um Wohnen, Einrichtung, Garten, DIY und Lifestyle genutzt. Visuelle Produkte und Inhalte lassen sich deshalb besonders gut in eine Pinterest-SEO-Strategie integrieren.",
  },
  {
    titel: "Beauty-, Fashion- und Wellness-Unternehmen",
    text: "Looks, Trends, Routinen, Produkte und saisonale Themen bieten viele Möglichkeiten, potenzielle Kunden bereits während Recherche und Inspiration zu erreichen.",
  },
  {
    titel: "Finanzdienstleister und Versicherungen",
    text: "Auch weniger visuelle Branchen können Pinterest sinnvoll einsetzen, wenn sie über hilfreiche Inhalte verfügen. Ratgeber, Erklärartikel und langfristig relevante Finanzthemen können über die Pinterest-Suche neue Kontaktpunkte mit potenziellen Kunden schaffen.",
  },
  {
    titel: "Content-getriebene Unternehmen und Publisher",
    text: "Unternehmen mit einem größeren Bestand an Blogartikeln, Ratgebern, Magazininhalten, Videos oder Podcasts können vorhandenen Content über Pinterest immer wieder neu sichtbar machen und gezielt Besucher auf ihre Website führen.",
  },
];

// Die Aufzählung im Arbeitsweise-Abschnitt — freigegebener Wortlaut.
const arbeitsweiseListe = [
  "wonach deine potenziellen Kunden suchen,",
  "welche Inhalte bereits vorhanden sind,",
  "welche Seiten deiner Website gezielt sichtbar werden sollen",
  "und wann relevante Themen auf Pinterest an Bedeutung gewinnen.",
];

// ---------------------------------------------------------------------------
// Kundenstimmen — wortgleich aus dem Original übernommen, Freigaben liegen vor.
// Reihenfolge nach Pinterest-Bezug (PostFinance zuerst).
// Bewusst NUR sichtbarer Text: kein Review-/AggregateRating-Schema.
// ---------------------------------------------------------------------------
const kundenstimmen = [
  {
    // Die Linkadresse war im Original fehlerhaft (doppeltes „h“ im Schema)
    // und lief ins Leere — hier korrigiert.
    text: '"Hervorragende Pinterest-Beratung! Juliette hat uns pragmatisch und fundiert in allen Fragen rund um Pinterest unterstützt. Sie hat unseren Pinterest-Account professionell aufgebaut, berät uns zu Inhalten und setzt organische Beiträge gekonnt um. Ihre Expertise hat dazu beigetragen, dass unser Auftritt sogar von Pinterest selbst positiv wahrgenommen wurde! Wer eine kompetente, praxisnahe und strategische Unterstützung für Pinterest sucht, ist bei Juliette genau richtig. Vielen Dank für die tolle Zusammenarbeit! Hier kannst du dich sich selbst überzeugen: ',
    link: {
      href: "https://ch.pinterest.com/postfinance_ch/_created",
      label: "Zu unserem Pinterest-Account",
    },
    textEnde: '."',
    name: "Fabian Christ",
    rolle: "Social Media Manager, PostFinance",
    foto: fotoPostFinance,
    alt: "PostFinance zu Pinterest Account Aufbau",
    contain: true,
  },
  {
    text: '"Ich habe Juliette für einen Online-Workshop zum Thema Pinterest Einsteigerwissen gebucht. Die Teilnehmenden und ich fühlen uns jetzt sehr gut in das Thema mitgenommen. Juliettes Präsentation war sehr interessant und mit vielen Praxisbeispielen ergänzt. Im Fragenteil konnte Juliette ihr umfassendes Fachwissen und ihre Erfahrung einbringen. Mit viel Geduld und vor allem für jede*n verständlich, hat Juliette Pinterest greifbar gemacht. Sollte nochmals Bedarf für dieses Thema aufkommen, würde ich Juliette wieder buchen!"',
    name: "Judith Kenk",
    rolle: "Digitalisierungsbotschafterin Mecklenburg-Vorpommern",
    foto: fotoJudithKenk,
    alt: "Judith Kenk zum Pinterest Workshop",
    contain: false,
  },
  {
    // Im Original hing an "Videokurs" ein Udemy-Link mit Affiliate-Kennung;
    // der Satz bleibt, die Verlinkung ist ersatzlos entfernt.
    text: '"Dank der kompetenten Beratung von Juliette habe ich das Thema Pinterest Marketing endlich verstanden und konnte es auch erfolgreich umsetzen. Tolle Tipps auf was man achten muss usw. Ich kann die Zusammenarbeit nur jedem ans Herz legen und wer nur einmal kurz reinschnuppern mag. Schaut euch den kurzen Videokurs an. "',
    name: "Nathalie Weimar",
    rolle: "Ringana Partnerin",
    foto: fotoNathalie,
    alt: "Nathalie Weimar zum Thema Pinterest Marketing",
    contain: false,
  },
  {
    text: '"Juliette ist eine wunderbare Mischung aus Professionalität, Kompetenz, Zuverlässigkeit, Neugier, Liebenswürdigkeit, Offenheit, Flexibilität, Hartnäckigkeit und Kreativität. Mit ihr zusammenzuarbeiten, kann ich nur jedem empfehlen bzw. wünschen! :-)"',
    name: "Dr. Judith Gastner",
    rolle: "Geschäftsführerin | PaarBalance GmbH",
    foto: fotoJudithGastner,
    alt: "JudithGastner",
    contain: false,
  },
  {
    text: '"Ich liebe es mit Juliette zu arbeiten. Man merkt ihre langjährige Erfahrung, sie denkt mit und bringt immer neue tolle Ideen ins Unternehmen. Sie hat ein sehr gutes Feingefühl, versteht Zusammenhänge sehr schnell und erkennt wo im Unternehmen noch verborgene Potenziale sind. Die Zusammenarbeit macht immer Spaß und Freude. Sie bringt eine Energie mit für die ich sehr dankbar bin. Danke für alles meine Liebe."',
    name: "Daniela Batista dos Santos",
    rolle: "CEO | The Circle of Wonderwomen LLC",
    foto: fotoDaniela,
    alt: "Daniela Batista dos Santos",
    contain: false,
  },
  {
    text: "“Ich liebe die Zusammenarbeit mit Juliette sehr! Sowohl menschlich aber auch auf professioneller Ebene könnte ich mir keine bessere OBM vorstellen. Danke für dich!”",
    name: "Julia Kallenborn",
    rolle: "Geschäftsführerin | Licht und Liebe Media GmbH",
    foto: fotoJulia,
    alt: "JuliaKallenborn",
    contain: false,
  },
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${path}#webpage`,
      url: `${siteConfig.url}${path}`,
      name: "Pinterest Marketing Angebote für Unternehmen",
      description: pageDescription,
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
      // Nur die Angebotsnamen und ihre Seiten — bewusst ohne Offer/Preis.
      "@type": "ItemList",
      name: "Meine Pinterest Marketing Angebote für Unternehmen",
      itemListElement: angebote.map((angebot, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: angebot.title,
        url: `${siteConfig.url}${angebot.href}`,
      })),
    },
  ],
};

export default function AngebotePage() {
  return (
    <>
      {/* ------------------------------------------------------------------
          1) HERO — am Original gemessen: Hintergrund #D9D9D9, 80px/80px,
          Spalten 684/456 (60/40), Text links, Bild rechts.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page py-[80px]">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-x-0">
            <div className={COL}>
              <h1 className={H1}>
                Pinterest Marketing Angebote für Unternehmen
              </h1>

              <p className={`${KICKER} text-gold-light mt-4`}>
                Pinterest strategisch aufbauen, optimieren oder komplett
                auslagern.
              </p>

              <p className={`${BODY} mt-6`}>
                Du möchtest Pinterest professionell für dein Unternehmen nutzen,
                weißt aber noch nicht, ob du Unterstützung bei Strategie,
                Aufbau, Optimierung oder der kompletten Betreuung brauchst?
              </p>

              <p className={`${BODY} mt-6`}>
                Als Pinterest Marketing Agentur verbinden wir Pinterest SEO,
                Content-Strategie, Design und Analyse zu einem organischen
                Marketingkanal, der auf langfristige Sichtbarkeit und
                Website-Traffic ausgerichtet ist.
              </p>

              <p className={`${BODY} mt-6`}>
                Dabei geht es nicht darum, möglichst viel neuen Content zu
                produzieren. Wir nutzen vor allem das, was in deinem Unternehmen
                bereits vorhanden ist: Produkte, Angebote, Bilder, Blogartikel,
                Ratgeber, Videos, Podcastfolgen oder andere Inhalte, die sich
                gezielt für die Pinterest-Suche aufbereiten lassen.
              </p>

              {/* Sprung zu den Angebotskacheln am Seitenende. */}
              <div className="mt-8">
                <a href="#angebote" className="btn btn-primary">
                  Pinterest Marketing Angebote ansehen
                </a>
              </div>
            </div>

            {/* Quelle 533×800 (hochkant), Ausschnitt 336×500 wie im Hero der
                Startseite. cover skaliert hier auf die Breite. */}
            <div className={`self-start ${COL}`}>
              <div className="relative mx-auto aspect-[336/500] w-full overflow-hidden rounded-t-[200px] lg:aspect-auto lg:mr-0 lg:ml-auto lg:h-[500px] lg:w-[336px] lg:max-w-full">
                <ExportedImage
                  src={heroImage}
                  alt="pinterest marketing angebote für unternehmen"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 336px, 100vw"
                  basePath={basePath}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2) Branchen — Hintergrund #FFFFFF, 100px/100px, einspaltig im
          1140er Rahmen. Die H3-Blöcke stehen ab 768px zweispaltig.
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="container-page py-[100px]">
          <div className={COL}>
            <h2 className={H2_GOLD}>
              Für welche Unternehmen eignet sich Pinterest Marketing?
            </h2>

            <p className={`${BODY} mt-6`}>
              Pinterest ist besonders interessant für Unternehmen, deren
              Produkte, Angebote oder Inhalte gesucht, verglichen, geplant oder
              visuell entdeckt werden.
            </p>

            <p className={`${BODY} mt-6`}>
              Besonders gute Möglichkeiten sehen wir unter anderem für:
            </p>

            <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {branchen.map((branche) => (
                <div key={branche.titel}>
                  <h3 className={H3_INLINE}>{branche.titel}</h3>
                  <p className={`${BODY} mt-2`}>{branche.text}</p>
                </div>
              ))}
            </div>

            <p className={`${BODY} mt-10`}>
              Entscheidend ist dabei nicht allein die Branche.
            </p>

            <p className={`${BODY} mt-6`}>
              Besonders gute Voraussetzungen für Pinterest Marketing bestehen,
              wenn dein Unternehmen über eine eigene Website mit mehreren
              relevanten Zielseiten verfügt – zum Beispiel Produktseiten,
              Kategorien, Angebote, Blogartikel, Ratgeber, Podcastfolgen oder
              Landingpages – und bereits Bilder, Texte oder andere Inhalte
              vorhanden sind.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3) Wie wir arbeiten — am Original gemessen: Hintergrund #D9D9D9,
          50px oben / 100px unten, Spalten 570/570. Bild links, Text rechts.
          Unter 1024px steht der Text zuerst, deshalb liegt er im Markup vorn.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page pt-[50px] pb-[100px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-0">
            <div className={`lg:col-start-2 lg:row-start-1 ${COL}`}>
              <h2 className={H2_GOLD}>Wie wir Pinterest Marketing angehen</h2>

              <p className={`${BODY} mt-6`}>
                Gutes Pinterest Marketing beginnt für uns nicht mit der Frage,
                wie viele Pins pro Monat veröffentlicht werden sollen.
              </p>

              <p className={`${BODY} mt-6`}>Wir schauen zuerst darauf,</p>

              {/* Icon-Liste im Stil der Angebotsliste: fa-chevron-right des
                  Originals als typografisches Zeichen. */}
              <ul className={`${BODY} mt-4 space-y-2`}>
                {arbeitsweiseListe.map((eintrag) => (
                  <li key={eintrag} className="flex gap-3">
                    <span aria-hidden="true" className="text-gold-light">
                      ›
                    </span>
                    <span>{eintrag}</span>
                  </li>
                ))}
              </ul>

              <p className={`${BODY} mt-6`}>
                Darauf bauen wir die Pinterest Strategie auf.
              </p>

              <p className={`${BODY} mt-6`}>
                Dazu gehören je nach Angebot Keyword-Recherche, Themen- und
                Content-Planung, Pinterest SEO, Pin-Design, Pinterest-Texte,
                Veröffentlichung, Analyse und laufende Optimierung.
              </p>

              <p className={`${BODY} mt-6`}>
                Auch Saisonalität und Pinterest Trends fließen in die Planung
                ein. Denn viele Suchanfragen entstehen nicht erst dann, wenn ein
                Thema seinen Höhepunkt erreicht. Inhalte können gezielt früher
                veröffentlicht werden, damit sie bereits auffindbar sind, wenn
                das Interesse steigt.
              </p>

              <p className={`${BODY} mt-6`}>
                So wird vorhandener Content nicht einfach nur erneut
                veröffentlicht, sondern für das Suchverhalten auf Pinterest
                aufbereitet und mit den passenden Inhalten deiner Website
                verbunden.
              </p>

              <p className={`${BODY} mt-6`}>
                Je nachdem, wo dein Unternehmen aktuell steht, kannst du deine
                Pinterest Strategie mit uns entwickeln, einen Account
                professionell aufbauen oder überprüfen lassen oder das laufende
                Pinterest Account Management vollständig an uns abgeben.
              </p>
            </div>

            {/* Quelle 800×533 (quer) — volle Spaltenbreite, Seitenverhältnis
                erhalten. */}
            <div className={`lg:col-start-1 lg:row-start-1 lg:self-center ${COL}`}>
              <div className="relative mx-auto aspect-[800/533] w-full overflow-hidden rounded-t-[150px] lg:max-w-[550px]">
                <ExportedImage
                  src={laptopImage}
                  alt="Juliette sitzt mit offenem Laptop im Schneidersitz auf einem Bett. Die Finger liegen auf der Tastatur."
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 550px, 100vw"
                  basePath={basePath}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4) Kundenstimmen-Kopf — am Original gemessen: Hintergrund #D9D9D9,
          50px oben / 0px unten, einspaltig.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page pt-[50px] text-center">
          <h2 className={`${H2_CENTERED} text-gold-light`}>
            Pinterest Marketing mit Erfahrung und klarer Strategie
          </h2>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5) Die Kundenstimmen selbst — am Original gemessen: Hintergrund
          #D9D9D9, 50px/50px, einspaltig. Jedes Zitat steht in einer eigenen
          weißen Karte über die volle Inhaltsbreite (NICHT zweispaltig):
          Kartengrund #FFFDFD, 1064px breit im 1140er Rahmen, Innenabstand
          53px, Eckenradius 0, Foto 160×160 rund, Zitat Arial 18/30 in #545454
          linksbündig, 50px Abstand zwischen den Karten.
          Im Original ist das ein Swiper-Karussell, das zweimal im Markup steht
          (Desktop- und Mobilfassung); hier stehen die sechs Karten
          untereinander.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page py-[50px]">
          <div className="mx-auto max-w-[1064px] space-y-[50px]">
            {kundenstimmen.map((stimme) => (
              <figure
                key={stimme.name}
                className="flex flex-col items-center gap-8 bg-[#FFFDFD] p-[26px] sm:flex-row sm:items-start md:p-[53px]"
              >
                <div className="relative h-[160px] w-[160px] shrink-0 overflow-hidden rounded-full bg-surface">
                  <ExportedImage
                    src={stimme.foto}
                    alt={stimme.alt}
                    fill
                    className={
                      stimme.contain ? "object-contain p-4" : "object-cover"
                    }
                    sizes="160px"
                    basePath={basePath}
                    unoptimized={stimme.contain}
                  />
                </div>
                <div>
                  <blockquote className={`${BODY} text-text text-left`}>
                    {stimme.text}
                    {stimme.link && (
                      <>
                        <a
                          href={stimme.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold-text hover:underline"
                        >
                          {stimme.link.label}
                        </a>
                        {stimme.textEnde}
                      </>
                    )}
                  </blockquote>
                  {/* Diese Zeile ist am Original NICHT nachgemessen —
                      bewusst schlicht gehalten. */}
                  <figcaption className={`${BODY} mt-4 text-left`}>
                    <span className="text-heading font-bold">
                      {stimme.name}
                    </span>
                    <br />
                    {stimme.rolle}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          6) Abschluss/CTA — am Original gemessen: Hintergrund Goldhell
          #C49C5E (NICHT weiß), 80px/80px, Spalten 570/570. Text links,
          Bild rechts. Dunkelgrauer Button (.btn-dark): auf dem goldhellen
          Grund gingen sowohl der goldene Primär- als auch der graue
          Sekundär-Button unter.
          ------------------------------------------------------------------ */}
      <section className="bg-gold-light">
        <div className="container-page py-[80px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-0">
            <div className={`self-center ${COL}`}>
              <h2 className={H2_ABSCHLUSS}>
                Welches Pinterest Angebot passt zu deinem Unternehmen?
              </h2>

              <p className={`${BODY} mt-6 text-white`}>
                Nicht jedes Unternehmen braucht das gleiche Pinterest-Setup.
              </p>

              <p className={`${BODY} mt-6 text-white`}>
                Vielleicht möchtest du Pinterest ganz neu aufbauen. Vielleicht
                ist dein Account bereits aktiv, aber Strategie und SEO fehlen.
                Oder du möchtest Pinterest professionell nutzen, ohne dich
                intern um Keyword-Recherche, Content-Planung, Designs und
                Veröffentlichung kümmern zu müssen.
              </p>

              <p className={`${BODY} mt-6 text-white`}>
                Genau dafür gibt es unterschiedliche Möglichkeiten der
                Zusammenarbeit.
              </p>

              <p className={`${BODY} mt-6 text-white`}>
                Wenn du noch nicht weißt, welches Angebot zu deiner
                Ausgangssituation passt, können wir das in einem kostenfreien
                Erstgespräch gemeinsam klären.
              </p>

              <div className="mt-8">
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  Kostenfreies Erstgespräch vereinbaren
                </a>
              </div>
            </div>

            <div className={COL}>
              <div className="relative mx-auto aspect-[800/533] w-full overflow-hidden rounded-t-[150px] lg:max-w-[550px]">
                <ExportedImage
                  src={phoneImage}
                  alt="Juliette stütz eine Hand in die Hüfte, mit der anderen hält sie ihr Handy ans Ohr"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 550px, 100vw"
                  basePath={basePath}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          7) Überschrift über den Kacheln — am Original gemessen: Hintergrund
          #FFFFFF, 80px oben / 0px unten, einspaltig, zentriert.
          ------------------------------------------------------------------ */}
      <section id="angebote" className="bg-surface scroll-mt-24">
        <div className="container-page pt-[80px]">
          <h2 className={`${H2_CENTERED} text-gold-light`}>
            Meine Pinterest Marketing Angebote für Unternehmen
          </h2>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          8) + 9) Die vier Angebots-Kacheln. Im Original steht jede Kachel als
          eigene Spalte (elementor-col-50) in einem Abschnitt mit zwei Spalten
          von je 570px OHNE Spaltenabstand — bei vier Kacheln also zwei
          Abschnitte. Am Original gemessen: Hintergrund #FFFFFF,
          Reihe 1 50px/50px, Reihe 2 50px/80px.
          Kachel selbst: Grafikfläche 530×373, Eckenradius 0, mittig in der
          570er Spalte — links und rechts bleiben je 20px des weißen
          Abschnittshintergrunds (#FFFFFF) frei. Das ist keine eigene
          Rahmenlinie, sondern genau der Rand, der beim Überfahren als weißer
          Rahmen um die abgedunkelte Kachel sichtbar wird.
          Innenabstand 10px, Grafik als Hintergrund mit object-cover.
          ------------------------------------------------------------------ */}
      {[angebote.slice(0, 2), angebote.slice(2, 4)].map((reihe, reiheIndex) => (
        <section key={reiheIndex} className="bg-surface">
          <div
            className={`container-page pt-[50px] ${
              reiheIndex === 0 ? "pb-[50px]" : "pb-[80px]"
            }`}
          >
            <div className="grid gap-0 lg:grid-cols-2">
              {reihe.map((angebot) => (
                <Link
                  key={angebot.href}
                  href={angebot.href}
                  aria-label={angebot.title}
                  className="group relative mx-[20px] block aspect-[530/373] overflow-hidden p-[10px]"
                >
                  {/* Die Grafik ist 780×520 (3:2), die Kachel 530×373 —
                      object-cover beschneidet deshalb links und rechts je rund
                      20 Bildpixel, die volle Höhe bleibt sichtbar. Der goldene
                      Titel bleibt unangetastet: er sitzt zwischen x≈54 und
                      x≈584 der Grafik. */}
                  <ExportedImage
                    src={angebot.bild}
                    alt={angebot.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1188px) 530px, (min-width: 1024px) 50vw, 100vw"
                    basePath={basePath}
                  />
                  {/* Schleier — am Original gemessen: #595959, Deckkraft 0.9,
                      Übergang 0.3s. Im Ruhezustand komplett durchsichtig, die
                      Grafik bleibt also unangetastet. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[#595959] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-90 group-focus-visible:opacity-90"
                  />
                  {/* Beschriftung — am Original gemessen: Arial, 30px/50px,
                      Stärke 600, letter-spacing 1.4px, #D9D9D9, waagerecht und
                      senkrecht zentriert, Deckkraft 0 → 1 über 1.5s. Sie ist
                      echter Text im Link und ersetzt damit den früheren
                      sr-only-Text; keine Bewegung, keine Skalierung.
                      `group-hover` steckt in Tailwind v4 in @media (hover: hover)
                      — auf Geräten ohne Mauszeiger bleibt die Beschriftung
                      also unsichtbar, dort trägt der Titel in der Grafik.

                      Dazu gehört der Rahmen des Originals: 1.6px solid #D9D9D9,
                      Eckenradius 0, auf der Innenkante des 10px-Innenabstands
                      der Kachel (`inset-[10px]` → 510×373−20 = 510×353 bei
                      voller Kachelgröße). Er ist Teil DIESER Fläche und blendet
                      deshalb mit derselben Deckkraft-Animation über 1.5s ein —
                      kein eigener Effekt, keine eigene Dauer. Innenabstände im
                      Rahmen ab 768px die gemessenen 125px oben/unten und 50px
                      links/rechts; darunter ist die Kachel schmaler, dort
                      halten 40px/20px die Beschriftung frei von den Kanten,
                      ohne sie zu quetschen. */}
                  <span className="pointer-events-none absolute inset-[10px] flex items-center justify-center border-[1.6px] border-[#D9D9D9] px-[20px] py-[40px] text-center font-body text-[30px] leading-[50px] font-semibold tracking-[1.4px] text-[#D9D9D9] opacity-0 transition-opacity duration-1500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 md:px-[50px] md:py-[125px]">
                    <span>
                      {angebot.beschriftung.map((zeile, zeilenIndex) => (
                        <Fragment key={zeile}>
                          {zeilenIndex > 0 && <br />}
                          {zeile}
                        </Fragment>
                      ))}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
