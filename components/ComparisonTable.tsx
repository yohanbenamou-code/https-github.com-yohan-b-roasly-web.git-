import type { SiteContent } from "@/lib/content/types";
import Reveal from "./Reveal";

export default function ComparisonTable({ content }: { content: SiteContent }) {
  const { eyebrow, headline, note, columns, rows } = content.comparison;

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-kicker text-blue">{eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
            {headline}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {columns.map((col, colIndex) => {
            const isRoasly = colIndex === 0;
            return (
              <Reveal
                key={col}
                delay={colIndex * 90}
                className={`relative flex flex-col rounded-xl2 p-7 ${
                  isRoasly
                    ? "bg-ink text-paper shadow-lift lg:-translate-y-3"
                    : "border border-line bg-paper-raised"
                }`}
              >
                {isRoasly && (
                  <span className="absolute -top-3 start-7 rounded-full bg-gradient-to-r from-blue-bright to-blue-soft px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-kicker text-white">
                    Roasly
                  </span>
                )}
                <h3
                  className={`font-display text-lg font-bold ${
                    isRoasly ? "text-paper" : "text-ink/60"
                  }`}
                >
                  {col}
                </h3>

                <ul className="mt-6 flex-1 space-y-5">
                  {rows.map((row) => (
                    <li key={row.label} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          isRoasly ? "bg-signal/20 text-signal" : "bg-ink/5 text-ink/30"
                        }`}
                      >
                        {isRoasly ? (
                          <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none">
                            <path d="M4 10.5l3.5 3.5L16 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none">
                            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        )}
                      </span>
                      <div>
                        <p
                          className={`font-mono text-[11px] uppercase tracking-kicker ${
                            isRoasly ? "text-paper/40" : "text-ink/35"
                          }`}
                        >
                          {row.label}
                        </p>
                        <p
                          className={`mt-0.5 text-sm leading-snug ${
                            isRoasly ? "font-medium text-paper/90" : "text-ink/60"
                          }`}
                        >
                          {row.values[colIndex]}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-10 max-w-xl font-display text-lg italic leading-snug text-ink/55">
          {note}
        </p>
      </div>
    </section>
  );
}
