import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";

const post = blogPosts.find(
  (p) => p.slug === "pinterest-selbst-machen-oder-auslagern",
)!;

const path = `/blog/${post.slug}/`;

const h1 = "Pinterest Marketing: selbst machen oder auslagern?";

export const metadata: Metadata = {
  title: "Pinterest Marketing: selbst machen oder auslagern?",
  description:
    "Pinterest selbst betreuen oder abgeben? Ehrliche Kriterien für deine Entscheidung: Zeit, Kontinuität und Design-Ressourcen – und welcher Mittelweg sich bewährt.",
  alternates: {
    canonical: path,
  },
};

const dienstleisterKriterien = [
  {
    title: "Transparenz über das Vorgehen",
    text: "Du solltest jederzeit nachvollziehen können, was in deinem Account passiert – von der Keyword-Recherche über die Pin-Erstellung bis zur Auswertung. Wer sein Vorgehen nicht erklären mag, hat meist keins.",
  },
  {
    title: "Realistische Erwartungen",
    text: "Seriöse Anbieter sprechen offen darüber, dass organische Sichtbarkeit Monate braucht, und sichern dir keine Platzierungen oder festen Ergebnisse zu. Ehrlichkeit vor Vertragsabschluss ist das beste Zeichen für Ehrlichkeit danach.",
  },
  {
    title: "Verständnis für dein Geschäft",
    text: "Gute Pins entstehen aus dem Wissen, wonach deine Zielgruppe sucht und was dein Angebot besonders macht. Ein Dienstleister, der keine Fragen zu deinem Geschäft stellt, wird das schwer leisten können.",
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
  ],
};

export default function PinterestSelbstMachenOderAuslagern() {
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
          Ob du Pinterest selbst betreust oder abgibst, hängt weniger von
          deinem Können ab als von drei Fragen: Hast du dauerhaft Zeit für den
          Kanal? Kannst du Kontinuität halten? Und hast du Ressourcen für
          Design und Texte? Beide Wege können richtig sein – dieser Artikel
          hilft dir bei einer ehrlichen Entscheidung.
        </p>
      </section>

      {/* Alltag */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Was bedeutet Pinterest Marketing im Alltag wirklich?
          </h2>
          <p className="font-body mt-6 text-lg">
            Mehr als gelegentlich ein paar Bilder hochladen: Pinterest
            Marketing heißt, kontinuierlich frische Pins zu gestalten und zu
            veröffentlichen, Keywords zu pflegen, Saisonthemen Monate im
            Voraus zu planen und regelmäßig auszuwerten, was funktioniert.
            Nichts davon ist kompliziert – aber alles davon will Woche für
            Woche getan werden.
          </p>
          <p className="font-body mt-4 text-lg">
            Konkret sieht das so aus: neue Pin-Grafiken zu bestehenden und
            neuen Inhalten, Titel und Beschreibungen mit den Begriffen, nach
            denen deine Zielgruppe tatsächlich sucht, und ein Redaktionsplan,
            der der Saison vorausläuft. Ein Reiseveranstalter pinnt seine
            Sommerreisen nicht im Juni, sondern Monate vorher – dann, wenn
            seine Zielgruppe zu träumen und zu planen beginnt.
          </p>
          <p className="font-body mt-4 text-lg">
            Unterschätzt wird dabei selten die einzelne Aufgabe, sondern die
            Taktung.{" "}
            <strong className="text-heading">
              Pinterest belohnt Kontinuität:
            </strong>{" "}
            Ein Account, der regelmäßig bespielt wird, baut über Monate
            Schwung auf – ein Account, der drei Monate ruht, verliert ihn
            wieder. Genau an dieser Taktung entscheidet sich die Frage „selbst
            machen oder auslagern“, nicht am Können.
          </p>
        </div>
      </section>

      {/* Selbermachen */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Wann ist Selbermachen die richtige Wahl?
        </h2>
        <p className="font-body mt-6 text-lg">
          Selbermachen ist richtig, wenn du dauerhaft feste Zeit pro Woche
          einplanen kannst, dir Design und Texten liegen – oder du Freude
          daran hast, beides zu lernen – und du bereit bist, mehrere Monate
          ohne sichtbare Ergebnisse dranzubleiben. Wer diese drei Punkte
          ehrlich mit Ja beantwortet, braucht keine laufende Betreuung.
        </p>
        <p className="font-body mt-4 text-lg">
          Gerade bei einem überschaubaren Angebot mit wenigen Kernthemen ist
          der Selbst-Weg oft die naheliegende Wahl: Du kennst dein Angebot
          besser als jeder Dienstleister, und der Umfang bleibt so klein, dass
          er neben dem Tagesgeschäft Platz findet.
        </p>
        <p className="font-body mt-4 text-lg">
          Deutlich leichter wird dieser Weg mit einem sauberen Fundament. Die
          meisten Accounts, die nach kurzer Zeit einschlafen, scheitern nicht
          an fehlendem Fleiß, sondern an fehlender Struktur: Boards ohne
          erkennbare Logik, Pins ohne Keywords, kein roter Faden. Ein
          professioneller{" "}
          <Link
            href="/pinterest-account-aufbau/"
            className="text-gold-text hover:underline"
          >
            Pinterest Account Aufbau
          </Link>{" "}
          setzt genau diese Struktur einmal richtig auf – und ist als Projekt
          mit klarem Endpunkt angelegt: Keywordliste und Konzept bleiben dir
          danach als Arbeitsgrundlage, an der du dich beim Weiterführen in
          Eigenregie orientieren kannst.
        </p>
      </section>

      {/* Auslagern */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Wann lohnt sich das Auslagern?
          </h2>
          <p className="font-body mt-6 text-lg">
            Auslagern lohnt sich, wenn intern niemand die Zeit oder die Lust
            hat, den Kanal dauerhaft zu betreuen, Pinterest aber strategisch
            getragen werden soll – als planbarer Zubringer für deine Website
            statt als Nebenbei-Projekt. Je visueller dein Angebot und je mehr
            Bildmaterial du hast, desto mehr holt eine laufende Betreuung
            heraus.
          </p>
          <p className="font-body mt-4 text-lg">
            Der typische Fall sieht so aus: Das Team ist mit dem Tagesgeschäft
            ausgelastet, Pinterest steht seit Monaten auf der Liste, und
            trotz guter Vorsätze passiert – nichts. Für einen
            Reiseveranstalter mit vollen Bildarchiven und klarer Saisonlogik
            ist das besonders ärgerlich, denn genau dieses Material ist der
            Rohstoff, aus dem auf Pinterest Reichweite entsteht. Wie eine
            komplette laufende Betreuung aussieht – von der Recherche über
            die Pins bis zur monatlichen Auswertung –, zeigt die Seite zum{" "}
            <Link
              href="/pinterest-account-management/"
              className="text-gold-text hover:underline"
            >
              Pinterest Account Management
            </Link>
            .
          </p>
          <p className="font-body mt-4 text-lg">
            Ehrlich dazugesagt: Auslagern ist keine Abkürzung. Auch ein
            betreuter Account braucht Monate, um Sichtbarkeit aufzubauen, und
            du bleibst als Sparringspartner gefragt – für Bildmaterial,
            Themen und die Frage, welche Angebote gerade Priorität haben.
            Abgegeben wird die Arbeit, nicht die Verantwortung für das eigene
            Angebot.
          </p>
        </div>
      </section>

      {/* Mittelweg */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Gibt es einen Mittelweg?
        </h2>
        <p className="font-body mt-6 text-lg">
          Ja, und für viele ist er der klügste Start: erst Klarheit, dann
          Entscheidung. Statt direkt eine laufende Zusammenarbeit einzugehen,
          kannst du mit einer einmaligen Beratung oder einer
          Standortbestimmung beginnen – und danach fundiert entscheiden, ob
          du selbst weitermachst, abgibst oder Pinterest vorerst gar nicht
          startest.
        </p>
        <p className="font-body mt-4 text-lg">
          Stehst du noch ganz am Anfang, klärt ein{" "}
          <Link
            href="/pinterest-strategie-call/"
            className="text-gold-text hover:underline"
          >
            Pinterest Strategie Call
          </Link>{" "}
          deine Ausgangslage und liefert dir konkrete nächste Schritte – egal,
          wer sie am Ende umsetzt. Gibt es schon einen Account, der vor sich
          hin dümpelt, ist ein{" "}
          <Link
            href="/pinterest-audit/"
            className="text-gold-text hover:underline"
          >
            Pinterest Audit
          </Link>{" "}
          die passende Standortbestimmung: Du erfährst, was bereits
          funktioniert und wo Potenzial liegt, bevor du über mehr entscheidest.
        </p>
        <p className="font-body mt-4 text-lg">
          Und auch der Account-Aufbau aus dem Abschnitt oben ist genau
          genommen ein Mittelweg: Das Fundament entsteht professionell, das
          Weiterführen liegt bei dir. Für viele Unternehmen ist diese
          Kombination aus einmaliger Hilfe und eigener Routine der
          realistischste Weg.
        </p>
      </section>

      {/* Dienstleister erkennen */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Woran erkennst du einen guten Dienstleister?
          </h2>
          <p className="font-body mt-6 text-lg">
            An Transparenz und realistischen Erwartungen. Ein guter
            Dienstleister erklärt dir, was er konkret tut und warum, spricht
            offen darüber, dass organische Sichtbarkeit Zeit braucht, und
            verspricht keine Platzierungen oder festen Ergebnisse. Und er
            interessiert sich für dein Geschäft – nicht nur für deinen
            Pinterest-Account.
          </p>
          <p className="font-body mt-4 text-lg">
            Drei Kriterien helfen dir im Auswahlgespräch:
          </p>
          <ul className="font-body mt-4 list-disc space-y-2 pl-6 text-lg">
            {dienstleisterKriterien.map((item) => (
              <li key={item.title}>
                <strong className="text-heading">{item.title}:</strong>{" "}
                {item.text}
              </li>
            ))}
          </ul>
          <p className="font-body mt-6 text-lg">
            Diese Kriterien gelten unabhängig davon, mit wem du sprichst –
            miss daran jeden Anbieter, ausdrücklich auch molloy business.
          </p>
        </div>
      </section>

      {/* Entscheidung / CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Wie triffst du jetzt deine Entscheidung?
        </h2>
        <p className="font-body mt-6 text-lg">
          Frag dich zuerst, ob du dauerhaft Zeit und Freude für den Kanal
          hast – wenn ja, starte selbst, am besten auf einem sauberen
          Fundament. Wenn nein, aber Pinterest strategisch zu deinem Angebot
          passt, gib den Kanal ab. Und wenn du unsicher bist, hol dir erst
          eine ehrliche Einschätzung, bevor du dich festlegst.
        </p>
        <p className="font-body mt-4 text-lg">
          Beide Wege begleitet molloy business als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>
          : mit einem Aufbau, der dich zum Selbst-Weiterführen befähigt, oder
          mit einer Betreuung, die den Kanal komplett übernimmt. Wenn du deine
          Ausgangslage einmal gemeinsam sortieren möchtest, vereinbare ein{" "}
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            unverbindliches Erstgespräch
          </a>{" "}
          – du bekommst eine ehrliche Empfehlung, auch wenn sie „mach es
          selbst“ lautet.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
