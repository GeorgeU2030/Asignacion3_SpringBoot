/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#367bc3",
        second:"#38bfa7",
        third:"#8fe1a2",
        alter:"#524582",
      },
    },
  },
  plugins: [],
}

