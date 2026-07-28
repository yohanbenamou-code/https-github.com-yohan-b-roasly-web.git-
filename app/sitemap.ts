import type { MetadataRoute } from "next";
import { locales, localeTags, siteUrl, type Locale } from "@/lib/i18n";
import { resourceArticles } from "@/lib/content/resources";

const landingPaths = [
  "google-ads-tel-aviv",
  "google-ads-jerusalem",
  "meta-ads-tel-aviv",
  "meta-ads-jerusalem",
  "marketing-digital-tel-aviv",
  "marketing-digital-jerusalem",
];

// French-only pages: no es/he content exists for these yet.
const frOnlyLandingPaths = [
  "marketing-digital-avocats",
  "marketing-digital-dentistes",
  "ressources",
  ...resourceArticles.map((a) => `ressources/${a.slug}`),
];

function buildEntries(
  path: string,
  priority: number,
  pathLocales: readonly Locale[] = locales
): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  pathLocales.forEach((l) => {
    languages[localeTags[l]] = path ? `${siteUrl}/${l}/${path}` : `${siteUrl}/${l}`;
  });

  return pathLocales.map((locale) => ({
    url: path ? `${siteUrl}/${locale}/${path}` : `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: path ? "monthly" : "weekly",
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homeEntries = buildEntries("", 1);
  const landingEntries = landingPaths.flatMap((path) => buildEntries(path, 0.8));
  const frOnlyEntries = frOnlyLandingPaths.flatMap((path) => buildEntries(path, 0.7, ["fr"]));

  return [...homeEntries, ...landingEntries, ...frOnlyEntries];
}
