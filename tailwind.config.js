/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '132': '38rem',
        '128': '32rem',
        '90': '22rem'
      },
      borderRadius:{
        'xl': '30px'
      },
      colors: {
        brightOrange: 'rgb(228, 67, 64)',
        brightYellow: 'rgb(245, 155, 102)',
        mattBlack: 'rgb(33, 34, 38)',
        lightGray: 'rgb(246, 244, 244)'
      }
    },
  },
  plugins: [],
}