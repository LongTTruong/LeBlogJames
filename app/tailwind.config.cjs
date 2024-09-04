/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jss,svelte,ts}",
    ".src/studio/**/*.{html,jss,svelte,ts}",
  ],
  theme: {
    fontFamily: {
      sans : ['Helvetica', "DEC Terminal Modern", 'sans-serif'],
      serif : ['Georgia', 'serif'],
    },
    colors: {
      transparent : 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      red : '#871614',
      yellow : '#f9ca16',
      green : '#39ff14',
      brown : '#875014',
      blue : '#161487',
      magenta : '#87144C',
      purple : '#501487',
      teal: '#148587',
    },
  plugins: [],
},
}

