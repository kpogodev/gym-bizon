/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#111',
        secondary: '#333',
        accent: '#888',
      },
      textColor: {
        primary: '#fff',
        secondary: '#888',
      },
      fontFamily: {
        sans: ['Nunito Sans','ui-sans-serif', 'system-ui','sans-serif'],
      },
    },
  },
  plugins: [],
}

