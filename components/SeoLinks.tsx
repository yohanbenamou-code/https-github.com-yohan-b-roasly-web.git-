import Link from "next/link";
import type { SiteContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n";
import { serviceLinks } from "@/lib/content/serviceLinks";
import Reveal from "./Reveal";

export default function SeoLinks({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  const links = serviceLinks[locale].filter((l) => l.href !== "ressources");
  if (links.length === 0) return null;

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-kicker text-blue">
            {content.seoLinks.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-[2rem]">
            {content.seoLinks.headline}
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, i) => (
            <Reveal key={link.href} as="li" delay={i * 40}>
              <Link
                href={`/${locale}/${link.href}`}
                className="group flex items-center justify-between gap-3 rounded-card border border-line bg-paper-raised px-5 py-4 text-sm font-medium text-ink/75 transition-colors hover:border-blue/30 hover:text-ink"
              >
                {link.label}
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4 shrink-0 text-ink/30 transition-transform group-hover:translate-x-0.5 group-hover:text-blue rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                  fill="none"
                >
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
