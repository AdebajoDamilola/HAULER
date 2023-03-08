/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato","sans-serif" ]
        
      },
      colors: {
        hero: "#1D1D1D",
      },
      screens: {
        'sm': '360px',
        'md': '640px',
        'lg': '1024px'
      },
    },
  },
  plugins: [],
};
