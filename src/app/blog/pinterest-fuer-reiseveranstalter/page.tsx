import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";

const post = blogPosts.find(
  (p) => p.slug === "pinterest-fuer-reiseveranstalter",
)!;

const path = `/blog/${post.slug}/`;

const h1 = "Pinterest für Reiseveranstalter: So funktioniert der Einstieg";

export const metadata: Metadata = {
  title: "Pinterest für Reiseveranstalter: So funktioniert der Einstieg",
  description:
    "Wie Reiseveranstalter mit Pinterest starten: Business-Account, Boards nach Reisearten, Pin-Design und Pinterest-SEO – Schritt für Schritt erklärt.",
  alternates: {
    canonical: path,
  },
};

const boardBeispiele = [
  {
    segment: "Rundreisen und geführte Touren",
    boards: "„Rundreise-Routen Südafrika“, „Reisetipps Andalusien“, „Gruppenreisen Ideen“",
  },
  {
    segment: "Camper- und Wohnmobilvermietung",
    boards: "„Roadtrip-Routen Skandinavien“, „Camper-Ausbau“, „Stellplatz-Ideen“",
  },
  {
    segment: "Yachtcharter",
    boards: "„Törn-Ziele Kroatien“, „Segelrouten Mittelmeer“, „Leben an Bord“",
  },
  {
    segment: "Besondere Unterkünfte",
    boards: "„Übernachten im Baumhaus“, „Tiny House Urlaub“, „Außergewöhnliche Unterkünfte“",
  },
];

const nochNicht = [
  {
    title: "Reines Last-Minute-Geschäft",
    text: "Pinterest erreicht Menschen in der frühen Planungsphase, Monate vor der Reise. Wer fast ausschließlich kurzfristige Buchungen verkauft, erreicht seine Kunden dort zum falschen Zeitpunkt.",
  },
  {
    title: "Keine eigene Website",
    text: "Pins verlinken auf eine Zielseite. Fehlt sie, verpufft jede gewonnene Aufmerksamkeit – erst Website, dann Pinterest.",
  },
  {
    title: "Kein Bildmaterial und keine Bereitschaft, welches zu erstellen",
    text: "Pinterest ist visuell. Ohne brauchbare Fotos deiner Reisen, Camper, Yachten oder Unterkünfte fehlt schlicht das Ausgangsmaterial.",
  },
  {
    title: "Erwartung schneller Ergebnisse",
    text: "Organische Sichtbarkeit baut sich über Monate auf. Wer in vier Wochen messbare Buchungen erwartet, wird enttäuscht – wer durchhält, profitiert dafür langfristig.",
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
          name: "Blog",
          item: `${siteConfig.url}/blog/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `${siteConfig.url}${path}`,
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: h1,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: "2026-08-15",
      mainEntityOfPage: `${siteConfig.url}${path}`,
      // Referenz auf die website-weit eine Person-Entität (definiert auf
      // Startseite und /ueber-mich/) — kein zweites unverknüpftes Objekt.
      author: { "@id": `${siteConfig.url}/#juliette-oppel` },
      publisher: {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
      },
    },
  ],
};

export default function PinterestFuerReiseveranstalter() {
  return (
    <>
      <Breadcrumb pageName={post.title} parent={{ label: "Blog", href: "/blog/" }} />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
          Blog
        </p>
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          {h1}
        </h1>
        <p className="font-body mt-3 text-sm">
          Veröffentlicht am {formatDateDe(post.date)}
        </p>
        <p className="font-body mt-6 text-lg">
          Pinterest funktioniert für Reiseveranstalter, weil Menschen dort
          Monate vor der Buchung ihre Reisen planen und Ideen in Merklisten
          sammeln. Für den Einstieg brauchst du einen Business-Account, Boards
          entlang deiner Reisearten, hochformatige Pins mit klarer Botschaft –
          und eine Website, auf die jeder Pin verlinkt. Dieser Artikel zeigt
          dir Schritt für Schritt, wie das geht.
        </p>
      </section>

      {/* Warum Pinterest */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Warum ausgerechnet Pinterest?
          </h2>
          <p className="font-body mt-6 text-lg">
            Weil Reiseplanung auf Pinterest beginnt – oft Monate vor der
            Buchung. Nutzer suchen dort gezielt nach Zielen, Routen und
            Reiseideen und sammeln sie in Merklisten. Deine Pins gehen nicht
            nach einem Tag im Feed unter, sondern werden über die Suche immer
            wieder gefunden. Genau davon profitieren Anbieter mit langen
            Entscheidungswegen.
          </p>
          <p className="font-body mt-4 text-lg">
            Der Unterschied zu Instagram und Facebook liegt im Verhalten der
            Nutzer. Dort scrollen Menschen zur Unterhaltung durch einen Feed,
            und dein Beitrag ist nach wenigen Stunden wieder verschwunden.
            Pinterest funktioniert anders:{" "}
            <strong className="text-heading">
              Es ist eine visuelle Suchmaschine, kein Unterhaltungs-Feed.
            </strong>{" "}
            Nutzer tippen aktiv ein, was sie vorhaben – „Rundreise Portugal“,
            „Roadtrip Norwegen Camper“, „außergewöhnliche Unterkünfte Alpen“ –
            und bekommen Pins als Ergebnisse. Ein gut gemachter Pin taucht in
            diesen Suchergebnissen über Monate, oft Jahre immer wieder auf.
          </p>
          <p className="font-body mt-4 text-lg">
            Die Plattform ist dabei alles andere als eine Nische: Laut den{" "}
            <a
              href="https://investor.pinterestinc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-text hover:underline"
            >
              offiziellen Pinterest-Quartalszahlen
            </a>{" "}
            hat Pinterest rund 619 Millionen monatlich aktive Nutzer
            (Q4 2025). Wichtiger als die reine Zahl ist aber der Zeitpunkt, zu
            dem du diese Menschen erreichst: in der Träum- und Planungsphase,
            in der noch offen ist, wohin die Reise geht – und mit wem.
          </p>
          <p className="font-body mt-4 text-lg">
            Dazu kommt: Saisonalität ist auf Pinterest vorausplanbar. Inhalte
            zur Sommersaison pinnst du Monate vorher, wenn die Planung deiner
            Zielgruppe beginnt – nicht erst, wenn die Saison schon läuft.
          </p>
        </div>
      </section>

      {/* Einstieg Schritt für Schritt */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Wie fängst du an?
        </h2>
        <p className="font-body mt-6 text-lg">
          Mit einem Business-Account, einer Handvoll Boards entlang deiner
          Reisearten und einem festen Pin-Rhythmus. Benenne Boards so, wie
          deine Zielgruppe sucht, gestalte Pins im Hochformat mit Text auf dem
          Bild und verlinke jeden Pin auf eine passende Seite deiner Website.
          Perfektion brauchst du nicht – Kontinuität schon.
        </p>

        <h3 className="mt-10 text-[22px] leading-tight">
          Schritt 1: Business-Account einrichten
        </h3>
        <p className="font-body mt-4 text-lg">
          Lege einen Pinterest-Business-Account an oder wandle deinen
          bestehenden Account um. Er ist die Voraussetzung für Statistiken und
          die Verifizierung deiner Website – und damit dafür, dass deine Pins
          deinem Unternehmen zugeordnet werden. Formuliere Profilname und
          Beschreibung so, dass sofort klar wird, welche Reisen du anbietest
          und für wen.
        </p>

        <h3 className="mt-10 text-[22px] leading-tight">
          Schritt 2: Boards entlang deiner Reisearten anlegen
        </h3>
        <p className="font-body mt-4 text-lg">
          Boards sind deine Themenregale. Lege sie entlang deiner Reisearten
          und Zielgruppen an – benannt nach dem, wonach deine Wunschkunden
          suchen, nicht nach internen Kategorien. Ein paar Beispiele aus
          verschiedenen Segmenten:
        </p>
        <ul className="font-body mt-4 list-disc space-y-2 pl-6 text-lg">
          {boardBeispiele.map((item) => (
            <li key={item.segment}>
              <strong className="text-heading">{item.segment}:</strong>{" "}
              {item.boards}
            </li>
          ))}
        </ul>
        <p className="font-body mt-4 text-lg">
          Fünf bis acht gut gepflegte Boards reichen für den Start völlig aus.
          Qualität schlägt Menge.
        </p>

        <h3 className="mt-10 text-[22px] leading-tight">
          Schritt 3: Pins gestalten und mit Keywords versehen
        </h3>
        <p className="font-body mt-4 text-lg">
          Pins sind hochformatig (2:3, zum Beispiel 1000 × 1500 Pixel). Ein
          starkes Reisefoto plus eine kurze Textzeile auf dem Bild, die sagt,
          was dahintersteckt – „7 Tage Andalusien: die Route“ funktioniert
          besser als ein Foto ohne Kontext. Bleib dabei in einer{" "}
          <strong className="text-heading">konsistenten Markenwelt:</strong>{" "}
          gleiche Schriften, gleiche Farben, damit deine Pins wiedererkennbar
          sind.
        </p>
        <p className="font-body mt-4 text-lg">
          Dazu kommt Pinterest-SEO in Kurzform: Recherchiere über die
          Pinterest-Suchleiste, welche Begriffe deine Zielgruppe eintippt, und
          verwende sie in Pin-Titel, Pin-Beschreibung und Board-Namen. Keine
          Keyword-Listen, sondern natürliche Sätze, in denen die Suchbegriffe
          vorkommen. Wie du diese Recherche Schritt für Schritt angehst,
          zeigt der Ratgeber{" "}
          <Link
            href="/blog/pinterest-seo-reiseangebote/"
            className="text-gold-text hover:underline"
          >
            Pinterest SEO für Reiseangebote
          </Link>{" "}
          im Detail.
        </p>
      </section>

      {/* Vom Pin zur Anfrage */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Wie wird aus einem Pin eine Buchungsanfrage?
          </h2>
          <p className="font-body mt-6 text-lg">
            Über deine Website. Ein Pin weckt Interesse, der Klick führt auf
            deine Angebots- oder Zielseite, und dort entsteht die Anfrage –
            über Formular, Buchungsstrecke oder E-Mail. Pinterest ist der
            Zubringer, deine Website der Ort der Entscheidung. Deshalb zählt,
            dass jeder Pin auf eine wirklich passende Seite verlinkt.
          </p>
          <p className="font-body mt-4 text-lg">
            Der Weg sieht typischerweise so aus: Eine Nutzerin plant ihren
            Sommerurlaub und sucht nach Segelrevieren. Sie findet deinen Pin
            mit einer Törn-Route, speichert ihn auf ihrer Merkliste und kommt
            zwei Wochen später darauf zurück. Der Klick führt sie auf deine
            Angebotsseite – und dort, nicht auf Pinterest, entscheidet sich,
            ob aus Interesse eine Buchungsanfrage wird.
          </p>
          <p className="font-body mt-4 text-lg">
            Deshalb gilt:{" "}
            <strong className="text-heading">
              Verlinke jeden Pin auf die inhaltlich passende Seite.
            </strong>{" "}
            Der Pin zur Rundreise gehört auf die Rundreise-Seite, nicht auf
            deine Startseite. Und die Zielseite braucht einen klaren nächsten
            Schritt – ein Anfrageformular, eine Buchungsmöglichkeit oder eine
            gut sichtbare Kontaktaufnahme. Pinterest bringt die Besucher;
            verwandeln muss sie deine Website.
          </p>
        </div>
      </section>

      {/* Wann (noch) nicht */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Wann lohnt sich das für dich (noch) nicht?
        </h2>
        <p className="font-body mt-6 text-lg">
          Wenn du keine eigene Website hast, dein Geschäft fast ausschließlich
          über Last-Minute-Buchungen läuft oder du keinerlei Bildmaterial
          besitzt und auch keins erstellen lassen willst. Pinterest belohnt
          lange Planungszeiträume und visuelle Angebote – fehlt beides, ist
          deine Zeit an anderer Stelle besser investiert. Ehrlichkeit spart
          hier Monate.
        </p>
        <p className="font-body mt-4 text-lg">
          Konkret rate ich in diesen Fällen (noch) vom Einstieg ab:
        </p>
        <ul className="font-body mt-4 list-disc space-y-2 pl-6 text-lg">
          {nochNicht.map((item) => (
            <li key={item.title}>
              <strong className="text-heading">{item.title}:</strong>{" "}
              {item.text}
            </li>
          ))}
        </ul>
        <p className="font-body mt-6 text-lg">
          Keiner dieser Punkte ist endgültig: Eine Website lässt sich bauen,
          Bildmaterial lässt sich erstellen, und viele Veranstalter haben
          neben dem Last-Minute-Geschäft auch Angebote mit langem Vorlauf.
          Aber die Reihenfolge muss stimmen – Pinterest ist der Verstärker,
          nicht das Fundament.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Wie geht es weiter?
          </h2>
          <p className="font-body mt-6 text-lg">
            Wenn du tiefer einsteigen willst: molloy business unterstützt
            touristische Unternehmen bei Strategie, Pin-Design und laufender
            Betreuung. Und wenn du die Umsetzung lieber ganz abgibst: Welche
            Aufgaben eine{" "}
            <Link href="/" className="text-gold-text hover:underline">
              Pinterest Marketing Agentur
            </Link>{" "}
            dabei übernimmt, zeigt die Startseite Schritt für Schritt.
          </p>
          <p className="font-body mt-4 text-lg">
            Du willst erst einmal sortieren, ob Pinterest zu deinem Angebot
            passt? Dann vereinbare ein{" "}
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-text hover:underline"
            >
              unverbindliches Erstgespräch
            </a>{" "}
            – du bekommst eine ehrliche Einschätzung, auch wenn sie „noch
            nicht“ lautet.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
