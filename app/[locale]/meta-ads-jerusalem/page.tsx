import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { metaAdsJerusalemContent } from "@/lib/content/metaAdsJerusalem";
import { siteUrl, assertValidLocale, type Locale } from "@/lib/i18n";
import ServiceLandingPage from "@/components/ServiceLandingPage";

const path = "meta-ads-jerusalem";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const landing = metaAdsJerusalemContent[locale];

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

export default async function MetaAdsJerusalemPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const content = getContent(locale);
  const landing = metaAdsJerusalemContent[locale];

  return (
    <ServiceLandingPage
      locale={locale}
      content={content}
      landing={landing}
      city="Jerusalem"
      serviceType="Meta Ads Management"
      currentPath={path}
    />
  );
}
