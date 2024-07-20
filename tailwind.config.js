/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins:{
  }, 
  content: ["./core/**/*.{html,py}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


/*
npx tailwindcss -i ./core/static/css/input.css -o ./core/static/css/output.css --watch
*/