module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#9CDBA6",
        primary: "#50B498",
        "primary-dark": "#468585",
        secondary: "#DEF9C4",
      },
      fontFamily: {
        sans: ["Inter", "system-ui"],
      },
      animation: {
        "text-slide": "text-slide 5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      keyframes: {
        "text-slide": {
          "0%, 40%": {
            transform: "translateY(0%)",
          },
          "50%, 90%": {
            transform: "translateY(-33.33%)",
          },
          "100%": {
            transform: "translateY(-66.66%)",
          },
        },
      },
    },
  },
  plugins: [require("preline/plugin"), require("autoprefixer")],
};
