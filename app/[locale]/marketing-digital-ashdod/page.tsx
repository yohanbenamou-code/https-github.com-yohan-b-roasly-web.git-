import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { marketingDigitalAshdodContent } from "@/lib/content/marketingDigitalAshdod";
import { siteUrl, assertValidLocale } from "@/lib/i18n";
import ServiceLandingPage from "@/components/ServiceLandingPage";

const path = "marketing-digital-ashdod";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const landing = marketingDigitalAshdodContent[locale];
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

export default async function MarketingDigitalAshdodPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const content = getContent(locale);
  const landing = marketingDigitalAshdodContent[locale];
  if (!landing) notFound();

  return (
    <ServiceLandingPage
      locale={locale}
      content={content}
      landing={landing}
      city="Ashdod"
      serviceType="Digital Marketing"
      currentPath={path}
    />
  );
}
