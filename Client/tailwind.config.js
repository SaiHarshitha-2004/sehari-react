

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home" : "url('../Client/src/images/homeTitle.jpg')",
        "login" : "url('../Client/src/images/login.jpg')"
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
