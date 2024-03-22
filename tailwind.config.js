const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#E0E0E0", 
        "gray": "#A1A1A1", 
        "navbar-bg": "#0B143F", 
        "footer-bg": "#161616", 
        "social-link-bg": "#1B1B1B", 
        "navbar-item-underline": "#A86161", 
        "card-bg": "#1E275A"
      }, 
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", top: "60px", position: "relative" },
          "100%": { opacity: "1", top: "20px", position: "relative" },
        }
      }, 
      animation: {
        fadeIn: 'fadeIn 0.5s forwards',
      }, 
    },
    textShadow: {
      DEFAULT: '0 10px 20px var(--tw-shadow-color)',
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}