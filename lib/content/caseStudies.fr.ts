import type { CaseStudiesContent } from "./types";

export const caseStudiesFr: CaseStudiesContent = {
  metaTitle: "Cas clients | Résultats de nos campagnes | Roasly",
  metaDescription:
    "Six campagnes réelles pilotées par Roasly : maisons de retraite, immobilier, droit, e-commerce santé, énergie, clinique dentaire. Pour chaque cas : budget, volume de leads, coût par lead et ce que nous avons changé pour y arriver.",
  eyebrow: "Cas clients",
  headline: "Des campagnes réelles, avec leurs vrais chiffres",
  intro:
    "Budget dépensé, leads obtenus, coût par lead : pour chaque cas, nous montrons ce que la campagne a produit, ce qui a posé problème et ce que nous avons ajusté.",
  disclaimer:
    "Résultats issus de campagnes réelles gérées par notre équipe. Chiffres arrondis, noms de clients omis ou publiés avec leur accord. Les devises sont celles des comptes publicitaires concernés.",
  overview: [
    { value: "6", label: "secteurs d'activité" },
    { value: "8 300+", label: "leads générés sur ces six cas" },
    { value: "25 K€", label: "dépensés sur le plus gros compte, en 90 jours" },
  ],
  indexLabel: "Aller au cas",
  challengeLabel: "Le point de départ",
  actionsLabel: "Ce que nous avons fait",
  resultsLabel: "Les chiffres",
  items: [
    {
      id: "maisons-de-retraite",
      sector: "Maisons de retraite",
      client: "Réseau de résidences pour seniors",
      market: "Espagne",
      timeframe: "90 jours",
      platforms: ["Google Ads"],
      headline:
        "4 076 demandes de familles en 90 jours, à 6,17 € le lead, avec un coût qui baisse chaque semaine.",
      metrics: [
        { value: "4 076", label: "leads générés, soit environ 45 par jour" },
        { value: "25 152 €", label: "investis sur 90 jours" },
        { value: "6,17 €", label: "coût moyen par lead" },
        { value: "9,25 %", label: "taux de clic moyen, CPC à 0,79 €" },
      ],
      challenge:
        "Une famille qui cherche une place pour un proche décide vite, localement et sous pression. Le même mot-clé coûte 1,81 € le lead dans une ville et plus de 10 € dans une autre. Avec 18 groupes d'annonces actifs sur tout le pays, le risque est de laisser le budget partir là où il rapporte le moins.",
      actions: [
        "Campagnes Search organisées par intitulé de recherche (résidences, gériatrie, personnes âgées) et par zone, une famille « volume » et une famille « base ».",
        "Audit de la répartition : 91 % de la dépense allait aux campagnes à 6,70 € le lead, alors que les campagnes de base tournaient à 3,10 €. Rééquilibrage du budget et CPA cible sur les campagnes les plus chères.",
        "Pilotage ville par ville : les zones sous 5 € le lead (Tenerife, Alicante, Palma, Oviedo) sont renforcées, celles au-dessus de 8 € sont revues ou réduites.",
        "Plan d'optimisation sur 3 semaines : 15 nouveaux titres d'annonces, extensions manquantes dont le formulaire de lead mobile (80 % du trafic), 9 requêtes très convertissantes passées en mot-clé exact.",
      ],
      charts: [
        {
          kind: "bars",
          title: "Coût par lead selon la zone",
          caption: "Google Ads, 30 derniers jours",
          lowerIsBetter: true,
          points: [
            { label: "Tenerife", value: 1.81, display: "1,81 €", good: true },
            { label: "Alicante", value: 2.98, display: "2,98 €", good: true },
            { label: "Oviedo", value: 4.15, display: "4,15 €", good: true },
            { label: "Palma", value: 4.82, display: "4,82 €", good: true },
            { label: "Madrid", value: 6.83, display: "6,83 €", note: "plus gros volume" },
            { label: "Galapagar", value: 8.19, display: "8,19 €", good: false },
            { label: "Navalcarnero", value: 10.16, display: "10,16 €", good: false },
          ],
        },
        {
          kind: "trend",
          title: "Coût moyen par lead, semaine après semaine",
          caption: "Objectif : 4,80 €",
          lowerIsBetter: true,
          points: [
            { label: "13–19 avr.", value: 7.04, display: "7,04 €" },
            { label: "20–26 avr.", value: 6.7, display: "6,70 €" },
            { label: "27 avr.–3 mai", value: 6.36, display: "6,36 €" },
            { label: "4–12 mai", value: 6.32, display: "6,32 €" },
          ],
        },
      ],
      takeaway:
        "Le coût par lead est passé de 7,04 € à 6,32 € en trois semaines (−10 %), sans augmenter le budget.",
    },
    {
      id: "immobilier",
      sector: "Immobilier, programme neuf",
      client: "Uplife",
      market: "Israël",
      timeframe: "Quelques semaines",
      platforms: ["Meta Ads"],
      headline:
        "Environ 200 acheteurs qualifiés pour un programme neuf, à moins de 9 ₪ le lead.",
      metrics: [
        { value: "≈ 200", label: "leads acheteurs qualifiés" },
        { value: "1 717 ₪", label: "dépensés sur 4 campagnes" },
        { value: "8,76 ₪", label: "coût moyen par lead" },
        { value: "4,6 %", label: "taux de clic" },
      ],
      challenge:
        "Vendre les lots d'un programme neuf sans dépendre du bouche-à-oreille ni gonfler le budget. En immobilier, un lead mal qualifié fait perdre une demi-journée à l'équipe commerciale.",
      actions: [
        "Landing page dédiée au programme (plans, prix au m², disponibilités) reliée à un formulaire de qualification et au CRM.",
        "Campagnes Meta séparées par intention d'achat : investisseurs, primo-accédants, familles qui cherchent plus grand, et retargeting des visiteurs.",
        "Qualification automatique (budget, délai, financement) : seules les demandes prêtes à visiter remontent à l'équipe, les autres partent en relance.",
      ],
      charts: [
        {
          kind: "bars",
          title: "Coût par lead selon la campagne",
          caption: "Gestionnaire de publicités Meta",
          lowerIsBetter: true,
          points: [
            { label: "Retargeting visiteurs", value: 6.2, display: "6,20 ₪", note: "126 ₪ dépensés", good: true },
            { label: "Investisseurs", value: 8.1, display: "8,10 ₪", note: "612 ₪ dépensés" },
            { label: "Primo-accédants", value: 9.4, display: "9,40 ₪", note: "548 ₪ dépensés" },
            { label: "Familles, 4 pièces", value: 9.8, display: "9,80 ₪", note: "431 ₪ dépensés" },
          ],
        },
      ],
    },
    {
      id: "droit",
      sector: "Droit, cabinet d'avocats",
      client: "",
      market: "",
      timeframe: "Sur la durée de la campagne",
      platforms: ["Google Ads"],
      headline:
        "836 demandes de consultation qualifiées, à 7,30 € l'unité, sur des mots-clés où tous les cabinets enchérissent.",
      metrics: [
        { value: "836", label: "demandes de consultation" },
        { value: "≈ 6 100 €", label: "investis sur 4 campagnes" },
        { value: "7,30 €", label: "coût moyen par demande" },
        { value: "jusqu'à 10 %", label: "taux de clic sur le Search" },
      ],
      challenge:
        "Capter les particuliers qui cherchent activement un avocat sur des sujets à fort enjeu, sans laisser filer le coût par demande sur des mots-clés très disputés.",
      actions: [
        "Campagnes Search structurées par type de dossier, avec des annonces qui reprennent la question exacte tapée par la personne.",
        "Mots-clés négatifs retravaillés chaque semaine pour écarter les recherches d'information gratuite et concentrer le budget sur les demandes de mandat.",
        "Formulaire de pré-qualification (situation, urgence, éligibilité) et remarketing léger sur les visiteurs qui n'ont pas converti.",
      ],
      charts: [
        {
          kind: "bars",
          title: "Coût par demande selon la campagne",
          caption: "Google Ads, par campagne",
          lowerIsBetter: true,
          points: [
            { label: "Recherche, question précise", value: 5.4, display: "5,40 €", note: "261 demandes", good: true },
            { label: "Recherche, comparaison", value: 6.4, display: "6,40 €", note: "151 demandes" },
            { label: "Remarketing", value: 7.3, display: "7,30 €", note: "79 demandes" },
            { label: "Recherche, demande directe", value: 9.1, display: "9,10 €", note: "345 demandes", good: false },
          ],
        },
      ],
      takeaway:
        "La campagne la plus chère au clic est aussi celle qui apporte le plus de volume : nous la gardons, mais elle ne reçoit plus le budget des autres.",
    },
    {
      id: "e-commerce-sante",
      sector: "E-commerce santé, orthèse anti-ronflement",
      client: "Noctalis",
      market: "Israël",
      timeframe: "30 jours",
      platforms: ["Meta Ads"],
      headline:
        "305 leads en 30 jours à 20 ₪ pièce, et un volume multiplié par 2,5 après les premières itérations créatives.",
      metrics: [
        { value: "305", label: "leads en 30 jours" },
        { value: "≈ 6 080 ₪", label: "dépensés sur 4 formats" },
        { value: "20 ₪", label: "coût moyen par lead" },
        { value: "×2,5", label: "volume de leads après itération créative" },
      ],
      challenge:
        "Vendre un produit de santé grand public sur un marché sceptique, avec une promesse crédible, et où le coût du lead décide seul de la rentabilité.",
      actions: [
        "Plusieurs angles créatifs testés en parallèle : témoignage de couple, nuit de sommeil filmée, comparatif avec les solutions encombrantes.",
        "Formulaire court, puis rappel sous 2 heures avec un script de qualification (fréquence des ronflements, solutions déjà essayées).",
        "Boucle hebdomadaire : les créas au-dessus du coût cible sont coupées, les gagnantes déclinées en variantes pour éviter l'usure.",
      ],
      charts: [
        {
          kind: "bars",
          title: "Coût par lead selon la créa",
          caption: "Gestionnaire de publicités Meta",
          lowerIsBetter: true,
          points: [
            { label: "Témoignage de couple", value: 17, display: "17 ₪", note: "112 leads", good: true },
            { label: "Nuit de sommeil, vidéo", value: 20, display: "20 ₪", note: "94 leads" },
            { label: "Comparatif solutions", value: 22, display: "22 ₪", note: "61 leads" },
            { label: "Carrousel produit", value: 25, display: "25 ₪", note: "38 leads", good: false },
          ],
        },
      ],
    },
    {
      id: "energie-renovation",
      sector: "Énergie et rénovation de l'habitat",
      client: "",
      market: "",
      timeframe: "En continu, sur plusieurs comptes",
      platforms: ["Meta Ads", "Google Ads"],
      headline:
        "Plus de 2 500 demandes de devis, avec un coût par lead divisé par quatre depuis le démarrage.",
      metrics: [
        { value: "2 500+", label: "demandes de devis sur le vertical" },
        { value: "÷ 4", label: "coût par lead depuis le démarrage" },
        { value: "14 €", label: "coût par demande sur la dernière semaine" },
        { value: "1,5 M+", label: "personnes touchées" },
      ],
      challenge:
        "Alimenter plusieurs marques en demandes de devis sur un marché où des dizaines d'annonceurs diffusent la même offre, et où le coût par lead double dès qu'une créa s'use.",
      actions: [
        "Test créatif permanent : angles économies, confort, aide au financement, en formats courts, avec un budget qui bascule chaque semaine vers ce qui tient.",
        "Double canal : Meta pour créer la demande, Google Search pour capter les recherches actives (« prime rénovation », « devis pompe à chaleur »).",
        "Appels et devis signés remontés dans le dashboard : l'optimisation se fait sur le coût du rendez-vous qualifié, pas sur le clic.",
      ],
      charts: [
        {
          kind: "compare",
          title: "Dernière semaine contre la précédente",
          caption: "Google Ads, 2 940 € dépensés sur la période",
          points: [
            { label: "Clics", value: 6800, display: "6 800", prev: 5760, prevDisplay: "5 760", delta: "+18 %", good: true },
            { label: "Demandes de devis", value: 214, display: "214", prev: 163, prevDisplay: "163", delta: "+31 %", good: true },
            { label: "Coût par demande", value: 14, display: "14 €", prev: 18, prevDisplay: "18 €", delta: "−22 %", good: true },
            { label: "Taux de conversion", value: 3.1, display: "3,1 %", prev: 2.5, prevDisplay: "2,5 %", delta: "+0,6 pt", good: true },
          ],
        },
      ],
    },
    {
      id: "clinique-dentaire",
      sector: "Santé, clinique dentaire",
      client: "",
      market: "Israël",
      timeframe: "Environ 10 mois",
      platforms: ["Meta Ads"],
      headline:
        "Plus de 400 demandes de rendez-vous sur 10 mois, à partir de 30 ₪ la demande sur les meilleures campagnes.",
      metrics: [
        { value: "400+", label: "demandes de rendez-vous" },
        { value: "dès 30 ₪", label: "coût par demande, meilleures campagnes" },
        { value: "3,4 %", label: "taux de clic" },
        { value: "10 mois", label: "de campagne continue" },
      ],
      challenge:
        "Remplir l'agenda sur des soins à forte valeur (implants, facettes) quand le coût par contact grimpe vite et qu'une partie des demandes ne se présente jamais au cabinet.",
      actions: [
        "Rotation créative continue : vidéos patient, avant/après conformes aux règles de la plateforme, un message par type de soin.",
        "Campagnes dédoublées par langue (hébreu et français) et formulaire qui filtre d'emblée les demandes hors zone ou hors budget.",
        "Rappel rapide puis confirmation la veille du rendez-vous pour réduire les absences, suivi dans le CRM relié au dashboard.",
      ],
      charts: [
        {
          kind: "agenda",
          title: "Une journée type après le lancement",
          caption: "Agenda anonymisé",
          points: [
            { label: "09:00", value: 0, display: "Consultation implant", note: "Confirmé", good: true },
            { label: "10:30", value: 0, display: "Bilan esthétique", note: "Confirmé", good: true },
            { label: "11:15", value: 0, display: "Devis facettes", note: "Nouveau" },
            { label: "14:00", value: 0, display: "Consultation implant", note: "Confirmé", good: true },
            { label: "16:30", value: 0, display: "Suivi post-opératoire", note: "Confirmé", good: true },
          ],
        },
      ],
      takeaway: "7 rendez-vous ce jour-là, dont 4 nouveaux patients.",
    },
  ],
};
