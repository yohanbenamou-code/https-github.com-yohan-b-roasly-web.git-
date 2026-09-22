import type { SiteContent } from "@/lib/content/types";
import { contact } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";
import { serviceLinks } from "@/lib/content/serviceLinks";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer({
  locale,
  content,
}: {
  locale: Locale;
  content: SiteContent;
}) {
  return (
    <footer className="border-t border-white/10 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo className="text-xl text-paper" onDark />
            <p className="mt-3 text-sm leading-relaxed text-paper/55">
              {content.footer.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-2.5">
            {content.nav.links.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="text-sm text-paper/55 transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-2.5">
            {serviceLinks[locale].map((link) => (
              <Link
                key={link.href}
                href={`/${locale}/${link.href}`}
                className="text-sm text-paper/55 transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="font-mono text-sm text-paper/55">
            <p>
              {content.footer.contactLabel.email}:{" "}
              <a href={`mailto:${contact.email}`} className="ltr-nums transition-colors hover:text-paper">
                {contact.email}
              </a>
            </p>
            <p className="mt-1">
              {content.footer.contactLabel.whatsapp}:{" "}
              <a href={contact.whatsappHref} className="ltr-nums transition-colors hover:text-paper">
                {contact.whatsapp}
              </a>
            </p>
            <div className="mt-4 flex gap-1">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`rounded-full px-2.5 py-1 text-xs transition-colors ${
                    l === locale
                      ? "bg-white/15 text-paper"
                      : "text-paper/45 hover:text-paper"
                  }`}
                >
                  {l === "he" ? "עב" : l.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{content.footer.copyright}</p>
          <div className="flex items-center gap-4">
            {content.footer.legal.map((item) => (
              <span key={item}>{item}</span>
            ))}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Roasly"
              className="text-paper/40 transition-colors hover:text-paper"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
