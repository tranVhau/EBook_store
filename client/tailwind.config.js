/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-deep-ocean": "#183461",
        "my-deeper-ocean": "#142d51",
        "my-soft-blue": "#a3c8ff",
      },
      fontFamily: {
        tiltwrap: ["Tilt Warp", "cursive"],
      },
      backgroundImage: {
        "my-bg": "url('/images/my-bg-ebooks.png')",
        "my-bg-countdown": "url('/images/my-bg-countdown.png')",
        "my-bg-discount": "url('/images/my-bg-discount.png')",
        "my-bg-no_result": "url('/images/my-bg-no_result_found.png')",
      },
    },
  },

  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};
