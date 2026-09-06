import Link from "next/link";
import type { SiteContent } from "@/lib/content/types";
import type { LandingContent } from "@/lib/content/landingTypes";
import { siteUrl, type Locale } from "@/lib/i18n";
import { serviceLinks, relatedLabel } from "@/lib/content/serviceLinks";

import Header from "@/components/Header";
import LandingFaq from "@/components/LandingFaq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export function serviceJsonLd({
  landing,
  city,
  areaType = "City",
  serviceType,
  siteUrl,
}: {
  landing: LandingContent;
  city: string;
  areaType?: "City" | "Country";
  serviceType: string;
  siteUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: landing.h1,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": areaType, name: city },
    serviceType,
    description: landing.metaDescription,
  };
}

export default function ServiceLandingPage({
  locale,
  content,
  landing,
  city,
  areaType = "City",
  serviceType,
  currentPath,
}: {
  locale: Locale;
  content: SiteContent;
  landing: LandingContent;
  city: string;
  areaType?: "City" | "Country";
  serviceType: string;
  currentPath: string;
}) {
  const jsonLd = serviceJsonLd({ landing, city, areaType, serviceType, siteUrl });
  const related = serviceLinks[locale].filter((link) => link.href !== currentPath);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale} content={content} />
      <main>
        <section className="relative overflow-hidden bg-ink text-paper">
          <div
            className="pointer-events-none absolute inset-0 opacity-40 [background-size:200%_200%] animate-gradientShift"
            style={{
              background:
                "radial-gradient(55% 55% at 10% 10%, rgba(59,110,246,0.5) 0%, transparent 60%), radial-gradient(45% 45% at 90% 25%, rgba(95,227,255,0.25) 0%, transparent 55%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-32">
            <p className="font-mono text-xs uppercase tracking-kicker text-blue-soft">
              {landing.kicker}
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              {landing.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">
              {landing.intro}
            </p>
            <a
              href="#contact"
              className="mt-9 inline-block rounded-full bg-gradient-to-r from-blue-bright to-blue-soft px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_-14px_rgba(59,110,246,0.75)] transition-transform hover:scale-[1.03]"
            >
              {content.hero.cta}
            </a>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="space-y-14">
              {landing.sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-display text-2xl font-bold">{section.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper-raised">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <ul className="grid gap-4 sm:grid-cols-2">
              {landing.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 rounded-card border border-ink/10 bg-paper p-5"
                >
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-signal" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M6 10.5l2.5 2.5L14 7.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm leading-relaxed text-ink/80">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <LandingFaq items={landing.faq} />

        <section className="bg-paper-raised">
          <div className="mx-auto max-w-3xl px-6 py-12">
            <p className="font-mono text-xs uppercase tracking-kicker text-ink/50">
              {relatedLabel[locale]}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              <li key="home">
                <Link
                  href={`/${locale}`}
                  className="rounded-full border border-blue/30 bg-paper px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:border-blue hover:text-ink"
                >
                  {content.hero.h1}
                </Link>
              </li>
              {related.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}/${link.href}`}
                    className="rounded-full border border-ink/15 bg-paper px-4 py-2 text-sm text-ink/70 transition-colors hover:border-ink/30 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FinalCta
          content={{ ...content, finalCta: { ...content.finalCta, headline: landing.ctaHeadline } }}
        />
      </main>
      <Footer locale={locale} content={content} />
    </>
  );
}
