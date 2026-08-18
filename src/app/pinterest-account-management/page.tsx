import type { Metadata } from "next";
import Link from "next/link";
import { services, siteConfig } from "@/lib/site-config";

const management = services.find(
  (s) => s.title === "Pinterest Account Management",
)!;

const path = "/pinterest-account-management/";

export const metadata: Metadata = {
  title: "Pinterest Account Management für Unternehmen",
  description:
    "Pinterest Account Management für Unternehmen: 90 SEO-optimierte Pins pro Monat, täglich eingeplant – mit Keyword-Recherche, Trendanalyse und Auswertung.",
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
    text: "Veröffentlichung nach festem Rhythmus über ein Planungstool (das Tool selbst ist nicht Teil der Leistung).",
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
    question:
      "Was passiert, wenn wir Pinterest schon einmal erfolglos versucht haben?",
    answer:
      "Ein früherer Anlauf ist kein Ausschlusskriterium, sondern ein Startvorteil: Die vorhandenen Daten zeigen, welche Themen und Pin-Formate bisher nicht gegriffen haben. Häufig liegt es an fehlenden Keywords oder unregelmäßiger Veröffentlichung – genau dort setzt die laufende Betreuung an. Ob das in deinem Fall realistisch ist, klärt das Erstgespräch ehrlich.",
  },
  {
    question:
      "Worin unterscheidet sich das Account Management vom Pinterest Content Paket?",
    answer:
      "Beim Content Paket bekommst du 30 upload-fertige Premium-Pins pro Monat und veröffentlichst selbst – beim Account Management übernimmt molloy business mit 90 Pins pro Monat auch Einplanung, Recherche und Auswertung komplett. Entscheidend ist also, ob du die Veröffentlichung behalten willst oder den Kanal vollständig abgeben möchtest.",
  },
  {
    question: "Wann ist das Pinterest Account Management die falsche Wahl?",
    answer:
      "Die falsche Wahl ist das Format, wenn du dir kurzfristige Kampagnen-Effekte erhoffst: Pinterest ist ein Suchkanal, dessen Reichweite sich über längere Zeiträume entwickelt und der von Kontinuität lebt. Wer zunächst nur einen einmaligen Impuls sucht, ist mit Strategie Call oder Audit besser beraten – das Erstgespräch hilft bei dieser Einordnung.",
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
          Besonders gefragt ist das Format in Branchen mit stark saisonalen
          Themen: Ein Hotel braucht im Winter andere Pins als im Sommer, eine
          Food-Marke lebt von Anlässen wie Grillsaison oder
          Weihnachtsbäckerei – hier macht kontinuierlicher, saisonal
          passender Content den größten Unterschied. Genauso
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

      {/* Umfang */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Dein Account Management im Überblick
        </h2>
        <p className="font-body mt-6 text-lg">
          Das Pinterest Account Management ist die{" "}
          <strong className="text-heading">
            komplette laufende Betreuung deines Accounts
          </strong>
          : 90 SEO-optimierte Pins pro Monat, täglich eingeplant, dazu
          Keyword- und Interessen-Recherche, Trendanalyse und die regelmäßige
          Auswertung der Pinterest Analytics. Du gibst den Kanal ab und musst
          selbst nichts umsetzen.
        </p>

        {/* Auszug aus einer schriftlich freigegebenen Kundenstimme —
            WORTGLEICH, Auslassungen nur mit […]. Vollständiges Zitat siehe
            Startseite. */}
        <figure className="bg-surface mx-auto mt-10 max-w-2xl rounded-2xl p-6 shadow-sm">
          <blockquote className="font-body text-[15px] leading-relaxed italic">
            &ldquo;Juliette hat uns pragmatisch und fundiert in allen Fragen rund um Pinterest unterstützt. […] berät uns zu Inhalten und setzt organische Beiträge gekonnt um.&rdquo;
          </blockquote>
          <figcaption className="font-body mt-4 text-sm">
            <span className="text-heading font-semibold">Fabian Christ</span>
            <br />
            Social Media Manager, PostFinance
          </figcaption>
        </figure>

        <p className="font-body mt-10 text-lg">
          Ein konkretes, auf dein Unternehmen zugeschnittenes Angebot
          bekommst du im Erstgespräch.
        </p>
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
