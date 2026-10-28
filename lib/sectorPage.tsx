import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import type { LandingContent } from "@/lib/content/landingTypes";
import { siteUrl, assertValidLocale, type Locale } from "@/lib/i18n";
import ServiceLandingPage from "@/components/ServiceLandingPage";

type PageProps = { params: Promise<{ locale: string }> };

const sectorsHub = { name: "Secteurs", path: "secteurs" };

/** Route handlers for the French-only sector pages (they 404 in other locales). */
export function createSectorPage({
  path,
  content,
  area,
  areaType = "Country",
  serviceType,
}: {
  path: string;
  content: Partial<Record<Locale, LandingContent>>;
  area: string;
  areaType?: "City" | "Country";
  serviceType: string;
}) {
  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = (await params).locale;
    assertValidLocale(locale);
    const landing = content[locale];
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

  async function Page({ params }: PageProps) {
    const locale = (await params).locale;
    assertValidLocale(locale);
    const landing = content[locale];
    if (!landing) notFound();

    return (
      <ServiceLandingPage
        locale={locale}
        content={getContent(locale)}
        landing={landing}
        city={area}
        areaType={areaType}
        serviceType={serviceType}
        currentPath={path}
        parent={sectorsHub}
      />
    );
  }

  return { generateMetadata, Page };
}
