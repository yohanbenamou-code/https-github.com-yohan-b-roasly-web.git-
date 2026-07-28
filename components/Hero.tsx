import type { SiteContent } from "@/lib/content/types";
import LiveTicker from "./LiveTicker";

function Headline({ text }: { text: string }) {
  const splitIndex = text.indexOf(". ");
  if (splitIndex === -1) {
    return <>{text}</>;
  }
  const first = text.slice(0, splitIndex + 1);
  const second = text.slice(splitIndex + 2);
  return (
    <>
      {first}
      <br />
      <span className="italic text-blue-soft">{second}</span>
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
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 10% 10%, #2F9E6E 0%, transparent 45%), radial-gradient(circle at 90% 20%, #E8A33D 0%, transparent 40%), radial-gradient(circle at 60% 95%, #5B8DEF 0%, transparent 45%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-32">
        <div className="animate-riseIn">
          <p className="font-mono text-xs uppercase tracking-kicker text-amber">
            {content.hero.kicker}
          </p>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            <Headline text={content.hero.headline} />
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/75">
            {content.hero.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
              style={{ backgroundImage: "linear-gradient(90deg, #5B8DEF, #E8A33D)" }}
            >
              {content.hero.cta}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {content.platforms.map((platform) => (
              <li
                key={platform}
                className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-paper/70"
              >
                {platform}
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
