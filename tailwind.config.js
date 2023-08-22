/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        light: "#f5f5f5",
        bgHeader: "#2E2F41",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      gridTemplateColumns: {
        sidebar: "300px auto", //for sidebar layout
        "sidebar-collapsed": "64px auto", //for collapsed sidebar layout
      },
      fontFamily: {
        "dm-sans": "var(--font-dm-sans)",
        "league-spartan": "var(--font-league-spartan)",
      },
      keyframes: {
        rightToLeft: {
          "0%": { transform: "translateX(200px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        searchBox: "rightToLeft 0.2s ease-in",
      },
    },
  },
  // plugins: [require("@tailwindcss/line-clamp")],
};
