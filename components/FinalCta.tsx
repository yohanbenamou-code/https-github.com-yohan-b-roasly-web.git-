import type { SiteContent } from "@/lib/content/types";
import { contact } from "@/lib/content";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function FinalCta({ content }: { content: SiteContent }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [background-size:200%_200%] animate-gradientShift"
        style={{
          background:
            "radial-gradient(50% 55% at 20% 10%, rgba(59,110,246,0.5) 0%, transparent 60%), radial-gradient(45% 50% at 85% 90%, rgba(95,227,255,0.28) 0%, transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl px-6 py-28 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-kicker text-blue-soft">
            {content.finalCta.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-[2.7rem]">
            {content.finalCta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-paper/65">
            {content.finalCta.body}
          </p>
        </Reveal>

        <ContactForm content={content} />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-sm text-paper/55">
          <a href={`mailto:${contact.email}`} className="ltr-nums transition-colors hover:text-paper">
            {contact.email}
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-paper/30 sm:block" />
          <a href={contact.whatsappHref} className="ltr-nums transition-colors hover:text-paper">
            {contact.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
