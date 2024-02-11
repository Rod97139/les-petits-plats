/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      anton: ["Anton", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

