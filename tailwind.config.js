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
      },
      keyframes: {
        'bounceSlow': {
          '0%, 100%': { 
            transform: 'translateY(1%)',
          },
          '50%': {
            transform: 'translateY(0%)',
          },
        },
     },
     plugins: [],
    }
  }
}
