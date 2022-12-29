/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1110px",
    },
    container: {
      center: true,
    },
    colors: {
      moderate_Cyan: "hsl(176, 50%, 47%)",
      darkCyan: "hsl(176, 72%, 28%)",
      black: "hsl(0, 0%, 0%)",
      dark_Gray: "hsl(0, 0%, 48%)",
      light_Gray: "hsl(0, 0%, 96%)",
      white: "hsl(0, 0%, 100%)",
      background: "hsl(261, 100%, 5%)",
      background2: "hsl(259, 100%, 9%)",
      green_Text: "hsl(126,96%,50%)",
      dark_green: "hsl(126, 96%, 20%)",
      light_Text: "hsl(0,0%,85%)",
    },
    fontFamily: {
      commissioner: [`'Commissioner', sans-serif`],
    },
    extend: {},
  },
  plugins: [],
}
