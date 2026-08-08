import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { formatDateDe } from "@/lib/format";

const path = "/blog/";

export const metadata: Metadata = {
  title: "Pinterest Marketing Blog für Unternehmen",
  description:
    "Der Pinterest Marketing Blog von molloy business: verständliche Ratgeber zu Kosten, Strategie und organischer Sichtbarkeit für Unternehmen.",
  alternates: {
    canonical: path,
  },
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

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <p className="font-body text-gold-text mb-3 text-sm tracking-[2px] uppercase">
          Blog
        </p>
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          Pinterest Marketing Blog
        </h1>
        <p className="font-body mt-6 text-lg">
          Hier schreibt molloy business über Pinterest Marketing für
          Unternehmen: verständlich, konkret und ohne Fachchinesisch. Die
          Artikel beantworten die Fragen, die in Erstgesprächen am häufigsten
          gestellt werden – damit du eine fundierte Entscheidung treffen
          kannst, ob und wie Pinterest zu deinem Unternehmen passt.
        </p>
      </section>

      {/* Artikelliste */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="bg-cream group flex flex-col rounded-2xl p-6 shadow-sm transition hover:shadow-md"
              >
                <h2 className="text-[22px] leading-tight">{post.title}</h2>
                <p className="font-body mt-2 text-sm">
                  {formatDateDe(post.date)}
                </p>
                <p className="font-body mt-3 text-[15px] leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="text-gold-text font-body mt-4 text-sm group-hover:underline">
                  weiterlesen →
                </span>
              </Link>
            ))}
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
