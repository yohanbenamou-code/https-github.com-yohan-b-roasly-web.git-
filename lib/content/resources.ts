export type ResourceArticle = {
  slug: string;
  title: string;
  metaDescription: string;
  publishedDate: string;
  intro: string;
  body: { heading: string; paragraphs: string[] }[];
  relatedLinks?: string[];
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
  {
    slug: "publicite-generique-echoue-francophones-israel",
    title: "Pourquoi une publicité générique ne marche pas pour les francophones d'Israël",
    metaDescription:
      "Une campagne pensée pour Israël en général rate souvent l'audience francophone. Pourquoi la langue et la ville changent tout, avec des exemples concrets à Netanya et Ashdod.",
    publishedDate: "2026-09-23",
    intro:
      "Beaucoup de campagnes Google Ads ou Meta Ads en Israël sont construites pour \"le marché israélien\" au sens large, puis simplement traduites en français. Le problème n'est pas la traduction, c'est l'audience qu'on rate en faisant ça.",
    body: [
      {
        heading: "Chercher en français n'est pas un détail de traduction",
        paragraphs: [
          "Une personne qui cherche un service en français ne tape pas les mêmes mots-clés, ne réagit pas aux mêmes arguments et ne fait pas confiance aux mêmes signaux qu'une personne qui cherche en hébreu. Traduire une campagne existante mot à mot laisse passer les vraies expressions utilisées par cette audience, et souvent son intention réelle.",
          "Une campagne pensée directement pour l'audience francophone, avec ses propres mots-clés et ses propres annonces, capte des recherches qu'une campagne traduite ne voit même pas.",
        ],
      },
      {
        heading: "Des villes où l'audience francophone change vraiment la donne",
        paragraphs: [
          "Dans des villes comme Netanya ou Ashdod, la part de résidents et de nouveaux arrivants francophones est suffisamment importante pour justifier une stratégie dédiée, pas une case cochée en plus. Un cabinet dentaire, une agence immobilière ou un commerce de proximité dans ces villes a intérêt à traiter le français comme une audience à part entière, avec son propre suivi de performance.",
          "À l'inverse, une ville comme Haïfa a une audience plus mélangée et plus orientée professionnelle, ce qui demande une approche différente, pas la même campagne recopiée d'une ville à l'autre.",
        ],
      },
      {
        heading: "Ce que ça change concrètement dans une campagne",
        paragraphs: [
          "Concrètement, ça veut dire des campagnes séparées par langue plutôt qu'une seule campagne bilingue, des annonces écrites pour l'audience et pas traduites après coup, et un suivi des conversions qui indique clairement quelle langue génère quels leads. C'est ce niveau de détail, plus que le montant du budget, qui fait la différence sur ces marchés.",
        ],
      },
    ],
    relatedLinks: ["marketing-digital-netanya", "marketing-digital-ashdod"],
  },
  {
    slug: "google-ads-ou-meta-ads-demarrer-israel",
    title: "Google Ads ou Meta Ads : lequel choisir pour démarrer en Israël ?",
    metaDescription:
      "Google Ads capte une demande qui existe déjà, Meta Ads la crée. Comment choisir le bon canal pour démarrer selon votre activité en Israël.",
    publishedDate: "2026-09-23",
    intro:
      "C'est souvent la première question avant de se lancer : Google Ads ou Meta Ads ? La bonne réponse dépend moins de la plateforme la plus à la mode que de la manière dont vos clients cherchent réellement une solution comme la vôtre.",
    body: [
      {
        heading: "Google Ads : capter une demande qui existe déjà",
        paragraphs: [
          "Google Ads fonctionne bien quand vos clients savent déjà qu'ils ont besoin de votre service et le recherchent activement : un cabinet dentaire, un avocat, un artisan, un service d'urgence. Vous captez une intention déjà formée, ce qui donne en général un taux de conversion plus élevé, mais à un coût par clic qui reflète cette demande existante.",
        ],
      },
      {
        heading: "Meta Ads : créer la demande avant qu'elle ne cherche",
        paragraphs: [
          "Meta Ads (Facebook et Instagram) fonctionne différemment : vous ne captez pas une recherche, vous créez l'envie chez quelqu'un qui ne cherchait pas encore activement. C'est plus adapté à des produits ou services moins évidents à chercher spontanément, ou pour construire la notoriété avant qu'un besoin devienne urgent.",
        ],
      },
      {
        heading: "Comment trancher selon votre activité",
        paragraphs: [
          "Si votre activité répond à un besoin déjà identifié par le client (santé, réparation, service juridique), commencer par Google Ads donne en général des résultats plus rapides à suivre. Si votre activité repose sur la découverte ou l'achat impulsif, Meta Ads est souvent plus efficace en premier.",
          "Chez Roasly, on ne lance pas les deux canaux en même temps par défaut : on commence par celui qui correspond le mieux à votre cycle de décision, et on ajoute le second une fois que le premier est rentable et suivi correctement, sur le même dashboard.",
        ],
      },
    ],
    relatedLinks: ["google-ads-tel-aviv", "meta-ads-tel-aviv", "cas-clients"],
  },
  {
    slug: "erreurs-cout-par-lead-petite-entreprise-israel",
    title: "5 erreurs qui plombent le coût par lead d'une petite entreprise en Israël",
    metaDescription:
      "Les erreurs les plus fréquentes qui font grimper le coût par lead d'une petite entreprise en Israël, et comment les corriger concrètement.",
    publishedDate: "2026-09-23",
    intro:
      "Un coût par lead élevé n'est presque jamais une fatalité liée au secteur ou à la concurrence. Dans la majorité des comptes qu'on audite, la cause vient de quelques erreurs structurelles, souvent les mêmes.",
    body: [
      {
        heading: "1. Un tracking des conversions cassé ou incomplet",
        paragraphs: [
          "Sans suivi propre des formulaires, des appels et du CRM, impossible de savoir quel mot-clé ou quelle audience génère réellement des leads. Beaucoup de comptes optimisent à l'aveugle, ou pire, coupent des campagnes qui marchaient parce que leurs conversions n'étaient simplement pas comptées.",
        ],
      },
      {
        heading: "2. Un ciblage géographique trop large",
        paragraphs: [
          "Cibler toute une ville ou tout le pays quand votre zone de chalandise réelle est un quartier ou une région fait payer des clics qui ne peuvent jamais convertir. C'est l'une des erreurs les plus fréquentes et les plus faciles à corriger.",
        ],
      },
      {
        heading: "3. L'absence de mots-clés négatifs",
        paragraphs: [
          "Sans liste de mots-clés négatifs entretenue chaque semaine, une campagne Google Ads finit par capter des recherches hors sujet : concurrents, offres d'emploi, contenu gratuit. Ce budget mal dépensé fait mécaniquement grimper le coût par lead réel.",
        ],
      },
      {
        heading: "4. Une seule campagne pour dix intentions différentes",
        paragraphs: [
          "Regrouper toutes les recherches possibles dans une seule campagne empêche d'ajuster les enchères selon la valeur réelle de chaque intention. Séparer par intention (marque, problème, solution, comparaison) permet d'investir plus là où ça convertit et moins là où ça ne convertit pas.",
        ],
      },
      {
        heading: "5. Optimiser une fois par trimestre au lieu d'une fois par semaine",
        paragraphs: [
          "Le coût par lead ne baisse pas tout seul avec le temps : il baisse quand quelqu'un ajuste régulièrement les enchères, coupe ce qui ne marche pas et renforce ce qui fonctionne, sur la base de données réelles. Une révision trimestrielle laisse des semaines de budget mal optimisé s'accumuler.",
        ],
      },
    ],
    relatedLinks: ["cas-clients", "marketing-digital-tel-aviv"],
  },
];
