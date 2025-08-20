/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#2563EB", 50: "#EFF6FF", 100: "#DBEAFE", 500: "#2563EB", 600: "#1D4ED8", 700: "#1E40AF" },
        secondary: { DEFAULT: "#93C5FD", 50: "#EFF6FF", 100: "#DBEAFE" }
      }
    },
  },
  plugins: [],
}
