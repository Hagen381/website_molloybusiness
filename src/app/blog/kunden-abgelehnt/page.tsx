import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";
import imgYoga from "@/assets/images/blog/kunden-abgelehnt/Kundenabgelehnt-2.png";
import imgSchlussstrich from "@/assets/images/blog/kunden-abgelehnt/Kundenabgelehnt-3.png";
import imgHandy from "@/assets/images/blog/kunden-abgelehnt/Kundenabgelehnt-4.png";

const post = blogPosts.find((p) => p.slug === "kunden-abgelehnt")!;

const path = `/blog/${post.slug}/`;

const h1 =
  "Warum ich einen potenziellen Kunden abgelehnt habe, obwohl ich 0 Aufträge hatte";

export const metadata: Metadata = {
  title: "Warum ich einen potenziellen Kunden abgelehnt habe",
  description:
    "Null Aufträge und trotzdem Nein gesagt: Warum Bauchgefühl und klare Grenzen in der Selbstständigkeit wichtiger sind als der schnelle erste Umsatz.",
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
  { id: "wir-schreiben-das-jahr-2022", label: "Wir schreiben das Jahr 2022" },
  { id: "endlich-hatten-wir-einen-termin", label: "Endlich hatten wir einen Termin" },
  { id: "ich-zog-einen-schlussstrich", label: "Ich zog einen Schlussstrich" },
  { id: "mein-triggerpunkt", label: "Mein Triggerpunkt" },
  { id: "nutze-deine-freiheit", label: "Nutze deine Freiheit" },
  { id: "wie-ging-es-nun-aus-mit-der-yoga-bekleidungs-dame", label: "Wie ging es nun aus mit der Yoga-Bekleidungs-Dame?" },
  { id: "lieber-anhoeren", label: "Lieber anhören?" },
] as const;

export default function KundenAbgelehnt() {
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
          <em>
            Die Freiheit, eigene Entscheidungen zu treffen und sich treu zu
            bleiben, sind wesentliche Vorteile der Selbstständigkeit, die ich
            von Anfang an nutzen wollte. In diesem Blogartikel teile ich eine
            Geschichte über einen potenziellen Kunden, um anderen
            Solopreneuren Mut zu machen, ihren eigenen Weg zu gehen und ihre
            individuellen Werte und Prioritäten in ihrem Business zu wahren.
          </em>
        </p>
      </section>

      {/* 2022 */}
      <section className="article-column py-[30px]">
        <h2 id="wir-schreiben-das-jahr-2022" className="article-h2">
          Wir schreiben das Jahr 2022
        </h2>
        <p className="mt-6">
          Es ist 2022 und ich bin seit einigen Monaten als{" "}
          <strong className="text-heading">virtuelle Assistentin</strong>{" "}
          mit dem Schwerpunkt Pinterest-Marketing selbstständig. Kurz nach
          meiner Gründung war ich mit meiner Familie viel unterwegs,
          wodurch ich anfangs wenig Zeit in den Aufbau meines Geschäfts
          investiert habe.
        </p>
        <p className="mt-4">
          Für den Sommer hatte ich noch eine{" "}
          <strong className="text-heading">Weiterbildung</strong> auf
          meiner To-do-Liste und ich wollte unbedingt meine Website bzw.
          meinen Onepager fertigstellen, bevor ich mit der Akquise begann.
          Warum mir eine eigene Website am Anfang so wichtig war, erkläre
          ich in meinem Blogartikel{" "}
          <Link
            href="/blog/website-fuer-dein-business/"
            className="text-gold-text hover:underline"
          >
            „Brauchst du eine Website für dein Business?“
          </Link>
          .
        </p>
        <p className="mt-4">
          Als ich schließlich bereit war und mit der Kundensuche begann,
          nutzte ich verschiedene Methoden. Eine davon war, in
          Facebook-Gruppen auf Gesuche zu reagieren, in denen jemand einen
          Social-Media-Manager suchte. Obwohl ich kein klassisches
          Social-Media-Management anbot, fragte ich bei Nutzern von
          Instagram, TikTok oder Facebook unverbindlich nach, ob{" "}
          <strong className="text-heading">Pinterest</strong> für sie
          interessant sein könnte.
        </p>

        <h3 className="article-h3 mt-10">
          Eine Interessentin mit Online-Shop
        </h3>
        <p className="mt-4">
          Ich war damals auch in einigen internationalen Facebook-Gruppen
          aktiv. Dort inserierte eine Firma, die Yoga-Bekleidung weltweit
          über einen Online-Shop verkauft. Ich dachte mir:{" "}
          <strong className="text-heading">
            Wow! Online-Shop! Mode! Lifestyle! Pinterest!
          </strong>{" "}
          Also schrieb ich die Betreiberin des Shops an und fragte, ob sie Pinterest
          schon einmal für ihren Online-Shop genutzt habe. Sie antwortete
          schnell und erzählte, dass sie vor einigen Jahren einen
          Pinterest-Account hatten, der gut lief, aber nach dem Weggang des
          damaligen Pinterest-Marketing-Managers eingeschlafen war.
        </p>
        <p className="mt-4">
          Wir vereinbarten einen Gesprächstermin, was mich sehr freute, da
          ich zu diesem Zeitpunkt noch keinen einzigen Kunden hatte. Ich
          schlug einige Termine vor und wartete.{" "}
          <strong className="text-heading">Tagelang. Keine Antwort.</strong>
        </p>
        <p className="mt-4">
          Nach zwei Wochen fragte ich erneut nach und die Shop-Betreiberin
          entschuldigte sich für die Verzögerung und schlug einen Termin
          für den nächsten Morgen vor. Obwohl das kurzfristig war, stimmte
          ich zu. Am nächsten Tag sagte sie den Termin jedoch ab und
          versprach, sich zu melden, wenn sie mehr Zeit habe.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgYoga}
            alt="Das Bild zeigt einige Beine von Frauen in Yoga Bekleidung, die gerade den Sonnengruß machen."
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Termin */}
      <section className="article-column py-[30px]">
        <h2 id="endlich-hatten-wir-einen-termin" className="article-h2">
          Endlich hatten wir einen Termin
        </h2>
        <p className="mt-6">
          Einige Tage später kam es schließlich zum Gespräch. Sie wollte es
          kurz halten und drückte sofort auf den Preis, indem sie mir das
          Honorar ihres vorherigen Pinterest-Managers nannte, das{" "}
          <strong className="text-heading">weit unter meinen Preisen</strong>{" "}
          lag. Sie bat mich, ein Angebot zu machen und es ihr per E-Mail zu
          senden.
        </p>
        <p className="mt-4">
          Obwohl das Gespräch am Morgen stattfand, schrieb sie mir noch am
          selben Abend ungeduldig, wo das Angebot bleibe. Das fand ich schon
          recht frech, da sie es ja zuvor nie so eilig mit der Kommunikation
          hatte. Trotzdem beeilte ich mich und schickte ihr das Angebot noch
          am selben Abend. Mein Nachlass beinhaltete{" "}
          <strong className="text-heading">100 Euro Rabatt</strong> auf den
          regulären Preis für die ersten drei Monate.
        </p>
        <p className="mt-4">
          Und dann geschah wieder nichts. Tagelang.{" "}
          <strong className="text-heading">Keine Reaktion.</strong>
        </p>

        <h3 className="article-h3 mt-10">
          Wieder „rannte“ ich ihr hinterher
        </h3>
        <p className="mt-4">
          Erneut fragte ich nach, ob sie mit dem Angebot zufrieden sei. Sie
          antwortete, dass sie ein weiteres Gespräch vereinbaren wolle, um zu
          besprechen, wie wir zusammenkommen könnten, und versprach, sich
          zwecks eines Termins erneut zu melden.
        </p>
        <p className="mt-4">
          Irgendwann meldete sie sich tatsächlich.{" "}
          <strong className="text-heading">
            Ich hatte jedoch längst abgeschlossen.
          </strong>{" "}
          Ihr Verhalten spiegelte für mich ihre Haltung zu unserem möglichen
          Arbeitsverhältnis wider: Sie ist der Boss und lässt gerne auf sich
          warten. Das muss man hinnehmen, da sie schließlich viel zu tun hat.
          Ich bin „nur“ ein kleiner Dienstleister, der springen soll, wenn
          sie ruft. Denn als ich einmal ein paar Stunden mit meinem Angebot
          wartete, wurde sie sofort ungeduldig.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgSchlussstrich}
            alt="Das Bild zeigt einen grauen Hintergrund mit einem goldenen Strich quer durchs Bild. Darüber steht das Wort Schlussstrich."
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Schlussstrich */}
      <section className="article-column py-[30px]">
        <h2 id="ich-zog-einen-schlussstrich" className="article-h2">
          Ich zog einen Schlussstrich
        </h2>
        <p className="mt-6">
          Ich stellte mir die weitere Zusammenarbeit vor und kam zu dem
          Schluss,{" "}
          <strong className="text-heading">
            dass ich nicht mit ihr arbeiten möchte
          </strong>
          . Ihre Erwartung war, dass sie den zeitlichen Ablauf bestimmt und
          ich sofort reagieren muss, wenn sie etwas möchte. Doch genau das
          wollte ich nicht. Denn ein wichtiger Grund, warum ich in die
          Online-Selbstständigkeit gegangen bin und mich auf Pinterest
          spezialisiert habe, war die{" "}
          <strong className="text-heading">zeitliche Flexibilität</strong>.
          Ich wollte möglichst frei bestimmen können, wann ich meine
          Aufgaben erledige, und das geht bei{" "}
          <strong className="text-heading">Pinterest</strong> tatsächlich
          gut. Wenn schon eine einfache Terminabsprache so lange dauert,
          wie würde es dann aussehen, wenn mein Gegenüber wirklich etwas
          leisten muss, wie Materialien oder Feedback bereitstellen?
        </p>

        <h3 className="article-h3 mt-10">
          Der Kunde ist König
        </h3>
        <p className="mt-4">
          Um das klarzustellen: Mir ist meine Rolle als Dienstleister
          durchaus bewusst. Ich biete meine Arbeitszeit und -leistung an
          und bekomme dafür Geld. Und ich vertrete ebenfalls die Meinung,
          dass der Kunde König ist.{" "}
          <strong className="text-heading">
            Aber nur bis zu einem gewissen Punkt.
          </strong>{" "}
          Außerdem bin ich ein sehr intuitiver Mensch. Und ich hatte schon
          recht schnell ein ungutes Gefühl.
        </p>
        <p className="mt-4">
          Doch ich tanzte den „Eiertanz“ eine Weile mit, weil ich dachte:{" "}
          <strong className="text-heading">
            „Hey, Juliette, du hast dich gerade selbstständig gemacht. Sei
            nicht so wählerisch. Du kannst keinen potenziellen Kunden
            ablehnen, wenn du am Anfang stehst.“
          </strong>
        </p>
        <p className="mt-4">
          Doch dann wurde mir bewusst, dass einer der Vorteile der
          Selbstständigkeit darin liegt, dass man selbst entscheiden kann,
          mit wem man wie zusammenarbeiten möchte. In einem
          Angestelltenverhältnis muss man ab und zu auch mit Dienstleistern
          oder Kollegen arbeiten, die einem nicht sonderlich zusagen. Im
          schlimmsten Fall machen solche Zusammenarbeiten überhaupt keinen
          Spaß, weil man einfach nicht zusammenpasst und sich trotzdem
          durchquälen muss.
        </p>
      </section>

      {/* Triggerpunkt */}
      <section className="article-column py-[30px]">
        <h2 id="mein-triggerpunkt" className="article-h2">
          Mein Triggerpunkt
        </h2>
        <p className="mt-6">
          Wenn ich nun die <strong className="text-heading">Freiheit</strong>{" "}
          hatte, selbst zu entscheiden, und mich direkt zu Beginn dieser
          Freiheit beraube, was wäre dann meine Selbstständigkeit wert? Wenn
          ich anfinge, Dinge zu tun, die meinem Bauchgefühl absolut
          widerstreben, nur um Geld zu verdienen, wo würde das hinführen?
          Würde ich mich dann nicht zu meiner eigenen{" "}
          <strong className="text-heading">Geisel</strong> machen?
        </p>
        <p className="mt-4">
          Ich kenne mich gut genug, um zu wissen, dass es für mich nach recht
          kurzer Zeit sehr anstrengend und unangenehm gewesen wäre, wenn ich
          einen Kunden gehabt hätte, der nicht{" "}
          <strong className="text-heading">auf Augenhöhe</strong> mit mir
          operiert. Ich möchte nicht leugnen, dass dahinter ein gewisses
          Autoritätsproblem steht. Das habe ich schon immer gehabt. Selbst im
          Kindergarten konnte ich mich nicht unterordnen und das zog sich
          durch bis zu Lehrern, Eltern, Vorgesetzten und anderen
          vermeintlichen höheren Instanzen.
        </p>
        <p className="mt-4">
          Ich habe immer gute Arbeitsverhältnisse gehabt und hervorragende
          Zeugnisse, aber ich denke,{" "}
          <strong className="text-heading">
            meine Chefs hatten es nicht leicht mit mir
          </strong>{" "}
          und konnten das eine oder andere Auge nur zudrücken, weil meine
          Arbeitsleistung entsprechend gut war.
        </p>

        <h3 className="article-h3 mt-10">
          Worauf will ich hinaus?
        </h3>
        <p className="mt-4">
          Ich bin so. Ich kenne mich. Ich weiß, dass es mir schwerfällt, mich
          unterzuordnen. Warum sollte ich dann so dermaßen gegen mein
          Naturell handeln, wenn ich durch die Selbstständigkeit die Freiheit
          habe, <strong className="text-heading">FÜR</strong> mich zu
          handeln, anstatt <strong className="text-heading">GEGEN</strong>{" "}
          mich?
        </p>
        <p className="mt-4">
          Natürlich kann man es auch aus einer anderen Perspektive sehen:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Ich hätte erste Erfahrungen sammeln können.</li>
          <li>Ich hätte ein Kundenfeedback für meine weitere Akquise gehabt.</li>
          <li>Ich hätte meine ersten Umsätze gemacht.</li>
        </ul>
        <p className="mt-4">
          Aber mein Ärgernis über die Art und Weise der Zusammenarbeit hätte
          all das nicht aufgewogen.
        </p>

        <h3 className="article-h3 mt-10">
          Ich bin privilegiert
        </h3>
        <p className="mt-4">
          Mir ist bewusst, dass ich diese Haltung nur aus einer sehr
          privilegierten Situation heraus einnehmen konnte. Mein Partner war
          vollberufstätig (wenn auch zu diesem Zeitpunkt in unbezahlter
          Elternzeit) und ich wusste, wir würden durch meine Entscheidung
          nicht am Hungertuch nagen.{" "}
          <strong className="text-heading">
            Wäre ich auf das Geld angewiesen
          </strong>
          , um meine Familie zu ernähren, hätte ich natürlich anders
          entschieden. Ich bin mir für nichts zu schade, wenn es darum geht,
          Geld zu verdienen, weil ich sonst mein Leben nicht finanzieren
          kann.
        </p>
        <p className="mt-4">
          Aber die wenigsten von uns sind in dieser Lage, und alle, die es
          sind, sollten nicht blauäugig{" "}
          <strong className="text-heading">
            ohne einen Cent in die volle Selbstständigkeit gehen
          </strong>
          .
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgHandy}
            alt="Dieses Bild zeigt eine Frau, die auf dem Bauch auf einem Bett liegt und ein blaues Handy in der Hand hält. Sie schaut freundlich und macht offenbar etwas am Handy."
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Freiheit + fauler Apfel */}
      <section className="article-column py-[30px]">
        <h2 id="nutze-deine-freiheit" className="article-h2">
          Nutze deine Freiheit
        </h2>
        <p className="mt-6">
          Ich möchte dir nur <strong className="text-heading">Mut</strong>{" "}
          machen, dass du deinen eigenen Weg gehen darfst. Dass du{" "}
          <strong className="text-heading">deine eigenen Regeln</strong>{" "}
          für dein eigenes Business aufstellst. Niemand kann dir sagen, was
          du tun oder lassen solltest. Jeder hat seine ganz subjektive
          Wahrnehmung von Zusammenarbeit. Manch einer legt super viel Wert
          darauf, dass der potenzielle Kunde für Nachhaltigkeit steht. Bei
          einem anderen wäre der Kunde schon raus, wenn er nicht gendert,
          und für den nächsten ist es schwierig, mit Menschen zu arbeiten,
          die sich nicht vegan ernähren.
        </p>
        <p className="mt-4">
          Das mögen alles „Kleinigkeiten“ sein, von denen man sein{" "}
          <strong className="text-heading">Business-Wachstum</strong> nicht
          abhängig machen sollte. Doch wenn du dein Unternehmen so führst,
          dass du dir selber treu bleibst und jeden Morgen in den Spiegel
          gucken kannst und Kunden hast, die mit dir auf einer Wellenlänge
          sind, nur dann hast du auch Freude an deiner Arbeit und nur dann
          bist du{" "}
          <strong className="text-heading">langfristig erfolgreich</strong>
          .
        </p>

        <h3 className="article-h3 mt-10">Der faule Apfel</h3>
        <p className="mt-4">
          Buckeln, knechten und rackern bis zum Umfallen haben viele
          Solopreneure bereits hinter sich. Also steig nicht wieder ein in
          dieses <strong className="text-heading">Hamsterrad</strong>,
          sondern bestimme selbst, wie schnell sich das Rad dreht und wer
          mitfahren darf. Ein fauler Apfel in der Kiste kann dir alle
          anderen Äpfel verderben.
        </p>
        <p className="mt-4">
          Mich würde ein unangenehmer Kunde so sehr runterziehen, dass ich
          keine Energie mehr für andere Kunden oder die anderen Bereiche in
          meinem Business hätte. Ich würde auf Dauer (bzw. recht schnell){" "}
          <strong className="text-heading">unproduktiv</strong> werden. Und
          da nützt mir die Aussicht auf kurzfristiges Geld auch nichts.
        </p>
      </section>

      {/* Ausgang + CTA */}
      <section className="article-column py-[30px]">
        <h2 id="wie-ging-es-nun-aus-mit-der-yoga-bekleidungs-dame" className="article-h2">
          Wie ging es nun aus mit der Yoga-Bekleidungs-Dame?
        </h2>
        <p className="mt-6">
          Als sie irgendwann schrieb, dass sie nun Zeit für das zweite
          Gespräch hätte,{" "}
          <strong className="text-heading">lehnte ich dankend ab</strong> und
          schrieb ihr, dass sich mein Arbeitsvolumen nun so entwickelt habe,
          dass ich leider keine freien Kapazitäten mehr habe.
        </p>
        <p className="mt-4">
          Man sieht sich immer zweimal im Leben und ich wollte auch kein Fass
          aufmachen. Deshalb entschied ich mich für eine Version, in der ich
          zwar{" "}
          <strong className="text-heading">nicht ganz die Wahrheit</strong>{" "}
          sagte, aber auch vermied, ihr zu nahe zu treten oder sie gar zu
          verärgern.
        </p>
        <p className="mt-4">
          Lange Zeit später und einige Kunden danach hatte ich eine ähnliche
          Situation und da habe ich ganz klar dargelegt, dass ich das
          Verhalten unmöglich finde, und habe einen Teil meiner Vorarbeit in
          Rechnung gestellt. Vielleicht schreibe ich dazu auch nochmal einen
          Artikel.
        </p>
        <p className="mt-6">
          Und wenn du wissen willst, wie eine Zusammenarbeit auf Augenhöhe
          aussehen kann: Als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          arbeitet molloy business mit Unternehmen, die zueinander passen –
          finde es in einem{" "}
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            unverbindlichen Erstgespräch
          </a>{" "}
          heraus.
        </p>
      </section>

      {/* Audio */}
      <section className="article-column py-[30px]">
        <h2 id="lieber-anhoeren" className="article-h2">
          Lieber anhören?
        </h2>
        <p className="mt-6 text-center">
          Keine Zeit zum Lesen? Hier kannst du dir den Artikel auch anhören:{" "}
          <a
            href="https://youtu.be/saACajBmy9U"
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
