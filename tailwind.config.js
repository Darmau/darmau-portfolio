/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      noto: ['var(--font-title)', 'var(--font-noto-serif)', 'serif'],
      title: ['var(--font-title)'],
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

