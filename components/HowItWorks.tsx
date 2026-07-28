import type { SiteContent } from "@/lib/content/types";

const icons = [
  <path key="0" d="M11 4a7 7 0 100 14 7 7 0 000-14zm10 17l-4.35-4.35" />,
  <path key="1" d="M4 20V10m6 10V4m6 16v-7" />,
  <path
    key="2"
    d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5l-1.9-4.6L5.5 9l4.6-1.9L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z"
  />,
  <path key="3" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
];

export default function HowItWorks({ content }: { content: SiteContent }) {
  return (
    <section id="how-it-works" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-kicker text-ink/50">
          {content.howItWorks.eyebrow}
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">
          {content.howItWorks.headline}
        </h2>

        <div className="relative mt-16 grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-14 lg:grid-cols-4 lg:gap-6">
          <div
            className="absolute top-8 hidden h-px w-full bg-gradient-to-r from-signal via-amber to-signal opacity-30 lg:block"
            aria-hidden
          />
          {content.howItWorks.steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-4 lg:block">
                <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ink text-paper shadow-[0_12px_24px_-8px_rgba(20,24,42,0.4)]">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {icons[i]}
                  </svg>
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-kicker text-ink/40 lg:hidden">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-5 lg:mt-6">
                <span className="hidden font-mono text-xs font-semibold uppercase tracking-kicker text-ink/40 lg:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/70">
                  {step.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="rounded-full border border-ink/10 bg-paper-raised px-2.5 py-1 font-mono text-[10px] text-ink/55"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
