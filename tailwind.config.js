/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#DBDBDB",
        mediumGray: "#02152680",
        mediumRed: "#F93B1D",
      },
    },
  },
  plugins: [],
};
