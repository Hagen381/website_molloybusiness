import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/site-config";

const path = "/datenschutz/";
// Wortgleich in Breadcrumb-Komponente und BreadcrumbList-Schema.
const pageName = "Datenschutzerklärung";

// Bewusst KEIN noindex — die Seite wird indexiert.
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

export default function Datenschutz() {
  return (
    <>
      <Breadcrumb pageName={pageName} />

      <section className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20">
        <h1 className="text-[32px] leading-[1.25] sm:text-[40px] sm:leading-[1.2] lg:text-[47px] lg:leading-[65.8px]">
          {pageName}
        </h1>

        <p className="font-body mt-6 text-lg">Stand: August 2026</p>

        <h2 className="mt-10 text-[22px] leading-tight">
          1. Verantwortlicher
        </h2>
        <p className="font-body mt-3 text-lg">
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p className="font-body mt-4 text-lg">
          <strong className="text-heading">{siteConfig.legalName}</strong>
          <br />
          {siteConfig.legal.street}
          <br />
          {siteConfig.legal.zip} {siteConfig.legal.city},{" "}
          {siteConfig.legal.country}
          <br />
          Telefon: {siteConfig.phone}
          <br />
          E-Mail: {siteConfig.email}
        </p>

        <h2 className="mt-10 text-[22px] leading-tight">
          2. Das Wichtigste vorab
        </h2>
        <p className="font-body mt-3 text-lg">
          Diese Website setzt keine Cookies, verwendet keine Analyse- oder
          Tracking-Dienste und bindet keine Inhalte von Drittanbietern ein. Es
          gibt kein Kontaktformular und keinen Newsletter. Personenbezogene
          Daten fallen beim Besuch dieser Website nur in dem technisch
          notwendigen Umfang an, der im Folgenden beschrieben ist.
        </p>

        <h2 className="mt-10 text-[22px] leading-tight">
          3. Hosting und Server-Logfiles
        </h2>
        <p className="font-body mt-3 text-lg">
          Diese Website wird bei SiteGround Spain S.L., Calle Prim 19, 28004
          Madrid, Spanien, gehostet. Serverstandort ist Frankfurt am Main,
          Deutschland.
        </p>
        <p className="font-body mt-4 text-lg">
          Beim Aufruf der Website erhebt der Hoster automatisch Informationen
          in sogenannten Server-Logfiles: IP-Adresse, Datum und Uhrzeit des
          Zugriffs, aufgerufene Seite, Browsertyp und -version, Betriebssystem
          und Referrer-URL. Diese Daten sind für den technischen Betrieb und
          die Sicherheit der Website erforderlich und werden nicht mit anderen
          Datenquellen zusammengeführt.
        </p>
        <p className="font-body mt-4 text-lg">
          Rechtsgrundlage ist unser berechtigtes Interesse an der sicheren und
          stabilen Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO).
          Die Logfiles werden vom Hoster automatisiert gespeichert und
          turnusmäßig gelöscht. Mit SiteGround besteht ein Vertrag über
          Auftragsverarbeitung nach Art. 28 DSGVO.
        </p>

        <h2 className="mt-10 text-[22px] leading-tight">
          4. Kontaktaufnahme per E-Mail oder Telefon
        </h2>
        <p className="font-body mt-3 text-lg">
          Wenn du uns per E-Mail oder Telefon kontaktierst, verarbeiten wir
          die dabei übermittelten Daten (z. B. Name, E-Mail-Adresse,
          Inhalt der Anfrage) ausschließlich zur Bearbeitung deines Anliegens.
        </p>
        <p className="font-body mt-4 text-lg">
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit deine Anfrage
          auf einen Vertragsschluss zielt oder einen bestehenden Vertrag
          betrifft, im Übrigen unser berechtigtes Interesse an der
          Beantwortung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Wir
          speichern die Daten, bis dein Anliegen abschließend bearbeitet ist;
          gesetzliche Aufbewahrungspflichten (z. B. für
          Geschäftskorrespondenz) bleiben unberührt.
        </p>

        <h2 className="mt-10 text-[22px] leading-tight">
          5. Terminbuchung über Calendly
        </h2>
        <p className="font-body mt-3 text-lg">
          Für die Vereinbarung von Erstgesprächen verlinken wir auf den
          externen Dienst Calendly (Calendly LLC, Atlanta, USA). Beim bloßen
          Besuch unserer Website werden keine Daten an Calendly übertragen.
          Erst wenn du dem Link folgst und auf der Calendly-Seite einen Termin
          buchst, verarbeitet Calendly die von dir dort eingegebenen Daten
          (z. B. Name, E-Mail-Adresse, Wunschtermin) nach seinen eigenen
          Datenschutzbestimmungen. Die an uns übermittelten Termindaten
          verwenden wir ausschließlich zur Vorbereitung und Durchführung des
          Gesprächs (Art. 6 Abs. 1 lit. b DSGVO).
        </p>

        <h2 className="mt-10 text-[22px] leading-tight">
          6. Verlinkte Social-Media-Profile
        </h2>
        <p className="font-body mt-3 text-lg">
          Auf dieser Website verlinken wir auf unsere Profile bei Instagram,
          Facebook, Pinterest und LinkedIn. Es handelt sich um einfache Links
          — beim Besuch unserer Website werden keine Daten an diese
          Plattformen übertragen. Erst wenn du einem Link folgst, gelten die
          Datenschutzbestimmungen der jeweiligen Plattform.
        </p>

        <h2 className="mt-10 text-[22px] leading-tight">7. Deine Rechte</h2>
        <p className="font-body mt-3 text-lg">
          Du hast gegenüber uns folgende Rechte hinsichtlich deiner
          personenbezogenen Daten: Auskunft (Art. 15 DSGVO), Berichtigung
          (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art.
          18), Datenübertragbarkeit (Art. 20) sowie Widerspruch gegen
          Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art.
          21). Eine erteilte Einwilligung kannst du jederzeit mit Wirkung für
          die Zukunft widerrufen. Wende dich dafür formlos an{" "}
          {siteConfig.email}.
        </p>

        <h2 className="mt-10 text-[22px] leading-tight">
          8. Beschwerderecht
        </h2>
        <p className="font-body mt-3 text-lg">
          Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu
          beschweren. Für uns zuständig ist die estnische Datenschutzbehörde:
          Andmekaitse Inspektsioon (AKI), Tallinn, Estland,{" "}
          <a
            href="https://www.aki.ee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-text hover:underline"
          >
            www.aki.ee
          </a>
          . Du kannst dich auch an die Aufsichtsbehörde deines gewöhnlichen
          Aufenthaltsorts wenden, in Deutschland z. B. an die
          Landesdatenschutzbehörde deines Bundeslandes.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
