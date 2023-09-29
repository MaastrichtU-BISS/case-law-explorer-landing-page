/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        lightblue: '#9082B5',
        darkblue: '#262FA5',
        white: '#FFFFFF',
      },
      screens: {
        'maxsize': '1440px',
      },
    },
  },
  plugins: [],
}

