/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      shPrimary: {
        light: "#ff7ae7",
        DEFAULT: "#ff2ed8",
        dark: "#cc25ad",
        darker: "#80176c",
      },
      shSecondary: {
        DEFAULT: "#2194ff",
        dark: "#1b76cc",
        darker: "#114a80",
      },
      shTertiary: {
        green: "#14ff6f",
        yellow: "#f0ff47",
      },
      shBase: {
        light: "#a692a6",
        medium: "#665a66",
        dark: "#332d33",
        darker: "#1a171a",
        contrast: "#ebe4ea",
        contrastDark: "#d1cbd0",
      },
    },
    extend: {},
  },
  plugins: [],
};