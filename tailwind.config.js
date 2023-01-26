/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '480px'},
      },
    },
  },
  plugins: [],
}
