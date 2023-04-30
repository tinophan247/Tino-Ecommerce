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
        520: '520px',
        600: '600px'
      },
      maxWidth: {
        1000: '1000px'
      },
      width: {
        200: '200px',
        450: '450px',
        520: '520px',
        100:'1000px'
      }
    }
  },
  plugins: []
};
