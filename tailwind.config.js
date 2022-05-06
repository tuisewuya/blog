module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       code: {
      //         display: "inline",
      //         "max-width": "auto",
      //         padding: 0,
      //         margin: 0,
      //         overflow: "visible",
      //         "line-height": "inherit",
      //         "word-wrap": "normal",
      //         "background-color": "transparent",
      //         border: 0,
      //       }
      //     },
      //   },
      // },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
