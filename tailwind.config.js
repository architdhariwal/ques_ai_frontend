/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#7E22CE",
        primaryLight:'#F3E8FF',
        secondary: "#F3E8FF",
      }
    },
  },
  plugins: [],
};
