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
      black: '#000000',
      primary: {
        base: '#106FA4',
        100: '#E9F6FD',
        200: '#D3E8F4',
        300: '#A8CDE2',
        400: '#67A5C8',
        500: '#0B568D',
        600: '#084076',
        700: '#084076',
        800: '#03204E',
      },
      yellow: {
        100: '#FEF6D0',
        200: '#FEEAA2',
        300: '#FDDB73',
        400: '#FBCB50',
        500: '#FAB317',
        600: '#D79210',
        700: '#B3740B',
        800: '#905807',
        900: '#774404',
      },
      red: {
        100: '#FEDBD7',
        200: '#FDB1AF',
        300: '#F9868F',
        400: '#F4677F',
        500: '#ED3768',
        600: '#CB2864',
        700: '#AA1B5D',
        800: '#891154',
        900: '#710A4E',
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
      green: {
        100: '#E3FBDA',
        200: '#C2F7B6',
        300: '#95E88D',
        400: '#6AD26A',
        500: '#3EB449',
        600: '#2D9A41',
        700: '#1F813A',
        800: '#136832',
        900: '#0B562D',
      },
      neutral: {
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
