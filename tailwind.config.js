/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      extend: {
        colors: {
          "custom-white": "rgba(255, 193, 69, 0.5)",
        },
      },
    },
  },
  plugins: [],
};
