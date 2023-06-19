/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'te-logo': '#d2eced',
        'te-blue': '#1fafb5',
        'te-facebook': '#1877f2',
        'te-google': '#ea4335'

      },
      height: {
        500:'500px',
        520: '520px',
        600: '600px'
      },
      maxWidth: {
        1000: '1000px'
      },
      width: {
        150: '150px',
        200: '200px',
        450: '450px',
        520: '520px',
        800:'800px',
        700:'700px',
        1200: '1200px',
        1500 : '1500px',
        1600:'1600px'
      }
    }
  },
  plugins: []
};
