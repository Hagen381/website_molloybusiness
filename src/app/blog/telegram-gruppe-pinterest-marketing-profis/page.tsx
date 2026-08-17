import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";
import imgDienstleister from "@/assets/images/blog/telegram-gruppe-pinterest-marketing-profis/pinterest-marketing-profis-3.jpg";
import imgProfis from "@/assets/images/blog/telegram-gruppe-pinterest-marketing-profis/pinterest-marketing-profis-4.jpg";
import imgSprechstunde from "@/assets/images/blog/telegram-gruppe-pinterest-marketing-profis/pinterest-marketing-profis-6.jpg";
import imgGruppe from "@/assets/images/blog/telegram-gruppe-pinterest-marketing-profis/pinterest-marketing-profis-2.jpg";

const post = blogPosts.find(
  (p) => p.slug === "telegram-gruppe-pinterest-marketing-profis",
)!;

const path = `/blog/${post.slug}/`;

const h1 =
  "Pinterest Marketing Profis: Telegram-Gruppe für erfahrene Pinterest-Dienstleister";

export const metadata: Metadata = {
  title: "Telegram-Gruppe für Pinterest Marketing Profis",
  description:
    "Viele Communities richten sich an Pinterest-Einsteiger. Die Telegram-Gruppe „Pinterest Marketing Profis“ vernetzt erfahrene Dienstleister zum Austausch.",
  alternates: {
    canonical: path,
  },
};

const imageSizes = "(min-width: 896px) 848px, calc(100vw - 48px)";

const webinarGrundlagen = [
  "Wie erstellt man einen Pin?",
  "Wie funktioniert die Keyword-Recherche?",
  "Was ist Pinterest überhaupt?",
  "Warum sollte man Pinterest nutzen?",
];

const profiFragen = [
  "Warum entwickelt sich ein Kundenaccount trotz bewährter Strategie plötzlich anders als erwartet?",
  "Welche Auswirkungen haben aktuelle Pinterest-Änderungen auf bestimmte Branchen?",
  "Welche Erfahrungen machen andere mit Pinterest Ads?",
  "Welche Prozesse haben sich in der Kundenarbeit bewährt?",
  "Wie gehen andere mit Sonderfällen oder technischen Problemen um?",
  "Welche Entwicklungen beobachten andere Pinterest-Dienstleister aktuell?",
];

const gruppenThemen = [
  "Erfahrungen aus Kundenprojekten",
  "aktuelle Entwicklungen auf Pinterest",
  "Pinterest Ads",
  "Strategien und Prozesse",
  "technische Herausforderungen",
  "Tools und Workflows",
  "Empfehlungen und Ressourcen",
];

const sprechstundeInhalte = [
  "60 Minuten persönlicher Austausch",
  "Feedback zu Accounts, Strategien oder Kundenprojekten",
  "Gemeinsame Analyse von Herausforderungen",
  "Raum für fachliches Sparring auf Augenhöhe",
];

const sprechstundeZielgruppe = [
  "die auf eine Frage innerhalb der Gruppe bisher keine passende Antwort erhalten haben,",
  "die ein Thema vertraulich besprechen möchten,",
  "die sich eine zusätzliche fachliche Perspektive wünschen,",
  "oder die zu einer konkreten Herausforderung gesammelt und pointiert Rat suchen.",
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
      dateModified: "2026-08-14",
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

// Sprungziele des Inhaltsverzeichnisses — Reihenfolge und Wortlaut
// entsprechen den H2 dieser Seite.
const toc = [
  { id: "warum-ich-eine-telegram-gruppe-fuer-erfahrene-pinterest-dienstleister-gegruendet-habe", label: "Warum ich eine Telegram-Gruppe für erfahrene Pinterest-Dienstleister gegründet habe" },
  { id: "wer-schon-laenger-mit-pinterest-arbeitet-hat-andere-fragen", label: "Wer schon länger mit Pinterest arbeitet, hat andere Fragen" },
  { id: "deshalb-gibt-es-jetzt-die-gruppe-pinterest-marketing-profis", label: "Deshalb gibt es jetzt die Gruppe „Pinterest Marketing Profis“" },
  { id: "die-pinterest-sprechstunde", label: "Die Pinterest-Sprechstunde" },
  { id: "du-moechtest-bei-den-pinterest-marketing-profis-dabei-sein", label: "Du möchtest bei den Pinterest Marketing Profis dabei sein?" },
  { id: "lieber-anhoeren", label: "Lieber anhören?" },
] as const;

export default function TelegramGruppePinterestMarketingProfis() {
  return (
    <>
      <Breadcrumb pageName={post.title} parent={{ label: "Blog", href: "/blog/" }} />

      {/* Intro */}
      <section className="article-column pt-10 pb-[30px]">
        <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
          Blog
        </p>
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          {h1}
        </h1>
        <p className="font-body mt-3 text-sm">
          Veröffentlicht am {formatDateDe(post.date)}
        </p>

        <TableOfContents items={toc} />
        <p className="mt-6">
          Die Telegram-Gruppe „Pinterest Marketing Profis“ ist ein
          kostenfreier Raum für Menschen, die Pinterest bereits professionell
          einsetzen – für den fachlichen Austausch jenseits der
          Grundlagenfragen. Warum ich sie gegründet habe, liest du in diesem
          Artikel.
        </p>
      </section>

      {/* Warum gegründet */}
      <section className="article-column py-[30px]">
        <h2 id="warum-ich-eine-telegram-gruppe-fuer-erfahrene-pinterest-dienstleister-gegruendet-habe" className="article-h2">
          Warum ich eine Telegram-Gruppe für erfahrene Pinterest-Dienstleister
          gegründet habe
        </h2>
        <p className="mt-6">
          Vor Kurzem habe ich mich für ein Webinar angemeldet. Wie lassen
          sich{" "}
          <strong className="text-heading">
            Workflows im Pinterest-Marketing
          </strong>{" "}
          weiter <strong className="text-heading">optimieren</strong> und
          vereinfachen? Das Thema klang vielversprechend.
        </p>
        <p className="mt-4">
          Genau die Art von Thema, die mich nach mehreren Jahren
          Berufserfahrung interessiert. Schließlich geht es irgendwann nicht
          mehr darum, wie man einen Pin erstellt oder wo man Keywords
          recherchiert, sondern um{" "}
          <strong className="text-heading">effizientere Prozesse,</strong>{" "}
          bessere Ergebnisse und den Umgang mit den Herausforderungen, die im
          Alltag mit Kundenprojekten entstehen.
        </p>
        <p className="mt-4">
          Umso ernüchternder war es, als das Webinar begann. Denn nach kurzer
          Zeit ging es wieder um die Grundlagen:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {webinarGrundlagen.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6">
          Alles wichtige Themen – aber eben nicht für Menschen, die{" "}
          <strong className="text-heading">
            Pinterest bereits seit Jahren professionell einsetzen.
          </strong>{" "}
          In diesem Moment wurde mir wieder bewusst, wie wenige{" "}
          <strong className="text-heading">Angebote</strong> es eigentlich
          für{" "}
          <strong className="text-heading">
            erfahrene Pinterest-Dienstleister
          </strong>{" "}
          gibt.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgDienstleister}
            alt="Pinterest-Dienstleister bei der Arbeit am Laptop"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Andere Fragen */}
      <section className="article-column py-[30px]">
        <h2 id="wer-schon-laenger-mit-pinterest-arbeitet-hat-andere-fragen" className="article-h2">
          Wer schon länger mit Pinterest arbeitet, hat andere Fragen
        </h2>
        <p className="mt-6">
          Ich arbeite inzwischen seit mehreren Jahren im Pinterest-Marketing
          und trotzdem gibt es regelmäßig Situationen, in denen ich mir den{" "}
          <strong className="text-heading">Austausch</strong> mit anderen
          erfahrenen <strong className="text-heading">Pinterest-Profis</strong>{" "}
          wünsche. Klar sollte ich nach so langer Zeit viel über Pinterest und
          die Workflows wissen. Dennoch tauchen im{" "}
          <strong className="text-heading">Daily Business</strong> immer mal
          wieder Fragen auf. Zum Beispiel:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {profiFragen.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6">
          Für viele dieser Fragen gibt es zwar{" "}
          <strong className="text-heading">theoretische Anleitungen,</strong>{" "}
          aber in der Praxis sieht oft vieles ganz anders aus. Zum Teil habe
          ich sogar gemerkt, dass selbst{" "}
          <strong className="text-heading">Pinterest-Mitarbeiter</strong> oft
          nur in der Theorie wissen, wie es geht, aber keine Ahnung haben, wie
          man es in der Praxis umsetzt. Was hilft, ist der{" "}
          <strong className="text-heading">Austausch</strong> mit Menschen, die
          ähnliche Erfahrungen gemacht haben. Und zwar live im Kundenaccount.
        </p>

        <h3 className="article-h3 mt-10">
          Es gibt viele Communities für Einsteiger – aber nur wenige für Profis
        </h3>
        <p className="mt-4">
          Bitte nicht falsch verstehen:{" "}
          <strong className="text-heading">
            Anfängergruppen haben ihre Berechtigung.
          </strong>{" "}
          Jeder von uns hat irgendwann die ersten Pins erstellt, die erste
          Keyword-Recherche durchgeführt und den ersten Kunden betreut. Aber je
          länger man in einem{" "}
          <strong className="text-heading">Fachgebiet</strong> arbeitet, desto
          weniger sucht man Antworten auf Grundlagenfragen. Und desto häufiger
          sucht man Menschen, die ähnliche Herausforderungen erleben.
        </p>
        <p className="mt-4">
          Menschen, die verstehen, warum man sich Gedanken über saisonale
          Reichweitenveränderungen, technische Besonderheiten,{" "}
          <strong className="text-heading">Kundenstrategien</strong> oder neue
          Pinterest-Funktionen macht. Genau dieser Austausch fehlt aus meiner
          Sicht häufig.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgProfis}
            alt="Austausch zwischen erfahrenen Pinterest-Profis"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Die Gruppe */}
      <section className="article-column py-[30px]">
        <h2 id="deshalb-gibt-es-jetzt-die-gruppe-pinterest-marketing-profis" className="article-h2">
          Deshalb gibt es jetzt die Gruppe „Pinterest Marketing Profis“
        </h2>
        <p className="mt-6">
          Die Telegram-Gruppe „Pinterest Marketing Profis“ soll genau diese
          Lücke schließen. Sie ist weder ein Kurs, noch eine Weiterbildung.
          Und vor allem{" "}
          <strong className="text-heading">
            keine tägliche Content-Beschallung.
          </strong>{" "}
          Stattdessen ein{" "}
          <strong className="text-heading">kostenfreier Raum</strong> für
          Menschen, die Pinterest bereits professionell einsetzen und sich
          mit anderen{" "}
          <strong className="text-heading">Pinterest-Dienstleistern</strong>{" "}
          austauschen möchten. Dabei geht es unter anderem um:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {gruppenThemen.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6">
          Kurz gesagt: Alles, was für Menschen interessant ist, die{" "}
          <strong className="text-heading">
            Pinterest nicht erst lernen möchten,
          </strong>{" "}
          sondern bereits damit arbeiten.
        </p>

        <h3 className="article-h3 mt-10">
          Warum ich glaube, dass ein solcher Austausch wichtig ist
        </h3>
        <p className="mt-4">
          Viele Pinterest Marketing Profis haben irgendwann aufgehört,{" "}
          <strong className="text-heading">
            Kundenaccounts zu betreuen,
          </strong>{" "}
          und ihr Geschäftsmodell darauf umgestellt, anderen Menschen
          Pinterest beizubringen. Wer dann noch auf digitale
          Selbstlerner-Kurse setzt und ein laufendes E-Mail-Marketing hat,
          der hat vermutlich{" "}
          <strong className="text-heading">
            weniger Arbeitsaufwand und mehr Outcome,
          </strong>{" "}
          als jene, die viel Zeit und Mühe in die{" "}
          <Link
            href="/pinterest-account-aufbau/"
            className="text-gold-text hover:underline"
          >
            Betreuung eines Kundenaccounts
          </Link>{" "}
          stecken.
        </p>
        <p className="mt-4">
          Aber wie überall dreht sich das{" "}
          <strong className="text-heading">Rad der Veränderung</strong> sehr
          schnell – auch auf Pinterest. Wer also{" "}
          <strong className="text-heading">wenig praktisch arbeitet,</strong>{" "}
          kann schnell den Anschluss an die echten Fälle verlieren.
        </p>
        <p className="mt-4">
          Je länger ich selbstständig bin, desto häufiger stelle ich fest:
          Die wertvollsten Erkenntnisse entstehen oft nicht in Kursen. Sie
          entstehen in Gesprächen. In ehrlichen Erfahrungsberichten. In{" "}
          <strong className="text-heading">
            Diskussionen über Dinge, die nicht nach Lehrbuch laufen.
          </strong>{" "}
          Und manchmal reicht schon die Erkenntnis, dass andere dieselbe
          Beobachtung gemacht haben wie man selbst.
        </p>
        <p className="mt-4">
          Genau das wünsche ich mir für diese Gruppe. Dass{" "}
          <strong className="text-heading">Erfahrungsberichte</strong> uns
          helfen, auf dem aktuellen Stand zu bleiben und{" "}
          <strong className="text-heading">
            die eigene Arbeit zu optimieren.
          </strong>{" "}
          Egal ob für die Kunden oder die Updates für die eigenen
          Pinterest-Kurse.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgSprechstunde}
            alt="Persönlicher Austausch in der Pinterest-Sprechstunde"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Sprechstunde */}
      <section className="article-column py-[30px]">
        <h2 id="die-pinterest-sprechstunde" className="article-h2">
          Die Pinterest-Sprechstunde
        </h2>
        <p className="mt-6">
          Manche Themen möchte man nicht öffentlich in einer Gruppe
          diskutieren. Vielleicht geht es um einen konkreten Kundenfall.
          Vielleicht um eine strategische Entscheidung. Oder vielleicht wünscht
          man sich einfach eine{" "}
          <strong className="text-heading">zweite Meinung</strong> von
          jemandem, der ebenfalls seit Jahren mit Pinterest arbeitet. Deshalb
          biete ich für Mitglieder der Gruppe zusätzlich eine
          Pinterest-Sprechstunde an.
        </p>
        <p className="mt-4">
          <strong className="text-heading">Das erwartet dich:</strong>
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {sprechstundeInhalte.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className="article-h3 mt-10">
          Für wen ist die Pinterest-Sprechstunde gedacht?
        </h3>
        <p className="mt-4">Für Mitglieder der Gruppe,</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {sprechstundeZielgruppe.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6">
          Selbstverständlich ist die Buchung der Sprechstunde vollkommen
          losgelöst von der kostenfreien Mitgliedschaft in der Telegram-Gruppe.
          Sie ist keine Voraussetzung, um sich in der Gruppe frei entfalten zu
          können.
        </p>
      </section>

      {/* CTA */}
      <section className="article-column py-[30px]">
        <h2 id="du-moechtest-bei-den-pinterest-marketing-profis-dabei-sein" className="article-h2">
          Du möchtest bei den Pinterest Marketing Profis dabei sein?
        </h2>
        <p className="mt-6">
          Wenn du Pinterest bereits professionell für Kunden oder das eigene
          Unternehmen einsetzt und Lust auf einen fachlichen Austausch mit
          anderen Pinterest-Profis hast, freue ich mich auf dich. Hier geht
          es zur Telegram-Gruppe:{" "}
          <a
            href="https://t.me/+D-vniA2-pPI2NWRi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            Pinterest Marketing Profis
          </a>
          . Vielleicht entsteht daraus genau der Austausch, den ich selbst
          nach dem Webinar vergeblich gesucht habe.
        </p>
        <p className="mt-4">
          Und falls du gerade erst mit Pinterest startest: Wie eine{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          wie molloy business Unternehmen unterstützt, zeigt die Startseite.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgGruppe}
            alt="Telegram-Gruppe Pinterest Marketing Profis auf dem Smartphone"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Audio */}
      <section className="article-column py-[30px]">
        <h2 id="lieber-anhoeren" className="article-h2">
          Lieber anhören?
        </h2>
        <p className="mt-6 text-center">
          Keine Zeit zum Lesen? Hier kannst du dir den Artikel auch anhören:{" "}
          <a
            href="https://youtu.be/RE2Z6YCrWzU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            Blogartikel auf YouTube anhören
          </a>
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
