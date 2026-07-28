import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { metaAdsTelAvivContent } from "@/lib/content/metaAdsTelAviv";
import { siteUrl, assertValidLocale, type Locale } from "@/lib/i18n";
import ServiceLandingPage from "@/components/ServiceLandingPage";

const path = "meta-ads-tel-aviv";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const landing = metaAdsTelAvivContent[locale];

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

export default async function MetaAdsTelAvivPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const content = getContent(locale);
  const landing = metaAdsTelAvivContent[locale];

  return (
    <ServiceLandingPage
      locale={locale}
      content={content}
      landing={landing}
      city="Tel Aviv"
      serviceType="Meta Ads Management"
      currentPath={path}
    />
  );
}
