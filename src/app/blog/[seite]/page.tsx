import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogUebersicht from "@/components/BlogUebersicht";
import { blaetterSeiten, seitenPfad } from "@/lib/blog-seiten";

// Blätterseiten der Artikelliste ab Seite 2. Seite 1 liegt auf /blog/ und wird
// von src/app/blog/page.tsx erzeugt — es gibt bewusst kein /blog/1/.
//
// Beim Static Export entstehen die Dateien nur über generateStaticParams;
// zurückgegeben werden ausschließlich die tatsächlich vorhandenen Seiten
// (bei 17 Artikeln also "2" und "3"). Die 17 Artikelrouten liegen als eigene
// Ordner daneben und haben in Next.js Vorrang vor diesem dynamischen Segment.
export function generateStaticParams() {
  return blaetterSeiten.map((seite) => ({ seite: String(seite) }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ seite: string }> };

function seiteAusParam(wert: string): number | null {
  const zahl = Number(wert);
  return blaetterSeiten.includes(zahl) ? zahl : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { seite } = await params;
  const nummer = seiteAusParam(seite);
  if (nummer === null) return {};

  return {
    title: `Pinterest Marketing Blog für Unternehmen – Seite ${nummer}`,
    description:
      "Der Pinterest Marketing Blog von molloy business: verständliche Ratgeber zu Kosten, Strategie und organischer Sichtbarkeit für Unternehmen.",
    alternates: {
      // Jede Blätterseite ist auf sich selbst kanonisch — sonst würde sie sich
      // fälschlich als /blog/ ausgeben.
      canonical: seitenPfad(nummer),
    },
  };
}

export default async function BlogSeite({ params }: Props) {
  const { seite } = await params;
  const nummer = seiteAusParam(seite);
  if (nummer === null) notFound();

  return <BlogUebersicht seite={nummer} />;
}
