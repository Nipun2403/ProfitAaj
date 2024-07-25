/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueButton: "#007BFF",
        white1: "#ffffff",
        white2: "#F8F9FA",
        offWhite: "#fffaf0",
        greyBorder: "#d4d7da",
      },
    },
  },
  plugins: [],
};

