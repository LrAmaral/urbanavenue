/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: 'var(--font-vollk)',
        alt: 'var(--font-kumbh)',
      },
      keyframes: {
        appear: {
          '0%': {
            transform: 'translateY(-80px)',
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      display: ['group-focus'],
      variants: {
        scrollbar: ['rounded'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
