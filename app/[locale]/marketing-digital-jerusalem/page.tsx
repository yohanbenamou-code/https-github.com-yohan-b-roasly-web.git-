import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { marketingDigitalJerusalemContent } from "@/lib/content/marketingDigitalJerusalem";
import { siteUrl, assertValidLocale, type Locale } from "@/lib/i18n";
import ServiceLandingPage from "@/components/ServiceLandingPage";

const path = "marketing-digital-jerusalem";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const landing = marketingDigitalJerusalemContent[locale];

  return {
    title: landing.metaTitle,
    description: landing.metaDescription,
    alternates: { canonical: `${siteUrl}/${locale}/${path}` },
    openGraph: {
      title: landing.metaTitle,
      description: landing.metaDescription,
      url: `${siteUrl}/${locale}/${path}`,
      siteName: "Roasly",
      type: "website",
    },
  };
}

export default async function MarketingDigitalJerusalemPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const content = getContent(locale);
  const landing = marketingDigitalJerusalemContent[locale];

  return (
    <ServiceLandingPage
      locale={locale}
      content={content}
      landing={landing}
      city="Jerusalem"
      serviceType="Digital Marketing"
      currentPath={path}
    />
  );
}
