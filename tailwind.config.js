/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xs: "480px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
        padding: {
          DEFAULT: "20px",
          xs: "20px",
          sm: "20px",
          md: "60px",
          lg: "60px",
          xl: "60px",
          "2xl": "60px",
        },
      },
    },
  },
  plugins: [],
};
