import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import {
  blogPosts,
  priceVatNote,
  services,
  siteConfig,
} from "@/lib/site-config";
import { formatDateDe, formatPrice } from "@/lib/format";

const post = blogPosts.find(
  (p) => p.slug === "was-kostet-pinterest-marketing",
)!;

const path = `/blog/${post.slug}/`;

// Feste Reihenfolge aus site-config.ts — für Preisnennungen im Text.
const [management, aufbau, call, workshop, audit, contentPaket] = services;

export const metadata: Metadata = {
  title: "Was kostet Pinterest Marketing? Preise und Faktoren",
  description: `Was kostet Pinterest Marketing? Alle Preise von molloy business – vom Strategie Call für ${formatPrice(call.price)} bis zur laufenden Betreuung – und wovon sie abhängen.`,
  alternates: {
    canonical: path,
  },
};

const preisfaktoren = [
  {
    title: "Umfang der Betreuung",
    text: "Ein einmaliges Projekt kostet anders als eine monatliche Zusammenarbeit, bei der laufend recherchiert, gestaltet und ausgewertet wird.",
  },
  {
    title: "Anzahl der Pins",
    text: "Jeder Pin bedeutet Design, Headline und Beschreibung. Je mehr Pins pro Monat entstehen, desto höher der Aufwand dahinter.",
  },
  {
    title: "Design-Aufwand",
    text: "Eine Marke mit klaren Vorlagen und gutem Bildmaterial ist schneller umgesetzt als eine, für die Gestaltungslinien erst entwickelt werden müssen.",
  },
  {
    title: "Neuaufbau oder laufende Betreuung",
    text: "Ein kompletter Account-Aufbau bündelt Analyse, Konzept und Ersteinrichtung in einem Projekt; die Weiterführung eines bestehenden Accounts verteilt den Aufwand auf Monate.",
  },
  {
    title: "Korrekturschleifen",
    text: "Abstimmungsrunden kosten Zeit. Angebote unterscheiden sich darin, wie viele Anpassungen im Preis enthalten sind.",
  },
];

const angebotsmodelle = [
  {
    title: "Einmaliger Aufbau",
    text: "Profil, Boards und ein erster Satz Pins werden als Projekt aufgesetzt. Danach führst du den Account selbst weiter oder gibst ihn in Betreuung.",
  },
  {
    title: "Monatliche Betreuung",
    text: "Eine Agentur übernimmt den Kanal komplett – von der Recherche über die Gestaltung bis zur Auswertung. Abgerechnet wird pro Monat.",
  },
  {
    title: "Reine Content-Lieferung",
    text: "Du bekommst fertige Pins samt Texten geliefert und veröffentlichst selbst. Das ist günstiger als die volle Betreuung, verlangt aber eigene Routine beim Einplanen.",
  },
  {
    title: "Beratung nach Zeit",
    text: "Strategie-Gespräche, Audits oder Workshops werden als einzelne Termine abgerechnet – der günstigste Weg, um fundiert zu entscheiden, bevor du größer investierst.",
  },
];

const warnsignale = [
  {
    title: "Pins ohne Keyword-Recherche",
    text: "Wer sofort mit dem Gestalten anfängt, ohne zu prüfen, wonach deine Zielgruppe sucht, produziert hübsche Bilder ohne Auffindbarkeit.",
  },
  {
    title: "Vorlagen ohne Markenanpassung",
    text: "Werden dieselben Templates für jeden Kunden nur umgefärbt, bleibt von deiner Marke auf Pinterest wenig übrig.",
  },
  {
    title: "Keine Auswertung",
    text: "Ohne regelmäßigen Blick in die Analytics lässt sich nicht sagen, was funktioniert – die Strategie bleibt Stillstand.",
  },
  {
    title: "Unklare Leistungsbeschreibung",
    text: "Wenn nicht klar benannt ist, wie viele Pins entstehen, wer die Texte schreibt und was im Preis enthalten ist, sind Nachforderungen wahrscheinlich.",
  },
];

// FAQPage-Schema wird wortgleich aus `answer` gebaut — Text nur hier ändern.
const faq = [
  {
    question: "Was kostet Pinterest Marketing pro Monat?",
    answer: `Bei molloy business kostet die laufende Betreuung ${formatPrice(management.price)} pro Monat – darin enthalten sind 90 SEO-optimierte Pins, die tägliche Einplanung, Keyword-Recherche und die Auswertung der Analytics. Wer selbst veröffentlicht und nur den Content geliefert bekommen möchte, zahlt für das Content Paket ${formatPrice(contentPaket.price)} pro Monat mit 30 Premium-Pins als Basis.`,
  },
  {
    question: "Womit startet man am günstigsten in Pinterest Marketing?",
    answer: `Der günstigste Einstieg bei molloy business ist der Pinterest Strategie Call für ${formatPrice(call.price)}: 90 Minuten individuelle Beratung mit konkreten nächsten Schritten, deren Betrag bei einer späteren Zusammenarbeit vollständig angerechnet wird. Besteht bereits ein Account, liefert das Pinterest Audit für ${formatPrice(audit.price)} eine fundierte Analyse mit priorisierten Handlungsempfehlungen als Startpunkt.`,
  },
  {
    question: "Muss ich mich bei einer Pinterest Agentur langfristig binden?",
    answer: `Nein, bei molloy business gibt es keine langen Vertragslaufzeiten: Das Account Management ist monatlich kündbar, und Strategie Call, Audit, Workshop und Account Aufbau sind einmalige Leistungen ohne Folgeverpflichtung. Sinnvoll ist trotzdem ein realistischer Zeithorizont von mehreren Monaten, weil organisches Pinterest Marketing seine Wirkung über Kontinuität aufbaut – nicht über einzelne Aktionen.`,
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
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: `${siteConfig.url}${path}`,
      author: {
        "@type": "Person",
        name: siteConfig.brandFace,
      },
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

export default function WasKostetPinterestMarketing() {
  return (
    <>
      <Breadcrumb pageName={post.title} parent={{ label: "Blog", href: "/blog/" }} />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
          Blog
        </p>
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          Was kostet Pinterest Marketing?
        </h1>
        <p className="font-body mt-3 text-sm">
          Veröffentlicht am {formatDateDe(post.date)}
        </p>
        <p className="font-body mt-6 text-lg">
          Pinterest Marketing kostet bei molloy business zwischen{" "}
          {formatPrice(call.price)} einmalig für einen Strategie Call und{" "}
          {formatPrice(aufbau.price)} einmalig für den kompletten Account
          Aufbau. Die laufende Betreuung liegt bei{" "}
          {formatPrice(management.price)} pro Monat, fertige Pins im Content
          Paket bei {formatPrice(contentPaket.price)} pro Monat. Was du
          tatsächlich zahlst, hängt vor allem vom Umfang ab – dieser Artikel
          schlüsselt die Faktoren auf.
        </p>
      </section>

      {/* Wovon der Preis abhängt */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Wovon der Preis abhängt
          </h2>
          <p className="font-body mt-6 text-lg">
            Pinterest Marketing ist keine Ware von der Stange, deshalb gibt
            es auch keinen Einheitspreis. Hinter jedem Angebot stehen ein
            paar konkrete Stellschrauben, die den Aufwand – und damit den
            Preis – bestimmen:
          </p>
          <ul className="font-body mt-4 list-disc space-y-2 pl-6 text-lg">
            {preisfaktoren.map((item) => (
              <li key={item.title}>
                <strong className="text-heading">{item.title}:</strong>{" "}
                {item.text}
              </li>
            ))}
          </ul>
          <p className="font-body mt-6 text-lg">
            Wer Angebote vergleicht, sollte deshalb nicht nur auf die Summe
            schauen, sondern darauf, was konkret dahintersteht: Wie viele
            Pins entstehen, wer schreibt die Texte, ist eine Auswertung
            enthalten? Erst dann werden Preise vergleichbar.
          </p>
        </div>
      </section>

      {/* Angebotsmodelle */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Wie Pinterest-Angebote üblicherweise aufgebaut sind
        </h2>
        <p className="font-body mt-6 text-lg">
          Unabhängig vom Anbieter begegnen dir am Markt immer wieder
          dieselben vier Grundmodelle – sie unterscheiden sich darin, wie
          viel Arbeit du abgibst:
        </p>
        <ul className="font-body mt-4 list-disc space-y-2 pl-6 text-lg">
          {angebotsmodelle.map((item) => (
            <li key={item.title}>
              <strong className="text-heading">{item.title}:</strong>{" "}
              {item.text}
            </li>
          ))}
        </ul>
        <p className="font-body mt-6 text-lg">
          Viele Unternehmen kombinieren diese Modelle über die Zeit: erst
          eine Beratung, dann der Aufbau, anschließend die laufende Betreuung
          oder die Content-Lieferung. Welche Reihenfolge sinnvoll ist, hängt
          von deiner Ausgangslage ab – nicht vom Katalog des Anbieters.
        </p>
      </section>

      {/* Preise molloy business */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Die Preise bei molloy business
          </h2>
          <p className="font-body mt-6 text-lg">
            Damit du die Modelle oben mit konkreten Zahlen füllen kannst,
            hier alle sechs Leistungen von molloy business mit Preis und
            Konditionen:
          </p>
          <ul className="font-body mt-8 space-y-4 text-lg">
            {services.map((service) => (
              <li
                key={service.title}
                className="border-gray-light flex flex-col gap-1 border-b pb-4 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <Link
                  href={service.href}
                  className="text-heading font-semibold hover:underline"
                >
                  {service.title}
                </Link>
                <span className="text-right">
                  <strong className="text-heading">
                    {formatPrice(service.price)}
                  </strong>{" "}
                  {service.priceUnit}
                  <br />
                  <span className="text-sm">{service.priceNote}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="font-body mt-8 text-lg">
            Der{" "}
            <Link
              href="/pinterest-strategie-call/"
              className="text-gold-text hover:underline"
            >
              Pinterest Strategie Call
            </Link>{" "}
            wird bei einer späteren Zusammenarbeit vollständig angerechnet –
            er eignet sich deshalb gut als erster Schritt, wenn du noch nicht
            weißt, welches Format passt.
          </p>
          <p className="font-body mt-6 text-sm">{priceVatNote}</p>
        </div>
      </section>

      {/* Selbst machen oder auslagern */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Selbst machen oder auslagern?
        </h2>
        <p className="font-body mt-6 text-lg">
          Selbermachen passt, wenn du Zeit zum Einarbeiten mitbringst und das
          Budget knapp ist – auslagern lohnt sich, sobald deine Zeit teurer
          ist als die Betreuung oder der Kanal im Tagesgeschäft liegen
          bleibt. Dazwischen gibt es Mittelwege, bei denen du nur Design und
          Texte abgibst und weiterhin selbst veröffentlichst.
        </p>
        <p className="font-body mt-4 text-lg">
          Die ehrliche Antwort: Selbermachen ist eine echte Option – wenn du
          Zeit mitbringst und Freude daran hast, dich einzuarbeiten.
          Pinterest ist kein Hexenwerk, und wer die Grundlagen einmal
          verstanden hat, kann mit wenigen, gut gemachten Pins pro Woche
          einen soliden Account führen. Sinnvoll ist der Eigenweg vor allem
          dann, wenn das Budget knapp ist und die Zeit dafür da – etwa in der
          Startphase eines Unternehmens. Ein kompakter Einstieg wie der{" "}
          <Link
            href="/pinterest-workshop/"
            className="text-gold-text hover:underline"
          >
            Pinterest Workshop
          </Link>{" "}
          verkürzt dabei die Lernkurve deutlich.
        </p>
        <p className="font-body mt-4 text-lg">
          Auslagern lohnt sich, sobald die eigene Zeit teurer ist als die
          Betreuung – oder wenn der Kanal seit Monaten brachliegt, weil das
          Tagesgeschäft immer wichtiger ist. Ein Mittelweg ist das{" "}
          <Link
            href="/pinterest-content-paket/"
            className="text-gold-text hover:underline"
          >
            Pinterest Content Paket
          </Link>
          : Design und Texte kommen fertig, das Veröffentlichen bleibt bei
          dir. Was eine{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          im Einzelnen übernimmt – von der Strategie bis zur Auswertung –,
          erklärt die Startseite von molloy business Schritt für Schritt.
        </p>
      </section>

      {/* Warnsignale */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Woran man ein zu günstiges Angebot erkennt
          </h2>
          <p className="font-body mt-6 text-lg">
            Sehr niedrige Preise sind selten ein Glücksfall, sondern meist
            ein Hinweis darauf, dass ein entscheidender Arbeitsschritt fehlt.
            Diese Warnsignale lohnt es sich zu prüfen, bevor du buchst:
          </p>
          <ul className="font-body mt-4 list-disc space-y-2 pl-6 text-lg">
            {warnsignale.map((item) => (
              <li key={item.title}>
                <strong className="text-heading">{item.title}:</strong>{" "}
                {item.text}
              </li>
            ))}
          </ul>
          <p className="font-body mt-6 text-lg">
            Keiner dieser Punkte macht ein Angebot automatisch unseriös –
            aber jeder ist eine Rückfrage wert. Ein Anbieter, der seine
            Arbeitsweise offen erklärt, hat auf diese Fragen klare Antworten.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Häufige Fragen zu den Kosten von Pinterest Marketing
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
            Lass uns über dein Budget sprechen
          </h2>
          <p className="font-body mt-6 text-lg">
            In einem unverbindlichen Strategie Call schauen wir gemeinsam,
            welches Format zu deinem Unternehmen und deinem Budget passt –
            ehrlich auch dann, wenn Selbermachen für dich der bessere Weg
            ist.
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
