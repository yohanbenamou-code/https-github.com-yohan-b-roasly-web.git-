"use client";

import { useState } from "react";
import type { SiteContent } from "@/lib/content/types";

export default function Faq({ content }: { content: SiteContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-paper-raised">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-kicker text-blue">
          {content.faq.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
          {content.faq.headline}
        </h2>

        <div className="mt-10 space-y-3">
          {content.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-card border bg-white transition-colors ${
                  isOpen ? "border-blue/30" : "border-line"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                >
                  <span className="font-display text-base font-bold leading-snug text-ink sm:text-[1.05rem]">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen ? "rotate-45 border-blue bg-blue text-white" : "border-line-strong text-ink/50"
                    }`}
                  >
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
                      <path
                        d="M10 4v12M4 10h12"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-xl px-5 pb-5 text-sm leading-relaxed text-ink/65">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
