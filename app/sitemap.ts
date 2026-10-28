import type { MetadataRoute } from "next";
import { locales, localeTags, siteUrl, type Locale } from "@/lib/i18n";
import { resourceArticles } from "@/lib/content/resources";

const landingPaths = [
  "cas-clients",
  "google-ads-tel-aviv",
  "google-ads-jerusalem",
  "meta-ads-tel-aviv",
  "meta-ads-jerusalem",
  "marketing-digital-tel-aviv",
  "marketing-digital-jerusalem",
];

// French-only sector pages and their hub: they carry the sector-level queries, so a higher priority.
const frSectorPaths = [
  "secteurs",
  "marketing-digital-avocats",
  "marketing-digital-immobilier",
  "marketing-digital-dentistes",
  "marketing-digital-traiteurs",
  "generation-de-leads",
  "generation-de-leads-energie-france",
];

// French-only pages: no es/he content exists for these yet.
const frOnlyLandingPaths = [
  "marketing-digital-netanya",
  "marketing-digital-haifa",
  "marketing-digital-ashdod",
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
  const frSectorEntries = frSectorPaths.flatMap((path) => buildEntries(path, 0.8, ["fr"]));
  const frOnlyEntries = frOnlyLandingPaths.flatMap((path) => buildEntries(path, 0.7, ["fr"]));

  return [...homeEntries, ...landingEntries, ...frSectorEntries, ...frOnlyEntries];
}
