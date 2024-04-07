/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('../assets/img/main-bg.png')",
      }
    },
  },
  daisyui: {
    themes: ['synthwave','light'],
  },
  plugins: [require("daisyui")],
}