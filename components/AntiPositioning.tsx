import type { SiteContent } from "@/lib/content/types";
import Reveal from "./Reveal";

export default function AntiPositioning({ content }: { content: SiteContent }) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-25 [background-size:200%_200%] animate-gradientShift"
        style={{
          background:
            "radial-gradient(45% 60% at 50% 0%, rgba(59,110,246,0.45) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-kicker text-blue-soft">
            Roasly
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-[2.7rem]">
            {content.antiPositioning.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">
            {content.antiPositioning.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
