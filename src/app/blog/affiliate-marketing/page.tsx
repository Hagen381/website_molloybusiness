import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import TableOfContents from "@/components/TableOfContents";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";
import imgDefinition from "@/assets/images/blog/affiliate-marketing/AffiliateMarketing-3.png";
import imgVorteile from "@/assets/images/blog/affiliate-marketing/AffiliateMarketing-5.png";
import imgNetwork from "@/assets/images/blog/affiliate-marketing/AffiliateMarketing-1.png";
import imgFazit from "@/assets/images/blog/affiliate-marketing/AffiliateMarketing-4.png";

const post = blogPosts.find((p) => p.slug === "affiliate-marketing")!;

const path = `/blog/${post.slug}/`;

const h1 = "Was ist eigentlich Affiliate Marketing?";

export const metadata: Metadata = {
  title: "Was ist eigentlich Affiliate Marketing?",
  description:
    "Was Affiliate Marketing ist, wie das Provisionsmodell funktioniert und was es vom Network Marketing unterscheidet – nüchtern erklärt, mit ehrlichen Beispielen.",
  alternates: {
    canonical: path,
  },
};

const imageSizes = "(min-width: 896px) 848px, calc(100vw - 48px)";

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

// Sprungziele des Inhaltsverzeichnisses — Reihenfolge und Wortlaut
// entsprechen den H2 dieser Seite.
const toc = [
  { id: "affiliate-marketing-eine-definition", label: "Affiliate Marketing – eine Definition" },
  { id: "wie-funktioniert-affiliate-marketing", label: "Wie funktioniert Affiliate Marketing?" },
  { id: "affiliate-marketing-vs-network-marketing", label: "Affiliate Marketing vs. Network Marketing" },
  { id: "wie-du-selbst-ein-affiliate-werden-kannst", label: "Wie du selbst ein Affiliate werden kannst" },
  { id: "wie-du-affiliate-links-effektiv-einsetzt", label: "Wie du Affiliate-Links effektiv einsetzt" },
  { id: "fazit", label: "Fazit" },
  { id: "lieber-anhoeren", label: "Lieber anhören?" },
] as const;

export default function AffiliateMarketing() {
  return (
    <>
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
          Im digitalen Zeitalter, in dem die Online-Wirtschaft boomt, gibt es
          zahlreiche Möglichkeiten, sich ein eigenes Geschäft aufzubauen.
          Eine der populärsten Methoden, um Einnahmen zu generieren, ist das
          Affiliate Marketing. Doch was genau ist Affiliate Marketing
          eigentlich? Was unterscheidet Affiliate Marketing von ähnlichen
          Modellen wie dem Network Marketing? In diesem Artikel werde ich dir
          diese beiden Begriffe erklären, die Vorteile und Funktionsweisen
          von Affiliate Marketing aufzeigen und dir konkrete Tipps geben, wie
          du selbst als Solopreneur oder Unternehmer in das Affiliate
          Marketing einsteigen kannst.
        </p>
      </section>

      {/* Definition */}
      <section className="article-column py-[30px]">
        <h2 id="affiliate-marketing-eine-definition" className="article-h2">
          Affiliate Marketing – eine Definition
        </h2>
        <p className="mt-6">
          Affiliate Marketing ist ein Provisionsmodell, bei dem ein
          Unternehmen Partner, sogenannte Affiliates, dafür bezahlt, dass
          sie dessen Produkte oder Dienstleistungen vermarkten. Die
          Bezahlung erfolgt in der Regel auf Provisionsbasis, das heißt,
          Affiliates erhalten einen bestimmten Prozentsatz des
          Verkaufspreises oder eine feste Vergütung für jede erfolgreiche
          Aktion – sei es ein Verkauf, eine Registrierung oder ein Klick.
          Das Unternehmen profitiert von zusätzlicher Reichweite, ohne im
          Vorfeld Geld investieren zu müssen, und der Affiliate erzielt
          Einnahmen, indem er Produkte oder Dienstleistungen bewirbt, ohne
          selbst etwas verkaufen zu müssen.
        </p>
        <p className="mt-4">
          Der Begriff „Affiliate“ stammt aus dem Englischen und bedeutet
          übersetzt „Partner“ oder „Angehöriger“. Affiliates werden so
          bezeichnet, weil sie eng mit dem Unternehmen, dessen Produkte sie
          vermarkten, verbunden sind, ohne direkt für dieses Unternehmen zu
          arbeiten. Sie agieren quasi als „Vertriebspartner“ oder
          „Empfehlungspartner“, indem sie die Reichweite des Unternehmens
          erweitern, ohne selbst die Produkte zu besitzen oder den
          Kundenservice abzuwickeln. Das Affiliate-System schafft also eine
          Partnerschaft zwischen dem Affiliate und dem Unternehmen,
          basierend auf einer gemeinsamen Zielsetzung: Verkäufe oder Leads
          zu generieren.
        </p>
        <p className="mt-4">
          <strong className="text-heading">Ein Beispiel:</strong> Du
          schreibst einen Blogbeitrag über die besten
          Pinterest-Marketing-Tools und verlinkst auf ein spezielles Tool –
          zum Beispiel Tailwind. Damit die Verlinkung dir zugeordnet werden
          kann, hast du dich zuvor beim Affiliate-Programm von Tailwind
          registriert. Du bekommst dann einen persönlichen Verkaufslink,
          den du in deinem Blogbeitrag hinter das Wort Tailwind legen
          kannst. Kauft ein Leser das Tool über diesen Link, erhältst du
          eine Provision. Du bist also ein Vermittler zwischen dem
          Unternehmen und dem Kunden.
        </p>
        <p className="mt-4">
          Und falls du dich schon immer mal gefragt hast, wie man Affiliate
          eigentlich ausspricht, höre dir den{" "}
          <a href="#audioblog" className="text-gold-text hover:underline">
            Audio Blog
          </a>{" "}
          zu diesem Artikel an.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgDefinition}
            alt="Grafik zum Thema Affiliate Marketing"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Funktionsweise */}
      <section className="article-column py-[30px]">
        <h2 id="wie-funktioniert-affiliate-marketing" className="article-h2">
          Wie funktioniert Affiliate Marketing?
        </h2>
        <p className="mt-6">
          Affiliate Marketing basiert auf einem einfachen Prinzip: Du
          bewirbst die Produkte oder Dienstleistungen eines Unternehmens über
          deinen eigenen Kanal – sei es ein Blog, Social Media, YouTube oder
          per E-Mail-Marketing. Sobald ein Leser oder Follower auf den von
          dir bereitgestellten Affiliate-Link klickt und eine Handlung
          ausführt (z.&nbsp;B. einen Kauf tätigt), wird dies im System des
          Unternehmens registriert. Dafür erhältst du eine Provision.
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            Die wichtigsten Schritte im Überblick:
          </strong>
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            Anmeldung: Du meldest dich bei einem Affiliate-Programm des
            Unternehmens an oder auf einer Affiliate-Plattform wie
            Digistore24 oder Elopage (es gibt natürlich unzählige mehr).
          </li>
          <li>
            Linkgenerierung: Nach der Annahme als Partner erhältst du
            spezielle Links, die eindeutig dir als Affiliate zugeordnet sind.
          </li>
          <li>
            Werbung: Du platzierst die Links in deinen Inhalten – Blogposts,
            Social-Media-Posts, Videos, etc.
          </li>
          <li>
            Vergütung: Sobald jemand über deinen Link eine definierte Aktion
            ausführt, erhältst du eine Provision.
          </li>
        </ul>

        <h3 className="article-h3 mt-10">
          Die Vorteile von Affiliate Marketing
        </h3>
        <p className="mt-4">
          Affiliate Marketing bietet eine Vielzahl an Vorteilen, besonders
          für Solopreneure und Kleinunternehmer, weil kein eigenes Produkt
          notwendig ist. Du musst nichts Eigenes entwickeln, sondern kannst
          die Produkte und Dienstleistungen anderer bewerben.
        </p>
        <p className="mt-4">
          Außerdem besteht ein geringes Risiko, da du selbst keine
          Investitionen tätigen musst und somit kaum finanzielle Risiken
          eingehst.
        </p>
        <p className="mt-4">
          Gut platzierte Affiliate-Links können über lange Zeiträume hinweg
          Einkünfte generieren – auch dann noch, wenn der Beitrag längst
          geschrieben ist. Ein Selbstläufer ist das allerdings nicht: Ohne
          Reichweite und ohne das Vertrauen deiner Leser bleibt es meist bei
          kleinen Beträgen. Dafür ist Affiliate Marketing skalierbar – du
          kannst mehrere Partnerprogramme gleichzeitig nutzen und damit deine
          Einnahmequellen diversifizieren.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgVorteile}
            alt="Grafik zu den Vorteilen von Affiliate Marketing"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Affiliate vs. Network Marketing */}
      <section className="article-column py-[30px]">
        <h2 id="affiliate-marketing-vs-network-marketing" className="article-h2">
          Affiliate Marketing vs. Network Marketing
        </h2>
        <p className="mt-6">
          Affiliate Marketing und Network Marketing werden oft miteinander
          verwechselt, da beide Modelle auf Provisionen basieren. Es gibt
          jedoch grundlegende Unterschiede.
        </p>
        <p className="mt-4">
          Network Marketing, auch bekannt als Multi-Level Marketing (MLM),
          ist ein Vertriebsmodell, bei dem unabhängige Vertreter Produkte
          oder Dienstleistungen direkt an Verbraucher verkaufen und
          gleichzeitig ein Netzwerk von weiteren Vertretern aufbauen. Hier
          sind einige wesentliche Aspekte:
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-6">
          <li>
            <strong className="text-heading">Direktvertrieb:</strong>{" "}
            Vertreter verkaufen Produkte oder Dienstleistungen direkt an
            Kunden, oft durch persönliche Kontakte, Online-Plattformen oder
            Veranstaltungen.
          </li>
          <li>
            <strong className="text-heading">Teamaufbau:</strong> Ein
            wichtiger Aspekt im Network Marketing ist der Aufbau eines
            eigenen Teams. Je mehr engagierte Partner der Vertreter in sein
            Netzwerk aufnimmt, desto mehr Potenzial für gemeinsames
            Wachstum und Erfolg entsteht.
          </li>
          <li>
            <strong className="text-heading">Provisionen:</strong>{" "}
            Vertreter verdienen Geld nicht nur durch den direkten Verkauf,
            sondern auch durch Provisionen auf die Verkäufe von Personen,
            die sie in ihr Netzwerk rekrutieren. Dies schafft eine
            hierarchische Struktur, in der jeder Vertreter von den
            Verkaufsaktivitäten seiner Teampartner profitiert. Der größte
            Teil der Provision stammt jedoch aus dem eigenen Kundenumsatz –
            die Provision für den Teamaufbau ist nur ein kleiner Zusatz.
          </li>
          <li>
            <strong className="text-heading">
              Produkte und Dienstleistungen:
            </strong>{" "}
            Network-Marketing-Unternehmen bieten oft spezifische Produkte
            oder Dienstleistungen an, die in der Regel in Nischenmärkten
            angesiedelt sind, wie Gesundheitsprodukte, Schönheitsartikel
            oder Haushaltswaren.
          </li>
          <li>
            <strong className="text-heading">Vertrieb und Marketing:</strong>{" "}
            Der Erfolg im Network Marketing hängt stark von den
            Verkaufsfähigkeiten, dem persönlichen Netzwerk und der
            Fähigkeit ab, neue Vertreter zu rekrutieren und zu motivieren.
          </li>
        </ol>
        <p className="mt-6">
          Oft steht Network Marketing auch in der Kritik, weil es eine
          pyramidenförmige Vertriebsstruktur forciert. Und manchmal muss
          der Vertreter auch zunächst in die Produkte investieren, um
          einsteigen zu können.
        </p>
        <p className="mt-4">
          Doch die Branche wandelt sich und so gibt es immer mehr
          Unternehmen, die ihren Vertriebsteams eine ganze Menge bieten.
          Nicht selten haben Network-Partner eine Reihe kostenfreier
          Coachings, Vertriebs-Events und Unterstützung bei
          Marketingaktivitäten.
        </p>
        <p className="mt-4">
          Wohingegen man beim Affiliate Marketing oft auf sich allein
          gestellt ist. Vor allem wenn man Plattformen wie Digistore24
          nutzt, kennt das Unternehmen in der Regel seine Affiliate-Partner
          gar nicht. Das heißt, jeder kann für jedes Produkt oder jede
          Dienstleistung Affiliate sein. Beim Network Marketing liegt der
          Fokus viel mehr auf der tatsächlichen Empfehlung dieser einen
          Person.
        </p>
        <p className="mt-4">
          <strong className="text-heading">Beispiel:</strong> Meine
          Freundin Nathalie nutzt Kosmetikprodukte der Firma Ringana. Weil
          sie damit so strahlend schön aussieht und ich ihrem Urteil
          vertraue, fange ich auch an, die Produkte zu nutzen, die sie
          vertreibt, und sie verdient an meinen Einkäufen. Wenn ich dann
          selbst mit einsteigen will, komme ich in Nathalies
          Vertriebsteam. Sie verdient dann zusätzlich an den Produkten, die
          ich meinen Freunden weiterempfehle und verkaufe. Dabei wird die
          Provision für den Teamaufbau nicht nur für die bloße Empfehlung
          gezahlt, sondern auch für die Einarbeitung und kontinuierliche
          Betreuung der Teampartner. So hat Nathalie beispielsweise ein
          eigenes Workbook für ihr Team erstellt und stellt praktische
          Templates für die Bewerbung zur Verfügung. Deshalb ist es enorm
          wichtig, sich den richtigen Mentor auszusuchen, der einen aktiv
          unterstützt. Dennoch gilt: Der größte Teil deines Einkommens
          stammt aus deinem eigenen Kundenumsatz – die Provision für den
          Teamaufbau ist nur ein kleiner Zusatz. Der persönliche Kontakt im
          Network Marketing ist maßgeblicher als im Affiliate Marketing.
        </p>
        <p className="mt-4">
          <em>
            (Kleine Randnotiz: Ich bin kein Ringana-Partner und vertreibe
            auch die Produkte nicht. Es diente nur als Beispiel, weil ich
            durch meine Freundin tiefe Einblicke in den Prozess erhalten
            habe.)
          </em>
        </p>
        <p className="mt-4">
          Beide Vertriebsstrategien haben gemeinsam, dass sich der Endpreis
          für den Kunden nicht ändert. Kauft jemand über einen Affiliate-
          Link ein Produkt, dann bezahlt er nicht mehr, sondern das
          Unternehmen verdient sozusagen etwas weniger daran, weil es vom
          Verkaufspreis die Provision an den Affiliate zahlen muss.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgNetwork}
            alt="Grafik zum Thema Network Marketing"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Selbst Affiliate werden */}
      <section className="article-column py-[30px]">
        <h2 id="wie-du-selbst-ein-affiliate-werden-kannst" className="article-h2">
          Wie du selbst ein Affiliate werden kannst
        </h2>
        <p className="mt-6">
          Wenn du nun selbst Affiliate-Marketer werden möchtest, empfehle ich
          dir, eine passende Nische zu finden. Wähle Produkte oder
          Dienstleistungen, die zu dir und deinem Business passen. Bewirb
          Produkte, die du selbst nutzt und von denen du überzeugt bist.
        </p>
        <p className="mt-4">
          Setze auf Qualität statt Quantität. Vermeide es, wahllos viele
          Programme zu bewerben, und konzentriere dich auf einige wenige
          Partner, deren Produkte wirklich zu deiner Zielgruppe passen. Der
          Erfolg im Affiliate Marketing hängt stark von deiner
          Glaubwürdigkeit ab. Wenn deine Leser dir vertrauen, folgen sie eher
          deinen Empfehlungen.
        </p>
        <p className="mt-4">
          So bin ich damals auch selbst vorgegangen: Ich war zeitweise bei
          einer Handvoll Programmen als Affiliate-Partnerin registriert – für
          Tools, die ich ohnehin genutzt habe, und für Kurse, die eine Lücke
          in meinem eigenen Angebot geschlossen haben. Groß beworben habe ich
          diese Partnerschaften nie; die Empfehlungen liefen nebenbei.
        </p>
      </section>

      {/* Links einsetzen */}
      <section className="article-column py-[30px]">
        <h2 id="wie-du-affiliate-links-effektiv-einsetzt" className="article-h2">
          Wie du Affiliate-Links effektiv einsetzt
        </h2>
        <p className="mt-6">
          Du siehst, es gibt viele Möglichkeiten, wie und wo du an
          Affiliate-Links kommst. Du solltest sie dann sinnvoll und gut
          sichtbar in deinen Texten platzieren. Es ist wichtig, dass die
          Links einen echten Mehrwert für den Leser bieten und nicht nur
          wahllos eingestreut werden. Transparenz ist hier entscheidend:
          Wecke das Vertrauen deiner Leser, indem du klar kommunizierst,
          dass du für jeden Verkauf eine Provision erhältst.
        </p>
        <p className="mt-4">
          Das hast du bestimmt schon mal gesehen, wenn an manchen Links ein
          Sternchen ist und im Sternchentext steht: Dies ist ein
          Affiliate-Link. (In diesem Artikel gibt es übrigens keine – hier
          geht es nur um die Erklärung.)
        </p>
      </section>

      {/* Fazit + CTA */}
      <section className="article-column py-[30px]">
        <h2 id="fazit" className="article-h2">
          Fazit
        </h2>
        <p className="mt-6">
          Affiliate Marketing bietet dir als Solopreneur eine Möglichkeit,
          ein zusätzliches Einkommen zu generieren, ohne eigene Produkte
          entwickeln zu müssen. Mit den richtigen Programmen, einer
          authentischen Herangehensweise und einer klugen Marketingstrategie
          kannst du dir langfristig ein solides Zusatzeinkommen aufbauen –
          reich wirst du damit in den meisten Fällen aber nicht: Ich habe
          bisher 574,50 Euro damit verdient. Probiere es einfach mal aus!
          Aber nicht vergessen: Die Einnahmen sind zu versteuern. Also lade
          dir die entsprechenden Rechnungen auf den jeweiligen Plattformen
          runter, wenn du Umsatz gemacht hast.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgFazit}
            alt="Grafik mit dem Fazit zum Thema Affiliate Marketing"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>

        <p className="mt-10">
          Und wenn du lieber auf nachhaltige Sichtbarkeit statt auf
          Provisionen setzt: Als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          sorgt molloy business dafür, dass deine Inhalte dauerhaft gefunden
          werden – vereinbare gern ein{" "}
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            unverbindliches Erstgespräch
          </a>
          .
        </p>
      </section>

      {/* Audio */}
      <section className="article-column py-[30px]" id="audioblog">
        <h2 id="lieber-anhoeren" className="article-h2">
          Lieber anhören?
        </h2>
        <p className="mt-6 text-center">
          Keine Zeit zum Lesen? Hier kannst du dir den Artikel auch anhören:{" "}
          <a
            href="https://youtu.be/v-7vzgEUqOk"
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
