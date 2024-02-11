/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'body': ['Anton', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

