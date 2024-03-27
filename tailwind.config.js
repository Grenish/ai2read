/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        mist: "#F3DAD8",
        errblack: "#191716",
      }
    },
  },
  plugins: [],
};
