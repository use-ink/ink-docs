module.exports = {
  title: 'ink! documentation',
  tagline: 'documentation for ink!',
  url: 'https://ink.substrate.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'paritytech',
  onBrokenLinks: 'warn',
  projectName: 'ink-docs',
  stylesheets: [
    'fonts/fonts.css'
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexPages: true,
      }
    ]
  ],
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/duotoneDark'),
      additionalLanguages: ['rust', 'json']
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false
    },
    navbar: {
      title: '',
      logo: {
        alt: 'ink!',
        src: 'img/text-black.svg',
        srcDark: '/img/text-white.svg',
      },
      items: [
        {
          href: 'https://github.com/paritytech/ink',
          label: 'ink! GitHub',
          position: 'right',
        },
        {
          href: 'https://github.com/paritytech/ink-docs',
          label: 'Docs GitHub',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/paritytech/ink-docs/edit/master/',
        routeBasePath: '/'
      },
      blog: {
        showReadingTime: true,
        editUrl: 'https://github.com/paritytech/ink-docs/edit/master/',
      },
      theme: {
        customCss: [require.resolve('./src/css/custom.css')],
      },
    }],
  ],
};
