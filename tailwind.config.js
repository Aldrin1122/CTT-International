/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#51E9EF",
        secondary: "#39B0A8",
        lightgray: "#fafafa",
        darkgray: '#5C5B5B',
      },

      fontFamily: {
        Poppins: ['Poppins', 'san-serif']
      },
      fontSize: {
        huge: 'clamp(3rem, 6vw, 5rem)',
        huge2: 'clamp(2rem, 4vw, 3rem)',
        huge3: 'clamp(2rem, 4vw, 70px)'

      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        ssm: '460px',
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      //  '2xl': '1496px',
      },
    }
  },
  plugins: [],
}

