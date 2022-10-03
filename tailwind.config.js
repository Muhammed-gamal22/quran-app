/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-box-shadow"),
    require("tailwind-scrollbar"),
  ],
};
