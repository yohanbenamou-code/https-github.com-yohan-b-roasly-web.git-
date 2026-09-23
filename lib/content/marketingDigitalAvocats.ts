import type { Locale } from "@/lib/i18n";
import type { LandingContent } from "./landingTypes";
export type { LandingContent };

const fr: LandingContent = {
  metaTitle: "Marketing Digital pour Cabinets d'Avocats en Israël | Roasly",
  metaDescription:
    "Système d'acquisition de clients pour cabinets d'avocats en Israël : Google Ads, Meta Ads, landing page et CRM connectés. Diagnostic gratuit, sans engagement long terme.",
  kicker: "Marketing digital pour avocats",
  h1: "Marketing digital pour cabinets d'avocats en Israël",
  intro:
    "Roasly construit un système d'acquisition de clients pour les cabinets d'avocats francophones en Israël : landing page, tracking, CRM et campagnes Google Ads et Meta Ads connectés, pensés pour un secteur où la confiance se gagne avant le premier rendez-vous.",
  sections: [
    {
      title: "Pourquoi un système dédié au secteur juridique",
      body: "Un cabinet d'avocats ne se vend pas comme un e-commerce : le prospect compare, hésite, cherche des preuves de sérieux avant de prendre contact. Les campagnes et la landing page sont structurées pour répondre à cette hésitation, avec un message clair sur votre domaine de pratique et votre zone d'intervention.",
    },
    {
      title: "Ce qu'on met en place",
      body: "Landing page orientée prise de rendez-vous, tracking des appels et des formulaires relié à votre CRM, campagnes Google Ads sur les recherches à forte intention (droit du travail, immobilier, affaires, selon votre spécialité) et Meta Ads pour la notoriété locale.",
    },
    {
      title: "Des résultats vérifiables, pas des promesses",
      body: "Plutôt qu'un témoignage isolé, un cas concret d'un cabinet d'avocats accompagné par Roasly est détaillé chiffres à l'appui sur notre page Cas clients : volume de demandes, coût par contact et canaux utilisés. Les chiffres sont réels, arrondis et présentés avec leur contexte, pas une citation flatteuse sans preuve derrière.",
    },
    {
      title: "Cibler par langue et par zone d'intervention",
      body: "Un cabinet d'avocats en Israël sert souvent une clientèle francophone qui cherche en français, en plus d'une clientèle hébréophone. Nous séparons les campagnes par langue pour toucher les deux avec un message adapté, et ajustons la zone géographique selon que votre cabinet intervient localement ou dans tout le pays.",
    },
    {
      title: "Transparence sur le budget",
      body: "Vous voyez exactement combien coûte chaque clic et chaque prise de contact, via un dashboard connecté directement à vos comptes publicitaires. Le budget se fixe selon vos objectifs, pas selon un forfait générique.",
    },
    {
      title: "Quels résultats attendre, et en combien de temps",
      body: "Les premières semaines servent à collecter des données réelles sur les recherches et les audiences qui convertissent. La baisse du coût par contact se joue en général entre la 4ᵉ et la 8ᵉ semaine, une fois les enchères et les mots-clés négatifs ajustés.",
    },
  ],
  bullets: [
    "Landing page orientée prise de rendez-vous, pas un site vitrine générique",
    "Tracking des appels et formulaires relié à votre CRM",
    "Compte publicitaire à votre nom, vous en restez propriétaire",
    "Campagnes séparées par langue, français et hébreu",
    "Suivi hebdomadaire des campagnes, pas un bilan trimestriel",
    "Sans engagement long terme",
  ],
  ctaHeadline: "Parlons de l'acquisition de clients pour votre cabinet",
  faq: [
    {
      question: "La publicité en ligne est-elle adaptée à un cabinet d'avocats ?",
      answer:
        "Oui, à condition que le message et la landing page soient adaptés à un parcours de décision plus long qu'un achat classique : preuve de sérieux, clarté sur le domaine de pratique, prise de rendez-vous simple.",
    },
    {
      question: "Combien coûte une campagne pour un cabinet d'avocats en Israël ?",
      answer:
        "Le coût par clic est en général plus élevé sur les mots-clés juridiques que sur d'autres secteurs. Le budget se fixe avec vous selon vos objectifs de prises de contact, discuté lors du diagnostic gratuit.",
    },
    {
      question: "Gérez-vous aussi la confidentialité des données de mes prospects ?",
      answer:
        "Le CRM et le tracking sont configurés à votre nom et sous votre contrôle. Vous restez propriétaire de vos données à tout moment, y compris si vous arrêtez de travailler avec nous.",
    },
    {
      question: "Mon cabinet intervient dans plusieurs villes, pas seulement une. C'est gérable ?",
      answer:
        "Oui. On structure les campagnes selon votre zone d'intervention réelle, qu'elle soit locale ou nationale, plutôt que de forcer un ciblage par ville unique qui ne correspondrait pas à votre activité.",
    },
  ],
};

export const marketingDigitalAvocatsContent: Partial<Record<Locale, LandingContent>> = { fr };
