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
        poop: `url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJtLjIzLjg5Yy45NCw1Ljc5LTMuMDIsMTIuMDksNC4zOCwxNS4wNGw4LjMyLTUuMkMxMy41MywyLjc5LDYuMTMsMy41OCwxLjM0LjIuODItLjE3LjEzLjI2LjIzLjg5WiIgc3R5bGU9ImZpbGw6Izg3NDdjYzsiLz48cGF0aCBkPSJtMS44NCwxLjdjLS4yMS0uMjItLjU4LDAtLjQ4LjMsMS45OSw1LjUsMi4zNCwxNS4xMSw0LjgsMTkuMDQsMS44NCwyLjk1LDUuNzMsMy44NSw4LjY4LDJzMy44NS01LjczLDItOC42OEMxNC40LDEwLjQzLDUuOTEsNS45LDEuODQsMS43WiIgc3R5bGU9ImZpbGw6I2JjODNmYjsiLz48L3N2Zz4=')`,
        default: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 23 23'%3E%3Cpath d='m22.5 18.77-3.73 3.73-5.82-7.36c-.74-.74-2-.22-2 .83 0 2.97-2.43 5.54-5.4 5.44a5.17 5.17 0 0 1-3.52-1.53A5.29 5.29 0 0 1 .5 16.19V.5h15.46c2.97 0 5.54 2.43 5.44 5.4a5.17 5.17 0 0 1-1.53 3.52 5.29 5.29 0 0 1-3.69 1.53h-.22c-1.04 0-1.56 1.25-.83 2l7.36 5.82h.02Z' style='fill:%231c1b1b;stroke:%23fff;stroke-linecap:round;stroke-linejoin:round'/%3E%3C/svg%3E%0A") 0 0, default`,
        'pd-hover': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='14.3' height='16.8' viewBox='0 0 14.3 16.8' style='enable-background:new 0 0 14.3 16.8' xml:space='preserve'%3e%3cpath d='M3.3 9.2c-.1-.3-.3-.6-.4-1-.1-.3-1.8-6.1-1.8-6.7 0-.2.1-.8.8-1C2.4.3 3.3.4 3.6 1c.2.5 1.9 6.5 1.9 6.4 0-.4 0-1.7.1-2.1.2-.5.4-.7.8-.8.3-.1.6-.1.9-.1.3.1.6.3.8.5.4.6.4 2.5.4 2.4 0-.4 0-1.3.2-1.7.1-.2.2-.7.8-.9.3-.1.6-.2 1 0 .5.2.6.6.6.9.1.4.3 1.3.4 1.7 0 .3 0-4.1.3-4.9s2-1 2.1.5l-.2 6.7c0 .4-.1 1.3-.2 1.7-.1.3-.4 1-.7 1.4 0 0-1.1 1.2-1.2 1.8s-.1.6-.1 1 .1.9.1.9-.8.1-1.2 0-.9-.8-1-1.1c-.2-.3-.5-.3-.7 0-.2.4-.7 1.1-1.1 1.1-.7.1-2.1 0-3.1 0 0 0 .2-1-.2-1.4l-1.1-1.1-.8-.9c-.3-.5-.9-1.3-1.5-2.2-1-1.3-.5-2.7.7-2.9 1 0 1.5 1.1 1.7 1.3' style='fill:white%3bstroke:black%3bstroke-width:.75%3bstroke-linecap:round%3bstroke-linejoin:round'/%3e%3cpath d='M10.3 13.3V9.8m-2.1 3.6V9.9m-2 0v3.4' style='fill:none%3bstroke:%23010101%3bstroke-width:.75%3bstroke-linecap:round'/%3e%3c/svg%3e") 0 5, pointer`,
      },
    },
  },
  plugins: [],
}
