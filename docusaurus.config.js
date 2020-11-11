const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : '/ink-docs/';

module.exports = {
  title: 'ink! documentation',
  tagline: 'documentation for ink!',
  url: 'https://github.com/paritytech/ink',
  baseUrl: BASE_URL,
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'paritytech',
  onBrokenLinks: 'warn',
  projectName: 'ink-docs',
  stylesheets: [
    'fonts/fonts.css'
  ],
  themeConfig: {
    navbar: {
      title: 'ink!',
      logo: {
        alt: 'ink!',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/paritytech/ink',
          label: 'ink! GitHub',
          position: 'right',
        },
        {
          href: 'https://github.com/paritytech/ink-docs',
          label: 'ink-docs GitHub',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/ink-docs/edit/master/',
        routeBasePath: '/'
      },
      blog: {
        showReadingTime: true,
        editUrl: 'https://github.com/ink-docs/edit/master/',
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    }],
  ],
};
