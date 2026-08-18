import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import heroImage from "@/assets/images/hero-juliette.jpg";
import { siteConfig } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";

const path = "/ueber-mich/";

// Wortgleich in Breadcrumb-Komponente und BreadcrumbList-Schema.
const pageName = "Über mich";

export const metadata: Metadata = {
  title: "Über Juliette Oppel – Pinterest Marketing Expertin",
  description:
    "Juliette Oppel ist das Gesicht von molloy business: aus der Touristik – AIDA, Eventmanagement, Salestraining – zur Spezialisierung auf Pinterest Marketing.",
  alternates: {
    canonical: path,
  },
};

// Person mit fester @id — dieselbe Entität wird auf der Startseite und im
// BlogPosting-Schema referenziert (eine verknüpfte Person website-weit,
// keine Duplikate). KEIN "founder": Juliette ist das Gesicht der Marke,
// Rechtsträger ist allein die molloy Management OÜ.
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
          name: pageName,
          item: `${siteConfig.url}${path}`,
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#juliette-oppel`,
      name: siteConfig.brandFace,
      jobTitle: "Pinterest Marketing Expertin",
      worksFor: { "@id": `${siteConfig.url}/#organization` },
      sameAs: [
        siteConfig.social.linkedin,
        siteConfig.social.pinterest,
        siteConfig.social.instagram,
      ],
    },
  ],
};

export default function UeberMich() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
          {pageName}
        </p>
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          Über mich – Juliette Oppel
        </h1>
        {/* Antwort-Kapsel: 40–60 Wörter, beantwortet eigenständig die Frage
            "Wer ist Juliette Oppel?" — nicht kürzen, nicht aufteilen. */}
        <p className="font-body mt-6 text-lg">
          Juliette Oppel ist das Gesicht von molloy business und auf
          organisches Pinterest-Marketing für Unternehmen spezialisiert. Sie
          kommt selbst aus der Touristik: Nach dem Studium in Tourismus- und
          Eventmanagement hat sie bei AIDA und in der Yachthafenresidenz Hohe
          Düne gearbeitet – heute macht sie vor allem Reiseveranstalter und
          Touristikunternehmen auf Pinterest sichtbar.
        </p>
        <p className="font-body mt-4 text-lg">
          Auf dieser Seite erzähle ich dir, wie es dazu kam – und warum meine
          Stationen in der Touristik heute der Kern meiner Arbeit sind.
        </p>

        <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
          <ExportedImage
            src={heroImage}
            alt="Juliette Oppel, Gesicht der Pinterest Marketing Agentur molloy business"
            fill
            className="object-cover"
            sizes="(min-width: 896px) 848px, calc(100vw - 48px)"
            basePath={basePath}
            priority
          />
        </div>
      </section>

      {/* Studium und AIDA */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Studium und AIDA: Verkaufen in der Touristik
          </h2>
          <p className="font-body mt-6 text-lg">
            Angefangen hat alles mit dem Studium in Tourismus- und
            Eventmanagement. Mich hat schon damals interessiert, was hinter
            einer Reise steckt: Kalkulation, Vertrieb, Abläufe – all das, was
            Gäste nie sehen und was trotzdem darüber entscheidet, ob eine
            Reise funktioniert.
          </p>
          <p className="font-body mt-4 text-lg">
            Danach ging es zu <strong className="text-heading">AIDA</strong> –
            zuerst an Bord, später im Headquarter als Salestrainerin für
            Reisebüropartner. An Bord habe ich den Alltag eines
            Kreuzfahrtschiffs von innen erlebt und gesehen, was aus einem
            Katalogversprechen tatsächlich wird. Im Headquarter habe ich
            anschließend Reisebüropartner darin geschult, die Produkte von
            AIDA zu beraten und zu verkaufen.
          </p>
          <p className="font-body mt-4 text-lg">
            Diese Zeit prägt meine Arbeit bis heute, denn ich kenne dadurch
            beide Perspektiven aus erster Hand: die des Reisebüros, das am
            Counter berät und wissen muss, welche Fragen Kundinnen und Kunden
            vor der Buchung stellen – und die des Veranstalters, der sein
            Produkt so aufbereiten muss, dass es sich erklären und verkaufen
            lässt.
          </p>
        </div>
      </section>

      {/* Hohe Düne und Selbstständigkeit */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Eventmanagement an der Ostsee – und der Schritt ins Eigene
        </h2>
        <p className="font-body mt-6 text-lg">
          Als Eventmanagerin in der{" "}
          <strong className="text-heading">
            Yachthafenresidenz Hohe Düne
          </strong>
          , einem großen Kongresshotel an der Ostsee, kam die zweite Schule
          dazu: Veranstaltungen, bei denen viele Gewerke ineinandergreifen
          müssen. Ein Event verzeiht keine ungefähren Pläne – es gibt einen
          Termin, und bis dahin muss jedes Detail geklärt sein. Dort habe ich
          gelernt, in Abläufen zu denken: wer macht was bis wann, und woran
          erkennt man rechtzeitig, dass etwas hakt.
        </p>
        <p className="font-body mt-4 text-lg">
          Irgendwann kam der Punkt, an dem ich mein eigenes Ding machen
          wollte: Ich bin ausgewandert, reise selbst viel um die Welt und
          arbeite ortsunabhängig – seit 4 Jahren selbstständig im
          Pinterest-Marketing. Zu Pinterest bin ich über die Suche nach einem
          Kanal gekommen, der wie die Touristik funktioniert: Menschen planen
          dort langfristig, sammeln Ideen und treffen Entscheidungen Monate im
          Voraus – genau das Verhalten, das ich aus dem Reisevertrieb kenne.
        </p>
      </section>

      {/* Brücke zur Zielgruppe */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Was das für dich bedeutet
          </h2>
          <p className="font-body mt-6 text-lg">
            Wenn du einen Reiseveranstalter oder ein Touristikunternehmen
            führst, musst du mir dein Geschäft nicht erst erklären. Ich weiß,
            wie die Saisonplanung deinen Jahresrhythmus bestimmt, wie lange
            Buchungsentscheidungen reifen und welche Rolle der Vertrieb über
            Partner spielt – weil ich selbst in dieser Branche verkauft,
            geschult und organisiert habe.
          </p>
          <p className="font-body mt-4 text-lg">
            Genau deshalb passen Touristik und Pinterest so gut zusammen:
            Beides lebt von der Planungsphase – von Rundreisen über Camper
            bis zu besonderen Unterkünften.
          </p>
        </div>
      </section>

      {/* Arbeitsweise */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Wie ich arbeite
        </h2>
        <p className="font-body mt-6 text-lg">
          Ich arbeite organisch statt mit Anzeigen: Pins, die über die
          Pinterest-Suche gefunden werden und über Monate weiterwirken, statt
          Reichweite, die mit dem Werbebudget endet. Das braucht Struktur –
          Keyword-Recherche, Board-Aufbau und einen Redaktionsplan, der sich
          an deiner Saison orientiert. Die Arbeitsweise aus dem
          Eventmanagement ist dabei geblieben: klare Abläufe, verlässliche
          Termine, nachvollziehbare Entscheidungen.
        </p>
        <p className="font-body mt-4 text-lg">
          Und ich berate ehrlich: Wenn Pinterest nicht zu deinem
          Geschäftsmodell passt – etwa weil deine Buchungen fast nur aus
          Last-Minute-Entscheidungen entstehen –, sage ich dir das offen,
          bevor du Zeit oder Geld investierst. Für den Einstieg eignet sich
          oft ein{" "}
          <Link
            href="/pinterest-strategie-call/"
            className="text-gold-text hover:underline"
          >
            Pinterest Strategie Call
          </Link>
          ; wenn du den Kanal komplett abgeben willst, übernimmt das{" "}
          <Link
            href="/pinterest-account-management/"
            className="text-gold-text hover:underline"
          >
            Pinterest Account Management
          </Link>{" "}
          die laufende Umsetzung. Alle Leistungen im Überblick zeigt die
          Startseite der{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          molloy business.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Lass uns kennenlernen
          </h2>
          <p className="font-body mt-6 text-lg">
            Wenn du wissen willst, ob Pinterest zu deinem Unternehmen passt,
            ist ein unverbindliches Erstgespräch der einfachste Anfang.
          </p>
          <div className="mt-8">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Erstgespräch vereinbaren
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
