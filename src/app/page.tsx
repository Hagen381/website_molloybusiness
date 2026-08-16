import type { Metadata } from "next";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import heroImage from "@/assets/images/start/DSC01156-scaled-e1763214118889.jpg";
import julietteChairImage from "@/assets/images/start/Juliette-Oppel-Pinterest-Businessmanagement.jpg";
import juliettePortraitImage from "@/assets/images/start/DSC01285-scaled.jpg";
import iconAuthenzitaet from "@/assets/images/start/Authenzitaet.png";
import iconVerlaesslichkeit from "@/assets/images/start/1.png";
import iconWeitblick from "@/assets/images/start/3.png";
import { siteConfig } from "@/lib/site-config";
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

// ---------------------------------------------------------------------------
// Typografie, am Original (OceanWP + Elementor) nachgemessen. Die Werte hinter
// `md:` sind die gemessenen Desktop-Werte; die Basiswerte sind die mobile
// Verkleinerung (~72 %), die das Größenverhältnis der Ebenen zueinander
// erhält. NICHT ohne ausdrücklichen Auftrag ändern.
// ---------------------------------------------------------------------------

// H1 — Antic Didone 47/65.8, 600, ls 1px, #595959 (Default aus globals.css)
const H1 = "text-[34px] leading-[47.6px] md:text-[47px] md:leading-[65.8px]";
// H2 Standard — Antic Didone 37/51.8, 600, ls 1px, #595959
const H2_STANDARD =
  "text-[27px] leading-[37.8px] md:text-[37px] md:leading-[51.8px]";
// H2 gold — Antic Didone 37/40, 400, ls 1.4px, #C49C5E
const H2_GOLD =
  "font-normal tracking-[1.4px] text-gold-light text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";
// H2 auf dunkel — Antic Didone 37/40, 400, ls 1.4px, #D9D9D9
const H2_DARK =
  "font-normal tracking-[1.4px] text-gray-light text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";
// H2 in Abschnitt 4 — Antic Didone 35/40, 400, ls 1.4px, #595959
const H2_35 =
  "font-normal tracking-[1.4px] text-[26px] leading-[30px] md:text-[35px] md:leading-[40px]";
// H3 zentriert — Antic Didone 37/40, 400, ls 1.4px; Farbe je Abschnitt
// (#C49C5E hell, #FFFFFF auf dunklem Grund) — deshalb hier ohne Farbe.
const H3_CENTERED =
  "text-center tracking-[1.4px] text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";
// H5 Wert-Titel — Antic Didone 24/40, 500, ls 1.4px, #C49C5E
const H5_VALUE =
  "font-heading font-medium tracking-[1.4px] text-gold-light text-[21px] leading-[32px] md:text-[24px] md:leading-[40px]";
// H6 Kicker — Antic Didone 24/40, 400, ls 1.4px, #C49C5E
const H6_KICKER =
  "font-heading font-normal tracking-[1.4px] text-gold-light text-[21px] leading-[32px] md:text-[24px] md:leading-[40px]";
// Kicker-Absatz — Antic Didone, 500, ls 1.4px. Farbe und (im dunklen
// Abschnitt) Größe wechseln, deshalb ohne beides; KICKER ergänzt die
// Standardgröße 20/30.
const KICKER_BASE = "font-heading font-medium tracking-[1.4px]";
const KICKER = `${KICKER_BASE} text-[18px] leading-[28px] md:text-[20px] md:leading-[30px]`;

// Fließtext: 18/30, ls 1.4px, #545454 — kommt aus den <body>-Regeln in
// globals.css, hier nur die Schriftfamilie absichern.
const BODY = "font-body";

// Seiten-spezifisches Schema: WebPage + Person. Organization steht global in
// layout.tsx. Bewusst KEIN BreadcrumbList (Startseite) und — seit dem
// optischen Nachbau — auch kein FAQPage/Service mehr: die Startseite bildet
// jetzt das Original ab und zeigt weder FAQ noch Angebots-Kacheln, ein Schema
// ohne sichtbare Entsprechung wäre falsch.
const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: `${siteConfig.url}/`,
      name: siteConfig.defaultTitle,
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
  ],
};

// Abschnitt 5 — Wert-Kacheln. Die Titel sind im Original Links auf "#";
// hier bewusst schlichter Text, ein Link ins Leere ist ein Fehler.
const values = [
  {
    title: "Authenzität",
    icon: iconAuthenzitaet,
    text: "Ich sage was ich denke oder ich sage nichts. Auf jeden Fall sage ich nichts, was ich nicht denke. Ich bin mir klar über meine Stärken und ich kenne meine Schwächen und mit beidem gehe ich offen um. In der Zusammenarbeit mit mir bekommst du ehrliche Einschätzungen, keine Hype-Versprechen.",
  },
  {
    title: "Verlässlichkeit",
    icon: iconVerlaesslichkeit,
    text: "Ich gehöre zu den Menschen, bei denen ein Wort ein Wort ist, ein Verabredung eine Verabredung ist und eine Deadline eine Deadline ist. So sehr ich auch die Flexibilität liebe, ist Verlässlichkeit ein wichtiger Wert für mich – beruflich wie privat.",
  },
  {
    title: "Weitblick",
    icon: iconWeitblick,
    text: "Ich sehe das große Ganze: Wie Content, Struktur und Strategie zusammenwirken, damit dein Business wächst – ohne Aktionismus.",
  },
];

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------------------------
          1) HERO + 2) "Pinterest Marketing für Unternehmen"
          Ein gemeinsamer Block: Hintergrund #D9D9D9, 80px oben / 50px unten.
          Das Bild steht rechts und läuft neben beiden Textblöcken durch.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="mx-auto max-w-6xl px-6 pt-[80px] pb-[50px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h1 className={H1}>
                Pinterest Marketing mit Struktur – für Marken, die sichtbar
                bleiben wollen
              </h1>

              <p className={`${BODY} mt-6`}>
                Ich bin <strong>Juliette Oppel</strong>,
                Pinterest-Marketing-Expertin und Strukturprofi für
                Lifestyle-Marken und KMU.
                <br />
                Ich helfe dir, Pinterest als{" "}
                <strong>langfristigen Sichtbarkeitskanal</strong> zu nutzen –
                mit klarer Strategie, professionellen Designs und ehrlicher
                Umsetzung.
              </p>

              <p className={`${BODY} mt-6`}>
                Du möchtest dich wieder auf dein <strong>Kerngeschäft</strong>{" "}
                konzentrieren, statt dich in Social-Media-Hektik zu verlieren?
                <br />
                Dann bist du hier richtig. Ich übernehme{" "}
                <strong>Strategie, Design, Texte und Umsetzung</strong>, damit
                Pinterest <strong>für dich arbeitet – nicht umgekehrt.</strong>
              </p>

              {/* 2) — gleicher Hintergrund, kein neuer Abschnitt */}
              <h2 className={`${H2_STANDARD} mt-12`}>
                Pinterest Marketing für Unternehmen – sichtbar werden mit Plan
              </h2>

              <p className={`${BODY} mt-6`}>
                Pinterest ist keine Social-Media-Plattform, sondern eine{" "}
                <strong>
                  Suchmaschine für Ideen, Produkte und Inspiration
                </strong>
                .
                <br />
                Richtig genutzt, kann sie für dich{" "}
                <strong>
                  dauerhaft Traffic, Reichweite und Kundenanfragen
                </strong>{" "}
                generieren – auch Monate nach dem Posting.
              </p>

              <p className={`${BODY} mt-6`}>Ich unterstütze dich dabei,</p>

              <ul className={`${BODY} mt-2 list-disc space-y-2 pl-6`}>
                <li>
                  die <strong>richtige Pinterest-Strategie</strong> für deine
                  Marke zu entwickeln,
                </li>
                <li>
                  <strong>SEO-optimierte Pins</strong> zu gestalten,
                </li>
                <li>
                  und einen <strong>Ablauf zu schaffen</strong>, der sich
                  einfach in deinen Alltag integrieren lässt.
                </li>
              </ul>

              <p className={`${BODY} mt-6`}>
                📌 <strong>Ergebnis:</strong> Mehr Sichtbarkeit, weniger
                Stress, nachhaltiges Marketing.
              </p>

              {/* Interne Route statt der alten WordPress-URL. Bewusst ein
                  einfaches <a>: /angebote/ existiert als Route noch nicht,
                  next/link würde daran typgeprüft scheitern. */}
              <div className="mt-8">
                <a href="/angebote/" className="btn btn-primary">
                  direkt zu den angeboten
                </a>
              </div>
            </div>

            {/* Bild rechts, oben bündig im Seitenverhältnis 2:3 (am Original
                gemessen); unter 1024px rutscht es unter den Text. */}
            <div className="relative aspect-[2/3] self-start overflow-hidden rounded-t-[200px]">
              <ExportedImage
                src={heroImage}
                alt="pinterest marketing"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                basePath={basePath}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3) "Wie bist du hier gelandet?" — Hintergrund #FFFFFF, 100px/100px
          Links Überschriftenblock mit Trennlinie, rechts der Fließtext.
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-[100px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className={`${KICKER} text-gold-light`}>
                Was erwartet dich hier?
              </p>

              <h2 className={`${H2_GOLD} mt-4`}>Wie bist du hier gelandet?</h2>

              {/* Trennlinie: 1.6px, #C49C5E, 330px breit, linksbündig */}
              <hr className="border-gold-light mt-6 w-[330px] max-w-full border-t-[1.6px]" />
            </div>

            <div>
              <p className={BODY}>
                Wie du hierher gefunden hast – über{" "}
                <strong>Google, Pinterest oder eine Empfehlung</strong> – ist
                kein Zufall.
                <br />
                Ich arbeite{" "}
                <strong>datenbasiert, strukturiert und ehrlich</strong>, damit
                dein Marketing wirkt, ohne dich zu überfordern.
              </p>

              <p className={`${BODY} mt-6`}>
                <strong>Bei mir bekommst du:</strong>
              </p>

              <ul className={`${BODY} mt-2 list-disc space-y-2 pl-6`}>
                <li>
                  <strong>Pinterest Marketing mit Strategie und Struktur</strong>
                </li>
                <li>
                  <strong>Designs &amp; Texte aus einer Hand</strong>
                </li>
                <li>
                  <strong>Planbare Abläufe</strong> statt Social-Media-Chaos
                </li>
                <li>
                  <strong>Langfristige Sichtbarkeit</strong> für Marken mit Stil
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4) "Alles was ich für dich tun kann..." — #D9D9D9, 100px/100px
          Links Bild, rechts Text. Unter 1024px steht der Text zuerst, deshalb
          liegt der Textblock im Markup vorn und wird ab lg in Spalte 2 gesetzt.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="mx-auto max-w-6xl px-6 py-[100px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="lg:col-start-2 lg:row-start-1">
              <p className={`${KICKER} text-heading`}>
                Warum bin ich mir da so sicher?
              </p>

              <h2 className={`${H2_35} mt-4`}>
                Alles was ich für dich tun kann, habe ich selbst getan.
              </h2>

              <p className={`${BODY} mt-6`}>
                All meine Angebote basieren auf langjähriger Erfahrung und
                meinem Anspruch nur das zu tun, was ich auch{" "}
                <strong>zu 100% verkörpere.</strong>
              </p>

              <p className={`${BODY} mt-6`}>
                Das Fundament meiner Arbeit ist Erfahrung, Struktur und einen
                klarer Qualitätsanspruch.
              </p>

              {/* Häkchen-Zeilen: einfache Zeilenumbrüche im selben Absatz —
                  kein Listenpunkt, kein Abstand dazwischen (wie im Original). */}
              <p className={`${BODY} mt-6`}>
                Ich verspreche nichts, was ich nicht halten kann – aber ich
                liefere, was dich wirklich weiterbringt:
                <br />✅ Pinterest-Accounts, die langfristig wachsen
                <br />✅ Strukturierte Abläufe, die Ruhe in dein Business
                bringen
                <br />✅ Designs, die deine Marke widerspiegeln
              </p>

              <p className={`${BODY} mt-6`}>
                Ich stehe für{" "}
                <strong>Ehrlichkeit, Struktur und Weitblick</strong> – und
                arbeite nur mit Marken, die dieselben Werte teilen.
              </p>

              <div className="mt-8">
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  let&apos;s talk
                </a>
              </div>
            </div>

            <div className="relative aspect-[2/3] overflow-hidden rounded-tl-[200px] lg:col-start-1 lg:row-start-1">
              <ExportedImage
                src={julietteChairImage}
                alt="Juliette sitzt auf einem Stuhl, schaut in die Ferne, hat Laptop auf dem Schoß und Köpfhörer in den Ohren"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                basePath={basePath}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5) "Meine Werte" / "Dafür stehe ich mit meinem Namen"
          Hintergrund #FFFFFF, oberer Teil 50px/10px, Kachelbereich 0/100px.
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 pt-[50px] pb-[10px] text-center">
          <h6 className={H6_KICKER}>Meine Werte</h6>
          <h3 className={`${H3_CENTERED} text-gold-light mt-2`}>
            Dafür stehe ich mit meinem Namen
          </h3>
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-0 pb-[100px]">
          <div className="grid gap-10 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <ExportedImage
                  src={value.icon}
                  alt=""
                  width={90}
                  height={90}
                  className="mx-auto h-auto w-[90px]"
                  sizes="(min-width: 768px) 90px, 90px"
                  basePath={basePath}
                />
                <h5 className={`${H5_VALUE} mt-4`}>{value.title}</h5>
                <p className={`${BODY} mt-2`}>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          6) "Hi, ich bin Juliette" — Hintergrund #595959, 80px/80px
          Links Text, rechts Bild.
          ------------------------------------------------------------------ */}
      <section className="bg-footer">
        <div className="mx-auto max-w-6xl px-6 pt-[80px] pb-[80px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              {/* Abweichende Zeilenhöhe (50px statt 30px) — so im Original. */}
              <p
                className={`${KICKER_BASE} text-gray-light text-[18px] leading-[34px] md:text-[20px] md:leading-[50px]`}
              >
                Über mich
              </p>

              <h2 className={H2_DARK}>Hi, ich bin Juliette</h2>

              <p className={`${BODY} text-gray-light mt-6`}>
                Pinterest-Marketing-Expertin, Struktur-Liebhaberin und digitale
                Unternehmerin.
                <br />
                Ich lebe, was ich lehre: Klarheit, Verlässlichkeit und Freude an
                nachhaltigem Marketing.
              </p>

              <p className={`${BODY} text-gray-light mt-6`}>
                Wenn du wissen willst, warum ich Pinterest gewählt habe und wie
                mein Weg hierher geführt hat, dann hüpf rüber…
              </p>

              <div className="mt-8">
                <Link href="/ueber-mich/" className="btn btn-primary">
                  rüber hüpfen
                </Link>
              </div>
            </div>

            <div className="relative aspect-[2/3] overflow-hidden rounded-t-[200px]">
              <ExportedImage
                src={juliettePortraitImage}
                alt="pinterest marketing expertin"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                basePath={basePath}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          7) "Zusammenarbeit – so kommst du zu mir"
          Schließt ohne Farbwechsel an Abschnitt 6 an (#595959).
          ------------------------------------------------------------------ */}
      <section className="bg-footer">
        <div className="mx-auto max-w-6xl px-6 pt-0 pb-[80px] text-center">
          <h3 className={`${H3_CENTERED} text-surface`}>
            Zusammenarbeit – so kommst du zu mir
          </h3>

          <p className={`${BODY} text-gray-light mx-auto mt-6 max-w-3xl`}>
            Du möchtest Pinterest-Marketing, das wirklich funktioniert? Du
            möchtest Zeit sparen und diesen Marketingkanal komplett outsourcen?
          </p>

          <p className={`${BODY} text-gray-light mx-auto mt-6 max-w-3xl`}>
            Dann lass uns sprechen.
            <br />
            Ich arbeite mit Marken, die{" "}
            <strong>Qualität vor Quantität</strong>,{" "}
            <strong>Langfristigkeit vor Schnellschüssen</strong> und{" "}
            <strong>Ehrlichkeit vor leeren Versprechen</strong> stellen.
          </p>

          {/* Adresse kommt aus siteConfig — im Original steht hier eine
              Mailadresse mit fehlendem "l", die es nicht gibt. */}
          <div className="mt-8">
            <a href={`mailto:${siteConfig.email}`} className="btn btn-secondary">
              schreib&apos; mir!
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
