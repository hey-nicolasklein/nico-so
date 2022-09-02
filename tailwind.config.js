/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  dark: "media",
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif", '"Helvetica Neue"', 'Arial', '"Apple Color Emoji"',],
      serif: ["Merriweather", "serif"],
      mono: ["Space Grotesk", "mono"],
    },
    extend: {
      fontSize: {
        title: "11rem",
        "title-large": "14rem",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
            "0 35px 35px rgba(0, 0, 0, 0.25)",
            "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        "nav": "0 4px 30px rgba(0, 0, 0, 0.1)"
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      colors:{
        transparent: "transparent",
        current: "currentColor",
        primary: colors.violet,
        white: colors.white,
        black: colors.black,
        gray: colors.gray,
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber,
        sky: colors.sky,
        emerald: colors.emerald,
        rose: colors.rose,
        orange: colors.orange,
        pink: colors.pink,
        slate: colors.slate,
      },
    },
  },
  plugins: [],
}
