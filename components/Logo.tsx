export default function Logo({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const gradId = onDark ? "roasly-mark-dark" : "roasly-mark-light";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="h-[1.15em] w-[1.15em] shrink-0"
        aria-hidden
        fill="none"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4F8BFF" />
            <stop offset="0.55" stopColor="#6E9BFF" />
            <stop offset="1" stopColor={onDark ? "#FFFFFF" : "#1E3FAE"} />
          </linearGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="9"
          fill={onDark ? "rgba(255,255,255,0.06)" : "rgba(59,110,246,0.10)"}
          stroke={`url(#${gradId})`}
          strokeOpacity="0.5"
        />
        <path
          d="M11 24V9h6.6c2.8 0 4.7 1.8 4.7 4.4 0 2-1.1 3.5-2.9 4.1L23 24h-3.4l-3-5.7H14V24h-3Zm3-8.3h3.2c1.3 0 2.1-.7 2.1-1.9s-.8-2-2.1-2H14v3.9Z"
          fill={`url(#${gradId})`}
        />
      </svg>
      <span className="font-display font-bold tracking-tight">
        <span className={onDark ? "text-gradient" : "text-blue-deep"}>ROAS</span>
        <span className={onDark ? "text-white" : "text-ink"}>LY</span>
      </span>
    </span>
  );
}
