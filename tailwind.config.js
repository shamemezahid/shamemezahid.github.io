/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '320px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
          },
          '100%': { 
            opacity: '1',
          },
        },
        fadeToLow: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.35' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s cubic-bezier(0.1, 0.5, 0.3, 1) forwards',
        fadeToLow: 'fadeToLow 3s ease-in 1s forwards'
      },
    },
    colors: {
      primary: {
        50: 'rgb(var(--primary-color-50))',
        100: 'rgb(var(--primary-color-100))',
        200: 'rgb(var(--primary-color-200))',
        300: 'rgb(var(--primary-color-300))',
        400: 'rgb(var(--primary-color-400))',
        500: 'rgb(var(--primary-color-500))',
        600: 'rgb(var(--primary-color-600))',
        700: 'rgb(var(--primary-color-700))',
        800: 'rgb(var(--primary-color-800))',
        950: 'rgb(var(--primary-color-950))',
        900: 'rgb(var(--primary-color-900))',
      },
      neutral: colors.neutral,
      white: colors.white,
      black: colors.black,
      lime: colors.lime,
      yellow: colors.yellow,
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
