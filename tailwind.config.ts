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
        orris: {
          gold: "#D6A64A",
          "gold-light": "#E3B457",
          dark: "#07070A",
          card: "#0B0B0F",
        },
      },
    },
  },
  plugins: [],
};

export default config;

