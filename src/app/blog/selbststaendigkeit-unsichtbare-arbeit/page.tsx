import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import TableOfContents from "@/components/TableOfContents";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";
import imgUnsichtbar from "@/assets/images/blog/selbststaendigkeit-unsichtbare-arbeit/Selbststaendigkeit-6.png";
import imgHobby from "@/assets/images/blog/selbststaendigkeit-unsichtbare-arbeit/Selbststaendigkeit-5.png";
import imgArbeitGeld from "@/assets/images/blog/selbststaendigkeit-unsichtbare-arbeit/Selbststaendigkeit-2.png";
import imgMindset from "@/assets/images/blog/selbststaendigkeit-unsichtbare-arbeit/Selbststaendigkeit-3.png";
import imgFazit from "@/assets/images/blog/selbststaendigkeit-unsichtbare-arbeit/Selbststaendigkeit-4.png";

const post = blogPosts.find(
  (p) => p.slug === "selbststaendigkeit-unsichtbare-arbeit"
)!;

const path = `/blog/${post.slug}/`;

const h1 =
  "Warum sich Selbstständigkeit oft nicht nach Arbeit anfühlt – und trotzdem Arbeit ist";

export const metadata: Metadata = {
  title: "Warum sich Selbstständigkeit nicht nach Arbeit anfühlt",
  description:
    "Aufbauen, lernen, planen – und am Monatsende kein Gehalt. Warum die unsichtbare Arbeit am Anfang der Selbstständigkeit zählt und was der erste Kunde verändert.",
  alternates: {
    canonical: path,
  },
};

const imageSizes = "(min-width: 896px) 848px, calc(100vw - 48px)";

const selbstzweifel = [
  "„Wenn ich kein Geld bekomme, ist das dann überhaupt Arbeit?“",
  "„Wenn ich kein Ergebnis sehe, war es dann überhaupt produktiv?“",
  "„Kann ich mir erlauben, so viel Zeit in etwas zu stecken, das (noch) nichts einbringt?“",
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

// Sprungziele des Inhaltsverzeichnisses — Reihenfolge und Wortlaut
// entsprechen den H2 dieser Seite.
const toc = [
  { id: "die-unsichtbare-arbeit-in-der-selbststaendigkeit", label: "Die unsichtbare Arbeit in der Selbstständigkeit" },
  { id: "die-fehlende-bestaetigung-niemand-sagt-dir-ob-du-gut-bist", label: "Die fehlende Bestätigung: Niemand sagt dir, ob du „gut“ bist" },
  { id: "der-hobby-vorwurf-von-aussen-und-von-innen", label: "Der „Hobby-Vorwurf“ – von außen und von innen" },
  { id: "das-richtige-mindset", label: "Das richtige Mindset" },
  { id: "der-erste-auftrag-der-moment-der-alles-veraendert", label: "Der erste Auftrag: Der Moment, der alles verändert" },
  { id: "fazit-deine-arbeit-ist-echt", label: "Fazit: Deine Arbeit ist echt" },
  { id: "lieber-anhoeren", label: "Lieber anhören?" },
] as const;

export default function SelbststaendigkeitUnsichtbareArbeit() {
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
          Die ersten Wochen oder Monate einer Selbstständigkeit sind für viele
          ein emotionaler Drahtseilakt. Auf der einen Seite arbeitet man
          gefühlt rund um die Uhr: Man recherchiert, lernt, plant, baut auf.
          Auf der anderen Seite kommt am Monatsende kein Gehalt. Kein
          sichtbares Ergebnis. Kein finanzieller Erfolg.
        </p>
        <p className="mt-4">
          Und dann schleicht sich der Gedanke ein: „Zählt das überhaupt als
          Arbeit?“
        </p>
        <p className="mt-4">
          In diesem Artikel schauen wir genauer hin: Warum fühlt sich diese
          Anfangszeit oft so seltsam an? Warum zweifelt man an sich selbst,
          obwohl man so viel tut? Und wie verändert sich alles, wenn der erste
          Kunde kommt?
        </p>
      </section>

      {/* Unsichtbare Arbeit */}
      <section className="article-column py-[30px]">
        <h2 id="die-unsichtbare-arbeit-in-der-selbststaendigkeit" className="article-h2">
          Die unsichtbare Arbeit in der Selbstständigkeit
        </h2>
        <p className="mt-6">
          Wer sich <strong className="text-heading">selbstständig</strong>{" "}
          macht, ist am Anfang vor allem eins: selbst und ständig
          beschäftigt.
        </p>
        <p className="mt-4">
          Man schreibt Angebote, bastelt an der Website, recherchiert
          rechtliche Grundlagen,{" "}
          <strong className="text-heading">meldet ein Gewerbe an,</strong>{" "}
          liest sich in steuerliche Pflichten ein. Man überlegt, wie das
          eigene Angebot aussehen soll, feilt an Formulierungen, gestaltet
          Logos, entwickelt Preislisten.
        </p>
        <p className="mt-4">
          Andere bauen sich einen Instagram-Account auf, starten einen Blog,
          lernen Canva, schreiben die ersten Newsletter, schauen{" "}
          <strong className="text-heading">YouTube-Tutorials</strong> zu
          Marketing, Akquise oder Buchhaltung.
        </p>
        <p className="mt-4">
          Die Aufgaben sind vielfältig – aber sie haben eines gemeinsam:
          Kein Kunde sieht sie. Kein Geld fließt dafür.{" "}
          <strong className="text-heading">Kein Feedback</strong> kommt.
        </p>
        <p className="mt-4">
          Und genau das macht diese Arbeit so schwer greifbar. Denn sie ist
          da. Sie füllt Tage, manchmal Nächte. Aber sie hat keine sofort
          sichtbare Wirkung.
        </p>

        <h3 className="article-h3 mt-10">
          Arbeit ohne Bezahlung: Ein ungewohntes Konzept
        </h3>
        <p className="mt-4">
          Wir sind geprägt von einer Gesellschaft, in der Arbeit und
          Bezahlung eng verknüpft sind. Schon in der Schule lernen wir:
          Leistung wird bewertet. Später:{" "}
          <strong className="text-heading">Arbeit wird bezahlt.</strong>{" "}
          Jede Stunde, die wir einem Arbeitgeber geben, wird entlohnt –
          egal, ob produktiv oder nicht.
        </p>
        <p className="mt-4">
          In der Selbstständigkeit verschiebt sich diese Logik. Plötzlich
          arbeitet man nicht „gegen Geld“, sondern für Aufbau, Sichtbarkeit,
          Struktur, Markenbekanntheit.{" "}
          <strong className="text-heading">Das Geld kommt erst später</strong>{" "}
          – im besten Fall.
        </p>
        <p className="mt-4">
          Diese Entkopplung von Arbeit und Geld ist für viele eine der
          größten mentalen Hürden. Sie führt zu Selbstzweifeln:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {selbstzweifel.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgUnsichtbar}
            alt="Selbstständigkeit"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Fehlende Bestätigung */}
      <section className="article-column py-[30px]">
        <h2 id="die-fehlende-bestaetigung-niemand-sagt-dir-ob-du-gut-bist" className="article-h2">
          Die fehlende Bestätigung: Niemand sagt dir, ob du „gut“ bist
        </h2>
        <p className="mt-6">
          In Angestelltenverhältnissen gibt es Rückmeldung: von Chefs,
          Kollegen, Kunden. Man weiß, woran man ist. Man bekommt Lob, Kritik,
          Korrektur.
        </p>
        <p className="mt-4">
          In der Selbstständigkeit – vor allem in der Anfangsphase – gibt es
          niemanden, der dir auf die Schulter klopft.{" "}
          <strong className="text-heading">
            Niemand sagt dir: „Du machst das gut.“
          </strong>{" "}
          Niemand bewertet deine Ideen, deine Texte, deine Preise. Im
          Gegenteil: Oft hat man sogar noch damit zu kämpfen, dass Freunde und
          Familie einen belächeln und das eigene Tun nicht als vollwertigen
          Job ansehen.
        </p>
        <p className="mt-4">
          Man ist meistens mit allem{" "}
          <strong className="text-heading">allein</strong> und muss selbst
          entscheiden, ob etwas „gut genug“ ist. Ob es fertig ist. Ob es raus
          in die Welt darf.
        </p>
        <p className="mt-4">
          Und das ist verdammt ungewohnt. Weil wir es gewohnt sind, dass
          jemand anders die <strong className="text-heading">Qualität</strong>{" "}
          beurteilt. Dass jemand „Ja“ sagt, bevor wir starten. Doch plötzlich
          muss man sich dieses „Ja“ selbst geben.
        </p>
      </section>

      {/* Hobby-Vorwurf */}
      <section className="article-column py-[30px]">
        <h2 id="der-hobby-vorwurf-von-aussen-und-von-innen" className="article-h2">
          Der „Hobby-Vorwurf“ – von außen und von innen
        </h2>
        <p className="mt-6">
          Der Tag ist voll – und trotzdem hat man abends das Gefühl, „nichts
          geschafft“ zu haben.
        </p>
        <p className="mt-4">
          Man springt von Aufgabe zu Aufgabe. Man probiert, verwirft,
          recherchiert neu. Man verliert sich in Details. Und am Ende bleibt
          oft ein Gefühl der Leere: „Wofür das alles?“
        </p>
        <p className="mt-4">
          Hinzu kommt der gesellschaftliche Blick.
        </p>
        <p className="mt-4">
          <strong className="text-heading">Freunde fragen:</strong> „Und…
          hast du schon Kunden?“
        </p>
        <p className="mt-2">
          <strong className="text-heading">Die Familie fragt:</strong> „Und…
          verdient man damit was?“
        </p>
        <p className="mt-2">
          <strong className="text-heading">Bekannte sagen:</strong> „Ach, so
          ein kleines Projekt nebenher?“
        </p>
        <p className="mt-2">
          <strong className="text-heading">Nachbarn fragen:</strong> „Und
          wann suchst du dir wieder einen richtigen Job?“
        </p>
        <p className="mt-4">
          Diese Sätze treffen. Auch, wenn sie nicht böse gemeint sind. Sie
          verstärken den eigenen Zweifel:
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            „Vielleicht ist das ja wirklich nur ein Hobby.“
          </strong>
        </p>
        <p className="mt-4">
          Besonders hart ist es, wenn man sich selbst dabei ertappt, so zu
          denken. Wenn man sich fragt, ob man sich nur etwas vormacht.
        </p>
        <p className="mt-4">
          Das liegt aber nicht daran, dass man faul oder unfähig wäre oder
          in einem Traumschloss lebt – sondern daran, dass wir keine{" "}
          <strong className="text-heading">Erfolgsmessung</strong> gewohnt
          sind, die nicht auf Geld basiert.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgHobby}
            alt="Selbstständigkeit"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>

        <h3 className="article-h3 mt-10">„Arbeit = Geld“</h3>
        <p className="mt-4">
          Psychologisch betrachtet liegt das an unserer Sozialisierung.
          Arbeit ist in unserer Kultur eng mit Bezahlung, Leistung und
          Bewertung verknüpft.
        </p>
        <p className="mt-4">Von klein auf lernen wir:</p>
        <p className="mt-2">→ Gute Noten = Lob.</p>
        <p className="mt-2">→ Ausbildung = Job.</p>
        <p className="mt-2">→ Arbeit = Gehalt.</p>
        <p className="mt-4">
          Alles, was außerhalb dieser Struktur liegt, wird schnell als{" "}
          <strong className="text-heading">„Spielerei“</strong> oder „Hobby“
          abgestempelt. Selbstständigkeit – vor allem am Anfang – passt
          nicht in diese lineare Logik.
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            Man arbeitet ohne Auftraggeber
          </strong>
          , ohne Gehalt, ohne Hierarchie. Man ist plötzlich
          eigenverantwortlich für Erfolg und Misserfolg.
        </p>
        <p className="mt-4">
          Oft kommt hinzu, dass die größten Kritiker die sind, die selbst
          weder selbstständig sind, noch es je waren. Sie haben keinerlei
          Erfahrung darin, was es bedeutet, ein eigenes Unternehmen komplett
          von Null aufzubauen. Und wissen daher auch nichts über{" "}
          <strong className="text-heading">die To-dos und die Zeit,</strong>{" "}
          die es braucht, bis die Saat Früchte trägt.
        </p>
        <p className="mt-4">
          Ich habe mal gehört, dass es{" "}
          <strong className="text-heading">mindestens zwei Jahre</strong>{" "}
          dauert, bis sich eine Selbstständigkeit etabliert hat, bzw. dass
          die meisten Unternehmer in den ersten zwei Jahren scheitern. Ob
          das wirklich eine veritable Statistik ist, weiß ich nicht, aber
          ich habe inzwischen von vielen die Bestätigung bekommen.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgArbeitGeld}
            alt="Selbstständigkeit"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Mindset */}
      <section className="article-column py-[30px]">
        <h2 id="das-richtige-mindset" className="article-h2">
          Das richtige Mindset
        </h2>
        <p className="mt-6">
          Umso wichtiger ist es, sich mit Menschen zu umgeben, die da sind,{" "}
          <strong className="text-heading">
            wo man selbst gern hinmöchte.
          </strong>{" "}
          Und dabei geht es nicht nur um das finanzielle Ziel. Denn wenn man
          bei Instagram ausschließlich Menschen folgt, die angeblich in
          Null-Komma-Nix Tausende von Euros im Monat verdienen, dann fühlt man
          sich auch schnell wieder unfähig.
        </p>
        <p className="mt-4">
          Es geht allgemein um Menschen, die selbstständig sind. Egal, in
          welcher Phase sie gerade stecken. Es hilft ungemein, sich{" "}
          <strong className="text-heading">mit Leuten auszutauschen,</strong>{" "}
          die die gleichen Gedanken haben, die gleichen Hürden überwinden
          müssen oder auch schon überwunden haben. Selbst Gründer, die gerade
          erst gestartet sind, können dir gut tun, denn dann siehst du
          vielleicht auch, was du schon alles geschafft hast, und kannst
          selbst <strong className="text-heading">Tipps geben.</strong>
        </p>
        <p className="mt-4">
          Das ist ein bisschen so wie mit dem Elternwerden. Wenn man keine
          Kinder hat, hat man eine gewisse Vorstellung davon, wie man als
          Mutter sein wird. Wie man sein Kind erziehen will und was man
          durchgehen lässt und welche{" "}
          <strong className="text-heading">No-Gos</strong> es gibt.
        </p>
        <p className="mt-4">
          Und dann, mit dem Moment der Geburt, ist alles ganz anders, als man
          denkt. Nichts kann einen darauf vorbereiten. Keine monatelange
          Schwangerschaft und keine Kurse, Bücher usw., noch nicht mal die
          Erzählungen anderer Mütter können einem vermitteln,{" "}
          <strong className="text-heading">
            wie viel Arbeit, Aufopferung und Zweifel
          </strong>{" "}
          auf einen zukommen werden.
        </p>
        <p className="mt-4">
          Und noch weniger können das Menschen, die selbst keine Kinder haben.
        </p>
        <p className="mt-4">
          Wenn man dann Mutter ist, ist es egal, wie alt das Kind ist, man
          würde sich nie Ratschläge von Menschen holen, die keine Eltern sind.
          Das ist gar nicht abwertend gemeint oder in die Richtung gedacht,
          dass alle Kinder kriegen sollen. Es ist nur einfach ein Fakt, dass
          kinderlose Menschen nicht beurteilen können, wie etwas mit einem
          Kind zu laufen hat. Genauso wie Leute ohne Haustiere keine Tipps zur
          Tierhaltung geben können oder Nichtschwimmer was zu Tauchspots
          erzählen können.
        </p>
        <p className="mt-4">
          Können nun angestellte Menschen beurteilen, wie eine
          Selbständigkeit zu laufen hat?{" "}
          <strong className="text-heading">
            Solltest du dir Tipps und Ratschläge dort abholen?
          </strong>{" "}
          Sollten sie dein Mindset und deinen Wert als Unternehmerin bestimmen
          dürfen?
        </p>
        <p className="mt-4">
          <strong className="text-heading">Nein.</strong>
        </p>
        <p className="mt-4">
          Also schau, wo du Support bekommen kannst, und versuche, die zu
          ignorieren, die dir sagen, dass Arbeit nur etwas ist, wofür man Geld
          bekommt.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgMindset}
            alt="Selbstständigkeit"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Erster Auftrag */}
      <section className="article-column py-[30px]">
        <h2 id="der-erste-auftrag-der-moment-der-alles-veraendert" className="article-h2">
          Der erste Auftrag: Der Moment, der alles verändert
        </h2>
        <p className="mt-6">
          Und dann kommt er: der erste zahlende Kunde.
        </p>
        <p className="mt-4">
          Vielleicht ist es ein kleiner Auftrag. Vielleicht ein Testlauf.
        </p>
        <p className="mt-4">
          Egal, wie groß oder klein:{" "}
          <strong className="text-heading">
            Dieser Moment ist magisch.
          </strong>{" "}
          Denn plötzlich wird all das unsichtbare Tun sichtbar.
        </p>
        <p className="mt-4">
          Ich erinnere mich noch so genau an meine{" "}
          <a
            href="https://www.paarbalance.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            erste Kundin
          </a>
          . Das Kribbeln. Die Aufregung. Die Freude. Die Erleichterung.
        </p>
        <p className="mt-4">
          Ich schrieb ein Angebot. Kalkulierte einen Preis. Schickte es ab.
          Wartete. Und als die Zusage kam, war es wie ein innerer Knall:{" "}
          <strong className="text-heading">„Es funktioniert.“</strong>
        </p>
        <p className="mt-4">
          Und dann schrieb ich die erste Rechnung über 345 Euro netto.
        </p>
        <p className="mt-4">
          Und irgendwie fühlte sich das nach{" "}
          <strong className="text-heading">„betrügen“</strong> an…
        </p>
        <p className="mt-2">
          … Kann ich das einfach so? Ohne Genehmigung?
        </p>
        <p className="mt-2">
          … Darf ich bestimmen, wie viel meine Leistung kostet?
        </p>
        <p className="mt-2">
          … Ist das, was ich anbiete, wirklich so viel wert?
        </p>
        <p className="mt-4">
          Es war irgendwie so unglaublich, dass ich etwas von Grund auf{" "}
          <strong className="text-heading">
            ganz alleine erschaffen hatte
          </strong>{" "}
          und mir nun jemand Fremdes einfach Geld auf mein Konto überwies,
          im Vertrauen in meine Person und Dienstleistung. Es war irgendwie
          nicht greifbar. Und ich hatte das Gefühl, dass meine
          Content-Creation etwas{" "}
          <strong className="text-heading">Fiktives</strong> sei.
        </p>
        <p className="mt-4">
          Wenn etwas ausschließlich digital stattfindet – der Kontakt, der
          Austausch, das Angebot, die Dienstleistung und die Bezahlung –,
          dann ist es zwar überall möglich, aber es ist auch{" "}
          <strong className="text-heading">einfach nirgendwo.</strong> Das
          einzig Greifbare daran wäre der Geldschein, den ich dann am
          Bankautomaten rausziehe.
        </p>
        <p className="mt-4">
          Dieser erste Moment mit dem Kunden ist emotional komplex. Er ist
          Befreiung und Überforderung zugleich. Er markiert den Übergang:
          von „Ich baue auf“ zu „Ich bin im Geschäft.“
        </p>
      </section>

      {/* Fazit + CTA */}
      <section className="article-column py-[30px]">
        <h2 id="fazit-deine-arbeit-ist-echt" className="article-h2">
          Fazit: Deine Arbeit ist echt
        </h2>
        <p className="mt-6">Du arbeitest. Punkt.</p>
        <p className="mt-4">
          Nur weil kein Geld fließt, ist deine Zeit nicht wertlos.
        </p>
        <p className="mt-2">
          Nur weil du (noch) keine Kunden hast, ist dein Business nicht
          weniger echt.
        </p>
        <p className="mt-2">
          Nur weil du (noch) zweifelst, bedeutet das nicht, dass du
          scheiterst.
        </p>
        <p className="mt-4">
          Die Selbstständigkeit verlangt viel:{" "}
          <strong className="text-heading">
            Geduld. Vertrauen. Durchhaltevermögen.
          </strong>{" "}
          Die Fähigkeit, den Wert der eigenen Arbeit zu erkennen – auch ohne
          äußere Bestätigung.
        </p>
        <p className="mt-4">
          Und wenn der erste Kunde kommt, der erste Euro fließt, die erste
          Rechnung bezahlt wird:
        </p>
        <p className="mt-4">
          Dann weißt du, dass alles, was vorher „unsichtbar“ war, Arbeit war.{" "}
          <strong className="text-heading">Wichtige Arbeit.</strong>
        </p>
        <p className="mt-4">Arbeit, die jetzt Früchte trägt.</p>
        <p className="mt-4">
          PS: Ein Teil dieser unsichtbaren Arbeit ist auch, dein Business
          sichtbar zu machen. Als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          unterstützt molloy business Unternehmen dabei, über Pinterest
          organisch gefunden zu werden – zum Beispiel mit einem{" "}
          <Link
            href="/pinterest-strategie-call/"
            className="text-gold-text hover:underline"
          >
            Pinterest Strategie Call
          </Link>
          . Wenn du magst, vereinbare gern ein{" "}
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

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgFazit}
            alt="Selbstständigkeit"
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
            href="https://youtu.be/32M96fQgQcs"
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
