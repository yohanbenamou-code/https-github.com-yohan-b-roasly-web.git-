import type { SiteContent } from "./types";

export const fr: SiteContent = {
  meta: {
    title: "Roasly | Agence Marketing Digital à Tel Aviv & en Israël | Google Ads, Meta Ads",
    description:
      "Agence de marketing digital basée à Tel Aviv, au service des entrepreneurs et entreprises francophones dans toute Israël. Google Ads, Meta Ads, Bing Ads, TikTok Ads : système complet avec dashboard en temps réel. Diagnostic gratuit.",
  },
  nav: {
    links: [
      { label: "Accueil", href: "#home" },
      { label: "Ce que nous faisons", href: "#services" },
      { label: "Comment ça marche", href: "#how-it-works" },
      { label: "Estimateur", href: "#estimator" },
      { label: "Équipe", href: "#team" },
      { label: "Pourquoi Roasly", href: "#why-roasly" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Réservez votre diagnostic",
  },
  hero: {
    kicker: "Roasly — Agence de marketing digital à Tel Aviv",
    headline: "Plus de clients. En Israël et au-delà.",
    subheadline:
      "On construit un système d'acquisition complet, pas des promesses marketing. Landing page, campagnes, tracking, CRM et un dashboard connecté : vous voyez chaque shekel investi, chaque lead généré. Sans surprises.",
    cta: "Réserver un diagnostic gratuit",
  },
  platforms: ["Google Ads", "Meta Ads", "Bing Ads", "TikTok Ads"],
  valuePropsEyebrow: "Ce que nous faisons",
  valuePropsHeadline: "Un système d'acquisition complet, pas des publicités isolées",
  valueProps: [
    {
      title: "Un système complet, créas comprises",
      description:
        "Landing page, tracking, CRM, campagnes et créations publicitaires (textes, visuels, vidéos) : tout est pensé ensemble dans un seul système qui convertit.",
    },
    {
      title: "Chaque euro tracé, chaque résultat visible",
      description:
        "Fini les rapports flous. Vous savez exactement combien coûte un lead, combien il rapporte, et où réinvestir pour scaler.",
    },
    {
      title: "Optimisation continue, pas figée",
      description:
        "Vos campagnes sont ajustées chaque semaine sur la base de données réelles : ce qui ne performe pas est coupé, ce qui marche est renforcé.",
    },
    {
      title: "Un seul interlocuteur, zéro friction",
      description:
        "Vous travaillez directement avec notre équipe, du premier appel à l'optimisation mensuelle, sans chargé de compte junior entre nous.",
    },
  ],
  stats: {
    eyebrow: "Des résultats, pas des promesses",
    headline: "Ce que Roasly a déjà généré pour ses clients",
    items: [
      { value: 35, suffix: "+", label: "Projets accompagnés" },
      { value: 850, suffix: "K₪+", label: "Budget publicitaire géré à ce jour" },
      { value: 3.8, suffix: "x", label: "ROAS moyen généré pour nos clients" },
    ],
    sectorsLabel: "Secteurs avec lesquels nous travaillons",
    sectors: [
      "Santé & dentaire",
      "Immobilier",
      "Avocats",
      "Services professionnels",
      "Beauté & bien-être",
      "Formation & coaching",
      "Artisans & services locaux",
    ],
  },
  howItWorks: {
    eyebrow: "Comment ça marche",
    headline: "De la première conversation à la croissance, en 4 étapes précises",
    steps: [
      {
        title: "Diagnostic",
        description:
          "Nous auditons votre activité, vos concurrents et vos canaux d'acquisition actuels pour identifier où vous perdez des clients et le potentiel réel de chaque plateforme.",
        details: ["Audit concurrentiel", "Analyse des canaux existants", "Estimation du potentiel par plateforme"],
      },
      {
        title: "Construction du système",
        description:
          "Nous mettons en place la landing page, le tracking, le CRM et la structure complète des campagnes : comptes, groupes d'annonces, audiences et mots-clés.",
        details: ["Landing page orientée conversion", "Tracking & CRM connectés", "Structure de campagnes par plateforme"],
      },
      {
        title: "Création des créas",
        description:
          "Nous rédigeons les textes publicitaires et produisons les visuels et vidéos adaptés à chaque plateforme et à chaque audience, sans templates génériques recyclés.",
        details: ["Textes publicitaires sur mesure", "Visuels et vidéos par audience", "Déclinaisons par plateforme"],
      },
      {
        title: "Lancement et optimisation continue",
        description:
          "Nous suivons les performances chaque semaine, testons les créas et les audiences en continu, et ajustons enchères et budgets selon les données réelles.",
        details: ["Suivi hebdomadaire", "Tests A/B sur les créas", "Ajustement des enchères et budgets"],
      },
    ],
  },
  dashboard: {
    eyebrow: "Transparence totale",
    headline: "Votre activité, dans un dashboard clair et toujours à jour",
    description:
      "Oubliez les rapports PDF qui arrivent en retard. Vous avez accès à un dashboard en temps réel connecté directement à Google Ads, Meta Ads et votre CRM : leads, coût par lead et résultats, toujours visibles.",
    metrics: [
      { label: "Leads aujourd'hui", value: "24" },
      { label: "Coût par lead", value: "₪38" },
      { label: "Dépense du mois", value: "₪6 420" },
      { label: "Statut", value: "En direct" },
    ],
  },
  comparison: {
    eyebrow: "La comparaison honnête",
    headline: "Toutes les agences promettent la même chose. Peu la tiennent.",
    note: "Le reste n'est que du vocabulaire marketing. Voici ce qui change vraiment votre quotidien.",
    columns: ["Roasly", "Agence traditionnelle", "Freelance"],
    rows: [
      {
        label: "Système ou juste des publicités",
        values: [
          "Landing page, tracking, CRM et campagnes connectés",
          "Gère uniquement les publicités",
          "Concentré sur les ads, rarement sur tout le système",
        ],
      },
      {
        label: "Propriétaire de vos données",
        values: [
          "Vous l'êtes, toujours",
          "Souvent hébergées chez l'agence",
          "Vous, mais sans structure de suivi",
        ],
      },
      {
        label: "Rythme d'optimisation",
        values: [
          "Chaque semaine, sur données réelles",
          "Chaque trimestre, si tout va bien",
          "Quand le temps le permet",
        ],
      },
      {
        label: "Engagement contractuel",
        values: ["Aucun", "6 à 12 mois", "Aucun, mais aucun suivi non plus"],
      },
    ],
  },
  estimator: {
    eyebrow: "Estimez votre potentiel",
    headline: "Ce que votre budget peut réellement générer",
    description:
      "Déplacez le curseur sur votre budget publicitaire mensuel. Vous obtenez immédiatement une fourchette réaliste de leads, de coût par lead et de chiffre d'affaires, calculée sur la moyenne des comptes que nous gérons aujourd'hui en Israël.",
    budgetLabel: "Budget publicitaire mensuel",
    perMonth: "/ mois",
    results: {
      leads: "Leads estimés / mois",
      cpl: "Coût par lead",
      revenue: "Chiffre d'affaires potentiel / mois",
    },
    roasCaption: "Sur la base d'un ROAS de 3 à 5x, la moyenne observée sur nos comptes.",
    disclaimer:
      "Estimation indicative, pas une promesse. Vos résultats réels dépendent de votre secteur, de votre offre et de votre marché. Le diagnostic gratuit vous donne des chiffres précis, chiffrés pour votre activité.",
    note: "Diagnostic offert · Réponse sous 24h · Sans engagement",
    cta: "Recevoir mon plan chiffré",
  },
  trust: {
    eyebrow: "Nos engagements",
    headline: "Ce qu'on vous garantit, sans exception",
    body:
      "On ne vous demande pas de nous croire sur parole. Voici exactement ce que vous obtenez dès le premier jour, quoi qu'il arrive.",
    bullets: [
      "Accès complet à vos comptes publicitaires et à vos données : rien ne reste chez nous si vous partez",
      "Dashboard en temps réel dès le diagnostic, pas après plusieurs semaines",
      "Réponse sous 24h à chaque question, directement avec notre équipe",
      "Sans engagement long terme : vous restez parce que ça marche, pas parce qu'un contrat vous y oblige",
    ],
  },
  reviews: {
    eyebrow: "Ce qu'en disent nos clients",
    headline: "Ce que nos clients disent de nous",
    items: [
      {
        name: "David Cohen",
        role: "Cabinet d'avocats, Tel Aviv",
        initial: "D",
        text: "Enfin une agence qui explique où va mon budget. Le dashboard en temps réel a tout changé, je vois mes leads arriver au lieu d'attendre un rapport mensuel.",
        timeAgo: "il y a 2 mois",
      },
      {
        name: "Sarah Lévy-Azoulay",
        role: "Clinique dentaire, Netanya",
        initial: "S",
        text: "On avait déjà travaillé avec deux agences avant. Ici, on a un vrai système : landing page, CRM, campagnes, tout connecté. Le coût par lead a baissé de moitié en deux mois.",
        timeAgo: "il y a 1 mois",
      },
      {
        name: "Yossi Ben David",
        role: "Agence immobilière, Jérusalem",
        initial: "Y",
        text: "Communication directe, pas de chargé de compte qui change tous les trois mois. Les campagnes sont ajustées chaque semaine, ça se voit dans les résultats.",
        timeAgo: "il y a 3 semaines",
      },
      {
        name: "Émilie Attia",
        role: "Institut de beauté, Ashdod",
        initial: "É",
        text: "Rapide à démarrer, honnête sur ce qui marche ou pas. On a testé plusieurs créas la première semaine et gardé celles qui convertissaient vraiment.",
        timeAgo: "il y a 2 mois",
      },
      {
        name: "Michael Dahan",
        role: "Coach business, Herzliya",
        initial: "M",
        text: "Le sans-engagement m'a convaincu de tester. Je suis resté parce que le ROAS est là, pas parce qu'un contrat m'y oblige.",
        timeAgo: "il y a 1 mois",
      },
      {
        name: "Laura Malka",
        role: "Cabinet comptable, Ra'anana",
        initial: "L",
        text: "Diagnostic clair dès le premier appel, sans jargon inutile. Le système de captation tourne maintenant tout seul, avec des ajustements réguliers.",
        timeAgo: "il y a 3 mois",
      },
    ],
  },
  team: {
    eyebrow: "Notre équipe",
    headline: "Un seul interlocuteur, du diagnostic à l'optimisation",
    intro:
      "Pas de chargé de compte junior, pas de sous-traitance opaque. Vous parlez directement à la personne qui construit et pilote votre système d'acquisition.",
    members: [
      {
        name: "Yohan Benamou",
        role: "Fondateur",
        location: "Tel Aviv, Israël",
        bio: "Depuis Tel Aviv, j'accompagne les entreprises et indépendants francophones, hispanophones et hébréophones qui veulent un système d'acquisition clair, pas des promesses. Landing page, campagnes Google Ads et Meta Ads, tracking, CRM et dashboard en temps réel : je construis l'ensemble avec vous et je l'optimise chaque semaine sur données réelles. Quand vous appelez, vous parlez à la personne qui gère réellement vos campagnes.",
        tags: ["Google Ads", "Meta Ads", "Tracking & CRM", "FR · ES · HE"],
      },
    ],
  },
  antiPositioning: {
    headline: "Pas une agence comme les autres",
    body:
      "La plupart des agences cherchent à maximiser leur portefeuille de clients. Nous faisons l'inverse : nous travaillons avec un nombre limité de comptes à la fois, pour vous donner l'attention que vous méritez. Pas de chargé de compte junior, pas de modèles recyclés d'un client à l'autre, pas 20 comptes gérés en parallèle. Et si nous ne sommes pas le bon choix pour vous, nous vous le disons directement : nous ne vous vendons pas ce dont vous n'avez pas besoin.",
  },
  faq: {
    eyebrow: "Questions fréquentes",
    headline: "Tout ce que les entrepreneurs francophones en Israël nous demandent",
    items: [
      {
        question: "Travaillez-vous avec des entreprises et indépendants francophones basés en Israël ?",
        answer:
          "Oui, c'est notre cœur de métier. Nous accompagnons des entrepreneurs, indépendants et PME francophones installés en Israël qui veulent générer des clients localement, ainsi que des entreprises en France qui souhaitent toucher la communauté francophone d'Israël.",
      },
      {
        question: "Combien coûte une agence de publicité en ligne en Israël ?",
        answer:
          "Le budget dépend de votre secteur et de vos objectifs. Ce qui ne change pas : vous voyez exactement où va chaque shekel investi, via votre dashboard en temps réel, dès le premier jour du diagnostic gratuit.",
      },
      {
        question: "Gérez-vous Google Ads et Meta Ads pour les indépendants et petites entreprises ?",
        answer:
          "Oui. Que vous soyez auto-entrepreneur, clinique, cabinet de services ou petite entreprise, nous construisons un système d'acquisition adapté à votre budget : landing page, tracking, CRM et campagnes Google Ads, Meta Ads, Bing Ads ou TikTok Ads.",
      },
      {
        question: "Quelle est la différence entre Roasly et une agence marketing digital classique ?",
        answer:
          "Une agence classique gère souvent uniquement vos publicités. Roasly construit tout le système autour : landing page, tracking, CRM et campagnes connectés, avec un accès direct à notre équipe, pas à un chargé de compte junior qui découvre votre activité.",
      },
      {
        question: "Le diagnostic initial est-il vraiment gratuit ?",
        answer:
          "Oui, sans engagement. Nous analysons votre activité, votre marché et vos canaux d'acquisition actuels, puis nous vous disons honnêtement si un système publicitaire a du sens pour vous maintenant.",
      },
      {
        question: "Parlez-vous uniquement français, ou aussi hébreu et espagnol ?",
        answer:
          "Les trois. Nous adaptons le message publicitaire à chaque communauté (francophone, hispanophone et hébréophone) plutôt que de traduire mot à mot une seule campagne.",
      },
      {
        question: "En combien de temps voit-on les premiers résultats ?",
        answer:
          "Les premiers leads arrivent en général dans les deux premières semaines après le lancement des campagnes. La phase d'optimisation (celle qui fait vraiment baisser le coût par lead) se joue plutôt sur les 4 à 8 premières semaines, le temps de récolter assez de données réelles pour ajuster enchères, audiences et créas.",
      },
      {
        question: "Quels secteurs d'activité accompagnez-vous ?",
        answer:
          "Principalement des cliniques et professions de santé, cabinets d'avocats et comptables, agences immobilières, instituts de beauté, coachs et formateurs, artisans et prestataires de services locaux. Le système s'adapte à votre secteur, pas l'inverse.",
      },
      {
        question: "Puis-je arrêter à tout moment si ça ne fonctionne pas ?",
        answer:
          "Oui. Il n'y a pas de contrat de 6 ou 12 mois qui vous enferme. Si vous partez, vos comptes publicitaires, vos données et votre tracking restent à vous, tels quels.",
      },
      {
        question: "Comment savoir où va mon budget publicitaire au quotidien ?",
        answer:
          "Via votre dashboard en temps réel, connecté directement à vos comptes Google Ads, Meta Ads et à votre CRM. Vous voyez le coût par lead, la dépense du jour et le ROAS, sans attendre un rapport mensuel envoyé par email.",
      },
      {
        question: "Travaillez-vous aussi avec des entreprises qui n'ont pas encore de site web ?",
        answer:
          "Oui. Si vous n'avez pas encore de landing page ou de site adapté à la conversion, nous la construisons dans le cadre du système, connectée au tracking et aux campagnes dès le départ.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Passons à l'action",
    headline: "Prêt à arrêter d'improviser votre marketing ?",
    body: "Laissez-nous vos coordonnées. Nous revenons vers vous sous 24h pour un diagnostic gratuit de votre acquisition, sans engagement.",
    button: "Parlons-en",
    form: {
      name: "Nom",
      email: "Email",
      phone: "Téléphone",
      message: "Votre projet",
      messagePlaceholder: "Parlez-nous de votre activité et de vos objectifs...",
      submit: "Réserver mon diagnostic gratuit",
      sending: "Envoi en cours...",
      success: "Merci ! Votre message est bien parti, notre équipe vous recontacte sous 24h.",
      error: "Un souci est survenu. Écrivez-nous directement à l'email ci-dessous.",
    },
  },
  footer: {
    tagline:
      "Roasly, agence de marketing digital basée à Tel Aviv, spécialisée en Google Ads, Meta Ads, Bing Ads et TikTok Ads pour les entreprises en Israël.",
    legal: ["Mentions légales", "Politique de confidentialité"],
    copyright: "© 2026 Roasly. Tous droits réservés.",
    contactLabel: { email: "Email", whatsapp: "WhatsApp" },
  },
};
