"use client";

import { useState } from "react";
import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/i18n";
import type { SiteContent } from "@/lib/content/types";
import Logo from "./Logo";

export default function Header({
  locale,
  content,
}: {
  locale: Locale;
  content: SiteContent;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-ink/60 backdrop-blur-2xl"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(47,158,110,0.12), rgba(24,27,36,0.5) 35%, rgba(24,27,36,0.5) 65%, rgba(232,163,61,0.12))",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={`/${locale}#home`}>
          <Logo className="text-2xl sm:text-3xl" onDark />
        </Link>

        <nav className="hidden items-center justify-center gap-5 xl:flex">
          {content.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-center text-sm text-paper/70 transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full border border-white/15 p-1 font-mono text-xs sm:flex">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`rounded-full px-2.5 py-1 text-center transition-colors ${
                  l === locale
                    ? "bg-white/15 text-paper"
                    : "text-paper/50 hover:text-paper"
                }`}
                aria-current={l === locale ? "true" : undefined}
              >
                {l === "he" ? "עב" : l.toUpperCase()}
              </Link>
            ))}
          </div>
          <a
            href="#contact"
            className="flex items-center justify-center whitespace-nowrap rounded-full px-4 py-3 text-center text-sm font-semibold leading-none text-ink transition-transform hover:scale-[1.03]"
            style={{
              backgroundImage: "linear-gradient(90deg, #5B8DEF, #E8A33D)",
            }}
          >
            {content.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-paper xl:hidden"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
              {menuOpen ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink/95 px-4 py-4 sm:px-6 xl:hidden">
          <nav className="flex flex-col gap-4">
            {content.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-paper/80 transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex w-fit items-center gap-1 rounded-full border border-white/15 p-1 font-mono text-xs sm:hidden">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                onClick={() => setMenuOpen(false)}
                className={`rounded-full px-2.5 py-1 text-center transition-colors ${
                  l === locale ? "bg-white/15 text-paper" : "text-paper/50 hover:text-paper"
                }`}
                aria-current={l === locale ? "true" : undefined}
              >
                {l === "he" ? "עב" : l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function localeLabel(locale: Locale) {
  return localeNames[locale];
}
