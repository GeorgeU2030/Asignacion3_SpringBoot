/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#b81d24",
        second:"#221f1f",
        third:"#f5f5f1",
        alter:"#e50914",
      },
    },
  },
  plugins: [],
}

