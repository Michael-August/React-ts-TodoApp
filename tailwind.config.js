/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3F5BF6',
      },
      screens: {
        'xs': '375px'
      },
    },
  },
  plugins: [],
}

