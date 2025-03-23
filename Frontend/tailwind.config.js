/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6347',
        secondary: '#FF8367',
        background: {
          dark: '#1C1E26',
          light: '#2D2F3A',
        },
      },
    },
  },
  plugins: [],
};