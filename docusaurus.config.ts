import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'HardShard',
  tagline: 'Ламповый бесплатный Vanilla+ сервер без приватов, с улучшенным геймплеем и элементами ролевой игры',
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
          blogSidebarTitle: "Последние новости",
          blogTitle: "Новости и объявления",
          blogDescription: "Следите за последними новостями, обновлениями и анонсами проекта HardShard.",
          blogSidebarCount: 10,
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
        alt: 'HardShard Logo',
        src: 'img/hardshard-logo-full.png',
      },
      items: [
        { to: '/docs/introduction', label: 'Начать играть', position: 'right' },
        { to: '/docs/rules', label: 'Правила', position: 'right' },
        { to: '/docs/guidelines', label: 'Руководства', position: 'right' },
        { to: '/blog', label: 'Новости', position: 'right' },
        { to: 'https://wiki.hardshard.ru/', label: 'Вики', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Сервер',
          items: [
            {
              label: 'Начать играть',
              to: '/docs/introduction',
            },
            {
              label: 'Правила',
              to: '/docs/rules',
            },
            {
              label: 'Руководства',
              to: '/docs/guidelines',
            },
          ],
        },
        {
          title: 'Контакты',
          items: [
            {
              label: 'Новости',
              to: '/blog',
            },
            {
              label: 'Канал Telegram',
              to: 'https://t.me/hardshard',
            },
            {
              label: 'Чат Telegram',
              to: 'https://t.me/hardshardchat',
            },
            {
              label: 'Discord',
              to: 'https://discord.com/invite/huVNRvAjZq',
            },
            {
              label: 'Youtube',
              to: 'https://www.youtube.com/@HardShard',
            },
          ],
        },
        {
          title: 'Прочее',
          items: [
            {
              label: 'Объявления',
              to: 'https://t.me/hardshard_newspaper',
            },
            {
              label: 'HardShard Wiki',
              to: 'https://wiki.hardshard.ru/HardShard_Wiki',
            },
            {
              label: 'Игровой чат',
              to: 'https://t.me/hardshard_chatbot',
            },
          ],
        },
      ],
      copyright: `HardShard © ${new Date().getFullYear()}`,
    },
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
