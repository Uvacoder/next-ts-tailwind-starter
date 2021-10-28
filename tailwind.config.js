const { fuchsia } = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fuchsia,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
