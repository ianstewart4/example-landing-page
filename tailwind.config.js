module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'background': '#4f6d7a',
        'font-main': '#166088',
        'font-secondary': '#dbe9ee',
        'font-tertiary': '#083953',
        'font-hover': '#c0d6df',
        'button': '#166088',
        'button-hover': '#4a6fa5',
        'button-font': '#dbe9ee',
        'button-secondary': '#dbe9ee',
        'button-secondary-hover': '#c0d6df',
        'button-secondary-font': '#166088',
      },
    },
    plugins: [],
  }
}
