const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  //purge: ["./pages/**/*.{md,mdx}", "./styles/*.css"],
  purge: false,
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        dark: "#111",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
