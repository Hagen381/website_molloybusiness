import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";
import imgWeltkugel from "@/assets/images/blog/online-schuelerpraktika/Online-Fachkraeftegewinnung-1.png";
import imgVorurteile from "@/assets/images/blog/online-schuelerpraktika/Online-Fachkraeftegewinnung-2.png";
import imgTipps from "@/assets/images/blog/online-schuelerpraktika/Online-Fachkraeftegewinnung-3.png";

const post = blogPosts.find((p) => p.slug === "online-schuelerpraktika")!;

const path = `/blog/${post.slug}/`;

const h1 = "Online-Fachkräftegewinnung durch Online-Schülerpraktika";

export const metadata: Metadata = {
  title: "Online-Fachkräftegewinnung durch Online-Schülerpraktika",
  description:
    "Transkript des Gastauftritts bei Local Lights: Wie Unternehmen mit Online-Schülerpraktika Nachwuchs gewinnen – Vorurteile, Chancen und fünf Tipps für den Start.",
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
  { id: "herzlich-willkommen-bei-local-lights", label: "Herzlich willkommen bei Local Lights!" },
  { id: "warum-ist-mir-die-ortsunabhaengigkeit-so-wichtig", label: "Warum ist mir die Ortsunabhängigkeit so wichtig?" },
  { id: "online-fachkraeftegewinnung-durch-online-schuelerpraktika", label: "Online-Fachkräftegewinnung durch Online-Schülerpraktika" },
  { id: "vorurteile-gegenueber-online-schuelerpraktika", label: "Vorurteile gegenüber Online-Schülerpraktika" },
  { id: "tipps-fuer-unternehmen-die-ein-online-schuelerpraktikum-anbieten-moechten", label: "Tipps für Unternehmen, die ein Online-Schülerpraktikum anbieten möchten" },
  { id: "fazit", label: "Fazit" },
  { id: "lieber-anhoeren", label: "Lieber anhören?" },
] as const;

export default function OnlineSchuelerpraktika() {
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
          Dieser Blogbeitrag ist ein Transkript meines Gastauftrittes bei{" "}
          <a
            href="https://www.local-lights.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            Local Lights
          </a>
          . Im Studio Fünf Media in Rostock gibt es unter der Regie von Robert
          Behrens ein digitales Format für mehr{" "}
          <strong className="text-heading">
            Sichtbarkeit von Unternehmen im Land Mecklenburg-Vorpommern
          </strong>
          . Ich durfte in einer digitalen Präsentation bei Local Lights über
          das Thema Online-Fachkräftegewinnung sprechen und habe da meinen
          Fokus auf{" "}
          <strong className="text-heading">Online-Schülerpraktika</strong>{" "}
          gelegt.
        </p>
        <p className="mt-4">
          Eigentlich lasse ich ja meine Blogartikel immer einsprechen, für
          alle, die Content lieber auditiv aufnehmen. In diesem Fall mache ich
          es andersherum. Für alle, die lieber lesen als hören, ist hier das{" "}
          <a
            href="https://www.youtube.com/watch?v=u-CMgdOQt-s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            Video
          </a>{" "}
          als Text zusammengefasst.
        </p>
      </section>

      {/* Willkommen bei Local Lights */}
      <section className="article-column py-[30px]">
        <h2 id="herzlich-willkommen-bei-local-lights" className="article-h2">
          Herzlich willkommen bei Local Lights!
        </h2>
        <p className="mt-6">
          Heute gibt es einen kurzen Exkurs zum Thema
          Online-Fachkräftegewinnung.
        </p>
        <p className="mt-4">
          Mein Name ist Juliette Oppel, ich bin die Gründerin von molloy
          business. Ich habe molloy business vor etwa zweieinhalb Jahren als
          reines Online-Unternehmen gegründet. Meine Dienstleistungen
          umfassen Online-Marketing und im Speziellen{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing
          </Link>
          . Ich helfe Unternehmen dabei, ihr Business auf Pinterest
          langfristig sichtbar zu machen.
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            molloy business ist komplett ortsunabhängig.
          </strong>{" "}
          Das symbolisiert auch die Jurte in meinem Firmenlogo: Genauso wie
          Nomaden ihr Zuhause überallhin mitnehmen können, kann ich mein
          Business von überall aus betreiben.
        </p>
      </section>

      {/* Ortsunabhängigkeit */}
      <section className="article-column py-[30px]">
        <h2 id="warum-ist-mir-die-ortsunabhaengigkeit-so-wichtig" className="article-h2">
          Warum ist mir die Ortsunabhängigkeit so wichtig?
        </h2>
        <p className="mt-6">
          Ursprünglich aus privaten Gründen – ich reise einfach gerne. Doch
          schnell habe ich gemerkt, dass ich dadurch meinen Kundenradius
          erheblich erweitern kann.{" "}
          <strong className="text-heading">
            Meine Kunden sind weltweit verteilt,
          </strong>{" "}
          und ich kann ebenfalls überall sein. So habe ich die Möglichkeit,
          breit zu arbeiten. Unternehmen, die mit mir zusammenarbeiten
          möchten, müssen nicht in meiner Region ansässig sein. Tatsächlich
          habe ich noch nie einen meiner Kunden persönlich getroffen, trotzdem
          pflegen wir ein enges und{" "}
          <strong className="text-heading">
            vertrauensvolles Arbeitsverhältnis.
          </strong>
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgWeltkugel}
            alt="Grafik einer Weltkugel, um die herum Unternehmen und Fachkräfte verteilt sind"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>

        <p className="mt-10">
          Mit dieser Grafik möchte ich verdeutlichen, dass man sich bei der
          Online-Fachkräftegewinnung von der Vorstellung lösen sollte, dass
          eine Fachkraft zwingend vor Ort sein muss, um gute Arbeit zu
          leisten.
        </p>
        <p className="mt-4">
          Gerade heute gibt es viele Solo-Selbstständige mit einem ganz
          anderen Lebensmodell – sie reisen viel, überwintern in anderen
          Ländern oder haben einen Zweitwohnsitz. Ich glaube, dass dies ein
          großer Hebel ist –{" "}
          <strong className="text-heading">
            wenn man den Gedanken loslässt, dass eine Fachkraft physisch
            anwesend sein muss.
          </strong>
        </p>
      </section>

      {/* Fachkräftegewinnung */}
      <section className="article-column py-[30px]">
        <h2 id="online-fachkraeftegewinnung-durch-online-schuelerpraktika" className="article-h2">
          Online-Fachkräftegewinnung durch Online-Schülerpraktika
        </h2>
        <p className="mt-6">
          Ich bin überzeugt, dass man mit der Online-Fachkräftegewinnung
          schon viel früher beginnen kann, nämlich{" "}
          <strong className="text-heading">
            bei Schülern, die in der 9. oder 10. Klasse
          </strong>{" "}
          ein Praktikum machen müssen.
        </p>
        <p className="mt-4">
          In diesem Alter geht es darum, herauszufinden, welche beruflichen
          Wege infrage kommen – sei es eine Ausbildung nach der 10. Klasse
          oder die Orientierung für ein späteres Studium. Warum also nicht
          schon früh testen, ob die{" "}
          <strong className="text-heading">Online-Welt eine Option</strong>{" "}
          ist?
        </p>
        <p className="mt-4">
          Viele der benötigten Tools und Fähigkeiten für
          Online-Schülerpraktika sind dieser Generation bereits vertraut,
          weil sie mit digitalen Technologien aufwachsen. Das bietet die
          Möglichkeit, schnell anzuknüpfen und spannende Projekte mit jungen
          Menschen umzusetzen. Gleichzeitig erkennen sie, dass{" "}
          <strong className="text-heading">
            „den ganzen Tag am Computer sitzen und zocken“
          </strong>{" "}
          nicht automatisch bedeutet, für den digitalen Arbeitsmarkt
          gerüstet zu sein. Es gibt einen Unterschied zwischen produktiver
          Arbeit am PC und ziellosem Scrollen auf Social Media.
        </p>
        <p className="mt-4">
          Ein Online-Praktikum eröffnet Schülern zudem die Möglichkeit, sich
          deutschland- oder weltweit zu bewerben, anstatt sich auf
          Unternehmen zu beschränken,{" "}
          <strong className="text-heading">
            die mit dem Fahrrad oder Bus erreichbar sind
          </strong>{" "}
          – nur um irgendeinen Praktikumsplatz zu haben.
        </p>
      </section>

      {/* Vorurteile */}
      <section className="article-column py-[30px]">
        <h2 id="vorurteile-gegenueber-online-schuelerpraktika" className="article-h2">
          Vorurteile gegenüber Online-Schülerpraktika
        </h2>
        <p className="mt-6">
          Natürlich gibt es Bedenken – sowohl von Schulen als auch von
          Unternehmen. Einige häufige Einwände:
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgVorurteile}
            alt="Grafik zu Vorurteilen gegenüber Online-Schülerpraktika"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>

        <h3 className="article-h3 mt-10">
          1. „Da lernen sie doch nichts.“
        </h3>
        <p className="mt-4">
          Doch, und zwar oft mehr als im klassischen Praktikum. Ich stelle die
          Gegenfrage: Lernen sie mehr, wenn sie Kaffee kochen, kopieren oder
          Regale einräumen? Viele Unternehmen empfinden Schülerpraktikanten
          als Belastung und geben ihnen Aufgaben, die sie nur beschäftigen
          sollen. Online funktioniert das nicht – Unternehmen müssen sich
          vorher Gedanken machen, welche sinnvollen Aufgaben sie Praktikanten
          geben können.
        </p>

        <h3 className="article-h3 mt-10">
          2. „Die sitzen doch den ganzen Tag nur herum.“
        </h3>
        <p className="mt-4">
          Auch das ist nicht der Fall. Es gibt zahlreiche Möglichkeiten, die
          Arbeit zu überprüfen. Wer sich für ein Online-Praktikum bewirbt, hat
          in der Regel echtes Interesse und will sich einbringen.
        </p>

        <h3 className="article-h3 mt-10">
          3. „Sie brauchen doch den Austausch mit Kollegen.“
        </h3>
        <p className="mt-4">
          Nicht jeder Mensch arbeitet produktiver im Team. Manche brauchen den
          Austausch, andere sind allein effizienter. Ein
          Online-Schülerpraktikum kann helfen, herauszufinden, welcher Typ man
          ist.
        </p>

        <h3 className="article-h3 mt-10">
          4. „Der Praktikumsbetrieb kann nicht besucht werden.“
        </h3>
        <p className="mt-4">
          Das ist ein veraltetes Denken. Meetings und Einblicke in den Betrieb
          können problemlos online stattfinden – genauso, wie es in der
          modernen Arbeitswelt längst Standard ist.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgTipps}
            alt="Grafik mit Tipps für Unternehmen, die ein Online-Schülerpraktikum anbieten möchten"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Tipps */}
      <section className="article-column py-[30px]">
        <h2 id="tipps-fuer-unternehmen-die-ein-online-schuelerpraktikum-anbieten-moechten" className="article-h2">
          Tipps für Unternehmen, die ein Online-Schülerpraktikum anbieten
          möchten
        </h2>
        <p className="mt-6">
          Wer es ausprobieren möchte, sollte einige Dinge beachten:
        </p>
        <ol className="mt-4 list-decimal space-y-4 pl-6">
          <li>
            <strong className="text-heading">
              Technische Ausstattung prüfen
            </strong>
            <br />
            Der Praktikant braucht einen Laptop – ein Smartphone oder Tablet
            reicht nicht aus. Schulen und Eltern sollten klären, ob ein
            Laptop verfügbar ist und ob erforderliche (kostenlose) Software
            installiert werden darf.
          </li>
          <li>
            <strong className="text-heading">
              Tägliche Meetings einplanen
            </strong>
            <br />
            Ein kurzes Online-Treffen am Morgen über Zoom oder Teams hilft,
            den Tag zu strukturieren. Während des Tages kann die
            Kommunikation flexibel über einen Messenger erfolgen.
          </li>
          <li>
            <strong className="text-heading">
              Autodidaktisches Lernen fördern
            </strong>
            <br />
            YouTube-Tutorials sind eine wertvolle Ressource. Unternehmen
            können Schülern Aufgaben stellen, bei denen sie eigenständig
            recherchieren und Gelerntes direkt umsetzen.
          </li>
          <li>
            <strong className="text-heading">
              Ein Mini-Projekt definieren
            </strong>
            <br />
            Viele Schulen haben unterschiedliche Praktikumsmodelle: Manche
            Schüler sind zwei Wochen am Stück da, andere einen Tag pro Woche
            über das ganze Schulhalbjahr. Ein kleines Projekt gibt Struktur
            und sorgt für ein Erfolgserlebnis – für den Schüler und das
            Unternehmen.
          </li>
          <li>
            <strong className="text-heading">
              Arbeitsergebnisse dokumentieren lassen
            </strong>
            <br />
            Eine tägliche Zusammenfassung schafft Transparenz. Ein Schüler,
            der fit im Videoschnitt ist, kann z.&nbsp;B. kleine Clips
            erstellen, in denen er die täglichen Aufgaben zusammenfasst.
            Diese kann das Unternehmen später dann direkt für Social Media
            nutzen.
          </li>
        </ol>
      </section>

      {/* Fazit + CTA */}
      <section className="article-column py-[30px]">
        <h2 id="fazit" className="article-h2">
          Fazit
        </h2>
        <p className="mt-6">
          Ein Online-Schülerpraktikum kann eine wertvolle Erfahrung für
          Schüler und Unternehmen sein. Es ist eine echte Chance, Talente
          frühzeitig zu entdecken – unabhängig vom Standort.
        </p>
        <p className="mt-4">Zum Abschluss ein Zitat:</p>
        <p className="mt-4">
          <strong className="text-heading">
            „Das geht nicht“, sagten alle. Da kam einer, der hat’s gemacht.
          </strong>
        </p>
        <p className="mt-4">
          Wer also denkt, „Das geht bei uns nicht“, sollte es vielleicht
          einfach ausprobieren.
        </p>
        <p className="mt-4">
          Und wenn du auch gern ein Praktikum bei mir machen möchtest, dann
          bewirb dich per{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-gold-text hover:underline"
          >
            E-Mail
          </a>
          .
        </p>
        <p className="mt-4">
          Und falls dein Unternehmen nicht nur beim Nachwuchs neue Wege gehen
          will: Als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          macht molloy business dein Business langfristig sichtbar – vereinbare
          gern ein{" "}
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
            href="https://youtu.be/egiZK2vwGEA"
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
