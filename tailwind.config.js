/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
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
  plugins: [],
}

