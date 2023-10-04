import { defineConfig } from "vitepress";
import sidebar from "./sidebar.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Digital Garden",
  description: "As a replacement for Obsidian Publish",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Introduction", link: "/introduction" },
    ],

    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/tatthien/digital-garden" },
      { icon: "twitter", link: "https://twitter.com/hey_thien" },
    ],
  },
});
