import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Domain: ["Domain", "sans-serif"],
        TWLight: ["TWLight", "sans-serif"],
        TWMedium: ["TWMedium", "sans-serif"],
      },
      colors: {
        "prime-yellow": "#FFC900",
        "prime-yello-secondary": "#FFF503",
        "prime-pink": "#FF90E8",
        "prime-blue": "#38DBFF",
        "prime-orange": "#FFB443",
        "prime-red": "#FF5D5D",
        "prime-green": "#00FF75",
        "prime-purple": "#DD7DFF",

        "prime-dark": "#000",

        "black-100": "#2B2C35",
        "button-primary": {
          DEFAULT: "#ff90e8",
        },
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
    },
  },
  plugins: [],
};
export default config;
