/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      title: ["var(--font-title)"],
    },
    extend: {
      fontFamily: {
        'serif': ['var(--font-noto-serif)', ...defaultTheme.fontFamily.serif],
      }
    }
  },
  plugins: [require("@tailwindcss/forms")],
};
