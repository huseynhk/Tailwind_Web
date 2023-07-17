/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens:{
      lg:'1140px',
      xl:'1140px',
      '2xl':'1140px'
      },
    },
    extend: {

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'gemunu':  ['Gemunu Libre', 'sans-serif']
      },

      colors:{
        'my-red':'#BC1A45',
        'my-melon':'#FFD369',
        'my-grey':'#DDDDDD',
        'my-white':'#F7F7F7',
      },
    },
  },
  plugins: [],
}

