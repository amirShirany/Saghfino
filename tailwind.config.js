/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Black: "#0c0c0c",
        Gr13: "#121212",
        Gr12: "#212121",
        Gr11: "#353535",
        Gr10: "#505050",
        Gr9: "#717171",
        Gr8: "#909090",
        Gr7: "#adadad",
        Gr6: "#cbcbcb",
        Gr5: "#d9d9d9",
        Gr4: "#e1e1e1",
        Gr3: "#ededed",
        Gr2: "#f9f9f9",
        Gr1: "#fafafa",

        primary: "#cb1b1b",
        shade6: "#430909",
        shade5: "#5a0c0c",
        shade4: "#700f0f",
        shade3: "#871212",
        shade2: "#9e1515",
        shade1: "#b41818",

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
  plugins: [],
}
