import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";
import imgBlueBeauty from "@/assets/images/blog/pinterest-marketing/PinterestPredictsFotos-1-1.png";
import imgKuechenKitsch from "@/assets/images/blog/pinterest-marketing/PinterestPredictsFotos-2.png";
import imgRetroHochzeit from "@/assets/images/blog/pinterest-marketing/PinterestPredictsFotos-3.png";
import imgFastFood from "@/assets/images/blog/pinterest-marketing/PinterestPredictsFotos-4.png";
import imgKoerperpflege from "@/assets/images/blog/pinterest-marketing/PinterestPredictsFotos-10.png";
import imgQualle from "@/assets/images/blog/pinterest-marketing/PinterestPredictsFotos-8.png";

const post = blogPosts.find((p) => p.slug === "pinterest-marketing")!;

const path = `/blog/${post.slug}/`;

const h1 = "Was ist Pinterest Marketing und wie funktioniert es?";

export const metadata: Metadata = {
  title: "Was ist Pinterest Marketing? Ein Ratgeber",
  description:
    "Was ist Pinterest Marketing? Wie die visuelle Suchmaschine funktioniert, warum Pins monatelang Traffic bringen und wie du mit Keywords gefunden wirst.",
  alternates: {
    canonical: path,
  },
};

const imageSizes = "(min-width: 896px) 848px, calc(100vw - 48px)";

const trendBeispiele = [
  {
    img: imgBlueBeauty,
    alt: "Auswahl an verschiedenen blauen Lidschatten",
    caption:
      "Blue Beauty – Aquamarines Make-up ist zurück, blauer denn je. Suchbegriff: blauer Lidschatten Ästhetik +65 %",
  },
  {
    img: imgKuechenKitsch,
    alt: "Küchentisch und Küchenbuffet im Hintergrund mit allerhand Deko",
    caption:
      "Küchen-Kitsch – Bye bye, Minimalismus. Hallo, Kitsch. Suchbegriff: kitschige Küche +75 %",
  },
  {
    img: imgRetroHochzeit,
    alt: "Frau in einem kurzen Hochzeitskleid mit Blumenstrauß, im Hintergrund ein alter blauer Porsche",
    caption:
      "Retro-Hochzeiten – Hochzeiten im Stil der 70er-Jahre feiern in diesem Jahr ein Comeback. Suchbegriff: retro Hochzeitsmotto +80 %",
  },
  {
    img: imgFastFood,
    alt: "Burger-Quesadilla – ein Wrap mit Hackfleisch- und Käsefüllung",
    caption:
      "Fast-Food-Fusion – 2024 stehen z. B. „Burger-Quesadillas“ und „PizzaPot Pies“ auf der Speisekarte. Suchbegriff: Burger Quesadilla +80 %",
  },
  {
    img: imgKoerperpflege,
    alt: "Fünf Flaschen mit Körperpflege-Produkten",
    caption:
      "Strahlend von Kopf bis Fuß – Im Jahr 2024 wird Körperpflege ein großes Thema sein. Suchbegriff: Körperpflege +845 %",
  },
  {
    img: imgQualle,
    alt: "Große Lampe in Form einer Qualle",
    caption:
      "Quallen-Ästhetik – Von Inneneinrichtung über Fashion bis hin zu Beauty. 2024 heißt es: alles Qualle. Suchbegriff: Quallen Lampe +95 %",
  },
];

const beautySuchanfragen = [
  "Sonnencreme +75 %",
  "Body Lotion Ästhetik +245 %",
  "Spa Ästhetik +60 %",
  "Körper Hautpflege Routine +1.025 %",
  "Körperpflege +845 %",
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
  { id: "was-ist-pinterest-marketing", label: "Was ist Pinterest Marketing?" },
  { id: "pinterest-strategie", label: "Pinterest-Strategie" },
  { id: "produkte-oder-dienstleistungen-beides-geht-bei-pinterest", label: "Produkte oder Dienstleistungen – beides geht bei Pinterest" },
  { id: "pinterest-predicts-report", label: "Pinterest Predicts Report" },
  { id: "pinterest-und-keywords", label: "Pinterest und Keywords" },
  { id: "fazit", label: "Fazit" },
  { id: "lieber-anhoeren", label: "Lieber anhören?" },
] as const;

export default function PinterestMarketing() {
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
          Pinterest Marketing bedeutet, dein Business über die visuelle
          Suchmaschine Pinterest sichtbar zu machen – mit Pins, die auf deine
          Website verlinken und über Monate Traffic bringen. Lege damit das
          Fundament für ein solides organisches Businesswachstum. In diesem
          Artikel erfährst du, wie du deinen Content platzieren kannst und vor
          allem, warum du Pinterest mehr Beachtung schenken solltest. Wenn du
          keine Lust zu lesen hast, kannst du auch hier meinen{" "}
          <a
            href="https://www.udemy.com/course/pinterest-crash-kurs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            Pinterest Crash Kurs
          </a>{" "}
          in nur 40 Minuten machen.
        </p>
      </section>

      {/* Was ist Pinterest Marketing */}
      <section className="article-column py-[30px]">
        <h2 id="was-ist-pinterest-marketing" className="article-h2">
          Was ist Pinterest Marketing?
        </h2>
        <p className="mt-6">
          Vermutlich hast du die Pinterest-App schon auf dem Handy
          vorinstalliert. Und vielleicht nutzt du Pinterest auch schon, um
          nach <strong className="text-heading">Rezepten</strong> zu schauen,{" "}
          <strong className="text-heading">DIY-Ideen</strong> zu
          recherchieren oder um dich von angesagten{" "}
          <strong className="text-heading">Interior-Trends</strong>{" "}
          inspirieren zu lassen. Doch bist du auch schon auf die Idee
          gekommen, Pinterest als Marketing-Tool fürs eigene Business zu
          nutzen?
        </p>
        <p className="mt-4">
          Dein Marketing-Mix enthält vermutlich einige Social-Media-Kanäle,
          um easy und kostengünstig auf dich oder dein Produkt aufmerksam zu
          machen. Und Pinterest gehört da ebenfalls rein.{" "}
          <strong className="text-heading">
            Streng genommen ist Pinterest kein soziales Netzwerk, sondern
            eine Suchmaschine.
          </strong>{" "}
          Und zwar eine visuelle Suchmaschine. Genau das ist das Besondere
          und eine perfekte Möglichkeit fürs Marketing. Pinterest verbindet
          die SEO-Aspekte von Google mit den interessenbasierten Suchanfragen
          auf Social Media.
        </p>
        <p className="mt-4">
          Manchmal können potenzielle Kunden ihre Wünsche noch gar nicht
          richtig in Worte fassen, wissen aber, was sie suchen, sobald sie
          ein passendes Bild dazu sehen.{" "}
          <strong className="text-heading">
            Das Gehirn kann Bilder wesentlich schneller verarbeiten als
            Texte.
          </strong>{" "}
          Man kennt es von sich selbst – bei einer Suchanfrage auf Google
          scrollt man meistens nur bis zum Ende der ersten Seite. Bei
          Pinterest scrollen die User bis zu 60 Pins durch. Hinter jedem
          dieser Pins könnte dein Business verlinkt sein.
        </p>

        <h3 className="article-h3 mt-10">
          Von Pinterest auf deine Website
        </h3>
        <p className="mt-4">
          Ziel ist es, dass deine Wunschkunden vom Pinterest-Pin auf deine
          Website gelangen. Es ist eben nicht so wie bei Social Media, dass
          die User möglichst lange und vor allem möglichst ausschließlich in
          der App verweilen sollen. Sondern Pinterest wirbt selbst damit,
          dass bei Pinterest alles anders ist:{" "}
          <strong className="text-heading">
            „It’s different here“ ist der Leitspruch.
          </strong>{" "}
          Es ist ihnen wichtig, die Interessenten auf eine Zielseite zu
          geleiten, die ihre Suchanfrage möglichst akkurat beantwortet. Wie
          das eine Suchmaschine nun eben auch so machen soll.
        </p>
        <p className="mt-4">
          Die Pins und somit die Verlinkung auf deine Website haben eine
          Überlebensdauer von mehreren Monaten. Wohingegen ein Post auf
          Instagram nur zwischen 24 und 72 Stunden relevant ist. Dadurch ist
          Pinterest Marketing eine unglaublich nachhaltige Strategie im
          Marketing-Mix. Und bei rund 20 Millionen Nutzern allein in
          Deutschland wird dein Content garantiert von der richtigen
          Zielgruppe gefunden, denn die Generationsverteilung ist recht
          ausgeglichen.
        </p>
      </section>

      {/* Strategie */}
      <section className="article-column py-[30px]">
        <h2 id="pinterest-strategie" className="article-h2">
          Pinterest-Strategie
        </h2>
        <p className="mt-6">
          Im Grunde genommen möchtest du doch, dass deine Kunden zu dir nach
          Hause kommen. Also auf deine Homepage. Nur dort kannst du wirklich zu
          100 % selbst steuern, was die Besucher wann und wie sehen. Warum eine
          eigene Website so wichtig für dein Business ist, liest du übrigens in{" "}
          <Link
            href="/blog/website-fuer-dein-business/"
            className="text-gold-text hover:underline"
          >
            diesem Blogartikel
          </Link>
          . Allerdings
          machen wir uns alle immer abhängiger von Social Media und erstellen
          guten Content, der leider viel zu schnell verpufft. Natürlich ist
          Pinterest kein Ersatz für irgendeinen anderen Marketing-Kanal. Die
          Mischung macht’s!
        </p>
        <p className="mt-4">
          Neben all den schnelllebigen Social-Media-Plattformen ist Pinterest
          quasi die Mutti, die alles ein bisschen zusammenhält. Denn du kannst
          natürlich mit deinen Pins auch all deine anderen
          Online-Marketing-Kanäle in Szene setzen. Du kannst auf deine
          Instagram-Accounts verlinken, auf deinen YouTube-Channel, auf deinen
          Etsy-Shop oder auf deinen Podcast. Die Liste ist lang und du kannst
          all diesen Kanälen zu mehr Sichtbarkeit verhelfen. Welche Strategie
          du da wählst, ist dir überlassen. Empfehlenswert ist da das
          Trial-and-Error-Prinzip. Durch die Pinterest-Analytics oder weitere
          Analyse-Tools schaust du dann, welche Pins dir den meisten Traffic
          gebracht haben.
        </p>
        <p className="mt-4">
          Wenn du zum Beispiel einen Etsy-Shop hast, aber auch einen eigenen
          Online-Shop auf deiner Website, dann empfiehlt es sich natürlich, die
          Pinterest-Strategie so zu wählen, dass die Kunden möglichst direkt in
          deinem Shop landen und nicht zu Etsy verlinkt wird. Solltest du aber
          noch weit entfernt von einem eigenen Online-Shop sein, lohnt es sich
          natürlich trotzdem, schon jetzt mit Pinterest zu starten, erstmal auf
          den externen Shop zu leiten und später über den Pin wieder zu dir.
          Die Customer Journey im Hintergrund ist für die Interessenten erstmal
          egal, denn sie wollen dein Produkt kaufen, und sobald sie durch den
          Pin auf einer Seite landen, auf der sie ihr Wunschprodukt bekommen,
          sind sie zufrieden.
        </p>
      </section>

      {/* Produkte oder Dienstleistungen */}
      <section className="article-column py-[30px]">
        <h2 id="produkte-oder-dienstleistungen-beides-geht-bei-pinterest" className="article-h2">
          Produkte oder Dienstleistungen – beides geht bei Pinterest
        </h2>
        <p className="mt-6">
          Aber lass dich nicht abschrecken, wenn du kein physisches Produkt
          zu vermarkten hast. Pinterest ist ebenfalls ein absoluter
          Trafficbooster für alle Dienstleister. Pinterest-User wollen
          langfristige Inspiration und vor allem Information. Laut Pinterest
          geben 67 % der User an, dass sie bei Pinterest recherchieren, BEVOR
          sie mit einem neuen Projekt starten. Sie merken sich dann also ein
          paar Pins mit dem entsprechenden Thema und klicken entweder gleich
          weiter oder kehren zu einem späteren Zeitpunkt auf ihre Pinnwände
          zurück, um sich tiefer einzulesen. Somit bieten verlinkte
          Blogbeiträge, How-to-Listen oder Dienstleistungsangebote den
          optimalen Nutzen für die Interessenten, um sich zu informieren.
          Thematisch kann sich hier jeder mit seinem Business sehen. Ob
          Paartherapeuten, Wedding-Blogs, Business-Tipps, vegane
          Hundeernährung, Winterurlaube für Großfamilien oder Finanztipps –
          es wird alles gesucht.
        </p>
      </section>

      {/* Predicts Report */}
      <section className="article-column py-[30px]">
        <h2 id="pinterest-predicts-report" className="article-h2">
          Pinterest Predicts Report
        </h2>
        <p className="mt-6">
          Wenn du keine richtige Idee bekommst, wie du deine eigene
          Pinterest-Marketing-Strategie ausfeilen kannst, hilft dir sicher der{" "}
          <a
            href="https://business.pinterest.com/de/pinterest-predicts/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            Pinterest Predicts Report
          </a>
          .
        </p>
        <p className="mt-4">
          Da werden die vermuteten Trends für das kommende Jahr aufgelistet,
          inklusive vorgeschlagener Keywords, die voraussichtlich dazu genutzt
          werden. Hier muss man manchmal ein bisschen schmunzeln, was da so
          angeblich im Trend liegen soll. Doch die Trefferquote der letzten
          Jahre lag bei 80 %. Also von 10 vorhergesagten Trends haben sich
          tatsächlich 8 auch so entwickelt. Hier ein paar Beispiele für die{" "}
          <strong className="text-heading">Pinterest Trends 2024:</strong>
        </p>

        {trendBeispiele.map((trend) => (
          <figure key={trend.caption} className="mt-10">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
              <ExportedImage
                src={trend.img}
                alt={trend.alt}
                fill
                className="object-cover"
                sizes={imageSizes}
                basePath={basePath}
              />
            </div>
            <figcaption className="font-body mt-3 text-sm italic">
              {trend.caption}
            </figcaption>
          </figure>
        ))}

        <h3 className="article-h3 mt-10">
          Was tun mit den Erkenntnissen?
        </h3>
        <p className="mt-4">
          Was kannst du nun mit den Erkenntnissen aus dem Pinterest Predicts
          Report anfangen? Manche Trends treffen vielleicht nicht den
          persönlichen Geschmack oder du hältst sie für unwahrscheinlich.
          Dennoch kann der eine oder andere wertvolle Erkenntnisse aus diesem
          Forecast ziehen.
        </p>
        <p className="mt-4">
          Beispiel Beauty – neben Körperpflege erleben folgende Suchanfragen
          einen Aufschwung:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {beautySuchanfragen.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6">
          Wenn du sowieso schon in diesem Bereich tätig bist, alles super. Wenn
          du aber gerade überlegst, ob du dich zum Beispiel mit{" "}
          <strong className="text-heading">
            Network-Marketing für Pflegeprodukte
          </strong>{" "}
          selbstständig machen solltest, dann hast du hier deine Antwort.
          Pinterest eignet sich sowieso schon seit jeher als Marketingkanal für
          Beauty-Themen. Doch 2024 noch viel mehr. Wenn du dann noch coolen
          Video-Content für die Suchanfrage „Körper Hautpflege Routine
          +1.025 %“ produzierst, gehst du durch die Decke. Die Videos kannst du
          dann auch noch bei TikTok und YouTube Shorts hochladen und so easy
          deinen Content recyclen – just saying…
        </p>
        <p className="mt-4">
          Wichtig für dein Pinterest-Konzept ist eigentlich nur, dass nichts in
          Stein gemeißelt ist. Du kannst dich ausprobieren und einfach sehen,
          welche Pins gut bei deiner Zielgruppe ankommen.
        </p>
      </section>

      {/* Keywords */}
      <section className="article-column py-[30px]">
        <h2 id="pinterest-und-keywords" className="article-h2">
          Pinterest und Keywords
        </h2>
        <p className="mt-6">
          Wenn Pinterest eine Suchmaschine ist, dann müsste man die Pins doch
          auch suchmaschinenoptimiert anlegen können?! Richtig. Es ist sogar
          mehr als gewünscht. Doch wo bringst du deine Keywords am besten
          unter?
        </p>
        <p className="mt-4">
          Wenn du einen Pin anlegst, hast du für den Pin-Titel 100 Zeichen
          zur Verfügung und 500 Zeichen für die Pin-Beschreibung.{" "}
          <strong className="text-heading">
            Und genau hier gehören die Keywords rein.
          </strong>{" "}
          Allerdings nicht nur stumpf aneinandergereiht (auch wenn das einige
          so machen), sondern schon als schönen kleinen SEO-Text verpackt.{" "}
          <strong className="text-heading">
            Recherchiere deine Pinterest-Keywords über die Suchfunktion von
            Pinterest
          </strong>
          , indem du einfach ein Wort zu deinem Thema eingibst und siehst,
          welche Longtail-Keywords sich daraus ergeben. Zusätzlich kannst du
          auch die ABC-Keyword-Suche heranziehen. Es lohnt sich auch, im
          Google-Suchfeld parallel zu schauen und weitere Keywords von dort
          zu ergänzen.
        </p>
        <p className="mt-4">
          Dies sind nur die offensichtlichen Wege, deine Keywords zu finden.
          Es gibt natürlich noch einige mehr, doch alle Vorgehensweisen für
          Keyword-Recherche würden an dieser Stelle den Rahmen sprengen.
        </p>
        <p className="mt-4">
          Wichtig ist, dass du eine{" "}
          <strong className="text-heading">Keyword-Liste</strong> anlegst und
          diese auch ausgiebig nutzt. Denn neben den Pins hast du auch bei
          den Boards 100 Zeichen für den Titel und 500 Zeichen für die
          Board-Beschreibungen. Im besten Fall pinnst du den Pin mit den
          Keywords XYZ auf der Pinnwand mit den gleichen Keywords XYZ. Und
          als Sahnehäubchen beinhaltet auch noch die Profilbeschreibung
          deines Accounts die relevantesten Keywords.
        </p>
        <p className="mt-4">
          Auf den Text-Overlays der Pins kannst du natürlich ebenso deine
          Keywords unterbringen. Doch bedenke, dass die meisten User ihr
          Smartphone für Internetaktivitäten nutzen. Somit sollten die
          Overlays nur kurze und gut lesbare Texte beinhalten.
        </p>
        <p className="mt-4">
          Da die Pins auf deine Website führen, sollten dort die wichtigsten
          Keywords ebenfalls vorhanden sein und deine Website sollte im
          Allgemeinen gut aufbereitet und optimiert sein. Also alle Links
          müssen funktionieren und die Botschaft, die im Pin vermittelt wird,
          sollte sich auch dahinter (also auf der Website) wiederfinden. Ein
          Pin, der mit 7 Schritten zum perfekten Hundepool lockt, darf dann
          nicht auf eine Seite führen, auf der du nur blaue
          Plastik-Sandmuscheln verkaufst. Pinterest würde diesen Pin dann
          nicht als relevant einstufen. Ein bisschen um die Ecke denken ist
          in Ordnung, aber bei Pinterest geht es um Qualität. Also optimiere
          nicht nur deine Pins, sondern auch die Ziele, zu denen die Pins
          führen.
        </p>
      </section>

      {/* Fazit + CTA */}
      <section className="article-column py-[30px]">
        <h2 id="fazit" className="article-h2">
          Fazit
        </h2>
        <p className="mt-6">
          Pinterest ist die Wohlfühloase des Internets. Hier geht es nicht um
          Bad Vibes und Hass-Kommentare, die manch eine Idee auf Social Media
          komplett durch den Kakao ziehen können. Hier wollen die Besucher sich
          inspirieren lassen. Sie wollen schöne Bilder sehen und großartigen
          Input bekommen und all die Ideen und Anreize dann auch im wahren
          Leben umsetzen.
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            Du hast mit Pinterest eine einzigartige Plattform, um dein Business
            sichtbar zu machen
          </strong>{" "}
          und profitierst von den positiven Schwingungen, mit denen die User in
          die App gehen. Sie wollen aktiv sein, sie wollen kaufen und sie
          wollen nicht nur stumpf durchscrollen, um sich kurz mal abzulenken.
          Pinterest ist mit keiner anderen Plattform vergleichbar und bringt
          nochmal ein ganz anderes Flair in dein Marketing-Konzept. Pinterest
          macht einfach Spaß. Den Usern und auch dir! Pin your interest and see
          what happens.
        </p>
        <p className="mt-4">
          Hast du auch Lust auf Pinterest für dein Unternehmen bekommen? Dann
          schau dir doch mal meinen{" "}
          <Link
            href="/pinterest-strategie-call/"
            className="text-gold-text hover:underline"
          >
            Pinterest Strategie Call
          </Link>{" "}
          an. Und wenn du die Umsetzung lieber komplett abgeben möchtest: Wie
          eine{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          wie molloy business dich dabei unterstützt, zeigt die Startseite –
          oder du vereinbarst direkt ein{" "}
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
            href="https://youtu.be/hgtRRVBYFvQ"
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
