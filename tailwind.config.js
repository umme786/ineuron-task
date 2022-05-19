module.exports = {
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        inBlue: {
          50: 'rgba(178, 159, 218, 0.5)',
          100: '#F2F5FF',
          300: '#E6E4FC',
          900: '#061357',
        },
        inPurple: {
          500: '#7443DE',
        },
        inGray: {
          100: '#EDEDEB',
          500: '#ABABAB',
          600: '#E0E0E0',
          700: '#63676A',
        },
      },
    },
    fontFamily: {
      inter: ['Inter', 'ui-sans-serif'],
      montserrat: ['Montserrat', 'ui-sans-serif'],
    },
  },
  plugins: [],
}
