import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { marketingDigitalAvocatsContent } from "@/lib/content/marketingDigitalAvocats";
import { siteUrl, assertValidLocale } from "@/lib/i18n";
import ServiceLandingPage from "@/components/ServiceLandingPage";

const path = "marketing-digital-avocats";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const landing = marketingDigitalAvocatsContent[locale];
  if (!landing) return {};

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

export default async function MarketingDigitalAvocatsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const content = getContent(locale);
  const landing = marketingDigitalAvocatsContent[locale];
  if (!landing) notFound();

  return (
    <ServiceLandingPage
      locale={locale}
      content={content}
      landing={landing}
      city="Israël"
      areaType="Country"
      serviceType="Digital Marketing for Law Firms"
      currentPath={path}
    />
  );
}
