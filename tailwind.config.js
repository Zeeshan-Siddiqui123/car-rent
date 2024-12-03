module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust to your file paths
  ],
  theme: {
    extend: {
      keyframes: {
        moveCar: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "move-car": "moveCar 2s linear infinite",
      },
    },
  },
  plugins: [],
};
