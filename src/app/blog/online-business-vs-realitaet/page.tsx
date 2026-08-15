import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";
import imgZeit from "@/assets/images/blog/online-business-vs-realitaet/Online-Business-2.png";
import imgTodos from "@/assets/images/blog/online-business-vs-realitaet/Online-Business-5.png";
import imgWaschmittel from "@/assets/images/blog/online-business-vs-realitaet/Online-Business-4.png";
import imgFragen from "@/assets/images/blog/online-business-vs-realitaet/Online-Business-3.png";
import imgKraft from "@/assets/images/blog/online-business-vs-realitaet/Online-Business-6.png";

const post = blogPosts.find((p) => p.slug === "online-business-vs-realitaet")!;

const path = `/blog/${post.slug}/`;

const h1 =
  "Freiheit durch Online-Business? Warum der Traum oft an der Realität scheitert";

export const metadata: Metadata = {
  title: "Freiheit durch Online-Business? Traum vs. Realität",
  description:
    "Freiheit durch ein Online-Business? Warum der Traum oft an der Realität scheitert und wie aus dem Wunsch nach Selbstständigkeit ein tragfähiges Konzept wird.",
  alternates: {
    canonical: path,
  },
};

const imageSizes = "(min-width: 896px) 848px, calc(100vw - 48px)";

const zentraleFragen = [
  "Bin ich bereit, Raum zu schaffen? Nicht nur auf dem Papier, sondern ganz konkret in meinem Alltag.",
  "Wo kann ich Aufgaben abgeben? Wo kann ich Unterstützung holen?",
  "Wo kann ich Zeit blocken, die wirklich nur mir gehört?",
  "Wäre ich bereit, auf meinen sicheren Job zu verzichten oder die Stunden zu reduzieren?",
  "Habe ich genug finanziellen Spielraum, auch wenn es nicht gleich läuft?",
  "Werde ich auch weitergehen, wenn mir ständig Steine in den Weg gelegt werden?",
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

export default function OnlineBusinessVsRealitaet() {
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
          Viele Menschen träumen davon, sich mit einem Online-Business ein
          freies, selbstbestimmtes Leben aufzubauen. Sie stellen sich vor, wie
          sie morgens gemütlich mit dem Laptop auf dem Balkon sitzen, den Tag
          über kreative Ideen umsetzen und dabei gutes Geld verdienen –
          unabhängig von Ort, Zeit und Chef. Der Wunsch nach Unabhängigkeit
          ist echt. Aber genauso echt sind die Herausforderungen, die viele
          auf dem Weg dorthin unterschätzen.
        </p>
        <p className="font-body mt-4 text-lg">
          In diesem Artikel schauen wir uns an, warum die Realität oft nicht
          mit der Vision mithält. Und was du tun kannst, um aus dem Wunsch
          nach Selbstständigkeit ein tragfähiges Konzept zu machen – ohne dich
          dabei zu überfordern.
        </p>
      </section>

      {/* Wunschdenken */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Wunschdenken vs. Realität: Die falschen Erwartungen ans
            Online-Business
          </h2>
          <p className="font-body mt-6 text-lg">
            Online-Business verspricht die große Freiheit: arbeiten, wann und
            wo man will, selbstbestimmt leben, niemandem Rechenschaft ablegen
            müssen. Gerade in stressigen Lebensphasen wirkt dieser Traum wie
            ein Rettungsanker.{" "}
            <strong className="text-heading">
              Raus aus dem Hamsterrad, rein ins Leben
            </strong>{" "}
            – so der Plan.
          </p>
          <p className="font-body mt-4 text-lg">
            Was viele dabei vergessen:{" "}
            <strong className="text-heading">
              Ein Online-Business ist ein echtes Unternehmen.
            </strong>{" "}
            Und das bedeutet Verantwortung, Entscheidungen, Investitionen –
            vor allem aber Zeit und Energie. Wer das unterschätzt, wird
            schnell frustriert. Warum sich Selbstständigkeit oft nicht nach
            Arbeit anfühlt, habe ich in{" "}
            <Link
              href="/blog/selbststaendigkeit-unsichtbare-arbeit/"
              className="text-gold-text hover:underline"
            >
              diesem Blogartikel
            </Link>{" "}
            bereits näher erläutert. Schau gerne mal rein.
          </p>

          <h3 className="mt-10 text-[22px] leading-tight">
            Zeitfalle statt Zeitgewinn: Warum Selbstständigkeit kein
            Selbstläufer ist
          </h3>
          <p className="font-body mt-4 text-lg">
            Ein weitverbreiteter Irrtum lautet: „Wenn ich mich selbstständig
            mache, habe ich mehr Zeit.“ Tatsächlich ist das Gegenteil der Fall
            – zumindest am Anfang. Denn ein Business aufzubauen bedeutet,
            viele neue Dinge zu lernen und umzusetzen. Es gibt keine klaren
            Arbeitszeiten, keine Aufgabenverteilung, keinen Feierabend.{" "}
            <strong className="text-heading">
              Du bist Marketing, Produktentwicklung, Kundenservice und
              Buchhaltung in einer Person.
            </strong>
          </p>
          <p className="font-body mt-4 text-lg">
            Die Freiheit, die du dir wünschst, entsteht nicht automatisch. Sie
            ist das Ergebnis von Planung, Struktur und Klarheit – und die
            musst du dir erst erarbeiten.
          </p>
          <p className="font-body mt-4 text-lg">
            <strong className="text-heading">
              Viele unterschätzen, dass ein Business nicht in der Stunde
              entsteht, in der man sich „mal eben“ abends nach der Arbeit
              dransetzt.
            </strong>{" "}
            Es braucht Vorbereitungszeit, Denkzeit, Umsetzungszeit – und vor
            allem Wiederholung. Es ist ein kontinuierlicher Prozess, bei dem
            du immer wieder neue Herausforderungen meistern musst.
          </p>
          <p className="font-body mt-4 text-lg">
            Stell dir ein leeres Feld vor, auf dem du ein Haus bauen willst.
            Der Traum ist da: ein schickes Haus mit Garten, mit Aussicht, mit
            Wohlfühlfaktor. Aber das Feld ist voller Steine, Dornen, alter
            Wurzeln. Bevor du überhaupt ans Fundament denken kannst, musst du
            räumen, sortieren, planen.{" "}
            <strong className="text-heading">Das kostet Kraft.</strong> Und
            genau das ist der erste Teil der Selbstständigkeit: das Feld urbar
            machen, bevor du aufbauen kannst.
          </p>

          <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
            <ExportedImage
              src={imgZeit}
              alt="Online-Business Zeitmanagement"
              fill
              className="object-cover"
              sizes={imageSizes}
              basePath={basePath}
            />
          </div>
        </div>
      </section>

      {/* Ins Tun kommen */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Zwischen Anlauf und Stillstand: Warum du nicht ins Tun kommst
        </h2>
        <p className="font-body mt-6 text-lg">
          Vielleicht kennst du das Gefühl: Du willst so gern starten, hast
          Ideen im Kopf, vielleicht schon einen Blog, ein Produkt oder einen
          Kurs. Aber du kommst nicht voran.{" "}
          <strong className="text-heading">
            Es fühlt sich an, als würdest du ständig Anlauf nehmen, aber nie
            wirklich loslaufen.
          </strong>
        </p>
        <p className="font-body mt-4 text-lg">
          Was du spürst, ist keine Faulheit oder Unfähigkeit. Es ist ein
          Mangel an Raum. Raum im Kalender, aber auch{" "}
          <strong className="text-heading">Raum im Kopf</strong>. Ein
          Online-Business braucht Zeit – aber nicht nur „verfügbare Stunden“,
          sondern auch mentale Kapazität.
        </p>
        <p className="font-body mt-4 text-lg">
          Denn es ist ein gewaltiger Unterschied, ob du theoretisch 90 Minuten
          Zeit hast – oder ob du in diesen 90 Minuten auch praktisch klar
          denken, kreativ arbeiten und Entscheidungen treffen kannst. Zwischen
          einem Vollzeit-Job, Freunden und Familie sowie allgemeinen daily
          To-dos im Haushalt bleibt oft{" "}
          <strong className="text-heading">
            kein Freiraum für Fokus und konzeptionelle Arbeit.
          </strong>{" "}
          Das sind wiederum aber wichtige Ressourcen, wenn du etwas Neues
          erschaffen willst.
        </p>
        <p className="font-body mt-4 text-lg">
          Wenn du dich also beim Starten so fühlst, als würdest du{" "}
          <strong className="text-heading">
            mit angezogener Handbremse fahren:
          </strong>{" "}
          Vielleicht ist nicht dein Wille das Problem, sondern dein System.
          Vielleicht braucht es nicht mehr Motivation, sondern weniger
          Ablenkung. Weniger Erwartung an dich selbst. Und ein klares
          Commitment: Ich schaffe mir den Raum, den mein Traum verdient.
        </p>

        <h3 className="mt-10 text-[22px] leading-tight">
          Der 1-Stunden-Mythos: Warum gute Planung kein Allheilmittel ist
        </h3>
        <p className="font-body mt-4 text-lg">
          „Wenn ich mir meine Zeit nur besser einteile, klappt das schon.“
          Oder anders: „Du brauchst mit meinem Angebot{" "}
          <strong className="text-heading">nur eine Stunde am Tag,</strong> um
          ein funktionierendes Online-Business aufzubauen. Und hey, eine
          Stunde am Tag hat doch wohl jeder übrig.“
        </p>
        <p className="font-body mt-4 text-lg">
          Dir wird von außen suggeriert, dass du offenbar etwas falsch machst,
          wenn du diese Stunde nicht aufbringen kannst. Und by the way: Wer
          mit einer Stunde am Tag ein erfolgreiches Unternehmen aufbauen kann,
          möge sich bei mir melden. Und ich rede hier nicht davon, dass man
          ein erfolgreiches Unternehmen mit einer Stunde am Tag führen kann.
          Das ist was anderes.{" "}
          <strong className="text-heading">
            Das Stichwort ist hier „aufbauen“.
          </strong>{" "}
          Der Aufbau eines eigenen Businesses dauert definitiv länger als eine
          Stunde am Tag.
        </p>
        <p className="font-body mt-4 text-lg">
          Aber Zeitmanagement ist nicht das Problem. Das Problem ist, dass
          keine Ressourcen mehr da sind.{" "}
          <strong className="text-heading">
            Wer beruflich und privat bereits am Limit ist,
          </strong>{" "}
          kann sich kein weiteres Projekt aufladen – ohne an anderer Stelle
          etwas loszulassen. Und in der Regel lässt du nicht einfach nur
          deinen Angestelltenjob los – den du vielleicht eh nicht magst –{" "}
          <strong className="text-heading">
            sondern du lässt Sicherheit los.
          </strong>
        </p>
        <p className="font-body mt-4 text-lg">
          Bleiben wir beim leeren Feld und dem Haus. Du kündigst deine
          bestehende Wohnung, die warm und sicher ist, und gehst erstmal mit
          einem Zelt los, um es auf das leere Feld zu stellen.{" "}
          <strong className="text-heading">
            Du weißt aber noch nicht, wie lange du im Zelt schlafen wirst.
          </strong>{" "}
          Vielleicht nur kurz, vielleicht dauert es aber auch zwei Jahre, bis
          dein Haus fertig ist.
        </p>
        <p className="font-body mt-4 text-lg">
          Aber immerhin hast du jetzt eine Stunde Zeit am Tag 😉
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgTodos}
            alt="Online-Business To Dos"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Vergleich */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Der gefährliche Vergleich mit „den anderen“
          </h2>
          <p className="font-body mt-6 text-lg">
            Instagram, LinkedIn, Podcasts – überall sehen wir Beispiele von
            Menschen, die scheinbar{" "}
            <strong className="text-heading">
              mühelos ihr Online-Business rocken.
            </strong>{" "}
            Sie sind sichtbar, erfolgreich, souverän. Und wir fragen uns:
            Warum klappt das bei mir nicht?
          </p>
          <p className="font-body mt-4 text-lg">
            Die Antwort ist einfach: Weil du nicht sie bist. Du kennst nicht
            ihre Geschichte, ihre Ressourcen, ihre Unterstützung im
            Hintergrund. Die wenigsten erzählen zum Beispiel, dass ihr{" "}
            <strong className="text-heading">
              Online-Business nur eine nebenberufliche Selbstständigkeit ist.
            </strong>{" "}
            Das heißt, sie selbst halten an einer gewissen (finanziellen)
            Sicherheit fest. Was ja auch total ok ist. Nur vermittelt es den
            falschen Eindruck. Denn dir verkauft die gleiche Person ein{" "}
            <strong className="text-heading">
              Coaching- oder Mentoring-Programm für ein ortsunabhängiges
              Leben.
            </strong>{" "}
            Ein Leben in Freiheit und Selbstbestimmtheit. Sie verkaufen dir
            einen Traum. Den Traum, den sie selbst noch gar nicht zu 100 %
            leben.
          </p>
          <p className="font-body mt-4 text-lg">
            Andere haben vielleicht{" "}
            <strong className="text-heading">
              einen Partner, der Hauptverdiener ist (so wie ich).
            </strong>{" "}
            Das nimmt ebenfalls den Druck raus, dass das Unternehmen sofort
            florieren muss und man sich davon ernähren können muss.
          </p>
          <p className="font-body mt-4 text-lg">
            Wieder andere machen das, wovon du träumst, schon sehr, sehr
            lange, und du siehst nur, wie das Unternehmen aktuell läuft.{" "}
            <strong className="text-heading">
              Du siehst nicht, wie sie vor zehn Jahren gehadert haben,
            </strong>{" "}
            welche Nebenjobs sie hatten und für wie viele Kunden sie
            kostenfrei gearbeitet haben. All das würde sich schlecht
            verkaufen.
          </p>

          <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
            <ExportedImage
              src={imgWaschmittel}
              alt="Online-Business Waschmittel"
              fill
              className="object-cover"
              sizes={imageSizes}
              basePath={basePath}
            />
          </div>

          <h3 className="mt-10 text-[22px] leading-tight">Perspektivwechsel</h3>
          <p className="font-body mt-4 text-lg">
            Und auch das ist ok. Denn wenn du einen Traum – a.k.a. Online-Kurs,
            Produkt etc. – verkauft bekommst, dann ist das{" "}
            <strong className="text-heading">Marketing at its best.</strong>{" "}
            So funktioniert Werbung schon immer. Jedes Waschmittel verspricht
            dir, dass alles fleckenrein ist. Also kaufst du es. Weil du beim
            Thema Flecken in den Klamotten an die Decke gehen könntest.
          </p>
          <p className="font-body mt-4 text-lg">
            Und dann ist der Fleck doch noch da. Du denkst, du hast es
            vielleicht nicht richtig angewendet. Immerhin waren die weißen
            T-Shirts im Fernseher doch lupenrein.{" "}
            <strong className="text-heading">
              Also zweifelst du erstmal an dir.
            </strong>{" "}
            Wenn du an den Punkt gekommen bist, dass das Produkt schlecht ist
            und nicht hält, was es verspricht, kaufst du ein anderes. Immer
            wieder.{" "}
            <strong className="text-heading">
              Immer wieder von Anbietern, die sagen, dass bei ihnen alles
              anders werden wird.
            </strong>
          </p>
          <p className="font-body mt-4 text-lg">
            Aber wie wäre es damit: Wenn dich Flecken so triggern, dann
            akzeptiere es entweder – oder kaufe dir alle paar Monate neue
            T-Shirts oder steig auf eine Farbe um, auf der man Flecken nicht
            so sieht, anstatt alle Waschmittelhersteller der Welt
            auszuprobieren, um immer wieder an den gleichen Punkt zu kommen.
          </p>
          <p className="font-body mt-4 text-lg">
            Was viele Menschen wirklich brauchen, ist kein weiterer Kurs oder
            das x-te Coaching,{" "}
            <strong className="text-heading">
              sondern ein Perspektivwechsel und Vertrauen zu sich selbst.
            </strong>{" "}
            Klarheit darüber, was man will – und was man bereit ist, dafür zu
            geben. Denn nur unendliches Wissen im Kopf anzuhäufen durch
            unendlich viele Kurse{" "}
            <strong className="text-heading">
              bringt dir keinen einzigen Euro ein.
            </strong>{" "}
            Du musst das umsetzen – und dafür brauchst du Zeit und Commitment.
          </p>
          <p className="font-body mt-4 text-lg">
            Und wenn du das gerade nicht hast – so sehr du es auch willst –
            dann ist es völlig ok, noch eine Weile in dem weißen T-Shirt mit
            dem minikleinen Fleck rumzulaufen. Irgendwann kommt der Tag und{" "}
            <strong className="text-heading">
              da fliegt das Ding in die Ecke,
            </strong>{" "}
            du wirfst dir das Camouflage-Top über und die Waschmittelhersteller
            können dich mal kreuzweise.{" "}
            <strong className="text-heading">
              Denn du gehst jetzt deinen eigenen Weg.
            </strong>{" "}
            In der Geschwindigkeit und in dem Look, der genau dann in deine
            aktuelle Lebensphase passt.
          </p>
          <p className="font-body mt-4 text-lg">
            Denn ein Online-Business ist nicht nur eine unternehmerische,
            sondern auch eine emotionale Reise.
          </p>

          <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
            <ExportedImage
              src={imgFragen}
              alt="Online-Business Fragen stellen"
              fill
              className="object-cover"
              sizes={imageSizes}
              basePath={basePath}
            />
          </div>
        </div>
      </section>

      {/* Preis der Selbstverwirklichung */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Der wahre Preis der Selbstverwirklichung
        </h2>
        <p className="font-body mt-6 text-lg">
          Ein Online-Business zu starten bedeutet, in Vorleistung zu gehen –
          zeitlich, finanziell, emotional. Es bedeutet, sich{" "}
          <strong className="text-heading">
            mit Unsicherheiten auseinanderzusetzen, Entscheidungen zu treffen
            und auch Rückschläge auszuhalten
          </strong>
          . Wer das nicht will oder kann, ist nicht schwach – sondern
          realistisch.
        </p>
        <p className="font-body mt-4 text-lg">
          <strong className="text-heading">Aber:</strong> Es bedeutet auch,
          dass du lernen darfst, dich selbst ernst zu nehmen. Deine
          Bedürfnisse, deine Grenzen, deine Träume. Und das beginnt nicht mit
          einem Business-Plan, sondern mit einem ehrlichen Blick auf dein
          aktuelles Leben.
        </p>
        <p className="font-body mt-4 text-lg">
          <strong className="text-heading">
            Bevor du in die Umsetzung gehst, stell dir diese zentralen Fragen:
          </strong>
        </p>
        <ul className="font-body mt-4 list-disc space-y-2 pl-6 text-lg">
          {zentraleFragen.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="font-body mt-4 text-lg">
          <strong className="text-heading">
            Wenn du diese Fragen beantwortest, entsteht ein Fundament.
          </strong>{" "}
          Das Fundament ist dein unbändiger Wille, es durchzuziehen. An guten
          und an schlechten Tagen.
        </p>
        <p className="font-body mt-4 text-lg">
          Und natürlich darfst und sollst du dann auch Kurse machen, dich
          weiterbilden, dir Unterstützung holen, usw. Nur vorher solltest du
          eine <strong className="text-heading">klare Entscheidung</strong>{" "}
          für dich getroffen haben. Und die kann dir niemand im Außen
          abnehmen.
        </p>
      </section>

      {/* Fazit + CTA */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Fazit: Klarheit vor Geschwindigkeit
          </h2>
          <p className="font-body mt-6 text-lg">
            Ein Online-Business kann dir Freiheit schenken. Aber es nimmt sich
            nicht von allein den Platz in deinem Leben. Du musst ihn schaffen.
            Und das{" "}
            <strong className="text-heading">
              bedeutet manchmal, zuerst andere Dinge loszulassen:
            </strong>{" "}
            Erwartungen, Perfektion, vermeintliche Verpflichtungen.
          </p>
          <p className="font-body mt-4 text-lg">
            Sei ehrlich mit dir. Was brauchst du, um loszulegen? Was musst du
            klären, bevor du investieren kannst – in Programme, in Technik, in
            dich selbst?
          </p>
          <p className="font-body mt-4 text-lg">
            Wenn du soweit bist, wird der Weg nicht unbedingt leichter. Aber
            klarer. Und das ist oft der entscheidende Unterschied.
          </p>
          <p className="font-body mt-4 text-lg">
            <strong className="text-heading">Und nun?</strong>
          </p>
          <p className="font-body mt-4 text-lg">
            Auf meinem Instagram-Kanal{" "}
            <a
              href="https://www.instagram.com/molloy_business/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-text hover:underline"
            >
              @molloy_business
            </a>{" "}
            bekommst du noch mehr Einblicke in die realen Abläufe der
            Online-Business-Welt. Außerdem stellen sich dort regelmäßig
            Gastautoren mit ihrem eigenen Online-Business vor. Hier findest du
            vielleicht Inspirationen, welche Art von Produkt oder
            Dienstleistung du selbst anbieten möchtest.
          </p>
          <p className="font-body mt-4 text-lg">
            Und wenn dein Business schon steht und du es sichtbarer machen
            möchtest: Als{" "}
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
            . Oder du vereinbarst direkt ein{" "}
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
              src={imgKraft}
              alt="Online-Business Kraft"
              fill
              className="object-cover"
              sizes={imageSizes}
              basePath={basePath}
            />
          </div>
        </div>
      </section>

      {/* Audio */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Lieber anhören?
        </h2>
        <p className="font-body mt-6 text-center text-lg">
          Keine Zeit zum Lesen? Hier kannst du dir den Artikel auch anhören:{" "}
          <a
            href="https://youtu.be/ed5M1m286Fw"
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
