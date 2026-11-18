import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import fs from "fs";
import path from "path";

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
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        /*
        {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        */
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/unani0528/unani0528.github.io",
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
    toc: {
      maxHeadingLevel: 4,
    },
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
        { to: "/blog", label: "\'Blog\'", position: "left" },
        { to: "/project", label: "\'Projects\'", position: "left" },
        {
          to: "/paper_and_standard",
          label: "\'Paper & Standard\'",
          position: "left",
        },
        {
          href: "https://www.github.com/unani0528",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://linkedin.com/in/unani0528/",
          label: "LinkedIn",
          position: "right",
        },
        {
          href: "mailto:ok0528ok0@gmail.com",
          label: "Email",
          position: "right",
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
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,

  customFields: {
    aboutMe: {
      avatarUrl: "path",
      name: "Jeong YunHwan",
      bio: "- 시스템 프로그래밍, 최적화, 그리고 보안 분야에 깊은 관심을 갖고, 좋은 아키텍처와 설계 구조를 고민하며 공부하고 있습니다. \n- 주로 Docker와 터미널(LazyVim) 환경에서 개발을 합니다. \n- 오픈소스 보안 진단 로직(SCA)을 설계, 개발하고 이를 기반으로 동작하는 LLM 기반으로 동작하는 보안 진단 에이전트 관련 프로젝트를 구축해 왔으며, 앞으로는 저수준 시스템 프로그래밍과 성능 최적화 영역까지 경험을 넓혀가고자 합니다.",
      location: "Seoul",
      workAt: "HCI Lab",
      interest: [],
      email: "ok0528ok0@gmail.com",
      githubId: "unani0528",
      linkedinId: "unani0528",
      // 언어 및 기술
      skills: [
        { category: "Frontend", items: ["React", "TypeScript"] },
        { category: "Backend", items: ["Rust", "Python", "C++", "Java"] },
        { category: "Cloud", items: ["Kubernetes", "AWS", "Naver Cloud"] },
        {
          category: "Tools",
          items: ["Docker", "Neovim", "Lazyvim", "Lazygit"],
        },
        { category: "OA", items: ["한글", "Word", "PowerPoint", "Execel"] },
      ],
    },
    // DB로 관리? 혹은 어떤식으로 보여줄지 고민
    projectShowcase: [{ projName: "" }],
    paper_and_standard_stats: getDeepDirectoryStats("paper_and_standard"),
  },

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "paper_and_standard",
        path: "paper_and_standard",
        routeBasePath: "paper_and_standard",
        sidebarPath: require.resolve("./src/sidebars/PaperAndStandard.ts"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "project",
        path: "project",
        routeBasePath: "project",
        sidebarPath: require.resolve("./sidebars.ts"),
      },
    ],
  ],
};

// 폴더수(카테고리) 포스트 수를 세는 함수
function getDeepDirectoryStats(targetDirPath: string) {
  let folderCount = 0;
  let totalPosts = 0;

  try {
    const resolvedDir = path.resolve(__dirname, targetDirPath);

    if (fs.existsSync(resolvedDir)) {
      // 1. 최상위 경로 바로 아래의 1단계 폴더 개수 카운팅
      const rootEntries = fs.readdirSync(resolvedDir, { withFileTypes: true });
      folderCount = rootEntries.filter((entry) => entry.isDirectory()).length;

      // 2. 깊이 제한 없이 모든 하위 폴더와 파일을 재귀적으로 순회하는 함수
      function traverseDirectory(currentDir: string) {
        const items = fs.readdirSync(currentDir, { withFileTypes: true });

        for (const item of items) {
          const fullPath = path.join(currentDir, item.name);

          if (item.isDirectory()) {
            // 하위 폴더를 만나면 깊이와 상관없이 다시 이 함수를 호출 (재귀)
            traverseDirectory(fullPath);
          } else if (item.isFile()) {
            // 파일 확장자가 .md 또는 .mdx인지 확인
            const ext = path.extname(item.name).toLowerCase();
            if (ext === ".md" || ext === ".mdx") {
              totalPosts++;
            }
          }
        }
      }

      // 탐색 시작
      traverseDirectory(resolvedDir);
    }
  } catch (e) {
    console.error(`Failed to read directory (${targetDirPath}):`, e);
  }

  return { folderCount, totalPosts };
}

export default config;
