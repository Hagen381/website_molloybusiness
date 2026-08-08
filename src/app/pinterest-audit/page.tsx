import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { priceVatNote, services, siteConfig } from "@/lib/site-config";
import { formatPrice } from "@/lib/format";

const audit = services.find((s) => s.title === "Pinterest Audit")!;

const path = "/pinterest-audit/";

export const metadata: Metadata = {
  title: "Pinterest Audit & Account Analyse",
  description:
    "Pinterest Audit für Unternehmen: Analyse von Profil, Boards, Pin-Performance und Wettbewerb mit konkreten Handlungsempfehlungen – für 333 € einmalig.",
  alternates: {
    canonical: path,
  },
};

const leistungen = [
  {
    title: "Erstgespräch zur Ausgangslage",
    text: "Klärung, wo dein Account aktuell steht und worauf das Audit den Fokus legen soll.",
  },
  {
    title: "Analyse von Profil und Boards",
    text: "Struktur, Beschreibungen und Aufbau werden im Detail geprüft.",
  },
  {
    title: "Auswertung der Pin-Performance",
    text: "welche Pins funktionieren, und woran das liegt.",
  },
  {
    title: "Durchsicht der Pinterest Analytics",
    text: "Kennzahlen werden eingeordnet und im Zusammenhang bewertet.",
  },
  {
    title: "Wettbewerbsanalyse",
    text: "Einblick, wie vergleichbare Accounts in deiner Branche aufgestellt sind.",
  },
  {
    title: "Abschlussgespräch mit Handlungsempfehlungen",
    text: "konkrete nächste Schritte für deinen Account, klar priorisiert.",
  },
];

const processSteps = [
  {
    title: "Erstgespräch",
    text: "Deine Ausgangslage und der Fokus des Audits werden gemeinsam geklärt, damit die Analyse gezielt auf deine Fragen eingeht.",
  },
  {
    title: "Analyse",
    text: "Profil, Boards, Pin-Performance, Pinterest Analytics und die Wettbewerbssituation werden geprüft und ausgewertet.",
  },
  {
    title: "Abschlussgespräch",
    text: "Die Ergebnisse werden vorgestellt und in konkrete Handlungsempfehlungen für deinen Account übersetzt.",
  },
];

// FAQPage-Schema wird wortgleich aus `answer` gebaut — Text nur hier ändern.
const faq = [
  {
    question: "Reicht nicht ein Strategie Call statt eines kompletten Audits?",
    answer:
      "Der Strategie Call ist ein Beratungsgespräch, das auch ohne bestehenden Account funktioniert und die grobe Richtung klärt. Das Audit geht deutlich tiefer: Es wertet deinen vorhandenen Account samt Zahlen und Wettbewerbsumfeld im Detail aus. Kurz gesagt klärt der Call, wohin die Reise gehen soll – das Audit zeigt, warum dein Account bisher hinter den Erwartungen bleibt.",
  },
  {
    question:
      "Was passiert mit den Ergebnissen, wenn ich danach nicht mit molloy business weiterarbeite?",
    answer:
      "Die Handlungsempfehlungen gehören dir und sind bewusst so formuliert, dass du sie eigenständig oder mit deinem Team umsetzen kannst – eine Folgebeauftragung ist keine Bedingung. Das Audit ist damit auch als einmalige, unabhängige Standortbestimmung nutzbar, bevor du entscheidest, ob und mit wem du dein Pinterest Marketing weiterentwickelst.",
  },
  {
    question:
      "Welche Zugänge und Unterlagen muss ich für das Audit bereitstellen?",
    answer:
      "Für die Analyse braucht molloy business vor allem Einblick in deine Pinterest Analytics, denn öffentlich sichtbare Pins erzählen nur die halbe Geschichte. Wie dieser Zugriff eingerichtet wird, klären wir unkompliziert im Erstgespräch. Aufwendige Unterlagen musst du nicht vorbereiten – deine eigene Einschätzung der bisherigen Ziele ist hilfreicher als jedes Dokument.",
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
          name: audit.title,
          item: `${siteConfig.url}${path}`,
        },
      ],
    },
    {
      "@type": "Service",
      name: audit.title,
      description: audit.description,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: ["DE", "AT", "CH"],
      offers: {
        "@type": "Offer",
        price: String(audit.price),
        priceCurrency: "EUR",
        description: `${audit.priceUnit} · ${audit.priceNote}`,
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

export default function PinterestAudit() {
  return (
    <>
      <Breadcrumb pageName={audit.title} />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
          Pinterest Audit
        </p>
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          Pinterest Audit und Account Analyse für Unternehmen
        </h1>
        <p className="font-body mt-6 text-lg">
          Das Pinterest Audit bei molloy business ist eine detaillierte
          Analyse deines bestehenden Accounts: Nach einem Erstgespräch zur
          Ausgangslage werden Profil, Boards, Pin-Performance, Pinterest
          Analytics und die Wettbewerbssituation geprüft. Im
          Abschlussgespräch bekommst du konkrete, umsetzbare
          Handlungsempfehlungen für deinen weiteren Weg auf Pinterest.
        </p>
      </section>

      {/* Was du bekommst */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Was du bekommst
          </h2>
          <p className="font-body mt-6 text-lg">
            Das Pinterest Audit von molloy business nimmt deinen bestehenden
            Account vollständig unter die Lupe:
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
            Am Ende steht kein anonymer Report, sondern ein persönliches
            Abschlussgespräch, in dem die Ergebnisse eingeordnet und in
            konkrete, priorisierte nächste Schritte übersetzt werden.
          </p>
        </div>
      </section>

      {/* Für wen sich das eignet */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Für wen sich das eignet
        </h2>
        <p className="font-body mt-6 text-lg">
          Das Pinterest Audit passt für Unternehmen mit bestehendem Account,
          bei denen die Reichweite gering ist, die passenden Keywords fehlen
          oder die Strategie insgesamt unklar geworden ist. Besonders
          hilfreich ist es in Branchen, deren Themen sich schnell
          weiterentwickeln – etwa im Tourismus, bei Food-Marken oder in der
          Finanzkommunikation –, weil sich Fehlausrichtungen im Account dort
          besonders bemerkbar machen. Ebenso geeignet ist es für KMU und Selbstständige, die
          ihren bestehenden Account einordnen lassen wollen, bevor sie
          weiter investieren.
        </p>
        <p className="font-body mt-4 text-lg">
          Voraussetzung für das Audit ist ein bestehender Pinterest-Account
          mit einer gewissen Grundlage an Boards und Pins, damit sich
          Performance und Wettbewerb überhaupt sinnvoll auswerten lassen.
        </p>
        <p className="font-body mt-4 text-lg">
          Alle Leistungen als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          im Überblick finden sich auf der Startseite von molloy business.
          Sollen die Ergebnisse des Audits laufend umgesetzt werden,
          übernimmt im Anschluss das{" "}
          <Link
            href="/pinterest-account-management/"
            className="text-gold-text hover:underline"
          >
            Pinterest Account Management
          </Link>{" "}
          die weitere Betreuung.
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
          Preis für das Pinterest Audit
        </h2>
        <p className="font-body mt-6 text-lg">
          Das Pinterest Audit kostet{" "}
          <strong className="text-heading">{formatPrice(audit.price)}</strong>{" "}
          {audit.priceUnit}. Konditionen: {audit.priceNote}.
        </p>
        <p className="font-body mt-4 text-lg">
          &bdquo;Vorkasse&rdquo; bedeutet, dass die Rechnung zu Beginn des
          Audits gestellt wird, bevor mit der Analyse gestartet wird.
        </p>
        <p className="font-body mt-6 text-sm">{priceVatNote}</p>
      </section>

      {/* FAQ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Häufige Fragen zum Pinterest Audit
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
          Lass uns über dein Pinterest Audit sprechen
        </h2>
        <p className="font-body mt-6 text-lg">
          In einem unverbindlichen Strategie Call schauen wir gemeinsam, ob
          ein Audit für deinen Account der richtige nächste Schritt ist.
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
