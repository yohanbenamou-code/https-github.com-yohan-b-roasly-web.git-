import Image from "next/image";
import type { SiteContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n";
import { isRtl } from "@/lib/i18n";
import Reveal from "./Reveal";

const PORTRAIT_SRC = "/team/yohan-benamou.png";

export default function Team({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  const rtl = isRtl(locale);
  const lead = content.team.members[0];
  const rest = content.team.members.slice(1);

  return (
    <section id="team" className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-30 [background-size:200%_200%] animate-gradientShift"
        style={{
          background:
            "radial-gradient(45% 45% at 15% 12%, rgba(59,110,246,0.4) 0%, transparent 60%), radial-gradient(40% 40% at 90% 90%, rgba(95,227,255,0.2) 0%, transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-kicker text-blue-soft">
            {content.team.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-[2.6rem]">
            {content.team.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-paper/65">
            {content.team.intro}
          </p>
        </Reveal>

        {lead && (
          <Reveal className="mt-14 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-14">
            <div className="relative mx-auto w-full max-w-[320px]">
              <div
                className="absolute -inset-3 rounded-xl2 bg-gradient-to-br from-blue-bright/40 via-cyan/20 to-transparent blur-lg"
                aria-hidden
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl2 border border-white/12 bg-white/5">
                <Image
                  src={PORTRAIT_SRC}
                  alt={lead.name}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-cover object-top"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue/25 via-transparent to-cyan/10 mix-blend-overlay"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink via-ink/45 to-transparent"
                  aria-hidden
                />
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-paper">{lead.name}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-kicker text-blue-soft">
                {lead.role}
              </p>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/70">
                {lead.bio}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {lead.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-paper/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 text-sm font-semibold text-blue-soft transition-colors hover:text-paper ${
                  rtl ? "flex-row-reverse" : ""
                }`}
              >
                {content.nav.cta}
                <svg viewBox="0 0 20 20" className="h-4 w-4 rtl:rotate-180" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/yohan-benamou-3b105763/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn, Yohan Benamou"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-paper/80 transition-colors hover:border-blue-soft hover:text-paper"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
                LinkedIn
              </a>
              </div>
            </div>
          </Reveal>
        )}

        {rest.length > 0 && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((m, i) => (
              <Reveal
                key={m.name}
                delay={i * 80}
                className="rounded-card border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="font-display text-lg font-bold text-paper">{m.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-kicker text-blue-soft">
                  {m.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">{m.bio}</p>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
