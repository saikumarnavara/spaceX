/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#334",
        customLightGray: "#333",
        customBlack: "#000",

        customWhite: "#fff",
        customBlue: "#007bff",
        customGreen: "#28a745",
        customRed: "#dc3545",
        customYellow: "#ffc107",
        customPurple: "#6f42c1",
        customOrange: "#fd7e14",
        customPink: "#e83e8c",
        customTeal: "#20c997",
        customIndigo: "#6610f2",
        customLime: "#d39e00",
        customCyan: "#17a2b8",
        customMaroon: "#d81b60",
        customNavy: "#001f3f",
        customOlive: "#8d6e63",
        customSilver: "#ddd",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        "Poppins-Bold": ["Poppins-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
