const colors = require('tailwindcss/colors')
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky:  '#48CAE4',
        dark: '#5C677D',
        mango: {
          default: '#7CD640',
          lemon: '#70E000'
        },  
        banana: '#FFFF7C',
        rose: '#FF99AC',
        lavender: '#CDB4DB',
        violet: '#973AA8'
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
