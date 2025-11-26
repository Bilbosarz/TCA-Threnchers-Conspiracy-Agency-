module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#00ff8a',
        cloudy: '#e6f7ff'
      },
      keyframes: {
        bob: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0)' }
        },
        floatX: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(8px)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        bob: 'bob 4s ease-in-out infinite',
        floatX: 'floatX 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
