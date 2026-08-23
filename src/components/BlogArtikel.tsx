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
//   - am Artikelende drei Vorschaukacheln zu je 269×180
// ---------------------------------------------------------------------------

// Kachelbreite × 3 + 2 Spaltenabstände ergibt exakt die 813px der Textspalte
// (3×269 + 2×3 = 813).
const KACHEL_ABSTAND = "gap-[3px]";

// Titel der verwandten Artikel — dieselben am Original gemessenen Schriftwerte
// wie die Kartentitel der Blog-Übersicht (siehe BlogUebersicht.tsx):
// Antic Didone 24px/33.6px, Stärke 600, Laufweite 1px, Goldhell #C49C5E.
const KACHEL_TITEL =
  "font-heading font-semibold tracking-[1px] text-gold-light text-[24px] leading-[33.6px]";

// Wortlaut wörtlich aus dem archivierten Original
// (docs/original/html/blog/podcast-pinterest-marketing.html, #related-posts).
const VERWANDTE_UEBERSCHRIFT = "Das könnte dir auch gefallen";

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
    <div className="px-6 pt-10 min-[881px]:px-0">
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
    <section aria-labelledby="verwandte-artikel" className="article-column pt-[30px] pb-[50px]">
      <h2 id="verwandte-artikel" className="article-h2">
        {VERWANDTE_UEBERSCHRIFT}
      </h2>

      {/* Drei gleich breite Spalten über die Textspaltenbreite verteilt.
          Mobil untereinander, volle Breite im Verhältnis 269:180. */}
      <div className={`mt-6 grid grid-cols-1 gap-y-8 sm:grid-cols-3 ${KACHEL_ABSTAND} sm:gap-y-0`}>
        {artikel.map((p) => {
          const bild = beitragsbild(p.image);
          const href = `/blog/${p.slug}/`;

          return (
            <article key={p.slug} className="min-w-0">
              {bild && (
                <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
                  <div className="relative aspect-[269/180] w-full overflow-hidden sm:max-w-[269px]">
                    <ExportedImage
                      src={bild}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 269px, 100vw"
                      basePath={basePath}
                    />
                  </div>
                </Link>
              )}

              <h3 className={`${KACHEL_TITEL} ${bild ? "mt-[19px]" : ""}`}>
                <Link href={href} className="hover:underline">
                  {p.title}
                </Link>
              </h3>
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
