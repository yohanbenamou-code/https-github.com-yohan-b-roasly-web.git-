import type { Metadata } from "next";
import { Heebo, JetBrains_Mono, Sora } from "next/font/google";
import "../globals.css";
import { locales, localeTags, isRtl, siteUrl, assertValidLocale, type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/content";

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  variable: "--font-heebo",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const content = getContent(locale);

  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[localeTags[l]] = `${siteUrl}/${l}`;
  });
  languages["x-default"] = `${siteUrl}/${locales[0]}`;

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages,
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: `${siteUrl}/${locale}`,
      siteName: "Roasly",
      locale: localeTags[locale],
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const dir = isRtl(locale) ? "rtl" : "ltr";
  const content = getContent(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: "Roasly",
    url: siteUrl,
    telephone: "+972-58-741-8789",
    areaServed: [
      { "@type": "City", name: "Tel Aviv" },
      { "@type": "Country", name: "Israel" },
    ],
    availableLanguage: ["fr", "es", "he"],
    knowsAbout: ["Google Ads", "Meta Ads", "Bing Ads", "TikTok Ads", "Marketing digital", "Agence marketing digital Tel Aviv"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tel Aviv",
      addressCountry: "IL",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      reviewCount: content.reviews.items.length,
    },
    review: content.reviews.items.map((item) => ({
      "@type": "Review",
      author: { "@type": "Person", name: item.name },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: item.text,
    })),
  };

  return (
    <html lang={localeTags[locale]} dir={dir} className={`${heebo.variable} ${sora.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
