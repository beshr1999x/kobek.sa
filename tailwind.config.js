/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#6B46C1" },
        secondary: { DEFAULT: "#D9BCFF" }
      }
    },
  },
  plugins: [],
}
