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
      },
    },
  },
  plugins: [],
}
