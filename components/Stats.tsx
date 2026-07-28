"use client";

import { useEffect, useRef, useState } from "react";
import type { SiteContent } from "@/lib/content/types";

const icons = [
  <path key="0" d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h11" />,
  <path key="1" d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />,
  <path key="2" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
];

const ringColors = ["#2F9E6E", "#E8A33D", "#7C6FF0"];

function StatCard({
  value,
  suffix,
  label,
  icon,
  ringColor,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  ringColor: string;
}) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setProgress(1);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();

          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setProgress(1 - Math.pow(1 - p, 3));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const display = value * progress;
  const formatted = Number.isInteger(value)
    ? Math.round(display).toString()
    : display.toFixed(1);

  const circumference = 2 * Math.PI * 20;

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center gap-3 rounded-card border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-5 text-center"
    >
      <div className="relative flex h-[58px] w-[58px] items-center justify-center">
        <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90">
          <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" />
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke={ringColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
          />
        </svg>
        <span className="flex h-7 w-7 items-center justify-center text-paper" style={{ color: ringColor }}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {icon}
          </svg>
        </span>
      </div>

      <p className="font-display text-3xl font-extrabold ltr-nums tabular-nums sm:text-4xl">
        {formatted}
        {suffix}
      </p>
      <p className="max-w-[22ch] text-xs leading-snug text-paper/60">{label}</p>
    </div>
  );
}

export default function Stats({ content }: { content: SiteContent }) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, #2F9E6E 0%, transparent 45%), radial-gradient(circle at 85% 80%, #E8A33D 0%, transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-kicker text-amber">
          {content.stats.eyebrow}
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">
          {content.stats.headline}
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {content.stats.items.map((item, i) => (
            <StatCard
              key={item.label}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              icon={icons[i]}
              ringColor={ringColors[i]}
            />
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="font-mono text-xs uppercase tracking-kicker text-paper/40">
            {content.stats.sectorsLabel}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {content.stats.sectors.map((sector) => (
              <li
                key={sector}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-paper/80"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
