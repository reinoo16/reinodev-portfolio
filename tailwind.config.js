/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#161616',
        black20: 'rgba(22,22,22,0.2)',
        black60: 'rgba(22,22,22,0.6)',
        black70: 'rgba(22,22,22,0.7)'
      },
      screens: {
        'sm': '640px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1024px',  // Large screens
        'xl': '1280px',  // Extra large screens
        '2xl': '1536px', // Double extra large screens
      },
    },
  },
  plugins: [],
}