module.exports = {
  theme: {
    extend: {
      keyframes: {
        'scroll-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'scroll-left': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'scroll-right': 'scroll-right 20s linear infinite',
        'scroll-left': 'scroll-left 20s linear infinite'
      }
    }
  }
} 