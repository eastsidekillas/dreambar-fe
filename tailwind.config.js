/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {

        // Основные цвета приложения
        main: {
          'surface-primary': '#212121',
          'surface-secondary': '#E5E5E5',
        },

        typo: {
          'secondary': '#b4b4b4'
        },

        sidebar: {
          'surface-primary': '#171717',
          'surface-secondary': '#D6B278',
        },

        // Цвета различных компонентов
        green: {
          500: '#01796F',
        },


      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
