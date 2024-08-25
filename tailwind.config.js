/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      anton: ["Anton", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      fontSize: {
        'vw-1': '1vw',
        'vw-2': '2vw',
        'vw-3': '3vw',
        'vw-4': '4vw',
        'vw-5': '5vw',
      },
      height: {
        'vw-1': '1vw',
        'vw-2': '2vw',
        'vw-3': '3vw',
        'vw-4': '4vw',
        'vw-5': '5vw',
        'vw-6': '6vw',
        'vw-7': '7vw',
        'vw-8': '8vw',
        'vw-9': '9vw',
        'vw-10': '10vw',
        'vw-11': '11vw',
        'vw-12': '12vw',
        'vw-13': '13vw',
        'vw-14': '14vw',
        'vw-15': '15vw',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

