module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    darkMode: 'class',
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      animation: {
        'fadeInOut': 'fadeInOut 3s linear infinite',
      },
      colors: {
        primary: '#026885',
        dark: '#0f172a',
        secondary: '#003f53',
        dark_sec: '#64748b',
      },
      fontFamily: {
        poppins: ['Poppins'],
        firaMono: ['Fira Mono'],
        firaSans: ['Fira Sans'],
        firaCode: ['Fira Code'],
      },
      screens: {
        'tablet-l': '992px',
        'hp': '576px',
        'hmin': '425px',
        'minni': '375px',
        'mini': '320px',
      },
    },
  },
  keyframes: {
    fadeInOut: {
      '0%': { opacity: '0' },
      '50%': { opacity: '1' },
      '100%': { opacity: '0' },
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
