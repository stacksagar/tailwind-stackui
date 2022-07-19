module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        header_height: "65px",
        minus_header_height: "calc(100vh - 65px)",
      },
      colors: {
        dark1: "#131B4C",
        dark2: "#0A0829",
      },
    },
  },
  plugins: [],
};
