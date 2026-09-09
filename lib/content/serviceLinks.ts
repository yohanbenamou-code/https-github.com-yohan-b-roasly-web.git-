import type { Locale } from "@/lib/i18n";

export type ServiceLink = { label: string; href: string };

export const serviceLinks: Record<Locale, ServiceLink[]> = {
  fr: [
    { label: "Cas clients", href: "cas-clients" },
    { label: "Google Ads à Tel Aviv", href: "google-ads-tel-aviv" },
    { label: "Google Ads à Jérusalem", href: "google-ads-jerusalem" },
    { label: "Meta Ads à Tel Aviv", href: "meta-ads-tel-aviv" },
    { label: "Meta Ads à Jérusalem", href: "meta-ads-jerusalem" },
    { label: "Marketing digital à Tel Aviv", href: "marketing-digital-tel-aviv" },
    { label: "Marketing digital à Jérusalem", href: "marketing-digital-jerusalem" },
    { label: "Marketing digital pour avocats", href: "marketing-digital-avocats" },
    { label: "Marketing digital pour cliniques dentaires", href: "marketing-digital-dentistes" },
    { label: "Ressources", href: "ressources" },
  ],
  es: [
    { label: "Casos de clientes", href: "cas-clients" },
    { label: "Google Ads en Tel Aviv", href: "google-ads-tel-aviv" },
    { label: "Google Ads en Jerusalén", href: "google-ads-jerusalem" },
    { label: "Meta Ads en Tel Aviv", href: "meta-ads-tel-aviv" },
    { label: "Meta Ads en Jerusalén", href: "meta-ads-jerusalem" },
    { label: "Marketing digital en Tel Aviv", href: "marketing-digital-tel-aviv" },
    { label: "Marketing digital en Jerusalén", href: "marketing-digital-jerusalem" },
  ],
  he: [
    { label: "לקוחות שלנו", href: "cas-clients" },
    { label: "Google Ads בתל אביב", href: "google-ads-tel-aviv" },
    { label: "Google Ads בירושלים", href: "google-ads-jerusalem" },
    { label: "Meta Ads בתל אביב", href: "meta-ads-tel-aviv" },
    { label: "Meta Ads בירושלים", href: "meta-ads-jerusalem" },
    { label: "שיווק דיגיטלי בתל אביב", href: "marketing-digital-tel-aviv" },
    { label: "שיווק דיגיטלי בירושלים", href: "marketing-digital-jerusalem" },
  ],
};

export const relatedLabel: Record<Locale, string> = {
  fr: "Voir aussi",
  es: "Ver también",
  he: "ראו גם",
};
