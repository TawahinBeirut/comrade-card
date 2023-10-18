/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Home_Back' : "url('./assets/Home_Page_Background.png')",
      }
    },
  },
  plugins: [],
}

