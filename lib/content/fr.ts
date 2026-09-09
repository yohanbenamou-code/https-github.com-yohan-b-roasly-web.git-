import type { SiteContent } from "./types";

export const fr: SiteContent = {
  meta: {
    title: "Agence de marketing digital en Israël | Google Ads & Meta Ads | Roasly",
    description:
      "Agence de marketing digital en Israël : campagnes de marketing digital Google Ads, Meta Ads, Bing Ads et TikTok Ads réunies dans un système d'acquisition complet, avec dashboard en temps réel. Pour les entreprises et indépendants francophones, hispanophones et hébréophones, de Tel Aviv à Jérusalem. Diagnostic gratuit.",
  },
  nav: {
    links: [
      { label: "Accueil", href: "#home" },
      { label: "Ce que nous faisons", href: "#services" },
      { label: "Comment ça marche", href: "#how-it-works" },
      { label: "Cas clients", href: "/cas-clients" },
      { label: "Estimateur", href: "#estimator" },
      { label: "Équipe", href: "#team" },
      { label: "Pourquoi Roasly", href: "#why-roasly" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Réservez votre diagnostic",
  },
  hero: {
    kicker: "Roasly — Agence de marketing digital en Israël",
    h1: "Agence de marketing digital en Israël",
    headline: "Plus de clients. En Israël et au-delà.",
    subheadline:
      "On construit un système d'acquisition complet pour votre marché en Israël, pas des promesses marketing. Landing page, campagnes, tracking, CRM et un dashboard connecté : vous voyez chaque shekel investi, chaque lead généré. Sans surprises.",
    cta: "Réserver un diagnostic gratuit",
  },
  platforms: ["Google Ads", "Meta Ads", "Bing Ads", "TikTok Ads"],
  valuePropsEyebrow: "Ce que nous faisons",
  valuePropsHeadline: "Des campagnes de marketing digital en Israël, gérées comme un système complet",
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
  seoLinks: {
    eyebrow: "Marketing digital en Israël",
    headline: "Roasly, votre agence de marketing digital partout en Israël",
    body: "Nous pilotons des campagnes de marketing digital dans toute Israël — Tel Aviv, Jérusalem, Netanya, Haïfa, Ashdod, Ra'anana — pour les entreprises et indépendants francophones, hispanophones et hébréophones. Google Ads, Meta Ads, Bing Ads et TikTok Ads : un seul système, un seul dashboard, où que vous soyez dans le pays.",
  },
  caseStudies: {
    metaTitle: "Cas clients | Résultats de nos campagnes | Roasly",
    metaDescription:
      "Cinq campagnes réelles pilotées par Roasly : immobilier, droit, e-commerce santé, énergie, clinique dentaire. Pour chaque cas, la contrainte de départ, ce que nous avons mis en place et un aperçu des résultats.",
    eyebrow: "Cas clients",
    headline: "Ce que le système a produit, en conditions réelles",
    intro:
      "Pour chaque cas : la contrainte de départ, ce que nous avons mis en place, et un aperçu anonymisé des résultats côté plateforme ou CRM.",
    disclaimer:
      "Résultats issus de campagnes réelles gérées par notre équipe. Chiffres arrondis, aperçus reconstitués et données clients anonymisées ou partagées avec leur accord.",
    challengeLabel: "Le défi",
    actionsLabel: "Ce que nous avons mis en place",
    proofLabel: "Aperçu des résultats",
    items: [
      {
        sector: "Immobilier — programme neuf",
        client: "Uplife",
        timeframe: "En quelques semaines",
        platforms: ["Meta Ads"],
        metrics: [
          { value: "≈ 200", label: "Leads acheteurs qualifiés" },
          { value: "9 ₪", label: "Coût par lead" },
          { value: "4,6 %", label: "Taux de clic" },
        ],
        challenge:
          "Vendre les lots d'un programme immobilier neuf à un rythme soutenu, sans dépendre du bouche-à-oreille ni gonfler le budget publicitaire. Sur l'immobilier, un lead mal qualifié fait perdre une demi-journée à l'équipe commerciale.",
        actions: [
          "Landing page dédiée au programme — plans, prix au m², disponibilités — reliée à un formulaire de qualification et au CRM.",
          "Campagnes Meta segmentées par intention d'achat : primo-accédants, investisseurs, familles cherchant plus grand, chacune avec ses propres créas orientées visite.",
          "Qualification automatique des demandes (budget, délai, financement) : seules les demandes prêtes à visiter remontent à l'équipe commerciale, le reste part en séquence de relance.",
        ],
        proof: {
          kind: "meta",
          title: "Gestionnaire de publicités",
          caption: "Résultats anonymisés — Gestionnaire de publicités Meta",
          headers: ["Campagne", "Dépensé", "Coût / lead"],
          rows: [
            ["Investisseurs", "612 ₪", "8,10 ₪"],
            ["Primo-accédants", "548 ₪", "9,40 ₪"],
            ["Familles — 4 pièces", "431 ₪", "9,80 ₪"],
            ["Retargeting visiteurs", "126 ₪", "6,20 ₪"],
          ],
          footer: ["Total — 4 campagnes", "1 717 ₪", "8,76 ₪"],
        },
      },
      {
        sector: "Droit — cabinet d'avocats",
        client: "",
        timeframe: "Sur la durée de la campagne",
        platforms: ["Google Ads"],
        metrics: [
          { value: "800+", label: "Demandes de consultation qualifiées" },
          { value: "≈ 7 €", label: "Coût par demande" },
          { value: "jusqu'à 10 %", label: "Taux de clic sur le Search" },
        ],
        challenge:
          "Capter les particuliers qui cherchent activement un avocat sur des sujets à fort enjeu, sur des mots-clés où tous les cabinets enchérissent en même temps, sans laisser filer le coût par demande.",
        actions: [
          "Campagnes Search structurées par type de dossier, avec des annonces qui reprennent la question exacte tapée par la personne.",
          "Mots-clés négatifs retravaillés chaque semaine pour écarter les recherches d'information gratuite et concentrer le budget sur les demandes de mandat.",
          "Formulaire de pré-qualification (situation, urgence, éligibilité) et remarketing léger sur les visiteurs non convertis.",
        ],
        proof: {
          kind: "google",
          title: "Google Ads — Campagnes",
          caption: "Résultats anonymisés — Google Ads, par campagne",
          headers: ["Campagne", "Conv.", "Coût / conv."],
          rows: [
            ["Recherche — demande directe", "345", "9,10 €"],
            ["Recherche — question précise", "261", "5,40 €"],
            ["Recherche — comparaison", "151", "6,40 €"],
            ["Remarketing", "79", "7,30 €"],
          ],
          footer: ["Total — 4 campagnes", "836", "7,30 €"],
        },
      },
      {
        sector: "E-commerce santé — orthèse anti-ronflement",
        client: "Noctalis",
        timeframe: "Sur 30 jours",
        platforms: ["Meta Ads"],
        metrics: [
          { value: "300+", label: "Leads générés" },
          { value: "20 ₪", label: "Coût par lead" },
          { value: "×2,5", label: "Volume de leads après itération créative" },
        ],
        challenge:
          "Vendre un produit de santé grand public sur un marché sceptique, où la promesse doit rester crédible sans surpromettre, et où c'est le coût du lead qui décide de la rentabilité.",
        actions: [
          "Plusieurs angles créatifs testés en parallèle : témoignage de couple, nuit de sommeil filmée, comparatif avec les solutions encombrantes, chacun avec sa propre accroche.",
          "Formulaire court puis rappel sous 2 h avec un script de qualification (fréquence des ronflements, solutions déjà essayées) : le lead est contacté tant qu'il est chaud.",
          "Boucle d'itération hebdomadaire : les créas au-dessus du coût cible sont coupées, les gagnantes déclinées en nouvelles variantes pour éviter l'usure.",
        ],
        proof: {
          kind: "meta",
          title: "Gestionnaire de publicités",
          caption: "Résultats anonymisés — Gestionnaire de publicités Meta",
          headers: ["Créa", "Leads", "Coût / lead"],
          rows: [
            ["Témoignage de couple", "112", "18 ₪"],
            ["Nuit de sommeil (vidéo)", "94", "21 ₪"],
            ["Comparatif solutions", "61", "23 ₪"],
            ["Carrousel produit", "38", "26 ₪"],
          ],
          footer: ["Total — 30 jours", "305", "20 ₪"],
        },
      },
      {
        sector: "Énergie & rénovation de l'habitat",
        client: "",
        timeframe: "Sur plusieurs comptes, en continu",
        platforms: ["Meta Ads", "Google Ads"],
        metrics: [
          { value: "2 500+", label: "Leads générés sur le vertical" },
          { value: "÷ 4", label: "Coût par lead vs le point de départ" },
          { value: "1,5 M+", label: "Personnes touchées" },
        ],
        challenge:
          "Alimenter plusieurs marques d'énergie et de rénovation en demandes de devis, sur un marché où des dizaines d'annonceurs diffusent la même offre et où le coût par lead double dès qu'une créa s'use.",
        actions: [
          "Un système de test créatif permanent : angles économies, confort, aide au financement, en formats courts, avec un budget qui bascule chaque semaine vers ce qui tient.",
          "Double canal Meta + Google : Meta pour créer la demande, Google Search pour capter les recherches actives (« prime rénovation », « devis pompe à chaleur »).",
          "Suivi des appels et des devis signés remonté dans le dashboard : l'optimisation se fait sur le coût du rendez-vous qualifié, pas sur le clic.",
        ],
        proof: {
          kind: "google",
          title: "Google Ads — Vue d'ensemble",
          caption: "Résultats anonymisés — Google Ads, vue d'ensemble (7 jours)",
          headers: ["7 derniers jours", "Valeur", "Évolution"],
          rows: [
            ["Clics", "6 800", "+18 %"],
            ["Demandes de devis", "214", "+31 %"],
            ["Coût par demande", "14 €", "−22 %"],
            ["Taux de conversion", "3,1 %", "+0,6 pt"],
          ],
          footer: ["Budget sur la période", "2 940 €", "—"],
        },
      },
      {
        sector: "Santé — clinique dentaire",
        client: "",
        timeframe: "Sur environ 10 mois",
        platforms: ["Meta Ads"],
        metrics: [
          { value: "400+", label: "Demandes de rendez-vous" },
          { value: "dès 30 ₪", label: "Coût par demande sur les meilleures campagnes" },
          { value: "3,4 %", label: "Taux de clic" },
        ],
        challenge:
          "Remplir l'agenda sur des soins à forte valeur (implants, facettes) quand le coût par contact grimpe vite et qu'une partie des demandes ne se présente jamais au cabinet.",
        actions: [
          "Rotation créative continue : vidéos patient, avant/après conformes aux règles de la plateforme, messages séparés par type de soin (implant, esthétique, urgence).",
          "Campagnes dédoublées par langue (hébreu / français) et formulaire qui filtre d'emblée les demandes hors zone ou hors budget.",
          "Rappel rapide puis confirmation la veille du rendez-vous pour faire baisser le taux d'absence, suivi dans le CRM connecté au dashboard.",
        ],
        proof: {
          kind: "calendar",
          title: "Agenda — aujourd'hui",
          caption: "Agenda anonymisé — journée type après lancement",
          headers: ["Heure", "Motif", "Statut"],
          rows: [
            ["09:00", "Consultation implant", "Confirmé"],
            ["10:30", "Bilan esthétique", "Confirmé"],
            ["11:15", "Devis facettes", "Nouveau"],
            ["14:00", "Consultation implant", "Confirmé"],
            ["16:30", "Suivi post-opératoire", "Confirmé"],
          ],
          footer: ["7 rendez-vous", "dont 4 nouveaux patients", "—"],
        },
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
        location: "Israël",
        bio: "J'accompagne les entreprises et indépendants francophones, hispanophones et hébréophones en Israël qui veulent un système d'acquisition clair, pas des promesses. Landing page, campagnes Google Ads et Meta Ads, tracking, CRM et dashboard en temps réel : je construis l'ensemble avec vous et je l'optimise chaque semaine sur données réelles. Quand vous appelez, vous parlez à la personne qui gère réellement vos campagnes.",
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
