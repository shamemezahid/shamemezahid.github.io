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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeToLow: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.35' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        fadeToLow: 'fadeToLow 3s ease-in 1s forwards'
      },
    },
    colors: {
      primary: colors.blue,
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
