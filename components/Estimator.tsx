"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { SiteContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n";
import { localeTags } from "@/lib/i18n";
import Reveal from "./Reveal";

const MIN = 3000;
const MAX = 60000;
const STEP = 1000;
const DEFAULT = 8000;

const CPL_LOW = 30;
const CPL_HIGH = 65;
const ROAS_LOW = 3;
const ROAS_HIGH = 5;

function useAnimatedNumber(target: number) {
  const [value, setValue] = useState(target);
  const raf = useRef<number>();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const from = value;
    const start = performance.now();
    const duration = 380;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(from + (target - from) * eased);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return value;
}

export default function Estimator({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  const t = content.estimator;
  const [budget, setBudget] = useState(DEFAULT);

  const nf = useMemo(
    () => new Intl.NumberFormat(localeTags[locale].replace("-IL", "") || "fr"),
    [locale]
  );
  const money = (n: number) => `₪${nf.format(Math.round(n))}`;

  const leadsLow = budget / CPL_HIGH;
  const leadsHigh = budget / CPL_LOW;
  const revLow = budget * ROAS_LOW;
  const revHigh = budget * ROAS_HIGH;

  const aLeadsLow = useAnimatedNumber(leadsLow);
  const aLeadsHigh = useAnimatedNumber(leadsHigh);
  const aRevLow = useAnimatedNumber(revLow);
  const aRevHigh = useAnimatedNumber(revHigh);
  const aBudget = useAnimatedNumber(budget);

  const pct = ((budget - MIN) / (MAX - MIN)) * 100;

  return (
    <section id="estimator" className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-kicker text-blue">{t.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
            {t.headline}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60">{t.description}</p>
          <p className="mt-6 max-w-md text-xs leading-relaxed text-ink/40">{t.disclaimer}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-xl2 bg-ink p-6 text-paper shadow-lift sm:p-9">
            {/* budget control */}
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
              <label htmlFor="budget" className="font-mono text-[11px] uppercase tracking-kicker text-paper/45">
                {t.budgetLabel}
              </label>
              <div className="flex items-baseline gap-1.5 sm:justify-end">
                <span className="font-display text-2xl font-extrabold ltr-nums tabular-nums text-paper">
                  {money(aBudget)}
                </span>
                <span className="font-mono text-[11px] text-paper/40">{t.perMonth}</span>
              </div>
            </div>

            <input
              id="budget"
              type="range"
              min={MIN}
              max={MAX}
              step={STEP}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-blue outline-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(59,110,246,0.4)] [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-110"
              style={{
                backgroundImage: `linear-gradient(90deg, #4F8BFF 0%, #6E9BFF ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
              }}
              aria-valuetext={money(budget)}
            />
            <div className="mt-2 flex justify-between font-mono text-[10px] text-paper/30">
              <span className="ltr-nums">{money(MIN)}</span>
              <span className="ltr-nums">{money(MAX)}</span>
            </div>

            {/* results */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-card border border-white/10 bg-white/[0.04] p-5 sm:col-span-2">
                <p className="font-mono text-[10px] uppercase tracking-kicker text-paper/40">
                  {t.results.revenue}
                </p>
                <p className="mt-2 font-display text-3xl font-extrabold ltr-nums tabular-nums text-gradient sm:text-4xl">
                  {money(aRevLow)}
                  <span className="mx-2 align-middle text-xl text-paper/30">–</span>
                  {money(aRevHigh)}
                </p>
                <p className="mt-2 text-[11px] leading-snug text-paper/40">{t.roasCaption}</p>
              </div>

              <div className="rounded-card border border-white/10 bg-white/[0.04] p-5">
                <p className="font-mono text-[10px] uppercase tracking-kicker text-paper/40">
                  {t.results.leads}
                </p>
                <p className="mt-2 font-display text-2xl font-extrabold ltr-nums tabular-nums text-paper">
                  {Math.round(aLeadsLow)}
                  <span className="mx-1.5 text-lg text-paper/30">–</span>
                  {Math.round(aLeadsHigh)}
                </p>
              </div>

              <div className="rounded-card border border-white/10 bg-white/[0.04] p-5">
                <p className="font-mono text-[10px] uppercase tracking-kicker text-paper/40">
                  {t.results.cpl}
                </p>
                <p className="mt-2 font-display text-2xl font-extrabold ltr-nums tabular-nums text-paper">
                  ₪{CPL_LOW}
                  <span className="mx-1.5 text-lg text-paper/30">–</span>
                  ₪{CPL_HIGH}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[11px] leading-relaxed text-paper/45">{t.note}</p>
              <a
                href="#contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-bright to-blue-soft px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-14px_rgba(59,110,246,0.7)] transition-transform hover:scale-[1.03]"
              >
                {t.cta}
                <svg viewBox="0 0 20 20" className="h-4 w-4 rtl:rotate-180" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
