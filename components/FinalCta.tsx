import type { SiteContent } from "@/lib/content/types";
import { contact } from "@/lib/content";
import ContactForm from "./ContactForm";

export default function FinalCta({ content }: { content: SiteContent }) {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-kicker text-amber">
          {content.finalCta.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
          {content.finalCta.headline}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-paper/70">
          {content.finalCta.body}
        </p>

        <ContactForm content={content} />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-sm text-paper/60">
          <a href={`mailto:${contact.email}`} className="ltr-nums hover:text-paper">
            {contact.email}
          </a>
          <a href={contact.whatsappHref} className="ltr-nums hover:text-paper">
            {contact.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
