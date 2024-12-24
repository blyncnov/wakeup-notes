/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#918EFF",
        secondary: "#121719",
        blue: "#2963EB",
        purple: "#8b5cf6",
        dark: "#232323",
      },
    },
  },
  plugins: [],
};
