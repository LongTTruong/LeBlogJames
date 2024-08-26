/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jss,svelte,ts}",
  ],
  theme: {
    fontFamily: {
      sans : ['Helvetica', "DEC Terminal Modern", 'sans-serif'],
      serif : ['Georgia', 'serif'],
    },
    extend: {
      colors: {
        green: {normal : '#39ff14'}
      },
    },
  plugins: [],
},
}

