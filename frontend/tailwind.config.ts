import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      }
    },
  },
  plugins: [],
}

export default config
