/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './app/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36a9f7',
          500: '#0c8de9',
          600: '#026fc7',
          700: '#0358a1',
          800: '#074b83',
          900: '#0c3f6e',
          950: '#082849',
        },
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          border: '#334155',
          hover: '#334155/60',
          text: '#f8fafc',
          muted: '#94a3b8'
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [],
}
