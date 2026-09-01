import type { SiteContent } from "@/lib/content/types";
import LiveTicker from "./LiveTicker";

function Headline({ text }: { text: string }) {
  const splitIndex = text.indexOf(". ");
  if (splitIndex === -1) return <>{text}</>;
  const first = text.slice(0, splitIndex + 1);
  const second = text.slice(splitIndex + 2);
  return (
    <>
      <span className="block">{first}</span>
      <span className="block text-gradient">{second}</span>
    </>
  );
}

export default function Hero({
  content,
  liveLabel,
  leadsLabel,
  cplLabel,
}: {
  content: SiteContent;
  liveLabel: string;
  leadsLabel: string;
  cplLabel: string;
}) {
  return (
    <section id="home" className="relative overflow-hidden bg-ink text-paper">
      {/* animated gradient mesh */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45] [background-size:200%_200%] animate-gradientShift"
        style={{
          background:
            "radial-gradient(60% 55% at 12% 8%, rgba(59,110,246,0.55) 0%, transparent 60%), radial-gradient(45% 45% at 92% 12%, rgba(95,227,255,0.28) 0%, transparent 55%), radial-gradient(55% 60% at 70% 100%, rgba(30,63,174,0.5) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at 50% 30%, #000 0%, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-24 md:grid-cols-[1.12fr_0.88fr] md:items-center md:pb-32 md:pt-28">
        <div className="animate-riseIn">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-kicker text-blue-soft sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulseDot" />
            {content.hero.kicker}
          </p>

          <h1 className="mt-7 text-balance font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight [hyphens:none] sm:text-[3.4rem] lg:text-[4rem]">
            <Headline text={content.hero.headline} />
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/70">
            {content.hero.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-bright to-blue-soft px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_-14px_rgba(59,110,246,0.75)] transition-transform hover:scale-[1.03]"
            >
              <span className="relative z-10">{content.hero.cta}</span>
              <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 blur-md animate-shimmer" />
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-paper/80 transition-colors hover:border-white/35 hover:text-paper"
            >
              {content.howItWorks.eyebrow}
            </a>
          </div>

          <ul className="mt-11 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-7">
            {content.stats.items.map((item) => (
              <li key={item.label} className="min-w-[7rem]">
                <p className="font-display text-2xl font-extrabold ltr-nums tabular-nums text-paper">
                  {Number.isInteger(item.value) ? item.value : item.value.toFixed(1)}
                  <span className="text-blue-soft">{item.suffix}</span>
                </p>
                <p className="mt-1 max-w-[18ch] text-[11px] leading-snug text-paper/45">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center md:justify-end">
          <LiveTicker liveLabel={liveLabel} leadsLabel={leadsLabel} cplLabel={cplLabel} />
        </div>
      </div>
    </section>
  );
}
