const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: "#1da1f2",
        darkblue: "#2795d9",
        lightblue: "#aabbc2",
        lighter: "#e1e8ed",
        lightest: "#f5f8fa",
      },
    },
  },
  plugins: [],
};
