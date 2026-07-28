import type { Locale } from "@/lib/i18n";
import type { LandingContent } from "./landingTypes";
export type { LandingContent };

const fr: LandingContent = {
  metaTitle: "Marketing Digital pour Cliniques Dentaires en Israël | Roasly",
  metaDescription:
    "Système d'acquisition de patients pour cliniques dentaires en Israël : Google Ads, Meta Ads, landing page et CRM connectés. Diagnostic gratuit, sans engagement long terme.",
  kicker: "Marketing digital pour cliniques dentaires",
  h1: "Marketing digital pour cliniques dentaires en Israël",
  intro:
    "Roasly construit un système d'acquisition de patients pour les cliniques dentaires francophones en Israël : landing page, tracking, CRM et campagnes Google Ads et Meta Ads connectés, pour remplir l'agenda avec des rendez-vous qualifiés plutôt que des clics isolés.",
  sections: [
    {
      title: "Pourquoi un système dédié au secteur dentaire",
      body: "Un patient qui cherche un dentiste compare rapidement plusieurs cliniques et choisit souvent celle qui répond le plus vite et le plus clairement. Les campagnes et la landing page sont structurées autour de la prise de rendez-vous immédiate, avec vos soins et votre localisation mis en avant.",
    },
    {
      title: "Ce qu'on met en place",
      body: "Landing page orientée prise de rendez-vous, tracking des appels et des formulaires relié à votre CRM, campagnes Google Ads sur les recherches locales à forte intention (urgences, implants, orthodontie selon vos soins) et Meta Ads pour la notoriété autour de votre clinique.",
    },
    {
      title: "Ce que dit une cliente du secteur",
      body: "« On avait déjà travaillé avec deux agences avant. Ici, on a un vrai système : landing page, CRM, campagnes, tout connecté. Le coût par lead a baissé de moitié en deux mois. » — Sarah Lévy-Azoulay, clinique dentaire à Netanya, cliente Roasly.",
    },
    {
      title: "Transparence sur le budget",
      body: "Vous voyez exactement combien coûte chaque clic et chaque prise de rendez-vous, via un dashboard connecté directement à vos comptes publicitaires. Le budget se fixe selon vos objectifs, pas selon un forfait générique.",
    },
    {
      title: "Quels résultats attendre, et en combien de temps",
      body: "Les premières semaines servent à collecter des données réelles sur les recherches et les audiences qui convertissent. La baisse du coût par rendez-vous se joue en général entre la 4ᵉ et la 8ᵉ semaine, une fois les enchères et les mots-clés négatifs ajustés.",
    },
  ],
  bullets: [
    "Landing page orientée prise de rendez-vous, adaptée à votre clinique",
    "Tracking des appels et formulaires relié à votre CRM",
    "Compte publicitaire à votre nom, vous en restez propriétaire",
    "Sans engagement long terme",
  ],
  ctaHeadline: "Parlons de l'acquisition de patients pour votre clinique",
  faq: [
    {
      question: "La publicité en ligne fonctionne-t-elle pour une clinique dentaire ?",
      answer:
        "Oui, c'est l'un des secteurs où l'intention de recherche est la plus directe : un patient qui cherche un dentiste veut un rendez-vous rapidement. Le système est construit pour capter cette intention et la transformer en rendez-vous.",
    },
    {
      question: "Combien coûte une campagne pour une clinique dentaire en Israël ?",
      answer:
        "Le budget dépend de votre zone de chalandise et de vos soins mis en avant. Il se fixe avec vous selon vos objectifs de rendez-vous, discuté lors du diagnostic gratuit.",
    },
    {
      question: "Pouvez-vous cibler une zone précise autour de ma clinique ?",
      answer:
        "Oui. Le ciblage géographique est ajusté à votre zone de chalandise réelle, pour éviter de payer des clics venant de patients trop éloignés pour se déplacer.",
    },
  ],
};

export const marketingDigitalDentistesContent: Partial<Record<Locale, LandingContent>> = { fr };
