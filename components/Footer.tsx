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
    <footer className="bg-paper border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo className="text-xl" />
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {content.footer.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            {content.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink/60 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-2">
            {serviceLinks[locale].map((link) => (
              <Link
                key={link.href}
                href={`/${locale}/${link.href}`}
                className="text-sm text-ink/60 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="font-mono text-sm text-ink/60">
            <p>
              {content.footer.contactLabel.email}:{" "}
              <a href={`mailto:${contact.email}`} className="ltr-nums hover:text-ink">
                {contact.email}
              </a>
            </p>
            <p className="mt-1">
              {content.footer.contactLabel.whatsapp}:{" "}
              <a href={contact.whatsappHref} className="ltr-nums hover:text-ink">
                {contact.whatsapp}
              </a>
            </p>
            <div className="mt-4 flex gap-1">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`rounded-full px-2.5 py-1 text-xs ${
                    l === locale ? "bg-ink text-paper" : "text-ink/50 hover:text-ink"
                  }`}
                >
                  {l === "he" ? "עב" : l.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink/10 pt-6 text-xs text-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{content.footer.copyright}</p>
          <div className="flex gap-4">
            {content.footer.legal.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
