/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
    },
  },
  plugins: [],
}
