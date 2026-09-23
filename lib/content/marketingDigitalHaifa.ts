import type { Locale } from "@/lib/i18n";
import type { LandingContent } from "./landingTypes";
export type { LandingContent };

const fr: LandingContent = {
  metaTitle: "Agence marketing digital à Haïfa | Roasly",
  metaDescription:
    "Agence de marketing digital à Haïfa : Google Ads, Meta Ads, système d'acquisition complet et dashboard en temps réel, pour entreprises et professions libérales. Diagnostic gratuit.",
  kicker: "Marketing digital à Haïfa",
  h1: "Votre agence de marketing digital à Haïfa",
  intro:
    "Haïfa n'est pas Tel Aviv : moins de bruit publicitaire, un coût par clic souvent plus raisonnable, mais une audience plus dispersée entre le centre-ville, le Technion, la zone industrielle et les quartiers résidentiels sur les hauteurs du Carmel. Une campagne pensée pour Tel Aviv et simplement recopiée sur Haïfa rate cette géographie. Roasly construit vos campagnes en fonction de la ville réelle, pas d'un modèle générique.",
  sections: [
    {
      title: "Une ville étalée, un ciblage qui doit suivre la géographie réelle",
      body: "Entre le port, la ville basse, le centre du Carmel et les zones résidentielles plus au sud, Haïfa couvre une zone large où les habitudes et le pouvoir d'achat varient fortement d'un quartier à l'autre. Un ciblage large et non segmenté finit par arroser des zones peu pertinentes pour votre activité. Nous structurons les campagnes par zone géographique et par profil socio-économique réel, pas par la seule limite administrative de la ville.",
    },
    {
      title: "Pôle technologique et professions libérales : une audience plus qualifiée, plus exigeante",
      body: "Avec le Technion et un tissu de sociétés tech et industrielles, Haïfa compte une audience B2B et de cadres plus qualifiée qu'ailleurs dans le pays. Pour toucher cette audience, le message publicitaire doit être plus précis et moins générique : Google Ads pour capter une recherche déjà qualifiée, LinkedIn ou Meta pour construire la notoriété en amont, selon votre cycle de vente.",
    },
    {
      title: "Santé, dentaire et services aux particuliers : jouer sur la proximité",
      body: "Pour un cabinet dentaire, un praticien de santé ou un service à la personne à Haïfa, la clé est la proximité réelle, pas la couverture de toute l'agglomération. Nous ciblons les quartiers accessibles en quelques minutes, avec des annonces qui parlent directement à cette audience de proximité, plutôt que de diluer le budget sur toute la ville.",
    },
    {
      title: "Suivi des conversions : indispensable sur un marché moins dense",
      body: "Sur un marché avec moins de volume de recherche qu'à Tel Aviv, chaque lead compte davantage et le suivi des conversions devient encore plus déterminant. Nous connectons formulaires, appels et CRM pour savoir exactement quelle campagne, quelle annonce et quel mot-clé génèrent vos leads, et ajuster chaque semaine sur cette base plutôt que sur une intuition.",
    },
    {
      title: "Combien coûte le marketing digital à Haïfa",
      body: "Le coût par clic à Haïfa est en général plus accessible qu'à Tel Aviv, avec des écarts marqués entre les recherches B2B qualifiées et les recherches locales de proximité. Le budget se fixe avec vous en fonction d'un objectif de coût par lead réaliste pour votre secteur, présenté lors du diagnostic gratuit, sans forfait générique ni engagement de durée.",
    },
    {
      title: "Secteurs que nous accompagnons à Haïfa",
      body: "Cabinets dentaires et paramédicaux, sociétés de services B2B et tech, professions libérales, artisans et services à la personne. Des profils très différents qui ont un point commun : une audience plus qualifiée qu'ailleurs, qui mérite un message publicitaire à la hauteur plutôt qu'une campagne standard.",
    },
  ],
  bullets: [
    "Ciblage par quartier et zone de chalandise réelle, pas par la ville entière",
    "Campagnes adaptées à une audience B2B et professions libérales quand c'est pertinent",
    "Compte publicitaire ouvert à votre nom, données conservées si vous partez",
    "Suivi des conversions connecté au CRM, lead par lead",
    "Dashboard en temps réel dès le diagnostic gratuit",
    "Aucun engagement de durée",
  ],
  ctaHeadline: "Parlons de votre système d'acquisition à Haïfa",
  faq: [
    {
      question: "Haïfa est très étendue. Comment évitez-vous de gaspiller le budget sur des zones trop éloignées ?",
      answer:
        "En segmentant les campagnes par quartier et par rayon de déplacement réaliste pour votre activité, plutôt qu'en ciblant toute la ville d'un bloc. C'est particulièrement important pour un commerce ou un praticien de santé.",
    },
    {
      question: "Mon activité s'adresse surtout à des professionnels et des entreprises, pas au grand public. C'est différent ?",
      answer:
        "Oui, et c'est justement un point fort de Haïfa avec son tissu tech et industriel. On adapte le message et le canal : Google Ads pour capter une recherche déjà qualifiée, une approche plus orientée notoriété si votre cycle de vente est long.",
    },
    {
      question: "Le volume de recherche à Haïfa est-il suffisant pour justifier une campagne ?",
      answer:
        "Le volume est différent de Tel Aviv, pas absent. Sur un marché moins dense, chaque lead compte davantage, ce qui rend le suivi des conversions et l'exclusion des mots-clés non pertinents encore plus importants.",
    },
    {
      question: "Travaillez-vous avec des petites structures à Haïfa, pas seulement de grandes entreprises tech ?",
      answer:
        "Oui, le système s'adapte à votre budget et à vos objectifs, d'un cabinet indépendant à une structure plus établie. On cadre ensemble ce qui est réaliste lors du diagnostic gratuit.",
    },
  ],
};

export const marketingDigitalHaifaContent: Partial<Record<Locale, LandingContent>> = { fr };
