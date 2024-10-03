/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        glassmorphism: "rgba(217, 217, 217, 0.05)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      textColor: {
        textColor: "#BD9B6D",
        primary: "#4A4032",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
