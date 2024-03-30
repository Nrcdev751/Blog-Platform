/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('../assets/img/main-bg.png')",
      }
    },
  },
  daisyui: {
    themes: ["synthwave"],
  },
  plugins: [require("daisyui")],
}