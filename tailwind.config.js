module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      // xl: '1440px',
    },
    extend: {
      colors: {
        'background': '#F4A261',
        'font-best': '#4A6FA5',
        'font-main': '#2674E9',
        'font-secondary': '#264653',
        'font-tertiary': '#083953',
        'font-hover': '#c0d6df',
        'button': '#2A9D8F',
        'button-hover': '#4a6fa5',
        'button-font': '#dbe9ee',
        'button-secondary': '#dbe9ee',
        'button-secondary-hover': '#c0d6df',
        'button-secondary-font': '#166088',
        'testimonial-background': '#dbe9ee'
      },
    },
    plugins: [],
  }
}
