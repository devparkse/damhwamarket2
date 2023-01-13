/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      width: {
        imgwidth: "280px",
      },
      colors: {
      },
      fontWeight: {
        fw800: 800,
      },
      fontSize: {
        fs15: "15px"
      }
    },
  },
  plugins: [],
};
