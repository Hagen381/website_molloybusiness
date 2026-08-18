import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import TableOfContents from "@/components/TableOfContents";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";
import imgOnAir from "@/assets/images/blog/podcast-pinterest-marketing/podcast-pinterest-3.jpg";
import imgIcons from "@/assets/images/blog/podcast-pinterest-marketing/podcast-pinterest-6.jpg";
import imgAufnahme from "@/assets/images/blog/podcast-pinterest-marketing/podcast-pinterest-5.jpg";
import imgKopfhoerer from "@/assets/images/blog/podcast-pinterest-marketing/podcast-pinterest-4.jpg";
import imgPlayButton from "@/assets/images/blog/podcast-pinterest-marketing/podcast-pinterest-2.jpg";

const post = blogPosts.find((p) => p.slug === "podcast-pinterest-marketing")!;

const path = `/blog/${post.slug}/`;

const h1 =
  "Podcast Pinterest Marketing: Wie dein Podcast auf Pinterest gefunden wird";

export const metadata: Metadata = {
  title: "Podcast auf Pinterest sichtbar machen",
  description:
    "So wird dein Podcast auf Pinterest gefunden: warum Themen statt Folgen zählen, welche Pins funktionieren und wie du einen machbaren Workflow aufbaust.",
  alternates: {
    canonical: path,
  },
};

const imageSizes = "(min-width: 896px) 848px, calc(100vw - 48px)";

const suchanfragen = [
  "„ortsunabhängig arbeiten“",
  "„Selbstständig machen ohne Plan“",
  "„Website für Selbstständige“",
  "„finanzielle Freiheit starten“",
];

const pinIdeen = [
  "Ein Zitat-Pin mit einem starken Satz aus der Folge.",
  "Ein Checklisten-Pin mit den wichtigsten Punkten.",
  "Ein Fehler-Pin nach dem Motto „3 Dinge, die du vermeiden solltest“.",
  "Ein klassischer Themen-Pin, der direkt auf die Folge führt.",
];

const pinFormate = [
  "Zitat-Pins mit einer starken Aussage aus der Folge",
  "Checklisten-Pins, wenn deine Folge praktische Tipps enthält",
  "How-to-Pins, wenn du einen Prozess erklärst",
  "Fehler-Pins, wenn du typische Stolperfallen aufgreifst",
  "Audiogramme, wenn du einen kurzen Ausschnitt aus der Folge als Video darstellen möchtest",
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
  { id: "warum-neue-podcastfolge-online-selten-jemanden-interessiert", label: "Warum „neue Podcastfolge online“ selten jemanden interessiert" },
  { id: "das-problem-niemand-sucht-nach-deinem-podcast", label: "Das Problem: Niemand sucht nach deinem Podcast" },
  { id: "warum-podcast-pinterest-marketing-gut-funktioniert", label: "Warum Podcast Pinterest Marketing gut funktioniert" },
  { id: "warum-du-deinen-podcast-nicht-nur-auf-spotify-verlinken-solltest", label: "Warum du deinen Podcast nicht nur auf Spotify verlinken solltest" },
  { id: "welche-pins-fuer-podcasts-wirklich-sinn-machen", label: "Welche Pins für Podcasts wirklich Sinn machen" },
  { id: "wie-du-einen-pinterest-workflow-fuer-deinen-podcast-aufbaust", label: "Wie du einen Pinterest-Workflow für deinen Podcast aufbaust" },
  { id: "podcast-pinterest-marketing-ist-kein-reichweiten-wunder", label: "Podcast Pinterest Marketing ist kein Reichweiten-Wunder" },
  { id: "fazit-dein-podcast-verdient-mehr-als-einen-instagram-post", label: "Fazit: Dein Podcast verdient mehr als einen Instagram-Post" },
  { id: "lieber-anhoeren", label: "Lieber anhören?" },
] as const;

export default function PodcastPinterestMarketing() {
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
          Vor über einem Jahr habe ich einen Podcast gestartet. Und als
          Pinterest Marketing Expertin natürlich gleich Podcast Pinterest
          Marketing im Kopf gehabt.
        </p>
        <p className="mt-4">
          Früher dachte ich bei Podcasts eher an Menschen mit professionellem
          Studio, fancy Mikrofonen, einem eingespielten Intro und der tiefen
          Überzeugung, dass die Welt unbedingt 87 Minuten ihrer Meinung hören
          muss. Und jetzt sitze ich selbst da, nehme Folgen auf, schneide Ton,
          lade Episoden hoch und denke mir:{" "}
          <strong className="text-heading">„Hm, gar nicht so schwer.“</strong>
        </p>
        <p className="mt-4">
          Aber einen Podcast zu starten ist das eine. Ihn hörbar zu machen, ist
          nochmal eine ganz andere Nummer. Du kannst die beste Folge der Welt
          aufnehmen. Mit Gänsehaut-Momenten, Aha-Effekten und einem Thema, bei
          dem eigentlich alle sagen müssten: „Warum hat mir das noch nie jemand
          so erklärt?“ Aber wenn niemand davon erfährt, bleibt deine Folge
          irgendwo{" "}
          <strong className="text-heading">
            zwischen Spotify, Apple Podcasts und deiner eigenen Euphorie
          </strong>{" "}
          liegen.
        </p>
        <p className="mt-4">
          Und genau hier kommt Pinterest ins Spiel. Nicht, weil Pinterest jetzt
          plötzlich die neue Podcast-Plattform ist. Ist es nicht. Sondern weil
          Pinterest etwas kann, was viele andere Kanäle im Marketing inzwischen
          ziemlich schlecht können:{" "}
          <strong className="text-heading">
            Pinterest kann Inhalte langfristig sichtbar machen.
          </strong>
        </p>
      </section>

      {/* Neue Folge interessiert selten */}
      <section className="article-column py-[30px]">
        <h2 id="warum-neue-podcastfolge-online-selten-jemanden-interessiert" className="article-h2">
          Warum „neue Podcastfolge online“ selten jemanden interessiert
        </h2>
        <p className="mt-6">
          Ich weiß, das klingt jetzt ein bisschen hart. Aber mal ehrlich:
          Wenn du auf Instagram liest „Neue Podcastfolge online“, wie oft
          denkst du dann wirklich: „Oh wow, da habe ich mein ganzes Leben
          drauf gewartet“? Eben.
        </p>
        <p className="mt-4">
          Das Problem ist nicht dein Podcast.{" "}
          <strong className="text-heading">
            Das Problem ist die Art, wie Podcasts oft beworben werden.
          </strong>{" "}
          Viele posten einfach das Cover, schreiben „Neue Folge online“ dazu
          und wundern sich dann, dass außer der besten Freundin und
          vielleicht der eigenen Mutter niemand klickt.
        </p>
        <p className="mt-4">
          Wenn Menschen deinen Podcast noch nicht kennen,{" "}
          <strong className="text-heading">
            interessiert sie erstmal nicht, dass es eine neue Folge gibt.
          </strong>{" "}
          Sie wissen ja noch nicht mal, dass es eine alte Folge gab. Was sie
          aber interessiert, ist ihr eigenes Problem. Ihre Frage. Ihr Wunsch.
          Ihr aktuelles Gedankenkarussell. Und genau da musst du mit deinem
          Podcast ansetzen.
        </p>

        <h3 className="article-h3 mt-10">
          Podcast Pinterest Marketing ist kein Podcast-Werbeplakat
        </h3>
        <p className="mt-4">
          Podcast Pinterest Marketing bedeutet nicht, dass du einfach dein
          Podcast-Cover auf Pinterest hochlädst und hoffst, dass plötzlich
          alle reihenweise auf „Folge anhören“ klicken. Pinterest ist keine
          Plattform, auf der Menschen darauf warten, dass ihnen jemand sein
          Audioformat vorstellt.{" "}
          <strong className="text-heading">
            Pinterest ist eher wie ein riesiger digitaler Ideenmarkt.
          </strong>{" "}
          Die Menschen kommen dorthin, weil sie etwas suchen, planen,
          verstehen oder lösen wollen.
        </p>
        <p className="mt-4">
          Sie suchen nicht zwingend nach „Podcast über Selbstständigkeit“.{" "}
          <strong className="text-heading">Sie suchen vielleicht nach:</strong>
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {suchanfragen.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6">
          Und wenn dein Podcast genau solche Themen behandelt, dann kannst du
          über Pinterest sichtbar werden. Nicht, weil jemand deinen Podcast
          gesucht hat. Sondern weil jemand dein Thema gesucht hat. Das ist
          ein kleiner, aber sehr entscheidender Unterschied.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgOnAir}
            alt="Laptop mit „Podcast on air“ auf dem Bildschirm – Podcast Pinterest Marketing"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Niemand sucht deinen Podcast */}
      <section className="article-column py-[30px]">
        <h2 id="das-problem-niemand-sucht-nach-deinem-podcast" className="article-h2">
          Das Problem: Niemand sucht nach deinem Podcast
        </h2>
        <p className="mt-6">
          Wenn du noch keinen riesigen Namen hast, sucht wahrscheinlich niemand
          aktiv nach deinem Podcast. Als ich meinen Podcast{" "}
          <a
            href="https://www.daslebenistzukurzfuerirgendwann.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            „DLIZKFI – Das Leben ist zu kurz für irgendwann“
          </a>{" "}
          gestartet habe, konnte ich natürlich nicht erwarten, dass wildfremde
          Menschen morgens aufwachen und denken: „Ich muss jetzt unbedingt nach
          diesem Podcast mit dem sehr kurzen und gar nicht erklärungsbedürftigen
          Namen suchen.“ Machen sie nicht.
        </p>
        <p className="mt-4">
          Aber sie suchen vielleicht nach den Themen, über die ich spreche.{" "}
          <strong className="text-heading">
            Nach Freiheit. Nach ortsunabhängigem Leben. Nach mutigen
            Entscheidungen.
          </strong>{" "}
          Nach dem Gefühl, dass da vielleicht noch ein anderes Leben auf sie
          wartet. Und genau das ist der Hebel. Du bewirbst auf Pinterest nicht
          in erster Linie deinen Podcast.{" "}
          <strong className="text-heading">
            Du machst die Themen deines Podcasts sichtbar.
          </strong>
        </p>

        <h3 className="article-h3 mt-10">
          Die Lösung: Denk nicht in Folgen, sondern in Fragen
        </h3>
        <p className="mt-4">
          Viele Podcaster denken in Episoden. Folge 12: Interview mit XY. Folge
          13: Mein Jahresrückblick. Folge 14: Warum ich meine Website
          überarbeitet habe. Für dich als Host ergibt das Sinn. Für fremde
          Menschen erstmal nicht.
        </p>
        <p className="mt-4">
          Auf Pinterest solltest du deshalb nicht fragen:{" "}
          <strong className="text-heading">
            „Wie bewerbe ich diese Folge?“ Sondern: „Welche Frage beantwortet
            diese Folge?“
          </strong>
        </p>
        <p className="mt-4">
          Nehmen wir an, du hast eine Podcastfolge darüber aufgenommen, ob man
          als Selbstständiger eine Website braucht. Dann ist der Pin
          „Podcastfolge 27: Website“ nicht gut auffindbar.{" "}
          <strong className="text-heading">Besser wäre:</strong>{" "}
          „Brauchst du als Selbstständiger wirklich eine Website?“ Oder:
          „Instagram reicht nicht: Warum deine Website wichtiger ist, als du
          denkst“. Oder: „Website für dein Online-Business: Was du am Anfang
          wirklich brauchst“.
        </p>
        <p className="mt-4">
          Das sind Einstiege, bei denen jemand hängenbleibt,{" "}
          <strong className="text-heading">
            weil sie eine konkrete Frage oder Unsicherheit aufgreifen.
          </strong>{" "}
          Und zack: Aus einer Podcastfolge wird ein suchbarer Inhalt.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgIcons}
            alt="Social-Media-Icons auf einem Smartphone"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Warum es funktioniert */}
      <section className="article-column py-[30px]">
        <h2 id="warum-podcast-pinterest-marketing-gut-funktioniert" className="article-h2">
          Warum Podcast Pinterest Marketing gut funktioniert
        </h2>
        <p className="mt-6">
          Pinterest wird oft in die Social-Media-Schublade gesteckt. Finde
          ich jedes Mal wieder schwierig. Pinterest ist kein klassisches
          Social Media. Niemand geht auf Pinterest, um zu sehen, was die
          ehemalige Klassenkameradin heute frühstückt oder ob der Typ aus dem
          Coworking-Space schon wieder ein Reel über seine Morgenroutine
          gemacht hat.
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            Pinterest funktioniert eher wie eine visuelle Suchmaschine.
          </strong>{" "}
          Du gibst ein Thema ein, bekommst Bilder, Ideen, Grafiken und
          Inspirationen ausgespielt und klickst dich dann weiter. Manchmal
          weißt du am Anfang noch gar nicht genau, was du suchst. Du weißt
          nur: Irgendwas mit Wohnzimmer einrichten. Irgendwas mit Fernweh.
          Irgendwas mit Business starten. Irgendwas mit „Ich muss mein Leben
          ändern, aber bitte ohne direkt alles anzuzünden“.
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            Pinterest begleitet Menschen oft sehr früh in ihrem
            Entscheidungsprozess.
          </strong>{" "}
          Und das ist für Podcasts super spannend. Denn dein Podcast kann
          genau an diesem Punkt auftauchen. Nicht erst, wenn jemand schon
          bewusst nach deinem Namen sucht, sondern wenn jemand anfängt, sich
          mit deinem Thema zu beschäftigen.
        </p>

        <h3 className="article-h3 mt-10">
          Deine Podcastfolge ist eigentlich ein Content-Buffet
        </h3>
        <p className="mt-4">
          Ich liebe es ja, wenn man aus einem Inhalt mehrere machen kann.
          Nicht aus Faulheit. Okay, vielleicht auch ein bisschen. Aber vor
          allem, weil es einfach sinnvoll ist. Eine Podcastfolge ist selten
          nur eine Podcastfolge.{" "}
          <strong className="text-heading">
            In einer guten Episode stecken meistens mehrere Gedanken,
            Beispiele, Learnings, Zitate, Fehler, Tipps oder persönliche
            Geschichten.
          </strong>{" "}
          Und all das kannst du für Pinterest nutzen.
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            Aus einer einzigen Folge können zum Beispiel diese Pins
            entstehen:
          </strong>
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {pinIdeen.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6">
          Alle Pins können zur gleichen Episode führen, aber sie sprechen
          unterschiedliche Suchintentionen an. Das ist der Punkt,{" "}
          <strong className="text-heading">
            an dem viele Pinterest plötzlich sympathischer finden.
          </strong>{" "}
          Du musst nicht jeden Tag einen komplett neuen Inhalt aus deinem
          Gehirn pressen. Du kannst das nutzen, was schon da ist.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgAufnahme}
            alt="Aufnahmetaste eines Audio-Rekorders"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Eigene Website */}
      <section className="article-column py-[30px]">
        <h2 id="warum-du-deinen-podcast-nicht-nur-auf-spotify-verlinken-solltest" className="article-h2">
          Warum du deinen Podcast nicht nur auf Spotify verlinken solltest
        </h2>
        <p className="mt-6">
          Wenn du Pinterest für deinen Podcast nutzen möchtest, dann solltest
          du{" "}
          <Link
            href="/blog/website-fuer-dein-business/"
            className="text-gold-text hover:underline"
          >
            eine eigene Website
          </Link>{" "}
          haben. Ja, ich weiß. Noch eine Baustelle.
        </p>
        <p className="mt-4">
          Theoretisch kannst du Pins direkt auf{" "}
          <a
            href="https://open.spotify.com/show/0m7DHiEhXuUZJPDkmtmWb0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            Spotify
          </a>
          ,{" "}
          <a
            href="https://podcasts.apple.com/us/podcast/dlizkfi-das-leben-ist-zu-kurz-f%C3%BCr-irgendwann/id1821004400"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            Apple Podcasts
          </a>{" "}
          oder{" "}
          <a
            href="https://www.youtube.com/@DLIZKFIPodcast"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            YouTube Podcast
          </a>{" "}
          verlinken. Praktisch würde ich das aber nicht als Hauptstrategie
          empfehlen. Warum?
        </p>
        <p className="mt-4">
          Wenn dein Podcast eine eigene Website hat, kannst du sie{" "}
          <strong className="text-heading">
            mit deinem Pinterest-Account verifizieren
          </strong>{" "}
          lassen. Denn Pinterest spielt eher Pins aus, die zu einer
          verifizierten Quelle führen. Und jede Podcastfolge sollte einen
          eigenen Episodenlink haben. Denn Pinterest liebt frische Links.
        </p>
        <p className="mt-4">
          Übrigens, mit{" "}
          <a
            href="https://www.podview.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            Podview
          </a>{" "}
          kannst du ganz easy Webseiten für Podcasts bauen.
        </p>
      </section>

      {/* Welche Pins */}
      <section className="article-column py-[30px]">
        <h2 id="welche-pins-fuer-podcasts-wirklich-sinn-machen" className="article-h2">
          Welche Pins für Podcasts wirklich Sinn machen
        </h2>
        <p className="mt-6">
          Ein Podcast ist Audio. Pinterest ist visuell. Das ist erstmal ein
          kleiner Medien-Clash. Dein Pin muss visuell verständlich machen,
          worum es geht.{" "}
          <strong className="text-heading">
            Nicht die komplette Folge erklären.
          </strong>{" "}
          Aber den Einstieg schaffen.
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            Gut funktionieren können zum Beispiel:
          </strong>
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {pinFormate.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6">
          Bei Audiogrammen würde ich immer{" "}
          <strong className="text-heading">Untertitel</strong> nutzen. Die
          meisten Menschen schauen Pinterest ohne Ton. Wenn dein ganzer
          Inhalt nur hörbar ist, geht er für diese Leute verloren. Und das
          wäre irgendwie ungünstig bei einem Podcast, der ja ohnehin schon
          Audio ist.
        </p>
        <p className="mt-4">
          Wichtig ist auch,{" "}
          <strong className="text-heading">
            keine falsche Erwartung zu wecken.
          </strong>{" "}
          Wenn dein Pin aussieht wie ein ausführlicher Blogartikel, die
          Zielseite aber nur aus einem eingebetteten Player besteht, kann das
          enttäuschen.{" "}
          <strong className="text-heading">
            Sag lieber klar, was passiert:
          </strong>{" "}
          „Podcastfolge anhören“, „In dieser Folge erfährst du …“, „Mehr dazu
          im Podcast“. Ebenfalls kannst du auf den Grafiken mit kleinen Icons
          wie Mikrofonen, Kopfhörern oder Soundwellen arbeiten.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgKopfhoerer}
            alt="Kopfhörer mit Kabel"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Workflow */}
      <section className="article-column py-[30px]">
        <h2 id="wie-du-einen-pinterest-workflow-fuer-deinen-podcast-aufbaust" className="article-h2">
          Wie du einen Pinterest-Workflow für deinen Podcast aufbaust
        </h2>
        <p className="mt-6">
          Pinterest funktioniert nicht nach dem Prinzip: Einmal posten und dann
          abwarten. Du brauchst regelmäßig neue Pins. Das bedeutet aber nicht,
          dass du jeden Tag live in Pinterest sitzen musst, während dein Kaffee
          kalt wird und dein restliches Business traurig in der Ecke wartet.
        </p>
        <p className="mt-4">
          Ich arbeite gern in Blöcken.{" "}
          <strong className="text-heading">Zum Beispiel so:</strong> Du nimmst
          dir mehrere Podcastfolgen vor und überlegst zuerst, welche Themen
          daraus für Pinterest interessant sind. Danach erstellst du mehrere
          Pin-Ideen pro Folge und baust die Grafiken zum Beispiel in Canva. Die
          Pin-Titel und Beschreibungen kannst du vorbereiten und dann über
          Pinterest selbst oder ein{" "}
          <strong className="text-heading">Planungstool</strong> einplanen.
        </p>
        <p className="mt-4">
          Ich nutze für solche Workflows gern{" "}
          <strong className="text-heading">Tailwind</strong>, weil man dort
          Pins gut vorplanen und auf passende Pinnwände verteilen kann. Es geht
          aber auch direkt in Pinterest, vor allem am Anfang. Wichtiger als das
          Tool ist die <strong className="text-heading">Regelmäßigkeit.</strong>{" "}
          Für viele Accounts reichen schon wenige Pins pro Tag, wenn sie gut
          gemacht sind. Lieber drei sinnvolle Pins als 20 lieblos rausgehauene
          Grafiken mit 3 Keywords in der Pinbeschreibung.
        </p>
      </section>

      {/* Kein Reichweiten-Wunder */}
      <section className="article-column py-[30px]">
        <h2 id="podcast-pinterest-marketing-ist-kein-reichweiten-wunder" className="article-h2">
          Podcast Pinterest Marketing ist kein Reichweiten-Wunder
        </h2>
        <p className="mt-6">
          Pinterest wird deinen Podcast nicht über Nacht berühmt machen. Ich
          sage das lieber direkt, bevor hier jemand denkt: „Super, ich lade
          morgen fünf Pins hoch und übermorgen ruft Spotify an.“{" "}
          <strong className="text-heading">So funktioniert es nicht.</strong>{" "}
          Pinterest ist ein langfristiger Kanal. Aber genau das ist ja der
          Vorteil.
        </p>
        <p className="mt-4">
          Ein Instagram-Post ist nach kurzer Zeit wieder weg. Eine Story
          sowieso. Ein Reel kann durch die Decke gehen, aber meistens weiß
          keiner so richtig warum. Und wenn man versucht, es zu wiederholen,
          steht man da wie beim Glücksspielautomaten und drückt immer wieder
          auf denselben Knopf.
        </p>
        <p className="mt-4">
          <strong className="text-heading">Pinterest ist anders.</strong> Ein
          guter Pin kann über Wochen, Monate oder sogar Jahre gefunden
          werden. Natürlich nicht jeder. Aber wenn du deine Podcastfolgen
          strategisch aufbereitest, erhöhst du die Chance, dass sie immer
          wieder auftauchen, wenn jemand nach deinem Thema sucht.
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            Und genau das macht Podcast Pinterest Marketing so spannend.
          </strong>{" "}
          Du musst nicht lauter sein als alle anderen. Du musst relevanter
          sein. Du musst nicht ständig rufen: „Hör meinen Podcast!“ Du musst
          die Frage beantworten, die dein potenzieller Hörer gerade hat.
        </p>
      </section>

      {/* Fazit + CTA */}
      <section className="article-column py-[30px]">
        <h2 id="fazit-dein-podcast-verdient-mehr-als-einen-instagram-post" className="article-h2">
          Fazit: Dein Podcast verdient mehr als einen Instagram-Post
        </h2>
        <p className="mt-6">
          Wenn du einen Podcast hast, steckt da Arbeit drin. Themenfindung.
          Aufnahme. Schnitt. Beschreibung. Upload. Vielleicht noch Social
          Media. Vielleicht noch Newsletter. Vielleicht auch einfach ein
          kleiner Nervenzusammenbruch, weil das Mikrofon plötzlich nicht
          erkannt wird. Wäre doch schade, wenn diese ganze Arbeit nach einem
          kurzen „Neue Folge online“-Post verpufft.
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            Pinterest kann dir helfen, deine Podcastfolgen länger sichtbar zu
            machen.
          </strong>{" "}
          Nicht, indem du deinen Podcast aggressiv bewirbst, sondern indem du
          deine Inhalte als das behandelst, was sie sind: wertvolle Themen,
          Antworten und Denkanstöße. Wenn du also schon regelmäßig
          Podcastfolgen veröffentlichst, hast du vermutlich längst genug
          Content für Pinterest.{" "}
          <strong className="text-heading">
            Du musst ihn nur anders verpacken.
          </strong>
        </p>
        <p className="mt-4">
          Und wenn du jetzt denkst: „Ja, klingt logisch, aber ich habe keine
          Ahnung, wie ich daraus eine richtige Pinterest-Strategie baue“, dann
          lass uns darüber sprechen. Als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          unterstütze ich dich gern dabei, deinen Podcast auf Pinterest
          sichtbar zu machen – mit einer Strategie, die zu deinem Thema, deinem
          Workflow und deinem Business passt. Hier kannst du den ersten Schritt
          machen:{" "}
          <Link
            href="/pinterest-strategie-call/"
            className="text-gold-text hover:underline"
          >
            Pinterest Strategie Call
          </Link>{" "}
          – oder du vereinbarst direkt ein{" "}
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
          Und falls du noch gar keinen Podcast hast, dann lies doch mal meinen{" "}
          <a
            href="https://omr.com/de/reviews/contenthub/riverside-podcast"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            Gastartikel auf OMR Reviews
          </a>
          . Da erkläre ich Schritt für Schritt, wie du einfach und
          kostengünstig deinen eigenen Podcast produzieren kannst.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgPlayButton}
            alt="Play-Button-Symbolleiste eines Audio-Players"
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
            href="https://youtu.be/DTJiok9Caz4"
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
