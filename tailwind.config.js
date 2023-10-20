/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Home_Back' : "url('./assets/Home_Page_Background.png')",
      },
      fontFamily:{
        'Logo' : ['Bebas Neue', 'sans-serif'], 
        'SearchBar': ['DM Serif Display', 'serif']
      }
    },
  },
  plugins: [],
}

