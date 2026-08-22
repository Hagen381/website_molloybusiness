import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { siteConfig } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";

// ---------------------------------------------------------------------------
// Gemeinsame Darstellung der vier Leistungsseiten (Account Aufbau, Account
// Management, Strategie Call, Audit). Die vier Seiten sind baugleich: Hero auf
// #D9D9D9, darunter der Zielgruppen-Abschnitt auf dem cremen Body-Grund, die
// Angebotskarte, ein Cross-Sell-Abschnitt und der Abschluss-CTA. Diese Datei
// hält den Aufbau, die vier `page.tsx` liefern nur noch die Datensätze.
//
// Alle Maße sind am Original bei 1536px nachgemessen. NICHT ohne
// ausdrücklichen Auftrag ändern.
// ---------------------------------------------------------------------------

// H1 — Antic Didone 47/65.8, 600, ls 1px, #595959 (Default aus globals.css).
// Der Basiswert ist die mobile Verkleinerung (~72 %) wie auf der Startseite.
export const H1 = "text-[34px] leading-[47.6px] md:text-[47px] md:leading-[65.8px]";
// H2 im Textteil — Antic Didone 37/51.8, 600, ls 1px, #595959.
export const H2 = "text-[27px] leading-[37.8px] md:text-[37px] md:leading-[51.8px]";
// Subline unter der H1 — Kicker-Stil wie auf Startseite und Angebotsübersicht:
// Antic Didone 20/30, 500, ls 1.4px, #C49C5E.
export const KICKER =
  "font-heading font-medium tracking-[1.4px] text-gold-light text-[18px] leading-[28px] md:text-[20px] md:leading-[30px]";
// Fließtext: 18/30, ls 1.4px, #545454 — kommt aus den <body>-Regeln in
// globals.css, hier nur die Schriftfamilie absichern.
export const BODY = "font-body";
// Elementor-Spaltenabstand: der 1140px-Rahmen wird ohne Grid-Gap geteilt, die
// sichtbaren 10px je Spalte sitzen als Innenabstand in der Spalte selbst.
const COL = "lg:px-[10px]";

// Kopfbalken der Karte — Antic Didone 30/50, 500, ls 1.4px, #FFFFFF.
const CARD_TITLE =
  "font-heading font-medium tracking-[1.4px] text-white text-[22px] leading-[36px] md:text-[30px] md:leading-[50px]";
// Umfangs-Block (dort stand im Original der Preis) — Antic Didone 24/40, 500,
// ls 1.4px, #C49C5E.
const CARD_SCOPE =
  "font-heading font-medium tracking-[1.4px] text-gold-light text-[20px] leading-[32px] md:text-[24px] md:leading-[40px]";

// Häkchen-Symbol der Merkmalsliste. Im Original ist es Font Awesome
// "far fa-check-circle" in #595959, rund 23px groß; hier als Inline-SVG, damit
// die Seite ohne Icon-Font auskommt (kein zusätzlicher Netzwerk-Request).
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
      className="text-heading mt-[3px] h-[23px] w-[23px] shrink-0 fill-current"
    >
      <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" />
    </svg>
  );
}

export type LeistungsseiteProps = {
  /** Überschrift des Hero — je Seite die einzige H1. */
  h1: string;
  /** Subline direkt unter der H1, im goldenen Kicker-Stil. */
  subline: string;
  /** Intro-Absätze des Hero — wörtlich aus den freigegebenen Texten. */
  intro: ReactNode;
  image: StaticImageData;
  imageAlt: string;
  /**
   * Sichtbar sind immer 401×500px. `sizes` muss aber der internen
   * `object-fit: cover`-Skalierung folgen: bei hochformatigen Quellen ist das
   * die sichtbare Breite (401px), bei querformatigen die auf 500px Höhe
   * hochskalierte Breite (~750px) — sonst wird das Bild unscharf.
   */
  imageSizes: string;
  /** Abschnitt „Für wen …“ auf dem cremen Grund. */
  zielgruppe: {
    heading: string;
    /** Einleitungssatz über der Liste. */
    lead: ReactNode;
    /** Listenpunkte mit dem goldenen › — wörtlich. */
    items: readonly string[];
    /** Optionaler Schlussabsatz unter der Liste. */
    outro?: ReactNode;
  };
  /** H2 im goldenen Kopfbalken der Karte („… – das ist enthalten“). */
  cardTitle: string;
  /** Umfangs-Satz aus `services[].scope` — steht dort, wo früher der Preis
   *  stand. Seiten ohne vorgegebenen Umfangs-Satz lassen ihn weg. */
  scope?: string;
  /** Merkmalsliste, wörtlich. */
  features: readonly string[];
  /** Absatz unterhalb der Karte (optional). */
  cardOutro?: ReactNode;
  /** Cross-Sell auf das jeweils passende Nachbarangebot (interner Link). */
  crossSell: {
    heading: string;
    body: ReactNode;
    buttonLabel: string;
    href: string;
  };
  /** Abschluss-CTA zur Terminbuchung. */
  abschluss: {
    heading: string;
    body: ReactNode;
    buttonLabel: string;
  };
};

export default function Leistungsseite({
  h1,
  subline,
  intro,
  image,
  imageAlt,
  imageSizes,
  zielgruppe,
  cardTitle,
  scope,
  features,
  cardOutro,
  crossSell,
  abschluss,
}: LeistungsseiteProps) {
  return (
    <>
      {/* ------------------------------------------------------------------
          1) HERO — Hintergrund #D9D9D9, 80px oben / 80px unten,
          Inhaltsrahmen 1140px, Spalten 684/456 (60/40). Text links, Bild
          rechts; unter 1024px stehen sie untereinander, Text zuerst.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page py-[80px]">
          <div className="grid gap-10 lg:grid-cols-[60%_40%] lg:gap-x-0">
            <div className={COL}>
              <h1 className={H1}>{h1}</h1>
              <p className={`${KICKER} mt-4`}>{subline}</p>
              {intro}
            </div>

            {/* Bild rechtsbündig in der 456px-Spalte: 401×500px, oben
                abgerundet (200px), 10px Abstand zum rechten Spaltenrand —
                das ist der Elementor-Spalteninnenabstand aus COL. */}
            <div className={`self-start ${COL}`}>
              <div className="relative mx-auto aspect-[401/500] w-full overflow-hidden rounded-t-[200px] lg:mr-0 lg:ml-auto lg:aspect-auto lg:h-[500px] lg:w-[401px] lg:max-w-full">
                <ExportedImage
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes={imageSizes}
                  basePath={basePath}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2) ZIELGRUPPE — kein eigener Hintergrund, der creme Body-Grund
          #F2EDE7 bleibt sichtbar. Einspaltig im 1140er Rahmen.
          ------------------------------------------------------------------ */}
      <section>
        <div className="container-page pt-[50px]">
          <div className={COL}>
            <h2 className={H2}>{zielgruppe.heading}</h2>

            <div className={`${BODY} mt-6`}>{zielgruppe.lead}</div>

            {/* Icon-Liste wie auf der Angebotsübersicht: fa-chevron-right des
                Originals als typografisches Zeichen. */}
            <ul className={`${BODY} mt-4 space-y-2`}>
              {zielgruppe.items.map((eintrag) => (
                <li key={eintrag} className="flex gap-3">
                  <span aria-hidden="true" className="text-gold-light">
                    ›
                  </span>
                  <span>{eintrag}</span>
                </li>
              ))}
            </ul>

            {zielgruppe.outro ? (
              <div className={`${BODY} mt-6`}>{zielgruppe.outro}</div>
            ) : null}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3) ANGEBOTSKARTE — weiterhin auf dem cremen Grund, Karte 1120px
          breit, goldener Kopfbalken. Der Kopfbalken trägt jetzt die H2
          „… – das ist enthalten“.
          ------------------------------------------------------------------ */}
      <section>
        <div className="container-page py-[50px]">
          <div className={COL}>
            {/* Karte: ohne Rahmen, Eckenradius, Schatten und eigenen Grund. */}
            <div>
              {/* a) Kopfbalken */}
              <div className="bg-gold-light px-6 py-[20px]">
                <h2 className={`${CARD_TITLE} text-center`}>{cardTitle}</h2>
              </div>

              {/* b) Umfangs-Block — hier stand im Original der Preis. Fehlt er,
                  beginnt die Merkmalsliste mit demselben Abstand. */}
              {scope ? (
                <div className="py-[40px]">
                  <p className={`${CARD_SCOPE} text-center`}>{scope}</p>
                </div>
              ) : null}

              {/* c) Merkmalsliste — zentriert, ohne Trennlinien. Am Original
                  nachgemessen: 15px zwischen den Merkmalen (Oberkante zu
                  Oberkante 45px bei 30px Zeilenhöhe). */}
              <div className={scope ? "" : "pt-[40px]"}>
                <ul className={`${BODY} space-y-[15px] text-heading`}>
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start justify-center gap-[10px] text-left"
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {cardOutro ? (
              <div className={`${BODY} mt-10`}>{cardOutro}</div>
            ) : null}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4) CROSS-SELL — Hintergrund #FFFFFF, damit der Abschnittsrhythmus
          (creme / weiß) der Website erhalten bleibt. Interner Link im
          primären Button-Stil (#AC8343, weiße Schrift) — auf Weiß deutlich
          sichtbarer als die frühere sekundäre Variante.
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="container-page py-[80px]">
          <div className={`${COL} mx-auto max-w-[820px] text-center`}>
            <h2 className={H2}>{crossSell.heading}</h2>

            <div className={`${BODY} mt-6`}>{crossSell.body}</div>

            <div className="mt-8">
              <Link href={crossSell.href} className="btn btn-primary">
                {crossSell.buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5) ABSCHLUSS-CTA — zurück auf den cremen Grund, primärer Button
          (#AC8343) zur Terminbuchung bei Calendly.
          ------------------------------------------------------------------ */}
      <section>
        <div className="container-page py-[80px]">
          <div className={`${COL} mx-auto max-w-[820px] text-center`}>
            <h2 className={H2}>{abschluss.heading}</h2>

            <div className={`${BODY} mt-6`}>{abschluss.body}</div>

            <div className="mt-8">
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {abschluss.buttonLabel}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
