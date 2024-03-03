/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "Noto Sans Georgian", "sans-serif"],
        raleway: ["Raleway", "Noto Sans Georgian", "sans-serif"],
        sparta: ["League Spartan", "Noto Sans Georgian", "sans-serif"],
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
      },
    },
  },
  darkMode: "selector",
  plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
