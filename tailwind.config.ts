import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInLeft: {
          from: { 
            opacity: '0',
            transform: 'translateX(-40px)' 
          },
          to: { 
            opacity: '1',
            transform: 'translateX(0)' 
          },
        },
        fadeInRight: {
          from: { 
            opacity: '0',
            transform: 'translateX(40px)' 
          },
          to: { 
            opacity: '1',
            transform: 'translateX(0)' 
          },
        },
        fadeIn:{
            from:{opacity: '0'},
            to:{opacity: '1'}
        },
        
      },
      animation: {
        'fade-in-left': 'fadeInLeft 1s ease-out forwards',
        'fade-in-right': 'fadeInRight 1s ease-out forwards',
        'fade-in': 'fadeIn 3s ease-out forwards',
        'fade-in5s': 'fadeIn 5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
export default config;