"use client";

import { useEffect, useRef, useState } from "react";

type PlatformKey = "google" | "meta" | "tiktok";

type Platform = {
  key: PlatformKey;
  name: string;
  accent: string;
  leads: number;
  ctr: string;
  roas: string;
  cpl: string;
  path: string;
  icon: React.ReactNode;
};

const platforms: Platform[] = [
  {
    key: "google",
    name: "Google Ads",
    accent: "#4F9EF5",
    leads: 312,
    ctr: "6.8%",
    roas: "5.1x",
    cpl: "₪32",
    path: "M0 46 L20 40 L40 43 L60 26 L80 31 L100 14 L120 20 L140 6 L160 12",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path fill="#4285F4" d="M22 12.2c0-.7-.06-1.4-.18-2H12v3.9h5.6a4.8 4.8 0 01-2.1 3.2v2.6h3.4c2-1.8 3.1-4.5 3.1-7.7z" />
        <path fill="#34A853" d="M12 22c2.8 0 5.2-.9 6.9-2.5l-3.4-2.6c-.95.6-2.15 1-3.5 1a6 6 0 01-5.65-4.15H2.85v2.6A10 10 0 0012 22z" />
        <path fill="#FBBC05" d="M6.35 13.7a6 6 0 010-3.85V7.25H2.85a10 10 0 000 9z" />
        <path fill="#EA4335" d="M12 5.9c1.5 0 2.86.52 3.92 1.53l2.94-2.94A9.6 9.6 0 0012 2a10 10 0 00-9.15 5.25l3.5 2.6A6 6 0 0112 5.9z" />
      </svg>
    ),
  },
  {
    key: "meta",
    name: "Meta Ads",
    accent: "#7C6FF0",
    leads: 274,
    ctr: "4.1%",
    roas: "4.4x",
    cpl: "₪41",
    path: "M0 40 L20 44 L40 30 L60 34 L80 18 L100 24 L120 10 L140 16 L160 4",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M6 12c0-3 1.5-6 3.2-6 1.6 0 2.4 1.9 3 3.9.6-2 1.4-3.9 3-3.9C17 6 18 9 18 12s-1 6-2.8 6c-1.6 0-2.4-1.9-3-3.9-.6 2-1.4 3.9-3 3.9C7 18 6 15 6 12z"
          fill="#7C6FF0"
        />
      </svg>
    ),
  },
  {
    key: "tiktok",
    name: "TikTok Ads",
    accent: "#F13C7A",
    leads: 198,
    ctr: "7.9%",
    roas: "3.8x",
    cpl: "₪29",
    path: "M0 44 L20 36 L40 38 L60 20 L80 26 L100 8 L120 18 L140 10 L160 16",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M16.5 3c.3 2 1.7 3.6 3.5 3.9v3.1a7 7 0 01-3.5-1v6.3a5.4 5.4 0 11-4.6-5.34v3.2a2.2 2.2 0 102.1 2.14V3h2.5z"
          fill="#F13C7A"
        />
      </svg>
    ),
  },
];

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(target);
  useEffect(() => {
    if (!active) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }
    const start = performance.now();
    const from = 0;
    const duration = 900;
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return value;
}

function PlatformPanel({ platform }: { platform: Platform }) {
  const leads = useCountUp(platform.leads, true);

  return (
    <div key={platform.key} className="animate-fadeSlide">
      <svg viewBox="0 0 160 50" className="mb-5 h-16 w-full" fill="none">
        <path
          d={platform.path}
          stroke={platform.accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="flex items-baseline gap-2">
        <span className="font-mono text-3xl font-bold ltr-nums tabular-nums text-paper">
          {leads}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-kicker text-paper/45">
          leads / mois
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-kicker text-paper/40">CTR</p>
          <p className="mt-1 font-mono text-sm font-semibold ltr-nums text-paper">{platform.ctr}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-kicker text-paper/40">ROAS</p>
          <p className="mt-1 font-mono text-sm font-semibold ltr-nums text-paper">{platform.roas}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-kicker text-paper/40">CPL</p>
          <p className="mt-1 font-mono text-sm font-semibold ltr-nums text-paper">{platform.cpl}</p>
        </div>
      </div>
    </div>
  );
}

export default function LiveTicker({
  liveLabel,
}: {
  liveLabel: string;
  leadsLabel?: string;
  cplLabel?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % platforms.length);
    }, 3600);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function selectPlatform(i: number) {
    setActiveIndex(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % platforms.length);
    }, 3600);
  }

  const active = platforms[activeIndex];

  return (
    <div className="relative w-full max-w-md">
      <span
        className="pointer-events-none absolute -top-10 -end-8 h-40 w-40 rounded-full opacity-30 blur-3xl animate-blobMove"
        style={{ background: active.accent }}
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -bottom-8 -start-10 h-32 w-32 rounded-full bg-amber/30 blur-3xl animate-blobMove"
        style={{ animationDelay: "-4s" }}
        aria-hidden
      />

      <div className="relative z-20 w-full animate-bob">
      <div className="absolute -end-7 -top-7 z-20 hidden rotate-3 rounded-full border border-white/15 bg-ink-soft px-3 py-1.5 font-mono text-[11px] text-signal shadow-[0_12px_24px_-6px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:flex">
        ROAS 4.2x
      </div>
      <div
        className="absolute -bottom-7 -end-10 z-20 hidden -rotate-2 rounded-full border border-white/15 bg-ink-soft px-3 py-1.5 font-mono text-[11px] text-amber shadow-[0_12px_24px_-6px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:flex"
        style={{ animationDelay: "-2s" }}
      >
        +180 leads/mois
      </div>

      <div className="relative w-full rounded-card border border-white/10 bg-ink-soft/80 backdrop-blur-sm shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex gap-1.5">
            {platforms.map((p, i) => (
              <button
                key={p.key}
                onClick={() => selectPlatform(i)}
                aria-pressed={i === activeIndex}
                className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
                  i === activeIndex
                    ? "bg-white/10 text-paper"
                    : "text-paper/40 hover:text-paper/70"
                }`}
              >
                {p.icon}
                <span className="hidden sm:inline">{p.name}</span>
              </button>
            ))}
          </div>
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-kicker text-signal">
            <span className="h-2 w-2 rounded-full bg-signal animate-pulseDot" />
            {liveLabel}
          </span>
        </div>

        <div className="px-5 py-5">
          <PlatformPanel key={active.key} platform={active} />
        </div>
      </div>
      </div>
    </div>
  );
}
