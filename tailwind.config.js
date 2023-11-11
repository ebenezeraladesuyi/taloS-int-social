/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont : ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'hero-img' : "url('/src/assets/images/hero-img.png')"
      }
    },
  },
  plugins: [],
}