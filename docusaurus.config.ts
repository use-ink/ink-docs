import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'

module.exports = {
  title: 'Documentation | ink!',
  tagline: 'Comprehensive documentation for ink!, covering all aspects of development.',
  url: 'https://use.ink',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'use-ink',
  projectName: 'ink-docs',
  deploymentBranch: 'gh-pages',
  stylesheets: ['fonts/fonts.css'],
  scripts: [
    { 
      src: 'https://apisa.parity.io/latest.js', 
      defer: true 
    }, 
    {
      src: 'https://use-ink-data.netlify.app/script.js',
      defer: true,
      'data-website-id': 'c97b4e05-21a3-4873-8884-4fc81c38d6f0',
    },
],
  // themes: [
  //   [
  //     require.resolve('@easyops-cn/docusaurus-search-local'),
  //     {
  //       indexPages: true,
  //       ignoreFiles: [/3.x/],
  //       language: ['en', 'es'],
  //     },
  //   ],
  // ],
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
    algolia: {
      appId: 'I2MRSLMPI9',
      apiKey: 'bf2083698833b7dd9a0c39a54e7f6abb',
      indexName: 'use',
      contextualSearch: true,
      insights: true,
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
              path: 'v5',
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
            require.resolve('./src/css/shared.css'),
            require.resolve('./src/css/faucet.css'),
            require.resolve('./static/fonts/fonts.css'),
          ],
        },
      },
    ],
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
    },
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/inkubator',
            from: '/ubator',
          },
          {
            to: '/inkubator',
            from: '/6.x/funding-programs',
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/docs/v6/')) {
            console.log('redirecting', existingPath, '/docs/v6/')
            return [existingPath.replace('/docs/v6/', '/6.x/')]
          }
          if (existingPath.includes('/docs/v5/')) {
            console.log('redirecting', existingPath, '/docs/v5/')
            return [existingPath.replace('/docs/v5/', '/')]
          }
          if (existingPath.includes('/docs/v4/')) {
            console.log('redirecting', existingPath, '/docs/v4/')
            return [existingPath.replace('/docs/v4/', '/4.x/')]
          }
        },
      },
    ],
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
