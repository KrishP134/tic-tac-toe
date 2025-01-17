/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        lg: "0px 0px 20px ",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
