module.exports = {
  title: 'ink! documentation',
  tagline: 'documentation for ink!',
  url: 'https://use.ink',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'paritytech',
  onBrokenLinks: 'warn',
  projectName: 'ink-docs',
  stylesheets: [
    'fonts/fonts.css',
    'https://fonts.googleapis.com/css2?family=Fredoka+One&family=Montserrat:wght@400;500;700&display=swap',
  ],
  scripts: [{ src: 'https://apisa.parity.io/latest.js', defer: true }],
  plugins: [
    [
      'docusaurus-plugin-simple-analytics',
      {
        domain: 'apisa.parity.io',
      },
    ],
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
      theme: require('prism-react-renderer/themes/duotoneDark'),
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
        {
          type: 'dropdown',
          label: 'Language',
          position: 'right',
          items: [
            {
              href: '../',
              label: 'English',
              target: '_parent',
            },
            {
              href: '/es/',
              label: 'Spanish',
              target: '_parent',
            },
          ],
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
          editUrl: 'https://github.com/paritytech/ink-docs/edit/master/',
          routeBasePath: '/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '4.x',
              path: '',
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
          editUrl: 'https://github.com/paritytech/ink-docs/edit/master/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/faucet.css')],
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
        label: 'English',
      },
      es: {
        label: 'Español',
        htmlLang: 'es-ES',
      },
    },
  },
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
