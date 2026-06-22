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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          dark: "#0f172a", // slate-900
          yellow: "#eab308", // bright yellow for electrical
          yellowGlow: "rgba(234, 179, 8, 0.5)",
          blue: "#3b82f6", // bright blue for accents
        }
      },
    },
  },
  plugins: [],
};
export default config;
