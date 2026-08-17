import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";
import imgObm1 from "@/assets/images/blog/online-business-management/Online-Business-Management-5.jpg";
import imgObm2 from "@/assets/images/blog/online-business-management/Online-Business-Management-2.jpg";
import imgObm3 from "@/assets/images/blog/online-business-management/Online-Business-Management-6.jpg";
import imgObm4 from "@/assets/images/blog/online-business-management/Online-Business-Management-3.jpg";
import imgObm5 from "@/assets/images/blog/online-business-management/Online-Business-Management-4.jpg";

const post = blogPosts.find((p) => p.slug === "online-business-management")!;

const path = `/blog/${post.slug}/`;

const h1 = "Warum ich mich gegen OBM und für Pinterest Marketing entschieden habe";

export const metadata: Metadata = {
  title: "Warum ich mich gegen OBM und für Pinterest entschieden habe",
  description:
    "Die Geschichte einer Fokus-Entscheidung: warum ich Online Business Management hinter mir gelassen und mich voll auf Pinterest Marketing spezialisiert habe.",
  alternates: {
    canonical: path,
  },
};

const imageSizes = "(min-width: 896px) 848px, calc(100vw - 48px)";

const obmStaerken = [
  "Ich bin strukturiert.",
  "Ich sehe sofort das große Ganze.",
  "Ich erkenne Prozesse, bevor sie jemand beschreibt.",
  "Ich denke für andere mit – ob ich will oder nicht.",
  "Und ich liebe es, Ordnung in ein kreatives Chaos zu bringen.",
];

const obmBedeutet = [
  "enges Arbeiten",
  "tiefe Einblicke ins Business",
  "regelmäßige Calls",
  "unzählige Abstimmungen",
  "viel Verantwortung",
  "emotionale Themen",
  "Mentoring-Anteile",
  "und ein Setup, bei dem Energie und Vertrauen stimmen müssen",
];

const typischeSituationen = [
  "„Ich buche 5 Stunden, aber brauche eigentlich 15.“",
  "„Ich möchte wachsen, aber habe kein Budget für Support.“",
  "„Ich brauche jemanden, der alles macht – aber ich möchte es möglichst günstig haben.“",
  "„Ich habe keine Zeit für eine lange Einarbeitung.“",
];

const zielgruppenErkenntnisse = [
  "Viele OBM-Anfragen kommen von Solopreneuren.",
  "Viele Solopreneure haben niedrige Budgets.",
  "Viele wollen alles gleichzeitig (Podcast, Social Media, Newsletter, Strategie, Organisation).",
  "Viele verteilen Energie in alle Richtungen.",
  "Viele investieren lieber in eigene Coachings und für echte Unterstützung bleibt dann kein Geld mehr übrig.",
];

const obmEigenschaften = [
  "ist intensiv",
  "ist 1:1",
  "erfordert ständige Präsenz",
  "lässt sich nicht skalieren",
  "frisst Flexibilität",
  "wird als die eierlegende Wollmilchsau eingestuft",
  "blockiert Kapazitäten für meinen eigentlichen USP Pinterest Marketing",
];

const gerneMit = [
  "Menschen, die Ergebnisse wollen",
  "Entscheidern, die Entscheidungen treffen",
  "Teams, die Verantwortung abgeben wollen",
  "Menschen, die selbstständiges Arbeiten schätzen",
  "Unternehmern, die einen Sparring-Partner suchen und kein Fan-Girl",
];

const nichtGeeignet = [
  "Do-it-yourself-Sparfüchse",
  "Menschen, die Kontrolle nicht abgeben wollen",
  "Unternehmen ohne klare Ziele",
  "Auftraggeber, die sich nicht entscheiden können",
];

const kernprodukte = [
  { label: "Pinterest Account Aufbau", href: "/pinterest-account-aufbau/" },
  {
    label: "Pinterest Account Management",
    href: "/pinterest-account-management/",
  },
  { label: "Pinterest Strategie Call", href: "/pinterest-strategie-call/" },
  { label: "Pinterest Audit", href: "/pinterest-audit/" },
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
  { id: "der-ausgangspunkt-warum-ich-online-business-management-ueberhaupt-angeboten-habe", label: "Der Ausgangspunkt: Warum ich Online Business Management überhaupt angeboten habe" },
  { id: "viele-kunden-haben-nicht-das-budget-fuer-echtes-online-business-management", label: "Viele Kunden haben nicht das Budget für echtes Online Business Management" },
  { id: "warum-mir-der-abschied-vom-online-business-management-trotzdem-schwerfiel", label: "Warum mir der Abschied vom Online Business Management trotzdem schwerfiel" },
  { id: "was-die-fokus-entscheidung-veraendert-hat", label: "Was die Fokus-Entscheidung verändert hat" },
  { id: "was-diese-entscheidung-fuer-meine-kunden-bedeutet", label: "Was diese Entscheidung für meine Kunden bedeutet" },
  { id: "fazit-warum-es-am-ende-pinterest-wurde", label: "Fazit: Warum es am Ende Pinterest wurde" },
  { id: "lieber-anhoeren", label: "Lieber anhören?" },
] as const;

export default function OnlineBusinessManagement() {
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
          Es gibt Entscheidungen im Business, die man nicht von heute auf
          morgen trifft. Man spürt sie lange vorher, aber erst wenn man bereit
          ist, ehrlich hinzusehen, macht man sie auch offiziell.
        </p>
        <p className="mt-4">
          Genau so ging es mir mit dem Thema{" "}
          <strong className="text-heading">
            Online Business Management (OBM)
          </strong>
          .
        </p>
        <p className="mt-4">
          Ich liebe Struktur.
          <br />
          Ich liebe Klarheit.
          <br />
          Ich liebe es, Prozesse zu optimieren und Menschen zu entlasten.
        </p>
        <p className="mt-4">
          Lange war OBM ein zentraler Bestandteil meines Angebots. Aber
          irgendwann habe ich gemerkt:
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            Online Business Management passt nicht zu jedem Unternehmen.
            <br />
            Und nicht zu jedem Menschen.
            <br />
            Und nicht mehr zu meiner langfristigen Vision.
          </strong>
        </p>
        <p className="mt-4">
          Deshalb habe ich die Entscheidung getroffen, das OBM-Kapitel zu
          schließen – und mich voll und ganz auf Pinterest Marketing zu
          spezialisieren.
        </p>
        <p className="mt-4">
          Warum das so ist, was ich gelernt habe und wie diese Entscheidung
          mein Business verändert hat – genau darum geht es in diesem Artikel.
        </p>
      </section>

      {/* Ausgangspunkt */}
      <section className="article-column py-[30px]">
        <h2 id="der-ausgangspunkt-warum-ich-online-business-management-ueberhaupt-angeboten-habe" className="article-h2">
          Der Ausgangspunkt: Warum ich Online Business Management überhaupt
          angeboten habe
        </h2>
        <p className="mt-6">
          Als ich mit molloy business gestartet bin, war OBM für mich der
          logische Schritt:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {obmStaerken.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Für viele Solo- und Einzelunternehmer war genau das der
          Gamechanger:
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            Endlich jemanden zu haben, der mitdenkt und nicht nur
            mitarbeitet.
          </strong>
        </p>
        <p className="mt-4">
          Und so wurde Online Business Management zu einer Dienstleistung,
          die nicht nur gebraucht wurde, sondern die mir auch wirklich Spaß
          gemacht hat.
        </p>
        <p className="mt-4">Zumindest am Anfang.</p>

        <h3 className="article-h3 mt-10">
          Was sich verändert hat – und warum Online Business Management nicht
          für alle passt
        </h3>
        <p className="mt-4">
          Durch meine Zielgruppenanalyse mit dem{" "}
          <a
            href="https://schlau-digital.de/slides/ki-kurs-klarere-zielgruppe-in-unter-2-stunden-11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            Workshop der Schlau Digital
          </a>{" "}
          wurde mir klar:
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            Online Business Management funktioniert nur, wenn die Chemie
            stimmt.
          </strong>{" "}
          OBM ist extrem nah am Menschen. Es ist keine „Ich lade kurz 50 Pins
          hoch“-Dienstleistung.
        </p>
        <p className="mt-4">
          Online Business Management bedeutet:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {obmBedeutet.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Wenn das passt, ist OBM großartig. Wenn nicht, wird es belastend –
          für beide Seiten.
        </p>
        <p className="mt-4">
          Und genau das passiert oft schneller, als man glaubt.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgObm1}
            alt="Online Business Management"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Budget */}
      <section className="article-column py-[30px]">
        <h2 id="viele-kunden-haben-nicht-das-budget-fuer-echtes-online-business-management" className="article-h2">
          Viele Kunden haben nicht das Budget für echtes Online Business
          Management
        </h2>
        <p className="mt-6">
          Viele Solopreneure glauben, OBM sei ein Paket für 5 Stunden im Monat.
        </p>
        <p className="mt-4">
          Doch Online Business Management funktioniert nicht in Häppchen. Das
          ist, als würde man eine Haushaltshilfe für 20 Minuten buchen – klar,
          sie kann kommen, aber sie schafft nichts.
        </p>
        <p className="mt-4">
          Typische Situationen aus meinem damaligen Alltag:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {typischeSituationen.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">Und ganz ehrlich:</p>
        <p className="mt-4">
          <strong className="text-heading">
            Wenn das Budget und die Zeit für ein Onboarding nicht da sind, wird
            ein Online Business Manager zur Belastung – nicht zur Lösung.
          </strong>
        </p>

        <h3 className="article-h3 mt-10">
          Online Business Management zieht häufig eine Zielgruppe an, für die
          ich nicht der richtige Fit war
        </h3>
        <p className="mt-4">
          Aus meiner intensiven Zielgruppenanalyse wurde klar:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {zielgruppenErkenntnisse.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Das ist keine Wertung – es ist einfach nicht die Zielgruppe, mit der
          ich am besten wirke.
        </p>
        <p className="mt-4">
          Dieser Punkt wurde mir erst durch die Zielgruppenanalyse wirklich
          klar – Online Business Management:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {obmEigenschaften.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Und damit passte OBM nicht mehr zu meiner langfristigen
          Unternehmensstrategie, denn:
        </p>
        <p className="mt-4">
          <strong className="text-heading">
            Pinterest ist mein Kern.
            <br />
            Pinterest funktioniert skalierbar, planbar, messbar, langfristig.
            <br />
            Pinterest kann ich systematisieren und optimieren.
          </strong>
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgObm2}
            alt="Online Business Management"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Warum nicht leicht */}
      <section className="article-column py-[30px]">
        <h2 id="warum-mir-der-abschied-vom-online-business-management-trotzdem-schwerfiel" className="article-h2">
          Warum mir der Abschied vom Online Business Management trotzdem
          schwerfiel
        </h2>
        <p className="mt-6">
          Online Business Management ist nicht „falsch“. Es ist nur nicht
          mehr meins.
        </p>
        <p className="mt-4">
          Eine Zeit lang habe ich versucht, den Mittelweg zu gehen, und OBM
          nur noch dann angeboten, wenn drei Dinge zusammenkamen:
        </p>
        <p className="mt-6">
          <strong className="text-heading">1. Die Energie stimmt</strong>
        </p>
        <p className="mt-2">
          Ich muss spüren, dass die Zusammenarbeit leicht ist.
          <br />
          Dass ich willkommen bin.
          <br />
          Dass ich nicht „ziehen“ muss.
          <br />
          Dass Vertrauen da ist.
        </p>
        <p className="mt-6">
          <strong className="text-heading">
            2. Das Budget passt zum Umfang
          </strong>
        </p>
        <p className="mt-2">
          OBM darf kein Kompromiss sein.
          <br />
          Kein „mach mal irgendwas“.
          <br />
          Kein „Wir probieren mal eine Stunde pro Woche“.
        </p>
        <p className="mt-2">Es braucht echten Raum.</p>
        <p className="mt-6">
          <strong className="text-heading">
            3. Das Business des Kunden passt zu meiner Expertise
          </strong>
        </p>
        <p className="mt-2">Ich arbeite gerne mit:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {gerneMit.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">Nicht geeignet sind:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {nichtGeeignet.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Doch je klarer diese Kriterien wurden, desto klarer wurde auch:
          Die Fälle, in denen wirklich alles zusammenpasst, sind selten. Und
          meine Energie gehört inzwischen einem anderen Thema.
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgObm3}
            alt="Online Business Management"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Was sich verändert hat */}
      <section className="article-column py-[30px]">
        <h2 id="was-die-fokus-entscheidung-veraendert-hat" className="article-h2">
          Was die Fokus-Entscheidung verändert hat
        </h2>
        <p className="mt-6">
          <strong className="text-heading">
            ✔ Ich habe mehr Zeit für meine Kernprodukte
          </strong>
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {kernprodukte.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gold-text hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Diese Angebote sind skalierbar, effizient und bringen messbare
          Ergebnisse.
        </p>
        <p className="mt-6">
          <strong className="text-heading">
            ✔ Meine Termine sind planbarer
          </strong>
        </p>
        <p className="mt-2">
          Kein ständiges „Hast du kurz Zeit?“, kein Chaos, kein Multitasking.
        </p>
        <p className="mt-6">
          <strong className="text-heading">
            ✔ Ich arbeite nur noch mit Menschen, die wissen, worauf sie sich
            einlassen
          </strong>
        </p>
        <p className="mt-2">
          Klare Angebote mit klarem Umfang ziehen Kunden an, die wissen, was
          sie bekommen – und was nicht.
        </p>
        <p className="mt-6">
          <strong className="text-heading">
            ✔ Meine Positionierung ist heute klar und unverwechselbar
          </strong>
        </p>
        <p className="mt-2">
          Ich bin keine Virtuelle Assistentin.
        </p>
        <p className="mt-2">
          Ich bin:
          <br />
          <strong className="text-heading">
            Pinterest Expertin für KMU und Lifestyle-Unternehmen.
          </strong>
        </p>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={imgObm4}
            alt="Online Business Management"
            fill
            className="object-cover"
            sizes={imageSizes}
            basePath={basePath}
          />
        </div>
      </section>

      {/* Bedeutung für Kunden */}
      <section className="article-column py-[30px]">
        <h2 id="was-diese-entscheidung-fuer-meine-kunden-bedeutet" className="article-h2">
          Was diese Entscheidung für meine Kunden bedeutet
        </h2>
        <p className="mt-6">
          <strong className="text-heading">
            1. Volle Konzentration statt Spagat
          </strong>
        </p>
        <p className="mt-2">
          Keine Kompromisse.
          <br />
          Keine Überforderung.
          <br />
          Keine halben Lösungen.
        </p>
        <p className="mt-6">
          <strong className="text-heading">
            2. Pinterest ist mein Hauptangebot – und davon profitieren alle
          </strong>
        </p>
        <p className="mt-2">
          Mehr Strategie
          <br />
          Mehr Expertise
          <br />
          Mehr Ergebnisse
          <br />
          Mehr Klarheit
          <br />
          Mehr Sichtbarkeit
        </p>
        <p className="mt-6">
          <strong className="text-heading">
            3. Die Zusammenarbeit wird hochwertiger, persönlicher und
            nachhaltiger
          </strong>
        </p>
        <p className="mt-2">
          Denn ich mache nur noch das, was ich am besten kann – und das mit
          voller Energie.
        </p>
      </section>

      {/* Fazit */}
      <section className="article-column py-[30px]">
        <h2 id="fazit-warum-es-am-ende-pinterest-wurde" className="article-h2">
          Fazit: Warum es am Ende Pinterest wurde
        </h2>
        <p className="mt-6">
          Ich habe das OBM-Kapitel nicht im Groll geschlossen. Ich habe es{" "}
          <strong className="text-heading">
            zurück an den Platz gestellt, an den es für mich gehört
          </strong>
          : in die Vergangenheit – als die Zeit, in der ich gelernt habe, was
          ich wirklich will.
        </p>
        <p className="mt-4">Und diese Klarheit verdanke ich:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <a
              href="https://schlau-digital.de/slides/ki-kurs-klarere-zielgruppe-in-unter-2-stunden-11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-text hover:underline"
            >
              dem Schlau-Digital-Workshop
            </a>
          </li>
          <li>der Zielgruppenanalyse</li>
          <li>der Co-Creation mit ChatGPT</li>
          <li>und meinem Mut, ehrlich zu mir selbst zu sein</li>
        </ul>
        <p className="mt-4">
          Es war kein schneller Prozess und auch keine spontane Idee.
          <br />
          Es war das Ergebnis von ehrlicher Analyse, reflektierter
          Positionierung und strategischer Neuausrichtung.
        </p>
        <p className="mt-4">
          Heute ist molloy business eine{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          – mit voller Energie für ein Thema statt halber Energie für viele.
          Wenn du wissen möchtest, was Pinterest für dein Unternehmen leisten
          kann, dann vereinbare gern ein{" "}
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
            src={imgObm5}
            alt="Online Business Management"
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
            href="https://youtu.be/Mv6MflL4Wqs"
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
