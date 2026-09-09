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
        <section className="relative overflow-hidden bg-ink text-paper">
          <div
            className="pointer-events-none absolute inset-0 opacity-40 [background-size:200%_200%] animate-gradientShift"
            style={{
              background:
                "radial-gradient(55% 55% at 12% 12%, rgba(59,110,246,0.5) 0%, transparent 60%), radial-gradient(45% 45% at 90% 25%, rgba(95,227,255,0.25) 0%, transparent 55%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-28">
            <p className="font-mono text-xs uppercase tracking-kicker text-blue-soft">
              {caseStudies.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              {caseStudies.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">
              {caseStudies.intro}
            </p>
          </div>
        </section>

        <CaseStudies content={content} heading="none" />

        <FinalCta content={content} />
      </main>
      <Footer locale={locale} content={content} />
    </>
  );
}
