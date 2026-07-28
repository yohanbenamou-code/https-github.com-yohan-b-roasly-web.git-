import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getContent } from "@/lib/content";
import { resourceArticles } from "@/lib/content/resources";
import { siteUrl, assertValidLocale } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const path = "ressources";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  assertValidLocale(locale);
  if (locale !== "fr") return {};

  const title = "Ressources | Publicité en ligne en Israël | Roasly";
  const description =
    "Guides pratiques sur la publicité en ligne pour entrepreneurs francophones en Israël : budget, délais, choix d'un prestataire.";

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/${locale}/${path}` },
    openGraph: { title, description, url: `${siteUrl}/${locale}/${path}`, siteName: "Roasly", type: "website" },
  };
}

export default async function RessourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  assertValidLocale(locale);
  if (locale !== "fr") notFound();
  const content = getContent(locale);

  return (
    <>
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
            <p className="font-mono text-xs uppercase tracking-kicker text-amber">Ressources</p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
              Publicité en ligne en Israël : guides pratiques
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">
              Des réponses concrètes aux questions que se posent les entrepreneurs francophones en Israël avant de
              lancer ou de reprendre leur publicité en ligne.
            </p>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <ul className="space-y-6">
              {resourceArticles.map((article) => (
                <li key={article.slug} className="rounded-card border border-ink/10 bg-paper-raised p-6">
                  <Link href={`/${locale}/${path}/${article.slug}`} className="group">
                    <h2 className="font-display text-xl font-bold text-ink group-hover:text-signal">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{article.metaDescription}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer locale={locale} content={content} />
    </>
  );
}
