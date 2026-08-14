import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/site-config";

const path = "/pinterest-marketing-food/";

const service = {
  name: "Pinterest Marketing Food",
  description:
    "Organische Pinterest-Sichtbarkeit für Lebensmittelhersteller, Getränkemarken und Manufakturen – mit SEO-optimierten Rezept- und Produkt-Pins.",
  audienceType:
    "Lebensmittelhersteller, Getränkemarken, Manufakturen, Food-Onlineshops, Gastronomie mit eigenem Produkt",
};

export const metadata: Metadata = {
  title: "Pinterest Marketing für Food-Marken",
  description:
    "Pinterest Marketing Food für Lebensmittelmarken: organische, SEO-optimierte Rezept- und Produkt-Pins, die dauerhaft in der Pinterest-Suche gefunden werden.",
  alternates: {
    canonical: path,
  },
};

const contentIdeen = [
  {
    title: "Rezept-Pins mit Produktintegration",
    text: "Schritt-für-Schritt-Rezepte, in denen das eigene Produkt eine Zutat ist.",
  },
  {
    title: "Saisonale Boards",
    text: "eigene Boards für Grillsaison, Weihnachtsbäckerei, Ostern oder Sommerdrinks, die jedes Jahr neu relevant werden.",
  },
  {
    title: "Rezeptsammlungen nach Ernährungsform",
    text: "Boards für vegetarische, vegane oder glutenfreie Gerichte mit dem eigenen Produkt.",
  },
  {
    title: "Anwendungs-Pins",
    text: "Ideen, wie sich ein Produkt über das offensichtliche Rezept hinaus verwenden lässt.",
  },
  {
    title: "Verpackungs- und Produktdetails",
    text: "Pins, die Etikett, Inhaltsstoffe oder Herstellung anschaulich zeigen.",
  },
  {
    title: "Anlass-Boards",
    text: "Rezeptideen für Gäste, Feiertage oder besondere Ereignisse, sortiert nach Anlass statt nach Zutat.",
  },
];

const processSteps = [
  {
    title: "Erstgespräch",
    text: "Wir klären deine Ausgangslage, dein Produktsortiment und ob ein neuer Account, laufende Betreuung oder fertiger Content am besten passt.",
  },
  {
    title: "Strategie & Struktur",
    text: "Auf Basis von Rezeptideen, Ernährungsformen und saisonalen Anlässen entstehen Boards, ein Keyword-Set und ein Redaktionsplan.",
  },
  {
    title: "Umsetzung & Auswertung",
    text: "Pins werden gestaltet, veröffentlicht und regelmäßig ausgewertet, damit Rezepte und Themen laufend nachgeschärft werden.",
  },
];

// FAQPage-Schema wird wortgleich aus `answer` gebaut — Text nur hier ändern.
const faq = [
  {
    question:
      "Muss ich als Food-Marke eigene Rezeptfotos haben, um auf Pinterest zu starten?",
    answer:
      "Eigenes Bild- oder Rezeptmaterial ist hilfreich, aber kein zwingender Startpunkt: Pins lassen sich auch auf Basis vorhandener Produktfotos gestalten, die mit Rezeptideen und Anwendungstipps ergänzt werden. Wichtiger als perfekte Foodfotografie ist, dass der Pin eine konkrete Suchanfrage beantwortet und auf eine passende Seite verlinkt.",
  },
  {
    question: "Wie wird aus einem Rezept-Pin am Ende ein Produktkauf?",
    answer:
      "Der Weg führt über deine Website: Ein Rezept-Pin verlinkt auf die passende Rezept- oder Shopseite, auf der dein Produkt als Zutat eine natürliche Rolle spielt. Der Kauf entsteht nicht durch Werbedruck, sondern weil das Produkt Teil einer Idee ist, die jemand ohnehin nachkochen möchte. Deshalb ist die Verlinkung auf eine konkrete, passende Seite wichtiger als reine Reichweite.",
  },
  {
    question:
      "Wir verkaufen über den Handel – funktioniert Pinterest auch ohne eigenen Onlineshop?",
    answer:
      "Auch ohne eigenen Onlineshop funktioniert Pinterest, solange eine eigene Website mit Rezepten oder Produktinformationen als Linkziel existiert. Das Ziel verschiebt sich dann vom direkten Verkauf zur Markenbekanntheit: Wer dein Produkt aus Rezept-Pins kennt, greift im Handel eher danach. Eine Händlersuche oder Bezugsquellen-Seite macht diesen Weg zusätzlich konkret.",
  },
  {
    question: "Ersetzt Pinterest andere Social-Media-Kanäle für Food-Marken?",
    answer:
      "Nein, Pinterest ersetzt andere Kanäle nicht, sondern ergänzt sie: Während klassische Social-Media-Kanäle für Community und aktuelle Kommunikation genutzt werden, sorgt Pinterest als Suchmaschine für dauerhaft auffindbaren Content. Viele Food-Marken kombinieren beides – Pinterest für die langfristige Sichtbarkeit von Rezepten, andere Kanäle für den direkten Austausch.",
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

export default function PinterestMarketingFood() {
  return (
    <>
      <Breadcrumb pageName={service.name} />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
          Pinterest Marketing Food
        </p>
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          Pinterest Marketing für Food-Marken
        </h1>
        <p className="font-body mt-6 text-lg">
          Pinterest Marketing für Food-Marken bedeutet, Lebensmittelhersteller,
          Getränkemarken und Manufakturen mit organischen, SEO-optimierten
          Pins dort sichtbar zu machen, wo Menschen aktiv nach Rezepten und
          Produktideen suchen. molloy business entwickelt Rezept- und
          Produkt-Pins, die Boards mit klarer Struktur füllen und
          Interessierte direkt auf Shop- oder Rezeptseiten führen, ganz ohne
          laufendes Werbebudget.
        </p>
      </section>

      {/* Warum funktioniert Pinterest */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Warum funktioniert Pinterest für Food-Marken?
          </h2>
          <p className="font-body mt-6 text-lg">
            Pinterest funktioniert für Food-Marken, weil Rezepte und
            Kochideen zu den meistgesuchten Themen der Plattform gehören und
            Menschen dort gezielt nach Inspiration für die nächste Mahlzeit
            suchen. Anders als ein Social-Media-Post verschwindet ein gut
            gestalteter Rezept-Pin nicht nach Stunden, sondern bleibt in der
            Suche auffindbar, oft über mehrere Jahreszeiten hinweg.
          </p>
          <p className="font-body mt-4 text-lg">
            Nutzerinnen und Nutzer kommen auf Pinterest nicht zufällig
            vorbei, sondern suchen aktiv: nach einem Rezept fürs Abendessen,
            einer Zutat für ein bestimmtes Gericht oder einer Idee für den
            nächsten Anlass. Wer als Food-Marke das eigene Produkt in einen
            hilfreichen Rezept- oder Anwendungs-Pin einbettet, wird genau in
            diesem Moment gefunden – nicht als Werbung, sondern als Antwort
            auf eine konkrete Suche.
          </p>
          <p className="font-body mt-4 text-lg">
            Pinterest zählt weltweit rund 619 Millionen monatlich aktive
            Nutzerinnen und Nutzer (Stand: Quartalsbericht Q4 2025), Rezepte
            und Food-Themen gehören dort zu den am dauerhaftesten gesuchten
            Inhalten. Saisonale Anlässe wie Grillsaison, Weihnachtsbäckerei
            oder Osterbrunch kehren jedes Jahr wieder und geben bestehenden
            Pins regelmäßig neue Sichtbarkeit, ohne dass dafür neuer Content
            nötig wäre.
          </p>
        </div>
      </section>

      {/* Wonach gesucht wird */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Wonach in der Food-Branche auf Pinterest gesucht wird
        </h2>
        <p className="font-body mt-6 text-lg">
          Auf Pinterest suchen Menschen sehr konkret nach Rezepten für
          bestimmte Anlässe – schnelle Feierabendküche, Meal Prep, Gerichte
          für Gäste oder Desserts für besondere Tage. Dazu kommen
          Suchanfragen nach bestimmten Ernährungsformen wie vegetarisch,
          vegan oder glutenfrei sowie nach Zutaten, die sich in mehreren
          Rezepten verwenden lassen.
        </p>
        <p className="font-body mt-4 text-lg">
          Ebenso gefragt sind saisonale Themen: Grillrezepte im Sommer,
          Plätzchen- und Glühwein-Ideen im Winter, Osterbrunch oder
          Sommerdrinks. Wer als Food-Marke diese wiederkehrenden Anlässe mit
          passenden Rezept- und Produkt-Pins begleitet, taucht in genau den
          Momenten auf, in denen die Suche nach Ideen am größten ist.
        </p>
        <p className="font-body mt-4 text-lg">
          Auch Suchanfragen rund um Aufbewahrung, Haltbarkeit oder die
          richtige Zubereitung tauchen regelmäßig auf – Fragen, die sich
          direkt mit dem eigenen Produkt beantworten lassen und Vertrauen in
          die Marke aufbauen, noch bevor ein Kauf stattfindet.
        </p>
      </section>

      {/* Welche Inhalte funktionieren */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Welche Inhalte funktionieren
          </h2>
          <p className="font-body mt-6 text-lg">
            Für Food-Marken funktionieren auf Pinterest vor allem Inhalte,
            die das eigene Produkt in eine konkrete Anwendung einbetten –
            nicht das reine Produktfoto, sondern der Nutzen dahinter. Dazu
            zählen zum Beispiel:
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
          Was molloy business für Food-Marken übernimmt
        </h2>
        <p className="font-body mt-6 text-lg">
          Für Food-Marken deckt molloy business die gesamte Bandbreite ab,
          vom ersten Fundament bis zur laufenden Betreuung. Fehlt noch ein
          strukturierter Account, entsteht er im{" "}
          <Link
            href="/pinterest-account-aufbau/"
            className="text-gold-text hover:underline"
          >
            Pinterest Account Aufbau
          </Link>{" "}
          mit Boards für Rezepte, Anwendungen und saisonale Themen. Steht der
          Account bereits, übernimmt das{" "}
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
          klärt vorab, welches Format zur eigenen Ausgangslage passt. Die
          Startseite von molloy business fasst als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          alle Leistungen zusammen.
        </p>
        <p className="font-body mt-4 text-lg">
          Möchte dein Team die Grundlagen von Pinterest Marketing selbst
          verstehen, um Rezept- und Produkt-Content langfristig eigenständig
          weiterzuführen, vermittelt der{" "}
          <Link
            href="/pinterest-workshop/"
            className="text-gold-text hover:underline"
          >
            Pinterest Workshop
          </Link>{" "}
          das nötige Wissen in einer kompakten Stunde.
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
          Häufige Fragen zu Pinterest Marketing für Food-Marken
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
          Die gleichen Prinzipien – lange Planungsphasen und dauerhafte
          Sichtbarkeit statt kurzlebiger Posts – gelten auch für andere
          Branchen: mehr dazu auf den Seiten{" "}
          <Link
            href="/pinterest-marketing-tourismus/"
            className="text-gold-text hover:underline"
          >
            Pinterest Marketing für touristische Unternehmen und Hotels
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
            Lass uns über dein Pinterest Marketing für deine Food-Marke
            sprechen
          </h2>
          <p className="font-body mt-6 text-lg">
            In einem unverbindlichen Strategie Call schauen wir gemeinsam,
            wie Pinterest für deine Rezepte und Produkte arbeiten kann.
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
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
