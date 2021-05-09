module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      'not-allowed': 'not-allowed',
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['hover', 'focus' , 'disabled'],
    },
  },
  plugins: [],
}
