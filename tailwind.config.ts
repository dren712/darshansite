import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "rgb(var(--rgb-paper) / <alpha-value>)",
          subtle: "rgb(var(--rgb-paper-subtle) / <alpha-value>)",
          surface: "rgb(var(--rgb-paper-surface) / <alpha-value>)",
          elevated: "rgb(var(--rgb-paper-elevated) / <alpha-value>)",
          border: "rgb(var(--rgb-paper-border) / <alpha-value>)",
          line: "rgb(var(--rgb-paper-line) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--rgb-ink) / <alpha-value>)",
          primary: "rgb(var(--rgb-ink) / <alpha-value>)",
          secondary: "rgb(var(--rgb-ink-secondary) / <alpha-value>)",
          muted: "rgb(var(--rgb-ink-muted) / <alpha-value>)",
          faint: "rgb(var(--rgb-ink-faint) / <alpha-value>)",
        },
        nordic: {
          red: "rgb(var(--rgb-nordic-red) / <alpha-value>)",
          redHover: "rgb(var(--rgb-nordic-red-hover) / <alpha-value>)",
          redFaint: "rgb(var(--rgb-nordic-red-faint) / <alpha-value>)",
          redBorder: "rgb(var(--rgb-nordic-red-border) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: [
          "Geist",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "Geist Mono",
          "JetBrains Mono",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        script: [
          "Noto Sans Devanagari",
          "Noto Sans Tamil",
          "Noto Sans Telugu",
          "Noto Sans Bengali",
          "sans-serif",
        ],
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "4px",
        lg: "6px",
      },
    },
  },
  plugins: [],
};
export default config;
