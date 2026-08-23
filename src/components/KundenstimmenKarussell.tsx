"use client";

import { useCallback, useEffect, useState } from "react";
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
// weiter.
const AUTOPLAY_MS = 5000;

/**
 * Kundenstimmen-Karussell — eigener, lokaler Code ohne externes Paket.
 *
 * Alle sechs Karten stehen gleichzeitig im HTML und liegen per Grid
 * übereinander in derselben Rasterzelle: dadurch ist der Abschnitt immer so
 * hoch wie die längste Kundenstimme, es springt beim Wechsel also nichts.
 * Gewechselt wird nur die Deckkraft (sanfte Überblendung); die inaktiven
 * Karten sind zusätzlich `inert`, damit weder Maus noch Tastatur noch
 * Screenreader in unsichtbaren Text laufen. Für Suchmaschinen bleibt der
 * gesamte Text im ausgelieferten HTML — nichts wird nachgeladen.
 */
export default function KundenstimmenKarussell({
  stimmen,
}: {
  stimmen: Kundenstimme[];
}) {
  const [aktiv, setAktiv] = useState(0);
  // Sobald der Nutzer selbst blättert (Klick, Berührung, Tastatur), bleibt das
  // automatische Weiterblättern aus.
  const [autoplay, setAutoplay] = useState(true);
  const anzahl = stimmen.length;

  useEffect(() => {
    if (!autoplay || anzahl < 2) return;
    const timer = window.setInterval(
      () => setAktiv((i) => (i + 1) % anzahl),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(timer);
  }, [autoplay, anzahl]);

  const geheZu = useCallback((index: number) => {
    setAutoplay(false);
    setAktiv(index);
  }, []);

  const blaettere = useCallback(
    (richtung: 1 | -1) => {
      setAutoplay(false);
      setAktiv((i) => (i + richtung + anzahl) % anzahl);
    },
    [anzahl],
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
      className="focus-visible:outline-gold mx-auto max-w-[1064px] focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {/* Alle Karten in EINER Rasterzelle — die Zelle nimmt die Höhe der
          höchsten Karte an. */}
      <div className="grid">
        {stimmen.map((stimme, index) => {
          const sichtbar = index === aktiv;
          return (
            <div
              key={stimme.name}
              inert={!sichtbar}
              aria-hidden={!sichtbar}
              className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
                sichtbar ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
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
