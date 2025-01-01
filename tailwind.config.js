/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6979F8',
        secondary: '#9BA6FA',
        tertiary: '#CDD2FD',
        titleColor: '#151522',
        textColor: '#999999',
      },
      fontFamily: {
        'sf-pro': ['SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
  testEnvironment: 'jest-environment-jsdom',
};
