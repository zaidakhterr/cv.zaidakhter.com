import typographyPlugin from "@tailwindcss/typography";
import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import typographyStyles from "./typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [typographyPlugin],
  theme: {
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    typography: typographyStyles,
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
        body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        xl: "6px 6px 0 var(--tw-shadow-color)",
        lg: "4px 4px 0 var(--tw-shadow-color)",
        md: "3px 3px 0 var(--tw-shadow-color)",
        sm: "2px 2px 0 var(--tw-shadow-color)",
      },
    },
  },
} satisfies Config;
