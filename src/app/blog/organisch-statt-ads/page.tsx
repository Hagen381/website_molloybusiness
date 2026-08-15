import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";

const post = blogPosts.find((p) => p.slug === "organisch-statt-ads")!;

const path = `/blog/${post.slug}/`;

const h1 = "Pinterest organisch oder mit Werbeanzeigen?";

export const metadata: Metadata = {
  title: "Pinterest organisch oder mit Werbeanzeigen?",
  description:
    "Organische Pins oder Pinterest Ads? Der Unterschied erklärt: warum molloy business auf organische Sichtbarkeit setzt – und wann Anzeigen sinnvoll sind.",
  alternates: {
    canonical: path,
  },
};

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
      dateModified: post.date,
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

export default function OrganischStattAds() {
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
          Organische Pins werden über die Pinterest-Suche gefunden und bleiben
          dort dauerhaft auffindbar – Werbeanzeigen kaufen Reichweite, die mit
          dem Budget endet. Für den Aufbau eines langfristigen Kanals ist
          organisch der bessere Weg; für zeitkritische Aktionen und schnelle
          Tests können Ads das passende Werkzeug sein. Dieser Artikel erklärt
          beides ehrlich.
        </p>
      </section>

      {/* Unterschied */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Was ist der Unterschied zwischen organischem Pinterest und
            Pinterest Ads?
          </h2>
          <p className="font-body mt-6 text-lg">
            Organische Pins veröffentlichst du ohne Werbebudget in deinem
            Account; sie erscheinen in Suchergebnissen und Feeds, weil
            Pinterest sie für relevant hält. Bei Pinterest Ads bezahlst du
            dafür, dass ausgewählte Pins zusätzlich als Anzeige ausgespielt
            werden – gekennzeichnet als „Gesponsert“ und gesteuert über
            Budget, Laufzeit und Zielgruppe.
          </p>
          <p className="font-body mt-4 text-lg">
            Im Feed sehen beide Formate fast gleich aus: ein Bild, ein Titel,
            ein Link zu deiner Website. Der Unterschied liegt im Mechanismus
            dahinter.{" "}
            <strong className="text-heading">
              Ein organischer Pin taucht auf, weil er zur Suchanfrage passt
            </strong>{" "}
            – Pinterest gleicht Keywords, Bildinhalt und Suchverhalten ab und
            zeigt, was am relevantesten ist. Ein beworbener Pin taucht auf,
            weil jemand dafür bezahlt hat, dass ihn eine bestimmte Zielgruppe
            zu sehen bekommt.
          </p>
          <p className="font-body mt-4 text-lg">
            Beide Wege können funktionieren, und keiner ist per se „besser“.
            Aber sie beantworten unterschiedliche Fragen. Ads beantworten:
            „Wie erreiche ich sofort möglichst viele passende Menschen?“
            Organisches Pinterest beantwortet: „Wie werde ich dauerhaft
            gefunden, wenn jemand nach meinem Thema sucht?“
          </p>
        </div>
      </section>

      {/* Warum organisch */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Warum setzen wir auf organisch?
        </h2>
        <p className="font-body mt-6 text-lg">
          Weil organische Sichtbarkeit dem Account gehört und bleibt. Ein Pin,
          der einmal gut in der Suche steht, kann über Monate weiter gefunden
          werden, ohne dass du dafür erneut etwas tust oder bezahlst. Eine
          Anzeige wirkt nur so lange, wie du Budget einsetzt. Für einen
          dauerhaften Kanal ist das der entscheidende Unterschied.
        </p>
        <p className="font-body mt-4 text-lg">
          Der erste Grund ist also die{" "}
          <strong className="text-heading">Langlebigkeit</strong>: Auf
          Pinterest wird gesucht statt gescrollt, und deshalb altern Inhalte
          hier anders. Ein Pin verschwindet nicht nach zwei Tagen aus der
          Aufmerksamkeit, sondern kann seine Reichweite über Monate aufbauen –
          nicht selten wird er nach einem halben Jahr häufiger gefunden als in
          seiner ersten Woche.
        </p>
        <p className="font-body mt-4 text-lg">
          Der zweite Grund:{" "}
          <strong className="text-heading">Die Sichtbarkeit gehört dir.</strong>{" "}
          Alles, was ein organischer Account aufbaut – durchdachte Boards,
          gefundene Pins, ein Profil, das Pinterest als verlässliche Quelle
          einordnet –, bleibt bestehen und trägt jeden weiteren Pin mit.
          Gekaufte Reichweite musst du dagegen immer wieder kaufen: Jede neue
          Kampagne beginnt bei null, egal wie gut die letzte lief.
        </p>
        <p className="font-body mt-4 text-lg">
          Der dritte Grund ist unbequemer:{" "}
          <strong className="text-heading">
            Organisch zwingt zu Qualität.
          </strong>{" "}
          Ohne Budget gibt es keine Abkürzung – gefunden wird nur, was für
          eine echte Suchanfrage relevant ist. Das diszipliniert die Inhalte:
          Jeder Pin muss eine Frage beantworten oder eine Idee liefern, sonst
          passiert schlicht nichts. Genau dieser Zwang macht organische
          Accounts auf Dauer stärker.
        </p>
        <p className="font-body mt-4 text-lg">
          Und schließlich die Planbarkeit über Saisons, besonders sichtbar in
          der Touristik: Ein Pin zu einer Rundreise, der in dieser Saison
          gefunden wurde, wird zur nächsten Saison wieder gefunden – dann,
          wenn dieselbe Zielgruppe wieder zu planen beginnt. Der Kanal
          arbeitet im Rhythmus deines Geschäfts, ohne dass du jedes Jahr aufs
          Neue dafür bezahlen musst, sichtbar zu sein.
        </p>
      </section>

      {/* Wann Ads sinnvoll sind */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
            Wann sind Pinterest Ads trotzdem sinnvoll?
          </h2>
          <p className="font-body mt-6 text-lg">
            Immer dann, wenn Zeit die knappste Ressource ist: bei
            zeitkritischen Aktionen, einem Produktlaunch oder wenn du schnell
            testen willst, wie ein neues Angebot ankommt. Organische
            Reichweite braucht Monate – wer ein Ergebnis in Wochen braucht,
            bekommt es organisch nicht. Das sagen wir dir genauso klar, bevor
            du startest.
          </p>
          <p className="font-body mt-4 text-lg">
            Typische Fälle, in denen Anzeigen ihre Stärke ausspielen: eine
            Aktion mit festem Enddatum, die nicht warten kann, bis sich
            organische Reichweite aufgebaut hat. Ein Launch, der in den ersten
            Wochen Aufmerksamkeit braucht. Oder ein neues Angebot, bei dem du
            schnell sehen willst, welche Bildsprache und welche Botschaft
            überhaupt ankommen, bevor du monatelang Inhalte dafür produzierst.
          </p>
          <p className="font-body mt-4 text-lg">
            Wichtig ist uns dabei eine ehrliche Abgrenzung: Wenn du
            ausschließlich schnelle, kurzfristige Ergebnisse brauchst und der
            Kanal danach keine Rolle mehr spielt, ist organisches Pinterest
            für dich schlicht das falsche Werkzeug. Dann sind Anzeigen nicht
            die zweitbeste, sondern die richtige Wahl – und das sollte dir
            jeder Anbieter so offen sagen.
          </p>
          <p className="font-body mt-4 text-lg">
            Am stärksten sind Ads übrigens nicht{" "}
            <em>statt</em> organischem Pinterest, sondern darauf aufbauend:
            Ein Account mit sauberer Struktur, klaren Keywords und Pins, die
            sich organisch bewährt haben, liefert das beste Material für jede
            Kampagne – du bewirbst dann, was nachweislich funktioniert, statt
            ins Blaue zu testen.{" "}
            <strong className="text-heading">
              Erst das organische Fundament, dann Anzeigen als gezielter
              Verstärker:
            </strong>{" "}
            In dieser Reihenfolge ergänzen sich beide Wege, statt sich zu
            ersetzen.
          </p>
        </div>
      </section>

      {/* Entscheidung + CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-[28px] sm:text-[37px] sm:leading-[51.8px]">
          Was heißt das für deine Entscheidung?
        </h2>
        <p className="font-body mt-6 text-lg">
          Entscheide nach Zeithorizont und Ziel. Musst du kurzfristig
          verkaufen, sind Anzeigen – auf Pinterest oder anderswo – das
          ehrlichere Werkzeug. Willst du einen Kanal aufbauen, der über Jahre
          Besucherinnen und Besucher auf deine Website bringt, führt am
          organischen Weg wenig vorbei. Und beides schließt sich nicht aus.
        </p>
        <p className="font-body mt-4 text-lg">
          Drei Fragen helfen beim Sortieren: Wie schnell brauchst du
          Ergebnisse – in Wochen, oder darfst du in Quartalen denken? Soll der
          Kanal einmalig etwas bewerben oder dauerhaft Anfragen bringen? Und
          gibt es genug Themen und Bildmaterial, um über Monate relevant zu
          bleiben? Je langfristiger deine Antworten ausfallen, desto klarer
          spricht alles für den organischen Weg – je kurzfristiger, desto eher
          für Anzeigen oder eine Kombination aus beidem.
        </p>
        <p className="font-body mt-4 text-lg">
          Und noch etwas gehört zur Ehrlichkeit dazu: Auch der organische Weg
          hat einen Einsatz – nicht in Form von Werbebudget, sondern in Form
          von Geduld und kontinuierlicher Arbeit. Wer diesen Einsatz nicht
          leisten kann oder will, fährt mit einer klar begrenzten Kampagne
          unter Umständen besser als mit einem Account, der nach drei Monaten
          wieder einschläft.
        </p>
        <p className="font-body mt-4 text-lg">
          So arbeitet molloy business: Als{" "}
          <Link href="/" className="text-gold-text hover:underline">
            Pinterest Marketing Agentur
          </Link>{" "}
          bauen wir Sichtbarkeit auf, die bleibt – ohne Werbebudget, dafür mit
          Strategie, sauberen Keywords und Pins, die gefunden werden, weil sie
          relevant sind. Ob dieser Weg zu deinem Zeithorizont passt, klärt
          sich am besten im Gespräch: Ein{" "}
          <Link
            href="/pinterest-strategie-call/"
            className="text-gold-text hover:underline"
          >
            Pinterest Strategie Call
          </Link>{" "}
          ordnet deine Ausgangslage individuell ein. Und wenn du erst einmal
          herausfinden möchtest, ob wir zueinander passen, vereinbare ein{" "}
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            unverbindliches Erstgespräch
          </a>{" "}
          – du bekommst eine ehrliche Empfehlung, auch wenn sie „starte mit
          Anzeigen“ lautet.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
