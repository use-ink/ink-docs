import {themes as prismThemes} from 'prism-react-renderer';

module.exports = {
  title: 'ink! documentation',
  tagline: 'documentation for ink!',
  url: 'https://use.ink',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'use-ink',
  onBrokenLinks: 'warn',
  projectName: 'ink-docs',
  stylesheets: [
    'fonts/fonts.css',
    'https://fonts.googleapis.com/css2?family=Fredoka+One&family=Montserrat:wght@400;500;700&display=swap',
  ],
  scripts: [{ src: 'https://apisa.parity.io/latest.js', defer: true }],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/ubator',
            from: '/inkubator',
          },
        ],
      },
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        ignoreFiles: [/3.x/],
        language: ['en', 'es'],
      },
    ],
  ],
  themeConfig: {
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.duotoneDark,
      additionalLanguages: ['rust', 'json', 'toml'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'ink!',
        src: 'img/text-black.svg',
        srcDark: '/img/text-white.svg',
      },
      logo: {
        alt: 'ink!',
        src: 'img/text-black.svg',
        srcDark: '/img/text-white.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/use-ink/ink-docs/edit/master/',
          routeBasePath: '/',
          lastVersion: 'current',
          versions: {
            '6.x': {
              label: '6.x',
              path: '6.x',
              banner: 'none',
            },
            current: {
              label: '5.x',
              path: '',
              banner: 'none',
            },
            '4.x': {
              label: '4.x',
              path: '4.x',
              banner: 'none',
            },
            '3.x': {
              label: '3.x',
              path: '3.x',
              banner: 'none',
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/use-ink/ink-docs/edit/master/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/faucet.css')],
        },
      },
    ],
  ],
  plugins: [
    async function myPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
  ],
}
