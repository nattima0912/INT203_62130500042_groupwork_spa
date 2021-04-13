const colors = require('tailwindcss/colors')
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky:  '#48CAE4',
        dark: '#5C677D',
        lemon: '#70E000',
        rose: '#FF99AC',
        lavender: '#CDB4DB'
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
