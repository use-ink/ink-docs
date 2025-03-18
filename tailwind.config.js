/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}', './docs/**/*.mdx'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        nunito: 'Nunito Sans',
        lora: 'Lora, serif',
        freude: 'Freude',
      },
      colors: {
        brand: {
          500: '#BD83FD',
          800: '#5a007e',
        },
        background: {
          100: '#F2F2F3',
          300: '#D6D8DC',
          700: '#444950',
          800: '#242526',
          900: '#090909',
        },
        'light-background': 'white',
        'dark-background': '#1b1b1d',
        transparent: 'rgba(0,0,0,0)',
      },
      maxWidth: {
        biggest: '1440px',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        heartbeat: {
          '0%, 80%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(5)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        flip: {
          '0%, 16%': { transform: 'rotateY(0)' },
          '8%': { transform: 'rotateY(180deg)' },
          '16%, 100%': { transform: 'rotateY(0)' },
        },
      },
      backgroundImage: {
        waves: "url('/img/Waves.svg')",
        'waves-light': "url('/img/Waves-light.svg')",
        'brand-gradient': 'linear-gradient(244.1deg, #9C45FC 12.55%, #A95DFC 32.31%, #BD83FD 86.37%)',
        'inkubator-banner-light': "url('/img/inkubator-tile-banner-light.svg')",
        'inkubator-banner-dark': "url('/img/inkubator-tile-banner-dark.svg')",
        'gradient-1': 'linear-gradient(180deg, #FFFFFF 0%, #EFEFEF 100%);',
        'gradient-1-dark': 'linear-gradient(180deg, #1B1B1D 0%, #242526 100%);',
      },
      animation: {
        glow: 'glow 10s ease-in-out infinite',
        heartbeat: 'heartbeat 1.2s ease-in-out infinite',
        float: 'float 10s ease-in-out infinite',
        flip: 'flip 3s cubic-bezier(0.25, 0.1, 0.25, 1.0) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
