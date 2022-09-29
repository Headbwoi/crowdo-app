/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    container: {
      center: true,
    },
    colors: {
      moderate_Cyan: "hsl(176, 50%, 47%)",
      darkCyan: "hsl(176, 72%, 28%)",
      black: "hsl(0, 0%, 0%)",
      dark_Gray: "hsl(0, 0%, 48%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      commissioner: [`'Commissioner', sans-serif`],
    },
    extend: {},
  },
  plugins: [],
}
