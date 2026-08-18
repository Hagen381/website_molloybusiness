import type { Metadata } from "next";
import BlogUebersicht from "@/components/BlogUebersicht";

const path = "/blog/";

export const metadata: Metadata = {
  title: "Pinterest Marketing Blog für Unternehmen",
  description:
    "Der Pinterest Marketing Blog von molloy business: verständliche Ratgeber zu Kosten, Strategie und organischer Sichtbarkeit für Unternehmen.",
  alternates: {
    canonical: path,
  },
};

// Seite 1 der Artikelliste. Die weiteren Seiten liegen auf /blog/2/ und
// /blog/3/ und werden von src/app/blog/[seite]/page.tsx erzeugt.
export default function Blog() {
  return <BlogUebersicht seite={1} />;
}
