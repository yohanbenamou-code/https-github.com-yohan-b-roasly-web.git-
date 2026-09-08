import { getContent } from "@/lib/content";
import { assertValidLocale, type Locale } from "@/lib/i18n";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import DashboardShowcase from "@/components/DashboardShowcase";
import CaseStudies from "@/components/CaseStudies";
import Estimator from "@/components/Estimator";
import Team from "@/components/Team";
import Trust from "@/components/Trust";
import Reviews from "@/components/Reviews";
import AntiPositioning from "@/components/AntiPositioning";
import Faq from "@/components/Faq";
import SeoLinks from "@/components/SeoLinks";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

const liveLabels: Record<Locale, { live: string; leads: string; cpl: string }> = {
  es: { live: "En vivo", leads: "Leads", cpl: "Coste/lead" },
  fr: { live: "En direct", leads: "Leads", cpl: "Coût/lead" },
  he: { live: "בזמן אמת", leads: "לידים", cpl: "עלות/ליד" },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  assertValidLocale(locale);
  const content = getContent(locale);
  const labels = liveLabels[locale];

  return (
    <>
      <Header locale={locale} content={content} />
      <main>
        <Hero
          content={content}
          liveLabel={labels.live}
          leadsLabel={labels.leads}
          cplLabel={labels.cpl}
        />
        <ValueProps content={content} />
        <Stats content={content} />
        <HowItWorks content={content} />
        <DashboardShowcase content={content} />
        <CaseStudies content={content} />
        <Estimator content={content} locale={locale} />
        <Team content={content} locale={locale} />
        <Trust content={content} />
        <Reviews content={content} />
        <AntiPositioning content={content} />
        <Faq content={content} />
        <SeoLinks content={content} locale={locale} />
        <FinalCta content={content} />
      </main>
      <Footer locale={locale} content={content} />
    </>
  );
}
