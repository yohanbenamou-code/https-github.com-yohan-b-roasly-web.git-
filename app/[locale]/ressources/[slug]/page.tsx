import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getContent } from "@/lib/content";
import { resourceArticles } from "@/lib/content/resources";
import { siteUrl, assertValidLocale } from "@/lib/i18n";
import Header from "@/components/Header";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }));
}

function getArticle(slug: string) {
  return resourceArticles.find((a) => a.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  assertValidLocale(locale);
  if (locale !== "fr") return {};
  const article = getArticle(slug);
  if (!article) return {};

  const url = `${siteUrl}/${locale}/ressources/${slug}`;
  return {
    title: `${article.title} | Roasly`,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.metaDescription, url, siteName: "Roasly", type: "article" },
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  assertValidLocale(locale);
  if (locale !== "fr") notFound();
  const article = getArticle(slug);
  if (!article) notFound();

  const content = getContent(locale);
  const url = `${siteUrl}/${locale}/ressources/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: url,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header locale={locale} content={content} />
      <main>
        <section className="relative overflow-hidden bg-ink text-paper">
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              background:
                "radial-gradient(circle at 10% 10%, #2F9E6E 0%, transparent 40%), radial-gradient(circle at 90% 30%, #E8A33D 0%, transparent 35%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-28">
            <Link href={`/${locale}/ressources`} className="font-mono text-xs uppercase tracking-kicker text-amber hover:underline">
              Ressources
            </Link>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">{article.intro}</p>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <div className="space-y-12">
              {article.body.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-display text-2xl font-bold">{section.heading}</h2>
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i} className="mt-3 text-base leading-relaxed text-ink/70">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCta content={content} />
      </main>
      <Footer locale={locale} content={content} />
    </>
  );
}
