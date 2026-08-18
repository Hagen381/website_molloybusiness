import type { StaticImageData } from "next/image";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { siteConfig } from "@/lib/site-config";
import {
  anzahlSeiten,
  artikelDerSeite,
  seitenPfad,
} from "@/lib/blog-seiten";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";

// Hero-Bild der rechten Spalte und Hintergrundfoto des Abschluss-Blocks.
import heroBild from "@/assets/images/blog/Juliette-Oppel-Pinterest-Blog.jpg";
import abschlussHintergrund from "@/assets/images/blog/Juliette-Oppel-Header-Kontakt-Pinterest.jpg";

// Vorschaubilder der Artikelliste — je Artikel das Beitragsbild des Originals
// (dort auch als og:image hinterlegt), NICHT das erste Bild aus dem
// Artikeltext. Statische Imports sind Pflicht, weil
// next-image-export-optimizer daraus die Bildmaße und die optimierten
// Varianten baut — der Dateiname selbst steht bei jedem Artikel in
// `blogPosts` (src/lib/site-config.ts).
import imgPodcast from "@/assets/images/blog/podcast-pinterest-marketing/podcast-pinterest-1.jpg";
import imgTelegram from "@/assets/images/blog/telegram-gruppe-pinterest-marketing-profis/pinterest-marketing-profis-1.jpg";
import imgMereExposure from "@/assets/images/blog/pinterest-mere-exposure-effekt/pommespinterest-5.jpg";
import imgOpenAi from "@/assets/images/blog/pinterest-openai-learnings/openai_pinterest-1.jpg";
import imgPredicts2026 from "@/assets/images/blog/pinterest-predicts-report-2026/Pinterest-Predicts-Report-2.jpg";
import imgObm from "@/assets/images/blog/online-business-management/Online-Business-Management-1.jpg";
import imgOnlineBusiness from "@/assets/images/blog/online-business-vs-realitaet/Online-Business-1.png";
import imgSelbststaendigkeit from "@/assets/images/blog/selbststaendigkeit-unsichtbare-arbeit/Selbststaendigkeit-1.png";
import imgSchuelerpraktika from "@/assets/images/blog/online-schuelerpraktika/Online-Fachkraeftegewinnung-5.png";
import imgJahresrueckblick from "@/assets/images/blog/10-dinge-im-online-business/Jahresrueckblick-1.png";
import imgGeschenkideen from "@/assets/images/blog/geschenkideen-homeoffice/WeihnachtsgeschenkefuersHomeoffice-3.png";
import imgAffiliate from "@/assets/images/blog/affiliate-marketing/AffiliateMarketing-2.png";
import imgSocialMedia from "@/assets/images/blog/social-media-strategie-chatgpt/SocialMediaStrategiemitChatGPT-3.png";
import imgFormel60 from "@/assets/images/blog/formel-60-minuten-arbeitszeit/60MinutenFormel-3.jpg";
import imgKundenAbgelehnt from "@/assets/images/blog/kunden-abgelehnt/Kundenabgelehnt-1.png";
import imgPinterestMarketing from "@/assets/images/blog/pinterest-marketing/CoverbildPinterestArtikel.png";
import imgWebsite from "@/assets/images/blog/website-fuer-dein-business/BlogWebsite-3.png";

// ---------------------------------------------------------------------------
// Typografie wie auf src/app/page.tsx und src/app/angebote/page.tsx — dieselben
// am Original nachgemessenen Werte. NICHT ohne ausdrücklichen Auftrag ändern.
// ---------------------------------------------------------------------------
const H1 = "text-[34px] leading-[47.6px] md:text-[47px] md:leading-[65.8px]";
const COL = "lg:px-[10px]";

// Artikelkarte, am Original gemessen: Titel in Antic Didone 24px/33.6px,
// Stärke 600, Laufweite 1px, Goldhell #C49C5E, linksbündig.
const KARTEN_TITEL =
  "font-heading font-semibold tracking-[1px] text-gold-light text-[24px] leading-[33.6px]";

// Anrisstext, am Original gemessen: Arial 16px/30px in #777777 — bewusst
// kleiner und heller als der normale Fließtext (18px/30px, #545454).
const KARTEN_ANRISS = "font-body text-[16px] leading-[30px] text-[#777777]";

// Abschluss-Abschnitt, am Original gemessen: Antic Didone 37px/40px,
// Stärke 400, Laufweite 1.4px, zentriert.
const H3_ABSCHLUSS =
  "text-center font-normal tracking-[1.4px] text-[27px] leading-[30px] md:text-[37px] md:leading-[40px]";

// Blätterleiste, am Original gemessen. Der anklickbare Zustand steht in Arial
// 18/30, der nicht anklickbare in Antic Didone 24/40 — beide in #C49C5E.
const BLAETTERN_AKTIV =
  "font-body font-normal tracking-[1.4px] text-[18px] leading-[30px] text-gold-light hover:underline";
const BLAETTERN_INAKTIV =
  "font-heading font-normal tracking-[1.4px] text-[24px] leading-[40px] text-gold-light";

// ---------------------------------------------------------------------------
// Dateiname (aus `blogPosts`) → statisch importiertes Bild. Der Schlüssel ist
// bewusst der Dateiname und nicht der Slug, damit `image` in site-config.ts
// die einzige Stelle bleibt, an der die Bildauswahl je Artikel steht.
// ---------------------------------------------------------------------------
const vorschaubilder: Record<string, StaticImageData> = {
  "podcast-pinterest-1.jpg": imgPodcast,
  "pinterest-marketing-profis-1.jpg": imgTelegram,
  "pommespinterest-5.jpg": imgMereExposure,
  "openai_pinterest-1.jpg": imgOpenAi,
  "Pinterest-Predicts-Report-2.jpg": imgPredicts2026,
  "Online-Business-Management-1.jpg": imgObm,
  "Online-Business-1.png": imgOnlineBusiness,
  "Selbststaendigkeit-1.png": imgSelbststaendigkeit,
  "Online-Fachkraeftegewinnung-5.png": imgSchuelerpraktika,
  "Jahresrueckblick-1.png": imgJahresrueckblick,
  "WeihnachtsgeschenkefuersHomeoffice-3.png": imgGeschenkideen,
  "AffiliateMarketing-2.png": imgAffiliate,
  "SocialMediaStrategiemitChatGPT-3.png": imgSocialMedia,
  "60MinutenFormel-3.jpg": imgFormel60,
  "Kundenabgelehnt-1.png": imgKundenAbgelehnt,
  "CoverbildPinterestArtikel.png": imgPinterestMarketing,
  "BlogWebsite-3.png": imgWebsite,
};

export function blogSeitenJsonLd(seite: number) {
  const pfad = seitenPfad(seite);
  return {
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
            item: `${siteConfig.url}${pfad}`,
          },
        ],
      },
      {
        // Nur die Artikel, die auf dieser Blätterseite auch sichtbar sind —
        // ein Schema ohne sichtbare Entsprechung wäre falsch.
        "@type": "Blog",
        name: "Pinterest Marketing Blog",
        url: `${siteConfig.url}${pfad}`,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        blogPost: artikelDerSeite(seite).map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          url: `${siteConfig.url}/blog/${post.slug}/`,
        })),
      },
    ],
  };
}

export default function BlogUebersicht({ seite }: { seite: number }) {
  const artikel = artikelDerSeite(seite);
  const hatVoriger = seite > 1;
  const hatNaechster = seite < anzahlSeiten;

  return (
    <>
      {/* ------------------------------------------------------------------
          1) HERO — am Original gemessen: Hintergrund #D9D9D9, 80px oben /
          50px unten, Spalten 684/456 (60/40), Text links, Bild rechts.
          Alle Blätterseiten tragen denselben Hero wie /blog/.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page pt-[80px] pb-[50px]">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-x-0">
            <div className={COL}>
              <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
                Blog
              </p>

              {/* Wortlaut wie im Original — Kleinschreibung und Klammern gehören
                  dazu. Meta-Title und -Description bleiben davon unberührt,
                  die sind für die Suche formuliert. */}
              <h1 className={H1}>(molloy) business blog</h1>

              <p className="font-body mt-6">
                Hier schreibt molloy business über Pinterest Marketing für
                Unternehmen: verständlich, konkret und ohne Fachchinesisch. Die
                Artikel beantworten die Fragen, die in Erstgesprächen am
                häufigsten gestellt werden – damit du eine fundierte
                Entscheidung treffen kannst, ob und wie Pinterest zu deinem
                Unternehmen passt.
              </p>
            </div>

            {/* Bild rechts. Ab 1024px feste 436×500px — das ist die volle
                Breite der 456px-Spalte abzüglich der 10px
                Elementor-Spalteninnenabstand je Seite (COL), das Bild steht
                also mittig in der Spalte. Eckenradius 200px oben wie auf der
                Startseite. Darunter volle Breite im Seitenverhältnis 436:500.
                Quelle 780×520 (quer), Ausschnitt hochkant: cover skaliert auf
                die Höhe von 500px, also rund 750px Breite. `sizes` muss dieser
                gerenderten Breite folgen, nicht der sichtbaren 436px — sonst
                lädt der Browser die 640er-Variante und rechnet sie um rund
                17 % hoch. */}
            <div className={`self-center ${COL}`}>
              <div className="relative mx-auto aspect-[436/500] w-full overflow-hidden rounded-t-[200px] lg:aspect-auto lg:h-[500px] lg:w-[436px] lg:max-w-full">
                <ExportedImage
                  src={heroBild}
                  alt="Juliette sitzt mit offenem Laptop auf einer Couch. Finger liegen auf der Tastatur."
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 750px, 100vw"
                  basePath={basePath}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2) ARTIKELLISTE — am Original gemessen: Hintergrund #FFFFFF,
          50px/50px, einspaltig über die volle Rahmenbreite. Zeilenabstand
          35px (aus dem Archiv: classic_row_gap des Elementor-Posts-Widgets).

          Die Karte hat KEINEN eigenen Hintergrund, keinen Rahmen und keinen
          Eckenradius: Vorschaubild 326×217 links, Text rechts daneben.
          Sechs Artikel je Seite, wie im Original.
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="container-page py-[50px]">
          <div className="flex flex-col gap-[35px]">
            {artikel.map((post) => {
              const bild = post.image ? vorschaubilder[post.image] : undefined;
              const href = `/blog/${post.slug}/`;

              return (
                <article key={post.slug} className="md:flex md:gap-[30px]">
                  {/* Artikel ohne Beitragsbild bekommen keine Bildspalte —
                      Titel und Anriss laufen dann über die volle Breite. */}
                  {bild && (
                    <Link
                      href={href}
                      tabIndex={-1}
                      aria-hidden="true"
                      className="block shrink-0"
                    >
                      {/* ABWEICHUNG: das Original skaliert die Vorschaubilder
                          mit object-fit: fill und verzerrt sie dadurch. Hier
                          object-cover bei gleicher Kachelgröße 326×217 —
                          gleiche Optik, ohne Verzerrung. Unter 768px steht das
                          Bild über dem Text, volle Breite, Seitenverhältnis
                          326:217. */}
                      <div className="relative aspect-[326/217] w-full overflow-hidden md:aspect-auto md:h-[217px] md:w-[326px]">
                        <ExportedImage
                          src={bild}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 768px) 326px, 100vw"
                          basePath={basePath}
                        />
                      </div>
                    </Link>
                  )}

                  <div className={`min-w-0 ${bild ? "mt-4 md:mt-0" : ""}`}>
                    {/* Im Original ist der Kartentitel ein h1 — auf einer Seite
                        mit mehreren Artikeln ergibt das mehrere H1. Hier h2,
                        optisch identisch. */}
                    <h2 className={KARTEN_TITEL}>
                      <Link href={href} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="font-body text-text mt-1 text-sm">
                      {formatDateDe(post.date)}
                    </p>

                    <p className={`${KARTEN_ANRISS} mt-2`}>{post.excerpt}</p>

                    <Link
                      href={href}
                      className="text-gold-text font-body mt-2 inline-block text-sm hover:underline"
                    >
                      weiterlesen →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3) BLÄTTERLEISTE — am Original gemessen: eigener Abschnitt,
          Hintergrund #FFFFFF, 50px oben / 50px unten, Inhaltsbreite 1120px
          zentriert, Leistenhöhe rund 40px. Nur "« Voriger" und "Nächster »",
          keine Seitenzahlen, Abstand zwischen beiden Elementen 18px. Auf der
          ersten Seite ist "« Voriger" nicht anklickbar, auf der letzten
          "Nächster »".
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="container-page pt-[50px] pb-[50px]">
          <nav
            aria-label="Weitere Artikel"
            className="mx-auto flex min-h-[40px] w-full max-w-[1120px] flex-wrap items-center justify-center gap-x-[18px] gap-y-2"
          >
            {hatVoriger ? (
              <Link href={seitenPfad(seite - 1)} className={BLAETTERN_AKTIV}>
                «&nbsp;Voriger
              </Link>
            ) : (
              <span aria-disabled="true" className={BLAETTERN_INAKTIV}>
                «&nbsp;Voriger
              </span>
            )}

            {hatNaechster ? (
              <Link href={seitenPfad(seite + 1)} className={BLAETTERN_AKTIV}>
                Nächster&nbsp;»
              </Link>
            ) : (
              <span aria-disabled="true" className={BLAETTERN_INAKTIV}>
                Nächster&nbsp;»
              </span>
            )}
          </nav>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4) ABSCHLUSS — am Original gemessen: Hintergrundfoto
          (Juliette-Oppel-Header-Kontakt-Pinterest.jpg, cover, Position
          50% 50%) mit einem Schleier in #D9D9D9 bei 21 % Deckkraft darüber.
          80px/80px, Inhaltsbreite 770px zentriert, Überschrift zentriert und
          weiß, Fließtext ebenfalls weiß.

          Das Foto kommt wie im Zitat-Block von /angebote/ über
          next-image-export-optimizer (absolut, formatfüllend) statt als
          CSS-Hintergrund ins Layout.
          ------------------------------------------------------------------ */}
      <section className="relative isolate overflow-hidden">
        <ExportedImage
          src={abschlussHintergrund}
          alt=""
          aria-hidden="true"
          fill
          className="-z-10 object-cover object-[50%_50%]"
          sizes="100vw"
          basePath={basePath}
        />
        {/* Schleier: #D9D9D9 bei 21 % Deckkraft */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[rgba(217,217,217,0.21)]"
        />
        <div className="container-page py-[80px]">
          <div className="mx-auto w-full max-w-[770px] text-white">
            <h3 className={`text-white ${H3_ABSCHLUSS}`}>
              Du möchtest mit mir zusammenarbeiten?
            </h3>

            <p className="font-body mt-6 text-center">
              Habe ich dein Interesse geweckt? Gerne unterstütze ich dich dabei
              dein Unternehmen auf Pinterest sichtbar zu machen. Schau dir dazu
              meine verschiedenen{" "}
              <Link
                href="/angebote/"
                className="text-gold-text font-bold italic underline"
              >
                Pinterest Angebote
              </Link>{" "}
              an oder schreib mir und wir schauen, was am besten zu dir und
              deinen Bedürfnissen passt.
            </p>

            {/* Im Original zeigt der Button auf /kontakt-pinterest-marketing/
                — im Nachbau also auf die eigene Kontaktseite /kontakt/. Interne
                Route, deshalb next/link und kein target="_blank". */}
            <div className="mt-8 text-center">
              <Link href="/kontakt/" className="btn btn-secondary">
                schreib&apos; mir!
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSeitenJsonLd(seite)),
        }}
      />
    </>
  );
}
