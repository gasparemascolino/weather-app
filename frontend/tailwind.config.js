module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      keyframes: {
        moveLeftFade: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        moveRightFade: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      animation: {
        moveLeftFade: 'moveLeftFade 20s linear infinite',
        moveRightFade: 'moveRightFade 20s linear infinite',
      },
    },
  },
  plugins: [],
};
