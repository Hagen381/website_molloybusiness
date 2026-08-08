import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { priceVatNote, services, siteConfig } from "@/lib/site-config";
import { formatPrice } from "@/lib/format";

const management = services.find(
  (s) => s.title === "Pinterest Account Management",
)!;

const path = "/pinterest-account-management/";

export const metadata: Metadata = {
  title: "Pinterest Account Management für Unternehmen",
  description: `Pinterest Account Management für Unternehmen: ${formatPrice(management.price)} pro Monat für 90 SEO-optimierte Pins, Recherche und Auswertung.`,
  alternates: {
    canonical: path,
  },
};

const leistungen = [
  {
    title: "90 Pins pro Monat",
    text: "3 Pins täglich, gestaltet mit SEO-optimierten Headlines und Beschreibungen für die Pinterest-Suche.",
  },
  {
    title: "Tägliche Einplanung",
    text: "Veröffentlichung nach festem Rhythmus über ein Planungstool (das Tool selbst ist nicht im Preis enthalten).",
  },
  {
    title: "Keyword- und Interessen-Recherche",
    text: "laufende Recherche, welche Suchbegriffe und Interessen für deine Branche gerade relevant sind.",
  },
  {
    title: "Trendanalyse und Content-Empfehlungen",
    text: "aktuelle Trends werden beobachtet und in konkrete Pin-Ideen für deinen Account übersetzt.",
  },
  {
    title: "Auswertung der Pinterest Analytics",
    text: "regelmäßige Kontrolle, welche Pins funktionieren, als Grundlage für die weitere Planung.",
  },
];

const processSteps = [
  {
    title: "Erstgespräch & Zugänge",
    text: "Wir klären deine Ausgangslage und du gibst molloy business Zugriff auf deinen bestehenden Pinterest-Account und das gewünschte Planungstool. So ist von Anfang an klar, wer worauf zugreift. Außerdem legen wir gemeinsam fest, welche Produkte oder Leistungen im Fokus der Pins stehen sollen.",
  },
  {
    title: "Recherche & Redaktionsplan",
    text: "Auf Basis von Keyword- und Interessen-Recherche sowie aktuellen Trends entsteht ein monatlicher Redaktionsplan für die 90 Pins. Du weißt damit vorab, welche Themen im jeweiligen Monat im Fokus stehen.",
  },
  {
    title: "Umsetzung",
    text: "Die Pins werden gestaltet, Headlines und Beschreibungen für die Pinterest-Suche geschrieben und täglich über das Planungstool eingeplant. Drei Pins pro Tag sorgen für einen gleichmäßigen Rhythmus.",
  },
  {
    title: "Auswertung",
    text: "Die Pinterest Analytics werden regelmäßig ausgewertet, damit Themen und Keywords laufend nachgeschärft werden können. So wird der Account von Monat zu Monat treffsicherer.",
  },
];

// FAQPage-Schema wird wortgleich aus `answer` gebaut — Text nur hier ändern.
const faq = [
  {
    question: "Was ist im Pinterest Account Management enthalten?",
    answer:
      "Das Pinterest Account Management umfasst 90 Pins pro Monat mit SEO-optimierten Headlines und Beschreibungen, die tägliche Einplanung über ein Planungstool, laufende Keyword- und Interessen-Recherche, Trendanalyse mit Content-Empfehlungen sowie die regelmäßige Auswertung der Pinterest Analytics. Du gibst den Kanal komplett ab und bekommst jeden Monat fertigen, veröffentlichten Content.",
  },
  {
    question: "Brauche ich für das Account Management bereits einen bestehenden Pinterest-Account?",
    answer:
      "Ja, das Account Management setzt einen bestehenden Pinterest-Account voraus, den molloy business übernimmt und weiterbetreut. Fehlt noch ein strukturierter Account, ist der Pinterest Account Aufbau der passende erste Schritt – im Anschluss lässt sich die laufende Betreuung nahtlos daran anschließen.",
  },
  {
    question: "Ist das Planungstool für die tägliche Einplanung im Preis enthalten?",
    answer:
      "Nein, das Planungstool für die tägliche Einplanung ist im monatlichen Preis nicht enthalten. molloy business übernimmt die Einplanung selbst, die Kosten für ein geeignetes Planungstool trägst du zusätzlich als eigene Ausgabe. So bleibt die Wahl des Anbieters bei dir, molloy business berät dich bei Bedarf zur Auswahl.",
  },
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
          name: management.title,
          item: `${siteConfig.url}${path}`,
        },
      ],
    },
    {
      "@type": "Service",
      name: management.title,
      description: management.description,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: ["DE", "AT", "CH"],
      offers: {
        "@type": "Offer",
        price: String(management.price),
        priceCurrency: "EUR",
        description: `${management.priceUnit} · ${management.priceNote}`,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function PinterestAccountManagement() {
  return (
    <>
      <Breadcrumb pageName={management.title} />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
          Pinterest Account Management
        </p>
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          Pinterest Account Management für Unternehmen
        </h1>
        <p className="font-body mt-6 text-lg">
          Pinterest Account Management bei molloy business bedeutet, dass du
          deinen Pinterest-Kanal komplett abgibst: Jeden Monat entstehen 90
          SEO-optimierte Pins, werden täglich eingeplant und laufend anhand
          von Keyword-Recherche, Trends und Analytics weiterentwickelt – du
          bekommst dafür regelmäßig eine Auswertung, ohne selbst etwas
          umsetzen zu müssen.
        </p>
      </section>

      {/* Was du bekommst */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Was du bekommst
          </h2>
          <p className="font-body mt-6 text-lg">
            Das Pinterest Account Management von molloy business deckt die
            laufende Betreuung deines Accounts vollständig ab:
          </p>
          <ul className="font-body mt-4 list-disc space-y-2 pl-6 text-lg">
            {leistungen.map((item) => (
              <li key={item.title}>
                <strong className="text-heading">{item.title}:</strong>{" "}
                {item.text}
              </li>
            ))}
          </ul>
          <p className="font-body mt-6 text-lg">
            Diese fünf Bausteine greifen ineinander: Die Recherche liefert die
            Themen, die Trendanalyse liefert die Aktualität, und die
            Auswertung zeigt, ob die Pins tatsächlich funktionieren. Du musst
            dich um nichts weiter kümmern, als molloy business Zugriff auf
            deinen Account und dein Planungstool zu geben.
          </p>
        </div>
      </section>

      {/* Für wen sich das eignet */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Für wen sich das eignet
        </h2>
        <p className="font-body mt-6 text-lg">
          Pinterest Account Management eignet sich für Unternehmen, die
          bereits einen Pinterest-Account haben – oder gerade einen aufbauen
          lassen – und die laufende Betreuung komplett abgeben möchten.
          Besonders gefragt ist das Format bei touristischen Unternehmen,
          Food-Marken und Finanzdienstleistern, weil hier kontinuierlicher,
          saisonal passender Content den größten Unterschied macht. Genauso
          profitieren KMU und Selbstständige mit einer eigenen Website, die
          Pinterest als Sichtbarkeitskanal nutzen wollen, aber keine Kapazität
          für die tägliche Umsetzung haben. Vorausgesetzt ist außerdem eine
          eigene Website, auf die die Pins verlinken, damit aus Sichtbarkeit
          auch Website-Traffic wird.
        </p>
        <p className="font-body mt-4 text-lg">
          Wie viele Pins und wie viel Betreuung tatsächlich passen, hängt von
          der Ausgangslage deines Accounts ab. Ein kurzes Erstgespräch zeigt,
          ob das monatliche Format oder eher ein einmaliger Aufbau der
          richtige Startpunkt ist.
        </p>
        <p className="font-body mt-4 text-lg">
          Wie sich das Account Management in die übrigen Leistungen als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          einfügt, zeigt die Startseite von molloy business. Wer noch keinen
          strukturierten Account hat, findet mit dem{" "}
          <Link
            href="/pinterest-account-aufbau/"
            className="text-gold-text hover:underline"
          >
            Pinterest Account Aufbau
          </Link>{" "}
          den passenden ersten Schritt, bevor die laufende Betreuung startet.
        </p>
      </section>

      {/* So läuft es ab */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            So läuft es ab
          </h2>
          <ol className="font-body mt-8 list-decimal space-y-6 pl-6 text-lg">
            {processSteps.map((step) => (
              <li key={step.title}>
                <strong className="text-heading">{step.title}:</strong>{" "}
                {step.text}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Preis */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Preis für Pinterest Account Management
        </h2>
        <p className="font-body mt-6 text-lg">
          Das Pinterest Account Management kostet{" "}
          <strong className="text-heading">
            {formatPrice(management.price)}
          </strong>{" "}
          {management.priceUnit}. Konditionen: {management.priceNote}.
        </p>
        <p className="font-body mt-4 text-lg">
          &bdquo;Vorkasse&rdquo; bedeutet, dass die monatliche Rechnung
          jeweils zu Monatsbeginn gestellt wird. &bdquo;Monatlich
          kündbar&rdquo; heißt, dass du dich nicht langfristig bindest,
          sondern die Zusammenarbeit von Monat zu Monat fortsetzt oder
          beendest.
        </p>
        <p className="font-body mt-6 text-sm">{priceVatNote}</p>
      </section>

      {/* FAQ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Häufige Fragen zum Pinterest Account Management
          </h2>
          <div className="mt-8 space-y-10">
            {faq.map((item) => (
              <div key={item.question}>
                <h3 className="text-[22px] leading-tight">{item.question}</h3>
                <p className="font-body mt-3 text-lg">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Lass uns über dein Pinterest Account Management sprechen
        </h2>
        <p className="font-body mt-6 text-lg">
          In einem unverbindlichen Strategie Call schauen wir gemeinsam, ob
          und wie molloy business deinen Pinterest-Account laufend betreuen
          kann.
        </p>
        <div className="mt-8">
          <Link href="#" className="btn btn-primary">
            strategie call vereinbaren
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
