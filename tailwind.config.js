/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        plaque: "url('../public/images/plaque-ir.png')",
      }),
    },
  },
  plugins: [],
};
