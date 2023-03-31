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
      backgroundImage: {
        waves: "url('/img/Waves.svg')",
        'waves-light': "url('/img/Waves-light.svg')",
        'brand-gradient': 'linear-gradient(244.1deg, #9C45FC 12.55%, #A95DFC 32.31%, #BD83FD 86.37%)',
        'inkubator-banner-light': "url('/img/inkubator-tile-banner-light.svg')",
        'inkubator-banner-dark': "url('/img/inkubator-tile-banner-dark.svg')",
        'gradient-1': 'linear-gradient(180deg, #FFFFFF 0%, #EFEFEF 100%);',
        'gradient-1-dark': 'linear-gradient(180deg, #1B1B1D 0%, #242526 100%);',
      },
      cursor: {
        default: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath d='M.16.55C.79 4.42-1.86 8.63 3.09 10.6l5.56-3.47C9.04 1.82 4.1 2.35.9.09a.47.47 0 0 0-.74.46Z' style='fill:%238747cc'/%3E%3Cpath d='M9.92 15.35c-2.05 1.28-5.06.74-6.32-2.38C2.44 10.01 2.06 4.47.91 1.29c-.07-.19.18-.35.32-.2 2.68 2.77 8.41 5.86 10.03 8.46 1.23 1.97.63 4.57-1.34 5.8Z' style='fill:%23bc83fb'/%3E%3Cpath d='M11.16 9.4c-1.71.95-3.57.9-4.59.76-.32.96-1.05 2.58-2.52 3.69-.16-.27-.31-.56-.44-.88-.08-.22-.17-.45-.24-.69 1.41-1.29 1.8-3.21 1.8-3.22.05-.23.18-.43.38-.55.19-.12.43-.16.64-.09.02 0 2.04.52 3.86-.3.45.44.84.86 1.12 1.28Z' style='fill:%238747cc'/%3E%3C/svg%3E") 0 0, default`,
      },
    },
  },
  plugins: [],
}
