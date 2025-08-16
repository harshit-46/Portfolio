const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Define your paths here
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s ease-in-out infinite",
        "fade-in": "fade-in 0.4s ease forwards",
      },
      keyframes: {
        aurora: {
          "0%": {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          "100%": {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      fontFamily: {
        "playfair-display": ['"Playfair Display"', "serif"],
      },
      backgroundImage: {
        "gradient-and-gif":
          "linear-gradient(to top, rgba(187,53,66,0.5), rgba(187,53,66,0.5)), url('/portvid.gif')",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      const backgroundColors = theme("backgroundColor"); // Use `theme` to access background colors

      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: backgroundColors, type: "color" }
      );
    },
  ],
};

// Plugin to add colors as CSS variables
function addVariablesForColors({ addBase, theme }) {
  const colors = theme("colors"); // Use the theme directly to access colors
  const newVars = Object.fromEntries(
    Object.entries(colors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
