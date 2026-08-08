import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { priceVatNote, services, siteConfig } from "@/lib/site-config";
import { formatPrice } from "@/lib/format";

const contentPaket = services.find(
  (s) => s.title === "Pinterest Content Paket",
)!;

const path = "/pinterest-content-paket/";

export const metadata: Metadata = {
  title: "Pinterest Content Paket – Pins erstellen lassen",
  description:
    "Pins erstellen lassen bei molloy business: 30 SEO-optimierte Premium-Pins im Pinterest Content Paket pro Monat, markenangepasst – für 444 € pro Monat.",
  alternates: {
    canonical: path,
  },
};

const leistungen = [
  {
    title: "30 individuell gestaltete Premium-Pins pro Monat",
    text: "monatlich neue, auf dein Unternehmen abgestimmte Pin-Designs.",
  },
  {
    title: "SEO-optimierte Headlines und Beschreibungen",
    text: "Texte, die gezielt für die Pinterest-Suche geschrieben sind.",
  },
  {
    title: "Anpassung an die Marke",
    text: "Farben, Logo und Schriften werden in jedes Pin-Design übernommen.",
  },
  {
    title: "Upload-fertige Dateien mit Textbausteinen zum Kopieren",
    text: "direkt einsatzbereiter Content, ohne dass du selbst nacharbeiten musst.",
  },
  {
    title: "Erstgespräch zur visuellen Abstimmung",
    text: "Klärung von Look, Marke und Vorlieben vor der ersten Lieferung.",
  },
];

const processSteps = [
  {
    title: "Erstgespräch",
    text: "Farben, Logo, Schriften und visuelle Vorlieben deiner Marke werden abgestimmt, damit die Pins von Anfang an zu deinem Auftritt passen.",
  },
  {
    title: "Monatliche Content-Erstellung",
    text: "30 Premium-Pins samt SEO-optimierten Headlines und Beschreibungen werden gestaltet, orientiert an deiner Marke und deinen Themen.",
  },
  {
    title: "Lieferung",
    text: "Du bekommst upload-fertige Dateien inklusive Textbausteinen zum Kopieren – die Veröffentlichung auf deinem Account übernimmst du selbst.",
  },
];

// FAQPage-Schema wird wortgleich aus `answer` gebaut — Text nur hier ändern.
const faq = [
  {
    question:
      "Warum nicht einfach Pins mit fertigen Vorlagen aus Design-Tools erstellen?",
    answer:
      "Vorlagen liefern ein Layout, aber weder Suchlogik noch Markenbezug: Welche Headline in der Pinterest-Suche funktioniert und welche Begriffe deine Zielgruppe eingibt, steht in keiner Vorlage. Beim Content Paket werden Design und Texte für jeden Pin individuell entwickelt – abgestimmt auf deine Marke und darauf, wonach tatsächlich gesucht wird.",
  },
  {
    question:
      "Wie viel Zeit muss ich einplanen, wenn ich die Pins selbst veröffentliche?",
    answer:
      "Dein Aufwand beschränkt sich auf das Einplanen und Hochladen: Die Dateien kommen upload-fertig, Headlines und Beschreibungen liegen als Textbausteine zum Kopieren bei, sodass keine eigene Design- oder Textarbeit anfällt. Plane vor allem einen festen Rhythmus ein – regelmäßiges Veröffentlichen wirkt auf Pinterest stärker als gelegentliche große Schübe.",
  },
  {
    question: "Was passiert mit den Pins, wenn ich das Content Paket beende?",
    answer:
      "Bereits gelieferte Dateien und veröffentlichte Pins bleiben dir erhalten – sie liegen auf deinem Account und arbeiten dort weiter, denn Pinterest-Content bleibt langfristig auffindbar. Es entsteht also kein Bruch, sondern es kommen lediglich keine neuen Pins mehr dazu. Details zum Beenden der Zusammenarbeit klärst du unkompliziert im Gespräch mit molloy business.",
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
          name: contentPaket.title,
          item: `${siteConfig.url}${path}`,
        },
      ],
    },
    {
      "@type": "Service",
      name: contentPaket.title,
      description: contentPaket.description,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: ["DE", "AT", "CH"],
      offers: {
        "@type": "Offer",
        price: String(contentPaket.price),
        priceCurrency: "EUR",
        description: `${contentPaket.priceUnit} · ${contentPaket.priceNote}`,
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

export default function PinterestContentPaket() {
  return (
    <>
      <Breadcrumb pageName={contentPaket.title} />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
          Pinterest Content Paket
        </p>
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          Pinterest Content Paket für Unternehmen
        </h1>
        <p className="font-body mt-6 text-lg">
          Das Pinterest Content Paket bei molloy business liefert dir
          monatlich 30 individuell gestaltete Premium-Pins samt
          SEO-optimierten Headlines und Beschreibungen, angepasst an deine
          Marke. Durch Variationen der Designs lassen sich daraus bis zu 90
          Pins pro Monat veröffentlichen – du veröffentlichst selbst, molloy
          business liefert den fertigen Content.
        </p>
      </section>

      {/* Was du bekommst */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Was du bekommst
          </h2>
          <p className="font-body mt-6 text-lg">
            Das Pinterest Content Paket von molloy business liefert dir
            fertigen, auf deine Marke abgestimmten Content – die
            Veröffentlichung bleibt bei dir:
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
            Durch Variationen der 30 monatlichen Designs – etwa in Farben
            oder Textausschnitten – lassen sich daraus bis zu 90 Pins pro
            Monat veröffentlichen. Du veröffentlichst selbst, molloy business
            liefert dir den passenden Content.
          </p>
        </div>
      </section>

      {/* Für wen sich das eignet */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Für wen sich das eignet
        </h2>
        <p className="font-body mt-6 text-lg">
          Das Pinterest Content Paket eignet sich für Unternehmen, die
          Pinterest selbst bespielen möchten, aber keine Kapazität für
          Design und SEO-optimierte Texte haben. Besonders gefragt ist es
          überall dort, wo laufend visueller Content gebraucht wird – vom
          Hotel über die Food-Marke bis zum Finanzdienstleister –, ohne dass
          eigene Ressourcen für die Gestaltung aufgebaut werden sollen. Ebenso
          passend ist es für KMU und Selbstständige, die die Veröffentlichung
          selbst steuern, aber Design und Texte gerne abgeben möchten.
        </p>
        <p className="font-body mt-4 text-lg">
          Ein eigenes Planungstool für die Veröffentlichung ist nicht im
          Preis enthalten – die Auswahl und der Einsatz bleiben bei dir.
        </p>
        <p className="font-body mt-4 text-lg">
          Als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          bietet molloy business auf der Startseite einen Überblick über
          alle Leistungen. Soll auch die Veröffentlichung abgegeben werden,
          ist das{" "}
          <Link
            href="/pinterest-account-management/"
            className="text-gold-text hover:underline"
          >
            Pinterest Account Management
          </Link>{" "}
          die passendere Wahl.
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
          Preis für das Pinterest Content Paket
        </h2>
        <p className="font-body mt-6 text-lg">
          Das Pinterest Content Paket kostet{" "}
          <strong className="text-heading">
            {formatPrice(contentPaket.price)}
          </strong>{" "}
          {contentPaket.priceUnit}. Konditionen: {contentPaket.priceNote}.
        </p>
        <p className="font-body mt-4 text-lg">
          Ein Planungstool für die Veröffentlichung ist im Preis nicht
          enthalten – die Wahl des Anbieters und die Einplanung übernimmst du
          selbst.
        </p>
        <p className="font-body mt-6 text-sm">{priceVatNote}</p>
      </section>

      {/* FAQ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Häufige Fragen zum Pinterest Content Paket
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
          Lass uns über dein Pinterest Content Paket sprechen
        </h2>
        <p className="font-body mt-6 text-lg">
          In einem unverbindlichen Strategie Call schauen wir gemeinsam, ob
          das Content Paket zu deinem Redaktionsplan passt.
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
