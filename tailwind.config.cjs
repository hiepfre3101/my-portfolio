/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#00C9B7",
        primaryOpc1: "rgba(0,201,183,0.1)",
        textWhite: "#96B1AC",
        textWhiter:'#c2f0e8',
        hightLightPink: "#E999DB",
        backGround: "#020c1b",
        bgLighter:'#072758'
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
