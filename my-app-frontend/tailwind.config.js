/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "lime-50": "rgb(247 254 231)",
      "lime-100": "rgb(236 252 203)",
      "lime-200": "rgb(217 249 157)",
      "lime-300": "rgb(190 242 100)",
      "lime-400": "rgb(163 230 53)",
      "lime-500": "rgb(132 204 22)",
      "lime-600": "rgb(101 163 13)",
      "lime-700": "rgb(77 124 15)",
      "lime-900": "rgb(54 83 20)",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
