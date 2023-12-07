/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        greatVibes: ['Great Vibes', 'Great Vibes'],
        arizonia: ['Arizonia', 'Arizonia'],
        windSong: ['WindSong', 'WindSong'],
        pixel: ['Pixelify Sans', 'Pixelify Sans'],
      },
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        devTitle: {
          words: ['Web Developer', 'Software Engineer', 'Product Designer', 'QA Analyst'],
          delay: 1,
          writeSpeed: .3,
          // caretColor: 'text-black',
        }
      }
    })
  ],
}
