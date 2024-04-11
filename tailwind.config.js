/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}','node_modules/flowbite-react/lib/esm/**/*.js','./node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors:{
        custom:{
          '15616D': '#15616D',
          'FF7D00':'#FF7D00',
          '287581':'#287581',
          '818181':'#818181'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}