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
    metadataBase: new URL(siteUrl),
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
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#organization`,
        name: "Roasly",
        alternateName: "Roasly Ads",
        description: content.meta.description,
        url: `${siteUrl}/${locale}`,
        image: `${siteUrl}/${locale}/opengraph-image`,
        logo: `${siteUrl}/${locale}/icon`,
        telephone: "+972-58-741-8789",
        email: "yohan.b@roaslyads.com",
        priceRange: "$$",
        areaServed: [
          { "@type": "City", name: "Tel Aviv" },
          { "@type": "City", name: "Jerusalem" },
          { "@type": "Country", name: "Israel" },
        ],
        serviceType: [
          "Agence de marketing digital",
          "Google Ads",
          "Meta Ads",
          "Bing Ads",
          "TikTok Ads",
        ],
        knowsLanguage: ["fr", "es", "he"],
        knowsAbout: [
          "Marketing digital",
          "Agence marketing digital Tel Aviv",
          "Agence marketing digital Israël",
          "Google Ads",
          "Meta Ads",
          "Bing Ads",
          "TikTok Ads",
          "Acquisition de leads",
        ],
        founder: {
          "@type": "Person",
          name: "Yohan Benamou",
          jobTitle: content.team.members[0]?.role ?? "Fondateur",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tel Aviv",
          addressCountry: "IL",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+972-58-741-8789",
          email: "yohan.b@roaslyads.com",
          contactType: "sales",
          areaServed: "IL",
          availableLanguage: ["French", "Spanish", "Hebrew"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Roasly",
        inLanguage: localeTags[locale],
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
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
