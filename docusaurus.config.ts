import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hardshard',
  tagline: 'Ламповый Vanilla+ бесплатный сервер без приватов, с улучшенным геймплеем и элементами ролевой игры',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Hardshard Logo',
        src: 'img/hardshard-logo-full.png',
      },
      items: [
        {to: '/about', label: 'О проекте', position: 'right'},
        {to: '/docs/rules', label: 'Правила', position: 'right'},
        {to: '/docs/guidelines', label: 'Руководства', position: 'right'},
        {to: '/blog', label: 'Новости', position: 'right'},
        {to: 'https://docs.google.com/forms/d/e/1FAIpQLSd439lToKD3iWyeyhokr8FDmnviJtvespjAiwM_0_tl2tLbHw/viewform', label: 'Начать играть', position: 'right'},
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
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
