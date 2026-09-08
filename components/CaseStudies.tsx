import type { SiteContent } from "@/lib/content/types";
import Reveal from "./Reveal";

type Proof = SiteContent["caseStudies"]["items"][number]["proof"];

const KIND_STYLE: Record<
  Proof["kind"],
  { dot: string; label: string; accent: string }
> = {
  meta: { dot: "#4F8BFF", label: "Meta", accent: "#4F8BFF" },
  google: { dot: "#34A853", label: "Google Ads", accent: "#5FE3FF" },
  crm: { dot: "#2FB98A", label: "CRM", accent: "#2FB98A" },
  calendar: { dot: "#F4A93C", label: "Agenda", accent: "#F4A93C" },
};

function statusTone(s: string) {
  const v = s.toLowerCase();
  if (/(confirm|מאושר|confirm)/.test(v)) return "bg-signal/15 text-signal";
  if (/(nouveau|nueva|nuevo|חדש|new)/.test(v)) return "bg-blue/15 text-blue-soft";
  return "bg-white/10 text-paper/60";
}

function CaseProof({ proof }: { proof: Proof }) {
  const s = KIND_STYLE[proof.kind];
  const isSchedule = proof.kind === "calendar" || proof.kind === "crm";

  return (
    <figure className="overflow-hidden rounded-xl2 border border-white/10 bg-ink-soft shadow-liftDark">
      <div className="flex items-center gap-2 border-b border-white/10 bg-black/20 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ms-2 flex items-center gap-1.5 font-mono text-[11px] text-paper/45">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />
          {proof.title}
        </span>
      </div>

      <div className="p-4">
        {proof.kind === "google" && (
          <svg viewBox="0 0 320 60" className="mb-3 h-14 w-full" fill="none" aria-hidden>
            <path
              d="M0 48 L40 40 L80 44 L120 30 L160 34 L200 20 L240 24 L280 10 L320 14"
              stroke={s.accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        <div className="grid grid-cols-[1.4fr_0.8fr_0.9fr] gap-2 border-b border-white/10 pb-2 font-mono text-[10px] uppercase tracking-kicker text-paper/35">
          <span>{proof.headers[0]}</span>
          <span className="text-end">{proof.headers[1]}</span>
          <span className="text-end">{proof.headers[2]}</span>
        </div>

        <ul className="divide-y divide-white/5">
          {proof.rows.map((row, i) => (
            <li
              key={i}
              className="grid grid-cols-[1.4fr_0.8fr_0.9fr] items-center gap-2 py-2.5 text-[13px]"
            >
              <span className="flex min-w-0 items-center gap-2 text-paper/80">
                {isSchedule ? (
                  <span
                    className="h-3.5 w-1 shrink-0 rounded-full"
                    style={{ background: s.accent }}
                  />
                ) : null}
                <span className="truncate">{row[0]}</span>
              </span>
              {isSchedule ? (
                <span className="truncate text-end text-paper/60">{row[1]}</span>
              ) : (
                <span className="text-end font-mono text-paper/70 ltr-nums">{row[1]}</span>
              )}
              {isSchedule ? (
                <span className="flex justify-end">
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${statusTone(
                      row[2]
                    )}`}
                  >
                    {row[2]}
                  </span>
                </span>
              ) : (
                <span
                  className="text-end font-mono ltr-nums"
                  style={{
                    color: row[2].startsWith("+")
                      ? "#2FB98A"
                      : row[2].startsWith("−") || row[2].startsWith("-")
                        ? "#F4A93C"
                        : s.accent,
                  }}
                >
                  {row[2]}
                </span>
              )}
            </li>
          ))}
        </ul>

        {isSchedule ? (
          <div className="mt-2 flex items-center justify-between gap-3 rounded-lg bg-white/[0.04] px-3 py-2.5 text-[13px]">
            <span className="font-semibold text-paper/90">{proof.footer[0]}</span>
            <span className="text-end text-paper/60">{proof.footer[1]}</span>
          </div>
        ) : (
          <div className="mt-2 grid grid-cols-[1.4fr_0.8fr_0.9fr] items-center gap-2 rounded-lg bg-white/[0.04] px-2 py-2.5 text-[13px]">
            <span className="font-semibold text-paper/90">{proof.footer[0]}</span>
            <span className="text-end font-mono text-paper/80 ltr-nums">{proof.footer[1]}</span>
            <span className="text-end font-mono ltr-nums" style={{ color: s.accent }}>
              {proof.footer[2]}
            </span>
          </div>
        )}
      </div>

      <figcaption className="border-t border-white/10 px-4 py-2.5 font-mono text-[10px] text-paper/35">
        {proof.caption}
      </figcaption>
    </figure>
  );
}

export default function CaseStudies({ content }: { content: SiteContent }) {
  const {
    eyebrow,
    headline,
    intro,
    disclaimer,
    challengeLabel,
    actionsLabel,
    proofLabel,
    items,
  } = content.caseStudies;

  return (
    <section id="case-studies" className="bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-kicker text-blue">{eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
            {headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/60">{intro}</p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {items.map((item, i) => (
            <Reveal
              key={item.sector + i}
              as="article"
              delay={i * 60}
              className="overflow-hidden rounded-xl2 border border-line bg-white p-6 sm:p-9"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-lg font-semibold text-ink/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold leading-snug text-ink">
                      {item.sector}
                    </h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink/45">
                      {item.client && (
                        <span className="font-semibold text-ink/70">{item.client}</span>
                      )}
                      {item.client && <span aria-hidden>·</span>}
                      <span>{item.timeframe}</span>
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {item.platforms.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-line bg-paper-raised px-2.5 py-1 font-mono text-[10px] text-ink/55"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {item.metrics.map((m) => (
                  <div key={m.label} className="rounded-card bg-ink p-5 text-paper">
                    <p className="font-display text-[1.9rem] font-extrabold leading-none ltr-nums tabular-nums text-gradient sm:text-[2.1rem]">
                      {m.value}
                    </p>
                    <p className="mt-2 text-[11px] leading-snug text-paper/55">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-8 border-t border-line pt-8 lg:grid-cols-[1fr_1fr]">
                <div className="space-y-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-kicker text-ink/40">
                      {challengeLabel}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.challenge}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-kicker text-ink/40">
                      {actionsLabel}
                    </p>
                    <ol className="mt-3 space-y-2.5">
                      {item.actions.map((a, ai) => (
                        <li key={ai} className="flex gap-3 text-sm leading-relaxed text-ink/70">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/10 font-mono text-[10px] font-bold text-blue">
                            {ai + 1}
                          </span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-kicker text-ink/40">
                    {proofLabel}
                  </p>
                  <div className="mt-3">
                    <CaseProof proof={item.proof} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-ink/40">{disclaimer}</p>
      </div>
    </section>
  );
}
