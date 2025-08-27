/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#1E40AF", 50: "#EFF6FF", 100: "#DBEAFE", 500: "#1E40AF", 600: "#1D4ED8", 700: "#1E3A8A" },
        secondary: { DEFAULT: "#FFD700", 50: "#FFFBEB", 100: "#FEF3C7" },
        accent: { DEFAULT: "#EF4444", 50: "#FEF2F2", 100: "#FEE2E2" }
      }
    },
  },
  plugins: [],
}
