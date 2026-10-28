export type LandingContent = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  intro: string;
  sections: { title: string; body: string }[];
  bullets: string[];
  ctaHeadline: string;
  faq: { question: string; answer: string }[];

  /** Who the page speaks to, used in the Service schema (e.g. "Cabinets d'avocats"). */
  audience?: string;
  /** Real search queries the campaigns target, displayed as search-bar chips. */
  searchesLabel?: string;
  searches?: string[];
  /** Numbered method, shown after the sections. */
  stepsLabel?: string;
  steps?: { title: string; body: string }[];
  /** Ids from content.caseStudies.items whose real figures are shown as proof. */
  caseLabel?: string;
  caseStudyIds?: string[];
  /** Set to false where the budget estimator (₪) makes no sense, e.g. a page aimed at France. */
  showEstimator?: boolean;
};
