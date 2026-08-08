import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { priceVatNote, services, siteConfig } from "@/lib/site-config";
import { formatPrice } from "@/lib/format";

const aufbau = services.find((s) => s.title === "Pinterest Account Aufbau")!;

const path = "/pinterest-account-aufbau/";

export const metadata: Metadata = {
  title: "Pinterest Account Aufbau für Unternehmen",
  description: `Pinterest Account Aufbau für Unternehmen: Profil, 8 Boards und 50 Pins – strukturiert aufgebaut ab ${formatPrice(aufbau.price)} einmalig.`,
  alternates: {
    canonical: path,
  },
};

const leistungen = [
  {
    title: "Wettbewerbsanalyse",
    text: "Einblick, wie vergleichbare Accounts auf Pinterest aufgestellt sind.",
  },
  {
    title: "Keyword- und Interessen-Recherche inklusive Keywordliste",
    text: "die inhaltliche Grundlage für Boards und Pins.",
  },
  {
    title: "Individuelles Pinterest-Konzept",
    text: "Struktur und Ausrichtung, abgestimmt auf dein Unternehmen.",
  },
  {
    title: "Profilbild-Cover und Profilbeschreibung",
    text: "professionell gestaltet und für die Pinterest-Suche optimiert.",
  },
  {
    title: "8 strategische Boards",
    text: "angelegt mit Covern und SEO-optimierten Beschreibungen.",
  },
  {
    title: "50 gestaltete Pins",
    text: "inklusive Headlines und Beschreibungen für die Pinterest-Suche.",
  },
  {
    title: "2 Korrekturschleifen",
    text: "Raum für Anpassungen, bevor der Account final steht.",
  },
];

const processSteps = [
  {
    title: "Analyse",
    text: "Wettbewerbsanalyse sowie Keyword- und Interessen-Recherche bilden die Grundlage. Daraus entsteht die Keywordliste für Boards und Pins.",
  },
  {
    title: "Konzept",
    text: "Auf Basis der Analyse entsteht ein individuelles Pinterest-Konzept mit Struktur für Profil, die 8 Boards und die ersten 50 Pins.",
  },
  {
    title: "Umsetzung",
    text: "Profilbild-Cover, Profilbeschreibung, die 8 Boards mit Covern und SEO-Beschreibungen sowie die 50 Pins inklusive Headlines und Beschreibungen werden gestaltet. Jeder Pin bekommt einen eigenen, aussagekräftigen Titel, damit die Boards auch einzeln in der Pinterest-Suche gefunden werden.",
  },
  {
    title: "Korrekturschleifen",
    text: "In zwei Korrekturschleifen wird das Ergebnis gemeinsam abgestimmt, bis Profil, Boards und Pins final sind. Erst nach deiner Freigabe gilt der Account Aufbau als abgeschlossen.",
  },
];

// FAQPage-Schema wird wortgleich aus `answer` gebaut — Text nur hier ändern.
const faq = [
  {
    question: "Was ist im Pinterest Account Aufbau enthalten?",
    answer:
      "Der Pinterest Account Aufbau umfasst Wettbewerbsanalyse, Keyword- und Interessen-Recherche inklusive Keywordliste, ein individuelles Pinterest-Konzept, professionelles Profilbild-Cover und optimierte Profilbeschreibung, 8 strategische Boards mit Covern und SEO-Beschreibungen sowie 50 gestaltete Pins inklusive Headlines und Beschreibungen – inklusive 2 Korrekturschleifen für Anpassungen am Design und an den Texten.",
  },
  {
    question: "Brauche ich schon einen bestehenden Pinterest-Account für den Aufbau?",
    answer:
      "Nein, der Pinterest Account Aufbau eignet sich sowohl für einen komplett neuen Pinterest-Account als auch für die grundlegende Neustrukturierung eines bestehenden Accounts. In beiden Fällen entstehen Profil, Boards und Pins auf Basis von Wettbewerbsanalyse und Keyword-Recherche neu, abgestimmt auf deine Zielgruppe und Branche. Wichtig ist in beiden Fällen eine eigene Website, auf die die Pins später verlinken.",
  },
  {
    question: "Was passiert nach dem Pinterest Account Aufbau?",
    answer:
      "Nach dem Pinterest Account Aufbau steht ein vollständig eingerichteter Account mit Profil, 8 Boards und 50 Pins – du kannst ihn ab diesem Zeitpunkt selbst weiterführen. Wer die laufende Betreuung nicht selbst übernehmen möchte, kann direkt im Anschluss in das Pinterest Account Management wechseln. Alle Zugänge und Inhalte gehören danach vollständig dir.",
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
          name: aufbau.title,
          item: `${siteConfig.url}${path}`,
        },
      ],
    },
    {
      "@type": "Service",
      name: aufbau.title,
      description: aufbau.description,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: ["DE", "AT", "CH"],
      offers: {
        "@type": "Offer",
        price: String(aufbau.price),
        priceCurrency: "EUR",
        description: `${aufbau.priceUnit} · ${aufbau.priceNote}`,
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

export default function PinterestAccountAufbau() {
  return (
    <>
      <Breadcrumb pageName={aufbau.title} />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
          Pinterest Account Aufbau
        </p>
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          Pinterest Account Aufbau für Unternehmen
        </h1>
        <p className="font-body mt-6 text-lg">
          Beim Pinterest Account Aufbau entsteht bei molloy business ein
          komplett neuer, strukturierter Pinterest-Account: von
          Wettbewerbsanalyse und Keyword-Recherche über Profil, acht
          strategische Boards bis zu 50 gestalteten Pins inklusive Headlines
          und Beschreibungen – inklusive zwei Korrekturschleifen, damit das
          Ergebnis zu deiner Marke passt.
        </p>
      </section>

      {/* Was du bekommst */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Was du bekommst
          </h2>
          <p className="font-body mt-6 text-lg">
            Der Pinterest Account Aufbau von molloy business liefert alles,
            was für einen strukturierten Start auf Pinterest nötig ist – von
            der ersten Analyse bis zum fertigen, gefüllten Account:
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
            Am Ende dieser Leistungen steht ein vollständig eingerichteter
            Account: Profil, acht thematische Boards und fünfzig Pins, die
            sofort live gehen können. Die zwei Korrekturschleifen sorgen
            dafür, dass Design und Texte zu deiner Marke passen, bevor der
            Account final steht.
          </p>
        </div>
      </section>

      {/* Für wen sich das eignet */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Für wen sich das eignet
        </h2>
        <p className="font-body mt-6 text-lg">
          Der Pinterest Account Aufbau eignet sich für Unternehmen, die noch
          keinen Pinterest-Account haben oder einen bestehenden komplett neu
          strukturieren wollen. Besonders gut passt das Format zu
          touristischen Unternehmen, Food-Marken und Finanzdienstleistern,
          für die eine klare Board- und Themenstruktur von Anfang an
          entscheidend ist. Ebenso geeignet ist der Aufbau für KMU und
          Selbstständige, die mit einem durchdachten Fundament in ihr
          Pinterest Marketing starten möchten. Vorausgesetzt ist eine eigene
          Website oder ein Onlineshop, auf den die neuen Pins verlinken
          können.
        </p>
        <p className="font-body mt-4 text-lg">
          Wie viele Boards und Pins am Ende sinnvoll sind, hängt vom
          jeweiligen Unternehmen ab – die 8 Boards und 50 Pins aus diesem
          Angebot bilden den Startumfang. Ob danach ein Wechsel ins laufende
          Account Management sinnvoll ist, klärt sich am besten im
          Erstgespräch.
        </p>
        <p className="font-body mt-4 text-lg">
          Wie ein Account danach laufend weiterbetreut wird, zeigt der
          Überblick zur{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          auf der Startseite. Nach dem Aufbau übernimmt bei Bedarf das{" "}
          <Link
            href="/pinterest-account-management/"
            className="text-gold-text hover:underline"
          >
            Pinterest Account Management
          </Link>{" "}
          die laufende Betreuung deines neuen Accounts.
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
          Preis für Pinterest Account Aufbau
        </h2>
        <p className="font-body mt-6 text-lg">
          Der Pinterest Account Aufbau kostet{" "}
          <strong className="text-heading">
            {formatPrice(aufbau.price)}
          </strong>{" "}
          {aufbau.priceUnit}. Konditionen: {aufbau.priceNote}.
        </p>
        <p className="font-body mt-4 text-lg">
          Die erste Hälfte wird zu Beginn des Projekts fällig, die zweite
          Hälfte nach dem Upload aller 50 Pins in deinen Account. So ist die
          Zahlung an den tatsächlichen Fortschritt des Aufbaus gekoppelt.
        </p>
        <p className="font-body mt-6 text-sm">{priceVatNote}</p>
      </section>

      {/* FAQ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Häufige Fragen zum Pinterest Account Aufbau
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
          Lass uns über deinen Pinterest Account Aufbau sprechen
        </h2>
        <p className="font-body mt-6 text-lg">
          In einem unverbindlichen Strategie Call schauen wir gemeinsam, wie
          ein strukturierter Pinterest-Account für dein Unternehmen aussehen
          kann, und klären, ob der Aufbau oder ein anderes Format besser
          passt.
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
