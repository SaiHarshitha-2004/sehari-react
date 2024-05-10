/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./Client/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home" : "url('./Client/images/homeTitle.jpg')",
        "login" : "url('./Client/images/login.jpg')"
      },
      colors:{
        color: "#410825"
      }
      
    },
  },
  plugins: [
    require("daisyui"),
    {
      plugin: require("tailwindcss-animate"),
    },
  ],
  
}

