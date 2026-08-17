import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";
import imgLaptop from "@/assets/images/blog/formel-60-minuten-arbeitszeit/Blog60MinutenFormel.jpg";
import imgFormel from "@/assets/images/blog/formel-60-minuten-arbeitszeit/60MinutenFormel-2.jpg";
import imgGeldscheine from "@/assets/images/blog/formel-60-minuten-arbeitszeit/60MinutenFormel-1.jpg";

const post = blogPosts.find((p) => p.slug === "formel-60-minuten-arbeitszeit")!;

const path = `/blog/${post.slug}/`;

const h1 = "Meine Formel für 60 Minuten Arbeitszeit";

export const metadata: Metadata = {
  title: "Meine Formel für 60 Minuten Arbeitszeit",
  description:
    "1 Stunde Arbeitszeit = 1 Stunde Lebenszeit: warum es keine verschiedenen Stundensätze für einfache und schwere Aufgaben braucht und wie du deinen Preis findest.",
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
  { id: "gehaltsverhandlungen-mit-sich-selbst", label: "Gehaltsverhandlungen mit sich selbst" },
  { id: "start-aus-der-arbeitslosigkeit", label: "Start aus der Arbeitslosigkeit" },
  { id: "meine-formel-fuer-arbeitszeit", label: "Meine Formel für Arbeitszeit" },
  { id: "aendert-sich-der-wert-deiner-lebenszeit", label: "Ändert sich der Wert deiner Lebenszeit?" },
  { id: "deine-preise-finden", label: "Deine Preise finden" },
  { id: "lieber-anhoeren", label: "Lieber anhören?" },
] as const;

export default function Formel60MinutenArbeitszeit() {
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
          Wenn man sich aus einer Festanstellung in die Selbstständigkeit wagt,
          tauscht man Gehaltsverhandlungen gegen die Herausforderung der
          Preisgestaltung. Es klingt zunächst befreiend: endlich alleine
          bestimmen, wie viel die eigene Arbeit wert ist! Doch schnell wird
          klar, dass man sich selbst ein härterer Verhandlungspartner sein kann
          als jeder Chef zuvor. Besonders als virtuelle Assistentin stellt sich
          die Frage nach dem richtigen Stundenlohn. Auf meiner Reise zur
          optimalen Preisfindung habe ich eine einfache, aber wirkungsvolle
          Formel für 60 Minuten Arbeitszeit entdeckt. In diesem Artikel erkläre
          ich, warum ich keine unterschiedlichen Stundenlöhne für verschiedene
          Tätigkeiten nehme und wie ich zu meinem einheitlichen Stundensatz
          gekommen bin.
        </p>
      </section>

      {/* Gehaltsverhandlungen */}
      <section className="article-column py-[30px]">
        <h2 id="gehaltsverhandlungen-mit-sich-selbst" className="article-h2">
          Gehaltsverhandlungen mit sich selbst
        </h2>
        <p className="mt-6">
          Während man noch angestellt war, waren es die Gehaltsverhandlungen,
          die einen gestresst haben. Wenn man sich selbstständig macht, sind
          es die Preise und Stundenlöhne, die einen grübeln lassen. Schon
          witzig, wie sehr man sich gerade am Anfang damit quält. Immerhin
          ist man nun <strong className="text-heading">sein eigener Chef</strong>{" "}
          und kann völlig frei entscheiden, wie viel Geld man für seine
          Produkte oder Dienstleistungen nehmen möchte. Doch irgendwie ist
          man sich selbst ein größerer Gegner, als es vorher je ein Chef sein
          konnte.
        </p>
        <p className="mt-4">
          In einer <strong className="text-heading">Gehaltsverhandlung</strong>{" "}
          hat man sich genau zurechtgelegt, was man alles leistet und welchen
          Mehrwert man dem Unternehmen bietet, und war sich mehr als sicher,
          dass man das geforderte Geld auch verdient hatte. Im Grunde
          genommen hatte man sogar noch mehr verdient. Ich kenne wirklich
          keinen Festangestellten, der sagt, dass er sich vollkommen
          ausreichend bezahlt fühlt 😂 Doch sich selbst gegenüber muss man
          wesentlich mehr Überzeugungskraft aufbringen.
        </p>

        <h3 className="article-h3 mt-10">
          Große Unterschiede in der Preisgestaltung
        </h3>
        <p className="mt-4">
          Erschwerend hinzu kommt, dass es meistens eine breite Range an
          Preisstrukturen gibt und somit wenig aussagekräftige
          Orientierungspunkte. Als virtuelle Assistentin rechnen die meisten
          nach Stunden oder Stundenpaketen ab. Als ich 2022 in der{" "}
          <strong className="text-heading">Preisfindung</strong> war, ergab
          meine Recherche, dass die eine VA für 20 Euro die Stunde arbeitet
          und die andere VA mehr als 100 Euro die Stunde abrechnet. Beides
          fühlte sich für mich damals völlig surreal an. Dass ich nicht für
          20 Euro die Stunde arbeiten werde, war mir klar. Aber mir war auch
          klar, dass ich nie und nimmer über 100 Euro Stundenlohn aufrufen
          würde – zumindest am Anfang nicht.{" "}
          <strong className="text-heading">Spoiler:</strong> Auch jetzt noch
          nicht 😉
        </p>
        <p className="mt-4">
          Ich fand eine{" "}
          <a
            href="https://www.facebook.com/groups/fairevajobs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            Facebook-Gruppe
          </a>{" "}
          von Nadine Abdussalam, in der nur Stellenangebote aufgegeben werden
          konnten, die mindestens 30 Euro Stundenlohn zahlten. Da hatte ich
          nun also zumindest schon mal meine Untergrenze gefunden. Ich kann
          heute nicht mehr sagen wie, aber auf jeden Fall setzte sich bei mir
          irgendwann der Stundensatz von 50 Euro netto pro Stunde fest.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgLaptop}
            alt="Das Foto zeigt eine junge Frau, die auf einem Sofa sitzt und auf ihrem Schoß einen Laptop hat und in der rechten Hand ein blaues Handy hält, auf das sie drauf guckt."
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Arbeitslosigkeit */}
      <section className="article-column py-[30px]">
        <h2 id="start-aus-der-arbeitslosigkeit" className="article-h2">
          Start aus der Arbeitslosigkeit
        </h2>
        <p className="mt-6">
          Ich habe an der einen oder anderen Stelle schon mal erwähnt, dass ich
          meine Selbstständigkeit aus der Arbeitslosigkeit heraus startete. So
          konnte ich den{" "}
          <strong className="text-heading">Gründungszuschuss</strong> nutzen
          und bekam auch einen Coach an die Seite gestellt, der mit mir den
          Business-Plan vorbereitete. Als wir zum Kalkulationsteil kamen,
          fragte er mich nach meinem Stundenlohn, und er fiel auch nicht aus
          allen Wolken, als ich 50 Euro sagte. Das war für mich schon mal ein
          gutes Zeichen, dass ich nicht völlig aus der Art schlug.
        </p>
        <p className="mt-4">
          Doch dann fragte er mich, welchen Stundensatz ich denn für{" "}
          <strong className="text-heading">„einfache“ Tätigkeiten</strong>{" "}
          nehmen möchte? Sowas wie Mails beantworten, telefonieren, Termine
          koordinieren usw. Ich verstand die Frage erstmal nicht. Immerhin
          bekam ich vorher in meinem Anstellungsverhältnis ja auch keine
          unterschiedlichen Löhne für unterschiedliche Aufgaben.
        </p>
        <p className="mt-4">
          Ich sagte ihm, dass ich ja trotzdem eine Stunde arbeite.{" "}
          <strong className="text-heading">
            Also eine Stunde telefonieren dauert ja genauso lange wie eine
            Stunde konzeptionieren.
          </strong>{" "}
          Eine Stunde dauert 60 Minuten und 60 Minuten sind 3600 Sekunden (das
          nur mal am Rande, falls du dich das gefragt hast).
        </p>
        <p className="mt-4">
          Er entgegnete, dass es aber ja Unterschiede in der Art der Arbeit
          gäbe. Für manche Dinge müsse man mehr leisten –{" "}
          <strong className="text-heading">gehirntechnisch</strong>, vermute
          ich – als für andere Aufgaben. Dann wäre es ja nur fair, wenn man
          für einfache Aufgaben weniger Geld nimmt als für schwere Aufgaben.
        </p>
        <p className="mt-4">
          Ich warf erneut ein, dass es doch trotzdem eine Stunde Arbeit sei.
          Egal, was ich in der Stunde mache, es bleibt eine Stunde. Der{" "}
          <strong className="text-heading">Business-Coach</strong> resignierte
          und meinte, wir können das ja erstmal so stehen lassen. Vermutlich
          hatte er den Eindruck, ich könne ihm nicht folgen und sei vielleicht
          ein bisschen plemplem.
        </p>
      </section>

      {/* Formel */}
      <section className="article-column py-[30px]">
        <h2 id="meine-formel-fuer-arbeitszeit" className="article-h2">
          Meine Formel für Arbeitszeit
        </h2>
        <p className="mt-6">
          Doch eigentlich war es genau andersrum. ER konnte MIR nicht folgen.
          Denn für mich ist die Formel ganz einfach:
        </p>
        <p className="mt-4">
          <em>1 Std. Arbeitszeit = 1 Std. Lebenszeit!</em>
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            Lies das nochmal und lass es wirken:
          </strong>
        </p>
        <p className="mt-4">
          <em>1 Std. Arbeitszeit = 1 Std. Lebenszeit!</em>
        </p>
        <p className="mt-4">
          Wie viel Geld möchtest du dafür haben, dass du jemand anderem eine
          Stunde deiner Lebenszeit anbietest?
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgFormel}
            alt="Das Bild zeigt eine Art Rechenaufgabe. Es ist eine Formel für 60 Minuten Arbeitszeit, die da lautet: Eine Stunde Arbeitszeit ist gleich eine Stunde Lebenszeit"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>

        <h3 className="article-h3 mt-10">
          Qualifikation ist wichtig
        </h3>
        <p className="mt-4">
          Ich verschließe an dieser Stelle nicht die Augen davor, dass
          Menschen mit unterschiedlichen Qualifikationen auch unterschiedlich
          bezahlt werden sollten. Jemand, der viel Lebenszeit und zum Teil
          auch viel Geld{" "}
          <strong className="text-heading">
            in seine Bildung investiert hat,
          </strong>{" "}
          sollte natürlich auch später mehr Geld verdienen als jemand, der
          weniger Zeit und Geld investiert hat (vorausgesetzt, die
          Arbeitsleistung ist auch entsprechend). Ebenfalls muss
          berücksichtigt werden, wie relevant die eigenen Fähigkeiten für das
          jeweilige Berufsfeld sind.
        </p>
        <p className="mt-4">
          Vor allem in der Welt der{" "}
          <strong className="text-heading">Virtual Assistants</strong>{" "}
          tummelt sich einiges. Und ja, ich finde durchaus, dass es einen
          Unterschied macht, ob sich eine ehemalige Assistentin der
          Geschäftsleitung als VA selbstständig macht oder ob sich eine
          ehemalige Krankenschwester als VA selbstständig macht. Das heißt
          nicht, dass die ehemalige Krankenschwester sich nicht im Laufe der
          Zeit genug Wissen und Erfahrung aneignen kann, um auch eine
          vortreffliche virtuelle Assistentin zu werden. Dennoch finde ich es
          nachvollziehbar, dass die eine VA zu Beginn vielleicht nur{" "}
          <strong className="text-heading">35 Euro</strong> pro Stunde
          verlangt und die andere sofort mit{" "}
          <strong className="text-heading">70 Euro</strong> pro Stunde
          einsteigt.
        </p>

        <h3 className="article-h3 mt-10">
          Das Stunden-Lebenszeit-Modell
        </h3>
        <p className="mt-4">
          Aber egal, mit welchem Stundensatz man startet, eine Stunde ist
          eine Stunde. Beim nächsten Termin mit dem Business-Coach erklärte
          ich ihm nochmal mein{" "}
          <strong className="text-heading">Stunden-Lebenszeit-Modell</strong>{" "}
          und sagte außerdem, dass ich aufgrund meiner Berufserfahrung
          schlichtweg gewisse Qualifikationen mitbringe. Wenn mich nun jemand
          engagiert, dem ich mit meinem Know-how einen super Mehrwert biete,
          dieser Jemand mich dann aber dafür einsetzen will, seine Termine zu
          koordinieren, dann ist das die Entscheidung meines Auftraggebers.{" "}
          <strong className="text-heading">
            Aber das ändert nichts an meinem Stundensatz und an meiner
            Lebenszeit.
          </strong>{" "}
          Und ich würde durchaus verstehen, wenn man sich dann eben eine
          „günstigere“ VA sucht.
        </p>
        <p className="mt-4">
          Der Coach war beeindruckt von meiner Sicht auf die Dinge. So habe
          er das noch nie gesehen, sagte er. Diese Reaktion höre ich im
          Übrigen oft: „So habe ich das noch nie gesehen.“ Deshalb dieser
          Blogartikel. Damit du einfach überzeugter von deinem eigenen
          Angebot bist. Ich richte mich natürlich hier an Menschen, die
          wirklich bereit sind, Leistung zu erbringen, und die ihre Sache
          ernst nehmen und nicht einfach nur einen Stundensatz in den Raum
          werfen, weil sie mal gehört haben, dass man als virtuelle
          Assistentin richtig gut verdienen kann. Von diesen ganzen „
          <strong className="text-heading">
            Mit 0 Euro in die Selbstständigkeit
          </strong>{" "}
          und über Nacht reich werden“-Konzepten halte ich sowieso nichts.
        </p>
        <p className="mt-4">
          Wer sich von der Pike auf ein eigenes Geschäft aufbaut und damit
          erfolgreich sein möchte, der muss Leistung und auch manchmal Opfer
          bringen.
        </p>
      </section>

      {/* Wert der Lebenszeit */}
      <section className="article-column py-[30px]">
        <h2 id="aendert-sich-der-wert-deiner-lebenszeit" className="article-h2">
          Ändert sich der Wert deiner Lebenszeit?
        </h2>
        <p className="mt-6">
          Warum ist nun meine Lebenszeit nach über zwei Jahren
          Selbstständigkeit mehr wert als am Anfang? Ich bin mit 50 Euro
          gestartet und wusste, dass ich irgendwann meinen Stundensatz erhöhen
          werde. Ich hörte im Zuge meiner Preisfindung einen Spruch, der
          ungefähr so ging:{" "}
          <em>
            „Dein Stundenlohn darf nicht so hoch sein, dass du ihn nicht über
            die Lippen kriegst. Er muss aber hoch genug sein, dass du ihn
            gerade so rauswürgen kannst.“
          </em>
        </p>
        <p className="mt-4">
          Dieser etwas unkonventionelle Hinweis hat den Hintergrund, dass du
          deine Preisvorstellung auch authentisch rüberbringen musst. Wenn du
          den Stundensatz vor dir selbst also gar nicht aussprechen kannst,
          dann wirst du dein Gegenüber auch nicht überzeugen können, dass du
          das wert bist. Wenn du aber an der{" "}
          <strong className="text-heading">Schmerzgrenze</strong> bist, dann
          ist er in jedem Fall nicht zu niedrig und du verkaufst dich nicht aus
          falscher Scham unter Wert.
        </p>
        <p className="mt-4">
          Ich prüfte diesen Hinweis damals mit meinen 50 Euro und es passte
          perfekt. Und irgendwann schoss mir ein, dass es Zeit für eine
          Erhöhung war. Ich hatte nun schon mit einigen Kunden gearbeitet und
          gesehen, welche Anforderungen es in dem Bereich gab und was ich den
          bisherigen Kunden geliefert hatte. Ich hatte mich weitergebildet und
          auch spezialisiert und bekam durchweg positive Bestätigung von meinen
          Kunden. Ich entwickelte mich von der klassischen virtuellen
          Assistentin zur{" "}
          <strong className="text-heading">
            Online Business Managerin und Pinterest Marketing Expertin.
          </strong>
        </p>

        <h3 className="article-h3 mt-10">70 Euro rauswürgen</h3>
        <p className="mt-4">
          Und dann schaute ich, wie sich 70 Euro in meinem Mund anfühlten.
          Konnte ich sie rauswürgen oder blieben sie mir im Hals stecken?{" "}
          <strong className="text-heading">60 Euro</strong> kamen easy
          rausgeflutscht, aber <strong className="text-heading">70 Euro</strong>{" "}
          kosteten mich logopädisch schon mehr Anstrengung. Also wusste ich,
          dass das genau richtig ist.
        </p>
        <p className="mt-4">
          Ich bin mir sicher, dass einige potenzielle Kunden meine Anfrage bzw.{" "}
          <Link href="/" className="text-gold-text hover:underline">
            mein Angebot
          </Link>{" "}
          aufgrund des Preises abgelehnt haben. Das sagt natürlich keiner, aber
          ich weiß ja, was ich kann, ich weiß, was die Position verlangt hat,
          und ich weiß, dass ich überzeugende{" "}
          <strong className="text-heading">Erstkontakt-Mails</strong> schreibe.
          Wenn dann ein Nein kommt, bin ich mir sicher, dass es am Stundensatz
          liegt.
        </p>
        <p className="mt-4">
          Dennoch bin ich nicht wieder davon abgewichen, denn da sind wir
          wieder bei meiner Lebenszeit. Ich möchte meine Lebenszeit an Kunden
          geben, die meine Arbeit wertschätzen und die bereit sind, für{" "}
          <strong className="text-heading">erstklassige Qualität</strong> auch
          entsprechend zu zahlen. Klar kann sich das nicht jeder leisten. Ich
          kann mir selbst auch keine VA leisten, die einen Stundensatz von 70
          Euro hat. Aber so abgedroschen der Spruch auch ist, fällt mir dazu
          nur eins ein: That’s life 🤷🏽‍♀️
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgGeldscheine}
            alt="Auf der Grafik sind schematisch dargestellte Geldscheine zu sehen, die keine Währung haben"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>

        <h3 className="article-h3 mt-10">Paketpreise</h3>
        <p className="mt-4">
          Einen letzten Aspekt möchte ich mit dir noch teilen, falls du nach
          wie vor mit deinem Stundensatz haderst. In deinen Preisen findet sich
          nicht nur die reine{" "}
          <strong className="text-heading">Arbeits-/Lebenszeit</strong> wieder,
          die du aktuell zur Verfügung stellst. Sondern auch alles, was du im
          Vorfeld an Zeit (und Geld) investiert hast, um da zu sein, wo du
          gerade bist. Dein Kunde profitiert von all dem Wissen, das du dir im
          Laufe der Jahre als Angestellter und dann als Selbstständiger
          angeeignet hast. Das ist auch der Grund, warum viele Experten dazu
          raten, Paketpreise anzubieten.
        </p>
        <p className="mt-4">
          Das heißt, du definierst einen Leistungsumfang und kalkulierst dafür
          einen Gesamtpreis, ohne dem Kunden aufzuschlüsseln, wie viele Stunden
          du dafür brauchst. Die Befürworter einer solchen{" "}
          <strong className="text-heading">Preisstruktur</strong>{" "}
          argumentieren, dass es den Kunden letztendlich nichts angeht, wie
          lange du für die Aufgabe brauchst. Er möchte Ergebnis XY und du
          berechnest dafür Summe Z.
        </p>
      </section>

      {/* CTA */}
      <section className="article-column py-[30px]">
        <h2 id="deine-preise-finden" className="article-h2">
          Deine Preise finden
        </h2>
        <p className="mt-6">
          Wenn du gerade in deiner Preisstruktur feststeckst und trotz des
          Artikels noch keinen Würgereflex zu einer Zahl gefunden hast: Bleib
          dran. Der Wohlfühlpreis kommt mit der Erfahrung – und mit der
          Klarheit darüber, was deine Lebenszeit wert ist. 1:1-Beratungen
          zur Preisfindung biete ich inzwischen nicht mehr an, denn mein
          Fokus liegt heute komplett auf Pinterest.
        </p>
        <p className="mt-4">
          Als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          unterstützt molloy business Unternehmen dabei, über Pinterest
          organisch sichtbar zu werden – zum Beispiel mit einem{" "}
          <Link
            href="/pinterest-strategie-call/"
            className="text-gold-text hover:underline"
          >
            Pinterest Strategie Call
          </Link>{" "}
          oder einem{" "}
          <Link
            href="/pinterest-audit/"
            className="text-gold-text hover:underline"
          >
            Pinterest Audit
          </Link>
          . Wenn du dazu Fragen hast, vereinbare gern ein{" "}
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
      <section className="article-column py-[30px]">
        <h2 id="lieber-anhoeren" className="article-h2">
          Lieber anhören?
        </h2>
        <p className="mt-6 text-center">
          Keine Zeit zum Lesen? Hier kannst du dir den Artikel auch anhören:{" "}
          <a
            href="https://youtu.be/4_gFU5DOTRs"
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
