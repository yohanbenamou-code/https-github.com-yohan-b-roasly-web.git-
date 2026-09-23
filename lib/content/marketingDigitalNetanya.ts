import type { Locale } from "@/lib/i18n";
import type { LandingContent } from "./landingTypes";
export type { LandingContent };

const fr: LandingContent = {
  metaTitle: "Agence marketing digital à Netanya | Roasly",
  metaDescription:
    "Agence de marketing digital à Netanya pour les entreprises francophones : Google Ads, Meta Ads, système d'acquisition complet et dashboard en temps réel. Diagnostic gratuit.",
  kicker: "Marketing digital à Netanya",
  h1: "Votre agence de marketing digital à Netanya",
  intro:
    "Netanya concentre l'une des plus fortes communautés francophones d'Israël, et ça change la manière de faire de la publicité : vos clients cherchent en français autant qu'en hébreu, et une campagne pensée uniquement pour le marché israélien classique passe à côté d'une bonne partie de votre audience. Roasly construit vos campagnes en tenant compte de cette réalité, pas en la traitant comme un détail.",
  sections: [
    {
      title: "Une ville où le français est une langue de recherche, pas une exception",
      body: "À Netanya, une part importante des habitants et des nouveaux arrivants cherche en français : un cabinet dentaire, un agent immobilier, un artisan. Ignorer cette audience dans une campagne Google Ads ou Meta Ads, c'est laisser filer des clients qui préfèrent justement travailler avec quelqu'un qui leur parle directement. Nous construisons des campagnes dédiées à cette audience, avec des annonces écrites pour elle, pas traduites après coup.",
    },
    {
      title: "Immobilier et olim : une demande locale forte, une concurrence qui grandit",
      body: "Netanya reste une destination prisée des nouveaux immigrants francophones, ce qui alimente une demande constante en immobilier, en services d'installation et en commerces de proximité. C'est aussi un secteur où de plus en plus d'acteurs se positionnent sur les mêmes recherches. La structure de campagne et la qualité du suivi des conversions font la différence entre un lead qui coûte cher et un lead qui convertit.",
    },
    {
      title: "Commerces et services de proximité : viser le quartier, pas toute la ville",
      body: "Pour un commerce, un restaurant ou un praticien de santé à Netanya, cibler toute la ville dilue le budget sur des prospects trop loin pour se déplacer. Nous segmentons les campagnes par quartier et par rayon de déplacement réaliste, pour que chaque shekel touche des personnes qui peuvent réellement devenir clientes.",
    },
    {
      title: "Suivi des conversions : savoir si un lead vient du français ou de l'hébreu",
      body: "Sans tracking propre, impossible de savoir quelle langue de campagne rapporte vraiment. Nous connectons formulaires, appels et CRM pour que chaque lead soit rattaché à sa campagne d'origine, y compris la langue et l'audience. C'est cette donnée qui permet d'arrêter ce qui ne marche pas et de renforcer ce qui convertit, au lieu de deviner.",
    },
    {
      title: "Combien coûte le marketing digital à Netanya",
      body: "Le coût par clic à Netanya est en général plus accessible qu'à Tel Aviv, mais varie fortement selon le secteur : l'immobilier et les services professionnels restent plus chers que le commerce local. Le budget se fixe avec vous à partir d'un objectif de coût par lead, pas d'un forfait générique. Le diagnostic gratuit permet de cadrer un budget réaliste avant tout engagement.",
    },
    {
      title: "Secteurs que nous accompagnons à Netanya",
      body: "Agences immobilières, cabinets dentaires et paramédicaux, commerces et restaurants, services d'installation pour nouveaux arrivants, professions libérales. Des secteurs où la demande francophone est réelle et où une campagne bilingue bien construite change concrètement le volume et la qualité des leads.",
    },
  ],
  bullets: [
    "Campagnes séparées par langue, français et hébreu, pas une traduction automatique",
    "Ciblage par quartier pour ne pas payer des clics hors de portée réelle",
    "Compte publicitaire ouvert à votre nom, données conservées si vous partez",
    "Suivi des conversions connecté au CRM, lead par lead",
    "Dashboard en temps réel dès le diagnostic gratuit",
    "Aucun engagement de durée",
  ],
  ctaHeadline: "Parlons de votre système d'acquisition à Netanya",
  faq: [
    {
      question: "Mes clients à Netanya parlent français, mais aussi hébreu. Comment gérez-vous ça ?",
      answer:
        "En séparant les campagnes par langue plutôt qu'en mélangeant les deux. Chaque audience reçoit des annonces écrites pour elle, avec un suivi séparé pour savoir laquelle rapporte le plus, au lieu de deviner à partir d'une seule campagne.",
    },
    {
      question: "Je vends uniquement dans mon quartier à Netanya, pas dans toute la ville. C'est possible de cibler aussi précisément ?",
      answer:
        "Oui, c'est même recommandé pour un commerce ou un service de proximité. On définit un rayon réaliste autour de votre zone de chalandise pour ne pas gaspiller de budget sur des prospects trop loin.",
    },
    {
      question: "Le marché immobilier à Netanya est très concurrentiel. Comment sortir du lot ?",
      answer:
        "En travaillant la structure du compte et la qualité du suivi plus que le montant du budget : mots-clés négatifs bien tenus, pages de destination adaptées à chaque type de bien, et un suivi qui identifie précisément quelle annonce génère des leads sérieux.",
    },
    {
      question: "Vous travaillez aussi avec de petites structures, pas seulement de grandes agences ?",
      answer:
        "Oui. Le système s'adapte au budget et aux objectifs, d'un commerce indépendant à une structure plus établie. On cadre ensemble ce qui est réaliste lors du diagnostic gratuit.",
    },
  ],
};

export const marketingDigitalNetanyaContent: Partial<Record<Locale, LandingContent>> = { fr };
