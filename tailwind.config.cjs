/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#E7ECEF",
        primary: "#274C77",
        accent: "#6096BA",
        lightAccent: "#A3CEF1",
        muted: "#8B8C89",
        darkBackground: "#1e1e1e",
        darkCard: "#2c2c2c",
      },
      fontFamily: {
        heading: ['"Poppins"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

