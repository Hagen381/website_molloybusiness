import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";
import imgBank from "@/assets/images/blog/10-dinge-im-online-business/Jahresrueckblick-6.png";
import imgVideokurs from "@/assets/images/blog/10-dinge-im-online-business/Jahresrueckblick-2.png";
import imgBlog from "@/assets/images/blog/10-dinge-im-online-business/Jahresrueckblick-4.png";
import imgFirmenkonto from "@/assets/images/blog/10-dinge-im-online-business/Jahresrueckblick-5.png";
import imgYouTube from "@/assets/images/blog/10-dinge-im-online-business/Jahresrueckblick-3.png";

const post = blogPosts.find((p) => p.slug === "10-dinge-im-online-business")!;

const path = `/blog/${post.slug}/`;

const h1 =
  "10 Dinge, die ich dieses Jahr in meinem Online-Business zum ersten Mal gemacht habe";

export const metadata: Metadata = {
  title: "10 Dinge, die ich im Online-Business zum ersten Mal gemacht habe",
  description:
    "Für eine Bank gearbeitet, einen Videokurs erstellt, das Firmenkonto bis auf 92 Cent ausgereizt: ein ehrlicher Jahresrückblick über zehn erste Male im Business.",
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
  { id: "1-zum-ersten-mal-fuer-eine-bank-gearbeitet", label: "1. Zum ersten Mal für eine Bank gearbeitet" },
  { id: "2-zum-ersten-mal-meta-ads-geschaltet", label: "2. Zum ersten Mal Meta Ads geschaltet" },
  { id: "3-zum-ersten-mal-einen-videokurs-erstellt", label: "3. Zum ersten Mal einen Videokurs erstellt" },
  { id: "4-zum-ersten-mal-stornorechnungen-ausgestellt", label: "4. Zum ersten Mal Stornorechnungen ausgestellt" },
  { id: "5-zum-ersten-mal-einen-blog-erstellt", label: "5. Zum ersten Mal einen Blog erstellt" },
  { id: "6-zum-ersten-mal-ein-affiliate-produkt-verkauft", label: "6. Zum ersten Mal ein Affiliate-Produkt verkauft" },
  { id: "7-zum-ersten-mal-mein-firmenkonto-ausgereizt", label: "7. Zum ersten Mal mein Firmenkonto ausgereizt" },
  { id: "8-zum-ersten-mal-einen-online-schuelerpraktikanten-beschaeftigt", label: "8. Zum ersten Mal einen Online-Schülerpraktikanten beschäftigt" },
  { id: "9-zum-ersten-mal-einen-youtube-kanal-erstellt", label: "9. Zum ersten Mal einen YouTube-Kanal erstellt" },
  { id: "10-zum-ersten-mal-mein-geschaeftsjahr-reflektiert", label: "10. Zum ersten Mal mein Geschäftsjahr reflektiert" },
  { id: "lieber-anhoeren", label: "Lieber anhören?" },
] as const;

export default function ZehnDingeImOnlineBusiness() {
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
          Ich überlege schon eine Weile, ob ich einen Jahresrückblick machen
          soll, oder nicht. Das ist ein bisschen wie mit den
          Weihnachtskalendern – jeder macht einen, aber jeder ist davon
          genervt, dass jeder einen macht.
        </p>
        <p className="mt-4">
          Doch dann wurde ich durch einen LinkedIn-Beitrag inspiriert, in dem
          jemand darüber schrieb, was er dieses Jahr alles zum ersten Mal
          gemacht hat. Gerade kürzlich hatte ich mir in mein Notizbuch Dinge
          geschrieben, die ich dieses Jahr neu gelernt habe, die ich letztes
          Jahr um diese Zeit noch nicht konnte. Und somit war die Entscheidung
          gefallen: Ich mache einen Jahresrückblick über 10 Dinge, die ich
          dieses Jahr in meinem Online-Business zum ersten Mal gemacht habe.
        </p>
      </section>

      {/* 1. Bank */}
      <section className="article-column py-[30px]">
        <h2 id="1-zum-ersten-mal-fuer-eine-bank-gearbeitet" className="article-h2">
          1. Zum ersten Mal für eine Bank gearbeitet
        </h2>
        <p className="mt-6">
          Anfang des Jahres erhielt ich eine Anfrage über LinkedIn von
          jemandem, der sich mit mir über Pinterest austauschen wollte. Bis
          zu unserem vereinbarten Termin recherchierte ich ein wenig über
          die Person und fand einen Instagram-Account, auf dem es um
          Fotografie ging. Ah, na das passte ja perfekt. Pinterest und
          Fotografie.
        </p>
        <p className="mt-4">
          Doch bei unserem Telefonat stellte sich dann heraus, dass es um
          die Bank ging, bei der er arbeitete. Bank? Ich? Pinterest? Häh?
          Ich bin nicht der Zahlentyp und habe einfach mal nichts in meiner
          Laufbahn, was es rechtfertigen würde, für eine Bank zu arbeiten.
        </p>
        <p className="mt-4">
          Parallel hatte ich mir aber vorgenommen, mich dieses Jahr ein
          wenig mehr mit Geldanlage zu beschäftigen. Da empfand ich es als
          Wink mit dem Zaunpfahl, dass sich plötzlich eine Bank bei mir
          meldete und fragte, ob ich ihnen ein Pinterest-Profil aufbauen
          könnte. Da sie einen sehr umfangreichen Blog auf ihrer Website
          haben, bedeutete das für mich, dass ich mich ganz automatisch mit
          Finanzthemen auseinandersetzen musste. Und für
          Marketingaktivitäten muss man nicht unbedingt ein Zahlengenie sein
          – auch nicht, wenn man für eine Bank arbeitet.
        </p>
        <p className="mt-4">
          Die Bank ist ziemlich cool und hat rein gar nichts mit dem
          verstaubten Image zu tun, was man sonst so mit einer Bank
          verbindet oder mit deren Angestellten. Inzwischen unterstütze ich
          sie nicht nur bei Pinterest, sondern auch für ein wöchentlich
          erscheinendes Finanzquiz auf Facebook, für das ich Fragen
          recherchiere und mir 4 Antwortmöglichkeiten überlege.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgBank}
            alt="Grafik eines Bankinstituts"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* 2. Meta Ads */}
      <section className="article-column py-[30px]">
        <h2 id="2-zum-ersten-mal-meta-ads-geschaltet" className="article-h2">
          2. Zum ersten Mal Meta Ads geschaltet
        </h2>
        <p className="mt-6">
          Als ich mit Instagram anfing, hieß es: keine Reichweite ohne
          Werbung. Durch eine Kundin wusste ich, dass man gar nicht so super
          viel Geld investieren muss, um mit seinen Werbeanzeigen auch etwas
          zu erreichen. Als dann das nächste Mal in meiner Instagram-App bei
          einem Post der Vorschlag kam „Beitrag bewerben“, klickte ich drauf
          und stellte erstmal 100 Euro ein.
        </p>
        <p className="mt-4">Und dann passierte nichts.</p>
        <p className="mt-4">
          Plötzlich schallte es von allen Ecken und Enden: „Auf keinen Fall in
          der Instagram-App auf ‚Beitrag bewerben‘ klicken!“ Ok, zu spät.
          Naja, wenigstens wurde auch kein Geld abgebucht (zum Glück).
        </p>
        <p className="mt-4">
          Ich merkte so, dass diese ganze Meta-Ads-Nummer eine Wissenschaft
          für sich war. Also beschäftigte ich mich intensiver damit. Ich hatte
          Erstgespräche mit Kursanbietern, ich schaute mir YouTube-Tutorials
          an, ich schaltete ein Gesuch in einer Facebook-Gruppe und ließ mir
          Angebote von Meta-Ads-Experten senden.
        </p>
        <p className="mt-4">
          Schlussendlich kam ich mit jemandem zusammen, die sich für Pinterest
          interessierte und selbst auf Meta spezialisiert war. Wir haben ein
          Tauschgeschäft gemacht. Ich brachte ihr Pinterest bei und sie
          erklärte mir die Meta Business Suite und mit ihrer Hilfe schaltete
          ich meine erste Werbeanzeige. Ich schaltete danach noch zwei
          weitere, doch keine einzige brachte mir irgendetwas.
        </p>
        <p className="mt-4">
          So wie mit allen Dingen im Online-Business (und auch sonst), macht
          man es entweder richtig oder gar nicht. Da ich aktuell nicht
          vorhatte, mein ganzes Marketing auf Meta Ads aufzubauen, ließ ich
          wieder davon ab und sparte mir Geld und auch Zeit, denn die Meta
          Business Suite ist eine ziemlich zickige Angelegenheit.
        </p>
      </section>

      {/* 3. Videokurs */}
      <section className="article-column py-[30px]">
        <h2 id="3-zum-ersten-mal-einen-videokurs-erstellt" className="article-h2">
          3. Zum ersten Mal einen Videokurs erstellt
        </h2>
        <p className="mt-6">
          Im zweiten Quartal erhielt ich eine Anfrage von der Digital Hero
          Academy, ob ich Lust hätte, für ihren Online-Campus einen
          Pinterest-Kurs bereitzustellen. Sie bilden virtuelle Assistenten
          zu Digitalen Marketing-Experten in den Bereichen Webdesign,
          E-Mail-Marketing und Online-Kurs-Erstellung aus. Zu diesen
          Spezifikationen haben sie einen Campus mit über 30 Kursen, mit
          denen die Teilnehmer sich zusätzlich weiterbilden können.
          Pinterest war noch nicht dabei und sie könnten sich mich als
          Dozentin gut vorstellen. Ich müsste nur einen Videokurs dazu
          aufnehmen.
        </p>
        <p className="mt-4">
          Nur einen Videokurs aufnehmen. Klar. Ist ja das Normalste der
          Welt. Mach ich mal eben. Kein Ding.
        </p>
        <p className="mt-4">What???</p>
        <p className="mt-4">
          Tom und Ari, die beiden Köpfe hinter der Academy, nahmen mir
          sofort meine Bedenken und gaben mir Tipps, wie ich die Module
          aufnehmen kann. Und dann legte ich einfach mal los. Ich baute mir
          in meiner Küche ein Setup auf. Normalerweise ist die Küche kein
          guter Ort, da dort in den meisten Wohnungen der stärkste Hall ist.
          Aber es ist bei mir der einzige Raum mit einer geraden weißen Wand
          und mit viel Licht. Ich kaufte mir ein Mikrofon und ein Ringlicht,
          stellte eine Pflanze hin und brabbelte los.
        </p>
        <p className="mt-4">
          Ich sendete meine Videos an Ari und Tom und wartete auf ihr
          Feedback. Alles tutti, sagten sie.
        </p>
        <p className="mt-4">
          Ok, war ja gar nicht so schwer. Dann gleich nochmal.
        </p>
        <p className="mt-4">
          Jetzt, wo ich einmal im Video-Kurs-Erstellungs-Flow war, kam mir
          die Idee, einen Pinterest Crash Kurs zu erstellen, der den
          Zuschauern eine kurze Einführung in Pinterest gibt, damit sie
          danach entscheiden können, ob sie diese Plattform als
          Marketingkanal integrieren wollen. Ich nahm den Kurs auf,
          bearbeitete ihn mit einem Videoschnitt-Programm, eignete mir an,
          wie man Kurse auf der Plattform Udemy veröffentlicht, und launchte
          somit meinen ersten eigenen Online-Kurs.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgVideokurs}
            alt="Grafik eines Laptops, eines Männchens und eines Play-Buttons, Online-Business"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* 4. Stornorechnungen */}
      <section className="article-column py-[30px]">
        <h2 id="4-zum-ersten-mal-stornorechnungen-ausgestellt" className="article-h2">
          4. Zum ersten Mal Stornorechnungen ausgestellt
        </h2>
        <p className="mt-6">
          Das mit der Rechnungsstellung lief bisher in meinem Online-Business
          recht unkompliziert. Ich hatte ja von Anfang an einen Steuerberater.
          Ich erstelle meine Rechnung immer in Excel und versende sie dann als
          PDF an die Kunden. Danach lade ich sie in eine Software meines
          Steuerberaters und fertig. So auch mit den ersten drei Rechnungen an
          meinen Kunden in der Schweiz. Die wurden auch ganz normal bezahlt.
        </p>
        <p className="mt-4">
          Doch dann kam die Quartalsabrechnung und meinem Steuerberater fiel
          auf, dass ich dem Schweizer Kunden keine Umsatzsteuer hätte
          berechnen dürfen. Denn die Schweiz ist nicht umsatzsteuerpflichtig
          in Deutschland. Da der Kunde das aber offenbar auch nicht wusste,
          hatte er mir 3 Monate lang zu viel gezahlt.
        </p>
        <p className="mt-4">
          Ich musste also alle Rechnungen stornieren und neu ausstellen. Dafür
          braucht man auch einen anderen Rechnungskreis und ich musste
          trotzdem die zu viel gezahlte Umsatzsteuer ans Finanzamt abführen.
        </p>
        <p className="mt-4">
          Ich konnte mit dem Kunden zwar die Stornorechnungen mit den neuen
          Rechnungen verrechnen und musste nicht die Summe von 3 Monaten
          zurückzahlen. Und ich bekam auch vom Finanzamt im übernächsten
          Quartal etwas zurück, aber in dem Moment der Überschneidung aller
          Umstände war es ganz schön nervig und machte sich auf dem Konto
          bemerkbar.
        </p>
      </section>

      {/* 5. Blog */}
      <section className="article-column py-[30px]">
        <h2 id="5-zum-ersten-mal-einen-blog-erstellt" className="article-h2">
          5. Zum ersten Mal einen Blog erstellt
        </h2>
        <p className="mt-6">
          Schon zu Beginn meiner Online-Selbstständigkeit wusste ich, dass
          ich irgendwann mal einen Blog haben will. Ich hatte zwar noch nie
          Blogbeiträge geschrieben, aber ich wusste, dass ich es gern tun
          würde. Gleichzeitig war klar, dass ich mit einem Blog auch sofort
          einen Audio Blog integrieren möchte, denn ich habe allzu oft
          keine Zeit, interessante Blogartikel zu lesen, und wünsche mir
          dann, dass ich sie auch anhören könnte.
        </p>
        <p className="mt-4">
          Bisher hatte ich als Webauftritt nur einen Onepager und auf dem
          konnte man keinen Blog einfügen. Also entschied ich mich nach 1,5
          Jahren Onepager für eine „richtige“ Website mit Angebotsseiten,
          einer Über-mich-Seite und natürlich einem{" "}
          <Link href="/blog/" className="text-gold-text hover:underline">
            Blog
          </Link>
          .
        </p>
        <p className="mt-4">
          Ich schrieb meine ersten Artikel und lernte, wie ich sie in
          WordPress einstelle. Ich ließ mir von meiner Webdesignerin zeigen,
          wie ich Zwischenüberschriften so anlege, dass ich Ankerlinks
          daraus generieren kann, und wir implementierten ein Plug-in, um
          die Audio-Dateien zu dem jeweiligen Blogartikel hochzuladen.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgBlog}
            alt="Grafik eines Laptops mit einem geöffneten Blog"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* 6. Affiliate */}
      <section className="article-column py-[30px]">
        <h2 id="6-zum-ersten-mal-ein-affiliate-produkt-verkauft" className="article-h2">
          6. Zum ersten Mal ein Affiliate-Produkt verkauft
        </h2>
        <p className="mt-6">
          Ich habe mich dieses Jahr zum ersten Mal intensiver mit Affiliate
          Marketing beschäftigt und dazu auch vor kurzem einen Artikel
          veröffentlicht. Den findest du{" "}
          <Link
            href="/blog/affiliate-marketing/"
            className="text-gold-text hover:underline"
          >
            hier
          </Link>
          . Ich bin nicht der klassische Affiliate-Marketer, der auf 100
          Plattformen angemeldet ist und aggressiv Werbung für alle Produkte
          macht. Aber wenn man sowieso immer mal wieder über diverse Tools
          oder Anbieter spricht und sie auch weiterempfiehlt, warum dann nicht
          ein bisschen Geld dafür mitnehmen.
        </p>
        <p className="mt-4">
          Mein erstes Affiliate-Programm entstand daraus, dass ich selbst
          keine Pinterest-Kurse anbiete – zumindest keine umfassenden
          Weiterbildungen. Ich war aber überzeugt von der Expertise einer
          Kollegin, deren Kurse eine Lücke in meinem eigenen Angebotsportfolio
          schlossen. Und so empfahl ich meiner Community ihre Kurse.
        </p>
        <p className="mt-4">
          Und schwupps, haben direkt zwei Personen aus meinem Netzwerk einen
          Kurs bei ihr gekauft und ich habe entsprechend Provision bekommen.
          Es blieb dann zwar auch für den Rest des Jahres bei den ersten
          beiden Verkäufen, aber das liegt auch daran, dass ich einfach nicht
          genug Werbung für meine Affiliate-Produkte mache.
        </p>
      </section>

      {/* 7. Firmenkonto */}
      <section className="article-column py-[30px]">
        <h2 id="7-zum-ersten-mal-mein-firmenkonto-ausgereizt" className="article-h2">
          7. Zum ersten Mal mein Firmenkonto ausgereizt
        </h2>
        <p className="mt-6">
          Ich habe Mitte des Jahres mein Firmenkonto bis auf 92 Cent
          ausgereizt. Alle posten auf Insta immer fröhlich ihre krassen
          Zahlungseingänge, verbunden mit Hooks wie „Eben 2.358 Euro auf dem
          Klo verdient“ oder „Diesen Monat 50.000 Euro fürs Nichts-Tun
          bekommen“. Ich hatte auch kurz überlegt, ob ich meinen Kontostand
          von 0,92 Euro poste und dazu schreibe: „Das verdiene ich mit
          meinem Online-Business!“
        </p>
        <p className="mt-4">
          Habe mich dann aber dagegen entschieden, weil ich eigentlich nicht
          auf diesen Zug aufspringen will. Und letztendlich lag es auch
          nicht daran, dass ich einen Kunden verloren habe oder mein
          Business so schlecht läuft, sondern daran, dass mein Steuerberater
          seine eigene Struktur und Buchhaltung umgestellt hat. So kam es
          dieses Jahr zu verschiedenen Zeitpunkten zu Doppelbelastungen, die
          er auch angekündigt hatte, und jede Rechnung hatte ein
          Zahlungsziel von 6 Monaten.
        </p>
        <p className="mt-4">
          Ich bin nur einfach jemand, der ungern „Schulden“ hat. Die
          Rechnungen hätten dann 6 Monate wie ein Damokles-Schwert über
          meinen Einnahmen gebaumelt und deshalb wollte ich sie lieber
          sofort bezahlen.
        </p>
        <p className="mt-4">
          Ich muss aber sagen, dass ich danach entschieden habe, mein
          Firmenkonto nicht nochmal so ausbluten zu lassen. Das war das
          erste und auch letzte Mal 😊
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgFirmenkonto}
            alt="Grafik von 3 Personen, die an einem Laptop arbeiten"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* 8. Schülerpraktikanten */}
      <section className="article-column py-[30px]">
        <h2 id="8-zum-ersten-mal-einen-online-schuelerpraktikanten-beschaeftigt" className="article-h2">
          8. Zum ersten Mal einen Online-Schülerpraktikanten beschäftigt
        </h2>
        <p className="mt-6">
          Besser gesagt: Zum ersten Mal zwei Online-Schülerpraktikanten
          beschäftigt. Meine Cousine ist Lehrerin in Paderborn und erzählte
          davon, dass ihre Schüler der 9. Klasse aktuell nach
          Praktikumsplätzen suchen. Ich fragte, ob es für einen
          Praktikumsbetrieb Kriterien gibt, die man erfüllen muss, um einen
          Praktikanten aufzunehmen. Sie sagte, dass die Entscheidung
          eigentlich der Schule obliegt, ob der Betrieb „anerkannt“ wird. Ich
          warf dann die Idee in den Raum, dass doch ein reines
          Online-Praktikum auch mal eine coole Idee wäre und aus meiner Sicht
          den aktuellen Zeitgeist trifft.
        </p>
        <p className="mt-4">
          Gesagt, getan: Ich hatte für 2 Wochen meine erste
          Schülerpraktikantin. Parallel bekam der Sohn einer Freundin Wind
          davon und er hatte gerade Schwierigkeiten, einen Praktikumsplatz zu
          finden. Also fragte meine Freundin mich, ob ich ihren Sohn
          kurzfristig aufnehmen würde. Und so kam es, dass ich plötzlich zwei
          Schülerpraktikanten zur gleichen Zeit hatte.
        </p>
        <p className="mt-4">
          Das war eine ziemliche Herausforderung, aber ich bin trotzdem froh,
          dass ich den beiden diese Möglichkeit eröffnet habe. Sie hatten
          beide ein Händchen für die Aufgaben in einem Online-Business und ich
          konnte ihnen Aufgaben entsprechend ihrer Affinitäten geben. So war
          die Schülerin aus Paderborn ein absolutes Ass in Canva und hatte ein
          Auge für Design. Wohingegen der Schüler aus Rostock supergut mit
          ChatGPT gearbeitet hat und sich für die Erstellung eines
          YouTube-Kanals interessiert hat.
        </p>
        <p className="mt-4">
          Da kommen wir auch direkt zu Punkt 9.
        </p>
      </section>

      {/* 9. YouTube */}
      <section className="article-column py-[30px]">
        <h2 id="9-zum-ersten-mal-einen-youtube-kanal-erstellt" className="article-h2">
          9. Zum ersten Mal einen YouTube-Kanal erstellt
        </h2>
        <p className="mt-6">
          molloy business hat einen eigenen{" "}
          <a
            href="https://www.youtube.com/@molloybusiness_on_youtube"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            YouTube-Kanal
          </a>
          . Wow! Das ist irgendwie strange. YouTube war jetzt nicht auf
          meiner To-do-Liste für 2024 (ich hatte auch gar keine To-do-Liste
          für 2024). Ich nutze YouTube zwar selbst sehr viel im
          Business-Kontext, weil ich gerne neue Themen über Tutorials lerne,
          aber habe die Plattform nie mit meinem eigenen Business in
          Verbindung gebracht.
        </p>
        <p className="mt-4">
          Bis ich eines Tages beiläufig den Satz hörte: „So ein Audio Blog
          eröffnet einem ganz neue Möglichkeiten – YouTube, Spotify, (hab
          den Rest vergessen)“.
        </p>
        <p className="mt-4">
          Stimmt. YouTube. Wieso bin ich da nicht selbst drauf gekommen. Ich
          habe die Audio-Spuren meiner bereits eingelesenen Blogartikel und
          die könnte ich mit einem Standbild einfach als Videodatei
          umfunktionieren. Und ich habe die Reels mit den Audio-Snippets,
          womit ich die neuen Artikel immer auf Instagram anteasere. Die
          kann ich doch als Shorts nehmen.
        </p>
        <p className="mt-4">
          Ich legte bereits im Sommer den Kanal an, doch dann kam ich im
          Tagesgeschäft nicht dazu, mich weiter damit zu beschäftigen. Es
          hatte auch keine Eile, weil es ja eben nicht auf der nicht
          vorhandenen To-do-Liste für 2024 stand. Doch als dann mein
          technikaffiner Schülerpraktikant startete, übergab ich ihm direkt
          das Projekt{" "}
          <strong className="text-heading">
            „molloy business on YouTube“
          </strong>
          . Und so habe ich kurz vor Weihnachten meinen eigenen
          YouTube-Kanal gelauncht.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgYouTube}
            alt="Grafik eines YouTube Symbols"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* 10. Reflexion + CTA */}
      <section className="article-column py-[30px]">
        <h2 id="10-zum-ersten-mal-mein-geschaeftsjahr-reflektiert" className="article-h2">
          10. Zum ersten Mal mein Geschäftsjahr reflektiert
        </h2>
        <p className="mt-6">
          Ich bin eher so der intuitive Business Owner und plane ungern lange
          im Voraus. Auch im Privatleben engt es mich ein, wenn ich etwas
          festlegen soll, was ein paar Monate im Voraus liegt. Ich weiß doch
          gar nicht, was mich in ein paar Monaten interessiert und ob ich im
          Juni überhaupt noch über Thema XY schreiben will, was ich mir im
          April überlegt habe.
        </p>
        <p className="mt-4">
          Ich mache die Dinge so, wie ich sie fühle und worauf ich gerade Bock
          habe. Manchmal denke ich, dass ich die mega zündende Idee habe, und
          es stellt sich als Flop heraus, und manchmal entwickeln sich Dinge,
          von denen ich gar nicht dachte, dass ich sie gut finde.
        </p>
        <p className="mt-4">
          Und somit habe ich bisher auch keine Jahresrückblicke gemacht. Denn
          wenn ich mir zu Beginn des Jahres keine Ziele setze, kann ich am
          Ende ja auch nicht messen, ob ich die Ziele erreicht habe und ob
          mein Jahr nun gut oder schlecht war.
        </p>
        <p className="mt-4">
          Dieses Jahr war allerdings privater Natur sehr anstrengend und ich
          hatte in letzter Zeit das Gefühl, dass mein Online-Business
          eigentlich nur so nebenbei lief, weil ich viel zu sehr damit
          beschäftigt war, die Balance im Privatleben zu halten. Diese
          Erkenntnis hat mich ziemlich frustriert.
        </p>
        <p className="mt-4">
          Also habe ich mich hingesetzt und aufgeschrieben, was ich dieses
          Jahr alles Neues gelernt habe. Was kann ich heute, was ich vor einem
          Jahr noch nicht konnte? So entstand auch diese Aufzählung hier. Aber
          auch Dinge wie Videoschnitt. Ich hatte mich zwar schon vorher ab und
          zu damit befasst, aber so, dass ich einen ganzen Videokurs alleine
          schneiden kann, nicht. Ich habe dieses Jahr zwei neue Kunden
          dazugewonnen und meinen Stundensatz von 50 Euro auf 70 Euro
          angehoben.
        </p>
        <p className="mt-4">
          Als ich anfing, das alles aufzuschreiben, habe ich gesehen, dass ich
          doch eine ganze Menge geschafft habe und dass ich darauf stolz sein
          kann.
        </p>
        <p className="mt-4">
          Und mir nichts, dir nichts ist jetzt sogar noch ein Blogartikel
          entstanden, obwohl ich mir sicher war, dass ich es dieses Jahr nicht
          mehr schaffen würde, einen neuen Artikel zu veröffentlichen.
        </p>
      </section>

      {/* CTA */}
      <section className="article-column py-[30px]">
        <p>
          Und wenn dein nächstes „erstes Mal“ Pinterest heißen soll: Als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          unterstützt molloy business dich dabei – vereinbare gern ein{" "}
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
            href="https://youtu.be/Gj86bzh26Fc"
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
