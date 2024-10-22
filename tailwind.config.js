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
    extend: {
      backgroundImage: {
        leasityLightCursorGradient:
          "radial-gradient(farthest-corner at var(--x) var(--y), #6484EF 0%, #E4E9FC 0%, #ffffff 90%)",
        uaiLightCursorGradient:
          "radial-gradient(farthest-corner at var(--x) var(--y), #ffffff 0%, #F2F3F5 90%, #e5e7eb 120%)",

        leasityDarkCursorGradient:
          "radial-gradient(farthest-corner at var(--x) var(--y), #2646AD 0%, #132357 0%, #010202 90%)",
        uaiDarkCursorGradient:
          "radial-gradient(farthest-corner at var(--x) var(--y), #000000 20%, #101010 90%, #151718 120%)",
      },
    },
  },
  plugins: [],
};
