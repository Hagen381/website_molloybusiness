import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Breadcrumb from "@/components/Breadcrumb";
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

export const metadata: Metadata = {
  title: "Pinterest Marketing Angebote für Unternehmen",
  description:
    "Pinterest Marketing Angebote für Unternehmen und KMU: Account Aufbau, Account Management, Strategie Call und Audit – organische Sichtbarkeit statt Anzeigen.",
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
const H3_CENTERED =
  "text-center tracking-[1.4px] text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";
const KICKER =
  "font-heading font-medium tracking-[1.4px] text-[18px] leading-[28px] md:text-[20px] md:leading-[30px]";
const BODY = "font-body";
const COL = "lg:px-[10px]";

// Zitat-Trenner. Der Abschnitt hat KEINEN eigenen Hintergrund (der creme
// Body-Grund scheint durch), deshalb trägt die Zeile die normale dunkle
// Überschriftenfarbe — das vorherige helle Grau war auf den fälschlich
// angenommenen dunklen Grund gemünzt. Die Farbe ist nicht nachgemessen.
const H2_ZITAT =
  "font-heading font-normal tracking-[1.4px] text-heading text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";

// Abschluss-Abschnitt auf Goldhell: am Original gemessen 28px/40px, Stärke 400,
// letter-spacing 1.4px, weiß und linksbündig.
const H2_ABSCHLUSS =
  "font-heading font-normal tracking-[1.4px] text-white text-[28px] leading-[40px]";

// Kachelbeschriftung, am Original gemessen: Arial (NICHT Antic Didone),
// 30px/50px, Stärke 600, letter-spacing 1.4px, zentriert, #D9D9D9.
// Unter 768px eine Stufe kleiner, damit die zwei Zeilen in der
// seitenverhältnis-gebundenen Kachel nicht über deren Rand hinauslaufen.
const KACHEL_TITEL =
  "font-body font-semibold tracking-[1.4px] text-gray-light text-[22px] leading-[36px] md:text-[30px] md:leading-[50px]";

// ---------------------------------------------------------------------------
// Die vier Angebote. Titel und Route kommen aus site-config; hier stehen nur
// die im Original zweizeilige Kachelbeschriftung und die Kachelgrafik.
// Es sind die vier eigenen Grafiken des Originals (780×520), per
// .github/workflows/kachelbilder-holen.yml nachgeladen — im archivierten HTML
// dieser Seite standen sie nicht, sie kamen aus dem externen Elementor-CSS.
// ---------------------------------------------------------------------------
const kacheln = [
  {
    href: "/pinterest-account-aufbau/",
    zeilen: ["PINTEREST", "ACCOUNT AUFBAU"],
    bild: kachelAufbau,
  },
  {
    href: "/pinterest-account-management/",
    zeilen: ["PINTEREST ACCOUNT", "MANAGEMENT"],
    bild: kachelManagement,
  },
  {
    href: "/pinterest-strategie-call/",
    zeilen: ["PINTEREST", "STRATEGIE CALL"],
    bild: kachelStrategie,
  },
  {
    href: "/pinterest-audit/",
    zeilen: ["PINTEREST", "AUDIT"],
    bild: kachelAudit,
  },
] as const;

// Titel aus dem services-Array lesen, statt sie neu einzutippen — die Kachel
// zeigt die Original-Beschriftung, das aria-label den gepflegten Titel.
const angebote = kacheln.map((kachel) => {
  const service = services.find((s) => s.href === kachel.href);
  if (!service) {
    throw new Error(`Kein Angebot in site-config für ${kachel.href}`);
  }
  return { ...kachel, title: service.title };
});

// ---------------------------------------------------------------------------
// Kundenstimmen — wortgleich aus dem Original übernommen, Freigaben liegen vor.
// Bewusst NUR sichtbarer Text: kein Review-/AggregateRating-Schema.
// ---------------------------------------------------------------------------
const kundenstimmen = [
  {
    text: '"Ich liebe es mit Juliette zu arbeiten. Man merkt ihre langjährige Erfahrung, sie denkt mit und bringt immer neue tolle Ideen ins Unternehmen. Sie hat ein sehr gutes Feingefühl, versteht Zusammenhänge sehr schnell und erkennt wo im Unternehmen noch verborgene Potenziale sind. Die Zusammenarbeit macht immer Spaß und Freude. Sie bringt eine Energie mit für die ich sehr dankbar bin. Danke für alles meine Liebe."',
    name: "Daniela Batista dos Santos",
    rolle: "CEO | The Circle of Wonderwomen LLC",
    foto: fotoDaniela,
    alt: "Daniela Batista dos Santos",
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
    text: "“Ich liebe die Zusammenarbeit mit Juliette sehr! Sowohl menschlich aber auch auf professioneller Ebene könnte ich mir keine bessere OBM vorstellen. Danke für dich!”",
    name: "Julia Kallenborn",
    rolle: "Geschäftsführerin | Licht und Liebe Media GmbH",
    foto: fotoJulia,
    alt: "JuliaKallenborn",
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
];

// Die Aufzählung im zweiten Abschnitt — wortgleich aus dem Original, ohne die
// beiden entfallenen Angebote.
const angebotsListe = [
  "Pinterest Account Aufbau",
  "Pinterest Account Management",
  "Pinterest Strategie & Beratung",
  "Pinterest Audit",
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${path}#webpage`,
      url: `${siteConfig.url}${path}`,
      name: "Pinterest Marketing Angebote für Unternehmen",
      description: metadata.description,
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
      <Breadcrumb pageName={pageName} />

      {/* ------------------------------------------------------------------
          1) HERO — am Original gemessen: Hintergrund #D9D9D9, 80px/80px,
          Spalten 684/456 (60/40), Text links, Bild rechts.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page py-[80px]">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-x-0">
            <div className={COL}>
              <h1 className={H1}>
                4 Pinterest Marketing Angebote für Unternehmen – mehr
                Reichweite, Traffic &amp; Wachstum
              </h1>

              <p className={`${BODY} mt-6`}>
                Mit professionellem Pinterest Marketing holst du dir einen
                Marketingkanal ins Business, der langfristig Traffic,
                Sichtbarkeit und Kunden bringt – ohne tägliches Posten, ohne
                Algorithmus-Stress und ohne ständiges Bespielen dutzender
                Kanäle.
              </p>

              <p className={`${BODY} mt-6`}>
                Als Pinterest-Marketing-Expertin unterstütze ich dich beim{" "}
                <strong>Aufbau</strong>, <strong>Management</strong>, der{" "}
                <strong>Strategieentwicklung</strong> und beim{" "}
                <strong>Audit</strong>, sodass du Pinterest endlich so nutzt,
                wie es gedacht ist:
                <br />
                als visuelle Suchmaschine, die dein Unternehmen gezielt nach
                vorn bringt.
              </p>

              <p className={`${BODY} mt-6`}>
                Mein Ziel ist eine Zusammenarbeit, die dich wirklich entlastet –
                damit du dich wieder auf dein Kernbusiness konzentrieren kannst,
                während Pinterest für dich arbeitet.
              </p>

              {/* Im Original zeigt der Button auf /angebote-pinterest-marketing/#angebote —
                  diese Seite gibt es nicht. Richtig ist der Sprung zum
                  Kachelbereich dieser Seite. */}
              <div className="mt-8">
                <a href="#angebote" className="btn btn-primary">
                  zeig mir deine pinterest marketing angebote
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
          2) "Hast du…" — am Original gemessen: Hintergrund #FFFFFF,
          100px/100px, Spalten 456/684 (40/60): links der Überschriftenblock
          mit Trennlinie, rechts Fließtext und Aufzählung.
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="container-page py-[100px]">
          <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-x-0">
            <div className={COL}>
              <p className={`${KICKER} text-gold-light`}>Hast du…</p>

              <h2 className={`${H2_GOLD} mt-4`}>
                ...schonmal darüber nachgedacht, dass...
              </h2>

              <hr className="border-gold-light mt-6 w-[330px] max-w-full border-t-[1.6px]" />
            </div>

            <div className={COL}>
              <p className={BODY}>
                …Pinterest einer der wenigen Marketingkanäle ist, der Inhalte
                monatelang — oft jahrelang — sichtbar hält?
                <br />
                Während Posts auf anderen Plattformen innerhalb von Stunden
                verschwinden, kann ein guter Pin dein Unternehmen dauerhaft
                Reichweite, Klicks und Kunden bringen.
              </p>

              <p className={`${BODY} mt-6`}>
                Für nachhaltiges Wachstum lohnt es sich, bestimmte
                Marketing-Aufgaben abzugeben oder professionell aufsetzen zu
                lassen. So kannst du dich auf das Wesentliche konzentrieren,
                während Pinterest im Hintergrund beständig arbeitet.
              </p>

              <p className={`${BODY} mt-6`}>
                Das sind meine 4 Pinterest Marketing Angebote für Unternehmen,
                KMU und Lifestyle-Marken:
              </p>

              {/* Im Original eine Elementor-Icon-Liste mit fa-chevron-right. */}
              <ul className={`${BODY} mt-4 space-y-2`}>
                {angebotsListe.map((eintrag) => (
                  <li key={eintrag} className="flex gap-3">
                    <span aria-hidden="true" className="text-gold-light">
                      ›
                    </span>
                    <span>{eintrag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3) "Stell dir vor…" — am Original gemessen: Hintergrund #D9D9D9,
          50px oben / 100px unten, Spalten 570/570.
          Im Original Bild links, Text rechts. Unter 1024px steht der Text
          zuerst, deshalb liegt er im Markup vorn.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page pt-[50px] pb-[100px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-0">
            <div className={`lg:col-start-2 lg:row-start-1 ${COL}`}>
              <p className={`${KICKER} text-gold-light`}>Stell dir vor…</p>

              <h2 className={`${H2_GOLD} mt-4`}>
                ...du hebst deinen Markenauftritt auf´s nächste Level
              </h2>

              <p className={`${BODY} mt-6`}>
                Wenn dein Pinterest-Account professionell aufgesetzt ist und
                strategisch für dich arbeitet, musst du nicht mehr täglich
                Content produzieren, um sichtbar zu bleiben.
                <br />
                Du bekommst konstant Reichweite, Website-Traffic und Anfragen —
                selbst dann, wenn du gerade in Ruhe an deinem nächsten Projekt
                arbeitest.
              </p>

              <p className={`${BODY} mt-6`}>
                Pinterest bringt dir zuverlässig Menschen, die{" "}
                <strong>aktiv nach Lösungen wie deinen suchen</strong>.
                <br />
                Du gewinnst Zeit, Energie und Fokus zurück – und dein Business
                entwickelt sich automatisch weiter, weil dein Marketing
                dauerhaft für dich läuft.
              </p>

              {/* Im Original die alte Kontaktseite — die Adresse kommt jetzt
                  aus siteConfig. Primär-Button wie die beiden anderen dieser
                  Seite: der sekundäre (#D9D9D9) wäre auf dem #D9D9D9-Grund
                  dieses Abschnitts unsichtbar, und im Original tragen alle
                  drei Buttons dieselben Elementor-Klassen. */}
              <div className="mt-8">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="btn btn-primary"
                >
                  let´s start
                </a>
              </div>
            </div>

            {/* Quelle 800×533 (quer) — volle Spaltenbreite, Seitenverhältnis
                erhalten. */}
            <div className={`lg:col-start-1 lg:row-start-1 ${COL}`}>
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
          4) Zitat-Trenner — am Original gemessen: KEIN eigener Hintergrund,
          der creme Body-Grund (#F2EDE7) scheint durch. 80px oben / 115px
          unten, einspaltig, Inhaltsbreite 1000px zentriert.
          ------------------------------------------------------------------ */}
      <section>
        <div className="container-page pt-[80px] pb-[115px]">
          <div className="mx-auto max-w-[1000px] text-center">
            <p
              aria-hidden="true"
              className="font-heading text-gold-light text-[48px] leading-none"
            >
              ”
            </p>
            <p className={`${H2_ZITAT} mt-4`}>
              “Das geht nicht!”, sagten sie alle.
              <br />
              Da kam einer und der hat´s gemacht.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5) Überschrift über den Kacheln — am Original gemessen: Hintergrund
          #FFFFFF, 80px oben / 0px unten, einspaltig, zentriert.
          ------------------------------------------------------------------ */}
      <section id="angebote" className="bg-surface scroll-mt-24">
        <div className="container-page pt-[80px]">
          <h3 className={`${H3_CENTERED} text-gold-light`}>
            Meine Pinterest Marketing Angebote für Unternehmen
          </h3>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          6) + 7) Die vier Angebots-Kacheln. Im Original steht jede Kachel als
          eigene Spalte (elementor-col-50) in einem Abschnitt mit zwei Spalten
          von je 570px OHNE Spaltenabstand — bei vier Kacheln also zwei
          Abschnitte. Am Original gemessen: Hintergrund #FFFFFF,
          Reihe 1 50px/50px, Reihe 2 50px/80px.
          Kachel selbst: 570×373, Eckenradius 0, Innenabstand 10px,
          Grafik als Hintergrund mit object-cover.
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
                  className="group relative block aspect-[570/373] overflow-hidden"
                >
                  <ExportedImage
                    src={angebot.bild}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1188px) 570px, (min-width: 1024px) 50vw, 100vw"
                    basePath={basePath}
                  />
                  {/* Im Original-HTML steht in jeder Kachelspalte ein
                      elementor-background-overlay — Farbe und Deckkraft
                      standen im nicht archivierten CSS. Deshalb bewusst
                      dezent, nur als leichte Abdunklung. */}
                  <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
                  {/* Die Beschriftung sitzt unten: die gemessene Schriftfarbe
                      #D9D9D9 ist genau der helle Grauton der oberen
                      Grafikhälfte und wäre dort unlesbar — im unteren dunklen
                      Band (#595959) der Grafik trägt sie. Die senkrechte
                      Position selbst ist nicht nachgemessen. */}
                  <span className="absolute inset-0 flex items-end justify-center p-[10px] text-center">
                    <span className={KACHEL_TITEL}>
                      {angebot.zeilen[0]}
                      <br />
                      {angebot.zeilen[1]}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ------------------------------------------------------------------
          8) Kundenstimmen-Kopf — am Original gemessen: Hintergrund #D9D9D9,
          50px oben / 0px unten, einspaltig.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page pt-[50px] text-center">
          <p className={`${KICKER} text-gold-light`}>Kundenstimmen</p>
          <h3 className={`${H3_CENTERED} text-gold-light mt-2`}>
            Feedback ist ein Geschenk
          </h3>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          9) Die Kundenstimmen selbst — am Original gemessen: Hintergrund
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
                    <span className="text-heading font-bold">{stimme.name}</span>
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
          10) Abschluss — am Original gemessen: Hintergrund Goldhell #C49C5E
          (NICHT weiß), 80px/80px, Spalten 570/570. Text links, Bild rechts.
          ------------------------------------------------------------------ */}
      <section className="bg-gold-light">
        <div className="container-page py-[80px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-0">
            <div className={`self-center ${COL}`}>
              <h2 className={H2_ABSCHLUSS}>
                Ich würde mich freuen, wenn auch du bald unter den
                Kundenstimmen zu sehen bist.
              </h2>

              <p className={`${BODY} mt-6 text-white`}>
                Lass uns in einem ersten Gespräch herausfinden, wie ich dich und
                dein Businesswachstum unterstützen kann. Es war noch nicht das
                richtige Angebot für dich ersichtlich? Kein Problem. Erzähl mir
                mehr von dir und deinem Unternehmen und ich sende dir ein
                individuelles Angebot zu.
              </p>

              {/* Im Original ein mailto — bei einer Terminvereinbarung ist der
                  Calendly-Link das richtige Ziel. Dunkelgrauer Button
                  (.btn-dark): auf dem goldhellen Grund dieses Abschnitts
                  gingen sowohl der goldene Primär- als auch der graue
                  Sekundär-Button unter. */}
              <div className="mt-8">
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  jetzt termin vereinbaren
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
