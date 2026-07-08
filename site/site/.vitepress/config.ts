import { defineConfigWithTheme } from "vitepress";
import type { DefaultTheme } from "vitepress";

export default defineConfigWithTheme<DefaultTheme.Config>({
  title: "olpat",
  description: "A versatile TOML toolkit",
  lastUpdated: true,
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/svg+xml", href: "/favicon.svg"}],
  ],
  themeConfig: {
    nav: [
      // TODO: unhide editor
      // {
      //   text: "Editor",
      //   activeMatch: "^/editor",
      //   link: "/editor",
      // },
      {
        text: "Command Line",
        activeMatch: "^/cli",
        link: "/cli/introduction",
      },
      {
        text: "Library",
        activeMatch: "^/lib",
        link: "/lib/introduction",
      },
      {
        text: "Configuration",
        items: [
          {
            text: "Configuration File",
            link: "/configuration/file",
          },
          {
            text: "Formatter Options",
            link: "/configuration/formatter-options",
          },
          {
            text: "Directives",
            link: "/configuration/directives",
          },
          {
            text: "Developing Schemas",
            link: "/configuration/developing-schemas",
          },
          {
            text: "Using Schemas",
            link: "/configuration/using-schemas",
          },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/weichweich/olpat" }],
    sidebar: {
      "/cli": [
        {
          text: "About",
          items: [
            {
              text: "Introduction",
              link: "/cli/introduction",
            },
          ],
        },
        {
          text: "Installation",
          items: [
            {
              text: "Binary Releases",
              link: "/cli/installation/binary",
            },
            { text: "Cargo", link: "/cli/installation/cargo" },
            { text: "Homebrew", link: "/cli/installation/homebrew" },
            { text: "NPM", link: "/cli/installation/npm" },
            { text: "Docker", link: "/cli/installation/docker" },
          ],
        },
        {
          text: "Usage",
          items: [
            {
              text: "Configuration",
              link: "/cli/usage/configuration",
            },
            {
              text: "Validation",
              link: "/cli/usage/validation",
            },
            {
              text: "Formatting",
              link: "/cli/usage/formatting",
            },
            {
              text: "Conversion and Extraction",
              link: "/cli/usage/conversion-and-extraction",
            },
            {
              text: "Language Server",
              link: "/cli/usage/language-server",
            },
          ],
        },
      ],
      "/lib": [
        {
          text: "About",
          items: [
            {
              text: "Introduction",
              link: "/lib/introduction",
            },
          ],
        },
        {
          text: "Rust",
          items: [
            {
              text: "olpat Core",
              link: "/lib/rust/olpat",
            },
            { text: "olpat LSP", link: "/lib/rust/olpat-lsp" },
            { text: "olpat Common", link: "/lib/rust/olpat-common" },
          ],
        },
        {
          text: "JavaScript",
          items: [
            {
              text: "olpat Lib",
              link: "/lib/javascript/lib",
            },
            { text: "olpat LSP", link: "/lib/javascript/lsp" },
          ],
        },
      ],
      "/configuration": [
        {
          text: "General",
          items: [
            {
              text: "Configuration File",
              link: "/configuration/file",
            },
            {
              text: "Formatter Options",
              link: "/configuration/formatter-options",
            },
            {
              text: "Directives",
              link: "/configuration/directives",
            },
          ],
        },
        {
          text: "JSON Schemas",
          items: [
            {
              text: "Developing Schemas",
              link: "/configuration/developing-schemas",
            },
            {
              text: "Using Schemas",
              link: "/configuration/using-schemas",
            },
          ],
        },
      ],
    },
  },
});
