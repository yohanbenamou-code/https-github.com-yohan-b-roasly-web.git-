export default function Logo({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={`font-display font-extrabold tracking-tight ${className}`}
      style={onDark ? { filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.45))" } : undefined}
    >
      <span style={{ color: onDark ? "#8FB4FF" : "#1E4FD6" }}>ROAS</span>
      <span className={onDark ? "text-white" : "text-ink"}>LY</span>
    </span>
  );
}
