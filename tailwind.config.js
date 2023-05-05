/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cubes': "url('https://www.transparenttextures.com/patterns/cubes.png')",
      },
      colors: {
        'primary': '#333366',
        'secondary': '#ff6699',
      },
      animation: {
        'bounceSlow': 'bounceSlow 3s infinite',
        'fadeIn': 'fadeIn 2s',
      },
      keyframes: {
        'bounceSlow': {
          '0%, 100%': { 
            transform: 'translateY(4%)',
          },
          '50%': {
            transform: 'translateY(2%)',
          },
        },
        'fadeIn': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }, 
        },
     },
     plugins: [],
    }
  }
}
