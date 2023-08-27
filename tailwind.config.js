/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        innerShadow: "inset 0 0 0 9px rgb(255 255 255/30%)",
        innerShadowDark: "inset 0 0 0 9px rgb(25 25 25/50%)"
      },
      keyframes: {
        circle: {
          "0%": {
            borderRadius: "60% 40% 30% 70%/ 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/ 50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/ 60% 30% 70% 40%",
          },
        }
      },
      animation: {
        circleAnimation: "circle 8s ease-in-out infinite 1s"
      },
      backgroundImage: {
        profile: "url('../public/images/profile.jpg')",
      },
    },
  },
  plugins: [],
};
