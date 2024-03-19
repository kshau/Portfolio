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
        "gray-1": "#A1A1A1", 
        "navbar-bg": "#0B143F", 
        "footer-bg": "#161616", 
        "social-link-bg": "#1B1B1B", 
        "navbar-item-underline": "#A86161"
      }
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