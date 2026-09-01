import type { SiteContent } from "@/lib/content/types";
import Reveal from "./Reveal";

const icons = [
  <path key="0" d="M11 4a7 7 0 100 14 7 7 0 000-14zm10 17l-4.35-4.35" />,
  <path key="1" d="M4 20V10m6 10V4m6 16v-7" />,
  <path
    key="2"
    d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5l-1.9-4.6L5.5 9l4.6-1.9L12 3z"
  />,
  <path key="3" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
];

export default function HowItWorks({ content }: { content: SiteContent }) {
  return (
    <section id="how-it-works" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-kicker text-blue">
            {content.howItWorks.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
            {content.howItWorks.headline}
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            className="absolute left-0 top-8 hidden h-px w-full bg-gradient-to-r from-blue/40 via-blue/15 to-transparent lg:block"
            aria-hidden
          />
          {content.howItWorks.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90} className="relative">
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-blue-soft shadow-lift">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {icons[i]}
                </svg>
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue font-mono text-[10px] font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <h3 className="mt-6 font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/60">
                {step.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {step.details.map((detail) => (
                  <li
                    key={detail}
                    className="rounded-full border border-line bg-paper-raised px-2.5 py-1 font-mono text-[10px] text-ink/50"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
