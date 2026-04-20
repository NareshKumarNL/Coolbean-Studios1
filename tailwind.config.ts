import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDFAF6",
        "cream-dark": "#F2EBE0",
        "cream-border": "#E8DDD0",
        gold: "#C4956A",
        "gold-dark": "#A87A50",
        "gold-light": "#F0E2D0",
        sage: "#7A9E8E",
        "sage-dark": "#5E8272",
        "sage-light": "#EDF3F0",
        charcoal: "#2C2C2C",
        "charcoal-mid": "#4A4A4A",
        "charcoal-light": "#7A7A7A",
        rose: "#D4A4A4",
        "rose-light": "#F5ECEC",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-md": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.005em" }],
      },
      boxShadow: {
        soft: "0 2px 20px rgba(44, 44, 44, 0.06)",
        card: "0 4px 32px rgba(44, 44, 44, 0.08)",
        "card-hover": "0 8px 48px rgba(44, 44, 44, 0.12)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
