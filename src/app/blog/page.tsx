import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";
import { basePath } from "@/lib/base-path";

// Vorschaubilder der Artikelliste. Statische Imports sind Pflicht, weil
// next-image-export-optimizer daraus die Bildmaße und die optimierten
// Varianten baut — der Dateiname selbst steht bei jedem Artikel in
// `blogPosts` (src/lib/site-config.ts).
import imgPodcast from "@/assets/images/blog/podcast-pinterest-marketing/podcast-pinterest-3.jpg";
import imgTelegram from "@/assets/images/blog/telegram-gruppe-pinterest-marketing-profis/pinterest-marketing-profis-3.jpg";
import imgMereExposure from "@/assets/images/blog/pinterest-mere-exposure-effekt/pommespinterest-2.jpg";
import imgOpenAi from "@/assets/images/blog/pinterest-openai-learnings/openai_pinterest-4.jpg";
import imgPredicts2026 from "@/assets/images/blog/pinterest-predicts-report-2026/Pinterest-Predicts-Report-5.jpg";
import imgObm from "@/assets/images/blog/online-business-management/Online-Business-Management-5.jpg";
import imgOnlineBusiness from "@/assets/images/blog/online-business-vs-realitaet/Online-Business-2.png";
import imgSelbststaendigkeit from "@/assets/images/blog/selbststaendigkeit-unsichtbare-arbeit/Selbststaendigkeit-6.png";
import imgSchuelerpraktika from "@/assets/images/blog/online-schuelerpraktika/Online-Fachkraeftegewinnung-1.png";
import imgJahresrueckblick from "@/assets/images/blog/10-dinge-im-online-business/Jahresrueckblick-6.png";
import imgGeschenkideen from "@/assets/images/blog/geschenkideen-homeoffice/WeihnachtsgeschenkefuersHomeoffice-2.png";
import imgAffiliate from "@/assets/images/blog/affiliate-marketing/AffiliateMarketing-3.png";
import imgSocialMedia from "@/assets/images/blog/social-media-strategie-chatgpt/SocialMediaStrategiemitChatGPT-5.png";
import imgFormel60 from "@/assets/images/blog/formel-60-minuten-arbeitszeit/Blog60MinutenFormel.jpg";
import imgKundenAbgelehnt from "@/assets/images/blog/kunden-abgelehnt/Kundenabgelehnt-2.png";
import imgPinterestMarketing from "@/assets/images/blog/pinterest-marketing/PinterestPredictsFotos-1-1.png";
import imgWebsite from "@/assets/images/blog/website-fuer-dein-business/BlogWebsite-2.png";

const path = "/blog/";

export const metadata: Metadata = {
  title: "Pinterest Marketing Blog für Unternehmen",
  description:
    "Der Pinterest Marketing Blog von molloy business: verständliche Ratgeber zu Kosten, Strategie und organischer Sichtbarkeit für Unternehmen.",
  alternates: {
    canonical: path,
  },
};

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

// ---------------------------------------------------------------------------
// Dateiname (aus `blogPosts`) → statisch importiertes Bild. Der Schlüssel ist
// bewusst der Dateiname und nicht der Slug, damit `image` in site-config.ts
// die einzige Stelle bleibt, an der die Bildauswahl je Artikel steht.
// ---------------------------------------------------------------------------
const vorschaubilder: Record<string, StaticImageData> = {
  "podcast-pinterest-3.jpg": imgPodcast,
  "pinterest-marketing-profis-3.jpg": imgTelegram,
  "pommespinterest-2.jpg": imgMereExposure,
  "openai_pinterest-4.jpg": imgOpenAi,
  "Pinterest-Predicts-Report-5.jpg": imgPredicts2026,
  "Online-Business-Management-5.jpg": imgObm,
  "Online-Business-2.png": imgOnlineBusiness,
  "Selbststaendigkeit-6.png": imgSelbststaendigkeit,
  "Online-Fachkraeftegewinnung-1.png": imgSchuelerpraktika,
  "Jahresrueckblick-6.png": imgJahresrueckblick,
  "WeihnachtsgeschenkefuersHomeoffice-2.png": imgGeschenkideen,
  "AffiliateMarketing-3.png": imgAffiliate,
  "SocialMediaStrategiemitChatGPT-5.png": imgSocialMedia,
  "Blog60MinutenFormel.jpg": imgFormel60,
  "Kundenabgelehnt-2.png": imgKundenAbgelehnt,
  "PinterestPredictsFotos-1-1.png": imgPinterestMarketing,
  "BlogWebsite-2.png": imgWebsite,
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
          item: `${siteConfig.url}${path}`,
        },
      ],
    },
    {
      "@type": "Blog",
      name: "Pinterest Marketing Blog",
      url: `${siteConfig.url}${path}`,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        datePublished: post.date,
        url: `${siteConfig.url}/blog/${post.slug}/`,
      })),
    },
  ],
};

export default function Blog() {
  return (
    <>
      <Breadcrumb pageName="Blog" />

      {/* ------------------------------------------------------------------
          1) HERO — am Original gemessen: Hintergrund #D9D9D9, 80px oben /
          50px unten, Spalten 684/456 (60/40), Text links, Bild rechts.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page pt-[80px] pb-[50px]">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-x-0">
            <div className={COL}>
              <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
                Blog
              </p>

              <h1 className={H1}>Pinterest Marketing Blog</h1>

              <p className="font-body mt-6">
                Hier schreibt molloy business über Pinterest Marketing für
                Unternehmen: verständlich, konkret und ohne Fachchinesisch. Die
                Artikel beantworten die Fragen, die in Erstgesprächen am
                häufigsten gestellt werden – damit du eine fundierte
                Entscheidung treffen kannst, ob und wie Pinterest zu deinem
                Unternehmen passt.
              </p>
            </div>

            {/* Im Original steht hier das Foto Juliette-Oppel-Pinterest-Blog.jpg
                (780×520). Die Datei fehlt noch im Repo, siehe
                docs/fehlende-bilder.md — vorläufig hält eine weiße Fläche im
                Seitenverhältnis des Originals den Platz. */}
            <div className={`self-center ${COL}`}>
              <div
                aria-hidden="true"
                className="bg-surface aspect-[780/520] w-full"
              />
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
          ------------------------------------------------------------------ */}
      <section className="bg-surface">
        <div className="container-page py-[50px]">
          <div className="flex flex-col gap-[35px]">
            {blogPosts.map((post) => {
              const bild = post.image ? vorschaubilder[post.image] : undefined;
              const href = `/blog/${post.slug}/`;

              return (
                <article key={post.slug} className="md:flex md:gap-[30px]">
                  {/* Artikel ohne Aufmacherbild bekommen keine Bildspalte —
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
                        mit 17 Artikeln ergibt das 18 H1. Hier h2, optisch
                        identisch. */}
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
          3) ABSCHLUSS — am Original gemessen: 80px/80px, Inhaltsbreite 770px
          zentriert, Überschrift zentriert.

          vorläufig ohne Hintergrundfoto, Datei
          Juliette-Oppel-Header-Kontakt-Pinterest.jpg fehlt noch

          Im Original liegt hier ein Foto mit einem hellgrauen Schleier
          (#D9D9D9 bei 21 % Deckkraft) und weißer Überschrift. Solange die
          Datei fehlt: flächiges #D9D9D9 und Überschrift in #595959, damit sie
          lesbar bleibt.
          ------------------------------------------------------------------ */}
      <section className="bg-gray-light">
        <div className="container-page py-[80px]">
          <div className="mx-auto w-full max-w-[770px]">
            <h3 className={`text-heading ${H3_ABSCHLUSS}`}>
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

            {/* Im Original zeigt der Button auf /kontakt-pinterest-marketing/ —
                diese Seite gibt es hier noch nicht, deshalb wie überall sonst
                der Calendly-Link. */}
            <div className="mt-8 text-center">
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                schreib&apos; mir!
              </a>
            </div>
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
