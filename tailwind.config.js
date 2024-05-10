/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home" : "url('./src/images/homeTitle.jpg')",
        "login" : "url('./src/images/login.jpg')"
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

