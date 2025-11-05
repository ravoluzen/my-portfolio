/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'src/**/*.{html,md,njk,js}',
  ],
  theme: {
    extend: {
      colors: {
        justBlack: '#131313',
        lightLavender: '#E6E6FA',
        lilac: '#C8A2C8',
        periwinkle: '#CCCCFF',
        lightGray: '#F2F2F2',
        darkPurple: '#5D4777',
        softBlack: '#333333',
        softSage: '#D1E2C4',
        paleSilver: '#E8E8E8',
      },
      fontFamily: {
        artistic: ['Artistic-nonO', 'serif'],
      },
    },
  },
  plugins: [],
};
