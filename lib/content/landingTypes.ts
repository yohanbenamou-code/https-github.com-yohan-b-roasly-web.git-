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
};
