/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'dark-grey': 'hsl(0, 0%, 59%)', 
      'darker-grey': 'hsl(0, 0%, 17%)'
    }, 
    backgroundColor: {
      'white': "#ffffff", 
      'black': '#000000'
    }
  },
  plugins: [],
}