import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "UNANI",
  // tagline: "Dinosaurs are cool",
  // favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://unaninotes.kr",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Unani0528", // Usually your GitHub org/user name.
  projectName: "Unani Notes", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Unani Notes",
      /*
      logo: {
        alt: "Unani's Notes",
        src: "img/logo.svg",
      },
      */
      items: [
        {
          to: "/portfolio", label: "Portfolio", position:"left"
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://www.naver.com",
          label: "Naver",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Career & Me",
          items: [
            {
              label: "Portfolio",
              to: "/portfolio",
            },
            {
              // 이력서?
              label: "Resume / CV",
              to: "/resume",
            },
            {
              label: "Projects",
              to: "/project", // Career 또는 Blog 카테고리 중 적절한 위치로 배치
            },
          ],
        },
        {
          title: "Blog & Content",
          items: [
            {
              label: "Tech Notes",
              to: "/blog",
            },
            {
              label: "Paper Review",
              to: "/paper",
            },
            {
              label: "Tags & Topics",
              to: "/tags", // 작성 글이 쌓일 때 주제별로 찾아보기 용이
            },
            {
              label: "RSS Feed",
              href: "/rss.xml", // 기술 블로그 필수 요소 (구독용)
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/unani0528",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/unani0528/", // http -> https 수정
            },
            {
              label: "Email",
              href: "mailto:ok0528ok0@gmail.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
