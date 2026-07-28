import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { googleAdsJerusalemContent } from "@/lib/content/googleAdsJerusalem";
import { siteUrl, assertValidLocale, type Locale } from "@/lib/i18n";
import ServiceLandingPage from "@/components/ServiceLandingPage";

const path = "google-ads-jerusalem";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const landing = googleAdsJerusalemContent[locale];

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

export default async function GoogleAdsJerusalemPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const content = getContent(locale);
  const landing = googleAdsJerusalemContent[locale];

  return (
    <ServiceLandingPage
      locale={locale}
      content={content}
      landing={landing}
      city="Jerusalem"
      serviceType="Google Ads Management"
      currentPath={path}
    />
  );
}
