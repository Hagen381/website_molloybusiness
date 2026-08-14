import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";

const post = blogPosts.find(
  (p) => p.slug === "lohnt-sich-pinterest-fuer-kleine-unternehmen",
)!;

const path = `/blog/${post.slug}/`;

const h1 = "Lohnt sich Pinterest für kleine Unternehmen und Selbstständige?";

export const metadata: Metadata = {
  title: "Lohnt sich Pinterest für kleine Unternehmen?",
  description:
    "Lohnt sich Pinterest für kleine Unternehmen? Eine ehrliche Einordnung: wann der Kanal funktioniert, wann nicht – und wie du mit wenig Aufwand startest.",
  alternates: {
    canonical: path,
  },
};

const lohntNicht = [
  {
    title: "Keine eigene Website",
    text: "Pins verlinken auf eine Zielseite. Fehlt sie, läuft die gewonnene Aufmerksamkeit ins Leere – erst Website, dann Pinterest.",
  },
  {
    title: "Rein lokales Ladengeschäft ohne Online-Angebot",
    text: "Pinterest erreicht Menschen weit über deinen Standort hinaus. Wer nur vor Ort verkauft und nichts Buchbares oder Bestellbares online hat, profitiert kaum davon.",
  },
  {
    title: "Kein Bildmaterial und kein Budget dafür",
    text: "Pinterest ist visuell. Ohne brauchbare Fotos oder Grafiken – und ohne Bereitschaft, welche erstellen zu lassen – fehlt schlicht das Ausgangsmaterial.",
  },
  {
    title: "Erwartung schneller Ergebnisse",
    text: "Wer in wenigen Wochen messbaren Umsatz erwartet, wird enttäuscht. Organische Sichtbarkeit baut sich über Monate auf – dafür bleibt sie dann auch.",
  },
];

const startSchritte = [
  {
    title: "Ausgangslage klären",
    text: "Prüfe, ob deine Website Zielseiten hat, auf die Pins sinnvoll verlinken können, und sammle vorhandenes Bildmaterial. Ein kurzes Erstgespräch oder ein Strategie Call hilft, blinde Flecken zu finden.",
  },
  {
    title: "Mit wenigen Boards starten",
    text: "Lege eine Handvoll Boards zu deinen Kernthemen an – benannt nach dem, wonach deine Zielgruppe sucht, nicht nach internen Kategorien. Qualität vor Menge.",
  },
  {
    title: "Einen festen Rhythmus finden",
    text: "Veröffentliche lieber wenige Pins regelmäßig als viele auf einmal und dann monatelang nichts. Ein realistischer Wochenrhythmus, den du durchhältst, schlägt jeden ambitionierten Plan, der nach kurzer Zeit einschläft.",
  },
];

// FAQPage-Schema wird wortgleich aus `answer` gebaut — Text nur hier ändern.
const faq = [
  {
    question:
      "Wie schnell zeigt Pinterest für kleine Unternehmen Ergebnisse?",
    answer:
      "Pinterest ist ein langsamer, dafür nachhaltiger Kanal: Erste Impressionen erscheinen oft schon nach wenigen Wochen, spürbarer Website-Traffic braucht in der Regel mehrere Monate kontinuierlicher Veröffentlichung. Dafür wirken gut gemachte Pins langfristig weiter und bringen auch lange nach der Veröffentlichung noch Besucherinnen und Besucher – anders als Beiträge in schnelllebigen Feeds.",
  },
  {
    question:
      "Braucht ein kleines Unternehmen professionelle Fotos für Pinterest?",
    answer:
      "Nein, professionelle Fotoshootings sind keine Voraussetzung: Ordentliche eigene Aufnahmen, klar gestaltete Grafik-Pins mit Text oder eine Kombination aus beidem reichen für den Start aus. Wichtiger als perfekte Bilder ist, dass jeder Pin eine konkrete Suchanfrage beantwortet und auf eine passende Seite deiner Website verlinkt.",
  },
  {
    question:
      "Kann ich Pinterest neben dem Tagesgeschäft selbst betreuen?",
    answer:
      "Ja, mit einem realistischen Rahmen ist das machbar: Wer Themen im Voraus plant und Pins gebündelt erstellt, kommt mit wenigen festen Arbeitsblöcken pro Monat aus. Entscheidend ist Kontinuität statt Perfektion. Wird die Zeit trotzdem knapp, lässt sich die Erstellung der Pins auslagern, während du selbst veröffentlichst.",
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
      dateModified: post.date,
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

export default function LohntSichPinterest() {
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
          Ja – Pinterest lohnt sich für kleine Unternehmen und
          Selbstständige, wenn drei Dinge zusammenkommen: eine eigene
          Website, ein visuell darstellbares Angebot und die Geduld, mehrere
          Monate kontinuierlich dranzubleiben. Fehlt eine dieser
          Voraussetzungen, ist der Kanal oft verschenkte Zeit. Dieser Artikel
          zeigt ehrlich, für wen sich der Einstieg auszahlt – und für wen
          nicht.
        </p>
      </section>

      {/* Warum anders als Instagram */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Warum Pinterest anders funktioniert als Instagram
          </h2>
          <p className="font-body mt-6 text-lg">
            Der wichtigste Unterschied: Pinterest ist keine
            Social-Media-Plattform, sondern eine Suchmaschine für Ideen.
            Menschen folgen dort keinen Freunden und scrollen keinen Feed
            entlang – sie tippen eine Suche ein, weil sie etwas Bestimmtes
            finden wollen: ein Rezept, eine Geschenkidee, eine Antwort auf
            eine Alltagsfrage. Wer dort auftaucht, erreicht Menschen im
            Moment einer konkreten Absicht, nicht beim beiläufigen
            Durchblättern.
          </p>
          <p className="font-body mt-4 text-lg">
            Daraus folgt der zweite Unterschied: die Lebensdauer der
            Inhalte. Ein Instagram-Beitrag verschwindet nach Stunden aus den
            Feeds; ein gut gemachter Pin wird über Monate, oft Jahre in der
            Suche gefunden und bringt in dieser Zeit immer wieder
            Besucherinnen und Besucher auf deine Website. Für kleine Teams
            ist genau das der entscheidende Vorteil: Die Arbeit, die du
            einmal investierst, wirkt dauerhaft weiter, statt täglich neu
            erbracht werden zu müssen.
          </p>
        </div>
      </section>

      {/* Wann sich Pinterest lohnt */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Wann sich Pinterest lohnt
        </h2>
        <p className="font-body mt-6 text-lg">
          Am meisten profitieren Unternehmen mit visuell darstellbaren
          Angeboten: Produkte, die man zeigen kann, Dienstleistungen mit
          sichtbaren Ergebnissen, Rezepte, Reiseziele, Einrichtungs- oder
          Gestaltungsideen. Genauso gut funktionieren erklärungsbedürftige
          Themen mit langer Entscheidungsphase – etwa Vorsorge, Weiterbildung
          oder größere Anschaffungen –, weil Menschen auf Pinterest oft
          Wochen bis Monate vor einer Entscheidung recherchieren und sich
          Ideen in Merklisten sammeln.
        </p>
        <p className="font-body mt-4 text-lg">
          Die dritte Voraussetzung ist unspektakulär, aber entscheidend: eine
          eigene Website oder ein Onlineshop, auf die Pins verlinken können.
          Pinterest ist kein Selbstzweck, sondern ein Zubringer – der Wert
          entsteht erst, wenn Interessierte auf deiner Seite ankommen. Wie
          das branchenspezifisch aussieht, zeigen die Seiten zu{" "}
          <Link
            href="/pinterest-marketing-tourismus/"
            className="text-gold-text hover:underline"
          >
            Pinterest Marketing für touristische Unternehmen
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

      {/* Wann sich Pinterest nicht lohnt */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Wann sich Pinterest nicht lohnt
          </h2>
          <p className="font-body mt-6 text-lg">
            Genauso wichtig wie die Frage, wann sich Pinterest lohnt, ist die
            ehrliche Gegenprobe. In diesen Fällen ist dein Geld und deine
            Zeit woanders besser investiert:
          </p>
          <ul className="font-body mt-4 list-disc space-y-2 pl-6 text-lg">
            {lohntNicht.map((item) => (
              <li key={item.title}>
                <strong className="text-heading">{item.title}:</strong>{" "}
                {item.text}
              </li>
            ))}
          </ul>
          <p className="font-body mt-6 text-lg">
            Keiner dieser Punkte ist endgültig: Eine Website lässt sich
            bauen, Bildmaterial lässt sich erstellen, und aus einem lokalen
            Angebot kann ein buchbares Online-Angebot werden. Aber die
            Reihenfolge muss stimmen – Pinterest ist der Verstärker, nicht
            das Fundament.
          </p>
        </div>
      </section>

      {/* Aufwand */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Was es realistisch an Aufwand bedeutet
        </h2>
        <p className="font-body mt-6 text-lg">
          Pinterest belohnt Regelmäßigkeit, nicht Dauereinsatz. Der größte
          Aufwand liegt am Anfang: verstehen, wonach die eigene Zielgruppe
          sucht, Boards sinnvoll aufbauen und eine Gestaltungslinie für die
          Pins finden. Danach wird es planbarer – Themen lassen sich im
          Voraus festlegen, Pins gebündelt erstellen und über ein
          Planungstool automatisch veröffentlichen. Wer strukturiert
          arbeitet, betreut den Kanal in festen, überschaubaren
          Arbeitsblöcken neben dem Tagesgeschäft.
        </p>
        <p className="font-body mt-4 text-lg">
          Unterschätzt wird meist nicht die Arbeit selbst, sondern die
          Durststrecke: In den ersten Monaten passiert sichtbar wenig, und
          genau dann geben viele auf – kurz bevor die Kurve ansteigt. Wer den
          Kanal beginnt, sollte sich deshalb vorab entscheiden, ihn eine
          Weile konsequent durchzuhalten oder es bewusst zu lassen. Halbherzig
          gestartete Accounts kosten Zeit und bringen wenig.
        </p>
      </section>

      {/* Klein anfangen */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Wie man klein anfängt
          </h2>
          <ol className="font-body mt-8 list-decimal space-y-6 pl-6 text-lg">
            {startSchritte.map((step) => (
              <li key={step.title}>
                <strong className="text-heading">{step.title}:</strong>{" "}
                {step.text}
              </li>
            ))}
          </ol>
          <p className="font-body mt-6 text-lg">
            Wer vor dem Start eine fundierte Einschätzung möchte, klärt die
            eigene Ausgangslage am schnellsten in einem{" "}
            <Link
              href="/pinterest-strategie-call/"
              className="text-gold-text hover:underline"
            >
              Pinterest Strategie Call
            </Link>
            . Und wer die Umsetzung lieber ganz abgibt: Welche Aufgaben eine{" "}
            <Link href="/" className="text-gold-text hover:underline">
              Pinterest Marketing Agentur
            </Link>{" "}
            wie molloy business dabei abnimmt, zeigt die Startseite Schritt
            für Schritt.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Häufige Fragen von kleinen Unternehmen zu Pinterest
        </h2>
        <div className="mt-8 space-y-10">
          {faq.map((item) => (
            <div key={item.question}>
              <h3 className="text-[22px] leading-tight">{item.question}</h3>
              <p className="font-body mt-3 text-lg">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Lass uns klären, ob Pinterest zu dir passt
          </h2>
          <p className="font-body mt-6 text-lg">
            In einem unverbindlichen Strategie Call schauen wir gemeinsam auf
            deine Ausgangslage – und du bekommst eine ehrliche Einschätzung,
            auch wenn sie „noch nicht“ lautet.
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
