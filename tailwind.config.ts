import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0E1A",
          soft: "#111726",
          raised: "#161E33",
          muted: "#8A93AD",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          raised: "#F3F6FC",
          mist: "#EAF0FB",
        },
        line: {
          DEFAULT: "rgba(10,14,26,0.10)",
          strong: "rgba(10,14,26,0.16)",
        },
        blue: {
          DEFAULT: "#3B6EF6",
          soft: "#6E9BFF",
          bright: "#4F8BFF",
          deep: "#1E3FAE",
        },
        cyan: {
          DEFAULT: "#5FE3FF",
        },
        amber: {
          DEFAULT: "#F4A93C",
          dim: "#CE8B2C",
        },
        signal: {
          DEFAULT: "#2FB98A",
          dim: "#1F9C72",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-heebo)", "sans-serif"],
        body: ["var(--font-heebo)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        kicker: "0.22em",
      },
      borderRadius: {
        card: "18px",
        xl2: "26px",
      },
      boxShadow: {
        lift: "0 30px 60px -24px rgba(12,20,45,0.28)",
        liftDark: "0 40px 90px -30px rgba(0,0,0,0.65)",
        glow: "0 0 0 1px rgba(79,139,255,0.35), 0 20px 50px -18px rgba(59,110,246,0.45)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blobMove: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(24px, -34px) scale(1.1)" },
          "66%": { transform: "translate(-18px, 18px) scale(0.94)" },
        },
        fadeSlide: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRtl: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 1.8s ease-in-out infinite",
        riseIn: "riseIn 0.7s cubic-bezier(0.22,1,0.36,1) both",
        bob: "bob 5s ease-in-out infinite",
        blobMove: "blobMove 16s ease-in-out infinite",
        fadeSlide: "fadeSlide 0.5s ease-out both",
        marquee: "marquee 34s linear infinite",
        marqueeRtl: "marqueeRtl 34s linear infinite",
        gradientShift: "gradientShift 8s ease-in-out infinite",
        shimmer: "shimmer 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
