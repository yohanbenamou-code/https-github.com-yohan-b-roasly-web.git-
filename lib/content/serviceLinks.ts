import type { Locale } from "@/lib/i18n";

export type ServiceLinkGroup = "sector" | "city" | "info";

export type ServiceLink = { label: string; href: string; group: ServiceLinkGroup };

export const serviceLinks: Record<Locale, ServiceLink[]> = {
  fr: [
    { label: "Marketing digital pour avocats", href: "marketing-digital-avocats", group: "sector" },
    { label: "Marketing digital immobilier", href: "marketing-digital-immobilier", group: "sector" },
    { label: "Marketing digital pour cliniques dentaires", href: "marketing-digital-dentistes", group: "sector" },
    { label: "Marketing digital pour traiteurs", href: "marketing-digital-traiteurs", group: "sector" },
    { label: "Génération de leads", href: "generation-de-leads", group: "sector" },
    { label: "Génération de leads énergie (France)", href: "generation-de-leads-energie-france", group: "sector" },
    { label: "Google Ads à Tel Aviv", href: "google-ads-tel-aviv", group: "city" },
    { label: "Google Ads à Jérusalem", href: "google-ads-jerusalem", group: "city" },
    { label: "Meta Ads à Tel Aviv", href: "meta-ads-tel-aviv", group: "city" },
    { label: "Meta Ads à Jérusalem", href: "meta-ads-jerusalem", group: "city" },
    { label: "Marketing digital à Tel Aviv", href: "marketing-digital-tel-aviv", group: "city" },
    { label: "Marketing digital à Jérusalem", href: "marketing-digital-jerusalem", group: "city" },
    { label: "Marketing digital à Netanya", href: "marketing-digital-netanya", group: "city" },
    { label: "Marketing digital à Haïfa", href: "marketing-digital-haifa", group: "city" },
    { label: "Marketing digital à Ashdod", href: "marketing-digital-ashdod", group: "city" },
    { label: "Cas clients", href: "cas-clients", group: "info" },
    { label: "Tous les secteurs", href: "secteurs", group: "info" },
    { label: "Ressources", href: "ressources", group: "info" },
  ],
  es: [
    { label: "Google Ads en Tel Aviv", href: "google-ads-tel-aviv", group: "city" },
    { label: "Google Ads en Jerusalén", href: "google-ads-jerusalem", group: "city" },
    { label: "Meta Ads en Tel Aviv", href: "meta-ads-tel-aviv", group: "city" },
    { label: "Meta Ads en Jerusalén", href: "meta-ads-jerusalem", group: "city" },
    { label: "Marketing digital en Tel Aviv", href: "marketing-digital-tel-aviv", group: "city" },
    { label: "Marketing digital en Jerusalén", href: "marketing-digital-jerusalem", group: "city" },
    { label: "Casos de clientes", href: "cas-clients", group: "info" },
  ],
  he: [
    { label: "Google Ads בתל אביב", href: "google-ads-tel-aviv", group: "city" },
    { label: "Google Ads בירושלים", href: "google-ads-jerusalem", group: "city" },
    { label: "Meta Ads בתל אביב", href: "meta-ads-tel-aviv", group: "city" },
    { label: "Meta Ads בירושלים", href: "meta-ads-jerusalem", group: "city" },
    { label: "שיווק דיגיטלי בתל אביב", href: "marketing-digital-tel-aviv", group: "city" },
    { label: "שיווק דיגיטלי בירושלים", href: "marketing-digital-jerusalem", group: "city" },
    { label: "לקוחות שלנו", href: "cas-clients", group: "info" },
  ],
};

export const relatedLabel: Record<Locale, string> = {
  fr: "Voir aussi",
  es: "Ver también",
  he: "ראו גם",
};

const groupOrder: ServiceLinkGroup[] = ["sector", "city", "info"];

const groupLabels: Record<Locale, Record<ServiceLinkGroup, string>> = {
  fr: { sector: "Par secteur", city: "Par ville et par service", info: "En savoir plus" },
  es: { sector: "Por sector", city: "Por ciudad y servicio", info: "Más información" },
  he: { sector: "לפי תחום", city: "לפי עיר ושירות", info: "מידע נוסף" },
};

export function groupServiceLinks(
  locale: Locale,
  links: ServiceLink[] = serviceLinks[locale]
): { group: ServiceLinkGroup; label: string; links: ServiceLink[] }[] {
  return groupOrder
    .map((group) => ({
      group,
      label: groupLabels[locale][group],
      links: links.filter((link) => link.group === group),
    }))
    .filter((entry) => entry.links.length > 0);
}
