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
        navy: {
          DEFAULT: "#003580",
          dark:    "#002460",
          light:   "#1a4a94",
          pale:    "#e8eef8",
        },
        brand: {
          red:    "#c0392b",
          gold:   "#e8a000",
          "gold-lt": "#fef9ee",
        },
      },
      fontFamily: {
        serif: ["Merriweather", "Georgia", "serif"],
        sans:  ["Source Sans 3", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1160px",
      },
    },
  },
  plugins: [],
};
export default config;
