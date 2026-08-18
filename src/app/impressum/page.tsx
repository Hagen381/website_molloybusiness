import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

const path = "/impressum/";
// Wortgleich in Breadcrumb-Komponente und BreadcrumbList-Schema.
const pageName = "Impressum";

// Bewusst KEIN noindex — das Impressum wird indexiert (Vertrauenssignal).
export const metadata: Metadata = {
  title: pageName,
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
          name: pageName,
          item: `${siteConfig.url}${path}`,
        },
      ],
    },
  ],
};

export default function Impressum() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          {pageName}
        </h1>

        <p className="font-body mt-6 text-lg">Angaben gemäß § 5 DDG</p>

        <p className="font-body mt-6 text-lg">
          molloy business ist eine Marke der
        </p>
        <p className="font-body mt-4 text-lg">
          <strong className="text-heading">{siteConfig.legalName}</strong>
          <br />
          {siteConfig.legal.street}
          <br />
          {siteConfig.legal.zip} {siteConfig.legal.city}
          <br />
          {siteConfig.legal.country}
        </p>

        <h2 className="mt-10 text-[22px] leading-tight">Vertreten durch</h2>
        <p className="font-body mt-3 text-lg">
          {siteConfig.legalRepresentative}, Mitglied des Vorstands (juhatuse
          liige)
          <br />
          Jedes Mitglied des Vorstands vertritt die Gesellschaft einzeln.
        </p>

        <h2 className="mt-10 text-[22px] leading-tight">Kontakt</h2>
        <p className="font-body mt-3 text-lg">
          Telefon: {siteConfig.phone}
          <br />
          E-Mail: {siteConfig.email}
        </p>

        <h2 className="mt-10 text-[22px] leading-tight">Registereintrag</h2>
        <p className="font-body mt-3 text-lg">
          Eingetragen im estnischen Handelsregister (Äriregister)
          <br />
          Registernummer: {siteConfig.legal.registerNumber}
        </p>

        <h2 className="mt-10 text-[22px] leading-tight">
          Umsatzsteuer-Identifikationsnummer
        </h2>
        <p className="font-body mt-3 text-lg">
          gemäß § 27a UStG: {siteConfig.legal.vatId}
        </p>

        <h2 className="mt-10 text-[22px] leading-tight">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p className="font-body mt-3 text-lg">
          {siteConfig.legalRepresentative}
          <br />
          {siteConfig.legal.street}, {siteConfig.legal.zip}{" "}
          {siteConfig.legal.city}, {siteConfig.legal.country}
        </p>

        <h2 className="mt-10 text-[22px] leading-tight">
          Verbraucherstreitbeilegung
        </h2>
        <p className="font-body mt-3 text-lg">
          Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen. Unsere Angebote richten sich ausschließlich an
          Unternehmen.
        </p>

        <h2 className="mt-10 text-[22px] leading-tight">Bildnachweis</h2>
        <p className="font-body mt-3 text-lg">
          Fotos: Olivia Seven Photography (Domenique Olivia Mendle),
          olivia-seven.com
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
