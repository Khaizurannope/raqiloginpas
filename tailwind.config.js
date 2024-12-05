/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      darkBlue: "#15314B",
      gray: "#c6d1d8",
      white: "#fff",
    },
    extend: {
      backgroundImage: {
        store: "url('/img/ytta.jpg')",  // Update to use '/img/'
        darkBg: "linear-gradient(to-bottom, #15314B 0%, #c6d1d8 100%)",
        lightBg: "linear-gradient(to-bottom, #15314B 0%, #C6D1D8 50%, #FFF 100%)",
      },
    },
  },
  darkMode: 'class', // Enables dark mode
  plugins: [],
};
