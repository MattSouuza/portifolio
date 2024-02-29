import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease inifinite'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      colors: {
        'night-bg': {
          DEFAULT: '#040A1A',
          light: '#152345'
        },
        'bloom-pink': {
          DEFAULT: '#B90778',
          light: '#C33F93'
        },
        'sunnier-yellow': '#E57F21',
        'revolution-red': '#B90707',
        'neon-green': '#2CD397'
      },
      backgroundImage: {
        'summer-gradient': 'linear-gradient(30deg, rgb(185, 7, 120) 20% , rgb(185, 7, 7) 50%, rgb(229, 127, 33) 100%)',
        'next-level-gradient': 'conic-gradient(from 0.25turn, rgb(185, 7, 120) 10%, rgb(185, 7, 7) 35%, rgb(44, 211, 151) 55%, rgb(229, 127, 33) 95%)'
      }
    },
  },
  plugins: [],
}

export default config
