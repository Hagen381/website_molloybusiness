import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/site-config";

const path = "/pinterest-marketing-finanzdienstleister/";

const service = {
  name: "Pinterest Marketing Finanzdienstleister",
  description:
    "Organische Pinterest-Sichtbarkeit für Versicherungen, Banken und Finanzberatung – mit verständlichen, SEO-optimierten Pins zu Vorsorge und Geldanlage.",
  audienceType:
    "Versicherungen, Banken, Finanzberatung, Vorsorge- und Vermögensthemen, Finanz-Bildungsangebote",
};

export const metadata: Metadata = {
  title: "Pinterest Marketing für Finanzdienstleister",
  description:
    "Pinterest Marketing Finanzdienstleister: organische, SEO-optimierte Pins zu Vorsorge, Geldanlage und Versicherung – von molloy business.",
  alternates: {
    canonical: path,
  },
};

const contentIdeen = [
  {
    title: "Erklär-Pins",
    text: "einzelne Finanzbegriffe oder Konzepte – etwa Altersvorsorge, ETF oder Riester – einfach und visuell erklärt.",
  },
  {
    title: "Checklisten-Pins",
    text: "Schritt-für-Schritt-Übersichten, etwa „Was vor dem ersten Immobilienkauf zu klären ist“.",
  },
  {
    title: "Themen-Boards nach Lebensphase",
    text: "eigene Boards für Berufseinstieg, Familiengründung, Immobilienkauf oder Ruhestand.",
  },
  {
    title: "Vergleichs-Pins",
    text: "neutral aufbereitete Gegenüberstellungen verschiedener Absicherungs- oder Anlageformen.",
  },
  {
    title: "Budgetplanungs-Pins",
    text: "Vorlagen und Denkanstöße rund um Haushaltsplanung und Sparen.",
  },
  {
    title: "Mythen-Pins",
    text: "verbreitete Irrtümer zu Vorsorge oder Geldanlage richtiggestellt.",
  },
];

const processSteps = [
  {
    title: "Erstgespräch",
    text: "Wir klären deine Ausgangslage, deine Zielgruppen und Themenschwerpunkte sowie ob ein neuer Account, laufende Betreuung oder fertiger Content am besten passt.",
  },
  {
    title: "Strategie & Struktur",
    text: "Auf Basis von Lebensphasen und Grundlagenthemen entstehen Boards, ein Keyword-Set und ein Redaktionsplan mit klarer, verständlicher Sprache.",
  },
  {
    title: "Umsetzung & Auswertung",
    text: "Pins werden gestaltet, veröffentlicht und regelmäßig ausgewertet, damit Themen und Keywords laufend nachgeschärft werden.",
  },
];

// FAQPage-Schema wird wortgleich aus `answer` gebaut — Text nur hier ändern.
const faq = [
  {
    question: "Sind Finanzthemen auf Pinterest nicht zu trocken für Pins?",
    answer:
      "Nein – was im Feed anderer Netzwerke trocken wirkt, ist auf Pinterest gefragt, weil Menschen dort gezielt nach Hilfe für Entscheidungen suchen statt nach Unterhaltung. Ein Pin muss nicht unterhalten, sondern eine konkrete Frage klar beantworten. Gerade nüchterne Themen profitieren davon, dass Nützlichkeit auf Pinterest mehr zählt als Show-Effekte.",
  },
  {
    question:
      "Gibt es bei Finanzinhalten auf Pinterest besondere Vorgaben zu beachten?",
    answer:
      "Ja, Finanzkommunikation unterliegt in der Regel branchenspezifischen rechtlichen Vorgaben, etwa zu Werbeaussagen oder Risikohinweisen. molloy business gestaltet Pins und Texte, die inhaltliche Freigabe und rechtliche Prüfung bleibt jedoch beim jeweiligen Finanzdienstleister, da diese Vorgaben je nach Produkt und Anbieter unterschiedlich ausfallen.",
  },
  {
    question:
      "Passt Pinterest eher zu Banken oder auch zu unabhängiger Finanzberatung?",
    answer:
      "Pinterest passt zu beiden, weil Suchanfragen zu Vorsorge, Geldanlage und Absicherung branchenübergreifend gestellt werden – unabhängig davon, ob dahinter eine Bank, eine Versicherung oder eine unabhängige Beratung steht. Entscheidend ist, wie verständlich und hilfreich die eigenen Inhalte die jeweilige Suchanfrage beantworten.",
  },
  {
    question:
      "Wie schnell lässt sich ein Finanzthema in einen funktionierenden Pin übersetzen?",
    answer:
      "Der zeitliche Aufwand hängt vom Thema ab: Ein einzelnes, klar abgegrenztes Konzept wie ein Begriff oder eine Checkliste lässt sich zügig in einen Pin übersetzen, während umfassendere Themen wie ein kompletter Vorsorge-Guide mehr Abstimmung brauchen. Im Erstgespräch wird eingeordnet, welche Themen sich für den Start am besten eignen.",
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
          name: service.name,
          item: `${siteConfig.url}${path}`,
        },
      ],
    },
    {
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: ["DE", "AT", "CH"],
      audience: {
        "@type": "Audience",
        audienceType: service.audienceType,
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

export default function PinterestMarketingFinanzdienstleister() {
  return (
    <>
      <Breadcrumb pageName={service.name} />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
          Pinterest Marketing Finanzdienstleister
        </p>
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          Pinterest Marketing für Finanzdienstleister
        </h1>
        <p className="font-body mt-6 text-lg">
          Pinterest Marketing für Finanzdienstleister bedeutet, Versicherungen,
          Banken und Finanzberatung mit organischen, SEO-optimierten Pins dort
          sichtbar zu machen, wo Menschen sich zu Vorsorge, Geldanlage und
          Absicherung informieren – oft lange vor einer Entscheidung. molloy
          business entwickelt verständliche Pin- und Board-Konzepte, die
          komplexe Finanzthemen zugänglich machen, ganz ohne laufendes
          Werbebudget.
        </p>
      </section>

      {/* Warum funktioniert Pinterest */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Warum funktioniert Pinterest für Finanzdienstleister?
          </h2>
          <p className="font-body mt-6 text-lg">
            Pinterest funktioniert für Finanzdienstleister, weil
            Finanzentscheidungen selten spontan fallen: Menschen informieren
            sich zu Themen wie Altersvorsorge oder Geldanlage über Wochen bis
            Monate, bevor sie handeln. Als Suchmaschine für Ideen begleitet
            Pinterest genau diese lange Recherchephase und macht verständliche
            Inhalte auffindbar, während gleichzeitig deutlich weniger
            Anbieter um diese Suchanfragen konkurrieren als in anderen
            Branchen.
          </p>
          <p className="font-body mt-4 text-lg">
            Anders als auf Kanälen, die auf schnelle Reaktionen ausgelegt
            sind, passt die Suchlogik von Pinterest gut zu Finanzthemen:
            Nutzerinnen und Nutzer sammeln dort über Zeit Ideen zu Sparen,
            Budgetplanung oder Vorsorge, bevor sie sich für einen Anbieter
            oder ein Produkt entscheiden. Wer in dieser Sammelphase mit
            klaren, hilfreichen Pins präsent ist, wird Teil der Recherche,
            statt erst am Ende als Werbung aufzutauchen.
          </p>
          <p className="font-body mt-4 text-lg">
            Pinterest zählt weltweit rund 619 Millionen monatlich aktive
            Nutzerinnen und Nutzer (Stand: Quartalsbericht Q4 2025). Im
            Vergleich zu vielen anderen Branchen ist das Angebot an
            Finanzinhalten auf Pinterest bislang überschaubar – ein Freiraum
            für Finanzdienstleister, die komplexe Themen in klare,
            verständliche Pins übersetzen und sich so als Anlaufstelle
            positionieren, statt gegen viele Wettbewerber um dieselben
            Suchanfragen anzutreten.
          </p>
        </div>
      </section>

      {/* Wonach gesucht wird */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Wonach in der Finanzbranche auf Pinterest gesucht wird
        </h2>
        <p className="font-body mt-6 text-lg">
          Auf Pinterest suchen Menschen zu Finanzthemen vor allem nach
          verständlichen Einstiegen: Grundlagen zur Altersvorsorge,
          Unterschiede zwischen Anlageformen, Tipps zur Haushaltsplanung oder
          Checklisten für den Berufseinstieg. Auch Lebensereignisse wie
          Familiengründung, Immobilienkauf oder Berufsstart lösen gezielte
          Suchen nach passenden Absicherungs- und Vorsorgethemen aus.
        </p>
        <p className="font-body mt-4 text-lg">
          Dazu kommen Suchanfragen nach konkreten Vergleichen und
          Entscheidungshilfen – etwa welche Versicherung für welche
          Lebenssituation sinnvoll ist oder wie eine erste Geldanlage
          aufgebaut werden kann. Wer diese Fragen mit sachlichen,
          verständlichen Pins ohne Produktwerbung beantwortet, wird in einer
          Phase sichtbar, in der Vertrauen und Verständlichkeit wichtiger
          sind als ein konkretes Angebot.
        </p>
        <p className="font-body mt-4 text-lg">
          Auch wiederkehrende Fragen zu bestimmten Lebenssituationen –
          Berufseinstieg, Elternzeit, Selbstständigkeit oder Ruhestand –
          werden gezielt gesucht. Wer diese Situationen mit eigenen Pins
          begleitet, wird über einen längeren Zeitraum hinweg als
          verlässliche Informationsquelle wahrgenommen.
        </p>
      </section>

      {/* Welche Inhalte funktionieren */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Welche Inhalte funktionieren
          </h2>
          <p className="font-body mt-6 text-lg">
            Für Finanzdienstleister funktionieren auf Pinterest vor allem
            Inhalte, die komplexe Themen in einfache, greifbare Einheiten
            übersetzen – nicht Produktwerbung, sondern verständliche
            Aufklärung. Dazu zählen zum Beispiel:
          </p>
          <ul className="font-body mt-4 list-disc space-y-2 pl-6 text-lg">
            {contentIdeen.map((item) => (
              <li key={item.title}>
                <strong className="text-heading">{item.title}:</strong>{" "}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Was molloy business übernimmt */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Was molloy business für Finanzdienstleister übernimmt
        </h2>
        <p className="font-body mt-6 text-lg">
          Für Finanzdienstleister deckt molloy business die gesamte
          Bandbreite ab, vom ersten Fundament bis zur laufenden Betreuung.
          Fehlt noch ein strukturierter Account, entsteht er im{" "}
          <Link
            href="/pinterest-account-aufbau/"
            className="text-gold-text hover:underline"
          >
            Pinterest Account Aufbau
          </Link>{" "}
          mit Boards für Lebensphasen, Grundlagenthemen und Erklär-Content.
          Steht der Account bereits, übernimmt das{" "}
          <Link
            href="/pinterest-account-management/"
            className="text-gold-text hover:underline"
          >
            Pinterest Account Management
          </Link>{" "}
          die laufende Veröffentlichung inklusive Keyword-Recherche und
          Trendanalyse.
        </p>
        <p className="font-body mt-4 text-lg">
          Wer lieber selbst veröffentlicht, aber fertigen Content braucht,
          findet im{" "}
          <Link
            href="/pinterest-content-paket/"
            className="text-gold-text hover:underline"
          >
            Pinterest Content Paket
          </Link>{" "}
          monatlich SEO-optimierte Pins zum eigenen Redaktionsplan. Für
          bestehende Accounts mit Optimierungsbedarf liefert das{" "}
          <Link href="/pinterest-audit/" className="text-gold-text hover:underline">
            Pinterest Audit
          </Link>{" "}
          eine Analyse mit konkreten Handlungsempfehlungen, und ein{" "}
          <Link
            href="/pinterest-strategie-call/"
            className="text-gold-text hover:underline"
          >
            Pinterest Strategie Call
          </Link>{" "}
          klärt vorab, welches Format zur eigenen Ausgangslage passt. Wie
          diese Formate zusammenspielen, zeigt die Startseite von molloy
          business als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          im Überblick.
        </p>
        <p className="font-body mt-4 text-lg">
          Sollen Marketing- oder Kommunikationsteams die Grundlagen von
          Pinterest Marketing intern selbst weitertragen, vermittelt der{" "}
          <Link
            href="/pinterest-workshop/"
            className="text-gold-text hover:underline"
          >
            Pinterest Workshop
          </Link>{" "}
          das nötige Wissen kompakt in einer Stunde.
        </p>
      </section>

      {/* So läuft die Zusammenarbeit ab */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Häufige Fragen zu Pinterest Marketing für Finanzdienstleister
        </h2>
        <div className="mt-8 space-y-10">
          {faq.map((item) => (
            <div key={item.question}>
              <h3 className="text-[22px] leading-tight">{item.question}</h3>
              <p className="font-body mt-3 text-lg">{item.answer}</p>
            </div>
          ))}
        </div>
        <p className="font-body mt-10 text-lg">
          Die gleichen Prinzipien – lange Recherchephasen und organische statt
          bezahlte Sichtbarkeit – gelten auch für andere Branchen: mehr dazu
          auf den Seiten{" "}
          <Link
            href="/pinterest-marketing-tourismus/"
            className="text-gold-text hover:underline"
          >
            Pinterest Marketing für touristische Unternehmen und Hotels
          </Link>{" "}
          und{" "}
          <Link
            href="/pinterest-marketing-food/"
            className="text-gold-text hover:underline"
          >
            Pinterest Marketing für Food-Marken
          </Link>
          .
        </p>
      </section>

      {/* CTA */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Lass uns über dein Pinterest Marketing für Finanzdienstleister
            sprechen
          </h2>
          <p className="font-body mt-6 text-lg">
            In einem unverbindlichen Strategie Call schauen wir gemeinsam, wie
            Pinterest für deine Finanzthemen arbeiten kann.
          </p>
          <div className="mt-8">
            <Link href="#" className="btn btn-primary">
              strategie call vereinbaren
            </Link>
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
