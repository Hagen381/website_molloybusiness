import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";

const post = blogPosts.find((p) => p.slug === "pinterest-seo-reiseangebote")!;

const path = `/blog/${post.slug}/`;

const h1 = "Pinterest SEO: So werden deine Reiseangebote gefunden";

export const metadata: Metadata = {
  title: "Pinterest SEO: So werden deine Reiseangebote gefunden",
  description:
    "Pinterest SEO für Reiseanbieter: wie die Pinterest-Suche funktioniert, wie du Keywords findest und wo sie hingehören – von Profil über Boards bis zum Pin.",
  alternates: {
    canonical: path,
  },
};

const keywordOrte = [
  {
    ort: "Profilname und Profilbeschreibung",
    text: "Hier gehört dein wichtigstes Thema hin – nicht nur dein Firmenname. „Meeresblick Törns – Segeltörns in Kroatien für Einsteiger“ sagt der Suche mehr als der Firmenname allein. Die Beschreibung ergänzt in ein, zwei Sätzen, welche Reisen du anbietest und für wen.",
  },
  {
    ort: "Board-Titel und Board-Beschreibungen",
    text: "Boards heißen so, wie deine Zielgruppe sucht: „Wohnmobil Routen Norwegen“ statt „Unsere Flotte unterwegs“. Die Board-Beschreibung fasst in wenigen natürlichen Sätzen zusammen, welche Themen und Suchbegriffe das Board abdeckt.",
  },
  {
    ort: "Pin-Titel und Pin-Beschreibungen",
    text: "Der Pin-Titel greift die konkrete Suchanfrage auf – „Rundreise Portugal: Route für 10 Tage“ –, die Beschreibung liefert Kontext in zwei bis vier Sätzen, in denen verwandte Begriffe natürlich vorkommen: Etappen, Reisezeit, für wen die Route passt.",
  },
  {
    ort: "Text auf dem Pin-Bild selbst",
    text: "Auch der Text auf dem Bild wird ausgelesen. Eine klare Zeile wie „Segeltörn Kroatien für Anfänger“ hilft doppelt: Sie macht den Pin in der Suche lesbar und sagt Betrachtern auf einen Blick, was sie hinter dem Klick erwartet.",
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

export default function PinterestSeoReiseangebote() {
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
          Pinterest SEO bedeutet, deine Inhalte mit den Wörtern zu
          beschreiben, die deine Wunschkunden in die Pinterest-Suche eintippen
          – an Pin, Board und Profil. Wer „Rundreise Portugal“ sucht, findet
          Pins, deren Texte genau das sagen. Dieser Artikel zeigt dir, wie du
          diese Suchbegriffe findest und wo sie hingehören, damit deine
          Reiseangebote gefunden werden.
        </p>
      </section>

      {/* Wie die Suche funktioniert */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Wie funktioniert die Pinterest-Suche?
          </h2>
          <p className="font-body mt-6 text-lg">
            Pinterest funktioniert wie eine Suchmaschine, nicht wie ein
            Social-Media-Feed: Nutzer tippen ein, was sie vorhaben, und
            bekommen passende Pins als Ergebnisse. Um zu entscheiden, welche
            Pins passen, liest Pinterest den Text aus, der an Pin, Board und
            Profil hängt. Genau deshalb entscheiden deine Worte mit, ob du
            gefunden wirst.
          </p>
          <p className="font-body mt-4 text-lg">
            Das ist der zentrale Unterschied zu Instagram und Facebook: Dort
            entscheidet ein Feed, was Menschen zu sehen bekommen – auf
            Pinterest entscheidet die Suchanfrage. Jemand tippt „Wohnmobil
            Route Norwegen“ oder „außergewöhnliche Unterkünfte Deutschland“
            ein und bekommt Pins, deren Texte zu dieser Anfrage passen.{" "}
            <strong className="text-heading">
              Gefunden wird, was beschriftet ist:
            </strong>{" "}
            Ein noch so schönes Bild ohne aussagekräftigen Titel und ohne
            Beschreibung kann der Suche nicht zugeordnet werden.
          </p>
          <p className="font-body mt-4 text-lg">
            Für dich als Reiseanbieter heißt das: Pinterest SEO ist keine
            Technik-Disziplin, sondern Übersetzungsarbeit. Du übersetzt deine
            Angebote in die Sprache, in der deine Zielgruppe sucht – und
            bringst diese Sprache an den Stellen unter, die Pinterest
            ausliest. Wie das konkret geht, klären die nächsten Abschnitte.
          </p>
        </div>
      </section>

      {/* Keywords finden */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Wie findest du die richtigen Keywords für deine Reiseangebote?
        </h2>
        <p className="font-body mt-6 text-lg">
          Die wichtigste Quelle ist die Pinterest-Suchleiste selbst: Tippe
          einen Begriff wie „Rundreise“ ein und schau, welche
          Vervollständigungen und verwandten Suchvorschläge Pinterest anzeigt
          – das sind echte Suchanfragen echter Nutzer. Dazu kommt das
          Pinterest Trend Tool, das zeigt, wann und wonach im Jahresverlauf
          gesucht wird.
        </p>
        <p className="font-body mt-4 text-lg">
          Die Suchleisten-Methode kostet nichts außer Zeit: Gib nacheinander
          deine Kernthemen ein – Reiseziel, Reiseart, Zielgruppe – und
          notiere, was Pinterest vorschlägt. Aus „Segeltörn“ werden so
          Varianten wie „Segeltörn Kroatien“ oder „Segeltörn Kroatien
          Anfänger“. Jede Vervollständigung ist ein Hinweis darauf, wie
          Menschen wirklich suchen – konkreter und oft anders, als du es aus
          Anbietersicht formulieren würdest.
        </p>
        <p className="font-body mt-4 text-lg">
          Das zweite Werkzeug ist das{" "}
          <a
            href="https://trends.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            Pinterest Trend Tool
          </a>
          : Dort siehst du, wie sich das Interesse an Suchbegriffen über das
          Jahr entwickelt und welche verwandten Begriffe gerade gefragt sind.
          Für Reiseanbieter ist vor allem der zeitliche Verlauf wertvoll –
          er verrät dir, wann die Planung für dein Thema jedes Jahr anzieht.
        </p>
        <p className="font-body mt-4 text-lg">
          Die wichtigste Regel dabei:{" "}
          <strong className="text-heading">
            Kundensprache schlägt Fachsprache.
          </strong>{" "}
          Deine Wunschkunden suchen nach „Roadtrip mit Hund“, nicht nach
          „Camper-Vermietung Kategorie B“. Sie suchen „Übernachten im
          Baumhaus“, nicht „Glamping-Objekt Süddeutschland“. Wenn deine
          internen Begriffe und die Suchbegriffe deiner Zielgruppe
          auseinanderliegen, gewinnen immer die Begriffe der Zielgruppe.
        </p>
      </section>

      {/* Wo Keywords hingehören */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Wo gehören die Keywords hin?
          </h2>
          <p className="font-body mt-6 text-lg">
            An vier Orte: in Profilname und Profilbeschreibung, in
            Board-Titel und Board-Beschreibungen, in Pin-Titel und
            Pin-Beschreibungen und als Text auf dem Pin-Bild selbst. Wichtig
            ist, dass die Begriffe in natürlichen Sätzen stehen und
            inhaltlich zu dem passen, was der Pin tatsächlich zeigt – nicht
            als aneinandergereihte Keyword-Liste.
          </p>
          <div className="mt-8 space-y-8">
            {keywordOrte.map((item) => (
              <div key={item.ort}>
                <h3 className="text-[22px] leading-tight">{item.ort}</h3>
                <p className="font-body mt-3 text-lg">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="font-body mt-8 text-lg">
            Diese vier Orte greifen ineinander: Ein Pin zu einer
            Portugal-Route wirkt stärker, wenn er auf einem Board
            „Rundreisen Portugal“ liegt und zu einem Profil gehört, das
            Rundreisen im Namen trägt. Konsistenz über alle Ebenen ist das
            eigentliche Pinterest SEO.
          </p>
        </div>
      </section>

      {/* Saisonales Timing */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Wann solltest du saisonale Inhalte pinnen?
        </h2>
        <p className="font-body mt-6 text-lg">
          Deutlich früher, als du denkst: Reisen werden Monate im Voraus
          geplant, und Pins brauchen zusätzlich Zeit, um in der Suche
          sichtbar zu werden. Pinne saisonale Inhalte deshalb mehrere Monate
          vor der Saison – Sommertörns im Winter, Winterkampagnen im Sommer.
          Wer erst zur Saison pinnt, verpasst die Planungsphase seiner
          Zielgruppe.
        </p>
        <p className="font-body mt-4 text-lg">
          Ein Beispiel: Wer im Juli einen Segeltörn macht, hat ihn oft schon
          im Winter geplant – Revier verglichen, Route überlegt, Crew
          zusammengestellt. Deine Törn-Pins müssen also im Winter auffindbar
          sein, nicht erst, wenn die Saison beginnt. Dasselbe gilt umgekehrt:
          Inhalte für die Wintersaison gehören in den Sommer- und
          Herbst-Redaktionsplan.
        </p>
        <p className="font-body mt-4 text-lg">
          Wann genau die Planung für dein Thema beginnt, musst du nicht
          raten: Der zeitliche Verlauf im Trend Tool zeigt dir, in welchen
          Monaten das Suchinteresse für deine Begriffe jedes Jahr anzieht.
          Richte deinen Redaktionsplan daran aus – und pinne einige Wochen
          vor diesem Anstieg, damit deine Inhalte bereits auffindbar sind,
          wenn die Suchen kommen.
        </p>
      </section>

      {/* Ehrliche Einordnung */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Was bringt Pinterest SEO ohne gute Pins?
          </h2>
          <p className="font-body mt-6 text-lg">
            Wenig. Keywords sorgen dafür, dass dein Pin in den
            Suchergebnissen auftaucht – ob er dort auch angeklickt wird,
            entscheidet das Bild. Ein perfekt optimierter Pin mit schwachem
            Motiv verliert gegen einen guten Pin mit mittelmäßiger
            Beschreibung. Pinterest SEO ist die halbe Miete, die andere
            Hälfte ist visuelle Qualität.
          </p>
          <p className="font-body mt-4 text-lg">
            Dazu kommt Kontinuität: Ein einmaliger Optimierungs-Schub bringt
            weniger als ein Account, der Woche für Woche frische, sauber
            beschriftete Pins veröffentlicht. Die Suche belohnt Profile, die
            ihr Thema dauerhaft bespielen – nicht die, die einmal im Jahr
            eine große Aktion fahren und dann monatelang verstummen. Plane
            Pinterest SEO deshalb als laufende Routine ein, nicht als
            Einzelprojekt.
          </p>
        </div>
      </section>

      {/* Abschluss + CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Wie geht es weiter?
        </h2>
        <p className="font-body mt-6 text-lg">
          Pinterest SEO ist ein Baustein von mehreren: Wenn du noch ganz am
          Anfang stehst, zeigt dir der Ratgeber{" "}
          <Link
            href="/blog/pinterest-fuer-reiseveranstalter/"
            className="text-gold-text hover:underline"
          >
            Pinterest für Reiseveranstalter
          </Link>{" "}
          den kompletten Einstieg – vom Business-Account über die
          Board-Struktur bis zum Weg vom Pin zur Buchungsanfrage. Und wenn du
          Recherche und Umsetzung lieber abgibst: Welche Aufgaben eine{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          dabei übernimmt, zeigt die Startseite von molloy business.
        </p>
        <p className="font-body mt-4 text-lg">
          Du bist unsicher, ob deine Keywords und deine Account-Struktur
          schon tragen? Dann vereinbare ein{" "}
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            unverbindliches Erstgespräch
          </a>{" "}
          – du bekommst eine ehrliche Einschätzung, wo dein Account steht
          und was der sinnvollste nächste Schritt ist.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
