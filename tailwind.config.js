/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "bluenav1-educal": "#b8dde3",
        "graynav1-educal": "#6d6e75",
        "bluehomecard-educal": "#2b4eff",
        

        "yellow-educal": "#fc1",
        "red-educal": "#f00",
        "green-educal": "#0f0",
      },
    },
  },
  plugins: [],
};