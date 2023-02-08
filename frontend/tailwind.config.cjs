/* @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
});

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,vue,tsx}",
    , "./node_modules/**/*.js", "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      

      colors: {
        'night-black': '#282D3F',
        'night-red': '#FF406F'
      },

      fontFamily: {
        'fuente1': ['ui-sans-serif', 'system-ui'],
        'fuente2': ['ui-serif', 'Georgia'],
        'fuente3': ['ui-monospace', 'SFMono-Regular'],
        'fuente4': ['Oswald'],
        'fuente5': ['"Open Sans"'],
      },
      // animate-[wave_2s_ease-in-out_infinite]
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      // animate-waving-hand
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },

      globales: {
        'home_btn': 'text-[#793409] text-center  pb-[10px] text-2xl',
        'home_btn_cerrar': 'text-[#793409] text-center pt-[80px] pb-[10px] text-2xl',
        'home_cerrar1': 'flex flex-col justify-center items-center',
        'home_cerrar2': 'bg-[#fd4646] px-[30px] rounded-md duration-300 group hover:bg-transparent',
        'home_cerrar3': 'text-xl pt-4 text-white font-semibold duration-300 group-hover:text-[#fd4646] group-hover:p-4 group-hover:bg-white group-hover:rounded-md',
      },
    
    
    },
  },
purge: [
  './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
],
plugins: [
  require('flowbite/plugin')
]
}
