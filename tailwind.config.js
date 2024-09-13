/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "primary-100":"#7091E6",
        "primary-300":"#3D52A0",
        "gray-20": "#EDE8F5",
        "gray-50": "#ADBBDA",
        "gray-100": "#8697C4",
    },
    fontFamily: {
      montserratalternates: ["Montserrat Alternates", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      robotomono: ["Roboto Mono", "sans-serif"],
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}}