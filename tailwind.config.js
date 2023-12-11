/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
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
    })
  ],
}
