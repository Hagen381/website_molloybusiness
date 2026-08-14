import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { services, siteConfig } from "@/lib/site-config";

const workshop = services.find((s) => s.title === "Pinterest Workshop")!;

const path = "/pinterest-workshop/";

export const metadata: Metadata = {
  title: "Pinterest Workshop für Unternehmen & Teams",
  description:
    "Pinterest Workshop für Unternehmen und Teams: kompakte Pinterest Schulung in einer Stunde inklusive Q&A und Factsheet zum Download – praxisnah erklärt.",
  alternates: {
    canonical: path,
  },
};

const leistungen = [
  {
    title: "Einstündiger Online-Workshop",
    text: "kompaktes Wissen zu Pinterest Marketing, verständlich vermittelt.",
  },
  {
    title: "Q&A im Anschluss",
    text: "Raum für deine konkreten Fragen direkt im Anschluss an den Workshop.",
  },
  {
    title: "Factsheet zum Download",
    text: "die wichtigsten Punkte zusammengefasst zum Nachlesen nach dem Workshop.",
  },
  {
    title: "Format für Teams und Online-Events",
    text: "geeignet für interne Teamrunden ebenso wie für externe Online-Veranstaltungen.",
  },
];

const processSteps = [
  {
    title: "Terminabstimmung",
    text: "Termin und Format werden gemeinsam festgelegt – ob interne Teamrunde oder öffentliches Online-Event, spielt für den Ablauf keine Rolle.",
  },
  {
    title: "Der Workshop",
    text: "Im einstündigen Online-Workshop werden die Grundlagen von Pinterest Marketing verständlich vermittelt. Im Anschluss ist Zeit für ein Q&A, in dem alle offenen Fragen Platz haben.",
  },
  {
    title: "Nachbereitung",
    text: "Du bekommst das Factsheet zum Download mit den wichtigsten Punkten des Workshops – zum Nachschlagen, auch für Teammitglieder, die nicht live dabei waren.",
  },
];

// FAQPage-Schema wird wortgleich aus `answer` gebaut — Text nur hier ändern.
const faq = [
  {
    question: "Brauchen die Teilnehmenden Vorkenntnisse für den Workshop?",
    answer:
      "Nein, der Workshop ist bewusst als Einstieg konzipiert und setzt keine Pinterest-Erfahrung voraus. Auch gemischte Gruppen funktionieren gut: Die Grundlagen werden so vermittelt, dass Einsteiger folgen können, während das anschließende Q&A Raum für speziellere Fragen erfahrener Teilnehmender bietet. Ein eigener Pinterest-Account ist für die Teilnahme nicht nötig.",
  },
  {
    question:
      "Warum ein bezahlter Workshop, wenn es kostenlose Pinterest-Tutorials gibt?",
    answer:
      "Frei verfügbare Tutorials richten sich oft an private Nutzerinnen und Nutzer und lassen offen, was davon für Unternehmen relevant ist. Der Workshop verdichtet die Grundlagen auf eine Stunde, ordnet sie aus Unternehmenssicht ein und bietet mit dem Q&A etwas, das kein Video leisten kann: direkte Antworten auf die Fragen deines Teams.",
  },
  {
    question:
      "Lässt sich der Workshop mit den anderen Leistungen von molloy business kombinieren?",
    answer:
      "Ja, der Workshop ergänzt die übrigen Formate sinnvoll: Vor einem Account Aufbau schafft er im Team ein gemeinsames Verständnis dafür, was danach entsteht. Und begleitet molloy business deinen Account bereits laufend, hilft der Workshop deinem Team, die Strategie dahinter nachzuvollziehen und eigene Ideen gezielter beizusteuern.",
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
          name: workshop.title,
          item: `${siteConfig.url}${path}`,
        },
      ],
    },
    {
      "@type": "Service",
      name: workshop.title,
      description: workshop.description,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: ["DE", "AT", "CH"],
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

export default function PinterestWorkshop() {
  return (
    <>
      <Breadcrumb pageName={workshop.title} />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
          Pinterest Workshop
        </p>
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          Pinterest Workshop für Unternehmen und Teams
        </h1>
        <p className="font-body mt-6 text-lg">
          Der Pinterest Workshop bei molloy business ist ein einstündiger
          Online-Workshop, der die Grundlagen von Pinterest Marketing für
          Unternehmen und Teams verständlich vermittelt – als Format geeignet
          für interne Teams ebenso wie für Online-Events, inklusive Q&A im
          Anschluss und einem Factsheet zum Download für die wichtigsten
          Punkte.
        </p>
      </section>

      {/* Was du bekommst */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Was du bekommst
          </h2>
          <p className="font-body mt-6 text-lg">
            Der Pinterest Workshop von molloy business bringt dein Team in
            einer Stunde auf einen gemeinsamen Wissensstand:
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
            Am Ende steht nicht nur ein gemeinsames Verständnis für Pinterest
            Marketing, sondern auch ein Factsheet, auf das du und dein Team
            jederzeit zurückgreifen können.
          </p>
        </div>
      </section>

      {/* Für wen sich das eignet */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Für wen sich das eignet
        </h2>
        <p className="font-body mt-6 text-lg">
          Der Pinterest Workshop eignet sich für Unternehmen und Teams, die
          gemeinsam einen Einstieg in Pinterest Marketing bekommen möchten –
          etwa als Teil eines internen Teamtags oder eines Online-Events.
          Besonders gut passt das Format zu Teams, die ohnehin viel mit
          visuellen Inhalten arbeiten – im Tourismus ebenso wie bei
          Food-Marken oder in der Finanzbranche. Genauso profitieren KMU und
          Selbstständige, die sich einen kompakten Überblick verschaffen
          wollen, bevor sie selbst mit Pinterest starten.
        </p>
        <p className="font-body mt-4 text-lg">
          Der Workshop ersetzt keine individuelle Beratung zu deinem
          konkreten Account – dafür eignet sich eher ein persönliches
          Format. Wer nach dem Workshop lieber auf die eigene Situation
          eingehen möchte, findet mit dem{" "}
          <Link
            href="/pinterest-strategie-call/"
            className="text-gold-text hover:underline"
          >
            Pinterest Strategie Call
          </Link>{" "}
          den passenden nächsten Schritt.
        </p>
        <p className="font-body mt-4 text-lg">
          Alle weiteren Formate rund um Pinterest Marketing zeigt die
          Startseite von molloy business als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          im Überblick.
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

      {/* Umfang */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Dein Workshop im Überblick
        </h2>
        <p className="font-body mt-6 text-lg">
          Der Pinterest Workshop ist ein{" "}
          <strong className="text-heading">kompaktes Einmalformat</strong>:
          eine Stunde online, die die Grundlagen von Pinterest Marketing
          verständlich vermittelt – inklusive Q&A für die Fragen deines
          Teams und einem Factsheet zum Download für alle, die später
          nachlesen wollen.
        </p>
        <p className="font-body mt-4 text-lg">
          Ein konkretes, auf dein Unternehmen zugeschnittenes Angebot
          bekommst du im Erstgespräch.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Häufige Fragen zum Pinterest Workshop
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
          Lass uns deinen Pinterest Workshop planen
        </h2>
        <p className="font-body mt-6 text-lg">
          In einem unverbindlichen Strategie Call schauen wir gemeinsam, wie
          ein Workshop für dein Team oder Event aussehen kann.
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
