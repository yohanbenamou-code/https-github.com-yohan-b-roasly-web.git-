import type { SiteContent } from "@/lib/content/types";
import Reveal from "./Reveal";

export default function Trust({ content }: { content: SiteContent }) {
  return (
    <section id="why-roasly" className="bg-paper-raised">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-start">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-kicker text-blue">
            {content.trust.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
            {content.trust.headline}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60">
            {content.trust.body}
          </p>
        </Reveal>

        <ul className="space-y-4">
          {content.trust.bullets.map((bullet, i) => (
            <Reveal
              key={bullet}
              as="li"
              delay={i * 70}
              className="flex items-start gap-4 rounded-card border border-line bg-white p-5 transition-colors hover:border-blue/30"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-xs font-bold text-blue-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-0.5 text-sm leading-relaxed text-ink/75">{bullet}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
