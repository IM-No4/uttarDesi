/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width:
      {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
      },
      height:{
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
      },
      minWidth:
      {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens:
      {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors:
      {
        headingColor: "#ff5555",
        textColor: "#515151",
        cartNumBg: "#e80013",
        primary: "#f5f3f3",
      }
    },
  },
  plugins: [],
}
