import type {
  CaseChart,
  CaseChartPoint,
  CaseStudyItem,
  SiteContent,
} from "@/lib/content/types";
import Reveal from "./Reveal";
import MetaLogo from "./MetaLogo";

const GOOD = "#2FB98A";
const WARN = "#F4A93C";
const BLUE = "#3B6EF6";

function PlatformTag({ name }: { name: string }) {
  const isMeta = name.toLowerCase().startsWith("meta");
  const isGoogle = name.toLowerCase().startsWith("google");
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-white px-3 py-1 text-xs font-medium text-ink/70">
      {isMeta && <MetaLogo className="h-3.5 w-3.5" />}
      {isGoogle && (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
          <path fill="#4285F4" d="M22 12.2c0-.7-.06-1.4-.18-2H12v3.9h5.6a4.8 4.8 0 01-2.1 3.2v2.6h3.4c2-1.8 3.1-4.5 3.1-7.7z" />
          <path fill="#34A853" d="M12 22c2.8 0 5.2-.9 6.9-2.5l-3.4-2.6c-.95.6-2.15 1-3.5 1a6 6 0 01-5.65-4.15H2.85v2.6A10 10 0 0012 22z" />
          <path fill="#FBBC05" d="M6.35 13.7a6 6 0 010-3.85V7.25H2.85a10 10 0 000 9z" />
          <path fill="#EA4335" d="M12 5.9c1.5 0 2.86.52 3.92 1.53l2.94-2.94A9.6 9.6 0 0012 2a10 10 0 00-9.15 5.25l3.5 2.6A6 6 0 0112 5.9z" />
        </svg>
      )}
      {name}
    </li>
  );
}

function barColor(p: CaseChartPoint, lowerIsBetter?: boolean) {
  if (!lowerIsBetter) return BLUE;
  if (p.good === true) return GOOD;
  if (p.good === false) return WARN;
  return BLUE;
}

function BarsChart({ chart }: { chart: CaseChart }) {
  const max = Math.max(...chart.points.map((p) => p.value));
  return (
    <ul className="space-y-3.5">
      {chart.points.map((p) => (
        <li key={p.label} className="grid grid-cols-[minmax(0,8.5rem)_1fr_auto] items-center gap-x-4 gap-y-1 sm:grid-cols-[minmax(0,11rem)_1fr_auto]">
          <span className="min-w-0">
            <span className="block truncate text-[13px] font-medium text-ink/80">{p.label}</span>
            {p.note && <span className="block truncate text-[11px] text-ink/40">{p.note}</span>}
          </span>
          <span className="h-2.5 overflow-hidden rounded-full bg-ink/[0.06]" aria-hidden>
            <span
              className="bar-fill block h-full rounded-full"
              style={{
                width: `${Math.max(4, (p.value / max) * 100)}%`,
                background: barColor(p, chart.lowerIsBetter),
              }}
            />
          </span>
          <span className="w-16 text-end font-mono text-[13px] font-semibold text-ink ltr-nums">
            {p.display}
          </span>
        </li>
      ))}
    </ul>
  );
}

function TrendChart({ chart }: { chart: CaseChart }) {
  const W = 420;
  const H = 150;
  const padX = 34;
  const top = 30;
  const bottom = 112;
  const vals = chart.points.map((p) => p.value);
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const span = max - min || 1;
  const xs = chart.points.map((_, i) => padX + (i * (W - padX * 2)) / (chart.points.length - 1));
  const ys = vals.map((v) => bottom - ((v - min) / span) * (bottom - top));
  const line = xs.map((x, i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${ys[i].toFixed(1)}`).join(" ");
  const area = `${line} L${xs[xs.length - 1]} ${bottom + 10} L${xs[0]} ${bottom + 10} Z`;
  const last = chart.points.length - 1;
  const improving = chart.lowerIsBetter ? vals[last] <= vals[0] : vals[last] >= vals[0];
  const color = improving ? GOOD : WARN;

  return (
    <div dir="ltr">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={chart.title}>
        <defs>
          <linearGradient id="trend-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={color} stopOpacity="0.22" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#trend-fill)" />
        <path d={line} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {chart.points.map((p, i) => (
          <g key={p.label}>
            <circle cx={xs[i]} cy={ys[i]} r={i === last ? 5 : 3.5} fill="#fff" stroke={color} strokeWidth="2.5" />
            <text x={xs[i]} y={ys[i] - 12} textAnchor="middle" fontSize="12" fontWeight="600" fill="#0A0E1A" fontFamily="var(--font-mono), monospace">
              {p.display}
            </text>
            <text x={xs[i]} y={H - 6} textAnchor="middle" fontSize="10" fill="rgba(10,14,26,0.45)">
              {p.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function CompareChart({ chart }: { chart: CaseChart }) {
  return (
    <ul className="space-y-5">
      {chart.points.map((p) => {
        const prev = p.prev ?? 0;
        const max = Math.max(p.value, prev) || 1;
        return (
          <li key={p.label}>
            <div className="flex items-center justify-between gap-3">
              <span className="text-[13px] font-medium text-ink/80">{p.label}</span>
              {p.delta && (
                <span
                  className="rounded-full px-2 py-0.5 font-mono text-[11px] font-semibold ltr-nums"
                  style={{
                    color: p.good === false ? "#B7791F" : "#1F9C72",
                    background: p.good === false ? "rgba(244,169,60,0.14)" : "rgba(47,185,138,0.12)",
                  }}
                >
                  {p.delta}
                </span>
              )}
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="grid grid-cols-[1fr_auto] items-center gap-3">
                <span className="h-2 overflow-hidden rounded-full bg-ink/[0.06]" aria-hidden>
                  <span className="bar-fill block h-full rounded-full bg-ink/25" style={{ width: `${(prev / max) * 100}%` }} />
                </span>
                <span className="w-14 text-end font-mono text-[11px] text-ink/45 ltr-nums">{p.prevDisplay}</span>
              </div>
              <div className="grid grid-cols-[1fr_auto] items-center gap-3">
                <span className="h-2.5 overflow-hidden rounded-full bg-ink/[0.06]" aria-hidden>
                  <span className="bar-fill block h-full rounded-full" style={{ width: `${(p.value / max) * 100}%`, background: BLUE }} />
                </span>
                <span className="w-14 text-end font-mono text-[13px] font-semibold text-ink ltr-nums">{p.display}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function AgendaChart({ chart }: { chart: CaseChart }) {
  return (
    <ul className="divide-y divide-line">
      {chart.points.map((p) => (
        <li key={p.label + p.display} className="grid grid-cols-[3.5rem_1fr_auto] items-center gap-3 py-3 text-[13px]">
          <span className="font-mono text-ink/45 ltr-nums">{p.label}</span>
          <span className="font-medium text-ink/80">{p.display}</span>
          <span
            className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
            style={
              p.good
                ? { color: "#1F9C72", background: "rgba(47,185,138,0.12)" }
                : { color: BLUE, background: "rgba(59,110,246,0.10)" }
            }
          >
            {p.note}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Chart({ chart }: { chart: CaseChart }) {
  return (
    <figure className="rounded-xl2 border border-line bg-white p-5 sm:p-6">
      <figcaption className="mb-5">
        <p className="text-sm font-semibold text-ink">{chart.title}</p>
        <p className="mt-0.5 text-xs text-ink/45">{chart.caption}</p>
      </figcaption>
      {chart.kind === "bars" && <BarsChart chart={chart} />}
      {chart.kind === "trend" && <TrendChart chart={chart} />}
      {chart.kind === "compare" && <CompareChart chart={chart} />}
      {chart.kind === "agenda" && <AgendaChart chart={chart} />}
    </figure>
  );
}

function Case({
  item,
  index,
  total,
  labels,
}: {
  item: CaseStudyItem;
  index: number;
  total: number;
  labels: { challenge: string; actions: string; results: string };
}) {
  const [lead, ...others] = item.metrics;
  const tinted = index % 2 === 1;

  return (
    <article
      id={item.id}
      className={`scroll-mt-24 border-t border-line ${tinted ? "bg-paper-raised" : "bg-white"}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <div>
              <p className="font-mono text-xs tracking-kicker text-ink/35 ltr-nums">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                {item.sector}
              </h2>
              <p className="mt-2 text-sm text-ink/50">
                {[item.client, item.market, item.timeframe].filter(Boolean).join("  ·  ")}
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {item.platforms.map((p) => (
                <PlatformTag key={p} name={p} />
              ))}
            </ul>
          </div>

          <p className="mt-8 max-w-3xl text-xl font-medium leading-snug text-ink/85 sm:text-2xl">
            {item.headline}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t-2 border-ink pt-6 lg:grid-cols-4">
            <div className="col-span-2 lg:col-span-1">
              <dd className="font-display text-5xl font-extrabold leading-none tracking-tight text-blue ltr-nums tabular-nums sm:text-6xl">
                {lead.value}
              </dd>
              <dt className="mt-3 text-sm leading-snug text-ink/55">{lead.label}</dt>
            </div>
            {others.map((m) => (
              <div key={m.label} className="lg:border-s lg:border-line lg:ps-8">
                <dd className="font-display text-3xl font-bold leading-none tracking-tight text-ink ltr-nums tabular-nums sm:text-[2.1rem]">
                  {m.value}
                </dd>
                <dt className="mt-2 text-sm leading-snug text-ink/55">{m.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal className="space-y-10">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-kicker text-ink/40">
                {labels.challenge}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{item.challenge}</p>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-kicker text-ink/40">
                {labels.actions}
              </h3>
              <ul className="mt-4 border-s border-line-strong">
                {item.actions.map((a, i) => (
                  <li key={i} className="relative ps-6 pb-5 text-[15px] leading-relaxed text-ink/70 last:pb-0">
                    <span
                      className="absolute -start-[5px] top-[9px] h-2.5 w-2.5 rounded-full border-2 border-blue bg-white"
                      aria-hidden
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80} className="space-y-5">
            <h3 className="font-mono text-[11px] uppercase tracking-kicker text-ink/40">
              {labels.results}
            </h3>
            {item.charts.map((c) => (
              <Chart key={c.title} chart={c} />
            ))}
            {item.takeaway && (
              <p className="border-s-2 border-signal ps-4 text-[15px] font-medium leading-relaxed text-ink/80">
                {item.takeaway}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export default function CaseStudies({ content }: { content: SiteContent }) {
  const { items, challengeLabel, actionsLabel, resultsLabel, disclaimer } = content.caseStudies;
  const labels = { challenge: challengeLabel, actions: actionsLabel, results: resultsLabel };

  return (
    <section id="case-studies">
      {items.map((item, i) => (
        <Case key={item.id} item={item} index={i} total={items.length} labels={labels} />
      ))}
      <div className="border-t border-line bg-white">
        <p className="mx-auto max-w-6xl px-6 py-8 text-xs leading-relaxed text-ink/40">{disclaimer}</p>
      </div>
    </section>
  );
}
