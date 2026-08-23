"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import type { StaticImageData } from "next/image";
import PostFinanceLogo from "@/components/PostFinanceLogo";
import { basePath } from "@/lib/base-path";

export type Kundenstimme = {
  text: string;
  link?: { href: string; label: string };
  textEnde?: string;
  name: string;
  rolle: string;
  /** Foto der Person, 160×160 rund beschnitten. */
  foto?: StaticImageData;
  /** Statt eines Fotos das inline eingebettete PostFinance-Zeichen. */
  logo?: "postfinance";
  alt: string;
};

// Am Original gemessen: das Karussell blättert von selbst alle 5 Sekunden
// weiter, der Schub selbst dauert 500ms mit dem Zeitverlauf "ease".
const AUTOPLAY_MS = 5000;

/**
 * Kundenstimmen-Karussell — eigener, lokaler Code ohne externes Paket.
 *
 * Wie im Original wird geSCHOBEN, nicht überblendet: alle sechs Karten stehen
 * nebeneinander auf einer waagerechten Bahn, sichtbar ist immer genau eine
 * (die Bahn liegt in einem 1064px breiten Rahmen mit `overflow: hidden`).
 * Gewechselt wird per `transform: translateX` — 500ms, "ease".
 *
 * Endlosschleife OHNE Klone: statt eine Karte doppelt auszuliefern, wird die
 * Bahn im Moment des Umbruchs lautlos umsortiert (CSS `order`, siehe
 * `versatz`) und die Verschiebung im selben, übergangslosen Bild um genau
 * eine Kartenbreite gegengerechnet. Für das Auge passiert dabei nichts — die
 * sichtbare Karte bleibt exakt stehen —, aber die nächste Karte steht danach
 * rechts daneben und kann normal hereingeschoben werden. Dadurch steht jedes
 * Zitat genau einmal im ausgelieferten HTML.
 *
 * Die Bahn ist eine Flex-Zeile: ihre Höhe richtet sich nach der höchsten
 * Karte und ändert sich beim Blättern nicht, es springt also nichts. Die
 * gerade nicht sichtbaren Karten sind `inert` + `aria-hidden`, damit weder
 * Maus noch Tastatur noch Screenreader in den außerhalb des Rahmens
 * liegenden Text laufen.
 */
export default function KundenstimmenKarussell({
  stimmen,
}: {
  stimmen: Kundenstimme[];
}) {
  const anzahl = stimmen.length;

  // Position der Bahn, gezählt in Kartenbreiten (0 … anzahl-1).
  const [platz, setPlatz] = useState(0);
  // Umsortierung der Bahn für die Endlosschleife: Karte i steht an Platz
  // (i - versatz) mod anzahl.
  const [versatz, setVersatz] = useState(0);
  // Übergangsloses Zwischenbild während des Umbruchs.
  const [springen, setSpringen] = useState(false);
  const [ziel, setZiel] = useState<number | null>(null);
  // Sobald der Nutzer selbst blättert (Klick, Berührung, Tastatur), bleibt das
  // automatische Weiterblättern dauerhaft aus.
  const [autoplay, setAutoplay] = useState(true);
  // Zeiger über dem Karussell hält das Autoplay nur solange an, wie er dort ist.
  const [zeigerDrauf, setZeigerDrauf] = useState(false);
  const [reduziert, setReduziert] = useState(false);

  const aktiv = (((platz + versatz) % anzahl) + anzahl) % anzahl;

  // "Weniger Bewegung": kein Autoplay und kein Übergang.
  useEffect(() => {
    const abfrage = window.matchMedia("(prefers-reduced-motion: reduce)");
    const merken = () => setReduziert(abfrage.matches);
    merken();
    abfrage.addEventListener("change", merken);
    return () => abfrage.removeEventListener("change", merken);
  }, []);

  const schiebe = useCallback(
    (richtung: 1 | -1) => {
      if (anzahl < 2) return;
      const rand = richtung === 1 ? anzahl - 1 : 0;
      if (platz !== rand) {
        setPlatz(platz + richtung);
        return;
      }
      // Umbruch: Bahn umsortieren und die Verschiebung im selben
      // übergangslosen Bild gegenrechnen, danach normal weiterschieben.
      setSpringen(true);
      setVersatz((v) => v + richtung);
      setPlatz(rand - richtung);
      setZiel(rand);
    },
    [anzahl, platz],
  );

  // Zweiter Halbschritt des Umbruchs: eine Bildwiederholung später wird der
  // Übergang wieder eingeschaltet und die Bahn um eine Karte weitergeschoben.
  useEffect(() => {
    if (ziel === null) return;
    let zweiter = 0;
    const erster = requestAnimationFrame(() => {
      zweiter = requestAnimationFrame(() => {
        setSpringen(false);
        setPlatz(ziel);
        setZiel(null);
      });
    });
    return () => {
      cancelAnimationFrame(erster);
      cancelAnimationFrame(zweiter);
    };
  }, [ziel]);

  const schiebeRef = useRef(schiebe);
  useEffect(() => {
    schiebeRef.current = schiebe;
  });

  useEffect(() => {
    if (!autoplay || zeigerDrauf || reduziert || anzahl < 2) return;
    const timer = window.setInterval(() => schiebeRef.current(1), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [autoplay, zeigerDrauf, reduziert, anzahl]);

  const geheZu = useCallback(
    (index: number) => {
      setAutoplay(false);
      // Ein noch offener Umbruch darf die Zielposition nicht überschreiben.
      setZiel(null);
      setSpringen(false);
      setPlatz((((index - versatz) % anzahl) + anzahl) % anzahl);
    },
    [anzahl, versatz],
  );

  const blaettere = useCallback(
    (richtung: 1 | -1) => {
      setAutoplay(false);
      schiebe(richtung);
    },
    [schiebe],
  );

  return (
    <div
      role="group"
      aria-roledescription="Karussell"
      aria-label="Kundenstimmen"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          blaettere(1);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          blaettere(-1);
        }
      }}
      onTouchStart={() => setAutoplay(false)}
      onMouseEnter={() => setZeigerDrauf(true)}
      onMouseLeave={() => setZeigerDrauf(false)}
      className="focus-visible:outline-gold mx-auto max-w-[1064px] focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {/* Rahmen: genau eine Karte breit, alles andere wird abgeschnitten. */}
      <div className="overflow-hidden">
        {/* Die Bahn. Abstand zwischen den Karten: 25px am Rechner, 10px ab
            1024px abwärts — derselbe Wert steckt in der Verschiebung, damit
            immer exakt eine Karte im Rahmen steht. */}
        <div
          className="flex w-full gap-[var(--abstand)] transition-[transform] duration-500 ease-[ease] [--abstand:10px] motion-reduce:transition-none min-[1025px]:[--abstand:25px]"
          style={{
            transform: `translateX(calc(${-platz} * (100% + var(--abstand))))`,
            ...(springen ? { transitionProperty: "none" } : null),
          }}
        >
          {stimmen.map((stimme, index) => {
            const sichtbar = index === aktiv;
            return (
              <div
                key={stimme.name}
                inert={!sichtbar}
                aria-hidden={!sichtbar}
                style={{
                  order: (((index - versatz) % anzahl) + anzahl) % anzahl,
                }}
                className="w-full shrink-0"
              >
                {/* Karte wie zuvor: #FFFDFD, Innenabstand 53px, Foto 160×160
                    rund, Zitat Arial 18/30 in #545454 linksbündig. */}
                <figure className="flex h-full flex-col items-center gap-8 bg-[#FFFDFD] p-[26px] sm:flex-row sm:items-start md:p-[53px]">
                  <div className="bg-surface relative h-[160px] w-[160px] shrink-0 overflow-hidden rounded-full">
                    {stimme.logo === "postfinance" ? (
                      <PostFinanceLogo className="h-full w-full" />
                    ) : (
                      stimme.foto && (
                        <ExportedImage
                          src={stimme.foto}
                          alt={stimme.alt}
                          fill
                          className="object-cover"
                          sizes="160px"
                          basePath={basePath}
                        />
                      )
                    )}
                  </div>
                  <div>
                    <blockquote className="font-body text-text text-left">
                      {stimme.text}
                      {stimme.link && (
                        <>
                          <a
                            href={stimme.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold-text hover:underline"
                          >
                            {stimme.link.label}
                          </a>
                          {stimme.textEnde}
                        </>
                      )}
                    </blockquote>
                    {/* Diese Zeile ist am Original NICHT nachgemessen —
                        bewusst schlicht gehalten. */}
                    <figcaption className="font-body mt-4 text-left">
                      <span className="text-heading font-bold">
                        {stimme.name}
                      </span>
                      <br />
                      {stimme.rolle}
                    </figcaption>
                  </div>
                </figure>
              </div>
            );
          })}
        </div>
      </div>

      {/* Punkte-Navigation — am Original gemessen: 8px, Schwarz mit 20 %
          Deckkraft, der aktive Punkt Schwarz. Die Trefferfläche ist über ein
          unsichtbares `before` auf 24px vergrößert, ohne dass sich am Bild
          etwas ändert. */}
      <div className="mt-[30px] flex justify-center gap-[12px]">
        {stimmen.map((stimme, index) => (
          <button
            key={stimme.name}
            type="button"
            onClick={() => geheZu(index)}
            aria-label={`Kundenstimme ${index + 1} von ${anzahl}: ${stimme.name}`}
            aria-current={index === aktiv}
            className={`relative h-[8px] w-[8px] rounded-full transition-colors before:absolute before:-inset-[8px] before:content-[''] ${
              index === aktiv ? "bg-black" : "bg-black/20 hover:bg-black/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
