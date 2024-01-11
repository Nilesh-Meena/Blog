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
        "prime-orange": "#FFB443",
        "secondary-orange": "#f79761",
        "prime-pink": "#FF90E8",
        "prime-blue": "#38DBFF",
        "primary-blue": "#2B59FF",
        "prime-red": "#FF5D5D",
        "prime-green": "#00FF75",
        "prime-purple": "#DD7DFF",
        "prime-dark": "#000",
        "black-100": "#2B2C35",
        // Dark Theme
        bgDark: "#0f172a",
        bgDarlSoft: "#1f273a",
        bgDarkText: "#ddd",
        bgDarkTextSoft: "#a6a6a6",
      },
    },
  },
  plugins: [],
  
};
export default config;
