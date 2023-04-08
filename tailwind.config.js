/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['var(--font-noto-serif)'],
      title: ['var(--font-title)'],
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

