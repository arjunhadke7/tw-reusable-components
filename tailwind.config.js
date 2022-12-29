/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '767px'},
      },
    },
  },
  plugins: [],
}
