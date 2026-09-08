"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-transparent" : "border-b border-white/5 bg-ink"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "my-2 rounded-full border border-white/10 bg-ink/75 py-2.5 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.65)] backdrop-blur-xl"
            : "my-0 border border-transparent py-4"
        }`}
      >
        <Link href={`/${locale}#home`} aria-label="Roasly">
          <Logo className="text-xl text-paper sm:text-[1.4rem]" onDark />
        </Link>

        <nav className="hidden min-w-0 items-center gap-5 xl:flex">
          {content.nav.links
            .filter(
              (link) =>
                !["#home", "#contact", "#why-roasly"].includes(link.href)
            )
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative whitespace-nowrap text-sm text-paper/65 transition-colors hover:text-paper"
              >
                {link.label}
                <span className="absolute -bottom-1.5 start-0 h-px w-0 bg-blue-soft transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <div className="hidden items-center gap-0.5 rounded-full border border-white/12 bg-white/5 p-1 font-mono text-[11px] sm:flex">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  l === locale
                    ? "bg-white/15 text-paper"
                    : "text-paper/45 hover:text-paper"
                }`}
                aria-current={l === locale ? "true" : undefined}
              >
                {l === "he" ? "עב" : l.toUpperCase()}
              </Link>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-blue-bright to-blue-soft px-4 py-2.5 text-sm font-semibold leading-none text-white shadow-[0_10px_30px_-10px_rgba(59,110,246,0.7)] transition-transform hover:scale-[1.04] sm:flex"
          >
            {content.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-paper xl:hidden"
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
        <div
          id="mobile-menu"
          className="mx-2 mt-1 rounded-card border border-white/10 bg-ink/95 px-5 py-5 backdrop-blur-xl xl:hidden"
        >
          <nav className="flex flex-col divide-y divide-white/5">
            {content.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-[15px] text-paper/80 transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-bright to-blue-soft px-5 py-3 text-sm font-semibold text-white"
          >
            {content.nav.cta}
          </a>
          <div className="mt-4 flex w-fit items-center gap-0.5 rounded-full border border-white/12 p-1 font-mono text-[11px] sm:hidden">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                onClick={() => setMenuOpen(false)}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  l === locale ? "bg-white/15 text-paper" : "text-paper/45 hover:text-paper"
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
