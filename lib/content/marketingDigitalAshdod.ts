import type { Locale } from "@/lib/i18n";
import type { LandingContent } from "./landingTypes";
export type { LandingContent };

const fr: LandingContent = {
  metaTitle: "Agence marketing digital à Ashdod | Roasly",
  metaDescription:
    "Agence de marketing digital à Ashdod pour les entreprises francophones : Google Ads, Meta Ads, système d'acquisition complet et dashboard en temps réel. Diagnostic gratuit.",
  kicker: "Marketing digital à Ashdod",
  h1: "Votre agence de marketing digital à Ashdod",
  intro:
    "Ashdod est l'une des villes qui grandit le plus vite en Israël, portée par une arrivée continue de nouveaux habitants francophones et de nouveaux quartiers en construction. Ça veut dire une demande locale en hausse constante, mais aussi un marché qui change vite : ce qui fonctionnait il y a un an sur une nouvelle zone résidentielle ne cible plus forcément les bons quartiers aujourd'hui. Roasly ajuste vos campagnes sur cette réalité mouvante plutôt que sur une audience figée.",
  sections: [
    {
      title: "Une ville en expansion, des quartiers qui n'existaient pas il y a quelques années",
      body: "Avec de nouveaux quartiers qui sortent de terre régulièrement, cibler Ashdod avec une audience définie une fois pour toutes fait manquer les zones en pleine croissance. Nous ajustons régulièrement le ciblage géographique des campagnes pour suivre l'expansion réelle de la ville, plutôt que de se baser sur une carte figée.",
    },
    {
      title: "Immobilier neuf et installation : une demande francophone forte et continue",
      body: "Ashdod attire une part importante de nouveaux arrivants francophones, ce qui alimente une demande constante autour de l'immobilier neuf, des services d'installation et des commerces de proximité dans les nouveaux quartiers. Une campagne en français bien ciblée touche directement cette audience, souvent moins sursollicitée que sur des villes plus anciennes en francophones comme Netanya.",
    },
    {
      title: "Port et zone industrielle : une audience professionnelle à ne pas négliger",
      body: "Ashdod, ce n'est pas seulement du résidentiel : le port et la zone industrielle génèrent une activité B2B et logistique réelle. Pour les entreprises qui s'adressent à ce tissu professionnel, une campagne Google Ads orientée recherche qualifiée fonctionne souvent mieux qu'une approche grand public.",
    },
    {
      title: "Suivi des conversions : essentiel sur un marché qui bouge vite",
      body: "Sur une ville qui évolue aussi vite, se fier à des habitudes de ciblage anciennes coûte cher. Nous connectons formulaires, appels et CRM pour savoir en continu quels quartiers et quelles audiences convertissent réellement, et réajuster le ciblage chaque semaine plutôt que de le figer une fois pour toutes.",
    },
    {
      title: "Combien coûte le marketing digital à Ashdod",
      body: "Le coût par clic à Ashdod reste globalement plus accessible qu'à Tel Aviv, avec une demande particulièrement forte sur l'immobilier neuf et les services d'installation. Le budget se fixe avec vous à partir d'un objectif de coût par lead réaliste, présenté lors du diagnostic gratuit, sans forfait générique ni engagement de durée.",
    },
    {
      title: "Secteurs que nous accompagnons à Ashdod",
      body: "Agences immobilières et promoteurs, services d'installation pour nouveaux arrivants, commerces et services de proximité dans les nouveaux quartiers, entreprises liées au port et à la zone industrielle. Des secteurs qui profitent directement de la croissance rapide de la ville, à condition de cibler les bonnes zones au bon moment.",
    },
  ],
  bullets: [
    "Ciblage géographique réajusté régulièrement pour suivre les nouveaux quartiers",
    "Campagnes en français dédiées aux nouveaux arrivants et à leurs besoins d'installation",
    "Compte publicitaire ouvert à votre nom, données conservées si vous partez",
    "Suivi des conversions connecté au CRM, lead par lead",
    "Dashboard en temps réel dès le diagnostic gratuit",
    "Aucun engagement de durée",
  ],
  ctaHeadline: "Parlons de votre système d'acquisition à Ashdod",
  faq: [
    {
      question: "Mon activité vise les nouveaux quartiers d'Ashdod, encore en construction. Vous pouvez cibler ça précisément ?",
      answer:
        "Oui, et c'est même essentiel à Ashdod vu la vitesse à laquelle la ville s'étend. On ajuste régulièrement le ciblage géographique pour suivre les zones réellement en développement plutôt que de se fier à une audience figée.",
    },
    {
      question: "Beaucoup de mes clients sont des nouveaux arrivants francophones. Comment adaptez-vous les campagnes ?",
      answer:
        "En construisant des campagnes en français pensées pour leurs besoins concrets d'installation, pas une simple traduction de campagnes existantes. Le message et les mots-clés sont écrits pour cette audience spécifique.",
    },
    {
      question: "Mon entreprise travaille avec le port ou la zone industrielle, pas avec le grand public. C'est différent ?",
      answer:
        "Oui, et on adapte l'approche en conséquence : une campagne Google Ads orientée recherche qualifiée fonctionne en général mieux qu'une campagne grand public pour toucher ce tissu professionnel.",
    },
    {
      question: "Le marché à Ashdod change vite. Comment évitez-vous que le ciblage devienne obsolète ?",
      answer:
        "En suivant les campagnes chaque semaine sur des données réelles plutôt qu'en fixant le ciblage une fois pour toutes. C'est cette fréquence d'ajustement qui permet de suivre une ville qui évolue aussi rapidement.",
    },
  ],
};

export const marketingDigitalAshdodContent: Partial<Record<Locale, LandingContent>> = { fr };
