/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hColor: "#EDEDED", // Custom color for Head
        colorHeading: "#505050",
        btnColor: "#CB1B1B",
        itemColor: "#353535",
        bgCard: "#E1E1E1",
      },
      fontSize: {
        "32px": "54px", // Create a custom font size of 32px
      },
      margin: {
        473: "30rem", // Adds a custom margin of 473px
      },
      width: {
        1224: "76rem",
      },
      fontFamily: {
        sans: ["shabnam", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
}
