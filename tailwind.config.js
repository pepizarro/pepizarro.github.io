/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
