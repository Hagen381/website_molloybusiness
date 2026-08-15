import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";
import imgInstagram from "@/assets/images/blog/website-fuer-dein-business/BlogWebsite-2.png";
import imgOnepager from "@/assets/images/blog/website-fuer-dein-business/BlogWebsite-4-1.png";
import imgChatGpt from "@/assets/images/blog/website-fuer-dein-business/BlogWebsite-1-1.png";

const post = blogPosts.find((p) => p.slug === "website-fuer-dein-business")!;

const path = `/blog/${post.slug}/`;

const h1 = "Brauchst du eine Website für dein Business?";

export const metadata: Metadata = {
  title: "Brauchst du eine Website für dein Business?",
  description:
    "Braucht dein Business eine eigene Website oder reicht Instagram? Warum deine Website dein Zuhause ist und Social Media nur ein Café – eine ehrliche Antwort.",
  alternates: {
    canonical: path,
  },
};

const imageSizes = "(min-width: 896px) 848px, calc(100vw - 48px)";

const chatGptGruende = [
  "Online-Präsenz",
  "Erreichbarkeit",
  "Glaubwürdigkeit und Professionalität",
  "Marketing und Werbung",
  "Kundenbindung",
  "Informationen bereitstellen",
  "Suchmaschinenoptimierung (SEO)",
  "Kundeninteraktion",
  "Markenaufbau",
  "Globaler Markt",
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

export default function WebsiteFuerDeinBusiness() {
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
          Zu der Frage, ob du eine Website für dein Business brauchst, gibt es
          genau zwei Meinungen – ja und nein. Alle, die im Lager „Ja“ sitzen,
          haben gute Argumente dafür, warum es wichtig ist, eine eigene Website
          zu haben. Diejenigen, die im Lager „Nein“ sitzen, können dir
          unzählige Erfolgsstorys von Menschen zeigen, die ein Imperium
          aufgebaut haben – und das ganz ohne Website. Ich sitze im Lager „Ja“,
          und in diesem Artikel erfährst du, warum es für mich wichtig ist,
          eine Firmenhomepage zu haben.
        </p>
      </section>

      {/* Ohne Website nicht starten */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Ohne Website will ich mein Business nicht starten
          </h2>
          <p className="font-body mt-6 text-lg">
            Lange bevor ich mich final selbstständig gemacht habe, hatte ich
            ungefähr 100 Ideen, womit ich mich selbstständig machen könnte.
            Ein Thema wurde dann etwas konkreter, und ich fragte einen
            Bekannten, ITler und Webprogrammierer, was ich für eine
            Internetseite ungefähr an Geld einplanen müsste und ob es besser
            wäre, sie programmieren zu lassen, oder ob ein Baukasten-System wie
            zum Beispiel Squarespace besser wäre. Er hielt mir einen
            ellenlangen, fast schon vorwurfsvollen Vortrag darüber,{" "}
            <strong className="text-heading">
              wie sinnlos eine Website am Anfang sei.
            </strong>
          </p>
          <p className="font-body mt-4 text-lg">
            Ich solle mir erstmal einen Instagram-Account anlegen, meine
            Zielgruppe kennenlernen und herausfinden, ob mein Produkt überhaupt
            Anklang fände. Viele Menschen würden glauben, sie hätten die
            tollsten Ideen, und dann stelle sich heraus, dass die Nachfrage gar
            nicht da sei. Er habe schon so viele Start-ups scheitern sehen.{" "}
            <strong className="text-heading">
              Bevor man in eine Website investiert,
            </strong>{" "}
            solle man auf jeden Fall ein bisschen weiter mit seinem Business
            sein.
          </p>

          <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
            <ExportedImage
              src={imgInstagram}
              alt="Das Bild zeigt einen schematisch dargestellten Laptop und auf dem Bildschirm befindet sich ein Screenshot des Instagram Accounts von molloy business"
              fill
              className="object-cover"
              sizes={imageSizes}
              basePath={basePath}
            />
          </div>

          <p className="font-body mt-10 text-lg">
            Ich war völlig perplex nach dem Gespräch. So eine Aussage hatte ich
            nun gar nicht von jemandem erwartet, der sein Geld damit verdiente,
            für andere Webseiten zu programmieren. Und auf meine eigentliche
            Frage, ob Baukastensystem oder Programmierung, hatte ich auch keine
            Antwort erhalten. Für mich stand fest:{" "}
            <strong className="text-heading">
              Ohne Website will ich nicht starten.
            </strong>{" "}
            Und dafür gab es genau einen Grund.
          </p>
          <p className="font-body mt-4 text-lg">
            Ich erwarte von einem professionellen Unternehmen einen
            professionellen Webauftritt, und dazu gehört für mich eine
            Homepage! Wenn ich eine Mailadresse sehe, die nicht auf web.de
            &amp; Co. endet, dann google ich sofort die Domain, um zu schauen,
            was das für ein Unternehmen ist. Wenn da nur steht „Hier entsteht
            bald eine Website“, dann bin ich enttäuscht. Wenn ich mich für
            etwas interessiere und{" "}
            <strong className="text-heading">
              der Produktanbieter oder der Dienstleister hat keine eigene
              Website, dann ist er für mich automatisch raus.
            </strong>
          </p>
          <p className="font-body mt-4 text-lg">
            Und Anbieter mit schlechten Unternehmensseiten ebenso. 😉
          </p>

          <h3 className="mt-10 text-[22px] leading-tight">
            Immer tun, was man selbst erwartet
          </h3>
          <p className="font-body mt-4 text-lg">
            Diese Einstellung mag vielleicht ein bisschen radikal sein, aber so
            gehe ich nun mal vor. Heißt,{" "}
            <strong className="text-heading">
              wenn ich von anderen eine Website erwarte,
            </strong>{" "}
            dann sollte ich für mein eigenes Business auch eine haben. Ganz
            egal, was Profis sagen oder denken. Ganz egal, wie die Trends dazu
            sind. Ganz egal, wie die Mitbewerber das handhaben.
          </p>
          <p className="font-body mt-4 text-lg">
            Wichtig ist, dass ich mich so verhalte, wie ich es von anderen auch
            erwarte. Denn nur, wenn ich 100 % hinter dem stehe, was ich tue,
            kann ich authentisch sein. Und dabei spielt es keine Rolle, ob ich
            vielleicht gar keine Ahnung von der Wichtigkeit einer Website habe
            oder ob ich gegen irgendwelche Empfehlungen aus der
            Social-Media-Welt handle.{" "}
            <strong className="text-heading">
              Authentizität kommt nicht durch Wissen oder Erfahrung.
            </strong>{" "}
            Authentizität resultiert daraus, wenn du deine Werte lebst und
            hinter ihnen stehst.
          </p>
          <p className="font-body mt-4 text-lg">
            So, nun schweifen wir zu sehr in den Bereich
            Persönlichkeitsentwicklung ab. Vielleicht schreibe ich nochmal
            einen Blogartikel dazu, wie man authentisch durchs Business und
            Leben geht.
          </p>
        </div>
      </section>

      {/* WordPress-Tutorial */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Ich begann mit einem WordPress-Youtube-Tutorial
        </h2>
        <p className="font-body mt-6 text-lg">
          Irgendwann war es dann so weit und ich gründete wirklich ein eigenes
          Business. Natürlich fragte ich den bekannten ITler nicht mehr nach
          seiner Meinung. Ich bekam inzwischen mit, dass es gar nicht so
          abwegig ist, seine{" "}
          <strong className="text-heading">
            Website einfach selbst zu machen,
          </strong>{" "}
          und entschied mich für WordPress.
        </p>
        <p className="font-body mt-4 text-lg">
          Ich schaute mir ein{" "}
          <strong className="text-heading">
            zweistündiges Youtube-Tutorial an und begann es dann nochmal von
            vorne,
          </strong>{" "}
          stoppte alle paar Minuten und führte die beschriebenen Schritte aus.
          So kaufte ich eine Domain, entschied mich für einen Hoster, richtete
          alles so weit ein, dass man meine leere Seite aufrufen konnte,
          erstellte meine erste eigene Firmen-E-Mail-Adresse und verknüpfte sie
          mit Outlook. Nun war es in dem Tutorial an der Zeit, ein Theme zu
          installieren und in die Kreativarbeit zu gehen.
        </p>
        <p className="font-body mt-4 text-lg">
          <strong className="text-heading">Und plötzlich stagnierte ich.</strong>{" "}
          Nebenbei kamen die Steuerthemen hinzu, ich musste eine Angebots- und
          Rechnungsvorlage erstellen, ich hatte gerade neue Tools wie Canva und
          Tailwind erlernt, habe mich mit Pinterest beschäftigt.{" "}
          <strong className="text-heading">
            Und dann merkte ich, dass es mir zu viel wurde
          </strong>{" "}
          mit all den Themen, die man so als Soloselbständige auf dem Tisch
          hat. Ich wusste zwar, dass es mir möglich war, diese WordPress-Seite
          alleine fertigzustellen, aber ich hatte schlichtweg keine Lust mehr,
          mich damit zu befassen. Genauso wenig hatte ich Lust, mich mit
          Sevdesk oder Lexware auseinanderzusetzen. Und da ich eine Frau der
          Taten statt Worte bin, entschied ich,{" "}
          <strong className="text-heading">
            sowohl einen Steuerberater zu engagieren als auch einen
            professionellen Webdesigner.
          </strong>
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgOnepager}
            alt="Das Bild zeigt einen schematisch dargestellten Laptop und auf dem Bildschirm ist ein Screenshot des Onepagers von molloy business zu sehen. Es gehört zu der Frage: Brauchst du eine Website für dein Business?"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Onepager */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Was ist denn ein Onepager?
          </h2>
          <p className="font-body mt-6 text-lg">
            Ich hatte natürlich schon ein bisschen Bammel vor den Kosten, die
            für eine Homepage auf mich zukommen würden, aber die Entscheidung
            war gefallen. Ich telefonierte mit einer Webdesignerin und
            schilderte mein Anliegen.{" "}
            <strong className="text-heading">
              Sie schlug mir daraufhin einen Onepager vor.
            </strong>{" "}
            Ich hatte diesen Ausdruck zuvor noch nie gehört. Aber der Name ist
            Programm. Denn es handelt sich schlichtweg um eine Website, die
            eben{" "}
            <strong className="text-heading">
              nur aus einer Seite besteht.
            </strong>{" "}
            Man hat zwar trotzdem oben ein paar Reiter, die dann auch da
            hinspringen, worauf sie verweisen, aber alles in allem steht alles
            untereinander.
          </p>
          <p className="font-body mt-4 text-lg">
            Für viel Content eignet es sich nicht, denn dann wird es
            unübersichtlich. Aber für meine Zwecke war es perfekt. Ich konnte
            etwas über mich erzählen, ich konnte meine Angebote platzieren, und
            der Leser hatte die Möglichkeit, mich zu kontaktieren. Und dadurch,
            dass es nur eine Seite war,{" "}
            <strong className="text-heading">
              hielten sich die Kosten in Grenzen.
            </strong>{" "}
            Ich war{" "}
            <a
              href="https://britta-distel.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-text hover:underline"
            >
              Britta
            </a>
            , meiner damaligen und heutigen Webdesignerin, sehr dankbar für
            diese Info. Sie hätte mir genauso gut eine vollwertige Homepage
            verkaufen können. Denn danach hatte ich ja gefragt.
          </p>
          <p className="font-body mt-4 text-lg">
            Bis der Onepager fertig war, schickte ich keine einzige Mail an
            jemanden raus. Das mag bescheuert klingen. Aber{" "}
            <strong className="text-heading">
              ich brauchte die Website als Anker.
            </strong>{" "}
            Es war mir wichtig, dass jemand einen professionellen Webauftritt
            findet, wenn er aus meiner E-Mail-Adresse info@molloybusiness.com
            das molloybusiness.com herauszieht und danach sucht.
          </p>
          <p className="font-body mt-4 text-lg">
            Ich fühlte mich einfach besser, wenn ich in einem Gespräch oder
            Schriftverkehr auf meine Website verweisen konnte.{" "}
            <strong className="text-heading">
              Es fühlte sich für mich professioneller an.
            </strong>{" "}
            Ich wollte nicht „nur“ einen Flyer haben oder „nur“ einen
            Instagram-Account. Übrigens dauerte es bis zu meinem ersten
            Instagramkanal fast zwei Jahre. Warum ich froh bin, dass ich nicht
            von Anfang an einen Insta-Account hatte, erfährst du in einem
            meiner nächsten Beiträge „Fast 2 Jahre ohne Insta“.
          </p>
        </div>
      </section>

      {/* Gründe */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          „Richtige“ Gründe für eine Website
        </h2>
        <p className="font-body mt-6 text-lg">
          Bis hierher war meine Argumentationskette sehr subjektiv. Es gibt
          natürlich auch{" "}
          <strong className="text-heading">
            ernsthaftere Gründe für eine Website
          </strong>{" "}
          als nur mein persönliches Empfinden für Professionalität.
        </p>
        <p className="font-body mt-4 text-lg">
          Wenn man ChatGPT fragt, warum es wichtig ist, als Unternehmen eine
          Firmen-Homepage zu haben, kommen folgende Punkte:
        </p>
        <ol className="font-body mt-4 list-decimal space-y-2 pl-6 text-lg">
          {chatGptGruende.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgChatGpt}
            alt="Das Bild zeigt einen schematisch dargestellten Laptop mit einem Screenshot einer ChatGPT Abfrage"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>

        <p className="font-body mt-10 text-lg">
          Bis auf Punkt 7 kann man{" "}
          <strong className="text-heading">
            all diese Faktoren auch über Social Media erreichen.
          </strong>{" "}
          Vor allem bei Online-Präsenz, Erreichbarkeit und Kundeninteraktion
          scheinen mir Instagram &amp; Co. vorne zu liegen. Doch was man bei
          all diesen Marketing-Kanälen nicht vergessen darf:{" "}
          <strong className="text-heading">Du bist vollkommen abhängig</strong>{" "}
          davon, dass dein Account bestehen bleibt. Ich kenne mehr als einen
          Unternehmer, dessen Facebook- oder Instagram-Account von heute auf
          morgen deaktiviert wurde. Der Account wurde einfach gesperrt. Die
          ganze Arbeit war weg. Und die Follower auch. Sie mussten komplett bei
          Null anfangen.
        </p>
        <p className="font-body mt-4 text-lg">
          Ich verstehe, warum man nur mit einem Insta-Account anfängt, und ich
          verstehe auch, warum man sein ganzes Business dort stattfinden
          lässt, weil die Kunden nun mal da sind und auch kaufen. Aber ich
          verstehe nicht,{" "}
          <strong className="text-heading">
            warum man nur auf ein einziges Pferd setzt?!
          </strong>{" "}
          Diese Geschichten von gelöschten Accounts sind ja keine Märchen. Das
          passiert Menschen. Und selbst wenn man niemanden persönlich kennt,
          sind es so viele Fälle, dass man davon schon mal gehört haben muss.
          Aber vielleicht gehören die „Ich brauche keine Website, ich habe
          Insta“-Verfechter zu der Fraktion „Lernen durch Schmerz“.
        </p>
      </section>

      {/* Zuhause */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Deine Website ist dein Zuhause
          </h2>
          <p className="font-body mt-6 text-lg">
            Eine Website gehört dir. Du hast alles in der Hand. Und natürlich
            kann die mal abschmieren. Oder du zerschießt dir aus Versehen was.
            Aber du hast ja irgendwo ein Backup.
          </p>
          <p className="font-body mt-4 text-lg">
            <strong className="text-heading">
              Deine Website steht da wie ein Haus.
            </strong>{" "}
            Und selbst wenn du renovierst oder umbaust, deine Freunde wissen
            trotzdem, wo du wohnst. Sie können jederzeit vorbeikommen, und du
            entscheidest, was sie sehen und in welchen Raum du sie führen
            möchtest.{" "}
            <strong className="text-heading">
              Deine Social-Media-Kanäle sind wie Cafés.
            </strong>{" "}
            Sie sind mega fancy, und es tummeln sich eine Menge Leute. Manche
            mögen noch nicht mal Kaffee. Sie kommen nur, um dir zu sagen, wie
            kacke deine Getränke schmecken.
          </p>
          <p className="font-body mt-4 text-lg">
            Dennoch sind die Cafés wichtig, damit du dich dort mit Freunden
            treffen kannst und du recht unkompliziert und schnell auf dich
            aufmerksam machen kannst. Vor allem, wenn du noch kein Geld für
            einen Hausbau hast, ist es cool, dass du die Möglichkeit hast, in
            ein Café zu gehen und dort Kontakte knüpfen kannst.
          </p>
          <p className="font-body mt-4 text-lg">
            Aber wenn morgen einer vom Gesundheitsamt der Meinung ist, dass die
            Milch sauer war, und das Café schließen lässt, dann wäre das doof.{" "}
            <strong className="text-heading">
              Dein Haus kann dir so schnell niemand wegnehmen.
            </strong>{" "}
            Und wenn es so weit ist, dass dir jemand dein Haus pfändet, dann
            brauchst du auch meistens keine Unternehmenshomepage mehr 😂
            Zumindest nicht für das aktuell bestehende Unternehmen.
          </p>
        </div>
      </section>

      {/* SEO */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Zum Schluss noch dieses SEO
        </h2>
        <p className="font-body mt-6 text-lg">
          Jetzt kommen wir noch zu Punkt 7 von der ChatGPT-Liste. SEO. Search
          Engine Optimization. Oder zu Deutsch: Suchmaschinenoptimierung.{" "}
          <strong className="text-heading">Eine gut optimierte Website</strong>{" "}
          kann dir dabei helfen, organisch mehr Traffic zu generieren, deine
          Reichweite zu erhöhen und letztendlich mehr potenzielle Kunden
          anzulocken. Und das alles, während du die Kontrolle über deine
          digitale Präsenz behältst.
        </p>
        <p className="font-body mt-4 text-lg">
          Wenn du in deinen Texten auf deiner Website Wörter benutzt, die zu
          deinem Thema häufig bei Google gesucht werden, dann merkt Google
          das. Das sind die sogenannten Keywords, von denen alle reden. Und je
          öfter und besser du das machst oder machen lässt, desto höher ist
          die Chance, dass dein Unternehmen gefunden wird.{" "}
          <strong className="text-heading">
            Völlig unabhängig davon, wie gerade ein Instagram-Algorithmus
            funktioniert.
          </strong>
        </p>
        <p className="font-body mt-4 text-lg">
          Du lenkst und beeinflusst deine Sichtbarkeit im großen Ozean des
          Internets durch deine eigenen Worte. Denn wenn jemand nach Produkten
          oder Dienstleistungen sucht, die du anbietest, kannst du mit den
          richtigen Keywords sicherstellen, dass sie dich auch finden.
        </p>
        <p className="font-body mt-4 text-lg">
          Und last but not least ist deine eigene Homepage{" "}
          <strong className="text-heading">
            ein sehr nachhaltiger Marketingkanal.
          </strong>{" "}
          Denn deine Texte verschwinden nicht in einem niemals enden wollenden
          Feed, sondern sie sind immer da und jederzeit änderbar. Du kannst
          sie immer auf dem aktuellen Stand halten und{" "}
          <strong className="text-heading">
            mit einer Plattform wie zum Beispiel Pinterest kannst du den
            nachhaltigen Traffic auf deiner Website noch optimieren.
          </strong>
        </p>
        <p className="font-body mt-4 text-lg">
          Erfahre in diesem{" "}
          <Link
            href="/blog/pinterest-marketing/"
            className="text-gold-text hover:underline"
          >
            Blogartikel mehr zu Pinterest
          </Link>
          .
        </p>
      </section>

      {/* Schlusswort + CTA */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Jetzt aber wirklich das Schlusswort
          </h2>
          <p className="font-body mt-6 text-lg">
            Mach Insta, mach TikTok, mach LinkedIn und mach Pinterest 😊 Aber
            vor allem mach eine Website. Sie ist der treuste und loyalste
            Begleiter im großen Irrgarten der digitalen Präsenz.
          </p>
          <p className="font-body mt-4 text-lg">
            Und wenn deine Website steht, sorgt Pinterest dafür, dass sie auch
            dauerhaft gefunden wird. Als{" "}
            <Link href="/" className="text-gold-text hover:underline">
              Pinterest Marketing Agentur
            </Link>{" "}
            unterstützt molloy business dich genau dabei – zum Beispiel mit
            einem{" "}
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
            href="https://youtu.be/a3d1gebGKD4"
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
