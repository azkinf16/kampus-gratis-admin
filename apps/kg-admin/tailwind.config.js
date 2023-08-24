const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      black:'#000000',
      primary: '#106FA4',
      success: {
        base: '#85D262',
        100: '#EAFBD7',
        200: '#D1F7B1',
        300: '#D1F7B1',
        400: '#85D262',
        500: '#54B435',
        600: '#3A9A26',
        700: '#25811A',
        800: '#136810',
        900: '#0A560D',
      },
      warning: {
        base: '#F59E0B',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
      },
      error: {
        base: '#CD261E',
        100: '#F9B7B4',
        200: '#F69490',
        300: '#F4726C',
        400: '#F14F48',
        500: '#EE2D24',
        600: '#CD261E',
        700: '#AC1F18',
        800: '#8C1712',
        900: '#6B100C',
      },
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
