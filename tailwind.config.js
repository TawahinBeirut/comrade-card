/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Home_Back' : "url('./assets/Home_Page_Background.png')",
        'LoginBack' : "url('./assets/Login_Background.png')",
        'Profile_Back' : "url('./assets/Profile_Background.png')",
        "Profile_Asset" : "url('./assets/Profile_Page_Asset.png')"
      },
      fontFamily:{
        'Logo' : ['Bebas Neue', 'sans-serif'], 
        'SearchBar': ['DM Serif Display', 'serif'],
        'Profile' : ['Kanit','sans-serif']
      }
    },
  },
  plugins: [],
}

