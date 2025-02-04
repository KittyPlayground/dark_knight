/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],

      },
      colors: {
        'bat-black': '#0A0A0A',
        'bat-gray': '#1A1A1A',
        'bat-yellow': '#FFC107',
        'bat-gold': '#FFD700',
        'bat-red': '#DC2626',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9))',
      },
    },
  },
  plugins: [],
};