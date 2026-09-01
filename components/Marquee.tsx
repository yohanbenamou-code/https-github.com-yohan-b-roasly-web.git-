import type { ReactNode } from "react";

export default function Marquee({
  items,
  rtl = false,
  tone = "light",
}: {
  items: ReactNode[];
  rtl?: boolean;
  tone?: "light" | "dark";
}) {
  const doubled = [...items, ...items];
  const dot = tone === "dark" ? "bg-white/25" : "bg-ink/20";
  const text = tone === "dark" ? "text-paper/55" : "text-ink/50";

  return (
    <div className="marquee-mask overflow-hidden pause-hover">
      <div
        className={`flex w-max items-center gap-10 ${
          rtl ? "animate-marqueeRtl" : "animate-marquee"
        }`}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className={`whitespace-nowrap font-display text-sm font-semibold tracking-tight ${text}`}>
              {item}
            </span>
            <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
