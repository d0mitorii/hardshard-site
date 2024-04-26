import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hardshard',
  tagline: 'Ламповый Vanilla+ бесплатный сервер без приватов, с улучшенным геймплеем и элементами ролевой игры',
  favicon: 'img/favicon.ico',
  url: 'https://d0mitorii.github.io/',
  baseUrl: '/',
  organizationName: 'd0mitorii',
  projectName: 'hardshard-site',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  plugins: ['docusaurus-plugin-image-zoom'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
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
      logo: {
        alt: 'Hardshard Logo',
        src: 'img/hardshard-logo-full.png',
      },
      items: [
        { to: '/about', label: 'О проекте', position: 'right' },
        { to: '/docs/rules', label: 'Правила', position: 'right' },
        { to: '/docs/guidelines', label: 'Руководства', position: 'right' },
        { to: '/blog', label: 'Новости', position: 'right' },
        { to: 'https://docs.google.com/forms/d/e/1FAIpQLSd439lToKD3iWyeyhokr8FDmnviJtvespjAiwM_0_tl2tLbHw/viewform', label: 'Начать играть', position: 'right' },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       items: [
    //         {
    //           label: 'Telegram',
    //           to: 'https://t.me/hardshardru',
    //         },
    //         {
    //           label: 'Discord',
    //           to: 'https://discord.com/invite/huVNRvAjZq',
    //         },
    //         {
    //           label: 'Youtube',
    //           to: 'https://www.youtube.com/@HardShard',
    //         },
    //       ],
    //     }
    //   ],
    //   copyright: `Hardshard © ${new Date().getFullYear()}`,
    // },
    zoom: {
      selector: '.imageContainer img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(25, 25, 25)'
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
