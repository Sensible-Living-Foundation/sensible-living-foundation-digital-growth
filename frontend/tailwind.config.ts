import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slf: {
          green:        "#1B4332",
          "green-mid":  "#2D6A4F",
          "green-light":"#52B788",
          yellow:       "#FFCA0A",
          "yellow-hover":"#FFD53B",
          charcoal:     "#1A1A1A",
          cream:        "#FAF7F0",
          "cream-dark": "#F0E8D8",
          navy:         "#06205C",
          "navy-mid":   "#182857",
          red:          "#E1251B",
          terra:        "#B6703E",
          slate:        "#434D5D",
          orange:       "#FF9327",
        },
      },
      fontFamily: {
        sans:  ["'Inter'", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
        display: ["'Montserrat'", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.1" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.15" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #1A1A1A 0%, #1B4332 100%)",
        "navy-gradient": "linear-gradient(135deg, #06205C 0%, #182857 100%)",
        "green-gradient": "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)",
      },
      boxShadow: {
        "card":    "0 2px 20px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.16)",
        "cta":     "0 4px 24px rgba(255,202,10,0.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
