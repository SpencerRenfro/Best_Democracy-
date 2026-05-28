import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-source-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },
      colors: {
        bd: {
          navy:   '#0D1B2A',
          cobalt: '#1B4FE8',
          gold:   '#C8972A',
          cream:  '#F5F0E8',
          slate:  '#4A5568',
          red:    '#C0392B',
          green:  '#1A6B3C',
          muted:  '#8A9BB0',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0D1B2A 0%, #1a2f4a 50%, #0D1B2A 100%)',
        'gold-gradient': 'linear-gradient(90deg, #C8972A, #E8B84B)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.4s ease-out forwards',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp:    { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:    { from: { opacity: '0' }, to: { opacity: '1' } },
        slideLeft: { from: { opacity: '0', transform: 'translateX(20px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export default config;
