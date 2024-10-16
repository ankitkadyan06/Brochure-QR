/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': [ 'Poppins', 'sans-serif'],
      'montserrat': [ 'Montserrat', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'inter': ['inter', 'sans-serif'],
      'robotoSlab': ['Roboto Slab', 'serif'],
      'prostoOne' : ['Prosto One', 'sans-serif']
    }
  },
  plugins: [],
};

