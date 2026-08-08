import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/site-config";

const path = "/pinterest-marketing-tourismus/";

const service = {
  name: "Pinterest Marketing Tourismus",
  description:
    "Organische Pinterest-Sichtbarkeit für Hotels, Ferienunterkünfte, Regionen und Reiseanbieter – mit SEO-optimierten Pins, die Reisende in der Planungsphase erreichen.",
  audienceType:
    "Hotels, Ferienunterkünfte, Regionen und Tourismusverbände, Reiseanbieter, Ausflugsziele",
};

export const metadata: Metadata = {
  title: "Pinterest Marketing für Tourismus & Hotels",
  description:
    "Pinterest Marketing Tourismus für Hotels und Reiseanbieter: organische, SEO-optimierte Pins, die Reisende in der Planungsphase erreichen.",
  alternates: {
    canonical: path,
  },
};

const contentIdeen = [
  {
    title: "Reiseziel-Boards",
    text: "ein eigenes Board je Ziel oder Region, das Unterkunft, Aktivitäten und Sehenswürdigkeiten bündelt.",
  },
  {
    title: "Packlisten-Pins",
    text: "„Was du für [Ziel/Jahreszeit] einpacken solltest“ – praktisch und leicht zu merken.",
  },
  {
    title: "Zimmer- und Ausstattungs-Pins",
    text: "einzelne Zimmerkategorien oder Ausstattungsmerkmale als eigene Pins, statt einem allgemeinen Hotelbild.",
  },
  {
    title: "Ausflugsziele in der Umgebung",
    text: "Pins zu Sehenswürdigkeiten und Aktivitäten rund um die Unterkunft.",
  },
  {
    title: "Saisonale Boards",
    text: "eigene Boards für Winterurlaub, Sommerferien, Ostern oder Weihnachtsreisen, die jedes Jahr neu relevant werden.",
  },
  {
    title: "Reiserouten-Pins",
    text: "„Ein Wochenende in [Region]“ oder komplette Roadtrip-Vorschläge mit mehreren Stationen.",
  },
  {
    title: "Zielgruppen-Guides",
    text: "eigene Pins für Familien, Paare oder Alleinreisende, die jeweils unterschiedliche Fragen stellen.",
  },
];

const processSteps = [
  {
    title: "Erstgespräch",
    text: "Wir klären deine Ausgangslage, deine Zielgruppen – etwa Familien, Paare oder Geschäftsreisende – und ob ein neuer Account, laufende Betreuung oder fertiger Content am besten passt.",
  },
  {
    title: "Strategie & Struktur",
    text: "Auf Basis von Zielgruppen und Saisonthemen entstehen Boards, ein Keyword-Set und ein Redaktionsplan, der zu deinem Buchungskalender passt.",
  },
  {
    title: "Umsetzung & Auswertung",
    text: "Pins werden gestaltet, veröffentlicht und regelmäßig ausgewertet, damit Themen und Saisonzeiten laufend nachgeschärft werden.",
  },
];

// FAQPage-Schema wird wortgleich aus `answer` gebaut — Text nur hier ändern.
const faq = [
  {
    question:
      "Lohnt sich Pinterest auch für kleine Ferienunterkünfte oder einzelne Hotels?",
    answer:
      "Ja – Pinterest eignet sich auch für einzelne Hotels und kleine Ferienunterkünfte, weil die Plattform nicht nach Unternehmensgröße, sondern nach Themen und Zielen sucht. Wichtig ist eine eigene Website, auf die Pins verlinken können, sowie ein realistischer Umfang: Wenige, gezielt gestaltete Pins zu den eigenen Stärken bringen mehr als viele beliebige Bilder.",
  },
  {
    question: "Wie geht molloy business mit saisonalen Reisethemen um?",
    answer:
      "molloy business plant Boards und Pins entlang des touristischen Jahresverlaufs: Saisonale Themen wie Winterurlaub, Sommerferien oder Feiertagsreisen werden im Redaktionsplan vorab berücksichtigt, damit passende Pins rechtzeitig vor der jeweiligen Reisesaison online sind. So sind Inhalte sichtbar, wenn die Zielgruppe konkret plant, nicht erst danach.",
  },
  {
    question:
      "Reicht ein einmaliger Account Aufbau oder braucht es laufende Betreuung?",
    answer:
      "Das hängt vom Ziel ab: Ein einmaliger Account Aufbau schafft eine solide Struktur mit ersten Pins und eignet sich vor allem für den Einstieg. Weil Reisethemen saisonal wechseln und Pinterest von kontinuierlicher Veröffentlichung lebt, empfiehlt sich für dauerhafte Sichtbarkeit meist eine laufende Betreuung im Anschluss an den Aufbau.",
  },
  {
    question:
      "Braucht touristisches Pinterest Marketing viele Fotos oder reicht vorhandenes Material?",
    answer:
      "Vorhandenes Fotomaterial reicht in der Regel als Grundlage, denn Pins werden aus bestehenden Bildern gestaltet und mit Text, Struktur und SEO-optimierten Beschreibungen ergänzt. Wichtiger als die Menge an Fotos ist, dass Motive zu konkreten Suchanfragen passen – etwa Zimmeransichten, Ausblicke oder Aktivitäten rund um die Unterkunft.",
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

export default function PinterestMarketingTourismus() {
  return (
    <>
      <Breadcrumb pageName={service.name} />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
          Pinterest Marketing Tourismus
        </p>
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          Pinterest Marketing für touristische Unternehmen und Hotels
        </h1>
        <p className="font-body mt-6 text-lg">
          Pinterest Marketing für touristische Unternehmen bedeutet, Hotels,
          Ferienunterkünfte, Regionen und Reiseanbieter mit organischen,
          SEO-optimierten Pins in der Pinterest-Suche sichtbar zu machen –
          dort, wo Reisende ihr nächstes Ziel oft Monate im Voraus
          recherchieren. molloy business entwickelt Strategie, Boards und
          Pin-Content, die Interessierte direkt auf Buchungs- und
          Angebotsseiten führen, ganz ohne laufendes Werbebudget.
        </p>
      </section>

      {/* Warum funktioniert Pinterest */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Warum funktioniert Pinterest für die Tourismusbranche?
          </h2>
          <p className="font-body mt-6 text-lg">
            Pinterest funktioniert für die Tourismusbranche, weil Menschen
            dort ihre nächste Reise recherchieren, lange bevor sie buchen –
            oft Wochen bis Monate im Voraus. Als Suchmaschine für Ideen
            bleibt ein einmal veröffentlichter Pin zu einem Reiseziel
            dauerhaft auffindbar und erreicht Reisende genau in der Phase, in
            der sie noch offen für Inspiration sind.
          </p>
          <p className="font-body mt-4 text-lg">
            Anders als auf klassischen Social-Media-Kanälen suchen Menschen
            auf Pinterest aktiv nach Inspiration für ihre nächste Reise –
            nach Zielen, Unterkünften, Aktivitäten und ganzen Reiserouten.
            Diese Suche beginnt häufig, lange bevor eine Buchung feststeht,
            in einer Phase, in der Reisende noch offen für neue Ideen sind.
            Wer in dieser frühen Planungsphase mit passenden Pins sichtbar
            ist, prägt die Entscheidung mit, bevor der Wettbewerb um die
            eigentliche Buchung überhaupt beginnt.
          </p>
          <p className="font-body mt-4 text-lg">
            Pinterest zählt weltweit rund 619 Millionen monatlich aktive
            Nutzerinnen und Nutzer (Stand: Quartalsbericht Q4 2025), ein
            erheblicher Teil davon nutzt die Plattform gezielt zur
            Reiseplanung. Für Hotels, Regionen und Reiseanbieter bedeutet
            das: Ein Pin zu einem Reiseziel oder einer Unterkunft bleibt über
            Saisons hinweg auffindbar und arbeitet weiter, auch lange nachdem
            er veröffentlicht wurde – ohne dass dafür fortlaufend neues
            Budget nötig ist.
          </p>
        </div>
      </section>

      {/* Wonach gesucht wird */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Wonach in der Tourismusbranche auf Pinterest gesucht wird
        </h2>
        <p className="font-body mt-6 text-lg">
          Auf Pinterest suchen Menschen sehr konkret nach ihrer nächsten
          Reise: nach Reisezielen für bestimmte Anlässe, nach Unterkünften
          mit bestimmten Merkmalen – etwa Ausblick, Wellnessbereich oder
          Familienfreundlichkeit – und nach fertigen Reiserouten, an denen
          sie sich orientieren können. Auch Packlisten, Budget-Tipps und
          saisonale Themen wie Winterurlaub, Sommerferien oder Kurztrips über
          Feiertage gehören zu den wiederkehrenden Suchanfragen.
        </p>
        <p className="font-body mt-4 text-lg">
          Dazu kommen regionale Suchanfragen: Ausflugsziele in der Umgebung,
          Sehenswürdigkeiten, Aktivitäten für Familien oder Paare und lokale
          Geheimtipps abseits der bekannten Attraktionen. Wer als Hotel,
          Region oder Reiseanbieter genau diese Fragen mit eigenen Pins
          beantwortet, taucht in dem Moment auf, in dem die Entscheidung für
          ein Ziel noch offen ist.
        </p>
      </section>

      {/* Welche Inhalte funktionieren */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Welche Inhalte funktionieren
          </h2>
          <p className="font-body mt-6 text-lg">
            Für touristische Unternehmen funktionieren auf Pinterest vor
            allem Inhalte, die eine konkrete Reiseentscheidung unterstützen –
            nicht allgemeine Imagebilder, sondern Pins mit klarem Nutzen für
            die Planung. Dazu zählen zum Beispiel:
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
          Was molloy business für touristische Unternehmen übernimmt
        </h2>
        <p className="font-body mt-6 text-lg">
          Für touristische Unternehmen deckt molloy business die gesamte
          Bandbreite ab, vom ersten Fundament bis zur laufenden Betreuung.
          Fehlt noch ein strukturierter Account, entsteht er im{" "}
          <Link
            href="/pinterest-account-aufbau/"
            className="text-gold-text hover:underline"
          >
            Pinterest Account Aufbau
          </Link>{" "}
          mit passenden Boards für Reiseziele, Zielgruppen und Saisonthemen.
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
          sich diese Formate zu einer vollständigen{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          zusammensetzen, zeigt die Startseite von molloy business im
          Überblick.
        </p>
        <p className="font-body mt-4 text-lg">
          Sollen die Grundlagen von Pinterest Marketing zusätzlich im eigenen
          Team verankert werden – etwa bei Rezeptions- oder Marketingteams
          einer Hotelkette –, vermittelt der{" "}
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
          Häufige Fragen zu Pinterest Marketing im Tourismus
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
          Die gleichen Prinzipien – lange Planungsphasen und organische
          Sichtbarkeit statt bezahlter Reichweite – gelten auch für andere
          Branchen: mehr dazu auf den Seiten{" "}
          <Link
            href="/pinterest-marketing-food/"
            className="text-gold-text hover:underline"
          >
            Pinterest Marketing für Food-Marken
          </Link>{" "}
          und{" "}
          <Link
            href="/pinterest-marketing-finanzdienstleister/"
            className="text-gold-text hover:underline"
          >
            Pinterest Marketing für Finanzdienstleister
          </Link>
          .
        </p>
      </section>

      {/* CTA */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Lass uns über dein Pinterest Marketing für Tourismus sprechen
          </h2>
          <p className="font-body mt-6 text-lg">
            In einem unverbindlichen Strategie Call schauen wir gemeinsam,
            wie Pinterest für dein Hotel, deine Ferienunterkunft oder dein
            touristisches Unternehmen arbeiten kann.
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
