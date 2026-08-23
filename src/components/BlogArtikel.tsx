import type { ReactNode } from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { blogPosts, type BlogPost } from "@/lib/site-config";
import { beitragsbild } from "@/lib/blog-bilder";
import { basePath } from "@/lib/base-path";

// ---------------------------------------------------------------------------
// Gemeinsamer Rahmen aller 17 Artikelseiten. Alles, was auf jeder Artikelseite
// gleich aussieht, steht hier — die einzelnen page.tsx liefern nur noch ihren
// Fließtext als `children`.
//
// Am Original bei 1200px Fensterbreite gemessen:
//   - Seitenhintergrund #FFFFFF (nicht der creme Body-Grund der übrigen Seiten)
//   - Beitragsbild 833×555 ganz oben, VOR der H1, zentriert, ohne Eckenradius
//   - Textspalte 813px (siehe `article-column` in globals.css)
//   - am Artikelende drei Vorschaukacheln im 282px-Raster,
//     Bild je 269×180 linksbündig in der Kachel
// ---------------------------------------------------------------------------

// Raster der drei Vorschaukacheln, am Original bei 1200px gemessen: die
// Kacheln stehen bei x = 154 / 436 / 718, also im 282px-Raster ohne
// Zwischenraum. Das Bild ist mit 269×180 schmaler als die Kachel und sitzt
// linksbündig darin; die restlichen 13px bleiben frei. Drei Kacheln ergeben
// zusammen 846px — der Block ist damit etwas breiter als die 813px-Textspalte,
// genau wie im Original. Die festen Spaltenbreiten greifen erst ab 894px
// (846 + 2×24), darunter teilen sich drei fluide Spalten die Breite.
const KACHEL_RASTER = "sm:grid-cols-3 min-[894px]:grid-cols-[repeat(3,282px)]";

// Wortlaut wörtlich aus dem archivierten Original
// (docs/original/html/blog/podcast-pinterest-marketing.html, #related-posts).
const VERWANDTE_UEBERSCHRIFT = "Das könnte dir auch gefallen";

// Datumszeile der Kacheln, am Original gemessen: Arial 12px in #545454, davor
// ein kleines Uhr-Symbol. Das Original gibt das Datum technisch aus
// (<time datetime="2024-04-23…">2024-04-23</time>) — deshalb hier bewusst
// KEIN formatDateDe, sondern das ISO-Datum aus `blogPosts` unverändert.
const KACHEL_DATUM =
  "font-body font-normal text-[12px] leading-[16px] text-text";

/** Uhr-Symbol der Datumszeile — schlichtes Inline-SVG, 12×12, keine Icon-Bibliothek. */
function UhrSymbol() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="6" cy="6" r="5" />
      <path d="M6 3.2V6l2 1.4" />
    </svg>
  );
}

/**
 * Die drei zeitlich nächstliegenden anderen Artikel.
 *
 * `blogPosts` steht bereits nach Datum absteigend. Genommen werden die drei
 * direkt folgenden (also älteren) Artikel; am Listenende rutscht das Fenster
 * so weit zurück, dass es voll bleibt — die ältesten Artikel zeigen damit die
 * drei davorliegenden. Der Artikel selbst ist nie dabei.
 */
export function verwandteArtikel(slug: string): readonly BlogPost[] {
  const andere = blogPosts.filter((p) => p.slug !== slug);
  const eigenerIndex = blogPosts.findIndex((p) => p.slug === slug);
  const start = Math.max(0, Math.min(eigenerIndex, andere.length - 3));
  return andere.slice(start, start + 3);
}

/** Beitragsbild ganz oben im Artikel — 833×555, breiter als die Textspalte. */
function Beitragsbild({ post }: { post: BlogPost }) {
  const bild = beitragsbild(post.image);
  if (!bild) return null;

  return (
    <div className="px-6 pt-[50px] min-[881px]:px-0">
      {/* Ab 881px feste 833×555 (Seitenverhältnis 833:555), darunter volle
          Breite im selben Verhältnis. Keine abgerundeten Ecken — das Original
          zeigt das Beitragsbild mit geraden Kanten. */}
      <div className="relative mx-auto aspect-[833/555] w-full max-w-[833px] overflow-hidden">
        <ExportedImage
          src={bild}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 833px, 100vw"
          basePath={basePath}
          priority
        />
      </div>
    </div>
  );
}

/** Drei Vorschaukacheln am Artikelende, vor dem dunklen Abschluss-Bereich. */
function VerwandteArtikel({ slug }: { slug: string }) {
  const artikel = verwandteArtikel(slug);
  if (artikel.length === 0) return null;

  return (
    // Block-Innenabstand am Original gemessen: oben 30px, unten und seitlich 0.
    // 846px breit (3×282), zentriert — der 24px-Seitenabstand greift nur
    // unterhalb von 894px, damit der Block auf schmalen Screens nicht am
    // Fensterrand klebt.
    <section
      aria-labelledby="verwandte-artikel"
      className="mx-auto w-full max-w-[846px] px-6 pt-[30px] pb-0 min-[894px]:px-0"
    >
      <h2 id="verwandte-artikel" className="related-posts-title">
        {VERWANDTE_UEBERSCHRIFT}
      </h2>

      {/* Mobil untereinander, ab 640px dreispaltig, ab 894px im festen
          282px-Raster des Originals. */}
      <div
        className={`mt-6 grid grid-cols-1 gap-x-0 gap-y-8 ${KACHEL_RASTER} sm:gap-y-0`}
      >
        {artikel.map((p) => {
          const bild = beitragsbild(p.image);
          const href = `/blog/${p.slug}/`;

          return (
            <article key={p.slug} className="min-w-0">
              {bild && (
                <Link
                  href={href}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="block"
                >
                  {/* 269×180 linksbündig in der 282px-Kachel, keine abgerundeten
                      Ecken, object-fit cover. */}
                  <div className="relative aspect-[269/180] w-full overflow-hidden sm:max-w-[269px]">
                    <ExportedImage
                      src={bild}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 894px) 269px, (min-width: 640px) 33vw, 100vw"
                      basePath={basePath}
                    />
                  </div>
                </Link>
              )}

              <h3 className={`related-post-title ${bild ? "mt-[19px]" : ""}`}>
                <Link href={href} className="hover:underline">
                  {p.title}
                </Link>
              </h3>

              {/* Datumszeile wie im Original: Uhr-Symbol + technisches Datum. */}
              <time
                dateTime={p.date}
                className={`mt-1 flex items-center gap-1 ${KACHEL_DATUM}`}
              >
                <UhrSymbol />
                {p.date}
              </time>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function BlogArtikel({
  post,
  children,
}: {
  post: BlogPost;
  children: ReactNode;
}) {
  return (
    // `blog-artikel` ist zugleich der Haken, an dem globals.css den weißen
    // Seitenhintergrund NUR für die Artikelrouten setzt (body:has(...)).
    <div className="blog-artikel bg-surface">
      <Beitragsbild post={post} />
      {children}
      <VerwandteArtikel slug={post.slug} />
    </div>
  );
}
