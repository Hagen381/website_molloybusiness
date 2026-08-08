import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import heroImage from "@/assets/images/hero-juliette.jpg";
import { priceVatNote, services, siteConfig } from "@/lib/site-config";
import { formatPrice } from "@/lib/format";
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

// Feste Reihenfolge aus site-config.ts — für Preisnennungen im Text.
const [management, aufbau, call, workshop, audit, contentPaket] = services;

// Sichtbar als "Zuletzt aktualisiert: August 2026", im Schema als dateModified.
const lastUpdatedLabel = "August 2026";
const lastUpdatedIso = "2026-08-08";

// FAQ-Daten: `answer` ist die eigenständige 40–60-Wort-Direktantwort,
// `more` die optionale Vertiefung. Das FAQPage-Schema wird WORTGLEICH aus
// genau diesen Strings gebaut — Texte nie nur an einer der beiden Stellen ändern.
const faq = [
  {
    question: "Was kostet eine Pinterest Marketing Agentur?",
    answer: `Bei molloy business kostet Pinterest Marketing zwischen ${formatPrice(call.price)} einmalig für einen Strategie Call und ${formatPrice(aufbau.price)} einmalig für den kompletten Account Aufbau. Die laufende Betreuung liegt bei ${formatPrice(management.price)} pro Monat, ein Audit bei ${formatPrice(audit.price)}, das Content Paket bei ${formatPrice(contentPaket.price)} pro Monat und der Workshop bei ${formatPrice(workshop.price)}.`,
    more: "Alle Leistungen sind einzeln buchbar. Der Strategie Call wird bei einer späteren Zusammenarbeit voll angerechnet.",
  },
  {
    question: "Lohnt sich Pinterest für kleine Unternehmen und Selbstständige?",
    answer:
      "Ja – gerade für kleine Unternehmen und Selbstständige lohnt sich Pinterest, weil organische Pins über Monate sichtbar bleiben und ohne Werbebudget Reichweite aufbauen. Wer visuelle Produkte, Dienstleistungen oder Inhalte anbietet und eine eigene Website hat, kann mit überschaubarem Aufwand dauerhaft Besucherinnen und Besucher gewinnen – ohne täglich posten zu müssen.",
    more: "Wichtig ist ein realistischer Rahmen: lieber wenige, gut gemachte Pins mit klarer Strategie als tägliches Posten ohne Plan. Genau dafür gibt es Einstiegsformate wie den Strategie Call oder das Audit.",
  },
  {
    question: "Pinterest Marketing selbst machen oder auslagern?",
    answer:
      "Beides funktioniert: Wer Zeit hat und die Grundlagen lernen möchte, kann Pinterest Marketing selbst übernehmen – etwa mit einem Workshop oder Strategie Call als Startpunkt. Wer den Kanal dauerhaft und professionell bespielen will, ohne eigene Kapazitäten zu binden, lagert die Arbeit an eine Pinterest Marketing Agentur wie molloy business aus.",
    more: "Ein Mittelweg ist das Content Paket: Du bekommst fertige, SEO-optimierte Pins geliefert und veröffentlichst selbst. So bleibt der Aufwand bei dir gering, ohne dass du das Design und die Texte übernehmen musst.",
  },
  {
    question: "Agentur oder freie Pinterest-Managerin — was ist besser?",
    answer:
      "Entscheidend ist nicht die Bezeichnung, sondern Erfahrung, Arbeitsweise und Erreichbarkeit. molloy business verbindet beides: die persönliche Zusammenarbeit mit einer festen Ansprechpartnerin – Juliette Oppel – und strukturierte Abläufe wie in einer Agentur, von Strategie über Design und Texte bis zur Auswertung aus einer Hand.",
    more: "Frage bei der Auswahl immer nach dem konkreten Ablauf: Wer erstellt die Pins, wer schreibt die Texte, wie oft gibt es Auswertungen? Klare Antworten darauf sagen mehr als jedes Etikett.",
  },
  {
    question: "Pinterest organisch oder Pinterest Ads?",
    answer:
      "Organisches Pinterest Marketing baut Sichtbarkeit auf, die über Monate bestehen bleibt – Pinterest Ads bringen schnelle, aber bezahlte Reichweite, die endet, sobald das Budget stoppt. Für nachhaltigen Website-Traffic ist der organische Weg meist die bessere Basis; Ads können ihn später gezielt ergänzen. molloy business ist auf den organischen Aufbau spezialisiert.",
    more: "Ads sind kein schlechtes Werkzeug, sondern ein anderes: Sie eignen sich für zeitlich begrenzte Aktionen und schnelle Tests. Ein solides organisches Fundament macht jede spätere Kampagne günstiger und wirksamer.",
  },
  {
    question: "Wie lange dauert es, bis Pinterest Ergebnisse bringt?",
    answer:
      "Pinterest ist ein Marathon, kein Sprint: Erste Impressionen zeigen sich oft nach wenigen Wochen, spürbarer Website-Traffic braucht in der Regel drei bis sechs Monate kontinuierlicher Arbeit. Dafür wirken gute Pins langfristig weiter und können auch Monate nach der Veröffentlichung noch Besucherinnen und Besucher auf deine Website bringen.",
    more: "Wie schnell es geht, hängt von Nische, Wettbewerb und Ausgangslage ab. Ein bestehender Account mit Grundstruktur startet meist schneller als ein kompletter Neuaufbau.",
  },
];

// Seiten-spezifisches Schema: Person, Service je Leistung (mit Offer),
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
      name: siteConfig.owner,
      jobTitle: "Inhaberin",
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
      offers: {
        "@type": "Offer",
        price: String(service.price),
        priceCurrency: "EUR",
        description: `${service.priceUnit} · ${service.priceNote}`,
      },
    })),
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.more ? `${item.answer} ${item.more}` : item.answer,
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
            <p className="font-body text-gold mb-3 text-sm tracking-[2px] uppercase">
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
              <strong className="text-heading">Juliette Oppel</strong>,
              Inhaberin und Gesicht von molloy business. Ich übernehme
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
              <Link href="#" className="btn btn-primary">
                strategie call vereinbaren
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:aspect-auto lg:h-auto lg:self-stretch">
            <ExportedImage
              src={heroImage}
              alt="Juliette Oppel, Inhaberin der Pinterest Marketing Agentur molloy business"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
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
            Touristische Unternehmen
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

          <h3 className="mt-10 text-[22px] leading-tight">Food-Marken</h3>
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
            Finanzdienstleister
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
            <p className="font-body text-gold text-sm tracking-[2px] uppercase">
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
                  <strong>{formatPrice(service.price)}</strong>{" "}
                  {service.priceUnit}
                </p>
                <span className="text-gold font-body mt-2 text-sm group-hover:underline">
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
          <strong className="text-heading">Juliette Oppel</strong> – Inhaberin,
          Pinterest-Marketing-Expertin und erklärter Strukturprofi. Sie
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
        <p className="font-body mt-6">
          <Link href="#" className="text-gold hover:underline">
            mehr über mich →
          </Link>
        </p>
      </section>

      {/* Trust signals / testimonials placeholder */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-12 text-center">
            <p className="font-body text-gold text-sm tracking-[2px] uppercase">
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

      {/* Kosten */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Was kostet eine Pinterest Marketing Agentur?
        </h2>
        <p className="font-body mt-6 text-lg">
          Eine Pinterest Marketing Agentur kostet bei molloy business zwischen{" "}
          {formatPrice(call.price)} für einen einzelnen Strategie Call und{" "}
          {formatPrice(aufbau.price)} für den kompletten Account Aufbau. Die
          laufende Betreuung kostet {formatPrice(management.price)} pro Monat.
          Was du zahlst, hängt vom Umfang ab – vom einmaligen Audit für{" "}
          {formatPrice(audit.price)} bis zum vollständigen Account Management.
        </p>

        <ul className="font-body mt-8 space-y-4 text-lg">
          {services.map((service) => (
            <li
              key={service.title}
              className="border-gray-light flex flex-col gap-1 border-b pb-4 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="text-heading font-semibold">
                {service.title}
              </span>
              <span className="text-right">
                <strong className="text-heading">
                  {formatPrice(service.price)}
                </strong>{" "}
                {service.priceUnit}
                <br />
                <span className="text-sm">{service.priceNote}</span>
              </span>
            </li>
          ))}
        </ul>

        <p className="font-body mt-8 text-lg">
          Wovon der Preis abhängt: vom Umfang der Betreuung und der Anzahl der
          Pins pro Monat, vom Design-Aufwand deiner Marke – und davon, ob ein
          Account komplett neu aufgebaut oder ein bestehender weiterbetreut
          wird. Nach dem Erstgespräch bekommst du ein klares Angebot ohne
          versteckte Posten.
        </p>
        <p className="font-body mt-6 text-sm">{priceVatNote}</p>
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
                <p className="font-body mt-3 text-lg">{item.answer}</p>
                {item.more && (
                  <p className="font-body mt-3 text-lg">{item.more}</p>
                )}
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
          <Link href="#" className="btn btn-primary">
            let&apos;s talk
          </Link>
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
