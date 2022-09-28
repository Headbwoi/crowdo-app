/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      moderate_Cyan: "hsl(176, 50%, 47%)",
      darkCyan: "hsl(176, 72%, 28%)",
      Black: "hsl(0, 0%, 0%)",
      dark_Gray: "hsl(0, 0%, 48%)",
    },
    fontFamily: {
      commissioner: [`'Commissioner', sans-serif`],
    },
    extend: {},
  },
  plugins: [],
}
