const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./scr/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          1000: "#032541",
        },
        green: {
          ...colors.green,
          1000: "#21d07a",
        },
      },
    },
    fontFamily: {
      source: ["Source Sans Pro", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
