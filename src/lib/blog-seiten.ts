import { blogPosts, type BlogPost } from "@/lib/site-config";

// Am Original gemessen: die Artikelliste blättert nach sechs Artikeln um.
// Bei 17 Artikeln ergibt das drei Seiten (6 / 6 / 5).
export const ARTIKEL_PRO_SEITE = 6;

export const anzahlSeiten = Math.max(
  1,
  Math.ceil(blogPosts.length / ARTIKEL_PRO_SEITE),
);

// Reihenfolge in `blogPosts` ist bereits neueste zuerst.
export function artikelDerSeite(seite: number): readonly BlogPost[] {
  const start = (seite - 1) * ARTIKEL_PRO_SEITE;
  return blogPosts.slice(start, start + ARTIKEL_PRO_SEITE);
}

// Seite 1 liegt auf /blog/, die weiteren auf /blog/2/, /blog/3/ … — genau wie
// im Original. Es gibt bewusst kein /blog/1/.
export function seitenPfad(seite: number): string {
  return seite <= 1 ? "/blog/" : `/blog/${seite}/`;
}

// Nur die Blätterseiten ab 2 werden als eigene Route erzeugt.
export const blaetterSeiten = Array.from(
  { length: Math.max(0, anzahlSeiten - 1) },
  (_, i) => i + 2,
);
