import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "React awesome styled grid",
  tagline:
    "A responsive 8-point grid system layout for React using styled-components",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://awesome-styled-grid.netlify.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "santosfrancisco", // Usually your GitHub org/user name.
  projectName: "react-awesome-styled-grid", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }]
          ],
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/santosfrancisco/react-awesome-styled-grid"
        },
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")]
        },
        blog: {
          remarkPlugins: [
            [
              require("@docusaurus/remark-plugin-npm2yarn"),
              { converters: ["pnpm"] }
            ]
          ],
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/santosfrancisco/react-awesome-styled-grid"
        },
        theme: {
          customCss: "./src/css/custom.css"
        }
      } satisfies Preset.Options
    ]
  ],
  plugins: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: "bottom"
    },
    // Replace with your project's social card
    image: "img/social-card.jpg",
    navbar: {
      title: "React Awesome Styled Grid",
      logo: {
        alt: "react awesome styled grid logo",
        src: "img/icon.svg"
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs"
        },
        { to: "/demo", label: "Demo", position: "left" },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/santosfrancisco/react-awesome-styled-grid",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs"
            },
            {
              label: "Demo",
              to: "/demo"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Issues",
              href: "https://github.com/santosfrancisco/react-awesome-styled-grid/issues"
            },
            {
              label: "Contributing",
              href: "https://github.com/santosfrancisco/react-awesome-styled-grid/blob/master/CONTRIBUTING.md"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/santosfrancisco/react-awesome-styled-grid"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Awesome Styled Grid, Inc. Built with Docusaurus.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
