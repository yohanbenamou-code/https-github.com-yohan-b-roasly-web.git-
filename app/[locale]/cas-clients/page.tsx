import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { siteUrl, localeTags, locales, assertValidLocale } from "@/lib/i18n";
import Header from "@/components/Header";
import CaseStudies from "@/components/CaseStudies";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

const path = "cas-clients";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const { caseStudies } = getContent(locale);

  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[localeTags[l]] = `${siteUrl}/${l}/${path}`;
  });

  return {
    title: caseStudies.metaTitle,
    description: caseStudies.metaDescription,
    alternates: { canonical: `${siteUrl}/${locale}/${path}`, languages },
    openGraph: {
      title: caseStudies.metaTitle,
      description: caseStudies.metaDescription,
      url: `${siteUrl}/${locale}/${path}`,
      siteName: "Roasly",
      type: "website",
    },
  };
}

export default async function CasClientsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const content = getContent(locale);
  const { caseStudies } = content;

  return (
    <>
      <Header locale={locale} content={content} />
      <main>
        <section className="bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-6 pb-14 pt-16 md:pb-20 md:pt-24">
            <p className="font-mono text-xs uppercase tracking-kicker text-blue-soft">
              {caseStudies.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {caseStudies.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/65">
              {caseStudies.intro}
            </p>

            <dl className="mt-14 grid gap-x-10 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-3">
              {caseStudies.overview.map((o) => (
                <div key={o.label}>
                  <dd className="font-display text-4xl font-extrabold leading-none tracking-tight text-paper ltr-nums sm:text-5xl">
                    {o.value}
                  </dd>
                  <dt className="mt-3 max-w-[22ch] text-sm leading-snug text-paper/55">{o.label}</dt>
                </div>
              ))}
            </dl>

            <nav aria-label={caseStudies.indexLabel} className="mt-12">
              <p className="font-mono text-[11px] uppercase tracking-kicker text-paper/35">
                {caseStudies.indexLabel}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {caseStudies.items.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-paper/80 transition-colors hover:border-blue-soft hover:text-paper"
                    >
                      <span className="font-mono text-[11px] text-paper/35 ltr-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.sector.split(",")[0]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <CaseStudies content={content} />

        <FinalCta content={content} />
      </main>
      <Footer locale={locale} content={content} />
    </>
  );
}
