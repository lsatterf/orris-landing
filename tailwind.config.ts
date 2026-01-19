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
          gold: "#c9a857",
          "gold-light": "#d4b76a",
          dark: "#07070A",
          card: "#0B0B0F",
        },
      },
    },
  },
  plugins: [],
};

export default config;

