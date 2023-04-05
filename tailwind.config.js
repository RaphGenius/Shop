/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary100: "#9AC8EB",
        primary200: "#B9D8F2",
        primary300: "#5784BA",
        tertiary: "#F4CFDF",
        secondary: "F7F6CF",
      },
    },
  },
  plugins: [],
};
