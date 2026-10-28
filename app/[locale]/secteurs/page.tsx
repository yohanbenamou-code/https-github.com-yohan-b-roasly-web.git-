import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getContent } from "@/lib/content";
import { sectorEntries } from "@/lib/content/sectors";
import { siteUrl, assertValidLocale } from "@/lib/i18n";
import Header from "@/components/Header";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

const path = "secteurs";
const title = "Marketing digital par secteur en Israël | Roasly";
const description =
  "Marketing digital par secteur : avocats, immobilier, dentistes, traiteurs, génération de leads et énergie pour la France. Choisissez votre métier.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  assertValidLocale(locale);
  if (locale !== "fr") return {};

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/${locale}/${path}` },
    openGraph: { title, description, url: `${siteUrl}/${locale}/${path}`, siteName: "Roasly", type: "website" },
  };
}

const principles = [
  {
    title: "Des mots-clés de votre métier",
    body: "Un avocat, un traiteur et un installateur solaire ne tapent pas les mêmes recherches. Chaque secteur a ses requêtes, sa saisonnalité et son niveau de concurrence.",
  },
  {
    title: "Un coût cible propre à chaque secteur",
    body: "Un lead juridique, un devis de traiteur et une demande de rendez-vous dentaire n'ont pas la même valeur. Nous fixons le coût cible avec vous, métier par métier.",
  },
  {
    title: "Des règles publicitaires respectées",
    body: "Santé, droit, énergie : chaque secteur a ses contraintes de plateforme ou de déontologie. Nous les connaissons et vous validez chaque message avant diffusion.",
  },
];

export default async function SecteursPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  assertValidLocale(locale);
  if (locale !== "fr") notFound();
  const content = getContent(locale);
  const pageUrl = `${siteUrl}/${locale}/${path}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      description,
      url: pageUrl,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: sectorEntries.map((sector, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: sector.name,
          url: `${siteUrl}/${locale}/${sector.href}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Roasly", item: `${siteUrl}/${locale}` },
        { "@type": "ListItem", position: 2, name: "Secteurs", item: pageUrl },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
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
          <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-28">
            <p className="font-mono text-xs uppercase tracking-kicker text-blue-soft">Secteurs</p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Marketing digital par secteur en Israël
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">
              Une campagne qui marche pour un cabinet d'avocats ne marche pas pour un traiteur. Roasly construit
              chaque système d'acquisition autour de votre métier : vos recherches, votre cycle de décision, vos
              règles publicitaires et votre marché, en Israël comme vers la France.
            </p>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <ul className="grid gap-5 md:grid-cols-2">
              {sectorEntries.map((sector) => {
                const proof = sector.caseId
                  ? content.caseStudies.items.find((item) => item.id === sector.caseId)?.metrics[0]
                  : undefined;
                return (
                  <li key={sector.href}>
                    <Link
                      href={`/${locale}/${sector.href}`}
                      className="group flex h-full flex-col rounded-card border border-ink/10 bg-paper-raised p-6 transition-colors hover:border-blue/40"
                    >
                      <p className="font-mono text-[11px] uppercase tracking-kicker text-ink/45">
                        {sector.market}
                      </p>
                      <h2 className="mt-2 font-display text-xl font-bold text-ink group-hover:text-blue">
                        {sector.name}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-ink/65">{sector.blurb}</p>
                      <div className="mt-5 flex items-center justify-between gap-4 pt-1">
                        {proof ? (
                          <p className="text-xs text-ink/55">
                            <span className="font-display text-base font-extrabold text-blue ltr-nums">
                              {proof.value}
                            </span>{" "}
                            {proof.label}
                          </p>
                        ) : (
                          <span />
                        )}
                        <svg
                          viewBox="0 0 20 20"
                          className="h-5 w-5 shrink-0 text-ink/30 transition-transform group-hover:translate-x-0.5 group-hover:text-blue rtl:rotate-180"
                          fill="none"
                          aria-hidden
                        >
                          <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="bg-paper-raised">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="font-display text-2xl font-bold">Pourquoi une approche par secteur</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {principles.map((item) => (
                <div key={item.title} className="rounded-card border border-ink/10 bg-paper p-6">
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCta
          content={{
            ...content,
            finalCta: { ...content.finalCta, headline: "Votre métier n'est pas dans la liste ? Parlons-en" },
          }}
        />
      </main>
      <Footer locale={locale} content={content} />
    </>
  );
}
