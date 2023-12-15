/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
      'xs': '379px',
      'xxs': '320px',
      'tablet': {'raw': '(max-height: 1368px),(min-width:820px)'},
      ...defaultTheme.screens,
    },
    extend: {
      // remove if you want pitch black
      colors: {
        black: '#111111',
      },

      fontFamily: {
        greatVibes: ['Great Vibes', 'Great Vibes'],
        arizonia: ['Arizonia', 'Arizonia'],
        windSong: ['WindSong', 'WindSong'],
        pixel: ['Pixelify Sans', 'Pixelify Sans'],
        sans: ['Helvetica', 'sans-serif', 'Arial'],
      },
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        devTitle: {
          words: ['Web Developer', 'Software Engineer', 'Product Designer', 'QA Analyst', 'Problem Solver'],
          delay: 1,
          writeSpeed: .3,
        }
      }
    }),
    require("@igorkowalczyk/is-browser"),
  ],
}
