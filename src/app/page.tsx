import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import heroImage from "@/assets/images/hero-juliette.jpg";
import { services, siteConfig } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";

// Jede Seite setzt ihr eigenes Canonical-Tag (siehe CLAUDE.md) — sonst
// erben Unterseiten das globale "/" aus layout.tsx und deklarieren sich
// selbst fälschlich als Startseite.
export const metadata: Metadata = {
  // Title bleibt bewusst der Default aus layout.tsx (Kern-Keyword) — nur die
  // Description ist Startseiten-spezifisch (Touristik-Fokusschicht).
  description:
    "Pinterest Marketing Agentur: organisch statt Ads sichtbar werden – Schwerpunkt Reiseveranstalter & Touristik, offen für Unternehmen aller Branchen.",
  alternates: {
    canonical: "/",
  },
};

// Hero-Chips folgen der Erzählung "Fokus, nicht Ausschluss": Touristik als
// Schwerpunkt, ohne Branchen-Rangfolge dahinter.
const audiences = [
  "Reiseveranstalter & Touristik",
  "KMU & Selbstständige",
  "Offen für alle Branchen",
];

// Echte Kundenstimmen, schriftlich freigegeben — WORTGLEICH übernehmen,
// nie umformulieren oder kürzen (Auszüge nur auf den Unterseiten, dort mit
// […]-Kennzeichnung). Die Aussage "von Pinterest selbst positiv
// wahrgenommen" darf ausschließlich innerhalb des Christ-Zitats stehen,
// niemals als eigene Aussage der Website.
const testimonials = [
  {
    quote:
      "Hervorragende Pinterest-Beratung! Juliette hat uns pragmatisch und fundiert in allen Fragen rund um Pinterest unterstützt. Sie hat unseren Pinterest-Account professionell aufgebaut, berät uns zu Inhalten und setzt organische Beiträge gekonnt um. Ihre Expertise hat dazu beigetragen, dass unser Auftritt sogar von Pinterest selbst positiv wahrgenommen wurde! Wer eine kompetente, praxisnahe und strategische Unterstützung für Pinterest sucht, ist bei Juliette genau richtig. Vielen Dank für die tolle Zusammenarbeit!",
    name: "Fabian Christ",
    role: "Social Media Manager, PostFinance",
  },
  {
    quote:
      "Ich habe Juliette für einen Online-Workshop zum Thema Pinterest Einsteigerwissen gebucht. Die Teilnehmenden und ich fühlen uns jetzt sehr gut in das Thema mitgenommen. Juliettes Präsentation war sehr interessant und mit vielen Praxisbeispielen ergänzt. Im Fragenteil konnte Juliette ihr umfassendes Fachwissen und ihre Erfahrung einbringen. Mit viel Geduld und vor allem für jede*n verständlich, hat Juliette Pinterest greifbar gemacht. Sollte nochmals Bedarf für dieses Thema aufkommen, würde ich Juliette wieder buchen!",
    name: "Judith Kenk",
    role: "Digitalisierungsbotschafterin Mecklenburg-Vorpommern",
  },
  {
    quote:
      "Juliette ist eine wunderbare Mischung aus Professionalität, Kompetenz, Zuverlässigkeit, Neugier, Liebenswürdigkeit, Offenheit, Flexibilität, Hartnäckigkeit und Kreativität. Mit ihr zusammenzuarbeiten, kann ich nur jedem empfehlen bzw. wünschen! :-)",
    name: "Dr. Judith Gastner",
    role: "Geschäftsführerin, PaarBalance GmbH",
  },
];

// Sichtbar als "Zuletzt aktualisiert: August 2026", im Schema als dateModified.
const lastUpdatedLabel = "August 2026";
const lastUpdatedIso = "2026-08-14";

// FAQ-Daten: `answer` ist die eigenständige 40–60-Wort-Direktantwort, `link`
// hängt optional einen weiterführenden Blog-Verweis an denselben Absatz an.
// Das FAQPage-Schema wird WORTGLEICH aus Antwort (+ Linktext) gebaut —
// Texte nie nur an einer der beiden Stellen ändern.
type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; text: string };
};

const faq: FaqItem[] = [
  {
    question: "Was kostet eine Pinterest Marketing Agentur?",
    answer:
      "Die Kosten richten sich nach dem Umfang der Zusammenarbeit: Am kleinsten ist eine einmalige Beratung, bei der du selbst umsetzt, am größten die komplette Übernahme von Design, Texten und Veröffentlichung. Entscheidend ist deshalb, wie viel Eigenleistung du behalten willst. Ein konkretes Angebot für dein Unternehmen bekommst du nach dem Erstgespräch.",
  },
  {
    question: "Lohnt sich Pinterest für kleine Unternehmen und Selbstständige?",
    answer:
      "Es lohnt sich unter zwei Voraussetzungen: Deine Website bietet etwas, worauf Pins verweisen können, und deine Themen werden dort aktiv gesucht. Fehlt eines davon – oder brauchst du kurzfristig Ergebnisse –, ist Pinterest nicht der richtige Kanal. Eine ehrliche Einordnung für deinen Fall gibt der Beitrag",
    link: {
      href: "/blog/lohnt-sich-pinterest-fuer-kleine-unternehmen/",
      text: "Lohnt sich Pinterest für kleine Unternehmen?",
    },
  },
  {
    question: "Pinterest Marketing selbst machen oder auslagern?",
    answer:
      "Die ehrliche Messlatte ist deine Zeit: Pinterest belohnt Regelmäßigkeit, nicht Perfektion. Kannst du Woche für Woche verlässlich Zeit fürs Gestalten und Texten freihalten – und macht dir das Freude –, ist Selbermachen gerade in der Startphase die richtige Wahl. Reißt das Tagesgeschäft diese Zeit immer wieder ein, wird Auslagern günstiger als ein brachliegender Account.",
  },
  {
    question: "Agentur oder freie Pinterest-Managerin — was ist besser?",
    answer:
      "Der echte Unterschied liegt in Kapazität und Vertretung: Ein größeres Team kann Ausfälle abfangen und viele Accounts parallel betreuen, bindet dich aber oft an festere Strukturen. Bei einem kleinen, spezialisierten Anbieter arbeitest du direkt mit der Person, die auch umsetzt. molloy business gehört zur zweiten Sorte: ein spezialisierter Betrieb, kein großes Team.",
  },
  {
    question: "Pinterest organisch oder Pinterest Ads?",
    answer:
      "Entscheidend ist dein Zeithorizont: Ads sind die richtige Wahl, wenn ein konkreter Anlass ein Datum hat – ein Launch, eine Saison-Aktion, ein schneller Markttest mit vorhandenem Werbebudget. Organisch ist die richtige Wahl, wenn du dauerhaft gefunden werden willst, ohne fortlaufend zu zahlen. Beides schließt sich nicht aus; molloy business übernimmt dabei den organischen Teil.",
  },
  {
    question: "Wie lange dauert es, bis Pinterest Ergebnisse bringt?",
    answer:
      "Eine seriöse Pauschalzahl gibt es nicht – die Dauer hängt von Ausgangslage, Nische und Veröffentlichungsrhythmus ab. Woran du erkennst, dass es in die richtige Richtung geht: Erst steigen die Impressionen, dann speichern Menschen deine Pins, danach folgen die Klicks zur Website. Diese Reihenfolge ist normal; eine realistische Einschätzung für deinen Fall gibt das Erstgespräch.",
  },
];

// Seiten-spezifisches Schema: Person, Service je Leistung,
// FAQPage und WebPage mit dateModified. Organization steht global in layout.tsx.
// Bewusst KEIN BreadcrumbList (Startseite), KEIN AggregateRating/Review
// (Vorgabe der Zitat-Freigaben: Kundenstimmen erscheinen nur als sichtbarer
// Text, nicht als strukturierte Bewertung).
const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: `${siteConfig.url}/`,
      name: siteConfig.defaultTitle,
      dateModified: lastUpdatedIso,
      about: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#juliette-oppel`,
      name: siteConfig.brandFace,
      jobTitle: "Pinterest Marketing Expertin",
      worksFor: { "@id": `${siteConfig.url}/#organization` },
      knowsAbout: "Pinterest Marketing",
      sameAs: [siteConfig.social.linkedin, siteConfig.social.pinterest],
    },
    ...services.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: ["DE", "AT", "CH"],
    })),
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.link ? `${item.answer} ${item.link.text}` : item.answer,
        },
      })),
    },
  ],
};

const processSteps = [
  {
    title: "Erstgespräch",
    text: "Wir lernen uns kennen und klären, was du anbietest, wen du erreichen willst und ob Pinterest für dein Unternehmen der passende Kanal ist. Das Gespräch ist unverbindlich und kostet dich nichts außer Zeit.",
  },
  {
    title: "Analyse",
    text: "molloy business schaut sich deine Ausgangslage an: Website, bestehender Account (falls vorhanden), Wettbewerb und Suchverhalten deiner Zielgruppe auf Pinterest. Daraus entsteht ein klares Bild, wo du stehst.",
  },
  {
    title: "Strategie & Struktur",
    text: "Auf Basis der Analyse entstehen Keyword-Set, Board-Struktur und ein Redaktionsplan. Du weißt danach genau, welche Inhalte in welchem Rhythmus veröffentlicht werden und warum.",
  },
  {
    title: "Umsetzung",
    text: "Pins werden gestaltet, Titel und Beschreibungen für die Pinterest-Suche optimiert und nach Plan veröffentlicht. Je nach Leistung übernimmst du das selbst oder gibst es komplett ab.",
  },
  {
    title: "Auswertung",
    text: "Regelmäßige Auswertungen zeigen, welche Pins und Themen funktionieren. Die Strategie wird danach angepasst – so wird der Kanal von Monat zu Monat treffsicherer.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
              Pinterest Marketing Agentur
            </p>
            <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
              Pinterest Marketing Agentur für Unternehmen im deutschsprachigen
              Raum
            </h1>
            {/* Antwort-Kapsel: eigenständiger, in sich geschlossener Absatz —
                der wichtigste Textblock der Website (wird von KI-Suchsystemen
                bevorzugt zitiert). Nicht kürzen, nicht aufteilen. */}
            <p className="font-body mt-6 text-lg">
              molloy business ist eine Pinterest Marketing Agentur, die
              Unternehmen im deutschsprachigen Raum organisch auf Pinterest
              sichtbar macht – mit Strategie, SEO-optimierten Pins und
              verlässlicher Umsetzung statt bezahlter Werbeanzeigen. Der
              Schwerpunkt liegt auf Reiseveranstaltern und
              Touristikunternehmen; daneben arbeitet molloy business mit
              Unternehmen aller Branchen, deren Angebote sich visuell zeigen
              lassen und auf Pinterest gesucht werden.
            </p>

            {/* CTA folgt bewusst UNMITTELBAR auf die Antwort-Kapsel. */}
            <div className="mt-6">
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Erstgespräch vereinbaren
              </a>
            </div>

            <p className="font-body mt-6 text-lg">
              Ich bin{" "}
              <strong className="text-heading">Juliette Oppel</strong>, das
              Gesicht von molloy business. Ich übernehme
              Strategie, Design, Texte und Umsetzung, damit Pinterest für dich
              arbeitet – nicht umgekehrt.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {audiences.map((a) => (
                <li
                  key={a}
                  className="font-body bg-surface text-heading rounded-full px-4 py-1.5 text-sm shadow-sm"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* VIDEO-SLOT: hier später ein selbst gehostetes <video> einbauen
              (mit poster-Bild und preload="none") — KEIN YouTube-Embed und
              kein externes Player-Script, die Website bleibt cookie- und
              trackerfrei. Bis dahin bleibt das Hero-Bild unverändert der
              einzige visuelle Inhalt; hier darf nichts sichtbar gerendert
              werden. */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:aspect-auto lg:h-auto lg:self-stretch">
            <ExportedImage
              src={heroImage}
              alt="Juliette Oppel, Gesicht der Pinterest Marketing Agentur molloy business"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
              basePath={basePath}
              priority
            />
          </div>
        </div>
      </section>

      {/* Was macht eine Pinterest Marketing Agentur? */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Was macht eine Pinterest Marketing Agentur?
          </h2>
          <p className="font-body mt-6 text-lg">
            Eine Pinterest Marketing Agentur macht Unternehmen auf Pinterest
            sichtbar: Sie entwickelt die Strategie, baut Account und Boards
            strukturiert auf, gestaltet Pins, optimiert Titel und
            Beschreibungen für die Pinterest-Suche und plant die
            Veröffentlichungen. Anschließend wertet sie aus, was funktioniert,
            und passt Inhalte und Keywords laufend an.
          </p>
          <p className="font-body mt-4 text-lg">
            Konkret gehören dazu diese Aufgaben:
          </p>
          <ul className="font-body mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>
              <strong className="text-heading">Account-Struktur:</strong>{" "}
              Profil, Beschreibung und Einstellungen so aufsetzen, dass
              Pinterest versteht, wofür dein Unternehmen steht.
            </li>
            <li>
              <strong className="text-heading">Boards:</strong> Themenwelten
              anlegen, die zu den Suchanfragen deiner Zielgruppe passen.
            </li>
            <li>
              <strong className="text-heading">Pin-Design:</strong> Grafiken
              gestalten, die zu deiner Marke passen und zum Klicken einladen.
            </li>
            <li>
              <strong className="text-heading">Pinterest-SEO:</strong>{" "}
              Keywords recherchieren und in Titeln und Beschreibungen so
              einsetzen, dass deine Pins gefunden werden.
            </li>
            <li>
              <strong className="text-heading">Redaktionsplanung:</strong>{" "}
              festlegen, welche Inhalte wann veröffentlicht werden – planbar
              statt spontan.
            </li>
            <li>
              <strong className="text-heading">Auswertung:</strong> messen,
              welche Pins Reichweite und Website-Besuche bringen, und die
              Strategie danach ausrichten.
            </li>
          </ul>
        </div>
      </section>

      {/* Kundenstimmen — bewusst weit oben (direkt nach dem ersten
          inhaltlichen Abschnitt); echte, schriftlich freigegebene Zitate,
          siehe Kommentar am `testimonials`-Array. */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="font-body text-gold-text text-sm tracking-[2px] uppercase">
            Kundenstimmen
          </p>
          <h2 className="mt-2 text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Feedback ist ein Geschenk
          </h2>
          <p className="font-body mx-auto mt-6 max-w-3xl text-lg">
            Was Kundinnen und Kunden über die Zusammenarbeit mit molloy
            business sagen – wortgleich und mit ihrer Freigabe
            veröffentlicht:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="bg-surface rounded-2xl p-6 shadow-sm">
              <blockquote className="font-body text-[15px] leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="font-body mt-4 text-sm">
                <span className="text-heading font-semibold">{t.name}</span>
                <br />
                {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Organisch statt Ads */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Organisch statt Ads: Sichtbarkeit, die bleibt
          </h2>
          <p className="font-body mt-6 text-lg">
            Pinterest ist keine Social-Media-Plattform, sondern eine{" "}
            <strong className="text-heading">
              Suchmaschine für Ideen, Produkte und Inspiration
            </strong>
            . Menschen kommen nicht hierher, um Freunden zu folgen, sondern um
            etwas zu finden: das nächste Reiseziel, ein Rezept fürs Wochenende,
            eine Antwort auf eine Finanzfrage. Wer dort mit den passenden
            Inhalten auftaucht, erreicht Menschen genau in dem Moment, in dem
            sie suchen.
          </p>
          <p className="font-body mt-4 text-lg">
            Genau daraus ergibt sich der größte Unterschied zu anderen Kanälen:
            Ein Beitrag auf klassischen Social-Media-Plattformen verschwindet
            nach Stunden aus den Feeds. Ein gut gemachter, SEO-optimierter Pin
            wird dagegen über Monate – oft Jahre – in der Pinterest-Suche
            gefunden und bringt in dieser Zeit kontinuierlich Besucherinnen und
            Besucher auf deine Website. Die Arbeit, die du einmal investierst,
            wirkt also dauerhaft weiter.
          </p>
          <p className="font-body mt-4 text-lg">
            Und Pinterest Ads? Anzeigen sind nicht schlecht – sie sind ein
            anderes Werkzeug. Sie bringen schnelle Reichweite, solange Budget
            fließt, und enden in dem Moment, in dem die Kampagne stoppt.
            Organische Pins bauen dagegen ein Fundament auf, das bleibt.{" "}
            <strong className="text-heading">
              molloy business ist auf den organischen Weg spezialisiert
            </strong>
            : Strategie, Struktur und Inhalte, die aus eigener Kraft gefunden
            werden – ohne laufendes Werbebudget.
          </p>
          <p className="font-body mt-4 text-lg">
            Das Ergebnis ist planbares, nachhaltiges Marketing: weniger
            Abhängigkeit von Algorithmen und Anzeigenpreisen, mehr Ruhe im
            Alltag – und ein Kanal, der im Hintergrund für dich arbeitet,
            während du dich um dein Kerngeschäft kümmerst.
          </p>
        </div>
      </section>

      {/* Für wen sich Pinterest besonders lohnt */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Für wen sich Pinterest besonders lohnt
          </h2>

          {/* Aufbau "Fokus, nicht Ausschluss": Touristik als gelebter
              Schwerpunkt, danach die Öffnung für zahlreiche Branchen (mit
              den Links auf die Food- und Finanz-Seiten als Service-Hinweis,
              nicht als Rangfolge), zum Schluss der inklusive Abschluss. */}
          <h3 className="mt-10 text-[22px] leading-tight">
            <Link href="/pinterest-marketing-tourismus/" className="hover:underline">
              Reiseveranstalter und Touristikunternehmen
            </Link>
          </h3>
          <p className="font-body mt-3 text-lg">
            Reiseplanung ist einer der klassischen Anwendungsfälle von
            Pinterest: Menschen sammeln dort Reiseziele, Routen und
            Unterkünfte – oft Monate, bevor sie tatsächlich buchen. Wer in
            dieser frühen Phase mit den passenden Pins auftaucht, erreicht
            Reisende genau in dem Moment, in dem die Entscheidung entsteht,
            und führt sie direkt auf die eigenen Angebotsseiten statt auf
            teure Buchungsplattformen. Ein guter Pin zu einem Reiseziel
            bleibt dabei über Saisons hinweg auffindbar.
          </p>
          <p className="font-body mt-4 text-lg">
            Dazu kommt: Kaum ein Produkt ist so visuell wie eine Reise. Ob
            Spezialreiseanbieter, Anbieter von Gruppen- und Rundreisen und
            geführten Touren, Camper- und Wohnmobilvermietungen,
            Yachtcharter-Anbieter oder Anbieter besonderer Unterkünfte –
            Landschaften, Routen, Fahrzeuge und Unterkünfte lassen sich in
            Pins zeigen, ohne dass es viele Worte braucht. Genau solche
            Bilder speichern Menschen auf Pinterest, wenn sie eine Reise
            planen. Deshalb liegt der Schwerpunkt von molloy business auf
            mittelständischen Reiseveranstaltern und Touristikunternehmen im
            deutschsprachigen Raum. Wie die Zusammenarbeit in dieser Branche
            konkret aussieht, zeigt die Seite{" "}
            <Link
              href="/pinterest-marketing-tourismus/"
              className="text-gold-text hover:underline"
            >
              Pinterest Marketing für Tourismus
            </Link>
            .
          </p>
          <p className="font-body mt-4 text-lg">
            Für die Zusammenarbeit heißt das konkret: Aus deinen Reisen,
            Routen und Unterkünften entstehen suchoptimierte Pins, die auf
            die passenden Angebots- und Themenseiten deiner Website führen.
            Saisonale Inhalte werden so eingeplant, dass sie sichtbar sind,
            wenn die Reiseplanung deiner Zielgruppe beginnt – nicht erst
            dann, wenn die Saison schon läuft. So baut sich über die Monate
            ein wachsender Bestand an Pins auf, der kontinuierlich neue
            Interessierte auf deine Website bringt.
          </p>

          <h3 className="mt-10 text-[22px] leading-tight">
            Zahlreiche weitere Branchen
          </h3>
          <p className="font-body mt-3 text-lg">
            Ein Schwerpunkt ist kein Ausschluss: Pinterest funktioniert
            überall dort, wo Produkte visuell sind und Entscheidungen geplant
            werden – bei Wohnen und Einrichtung genauso wie bei Rezepten und
            Food, bei DIY, Hochzeiten, Garten und Mode, und ebenso bei
            beratungsnahen Themen wie Finanzen. Menschen nutzen Pinterest,
            um solche Vorhaben zu sammeln und vorzubereiten – und genau
            dabei können Unternehmen mit ihren Inhalten sichtbar werden.
            Entscheidend ist dabei weniger die Branche als zwei Fragen:
            Suchen Menschen dein Thema auf Pinterest – und bietet deine
            Website Inhalte, auf die Pins verweisen können? Auch
            Dienstleistungen funktionieren, wenn sich ihr Ergebnis zeigen
            lässt: ein eingerichteter Raum, ein gedeckter Tisch, ein
            geplantes Fest. Für Food-Marken und Finanzdienstleister gibt es
            auf dieser Website eigene Seiten mit vertiefenden
            Informationen:{" "}
            <Link
              href="/pinterest-marketing-food/"
              className="text-gold-text hover:underline"
            >
              Pinterest Marketing für Food-Marken
            </Link>{" "}
            und{" "}
            <Link
              href="/pinterest-marketing-finanzdienstleister/"
              className="text-gold-text hover:underline"
            >
              Pinterest Marketing für Finanzdienstleister
            </Link>
            .
          </p>

          <p className="font-body mt-10 text-lg">
            Und wenn deine Branche hier nicht auftaucht? Das ist kein
            Hindernis: KMU und Selbstständige aller Branchen sind bei molloy
            business willkommen – vom Handwerk über Coaching bis zum
            Onlineshop. Ehrlich ist aber auch: Pinterest passt nicht zu jedem
            Geschäftsmodell. Ob sich der Kanal für dein Unternehmen lohnt,
            klären wir deshalb offen im Erstgespräch – bevor du Zeit oder
            Geld investierst. Dafür schauen wir uns gemeinsam deine Website,
            dein Angebot und das Suchverhalten deiner Zielgruppe an.
          </p>
        </div>
      </section>

      {/* So läuft die Zusammenarbeit ab */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            So läuft die Zusammenarbeit ab
          </h2>
          <ol className="font-body mt-8 list-decimal space-y-6 pl-6 text-lg">
            {processSteps.map((step) => (
              <li key={step.title}>
                <strong className="text-heading">{step.title}:</strong>{" "}
                {step.text}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-12 text-center">
            <p className="font-body text-gold-text text-sm tracking-[2px] uppercase">
              Meine Angebote
            </p>
            {/* Überschrift bewusst ohne Anzahl — bleibt korrekt, wenn
                Leistungen dazukommen oder wegfallen. */}
            <h2 className="mt-2 text-[28px] sm:text-[37px] sm:leading-[51.8px]">
              Pinterest Marketing Angebote für Unternehmen
            </h2>
            <p className="font-body mx-auto mt-6 max-w-3xl text-lg">
              Von der einmaligen Beratung bis zur laufenden Betreuung: Die
              Leistungen von molloy business unterscheiden sich vor allem
              darin, wie viel du selbst übernimmst – vom Strategie Call, nach
              dem du eigenständig weiterarbeitest, bis zum Account
              Management, das den Kanal komplett abdeckt.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-surface group flex flex-col rounded-2xl p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-[22px] leading-tight">{service.title}</h3>
                <p className="font-body mt-3 flex-1 text-[15px] leading-relaxed">
                  {service.scope}
                </p>
                <span className="text-gold-text font-body mt-4 text-sm group-hover:underline">
                  mehr erfahren →
                </span>
              </Link>
            ))}
          </div>

          <p className="font-body mt-10 text-center text-lg">
            Ein konkretes, auf dein Unternehmen zugeschnittenes Angebot
            bekommst du im Erstgespräch.
          </p>
        </div>
      </section>

      {/* Hinter molloy business */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Hinter molloy business
          </h2>
          <p className="font-body mt-6 text-lg">
            Hinter molloy business steht{" "}
            <strong className="text-heading">Juliette Oppel</strong> –
            Pinterest-Marketing-Expertin, erklärter Strukturprofi und das
            Gesicht der Marke. Sie
            betreut ihre Kundinnen und Kunden remote im gesamten
            deutschsprachigen Raum und übernimmt dabei alles aus einer Hand:
            Strategie, Pin-Design, Texte und die laufende Umsetzung.
          </p>
          <p className="font-body mt-4 text-lg">
            Ihre Arbeitsweise ist bewusst unaufgeregt: ehrliche Einschätzungen
            statt Hype-Versprechen, klare Abläufe statt Aktionismus – und nur
            Angebote, hinter denen sie selbst zu hundert Prozent steht. Wer mit
            molloy business arbeitet, arbeitet direkt mit ihr.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Häufige Fragen zu Pinterest Marketing
          </h2>
          <div className="mt-8 space-y-10">
            {faq.map((item) => (
              <div key={item.question}>
                <h3 className="text-[22px] leading-tight">{item.question}</h3>
                <p className="font-body mt-3 text-lg">
                  {item.answer}
                  {item.link && (
                    <>
                      {" "}
                      <Link
                        href={item.link.href}
                        className="text-gold-text hover:underline"
                      >
                        {item.link.text}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Lass uns über dein Pinterest Marketing sprechen
          </h2>
          <p className="font-body mt-6 text-lg">
            In einem unverbindlichen Strategie Call schauen wir gemeinsam, wie
            Pinterest für dein Unternehmen arbeiten kann.
          </p>
          <div className="mt-8">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              let&apos;s talk
            </a>
          </div>
          <p className="font-body mt-12 text-xs">
            Zuletzt aktualisiert: {lastUpdatedLabel}
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
