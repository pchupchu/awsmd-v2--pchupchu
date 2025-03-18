import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'var(--font-inter)',
      secondary: 'var(--font-jakarta)',
      accent: 'var(--font-freigeist-regular)',
      accent_bold: 'var(--font-freigeist-bold)',
      accent_italic: 'var(--font-freigeist-bold-italic)',
    },
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#000000',

        border: 'hsl(var(--border))',
      },
      backgroundImage: {},
      keyframes: {
        scaleImage: {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.2)',
          },
        },
        textToTheLeft: {
          '0%': {
            transform: 'translateZ(0)',
          },
          '100%': {
            transform: 'translate3d(-100%,0,0)',
          },
        },
        textToTheRight: {
          '0%': {
            transform: 'translate3d(-100%,0,0)',
          },
          '100%': {
            transform: 'translateZ(0)',
          },
        },
        btnPulse: {
          '0%': {
            transform: 'translate(-50%,-50%) scale(1)',
            opacity: '1',
          },
          '70%': {
            transform: 'translate(-50%,-50%) scale(1.6)',
            opacity: '0',
          },
          '70.1%': {
            transform: 'translate(-50%,-50%) scale(1)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(-50%,-50%) scale(1)',
            opacity: '1',
          },
        },
        btnRotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        scaleImage: 'scaleImage 4s infinite alternate',
        btnPulse: 'btnPulse 2s infinite',
        btnRotate: 'btnRotate 10s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
