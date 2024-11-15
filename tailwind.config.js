/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { "onest": ['Onest', 'sans-serif'], }, 
      colors: {
        primary: '#287279',
        secondary: '#f4f4f6',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

