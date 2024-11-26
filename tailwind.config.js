/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electricBlue: "#2961DF", // For fun and vibrant elements
        vibrantPurple: "#8E45FB", // For playful accents
        hotPink: "#FF4A8E", // For interactive elements like buttons
        tealGreen: "#2EC4B6", // For calm and refreshing sections
        sunsetOrange: "#FF7235", // For calls-to-action and highlights
        midnightNavy: "#1C1F33", // For dark backgrounds
        softGray: "#F4F4F9", // For subtle backgrounds
        charcolBlack:"#2D2D2D",
        purple:"#261893",
        lemon:"#dbff5e"
      },
    },
  },
  plugins: [],
}

