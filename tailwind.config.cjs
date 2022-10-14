/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14, // texto - sm 
      sm: 16, // texto - md
      md: 18, // texto - lg
      lg: 20, // cabeçalho - sm
      xl: 24, //  cabeçalho - md
      '2xl': 32, // cabeçalho - lg
    },
    colors:{
      'transparent': 'transparent',
      'white': '#FFF',
      'black': '#000',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        100: '#e1e1e6',
      },
      cyan: {
        500: '#61dafb',
        300: '#90e7ff'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
