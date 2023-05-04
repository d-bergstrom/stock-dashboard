/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom Colors
      colors: {
        white: "white",
        none: "none",
      },
      //Custom Border Widths
      borderWidth: {
        1: "1px",
      },
      //Google Inter Font
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      //Tailwind template rules for rows only go to 6. Created 7 and 8 manually.
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(7, minmax(0, 1fr))"
      },
    },
  },
  plugins: [],
}

