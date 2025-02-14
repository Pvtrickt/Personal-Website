/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        CutiveMono: ["Cutive Mono"],
        Oswald: ["Oswald"],
        Anton: ["Anton"]
      }
    },
  },
  plugins: [],
}