import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";
import imgAirfryer from "@/assets/images/blog/pinterest-mere-exposure-effekt/pommespinterest-2.jpg";
import imgLoadedFries from "@/assets/images/blog/pinterest-mere-exposure-effekt/pommespinterest-6.jpg";
import imgPommes from "@/assets/images/blog/pinterest-mere-exposure-effekt/pommespinterest-4.jpg";
import imgFriesCta from "@/assets/images/blog/pinterest-mere-exposure-effekt/pommespinterest-3.jpg";

const post = blogPosts.find((p) => p.slug === "pinterest-mere-exposure-effekt")!;

const path = `/blog/${post.slug}/`;

const h1 = "Pinterest, Loaded Fries und der Mere-Exposure-Effekt";

export const metadata: Metadata = {
  title: "Der Mere-Exposure-Effekt im Pinterest Marketing",
  description:
    "Warum wiederholte Bilder Kaufentscheidungen prägen: der Mere-Exposure-Effekt am Beispiel Loaded Fries – und wie Marken ihn auf Pinterest gezielt nutzen.",
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
  { id: "was-mein-pommes-konsum-mit-pinterest-zu-tun-hat", label: "Was mein Pommes-Konsum mit Pinterest zu tun hat" },
  { id: "warum-ich-ploetzlich-staendig-loaded-fries-sehe", label: "Warum ich plötzlich ständig Loaded Fries sehe" },
  { id: "was-bei-pinterest-nutzern-passiert", label: "Was bei Pinterest-Nutzern passiert" },
  { id: "der-mere-exposure-effekt", label: "Der Mere-Exposure-Effekt" },
  { id: "pinterest-als-digitaler-troedelladen-fuer-entdecker", label: "Pinterest als digitaler „Trödelladen“ für Entdecker" },
  { id: "kunden-gewinnen-mit-pinterest-a-k-a-willst-du-jetzt-auch-mehr-pommes-essen", label: "Kunden gewinnen mit Pinterest a.k.a. willst du jetzt auch mehr Pommes essen?" },
  { id: "lieber-anhoeren", label: "Lieber anhören?" },
] as const;

export default function PinterestMereExposureEffekt() {
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
          Je öfter Menschen dein Angebot sehen, desto vertrauter – und
          attraktiver – wird es für sie. Dieser Mere-Exposure-Effekt ist einer
          der stärksten psychologischen Hebel im Pinterest Marketing. Was mein
          eigener Pommes-Konsum damit zu tun hat, liest du in diesem Artikel.
        </p>
      </section>

      {/* Pommes-Konsum */}
      <section className="article-column py-[30px]">
        <h2 id="was-mein-pommes-konsum-mit-pinterest-zu-tun-hat" className="article-h2">
          Was mein Pommes-Konsum mit Pinterest zu tun hat
        </h2>
        <p className="mt-6">
          Ich habe nie sonderlich gern Pommes gegessen. Also ich habe Pommes
          gegessen, wenn sie irgendwo dabei waren, aber ich habe mir im
          Grunde nie explizit Pommes bestellt.{" "}
          <strong className="text-heading">Außer Schwimmbad-Pommes.</strong>{" "}
          Warum schmecken Pommes im Schwimmbad eigentlich so gut?
        </p>
        <p className="mt-4">
          Mit dem Einzug eines Airfryers in fast jeden Haushalt konnten
          Pommes-Liebhaber zumindest schon mal von den labberigen
          Backofen-Pommes auf restauranttaugliche Pommes umstellen.
        </p>
        <p className="mt-4">
          Und auch mein Airfryer läuft nun seit einigen Monaten heiß. Und
          zwar mit Pommes. Ich habe seit einer Weile immer Pommes im
          Gefrierschrank, und wenn sie alle sind, stehen sie mit als Erstes
          auf dem Einkaufszettel.{" "}
          <strong className="text-heading">
            Mein Pommes-Konsum hat sich massiv erhöht,
          </strong>{" "}
          und ich würde inzwischen schon sagen, dass ich Pommes echt gerne
          esse.
        </p>
        <p className="mt-4">
          Aber warum?{" "}
          <strong className="text-heading">
            Und was hat das mit Pinterest zu tun?
          </strong>
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgAirfryer}
            alt="Appetitliche Pommes im Airfryer als Beispiel für visuelles Marketing auf Pinterest und den Mere-Exposure-Effekt"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Loaded Fries */}
      <section className="article-column py-[30px]">
        <h2 id="warum-ich-ploetzlich-staendig-loaded-fries-sehe" className="article-h2">
          Warum ich plötzlich ständig Loaded Fries sehe
        </h2>
        <p className="mt-6">
          Kommen wir erst mal zum Warum.
        </p>
        <p className="mt-4">
          Ich sehe seit ca. 9 Monaten mehrmals die Woche Bilder von Pommes.
          Denn als{" "}
          <strong className="text-heading">Pinterest Marketing Expertin</strong>{" "}
          betreue ich seit Sommer 2025 den{" "}
          <a
            href="https://de.pinterest.com/frittenwerk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            Pinterest-Account von Frittenwerk
          </a>
          . Frittenwerk ist eine deutsche Systemgastronomiekette mit inzwischen
          knapp 50 Filialen in ganz Deutschland.
        </p>
        <p className="mt-4">
          Fritten sind die Basis, doch das Besondere ist das, was oben drauf
          kommt. Die Hauptgerichte, angelehnt an das kanadische Nationalgericht
          Poutine, bestehen aus Pommes mit leckeren Toppings wie Pulled Pork,
          Chicken Shawarma, Guacamole, Pilzrahmsoße und noch ganz vielen
          anderen Köstlichkeiten. Check gern mal die Standorte{" "}
          <a
            href="https://frittenwerk-shop.com/shop/#/location"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            hier
          </a>{" "}
          aus. Vielleicht ist ja ein Frittenwerk in deiner Stadt.
        </p>

        <h3 className="article-h3 mt-10">
          Was mein Gehirn daraus macht
        </h3>
        <p className="mt-4">
          Aber nun zurück zu meinem Pommesverzehr. Ich beschäftige mich also
          seit 9 Monaten mit unzähligen, wahnsinnig appetitlich aussehenden
          Bildern von diesen Loaded Fries. Und dann schreibe ich dazu wahnsinnig{" "}
          <strong className="text-heading">leckere Pin-Beschreibungen,</strong>{" "}
          die auch in Pinterest-Nutzern die Lust auf heiße Fritten wecken
          sollen.
        </p>
        <p className="mt-4">
          Ich beschäftige mich mit Anlässen, die Leute dazu bringen könnten, im{" "}
          <strong className="text-heading">Frittenwerk</strong> zu essen. Ich
          schreibe Zutaten heraus, damit man die Poutines zu Hause nachbauen
          kann, und ich singe den ganzen Tag Loblieder auf diese kanadische
          Version von Pommes rot-weiß.
        </p>
        <p className="mt-4">
          Dadurch glaubt mein Gehirn nun seit einer Weile, dass auch ich mehr
          Pommes essen muss, weil mein Gehirn ja seit Monaten auf Pommes
          getrimmt ist. Es verbindet nur positive Bilder und Texte mit Fritten,
          und demnach erscheint es ihm als logische Konsequenz, dass wir{" "}
          <strong className="text-heading">(also mein Gehirn und ich)</strong>{" "}
          mehr Loaded Fries konsumieren müssen.
        </p>
        <p className="mt-4">
          Soweit, so gut. Aber warum ist das jetzt für dich im Zusammenhang mit
          Pinterest wichtig?
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgLoadedFries}
            alt="Appetitliche Loaded Fries als Beispiel für visuelles Marketing auf Pinterest und den Mere-Exposure-Effekt"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Was bei Nutzern passiert */}
      <section className="article-column py-[30px]">
        <h2 id="was-bei-pinterest-nutzern-passiert" className="article-h2">
          Was bei Pinterest-Nutzern passiert
        </h2>
        <p className="mt-6">
          Genauso, wie mein Gehirn durch die Bilder und Texte abgespeichert
          hat, dass Loaded Fries lecker sind, passiert das Gleiche auch bei
          den Pinterest-Nutzern, die die Pins sehen. Sie gehen in ihre App
          und suchen vielleicht gerade ein Rezept für ein schnelles
          Abendessen. Dann ploppen die{" "}
          <strong className="text-heading">Frittenwerk-Pins</strong> auf. Sie
          nehmen am Rande wahr, dass das lecker aussieht.
        </p>
        <p className="mt-4">
          Beim nächsten Mal suchen sie in ihrer Pinterest-App Snacks für
          unterwegs. Es ploppen wieder Frittenwerk-Pins auf, weil man die
          Poutines auch to go kaufen kann. Jedes Mal, wenn sie auf der Suche
          nach etwas zu essen sind, sehen sie diese leckeren Bilder von den{" "}
          <strong className="text-heading">Frittenwerk-Poutines</strong>.
        </p>
        <p className="mt-4">
          Und irgendwann bleiben sie hängen und denken sich: „Ich muss das
          unbedingt mal ausprobieren.“ Sie klicken auf den Pin und werden
          direkt auf die Seite des Frittenwerks in ihrer Stadt geleitet.{" "}
          <strong className="text-heading">Und zack – Kunde gewonnen.</strong>{" "}
          Und dessen Gehirn hat schon abgespeichert, dass die Pommes lecker
          sind, bevor er überhaupt das erste Mal da war.
        </p>
      </section>

      {/* Mere-Exposure-Effekt */}
      <section className="article-column py-[30px]">
        <h2 id="der-mere-exposure-effekt" className="article-h2">
          Der Mere-Exposure-Effekt
        </h2>
        <p className="mt-6">
          Die Wissenschaft dahinter nennt das Mere-Exposure-Effekt und Priming.
        </p>
        <p className="mt-4">
          Unser Gehirn ist ein faules, aber mächtiges Organ. Es speichert keine
          Nüchternheitsanalysen – es speichert Wiederholungen und Gefühle. Was
          es oft sieht und dabei gut findet, das will es haben. Der sogenannte{" "}
          <strong className="text-heading">Mere-Exposure-Effekt</strong> (bloße
          Exposition) sorgt dafür: Je öfter du etwas siehst, desto vertrauter
          wird es dir, und desto positiver bewertest du es – vorausgesetzt, die
          erste Begegnung war neutral bis positiv. Und bei Pommes-Bildern ist
          die ja wohl gegeben.
        </p>
        <p className="mt-4">
          Dazu kommt der{" "}
          <strong className="text-heading">Priming-Effekt</strong>. Mein Gehirn
          wird ständig auf „Loaded Fries“ getrimmt. Es aktiviert unbewusst alle
          positiven Erinnerungen, die mit Pommes zu tun haben:{" "}
          <strong className="text-heading">
            Schwimmbad, Kinobesuch, Freitagabend, Trostessen, Glücksgefühle
          </strong>
          . Und irgendwann ist die Assoziation so stark, dass ein kleiner
          Auslöser reicht – ein leeres Gefrierfach, ein Werbebanner, oder
          einfach nur ein knurrender Magen – und ich <em>will</em> Pommes.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgPommes}
            alt="Appetitliche Pommes als Beispiel für visuelles Marketing auf Pinterest und den Mere-Exposure-Effekt"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Trödelladen */}
      <section className="article-column py-[30px]">
        <h2 id="pinterest-als-digitaler-troedelladen-fuer-entdecker" className="article-h2">
          Pinterest als digitaler „Trödelladen“ für Entdecker
        </h2>
        <p className="mt-6">
          Und das funktioniert natürlich nicht nur für Loaded-Fries-Gerichte.
          Das funktioniert für so ziemlich jedes Produkt. Pinterest ist ein
          Ort für Entdecker. Die Menschen kommen nicht auf die Plattform,
          weil sie schon genau wissen, was sie wollen, sondern sie kommen,
          weil sie etwas vorhaben. Sie wollen etwas planen oder sich zu einem
          Thema inspirieren lassen.{" "}
          <strong className="text-heading">
            Sie sind dort mit einer Art kindlicher Neugier unterwegs.
          </strong>{" "}
          Alles könnte irgendwie interessant sein.
        </p>
        <p className="mt-4">
          Ich vergleiche das gern mit einem Trödelladen: Stell dir vor, du
          gehst in einen Trödelladen. Du gehst rein, weil du weißt, dass du
          dort etwas Besonderes finden kannst, aber du weißt noch gar nicht
          ganz genau, was es sein wird. Vielleicht suchst du grob eine Lampe,
          aber dann sticht dir auch noch eine Vase ins Auge. Die brauchst du
          vielleicht nicht so dringend wie eine Lampe, aber wie sie da so
          steht, so in Szene gesetzt auf dem gedeckten Tisch, erkennst du,
          dass sie sich super in der einen Ecke in deinem Wohnzimmer machen
          würde.
        </p>
        <p className="mt-4">
          Ganz anders verhältst du dich, wenn du ganz genau weißt, was du
          willst.{" "}
          <strong className="text-heading">
            In der Regel „googelst“ du dann.
          </strong>{" "}
          Du gibst recht konkret ein, was du kaufen möchtest. Du bist nicht
          mehr im Entdeckermodus. Du willst nicht mehr stöbern. Du willst
          genau dieses Produkt von diesem Hersteller. Du bist nicht mehr im
          Trödelladen. Du bist im Nike-Store.
        </p>
        <p className="mt-4">
          Wenn du in einen{" "}
          <strong className="text-heading">Nike-Laden</strong> gehst, dann,
          weil du ganz genau weißt, dass du jetzt neue Laufschuhe kaufen
          musst. Du willst welche von Nike, nicht von Asics. Sonst wärst du
          ja in einem Asics-Laden. Es ist fast unmöglich, dass du in diesem
          Zustand offen für andere Marken bist.
        </p>

        <h3 className="article-h3 mt-10">
          Der psychologische Unterschied: Pinterest vs. Google
        </h3>
        <p className="mt-4">
          So ist das mit Pinterest und Google. Bei Google weißt du, wonach du
          suchst. Bei Pinterest stöberst du. Und genau da liegt deine Chance
          als Marke: Du wirst nicht nur gefunden, wenn man dich schon kennt.{" "}
          <strong className="text-heading">Du wirst entdeckt.</strong> Ganz
          nebenbei.
        </p>
        <p className="mt-4">
          Das ist der entscheidende psychologische Hebel von Pinterest, den
          viele unterschätzen: Du musst deine Kunden nicht im Moment der
          Kaufentscheidung überzeugen.{" "}
          <strong className="text-heading">
            Du überzeugst sie schon lange vorher.
          </strong>{" "}
          Mit schönen Bildern und positiven Assoziationen
          (Mere-Exposure-Effekt. Weißt du noch?!).
        </p>
        <p className="mt-4">
          Irgendwann ist ihr Gehirn „deine Marke gewohnt“ und wenn die User
          tatsächlich das brauchen, was du verkaufst – dann bist du längst in
          ihrem Kopf. Ohne dass sie sich jemals bewusst für dich entschieden
          haben. Ihr Gehirn hat das längst erledigt.
        </p>
      </section>

      {/* CTA */}
      <section className="article-column py-[30px]">
        <h2 id="kunden-gewinnen-mit-pinterest-a-k-a-willst-du-jetzt-auch-mehr-pommes-essen" className="article-h2">
          Kunden gewinnen mit Pinterest a.k.a. willst du jetzt auch mehr Pommes
          essen?
        </h2>
        <p className="mt-6">
          Wenn du möchtest, dass dein Angebot auch vom Mere-Exposure-Effekt
          profitiert, dann reicht es nicht, einmal sichtbar zu sein.{" "}
          <strong className="text-heading">
            Dann brauchst du eine Strategie,
          </strong>{" "}
          die dafür sorgt, dass deine Inhalte immer wieder auftauchen – genau
          im richtigen Moment. Als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          unterstützt molloy business dich genau dabei.
        </p>
        <p className="mt-4">
          Hast du jetzt auch Hunger auf Loaded Fries? Dann lass uns gemeinsam
          deine Pinterest-Strategie aufbauen! Hier kannst du den ersten Schritt
          machen{" "}
          <Link
            href="/pinterest-strategie-call/"
            className="text-gold-text hover:underline"
          >
            (Klick.)
          </Link>{" "}
          Oder du vereinbarst direkt ein{" "}
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
        <p className="mt-4">
          PS: Du denkst vielleicht „Warum schreibt sie da extra Klick hin?“
          Auch hier spreche ich mit deinem Gehirn, das sich tatsächlich mehr
          aufgefordert fühlt zu klicken, wenn ich es explizit schreibe 😉
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgFriesCta}
            alt="Appetitliche Loaded Fries als Beispiel für visuelles Marketing auf Pinterest und den Mere-Exposure-Effekt"
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
            href="https://youtu.be/BbgLt2J47Io"
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
