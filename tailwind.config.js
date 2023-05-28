/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backGround: "#232946",
        accent: "#fffffe",
        general: "#b8c1ec",
        component: {
          general: "#eebbc3",
          accent: "#232946"
        }
      }
    },
  },
  plugins: []
}

