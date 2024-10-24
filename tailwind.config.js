/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{ 
      colors: {
        'backgoround':{
          1: '#F0F4F0',
        },
        'principais':{
          green01: '#016732',
          green02: '#004521',
          green03: '#017E3D',
          orange:  '#FE7D05',
        }
        
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
})