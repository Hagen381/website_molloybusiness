"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import logo from "@/assets/images/logo.png";
import { navigation } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";

function isNavItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() ?? "/";

  return (
    <header className="bg-surface relative z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <ExportedImage
            src={logo}
            alt="molloy business"
            width={72}
            height={72}
            priority
            basePath={basePath}
            className="h-16 w-16 rounded-full"
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center">
            {navigation.main.map((item, index) => {
              const active = isNavItemActive(pathname, item.href);
              const children = "children" in item ? item.children : undefined;
              return (
                <li key={item.label} className="flex items-center">
                  <span className="group relative">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`font-heading inline-flex items-center gap-1 px-5 py-3 text-[24px] leading-[40px] tracking-[1.4px] hover:opacity-80 ${
                        active
                          ? "text-gold border-gold border-b-2"
                          : "text-heading"
                      }`}
                    >
                      {item.label}
                      {children && (
                        <span className="text-gold text-[11px]" aria-hidden>
                          ▼
                        </span>
                      )}
                    </Link>
                    {children && (
                      <ul className="invisible absolute left-0 top-full min-w-[320px] translate-y-1 rounded-b-md bg-white opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        {children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="text-heading font-body block px-5 py-3 text-[15px] leading-snug hover:bg-cream hover:text-gold"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </span>
                  {index < navigation.main.length - 1 && (
                    <span className="text-gold text-[10px]" aria-hidden>
                      ●
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Menü Umschalter"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="text-gold flex flex-col gap-1.5 lg:hidden"
        >
          <span className="bg-gold block h-0.5 w-7" />
          <span className="bg-gold block h-0.5 w-7" />
          <span className="bg-gold block h-0.5 w-7" />
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-cream border-t lg:hidden">
          <ul className="flex flex-col px-6 py-2">
            {navigation.main.map((item) => {
              const active = isNavItemActive(pathname, item.href);
              const hasChildren = "children" in item && !!item.children;
              return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-heading inline-flex items-center gap-1 py-2 text-lg ${
                    active ? "text-gold border-gold border-b-2" : "text-heading"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  {hasChildren && (
                    <span className="text-gold text-[10px]" aria-hidden>
                      ▼
                    </span>
                  )}
                </Link>
                {"children" in item && item.children && (
                  <ul className="pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="text-heading font-body block py-1.5 text-sm"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
