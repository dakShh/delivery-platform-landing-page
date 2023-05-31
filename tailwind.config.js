/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
      secondary: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1025px",
      xl: "1170px",
    },
    extend: {
      colors: {
        primary: "#212353",
        secondary: "#4B5D68",
        accent: {
          primary: "#9C69E2",
          primary_hover: "#9059DB",
          secondary: "#F06388",
          secondary_hover: "#E350A9",
          tertiary: "#69C9BA",
        },
      },
    },
  },
  plugins: [],
};
