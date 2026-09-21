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
        paper: {
          DEFAULT: "#F9F9F6",
          subtle: "#F2F2EC",
          surface: "#FFFFFF",
          elevated: "#EDECE6",
          border: "#E2E2DA",
          line: "#ECECE6",
        },
        ink: {
          DEFAULT: "#171717",
          primary: "#171717",
          secondary: "#555555",
          muted: "#7A7A7A",
          faint: "#A3A3A3",
        },
        nordic: {
          red: "#8B2E2E",
          redHover: "#732424",
          redFaint: "#FBF2F2",
          redBorder: "#E8C8C8",
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
