import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import heroImage from "@/assets/images/hero-juliette.jpg";
import { services, siteConfig } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";

// Jede Seite setzt ihr eigenes Canonical-Tag (siehe CLAUDE.md) — sonst
// erben Unterseiten das globale "/" aus layout.tsx und deklarieren sich
// selbst fälschlich als Startseite.
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const audiences = [
  "Touristische Unternehmen",
  "Food-Marken",
  "Finanzdienstleister",
  "KMU & Selbstständige",
];

const testimonials = [
  {
    quote: "Platzhalter für eine Kundenstimme — wird mit echtem Feedback befüllt.",
    name: "Referenz folgt",
    role: "Unternehmen",
  },
  {
    quote: "Platzhalter für eine Kundenstimme — wird mit echtem Feedback befüllt.",
    name: "Referenz folgt",
    role: "Unternehmen",
  },
  {
    quote: "Platzhalter für eine Kundenstimme — wird mit echtem Feedback befüllt.",
    name: "Referenz folgt",
    role: "Unternehmen",
  },
];

// Sichtbar als "Zuletzt aktualisiert: August 2026", im Schema als dateModified.
const lastUpdatedLabel = "August 2026";
const lastUpdatedIso = "2026-08-08";

// FAQ-Daten: `answer` ist die eigenständige 40–60-Wort-Direktantwort, `link`
// hängt optional einen weiterführenden Blog-Verweis an denselben Absatz an.
// Das FAQPage-Schema wird WORTGLEICH aus Antwort (+ Linktext) gebaut —
// Texte nie nur an einer der beiden Stellen ändern.
type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; text: string };
};

const faq: FaqItem[] = [
  {
    question: "Was kostet eine Pinterest Marketing Agentur?",
    answer:
      "Die Kosten richten sich nach dem Umfang der Zusammenarbeit: Am kleinsten ist eine einmalige Beratung, bei der du selbst umsetzt, am größten die komplette Übernahme von Design, Texten und Veröffentlichung. Entscheidend ist deshalb, wie viel Eigenleistung du behalten willst. Ein konkretes Angebot für dein Unternehmen bekommst du nach dem Erstgespräch.",
  },
  {
    question: "Lohnt sich Pinterest für kleine Unternehmen und Selbstständige?",
    answer:
      "Es lohnt sich unter zwei Voraussetzungen: Deine Website bietet etwas, worauf Pins verweisen können, und deine Themen werden dort aktiv gesucht. Fehlt eines davon – oder brauchst du kurzfristig Ergebnisse –, ist Pinterest nicht der richtige Kanal. Eine ehrliche Einordnung für deinen Fall gibt der Beitrag",
    link: {
      href: "/blog/lohnt-sich-pinterest-fuer-kleine-unternehmen/",
      text: "Lohnt sich Pinterest für kleine Unternehmen?",
    },
  },
  {
    question: "Pinterest Marketing selbst machen oder auslagern?",
    answer:
      "Die ehrliche Messlatte ist deine Zeit: Pinterest belohnt Regelmäßigkeit, nicht Perfektion. Kannst du Woche für Woche verlässlich Zeit fürs Gestalten und Texten freihalten – und macht dir das Freude –, ist Selbermachen gerade in der Startphase die richtige Wahl. Reißt das Tagesgeschäft diese Zeit immer wieder ein, wird Auslagern günstiger als ein brachliegender Account.",
  },
  {
    question: "Agentur oder freie Pinterest-Managerin — was ist besser?",
    answer:
      "Der echte Unterschied liegt in Kapazität und Vertretung: Ein größeres Team kann Ausfälle abfangen und viele Accounts parallel betreuen, bindet dich aber oft an festere Strukturen. Bei einem kleinen, spezialisierten Anbieter arbeitest du direkt mit der Person, die auch umsetzt. molloy business gehört zur zweiten Sorte: ein spezialisierter Betrieb, kein großes Team.",
  },
  {
    question: "Pinterest organisch oder Pinterest Ads?",
    answer:
      "Entscheidend ist dein Zeithorizont: Ads sind die richtige Wahl, wenn ein konkreter Anlass ein Datum hat – ein Launch, eine Saison-Aktion, ein schneller Markttest mit vorhandenem Werbebudget. Organisch ist die richtige Wahl, wenn du dauerhaft gefunden werden willst, ohne fortlaufend zu zahlen. Beides schließt sich nicht aus; molloy business übernimmt dabei den organischen Teil.",
  },
  {
    question: "Wie lange dauert es, bis Pinterest Ergebnisse bringt?",
    answer:
      "Eine seriöse Pauschalzahl gibt es nicht – die Dauer hängt von Ausgangslage, Nische und Veröffentlichungsrhythmus ab. Woran du erkennst, dass es in die richtige Richtung geht: Erst steigen die Impressionen, dann speichern Menschen deine Pins, danach folgen die Klicks zur Website. Diese Reihenfolge ist normal; eine realistische Einschätzung für deinen Fall gibt das Erstgespräch.",
  },
];

// Seiten-spezifisches Schema: Person, Service je Leistung,
// FAQPage und WebPage mit dateModified. Organization steht global in layout.tsx.
// Bewusst KEIN BreadcrumbList (Startseite), KEIN AggregateRating/Review
// (es gibt noch keine echten Bewertungen — erfundene wären ein Abstrafungsrisiko).
const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: `${siteConfig.url}/`,
      name: siteConfig.defaultTitle,
      dateModified: lastUpdatedIso,
      about: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#juliette-oppel`,
      name: siteConfig.brandFace,
      jobTitle: "Pinterest Marketing Expertin",
      worksFor: { "@id": `${siteConfig.url}/#organization` },
      knowsAbout: "Pinterest Marketing",
      sameAs: [siteConfig.social.linkedin, siteConfig.social.pinterest],
    },
    ...services.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: ["DE", "AT", "CH"],
    })),
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.link ? `${item.answer} ${item.link.text}` : item.answer,
        },
      })),
    },
  ],
};

const processSteps = [
  {
    title: "Erstgespräch",
    text: "Wir lernen uns kennen und klären, was du anbietest, wen du erreichen willst und ob Pinterest für dein Unternehmen der passende Kanal ist. Das Gespräch ist unverbindlich und kostet dich nichts außer Zeit.",
  },
  {
    title: "Analyse",
    text: "molloy business schaut sich deine Ausgangslage an: Website, bestehender Account (falls vorhanden), Wettbewerb und Suchverhalten deiner Zielgruppe auf Pinterest. Daraus entsteht ein klares Bild, wo du stehst.",
  },
  {
    title: "Strategie & Struktur",
    text: "Auf Basis der Analyse entstehen Keyword-Set, Board-Struktur und ein Redaktionsplan. Du weißt danach genau, welche Inhalte in welchem Rhythmus veröffentlicht werden und warum.",
  },
  {
    title: "Umsetzung",
    text: "Pins werden gestaltet, Titel und Beschreibungen für die Pinterest-Suche optimiert und nach Plan veröffentlicht. Je nach Leistung übernimmst du das selbst oder gibst es komplett ab.",
  },
  {
    title: "Auswertung",
    text: "Regelmäßige Auswertungen zeigen, welche Pins und Themen funktionieren. Die Strategie wird danach angepasst – so wird der Kanal von Monat zu Monat treffsicherer.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
              Pinterest Marketing Agentur
            </p>
            <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
              Pinterest Marketing Agentur für Unternehmen im deutschsprachigen
              Raum
            </h1>
            {/* Antwort-Kapsel: eigenständiger, in sich geschlossener Absatz —
                der wichtigste Textblock der Website (wird von KI-Suchsystemen
                bevorzugt zitiert). Nicht kürzen, nicht aufteilen. */}
            <p className="font-body mt-6 text-lg">
              molloy business ist eine Pinterest Marketing Agentur, die
              Unternehmen im deutschsprachigen Raum organisch auf Pinterest
              sichtbar macht – mit Strategie, SEO-optimierten Pins und
              verlässlicher Umsetzung statt bezahlter Werbeanzeigen. Der
              Schwerpunkt liegt auf touristischen Unternehmen, Food-Marken und
              Finanzdienstleistern; ebenso unterstützt molloy business KMU und
              Selbstständige, die Pinterest als langfristigen
              Sichtbarkeitskanal nutzen wollen.
            </p>
            <p className="font-body mt-4 text-lg">
              Ich bin{" "}
              <strong className="text-heading">Juliette Oppel</strong>, das
              Gesicht von molloy business. Ich übernehme
              Strategie, Design, Texte und Umsetzung, damit Pinterest für dich
              arbeitet – nicht umgekehrt.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {audiences.map((a) => (
                <li
                  key={a}
                  className="font-body bg-surface text-heading rounded-full px-4 py-1.5 text-sm shadow-sm"
                >
                  {a}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                strategie call vereinbaren
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:aspect-auto lg:h-auto lg:self-stretch">
            <ExportedImage
              src={heroImage}
              alt="Juliette Oppel, Gesicht der Pinterest Marketing Agentur molloy business"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
              basePath={basePath}
              priority
            />
          </div>
        </div>
      </section>

      {/* Was macht eine Pinterest Marketing Agentur? */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Was macht eine Pinterest Marketing Agentur?
          </h2>
          <p className="font-body mt-6 text-lg">
            Eine Pinterest Marketing Agentur macht Unternehmen auf Pinterest
            sichtbar: Sie entwickelt die Strategie, baut Account und Boards
            strukturiert auf, gestaltet Pins, optimiert Titel und
            Beschreibungen für die Pinterest-Suche und plant die
            Veröffentlichungen. Anschließend wertet sie aus, was funktioniert,
            und passt Inhalte und Keywords laufend an.
          </p>
          <p className="font-body mt-4 text-lg">
            Konkret gehören dazu diese Aufgaben:
          </p>
          <ul className="font-body mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>
              <strong className="text-heading">Account-Struktur:</strong>{" "}
              Profil, Beschreibung und Einstellungen so aufsetzen, dass
              Pinterest versteht, wofür dein Unternehmen steht.
            </li>
            <li>
              <strong className="text-heading">Boards:</strong> Themenwelten
              anlegen, die zu den Suchanfragen deiner Zielgruppe passen.
            </li>
            <li>
              <strong className="text-heading">Pin-Design:</strong> Grafiken
              gestalten, die zu deiner Marke passen und zum Klicken einladen.
            </li>
            <li>
              <strong className="text-heading">Pinterest-SEO:</strong>{" "}
              Keywords recherchieren und in Titeln und Beschreibungen so
              einsetzen, dass deine Pins gefunden werden.
            </li>
            <li>
              <strong className="text-heading">Redaktionsplanung:</strong>{" "}
              festlegen, welche Inhalte wann veröffentlicht werden – planbar
              statt spontan.
            </li>
            <li>
              <strong className="text-heading">Auswertung:</strong> messen,
              welche Pins Reichweite und Website-Besuche bringen, und die
              Strategie danach ausrichten.
            </li>
          </ul>
        </div>
      </section>

      {/* Organisch statt Ads */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Organisch statt Ads: Sichtbarkeit, die bleibt
        </h2>
        <p className="font-body mt-6 text-lg">
          Pinterest ist keine Social-Media-Plattform, sondern eine{" "}
          <strong className="text-heading">
            Suchmaschine für Ideen, Produkte und Inspiration
          </strong>
          . Menschen kommen nicht hierher, um Freunden zu folgen, sondern um
          etwas zu finden: das nächste Reiseziel, ein Rezept fürs Wochenende,
          eine Antwort auf eine Finanzfrage. Wer dort mit den passenden
          Inhalten auftaucht, erreicht Menschen genau in dem Moment, in dem
          sie suchen.
        </p>
        <p className="font-body mt-4 text-lg">
          Genau daraus ergibt sich der größte Unterschied zu anderen Kanälen:
          Ein Beitrag auf klassischen Social-Media-Plattformen verschwindet
          nach Stunden aus den Feeds. Ein gut gemachter, SEO-optimierter Pin
          wird dagegen über Monate – oft Jahre – in der Pinterest-Suche
          gefunden und bringt in dieser Zeit kontinuierlich Besucherinnen und
          Besucher auf deine Website. Die Arbeit, die du einmal investierst,
          wirkt also dauerhaft weiter.
        </p>
        <p className="font-body mt-4 text-lg">
          Und Pinterest Ads? Anzeigen sind nicht schlecht – sie sind ein
          anderes Werkzeug. Sie bringen schnelle Reichweite, solange Budget
          fließt, und enden in dem Moment, in dem die Kampagne stoppt.
          Organische Pins bauen dagegen ein Fundament auf, das bleibt.{" "}
          <strong className="text-heading">
            molloy business ist auf den organischen Weg spezialisiert
          </strong>
          : Strategie, Struktur und Inhalte, die aus eigener Kraft gefunden
          werden – ohne laufendes Werbebudget.
        </p>
        <p className="font-body mt-4 text-lg">
          Das Ergebnis ist planbares, nachhaltiges Marketing: weniger
          Abhängigkeit von Algorithmen und Anzeigenpreisen, mehr Ruhe im
          Alltag – und ein Kanal, der im Hintergrund für dich arbeitet,
          während du dich um dein Kerngeschäft kümmerst.
        </p>
      </section>

      {/* Für wen sich Pinterest besonders lohnt */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Für wen sich Pinterest besonders lohnt
          </h2>

          <h3 className="mt-10 text-[22px] leading-tight">
            <Link href="/pinterest-marketing-tourismus/" className="hover:underline">
              Touristische Unternehmen
            </Link>
          </h3>
          <p className="font-body mt-3 text-lg">
            Reiseinspiration ist eines der stärksten Themen auf Pinterest:
            Menschen planen dort ihren nächsten Urlaub, oft Monate im Voraus.
            Hotels, Regionen und Reiseanbieter erreichen mit stimmungsvollen
            Pins genau die Menschen, die gerade nach ihrem nächsten Ziel
            suchen. Ein Pin zu einem Reiseziel bleibt über Saisons hinweg
            relevant und führt Interessierte direkt auf Unterkunfts- oder
            Angebotsseiten. So entsteht ein Kanal, der unabhängig von teuren
            Buchungsplattformen Besucherinnen und Besucher auf die eigene
            Website bringt.
          </p>

          <h3 className="mt-10 text-[22px] leading-tight">
            <Link href="/pinterest-marketing-food/" className="hover:underline">
              Food-Marken
            </Link>
          </h3>
          <p className="font-body mt-3 text-lg">
            Rezepte gehören zu den meistgesuchten Inhalten auf Pinterest –
            kaum eine Branche passt besser zur Plattform. Food-Marken können
            ihre Produkte in Rezept-Pins einbetten und werden damit genau dann
            gefunden, wenn jemand nach Ideen fürs Kochen oder Backen sucht.
            Saisonale Themen wie Grillen, Weihnachtsbäckerei oder schnelle
            Feierabendküche kehren jedes Jahr wieder und geben bestehenden
            Pins immer neue Reichweite. Wer hier kontinuierlich veröffentlicht,
            baut sich eine dauerhaft sichtbare Rezeptbibliothek auf.
          </p>

          <h3 className="mt-10 text-[22px] leading-tight">
            <Link
              href="/pinterest-marketing-finanzdienstleister/"
              className="hover:underline"
            >
              Finanzdienstleister
            </Link>
          </h3>
          <p className="font-body mt-3 text-lg">
            Finanzthemen werden auf Pinterest aktiv gesucht: Sparen,
            Altersvorsorge, Haushaltsplanung, Geldanlage für Einsteiger. Die
            Konkurrenz ist hier deutlich kleiner als in anderen Branchen –
            eine echte Chance für Finanzdienstleister, die verständliche
            Inhalte anbieten. Wer komplexe Themen in klare, hilfreiche Pins
            übersetzt, positioniert sich als vertrauenswürdige Anlaufstelle
            und gewinnt Leserinnen und Leser für Blog, Newsletter oder
            Beratungsangebote.
          </p>

          <p className="font-body mt-10 text-lg">
            Und außerhalb dieser drei Branchen? Auch dann lohnt sich ein
            Blick: KMU und Selbstständige mit einer eigenen Website und
            visuell darstellbaren Angeboten – vom Handwerk über Coaching bis
            zum Onlineshop – sind bei molloy business genauso willkommen. Ob
            Pinterest für dein Unternehmen passt, klären wir am einfachsten in
            einem kurzen Gespräch.
          </p>
        </div>
      </section>

      {/* So läuft die Zusammenarbeit ab */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          So läuft die Zusammenarbeit ab
        </h2>
        <ol className="font-body mt-8 list-decimal space-y-6 pl-6 text-lg">
          {processSteps.map((step) => (
            <li key={step.title}>
              <strong className="text-heading">{step.title}:</strong>{" "}
              {step.text}
            </li>
          ))}
        </ol>
      </section>

      {/* Services */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-12 text-center">
            <p className="font-body text-gold-text text-sm tracking-[2px] uppercase">
              Meine Angebote
            </p>
            <h2 className="mt-2 text-[28px] sm:text-[37px] sm:leading-[51.8px]">
              6 Pinterest Marketing Angebote für Unternehmen
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-cream group flex flex-col rounded-2xl p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-[22px] leading-tight">{service.title}</h3>
                <p className="font-body mt-3 flex-1 text-[15px] leading-relaxed">
                  {service.description}
                </p>
                <p className="font-body text-heading mt-4 text-sm">
                  {service.scope}
                </p>
                <span className="text-gold-text font-body mt-2 text-sm group-hover:underline">
                  mehr erfahren →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hinter molloy business */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Hinter molloy business
        </h2>
        <p className="font-body mt-6 text-lg">
          Hinter molloy business steht{" "}
          <strong className="text-heading">Juliette Oppel</strong> –
          Pinterest-Marketing-Expertin, erklärter Strukturprofi und das
          Gesicht der Marke. Sie
          betreut ihre Kundinnen und Kunden remote im gesamten
          deutschsprachigen Raum und übernimmt dabei alles aus einer Hand:
          Strategie, Pin-Design, Texte und die laufende Umsetzung.
        </p>
        <p className="font-body mt-4 text-lg">
          Ihre Arbeitsweise ist bewusst unaufgeregt: ehrliche Einschätzungen
          statt Hype-Versprechen, klare Abläufe statt Aktionismus – und nur
          Angebote, hinter denen sie selbst zu hundert Prozent steht. Wer mit
          molloy business arbeitet, arbeitet direkt mit ihr.
        </p>
      </section>

      {/* Trust signals / testimonials placeholder */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-12 text-center">
            <p className="font-body text-gold-text text-sm tracking-[2px] uppercase">
              Kundenstimmen
            </p>
            <h2 className="mt-2 text-[28px] sm:text-[37px] sm:leading-[51.8px]">
              Feedback ist ein Geschenk
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-cream rounded-2xl p-6 shadow-sm">
                <blockquote className="font-body text-[15px] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="font-body mt-4 text-sm">
                  <span className="text-heading font-semibold">{t.name}</span>
                  <br />
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungsübersicht */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Leistungen im Überblick
        </h2>
        <p className="font-body mt-6 text-lg">
          Von der einmaligen Beratung bis zur laufenden Betreuung: Die sechs
          Leistungen von molloy business unterscheiden sich vor allem darin,
          wie viel du selbst übernimmst – vom Strategie Call, nach dem du
          eigenständig weiterarbeitest, bis zum Account Management, das den
          Kanal komplett abdeckt.
        </p>

        <ul className="font-body mt-8 space-y-4 text-lg">
          {services.map((service) => (
            <li
              key={service.title}
              className="border-gray-light flex flex-col gap-1 border-b pb-4 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="text-heading shrink-0 font-semibold">
                {service.title}
              </span>
              <span className="sm:max-w-md sm:text-right">
                {service.scope}
              </span>
            </li>
          ))}
        </ul>

        <p className="font-body mt-8 text-lg">
          Welcher Umfang für dein Unternehmen passt, hängt von deiner
          Ausgangslage ab – etwa davon, ob ein Account komplett neu aufgebaut
          oder ein bestehender weiterbetreut wird und wie viel du selbst
          übernehmen möchtest. Ein konkretes, auf dein Unternehmen
          zugeschnittenes Angebot bekommst du im Erstgespräch.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Häufige Fragen zu Pinterest Marketing
          </h2>
          <div className="mt-8 space-y-10">
            {faq.map((item) => (
              <div key={item.question}>
                <h3 className="text-[22px] leading-tight">{item.question}</h3>
                <p className="font-body mt-3 text-lg">
                  {item.answer}
                  {item.link && (
                    <>
                      {" "}
                      <Link
                        href={item.link.href}
                        className="text-gold-text hover:underline"
                      >
                        {item.link.text}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Lass uns über dein Pinterest Marketing sprechen
        </h2>
        <p className="font-body mt-6 text-lg">
          In einem unverbindlichen Strategie Call schauen wir gemeinsam, wie
          Pinterest für dein Unternehmen arbeiten kann.
        </p>
        <div className="mt-8">
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            let&apos;s talk
          </a>
        </div>
        <p className="font-body mt-12 text-xs">
          Zuletzt aktualisiert: {lastUpdatedLabel}
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
