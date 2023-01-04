const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans]
      }
    }
  },
  future: ["hoverOnlyWhenSupported", "respectDefaultRingColorOpacity"],
  experimental: ["optimizeUniversalDefaults"],
  plugins: []
}
