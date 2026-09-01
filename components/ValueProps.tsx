import type { SiteContent } from "@/lib/content/types";
import Reveal from "./Reveal";

const icons = [
  <path key="0" d="M4 17V7a2 2 0 012-2h5l2 2h5a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2z" />,
  <path key="1" d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5l-2 2m-9 9l-2 2m13 0l-2-2m-9-9l-2-2" />,
  <path key="2" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  <path key="3" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-4a4 4 0 100-8 4 4 0 000 8zm6 4a4 4 0 00-3-3.87" />,
];

export default function ValueProps({ content }: { content: SiteContent }) {
  return (
    <section id="services" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-kicker text-blue">
            {content.valuePropsEyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
            {content.valuePropsHeadline}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.valueProps.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/30 hover:shadow-lift"
            >
              <span
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-blue/10 to-cyan/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue to-blue-deep text-white shadow-[0_10px_24px_-10px_rgba(59,110,246,0.7)]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {icons[i]}
                  </svg>
                </span>
                <span className="font-mono text-sm font-semibold text-ink/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="relative mt-5 font-display text-lg font-bold leading-snug text-ink">
                {item.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink/60">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
