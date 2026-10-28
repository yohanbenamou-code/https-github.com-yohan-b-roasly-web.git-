import Link from "next/link";
import type { SiteContent } from "@/lib/content/types";
import type { LandingContent } from "@/lib/content/landingTypes";
import { siteUrl, type Locale } from "@/lib/i18n";
import { serviceLinks, relatedLabel, groupServiceLinks } from "@/lib/content/serviceLinks";

import Header from "@/components/Header";
import Stats from "@/components/Stats";
import Estimator from "@/components/Estimator";
import LandingFaq from "@/components/LandingFaq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export function serviceJsonLd({
  landing,
  city,
  areaType = "City",
  serviceType,
  siteUrl,
  url,
}: {
  landing: LandingContent;
  city: string;
  areaType?: "City" | "Country";
  serviceType: string;
  siteUrl: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: landing.h1,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": areaType, name: city },
    serviceType,
    description: landing.metaDescription,
    ...(url ? { url } : {}),
    ...(landing.audience ? { audience: { "@type": "Audience", audienceType: landing.audience } } : {}),
  };
}

function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
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
  parent,
}: {
  locale: Locale;
  content: SiteContent;
  landing: LandingContent;
  city: string;
  areaType?: "City" | "Country";
  serviceType: string;
  currentPath: string;
  parent?: { name: string; path: string };
}) {
  const pageUrl = `${siteUrl}/${locale}/${currentPath}`;
  const jsonLd = serviceJsonLd({ landing, city, areaType, serviceType, siteUrl, url: pageUrl });
  const breadcrumb = breadcrumbJsonLd([
    { name: "Roasly", url: `${siteUrl}/${locale}` },
    ...(parent ? [{ name: parent.name, url: `${siteUrl}/${locale}/${parent.path}` }] : []),
    { name: landing.kicker, url: pageUrl },
  ]);
  const relatedGroups = groupServiceLinks(
    locale,
    serviceLinks[locale].filter((link) => link.href !== currentPath)
  );
  const cases = (landing.caseStudyIds ?? [])
    .map((id) => content.caseStudies.items.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
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
              {parent && (
                <>
                  <Link
                    href={`/${locale}/${parent.path}`}
                    className="underline-offset-4 transition-colors hover:text-paper hover:underline"
                  >
                    {parent.name}
                  </Link>
                  <span className="mx-2 text-paper/30">/</span>
                </>
              )}
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

        {landing.searches && landing.searches.length > 0 && (
          <section className="bg-paper-raised">
            <div className="mx-auto max-w-3xl px-6 py-16">
              <h2 className="font-display text-2xl font-bold">{landing.searchesLabel}</h2>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {landing.searches.map((query) => (
                  <li
                    key={query}
                    className="flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper py-2 pe-4 ps-3.5 text-sm text-ink/75 shadow-[0_1px_0_rgba(10,14,26,0.04)]"
                  >
                    <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-blue" fill="none" aria-hidden>
                      <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.7" />
                      <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                    {query}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {landing.steps && landing.steps.length > 0 && (
          <section className="bg-paper">
            <div className="mx-auto max-w-3xl px-6 py-20">
              <h2 className="font-display text-2xl font-bold">{landing.stepsLabel}</h2>
              <ol className="mt-8 space-y-6">
                {landing.steps.map((step, i) => (
                  <li
                    key={step.title}
                    className="flex items-start gap-5 rounded-card border border-ink/10 bg-paper-raised p-6"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-bright to-blue-soft font-mono text-sm font-bold text-white ltr-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {cases.length > 0 && (
          <section className="bg-ink text-paper">
            <div className="mx-auto max-w-4xl px-6 py-20">
              <h2 className="font-display text-2xl font-bold">{landing.caseLabel}</h2>
              <div className="mt-8 space-y-8">
                {cases.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-xl2 border border-white/10 bg-white/[0.03] p-6 sm:p-8"
                  >
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-kicker text-paper/50">
                      <span>{item.sector}</span>
                      {item.market && <span className="text-paper/30">· {item.market}</span>}
                      <span className="text-paper/30">· {item.timeframe}</span>
                      {item.platforms.map((p) => (
                        <span
                          key={p}
                          className="rounded-full border border-white/15 px-2.5 py-0.5 normal-case tracking-normal text-paper/70"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 font-display text-xl font-bold leading-snug sm:text-2xl">
                      {item.headline}
                    </p>
                    <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {item.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-card border border-white/10 bg-white/[0.04] p-4"
                        >
                          <dt className="sr-only">{metric.label}</dt>
                          <dd className="font-display text-2xl font-extrabold ltr-nums text-gradient">
                            {metric.value}
                          </dd>
                          <p className="mt-1 text-xs leading-snug text-paper/55">{metric.label}</p>
                        </div>
                      ))}
                    </dl>
                    <Link
                      href={`/${locale}/cas-clients#${item.id}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-soft transition-colors hover:text-paper"
                    >
                      {content.nav.links.find((l) => l.href === "/cas-clients")?.label}
                      <svg viewBox="0 0 20 20" className="h-4 w-4 rtl:rotate-180" fill="none" aria-hidden>
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </article>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-paper/40">
                {content.caseStudies.disclaimer}
              </p>
            </div>
          </section>
        )}

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

        <Stats content={content} />

        {landing.showEstimator !== false && <Estimator content={content} locale={locale} />}

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
            </ul>
            {relatedGroups.map((group) => (
              <div key={group.group} className="mt-6">
                <p className="text-xs font-semibold text-ink/45">{group.label}</p>
                <ul className="mt-2.5 flex flex-wrap gap-2.5">
                  {group.links.map((link) => (
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
            ))}
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
