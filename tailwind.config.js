/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { brand: '#0867B8', navy: '#073B70', sky: '#36A9E8', soft: '#EAF5FC', ink: '#172B40', mist: '#F7FAFC' },
      fontFamily: { sans: ['"Plus Jakarta Sans Variable"', 'system-ui', 'sans-serif'] },
      boxShadow: { soft: '0 20px 60px -24px rgba(7,59,112,.28)' },
    },
  },
  plugins: [],
}
