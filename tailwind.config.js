/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        jlengut: {
          green: "#2E7D32",
          greenDark: "#1B5E20",
          blue: "#4FC3F7",
          yellow: "#FFC107",
          yellowDark: "#FFB300",
        },
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "bounce-slow": "bounce-slow 2.5s infinite",
      },
    },
  },
  plugins: [],
};
