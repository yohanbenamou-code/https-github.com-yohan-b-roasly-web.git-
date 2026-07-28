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
          DEFAULT: "#181B24",
          soft: "#20242F",
          muted: "#9AA0B4",
        },
        paper: {
          DEFAULT: "#FBF8F2",
          raised: "#F4EEE3",
        },
        amber: {
          DEFAULT: "#E8A33D",
          dim: "#C98A2E",
        },
        signal: {
          DEFAULT: "#2F9E6E",
          dim: "#1F8A5F",
        },
        blue: {
          DEFAULT: "#2563EB",
          soft: "#5B8DEF",
        },
      },
      fontFamily: {
        display: ["var(--font-heebo)", "sans-serif"],
        body: ["var(--font-heebo)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        kicker: "0.18em",
      },
      borderRadius: {
        card: "14px",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blobMove: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.95)" },
        },
        fadeSlide: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 1.8s ease-in-out infinite",
        riseIn: "riseIn 0.6s ease-out both",
        bob: "bob 4s ease-in-out infinite",
        blobMove: "blobMove 12s ease-in-out infinite",
        fadeSlide: "fadeSlide 0.45s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
