/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      'nav-header':['25px',{
        fontWeight:'500',
        letterSpacing:'4px',
      }]
    },
    container: {
      padding: {
        DEFAULT: '20px',
        sm: '10px',
        lg: '15px',
        xl: '20px',
        '2xl': '25px',
      },
  },
  plugins: [],
}
}

