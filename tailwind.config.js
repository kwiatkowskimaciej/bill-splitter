/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#F9D1D6',
      secondary: '#FCF7F2',
      tertiary: '#6B576A',
    },
    fontFamily: {
      sans: ['Montserrat', 'Roboto'],
    },
  },
  plugins: [],
};
