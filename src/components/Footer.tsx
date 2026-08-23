import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import logo from "@/assets/images/logo.png";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  WhatsappIcon,
} from "@/components/BrandIcons";
import { navigation, siteConfig } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";

// Reihenfolge wie in der Fusszeile des Originals: Instagram, Facebook,
// WhatsApp, Pinterest, LinkedIn. Die Symbole sind Inline-SVGs mit den
// Original-Pfaddaten der freien Font-Awesome-Brands-Icons (siehe
// BrandIcons.tsx) — keine Icon-Bibliothek, kein CDN.
const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: "Whatsapp", href: siteConfig.social.whatsapp, Icon: WhatsappIcon },
  { label: "Pinterest", href: siteConfig.social.pinterest, Icon: PinterestIcon },
  { label: "Linkedin", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
];

export default function Footer() {
  return (
    // Der Abschnitt selbst bleibt vollbreit #595959, der Inhalt sitzt im
    // breiteren 1200px-Rahmen des Originals (nicht im 1140er der uebrigen
    // Inhaltsabschnitte) — derselbe Rahmen wie der 804/396-Abschnitt auf
    // /ueber-mich/.
    <footer className="bg-footer mt-auto">
      {/* Drei Spalten von 240 / 636 / 316 px im 1200er-Rahmen — die genauen
          Breiten und ihr Umschaltpunkt stecken in der Utility
          `footer-columns` (siehe globals.css). Unter 1024px stapelt alles
          zentriert untereinander.
          Weder Telefonnummer noch E-Mail noch eine Copyright-Zeile: das
          Original zeigt im Footer keine davon (Kontaktdaten stehen auf der
          Kontaktseite, die Pflichtangaben im Impressum). */}
      <div className="container-wide footer-columns flex flex-col items-center gap-8 py-12 lg:grid lg:items-center lg:gap-0">
        {/* Spalte 1 — Logo, verlinkt auf die Startseite. Desktop 130×130,
            mobil 107×107. */}
        <div className="lg:justify-self-start">
          <Link href="/" aria-label={siteConfig.name} className="inline-block">
            <ExportedImage
              src={logo}
              alt="molloy business"
              width={130}
              height={130}
              basePath={basePath}
              sizes="(min-width: 1024px) 130px, 107px"
              className="h-[107px] w-[107px] rounded-full lg:h-[130px] lg:w-[130px]"
            />
          </Link>
        </div>

        {/* Spalte 2 — die drei Links nebeneinander, Arial 18px, #333333,
            zentriert in der Spalte. Mobil brechen sie zweizeilig um, bleiben
            aber zentriert. */}
        <ul className="font-body flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[18px] text-[#333333]">
          {navigation.legal.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="hover:text-gold-light">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Spalte 3 — die fünf Social-Icons nebeneinander. Kachel 50×50
            (mobil 40×40), Grund #D9D9D9, Eckenradius 10 %, Symbol 25×25
            (mobil 20×20) in #69727D, 6px zwischen den Kacheln. */}
        <ul className="flex gap-[6px] lg:justify-self-end">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="bg-gray-light text-social-icon flex h-[40px] w-[40px] items-center justify-center rounded-[10%] transition hover:opacity-80 lg:h-[50px] lg:w-[50px]"
              >
                <Icon className="h-[20px] w-[20px] lg:h-[25px] lg:w-[25px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
