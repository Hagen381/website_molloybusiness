import Link from "next/link";
import { navigation, siteConfig } from "@/lib/site-config";

const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "Pinterest", href: siteConfig.social.pinterest },
  { label: "Linkedin", href: siteConfig.social.linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-gray-light mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-body text-sm leading-relaxed text-white/80">
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
        </div>

        <ul className="font-body flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
          {navigation.legal.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="hover:text-gold-light">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-3">
          {socialLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="bg-gray-light text-social-icon flex h-9 w-9 items-center justify-center rounded-full text-xs transition hover:opacity-80"
              >
                {item.label.charAt(0)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="font-body border-t border-white/10 px-6 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.legalName}
      </div>
    </footer>
  );
}
