/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('./src/assets/bg-1.jpg')",
        'afterFooter': "url('./src/assets/bg-2.jpg')",
      },
      colors:{
        'primary': '#C2F970',
        'secondary': '#00007F'
      },
      fontFamily: {
        'popins': ['Poppins'],
      },
    },
  },
  plugins: [],
}