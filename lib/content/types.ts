export type NavLink = {
  label: string;
  href: string;
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
  caseStudies: {
    eyebrow: string;
    headline: string;
    intro: string;
    disclaimer: string;
    challengeLabel: string;
    actionsLabel: string;
    proofLabel: string;
    items: {
      sector: string;
      client: string;
      timeframe: string;
      platforms: string[];
      metrics: { value: string; label: string }[];
      challenge: string;
      actions: string[];
      proof: {
        kind: "meta" | "google" | "crm" | "calendar";
        title: string;
        caption: string;
        headers: [string, string, string];
        rows: [string, string, string][];
        footer: [string, string, string];
      };
    }[];
  };
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
};
