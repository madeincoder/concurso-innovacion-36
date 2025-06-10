/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '575px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1375px',      
    },
    fontFamily: {
      primary: ['AR One Sans', 'sans-serif'],
      secondary: ['KyivType Sans', 'sans-serif'],
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      yellow:'#FFD700',
      white:'#ffffff',
      blue:'#0047BB',
      black:'#000000',
    },
    extend: {},
  },
  plugins: [],
};
