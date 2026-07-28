import type { SiteContent } from "@/lib/content/types";

export default function Trust({ content }: { content: SiteContent }) {
  return (
    <section id="why-roasly" className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-kicker text-ink/50">
            {content.trust.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            {content.trust.headline}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
            {content.trust.body}
          </p>
        </div>

        <ul className="space-y-5">
          {content.trust.bullets.map((bullet, i) => (
            <li
              key={bullet}
              className="flex items-start gap-4 rounded-card border border-ink/10 bg-paper-raised p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-xs font-bold text-paper">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-0.5 text-sm leading-relaxed text-ink/80">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
