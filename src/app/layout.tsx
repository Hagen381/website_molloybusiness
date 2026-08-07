import type { Metadata } from "next";
import { Antic_Didone } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";
import "./globals.css";

// The GitHub Pages preview build sets NEXT_PUBLIC_BASE_PATH, which we use
// here as the signal to keep that internal preview out of search engines.
const isPreviewBuild = Boolean(basePath);

const anticDidone = Antic_Didone({
  variable: "--heading-font",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  robots: isPreviewBuild
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      founder: {
        "@type": "Person",
        name: siteConfig.owner,
      },
      sameAs: Object.values(siteConfig.social),
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      image: `${siteConfig.url}/logo.png`,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      priceRange: "€€",
      areaServed: ["DE", "AT", "CH"],
      founder: {
        "@type": "Person",
        name: siteConfig.owner,
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${anticDidone.variable} h-full antialiased`}>
      <body className="bg-cream flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
