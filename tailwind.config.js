/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5EFE0',
        terracotta: '#C4714A',
        sage: '#7A9E7E',
        'warm-brown': '#4A3728',
        'dusty-gold': '#D4A853',
        sand: '#E8D5B7',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
