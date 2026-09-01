"use client";

import { useRef } from "react";
import type { SiteContent } from "@/lib/content/types";

const avatarColors = ["#3B6EF6", "#6E9BFF", "#5FE3FF", "#2FB98A", "#3B6EF6", "#6E9BFF"];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 text-amber">
          <path
            fill="currentColor"
            d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L10 1.5z"
          />
        </svg>
      ))}
    </div>
  );
}

function GoogleBadge() {
  return (
    <div className="flex shrink-0 items-center gap-1 text-ink/35">
      <svg viewBox="0 0 24 24" className="h-3 w-3">
        <path fill="#4285F4" d="M22 12.2c0-.7-.06-1.4-.18-2H12v3.9h5.6a4.8 4.8 0 01-2.1 3.2v2.6h3.4c2-1.8 3.1-4.5 3.1-7.7z" />
        <path fill="#34A853" d="M12 22c2.8 0 5.2-.9 6.9-2.5l-3.4-2.6c-.95.6-2.15 1-3.5 1a6 6 0 01-5.65-4.15H2.85v2.6A10 10 0 0012 22z" />
        <path fill="#FBBC05" d="M6.35 13.7a6 6 0 010-3.85V7.25H2.85a10 10 0 000 9z" />
        <path fill="#EA4335" d="M12 5.9c1.5 0 2.86.52 3.92 1.53l2.94-2.94A9.6 9.6 0 0012 2a10 10 0 00-9.15 5.25l3.5 2.6A6 6 0 0112 5.9z" />
      </svg>
    </div>
  );
}

export default function Reviews({ content }: { content: SiteContent }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(amount: number) {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-kicker text-blue">
              {content.reviews.eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
              {content.reviews.headline}
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scrollBy(-320)}
              aria-label="Précédent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink/50 transition-colors hover:border-blue hover:text-blue"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4 rtl:rotate-180" fill="none">
                <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy(320)}
              aria-label="Suivant"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink/50 transition-colors hover:border-blue hover:text-blue"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4 rtl:rotate-180" fill="none">
                <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-8 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {content.reviews.items.map((review, i) => (
            <div
              key={review.name}
              className="flex w-[280px] shrink-0 flex-col rounded-card border border-line bg-paper-raised p-5 transition-colors hover:border-blue/30"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white"
                    style={{ backgroundColor: avatarColors[i % avatarColors.length] }}
                  >
                    {review.initial}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-ink">{review.name}</p>
                    <p className="text-[11px] text-ink/45">{review.role}</p>
                  </div>
                </div>
                <GoogleBadge />
              </div>

              <div className="mt-3 flex items-center justify-between">
                <Stars />
                <span className="font-mono text-[10px] text-ink/40">{review.timeAgo}</span>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-ink/65">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
