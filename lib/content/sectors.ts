export type SectorEntry = {
  href: string;
  name: string;
  market: string;
  blurb: string;
  /** Case study whose lead figure is shown on the card. */
  caseId?: string;
};

export const sectorEntries: SectorEntry[] = [
  {
    href: "marketing-digital-avocats",
    name: "Avocats et cabinets juridiques",
    market: "Israël · France",
    blurb:
      "Des demandes de consultation qualifiées par spécialité, en français et en hébreu, avec des annonces sobres validées par vous.",
    caseId: "droit",
  },
  {
    href: "marketing-digital-immobilier",
    name: "Immobilier",
    market: "Israël · France",
    blurb:
      "Programmes neufs, agences et investisseurs : des leads acheteurs qualifiés, rappelés dans l'heure, en Israël comme depuis la France.",
    caseId: "immobilier",
  },
  {
    href: "marketing-digital-dentistes",
    name: "Cliniques dentaires",
    market: "Israël",
    blurb:
      "Des rendez-vous qui remplissent l'agenda, séparés par type de soin et par langue, avec rappels pour réduire les absences.",
    caseId: "clinique-dentaire",
  },
  {
    href: "marketing-digital-traiteurs",
    name: "Traiteurs et événementiel",
    market: "Israël",
    blurb:
      "Des demandes de devis avant chaque fête, mariage et événement, avec WhatsApp, certification casher et campagnes coupées quand le carnet est plein.",
  },
  {
    href: "generation-de-leads",
    name: "Génération de leads",
    market: "Israël · France · international",
    blurb:
      "Un système complet pour obtenir des leads qualifiés, de l'annonce au rendez-vous, avec le coût suivi jusqu'à la vente.",
    caseId: "maisons-de-retraite",
  },
  {
    href: "generation-de-leads-energie-france",
    name: "Énergie et rénovation, pour la France",
    market: "France",
    blurb:
      "Solaire, pompe à chaleur, isolation : des demandes de devis qualifiées pour des installateurs en France, pilotées depuis Israël.",
    caseId: "energie-renovation",
  },
];
