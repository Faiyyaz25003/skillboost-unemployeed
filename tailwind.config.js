/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1B4FE0",
          blueDark: "#0A1E4D",
          navy: "#0B1739",
          orange: "#F5A425",
          orangeDark: "#F08C1B",
          bg: "#F3F6FB",
        },
      },
      fontFamily: {
        sans: ["'Poppins'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(15, 30, 80, 0.06)",
      },
    },
  },
  plugins: [],
};