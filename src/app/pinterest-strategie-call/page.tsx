import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { priceVatNote, services, siteConfig } from "@/lib/site-config";
import { formatPrice } from "@/lib/format";

const call = services.find((s) => s.title === "Pinterest Strategie Call")!;

const path = "/pinterest-strategie-call/";

export const metadata: Metadata = {
  title: "Pinterest Strategie Call für Unternehmen",
  description: `Pinterest Strategie Call: individuelle Pinterest Beratung in 90 Minuten zu Ausgangslage, Boards und Pin-Themen – ${formatPrice(call.price)} einmalig, anrechenbar.`,
  alternates: {
    canonical: path,
  },
};

const leistungen = [
  {
    title: "90-minütiger Videocall",
    text: "persönliches Gespräch, in dem Zeit für alle deine Pinterest-Fragen ist.",
  },
  {
    title: "Analyse der Ausgangslage",
    text: "Thema, Zielgruppe, Website und Produkte werden gemeinsam eingeordnet.",
  },
  {
    title: "Konkrete Strategie-Impulse für den Start",
    text: "abgestimmt auf deine Situation, nicht nach Schema F.",
  },
  {
    title: "Ideen für erste Boards und Pin-Themen",
    text: "erste Anhaltspunkte für den Aufbau oder die Ausrichtung deines Accounts.",
  },
  {
    title: "Antworten ohne Fachchinesisch",
    text: "offene Pinterest-Fragen werden verständlich erklärt, nicht nur angerissen.",
  },
];

const processSteps = [
  {
    title: "Terminfindung & Vorbereitung",
    text: "Der Termin für den 90-minütigen Videocall wird vereinbart. Vorab schickst du kurze Infos zu Thema, Zielgruppe, Website und Produkten, damit im Call keine Zeit für Grundlagen verloren geht.",
  },
  {
    title: "Der Call",
    text: "Deine Ausgangslage wird analysiert, konkrete Strategie-Impulse für den Start werden besprochen, dazu erste Ideen für Boards und Pin-Themen. Alle offenen Pinterest-Fragen werden direkt beantwortet.",
  },
  {
    title: "Nächste Schritte",
    text: "Du gehst mit konkreten Impulsen für den Start aus dem Call. Entscheidest du dich anschließend für eine Zusammenarbeit mit molloy business, wird der Betrag des Calls vollständig angerechnet.",
  },
];

// FAQPage-Schema wird wortgleich aus `answer` gebaut — Text nur hier ändern.
const faq = [
  {
    question: "Wie bereite ich mich am besten auf den Strategie Call vor?",
    answer:
      "Viel Vorbereitung braucht es nicht – am wertvollsten ist, wenn du vorab deine dringendsten Fragen sammelst und dir überlegst, welches Ziel Pinterest für dein Unternehmen erfüllen soll. Je klarer diese Punkte sind, desto konkreter können die 90 Minuten auf deine Situation eingehen, statt bei allgemeinen Grundlagen zu bleiben.",
  },
  {
    question:
      "Sollte ich mit dem Strategie Call oder dem Pinterest Workshop starten?",
    answer:
      "Der Workshop vermittelt Grundlagenwissen in einer Stunde und richtet sich an Teams und Events, während der Strategie Call 90 Minuten lang ausschließlich auf deine konkrete Ausgangslage eingeht. Vereinfacht gesagt: Der Workshop beantwortet, wie Pinterest grundsätzlich funktioniert – der Call beantwortet, was das für dein Unternehmen bedeutet und womit du startest.",
  },
  {
    question:
      "Was passiert, wenn sich im Call zeigt, dass Pinterest nicht zu meinem Unternehmen passt?",
    answer:
      "Dann sprechen wir das offen aus – der Call ist eine ehrliche Einschätzung, kein Verkaufsgespräch. Du erfährst in dem Fall, warum Pinterest für deine Ausgangslage gerade nicht der richtige Kanal ist, und ersparst dir eine größere Fehlinvestition. Genau diese Klarheit vor einer Entscheidung ist der eigentliche Zweck der 90 Minuten.",
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
          name: call.title,
          item: `${siteConfig.url}${path}`,
        },
      ],
    },
    {
      "@type": "Service",
      name: call.title,
      description: call.description,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: ["DE", "AT", "CH"],
      offers: {
        "@type": "Offer",
        price: String(call.price),
        priceCurrency: "EUR",
        description: `${call.priceUnit} · ${call.priceNote}`,
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

export default function PinterestStrategieCall() {
  return (
    <>
      <Breadcrumb pageName={call.title} />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
          Pinterest Strategie Call
        </p>
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          Pinterest Strategie Call für Unternehmen
        </h1>
        <p className="font-body mt-6 text-lg">
          Der Pinterest Strategie Call bei molloy business ist ein
          90-minütiger Videocall, in dem deine Ausgangslage – Thema,
          Zielgruppe, Website und Produkte – analysiert wird und du konkrete
          Strategie-Impulse für den Start sowie erste Ideen für Boards und
          Pin-Themen bekommst. Offene Pinterest-Fragen werden dabei
          verständlich und ohne Fachchinesisch beantwortet.
        </p>
      </section>

      {/* Was du bekommst */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Was du bekommst
          </h2>
          <p className="font-body mt-6 text-lg">
            Der Pinterest Strategie Call von molloy business bringt Klarheit
            in deine Ausgangslage und gibt dir konkrete nächste Schritte an
            die Hand:
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
            Der Betrag des Calls wird bei einer anschließenden Zusammenarbeit
            vollständig angerechnet – der Call kostet dich also nur dann
            etwas zusätzlich, wenn du danach nicht weitermachst.
          </p>
        </div>
      </section>

      {/* Für wen sich das eignet */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Für wen sich das eignet
        </h2>
        <p className="font-body mt-6 text-lg">
          Der Pinterest Strategie Call eignet sich für Unternehmen, die noch
          ganz am Anfang stehen und wissen wollen, ob und wie Pinterest für
          sie funktioniert, genauso wie für Unternehmen mit bestehendem
          Account, die ihre Strategie überprüfen lassen möchten. Besonders
          gefragt ist der Call bei touristischen Unternehmen, Food-Marken und
          Finanzdienstleistern, weil hier eine klare Ausrichtung von Anfang
          an über die spätere Sichtbarkeit entscheidet. Ebenso passt er für
          KMU und Selbstständige, die vor einer größeren Investition erst
          einmal eine fundierte Einschätzung wollen.
        </p>
        <p className="font-body mt-4 text-lg">
          Ein bestehender Pinterest-Account ist für den Call keine
          Voraussetzung. Vorausgesetzt ist lediglich eine eigene Website oder
          ein Onlineshop, auf den spätere Pins verlinken können.
        </p>
        <p className="font-body mt-4 text-lg">
          Auf der Startseite von molloy business als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          sind alle Leistungen im Überblick zusammengestellt. Führt der Call
          zu einem Neuaufbau deines Accounts, ist der{" "}
          <Link
            href="/pinterest-account-aufbau/"
            className="text-gold-text hover:underline"
          >
            Pinterest Account Aufbau
          </Link>{" "}
          der passende nächste Schritt.
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
          Preis für den Pinterest Strategie Call
        </h2>
        <p className="font-body mt-6 text-lg">
          Der Pinterest Strategie Call kostet{" "}
          <strong className="text-heading">{formatPrice(call.price)}</strong>{" "}
          {call.priceUnit}. Konditionen: {call.priceNote}.
        </p>
        <p className="font-body mt-4 text-lg">
          Entscheidest du dich im Anschluss für eine Zusammenarbeit mit
          molloy business, wird der Betrag des Calls vollständig auf die
          gebuchte Leistung angerechnet.
        </p>
        <p className="font-body mt-6 text-sm">{priceVatNote}</p>
      </section>

      {/* FAQ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Häufige Fragen zum Pinterest Strategie Call
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
          Lass uns über deine Pinterest Strategie sprechen
        </h2>
        <p className="font-body mt-6 text-lg">
          In einem unverbindlichen Strategie Call schauen wir gemeinsam, wie
          Pinterest für dein Unternehmen aussehen kann.
        </p>
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
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
