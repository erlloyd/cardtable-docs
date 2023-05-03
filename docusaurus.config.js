// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cardtable",
  tagline: "Learn how to play card games in your browser!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL || "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "erlloyd", // Usually your GitHub org/user name.
  projectName: "cardtable-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/erlloyd/cardtable-docs/blob/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/erlloyd/cardtable-docs/blob-main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Cardtable Help",
        logo: {
          alt: "How to use card-table.app",
          src: "img/cardtable_logo_512.png",
        },
        items: [
          {
            type: "doc",
            docId: "howto",
            position: "left",
            label: "How to Play",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/erlloyd/cardtable",
            label: "GitHub",
            position: "right",
          },
          {
            type: "doc",
            docId: "keyboardshortcuts",
            position: "left",
            label: "Keyboard Shortcuts",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "How to Play",
                to: "/docs/howto",
              },
              {
                label: "Basics",
                to: "/docs/category/basics-of-cardtable",
              },
              {
                label: "Advanced",
                to: "/docs/category/advanced",
              },
              {
                label: "Multiplayer (Beta)",
                to: "/docs/category/multiplayer-beta",
              },
              {
                label: "Keyboard shortcuts",
                to: "/docs/keyboardshortcuts",
              },
            ],
          },

          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/erlloyd/cardtable",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Eric Lloyd, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
