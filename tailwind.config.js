/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#050505", // Almost black
          800: "#0a0a0a",
          700: "#121212",
        },
        primary: {
          // Electric Violet / Indigo for that "premium" tech feel
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
        },
        accent: {
          cyan: "#06b6d4",
          purple: "#8b5cf6",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
