/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'border-animation': 'rotate-animation 7s linear forwards;',
      },
      keyframes: {
        'rotate-animation': {
          '0%' : {transform: 'rotate(0deg)'},
          '100%': { transform: 'rotate(360deg)',
            opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

