const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mulishFont: ['Roboto', 'sans-serif'],
      },
      colors: {
        buttonColor:{
          450: '#61dafb'
        },
        header: {
          450: '#171f2f',
        },
        bodybg: {
          450: '#131927',
        },
        hover: {
          450: '#172839',
        },
        p:{
          450:"#74777e",
        },
        badge:{
          450:"#61dafb",
        },
        newlable:{
          450:"#e6c520",
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
