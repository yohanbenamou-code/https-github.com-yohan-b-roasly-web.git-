"use client";

import { useEffect, useRef, useState } from "react";
import type { SiteContent } from "@/lib/content/types";
import Reveal from "./Reveal";

type ChannelKey = "meta" | "google" | "global";

type Channel = {
  key: ChannelKey;
  name: string;
  accent: string;
  accentSoft: string;
  leads: number;
  cpl: string;
  spend: string;
  roas: string;
  week: number[];
  clinics: { name: string; value: number }[];
};

const channels: Channel[] = [
  {
    key: "meta",
    name: "Meta Ads",
    accent: "#6E9BFF",
    accentSoft: "rgba(110,155,255,0.18)",
    leads: 186,
    cpl: "₪34",
    spend: "₪6,320",
    roas: "4.6x",
    week: [40, 55, 48, 70, 62, 90, 78],
    clinics: [
      { name: "Tel Aviv", value: 82 },
      { name: "Jérusalem", value: 64 },
      { name: "Haïfa", value: 47 },
    ],
  },
  {
    key: "google",
    name: "Google Ads",
    accent: "#3B6EF6",
    accentSoft: "rgba(59,110,246,0.18)",
    leads: 214,
    cpl: "₪29",
    spend: "₪5,980",
    roas: "5.3x",
    week: [50, 46, 65, 58, 80, 72, 95],
    clinics: [
      { name: "Tel Aviv", value: 70 },
      { name: "Jérusalem", value: 88 },
      { name: "Haïfa", value: 39 },
    ],
  },
  {
    key: "global",
    name: "Vue globale",
    accent: "#5FE3FF",
    accentSoft: "rgba(95,227,255,0.18)",
    leads: 400,
    cpl: "₪31",
    spend: "₪12,300",
    roas: "4.9x",
    week: [92, 101, 113, 128, 142, 162, 173],
    clinics: [
      { name: "Tel Aviv", value: 88 },
      { name: "Jérusalem", value: 79 },
      { name: "Haïfa", value: 52 },
    ],
  },
];

const barPalette = ["#3B6EF6", "#6E9BFF", "#5FE3FF", "#3B6EF6", "#2FB98A", "#6E9BFF", "#5FE3FF"];

function useCountUp(target: number, key: string) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }
    const start = performance.now();
    const duration = 800;
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, key]);
  return value;
}

const days = ["L", "M", "M", "J", "V", "S", "D"];

export default function DashboardShowcase({ content }: { content: SiteContent }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % channels.length);
    }, 4200);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function selectChannel(i: number) {
    setActiveIndex(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % channels.length);
    }, 4200);
  }

  const active = channels[activeIndex];
  const leads = useCountUp(active.leads, active.key);
  const maxWeek = Math.max(...active.week);

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-30 [background-size:200%_200%] animate-gradientShift"
        style={{
          background:
            "radial-gradient(50% 50% at 85% 15%, rgba(59,110,246,0.4) 0%, transparent 60%), radial-gradient(45% 45% at 10% 90%, rgba(95,227,255,0.22) 0%, transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-kicker text-blue-soft">
            {content.dashboard.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-[2.6rem]">
            {content.dashboard.headline}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-paper/65">
            {content.dashboard.description}
          </p>
        </Reveal>

        <div className="overflow-hidden rounded-xl2 border border-white/10 bg-ink-soft shadow-liftDark">
          <div className="flex items-center gap-2 border-b border-white/10 bg-black/20 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ms-3 rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-paper/40">
              app.roasly.io/dashboard
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <div className="flex gap-1.5 rounded-full border border-white/10 bg-black/20 p-1">
              {channels.map((c, i) => (
                <button
                  key={c.key}
                  onClick={() => selectChannel(i)}
                  aria-pressed={i === activeIndex}
                  className="relative rounded-full px-3 py-1.5 font-mono text-[11px] font-medium transition-colors"
                  style={{
                    color: i === activeIndex ? "#14182A" : "rgba(233,236,231,0.55)",
                    backgroundColor: i === activeIndex ? channels[i].accent : "transparent",
                  }}
                >
                  {c.name}
                </button>
              ))}
            </div>
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-kicker text-signal">
              <span className="h-2 w-2 rounded-full bg-signal animate-pulseDot" />
              Live
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 px-5 pb-4 sm:grid-cols-4">
            {[
              { label: "Leads", value: leads.toString() },
              { label: "CPL", value: active.cpl },
              { label: "Dépense", value: active.spend },
              { label: "ROAS", value: active.roas },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-white/10 px-3 py-3"
                style={{ backgroundColor: active.accentSoft }}
              >
                <p className="font-mono text-[10px] uppercase tracking-kicker text-paper/50">
                  {kpi.label}
                </p>
                <p className="mt-1 font-mono text-lg font-bold ltr-nums tabular-nums text-paper">
                  {kpi.value}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-5 border-t border-white/10 px-5 py-5 sm:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-kicker text-paper/40">
                Leads / semaine
              </p>
              <div className="mt-4 flex h-32 items-end gap-2.5">
                {active.week.map((v, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center justify-end gap-1.5">
                    <span className="font-mono text-[10px] font-semibold ltr-nums text-paper/50">
                      {v}
                    </span>
                    <div
                      className="w-full rounded-t-md transition-all duration-700 ease-out"
                      style={{
                        height: `${Math.max((v / maxWeek) * 88, 6)}px`,
                        background: `linear-gradient(180deg, ${barPalette[i]} 0%, ${barPalette[i]}66 100%)`,
                        boxShadow: `0 0 16px -4px ${barPalette[i]}`,
                      }}
                    />
                    <span className="font-mono text-[10px] text-paper/35">{days[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-kicker text-paper/40">
                Par clinique
              </p>
              <div className="mt-4 space-y-3">
                {active.clinics.map((clinic) => (
                  <div key={clinic.name}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-paper/70">{clinic.name}</span>
                      <span className="font-mono text-paper/50">{clinic.value}</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${clinic.value}%`,
                          backgroundColor: active.accent,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
