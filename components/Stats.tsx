"use client";

import { useEffect, useRef, useState } from "react";
import type { SiteContent } from "@/lib/content/types";
import Marquee from "./Marquee";

const ringColors = ["#3B6EF6", "#5FE3FF", "#2FB98A"];

function StatCard({
  value,
  suffix,
  label,
  ringColor,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  ringColor: string;
  index: number;
}) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setProgress(1 - Math.pow(1 - p, 3));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -20% 0px" }
    );

    observer.observe(el);
    const fallback = window.setTimeout(() => {
      if (!started.current) {
        started.current = true;
        setProgress(1);
      }
    }, 1600);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const display = value * progress;
  const formatted = Number.isInteger(value)
    ? Math.round(display).toString()
    : display.toFixed(1);
  const circumference = 2 * Math.PI * 22;

  return (
    <div
      ref={ref}
      className="relative flex flex-col gap-4 rounded-card border border-white/10 bg-white/[0.04] p-6"
    >
      <div className="flex items-center justify-between">
        <div className="relative flex h-14 w-14 items-center justify-center">
          <svg viewBox="0 0 52 52" className="absolute inset-0 -rotate-90">
            <circle cx="26" cy="26" r="22" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
            <circle
              cx="26"
              cy="26"
              r="22"
              fill="none"
              stroke={ringColor}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress)}
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
          </svg>
          <span className="font-mono text-[11px] font-bold ltr-nums" style={{ color: ringColor }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
      <p className="font-display text-4xl font-extrabold ltr-nums tabular-nums text-paper sm:text-5xl">
        {formatted}
        <span style={{ color: ringColor }}>{suffix}</span>
      </p>
      <p className="max-w-[24ch] text-sm leading-snug text-paper/55">{label}</p>
    </div>
  );
}

export default function Stats({ content }: { content: SiteContent }) {
  return (
    <section className="bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-kicker text-blue">
            {content.stats.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
            {content.stats.headline}
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl2 bg-ink p-6 shadow-lift sm:p-10">
          <div className="grid gap-5 sm:grid-cols-3">
            {content.stats.items.map((item, i) => (
              <StatCard
                key={item.label}
                value={item.value}
                suffix={item.suffix}
                label={item.label}
                ringColor={ringColors[i % ringColors.length]}
                index={i}
              />
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-kicker text-paper/40">
              {content.stats.sectorsLabel}
            </p>
            <Marquee tone="dark" items={content.stats.sectors} />
          </div>
        </div>
      </div>
    </section>
  );
}
