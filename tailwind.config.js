/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {

        main: {
          'surface-primary': '#212121',
          'surface-secondary': '#1A1A1A',

        },

        sidebar: {
          'surface-primary': '#171717',
          'surface-secondary': '#D6B278',
        },

        typo: {
          'main': '#D6B278',
          'secondary': '#D3D3D3',
          'light': '#FFFFFF',
          'dark': '#333333',
        },

        accent: {
          'gold': '#D4B97B',
          'light-yellow': '#F1D9A1',
          'light-gray': '#303030'
        }

      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
