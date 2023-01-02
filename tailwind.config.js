/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        xl: "1440px",
      },
      colors: {
        orange: "#D87D4A",
        lightOrange: "#fbaf85",
        black: "#000",
        lightBlack: "#101010",
        white: "#fff",
        grey: "#F1F1F1",
        lightWhite: "#FAFAFA",
      },
      fontFamily: {
        manrope: ["Manrope"],
      },
    },
  },
  plugins: [],
};
