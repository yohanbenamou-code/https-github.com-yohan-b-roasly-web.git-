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
    headline: string;
    subheadline: string;
    cta: string;
  };
  platforms: string[];
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
