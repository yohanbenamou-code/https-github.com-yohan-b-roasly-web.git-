import type { SiteContent } from "@/lib/content/types";

export default function AntiPositioning({ content }: { content: SiteContent }) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
          {content.antiPositioning.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">
          {content.antiPositioning.body}
        </p>
      </div>
    </section>
  );
}
