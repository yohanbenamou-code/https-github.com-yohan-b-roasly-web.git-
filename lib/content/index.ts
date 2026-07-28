import { es } from "./es";
import { fr } from "./fr";
import { he } from "./he";
import type { SiteContent } from "./types";
import type { Locale } from "@/lib/i18n";

export const contentByLocale: Record<Locale, SiteContent> = { fr, es, he };

export function getContent(locale: Locale): SiteContent {
  return contentByLocale[locale];
}

export const contact = {
  email: "yohan.b@roaslyads.com",
  whatsapp: "058 741 87 89",
  whatsappHref: "https://wa.me/972587418789",
};
