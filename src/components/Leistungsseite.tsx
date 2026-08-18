import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import ExportedImage from "next-image-export-optimizer";
import { siteConfig } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";

// ---------------------------------------------------------------------------
// Gemeinsame Darstellung der vier Leistungsseiten (Account Aufbau, Account
// Management, Strategie Call, Audit). Im Original sind die vier Seiten
// baugleich: ein zweispaltiger Hero auf #D9D9D9 und darunter ein Abschnitt auf
// dem cremen Body-Grund mit der Angebotskarte. Diese Datei hält den Aufbau,
// die vier `page.tsx` liefern nur noch die Datensätze.
//
// Alle Werte sind am Original bei 1536px nachgemessen. NICHT ohne
// ausdrücklichen Auftrag ändern.
// ---------------------------------------------------------------------------

// H1 — Antic Didone 47/65.8, 600, ls 1px, #595959 (Default aus globals.css).
// Der Basiswert ist die mobile Verkleinerung (~72 %) wie auf der Startseite.
export const H1 = "text-[34px] leading-[47.6px] md:text-[47px] md:leading-[65.8px]";
// H2 im Textteil des Hero — Antic Didone 37/51.8, 600, ls 1px, #595959.
export const H2 = "text-[27px] leading-[37.8px] md:text-[37px] md:leading-[51.8px]";
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
  /** Überschrift des Hero, wörtlich aus dem Original. */
  h1: string;
  /** Textteil des Hero (Absätze, Zwischenüberschrift, Listen) — wörtlich. */
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
  /** Titel im goldenen Kopfbalken der Karte. */
  cardTitle: string;
  /** Umfangs-Satz aus `services[].scope` — steht dort, wo früher der Preis stand. */
  scope: string;
  /** Merkmalsliste, wörtlich aus dem Original. */
  features: readonly string[];
  /** Beschriftung des Buttons, wörtlich aus dem Original (klein geschrieben). */
  buttonLabel: string;
  /** Zusatztext des Originals unterhalb des Buttons (optional). */
  cardNote?: ReactNode;
  /** Absatz des Originals unterhalb der Karte (optional). */
  outro?: ReactNode;
};

export default function Leistungsseite({
  h1,
  intro,
  image,
  imageAlt,
  imageSizes,
  cardTitle,
  scope,
  features,
  buttonLabel,
  cardNote,
  outro,
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
          2) INHALTSABSCHNITT — kein eigener Hintergrund, der creme
          Body-Grund #F2EDE7 bleibt sichtbar. 50px oben / 50px unten,
          einspaltig, Inhaltsrahmen 1140px, Karte 1120px breit.
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

              {/* b) Umfangs-Block — hier stand im Original der Preis. */}
              <div className="py-[40px]">
                <p className={`${CARD_SCOPE} text-center`}>{scope}</p>
              </div>

              {/* c) Merkmalsliste — zentriert, ohne Trennlinien. Am Original
                  nachgemessen: 15px zwischen den Merkmalen (Oberkante zu
                  Oberkante 45px bei 30px Zeilenhöhe), kein Abstand vor dem
                  ersten und nach dem letzten Eintrag. */}
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

              {/* d) Fußbereich */}
              <div className={`${BODY} py-[30px] text-center`}>
                <p>
                  In einem kostenfreien Erstgespräch klären wir in Ruhe, ob und
                  wie eine Zusammenarbeit zu dir passt.
                </p>
                <div className="mt-6">
                  {/* Der Hinweissatz darüber kündigt das Erstgespräch an, der
                      Button führt deshalb direkt zur Terminbuchung. */}
                  <a
                    href={siteConfig.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {buttonLabel}
                  </a>
                </div>
                {cardNote ? <div className="mt-6">{cardNote}</div> : null}
              </div>
            </div>

            {outro ? <div className={`${BODY} mt-10`}>{outro}</div> : null}
          </div>
        </div>
      </section>
    </>
  );
}
