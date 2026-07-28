import type { SiteContent } from "@/lib/content/types";

const icons = [
  <path key="0" d="M4 17V7a2 2 0 012-2h5l2 2h5a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2z" />,
  <path key="1" d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5l-2 2m-9 9l-2 2m13 0l-2-2m-9-9l-2-2" />,
  <path key="2" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  <path key="3" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-4a4 4 0 100-8 4 4 0 000 8zm6 4a4 4 0 00-3-3.87" />,
];

const accents = ["text-signal", "text-amber", "text-signal", "text-amber"];

export default function ValueProps({ content }: { content: SiteContent }) {
  return (
    <section id="services" className="bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {content.valueProps.map((item, i) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-card border border-ink/10 bg-paper p-7 shadow-[0_1px_0_rgba(20,24,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(20,24,42,0.25)]"
            >
              <span
                className="pointer-events-none absolute -end-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-signal/10 to-amber/10 transition-transform duration-500 group-hover:scale-150"
                aria-hidden
              />
              <span
                className={`relative flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 ${accents[i]}`}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {icons[i]}
                </svg>
              </span>
              <h3 className="relative mt-5 font-display text-xl font-bold leading-snug">
                {item.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
