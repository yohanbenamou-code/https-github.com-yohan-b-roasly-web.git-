export type ResourceArticle = {
  slug: string;
  title: string;
  metaDescription: string;
  publishedDate: string;
  intro: string;
  body: { heading: string; paragraphs: string[] }[];
};

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "cout-campagne-google-ads-meta-ads-israel",
    title: "Combien coûte une campagne Google Ads ou Meta Ads en Israël ?",
    metaDescription:
      "Comment se fixe le budget d'une campagne Google Ads ou Meta Ads en Israël : coût par clic, facteurs qui font varier le prix, et pourquoi il n'existe pas de forfait générique.",
    publishedDate: "2026-07-28",
    intro:
      "C'est la première question de la plupart des entrepreneurs francophones en Israël avant de se lancer en publicité en ligne. Il n'y a pas de réponse unique, mais voici les facteurs qui déterminent réellement le budget.",
    body: [
      {
        heading: "Le coût par clic dépend de votre secteur",
        paragraphs: [
          "Sur Google Ads comme sur Meta Ads, le coût par clic varie fortement selon la concurrence sur vos mots-clés ou votre audience. Des secteurs comme l'immobilier ou le juridique ont un coût par clic plus élevé que des mots-clés locaux peu concurrentiels, simplement parce que plus d'annonceurs enchérissent dessus.",
          "Il n'existe donc pas de tarif générique valable pour tous les secteurs : le budget se fixe en fonction de votre marché, pas d'une grille tarifaire universelle.",
        ],
      },
      {
        heading: "Le budget se fixe selon vos objectifs, pas selon un forfait",
        paragraphs: [
          "Chez Roasly, le budget publicitaire se définit avec vous lors du diagnostic gratuit, en fonction de vos objectifs de leads et du niveau de concurrence réel sur vos mots-clés ou audiences. Le seul coût fixe est celui de la gestion, discuté à ce moment-là.",
          "Ce qui ne change pas, quel que soit le budget : vous voyez exactement où va chaque shekel investi, via un dashboard en temps réel connecté directement à vos comptes publicitaires.",
        ],
      },
      {
        heading: "Ce que ça donne concrètement",
        paragraphs: [
          "À ce jour, Roasly a accompagné plus de 35 projets et géré plus de 850 000₪ de budget publicitaire, pour un ROAS moyen de 3,8x généré pour ses clients. Ces chiffres varient évidemment d'un compte à l'autre selon le secteur et le budget engagé, mais ils donnent un ordre de grandeur réaliste plutôt qu'une promesse abstraite.",
        ],
      },
    ],
  },
  {
    slug: "delai-premiers-resultats-publicite-israel",
    title: "Combien de temps avant les premiers résultats avec une agence Google Ads ou Meta Ads ?",
    metaDescription:
      "Le calendrier réaliste d'une campagne Google Ads ou Meta Ads en Israël : quand arrivent les premiers leads, et quand le coût par lead commence à baisser.",
    publishedDate: "2026-07-28",
    intro:
      "Une question légitime avant de se lancer : en combien de temps une campagne devient rentable ? Voici le déroulé réaliste, étape par étape.",
    body: [
      {
        heading: "Les 2 premières semaines : premiers leads et collecte de données",
        paragraphs: [
          "Les premiers leads arrivent en général dans les deux premières semaines après le lancement des campagnes. Cette phase sert surtout à collecter des données réelles : quels mots-clés ou audiences convertissent, quelles annonces performent, quel est le comportement réel de votre marché.",
        ],
      },
      {
        heading: "Semaines 4 à 8 : la phase qui fait vraiment baisser le coût par lead",
        paragraphs: [
          "C'est sur cette période que se joue la vraie optimisation : ajustement des enchères, exclusion des mots-clés négatifs, arrêt des créations publicitaires qui ne convertissent pas et renforcement de celles qui marchent. C'est cette phase, basée sur des données réelles plutôt que des hypothèses, qui fait baisser durablement le coût par lead.",
        ],
      },
      {
        heading: "Pourquoi ce délai n'est pas contournable",
        paragraphs: [
          "Aucune agence sérieuse ne peut optimiser une campagne sans données réelles à analyser. Se méfier d'une promesse de résultats immédiats : la phase de collecte de données est nécessaire, quel que soit le prestataire. Ce qui différencie une bonne gestion, c'est la fréquence d'ajustement une fois ces données disponibles : chez Roasly, les campagnes sont revues chaque semaine, pas une fois par trimestre.",
        ],
      },
    ],
  },
  {
    slug: "agence-freelance-ou-interne-israel",
    title: "Agence, freelance ou en interne : comment choisir pour son acquisition de clients en Israël ?",
    metaDescription:
      "Comparatif honnête entre agence marketing digital, freelance et gestion en interne pour les entrepreneurs francophones en Israël : ce qui change vraiment au quotidien.",
    publishedDate: "2026-07-28",
    intro:
      "Trois options s'offrent à un entrepreneur qui veut lancer ou reprendre sa publicité en ligne en Israël : une agence traditionnelle, un freelance, ou la gestion en interne. Voici ce qui les différencie réellement, au-delà du discours commercial.",
    body: [
      {
        heading: "Système complet ou simple gestion des publicités",
        paragraphs: [
          "Une agence traditionnelle gère le plus souvent uniquement les publicités, sans toucher à la landing page, au tracking ou au CRM. Un freelance est généralement concentré sur les ads, rarement sur l'ensemble du système. Un système complet — landing page, tracking, CRM et campagnes connectés — évite les angles morts entre ces éléments, qui sont souvent la vraie cause d'un coût par lead élevé.",
        ],
      },
      {
        heading: "Propriété des données",
        paragraphs: [
          "Un point souvent négligé : qui est propriétaire du compte publicitaire et des données de tracking. Chez certaines agences, les comptes restent hébergés côté agence, ce qui complique un changement de prestataire. Vérifier ce point avant de signer évite de se retrouver bloqué plus tard.",
        ],
      },
      {
        heading: "Rythme d'optimisation et engagement contractuel",
        paragraphs: [
          "La fréquence d'ajustement des campagnes varie énormément selon le prestataire : chaque semaine pour certains, chaque trimestre pour d'autres, ou seulement quand le temps le permet en gestion interne. De même, l'engagement contractuel change fortement d'un prestataire à l'autre : certaines agences imposent 6 à 12 mois d'engagement, d'autres non.",
          "Ces deux points valent la peine d'être clarifiés avant de commencer, plutôt que découverts après plusieurs mois.",
        ],
      },
    ],
  },
];
