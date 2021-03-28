const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./**/*.tsx"],
  theme: {
    fontFamily: {
      display: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"]
    },
    colors: {
      ...defaultTheme.colors,
      primary: {
        900: "#E6E6FA",
        800: "#9B2C2C",
        700: "#AF1818",
        600: "#C12C27",
        500: "#DF5754",
        400: "#FC8181",
        300: "#FEB2B2",
        200: "#FED7D7",
        100: "#FFF5F5",
        50: "#FFFAFA"
      }
    },
    extend: {
      colors: {
        rose: colors.rose,
        cyan: colors.cyan,
        teal: colors.teal,
        blue: colors.lightBlue
      }
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp")
  ]
}
