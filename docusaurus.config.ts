import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Langrocks',
  tagline: 'Langrocks provides a collection of tools for LLMs including computer access, web browser, and code runner.',
  favicon: 'img/favicon.ico',

  url: 'https://resplendent-daifuku-294e76.netlify.app',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'langrocks',
  projectName: 'web',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Langrocks',
      logo: {
        alt: 'Langrocks Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/langrocks/langrocks',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/DjW66engTp',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/langrocks/langrocks',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Langrocks, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    scripts: [
      {
        src: 'https://buttons.github.io/buttons.js',
        async: true,
        defer: true,
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
