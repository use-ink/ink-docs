import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'

module.exports = {
  title: 'ink! documentation',
  tagline: 'documentation for ink!',
  url: 'https://niklasp.github.io',
  baseUrl: '/ink-docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  trailingSlash: false,
  organizationName: 'niklasp',
  projectName: 'ink-docs',
  deploymentBranch: 'gh-pages',
  stylesheets: ['fonts/fonts.css'],
  scripts: [{ src: 'https://apisa.parity.io/latest.js', defer: true }],
  // plugins: [
  //   [
  //     '@docusaurus/plugin-client-redirects',
  //     {
  //       redirects: [
  //         {
  //           to: '/ubator',
  //           from: '/inkubator',
  //         },
  //       ],
  //     },
  //   ],
  // ],
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
          lastVersion: 'current',
          versions: {
            v6: {
              label: 'v6',
              path: 'v6',
              banner: 'none',
            },
            current: {
              label: 'v5',
              path: '',
              banner: 'none',
            },
            v4: {
              label: 'v4',
              path: 'v4',
              banner: 'none',
            },
            v3: {
              label: 'v3',
              path: 'v3',
              banner: 'none',
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/use-ink/ink-docs/edit/master/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/docs.css'),
            require.resolve('./src/css/faucet.css'),
            require.resolve('./static/fonts/fonts.css'),
          ],
        },
      },
    ],
  ],
  plugins: [
    async function tailwindPlugin() {
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
} satisfies Config
