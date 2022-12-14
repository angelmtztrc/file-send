// eslint-disable-next-line @typescript-eslint/no-var-requires
const Color = require('color');

const lighten = (color, value) => Color(color).lighten(value).hex().toString();
const darken = (color, value) => Color(color).darken(value).hex().toString();

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fffffe',
        'eerie-black': {
          light: lighten('#16161a', 0.08),
          DEFAULT: '#16161a',
          dark: darken('#16161a', 0.08)
        },
        'raisin-black': {
          light: lighten('#242629', 0.08),
          DEFAULT: '#242629',
          dark: darken('#242629', 0.08)
        },
        'medium-state-blue': {
          light: lighten('#7f5af0', 0.08),
          DEFAULT: '#7f5af0',
          dark: darken('#7f5af0', 0.08)
        },
        'cadet-grey': {
          light: lighten('#94a1b2', 0.08),
          DEFAULT: '#94a1b2',
          dark: darken('#94a1b2', 0.08)
        }
      }
    }
  },
  plugins: []
};
