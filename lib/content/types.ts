export type NavLink = {
  label: string;
  href: string;
};

export type CaseChartPoint = {
  label: string;
  /** Numeric value used to size the bar / place the point. */
  value: number;
  /** Formatted value shown next to the bar. */
  display: string;
  /** Short caption under the label (e.g. leads count, status). */
  note?: string;
  /** compare chart: previous-period value and its label. */
  prev?: number;
  prevDisplay?: string;
  /** compare chart: formatted delta badge, e.g. "+31 %". */
  delta?: string;
  /** Whether the movement / this value is the favourable one. */
  good?: boolean;
};

export type CaseChart = {
  kind: "bars" | "trend" | "compare" | "agenda";
  title: string;
  caption: string;
  /** bars: lower values are better (cost metrics), so the smallest is highlighted. */
  lowerIsBetter?: boolean;
  points: CaseChartPoint[];
};

export type CaseStudyItem = {
  id: string;
  sector: string;
  client: string;
  market: string;
  timeframe: string;
  platforms: string[];
  /** One sentence stating the outcome in plain words. */
  headline: string;
  /** Exactly 4 figures, first one is the lead figure. */
  metrics: { value: string; label: string }[];
  challenge: string;
  actions: string[];
  charts: CaseChart[];
  /** Optional one-line takeaway under the charts. */
  takeaway?: string;
};

export type CaseStudiesContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  disclaimer: string;
  overview: { value: string; label: string }[];
  indexLabel: string;
  challengeLabel: string;
  actionsLabel: string;
  resultsLabel: string;
  items: CaseStudyItem[];
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    links: NavLink[];
    cta: string;
  };
  hero: {
    kicker: string;
    h1: string;
    headline: string;
    subheadline: string;
    cta: string;
  };
  seoLinks: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  caseStudies: CaseStudiesContent;
  platforms: string[];
  valuePropsEyebrow: string;
  valuePropsHeadline: string;
  valueProps: {
    title: string;
    description: string;
  }[];
  stats: {
    eyebrow: string;
    headline: string;
    items: { value: number; suffix: string; label: string }[];
    sectorsLabel: string;
    sectors: string[];
  };
  howItWorks: {
    eyebrow: string;
    headline: string;
    steps: { title: string; description: string; details: string[] }[];
  };
  dashboard: {
    eyebrow: string;
    headline: string;
    description: string;
    metrics: { label: string; value: string }[];
  };
  comparison: {
    eyebrow: string;
    headline: string;
    note: string;
    columns: [string, string, string];
    rows: { label: string; values: [string, string, string] }[];
  };
  estimator: {
    eyebrow: string;
    headline: string;
    description: string;
    budgetLabel: string;
    perMonth: string;
    results: {
      leads: string;
      cpl: string;
      revenue: string;
    };
    roasCaption: string;
    disclaimer: string;
    note: string;
    cta: string;
  };
  trust: {
    eyebrow: string;
    headline: string;
    body: string;
    bullets: string[];
  };
  reviews: {
    eyebrow: string;
    headline: string;
    items: { name: string; role: string; initial: string; text: string; timeAgo: string }[];
  };
  team: {
    eyebrow: string;
    headline: string;
    intro: string;
    members: {
      name: string;
      role: string;
      location: string;
      bio: string;
      tags: string[];
    }[];
  };
  antiPositioning: {
    headline: string;
    body: string;
  };
  faq: {
    eyebrow: string;
    headline: string;
    items: { question: string; answer: string }[];
  };
  finalCta: {
    eyebrow: string;
    headline: string;
    body: string;
    button: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: {
    tagline: string;
    legal: string[];
    copyright: string;
    contactLabel: { email: string; whatsapp: string };
  };
  whatsappCta: {
    label: string;
    ariaLabel: string;
    message: string;
  };
};
