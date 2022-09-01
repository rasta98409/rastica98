/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './*html'
  ],
  darkMode: false,
  content: [],
  theme: {
    screens: {

      'xs': {'min': '1px', 'max': '460px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }


      'sm': {'min': '360px', 'max': '450px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '450px', 'max': '940px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '710px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'monserrat': ['Inconsolata','monospace'],
        'mono': ['monospace'],
      },
    },
  },
  plugins: [],
}