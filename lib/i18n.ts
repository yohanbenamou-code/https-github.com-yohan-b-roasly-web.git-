import { notFound } from "next/navigation";

export const locales = ["fr", "es", "he"] as const;
export type Locale = (typeof locales)[number];

export function assertValidLocale(locale: string): asserts locale is Locale {
  if (!(locales as readonly string[]).includes(locale)) {
    notFound();
  }
}

export const defaultLocale: Locale = "fr";

export const rtlLocales: Locale[] = ["he"];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  es: "Español",
  he: "עברית",
};

// Used for <html lang>
export const localeTags: Record<Locale, string> = {
  fr: "fr-IL",
  es: "es-IL",
  he: "he-IL",
};

export const siteUrl = "https://roaslyads.co.il";
