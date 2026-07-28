import type { SiteContent } from "@/lib/content/types";

export default function ComparisonTable({ content }: { content: SiteContent }) {
  const { eyebrow, headline, note, columns, rows } = content.comparison;

  return (
    <section className="bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-kicker text-ink/50">{eyebrow}</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">
          {headline}
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {columns.map((col, colIndex) => (
            <div
              key={col}
              className={`relative flex flex-col rounded-card border p-7 ${
                colIndex === 0
                  ? "border-transparent bg-ink text-paper shadow-[0_30px_60px_-20px_rgba(20,24,42,0.5)] lg:-translate-y-3"
                  : "border-ink/10 bg-paper"
              }`}
            >
              {colIndex === 0 && (
                <span className="absolute -top-3 start-7 rounded-full bg-amber px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-kicker text-ink">
                  Roasly
                </span>
              )}
              <h3
                className={`font-display text-lg font-bold ${
                  colIndex === 0 ? "text-paper" : "text-ink/70"
                }`}
              >
                {col}
              </h3>

              <ul className="mt-6 flex-1 space-y-5">
                {rows.map((row) => (
                  <li key={row.label} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        colIndex === 0
                          ? "bg-signal/20 text-signal"
                          : "bg-ink/5 text-ink/30"
                      }`}
                    >
                      {colIndex === 0 ? (
                        <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none">
                          <path
                            d="M4 10.5l3.5 3.5L16 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none">
                          <path
                            d="M5 5l10 10M15 5L5 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </span>
                    <div>
                      <p
                        className={`text-xs font-mono uppercase tracking-kicker ${
                          colIndex === 0 ? "text-paper/40" : "text-ink/35"
                        }`}
                      >
                        {row.label}
                      </p>
                      <p
                        className={`mt-0.5 text-sm leading-snug ${
                          colIndex === 0 ? "text-paper/90 font-medium" : "text-ink/60"
                        }`}
                      >
                        {row.values[colIndex]}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-xl font-display text-lg italic leading-snug text-ink/60">
          {note}
        </p>
      </div>
    </section>
  );
}
