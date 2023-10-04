import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import { DefaultTheme } from "vitepress";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isMarkdownFile = (filename: string): boolean => {
  return path.extname(filename) === ".md";
};

const isObjectEmpty = (obj: Record<string, any>): boolean => {
  return Object.keys(obj).length === 0;
};

const sortSidebar = (
  a: DefaultTheme.SidebarItem,
  b: DefaultTheme.SidebarItem,
) => {
  const textA = (a.text as string).toLowerCase();
  const textB = (b.text as string).toLowerCase();
  if (textA < textB) return -1;
  if (textA > textB) return 1;
  return 0;
};

const dirs = fs.readdirSync(path.resolve(__dirname, "../docs"));
const sidebar: Array<DefaultTheme.SidebarItem> = [];
dirs.reduce((acc, curr) => {
  if (!isMarkdownFile(curr)) return acc;

  const str = fs.readFileSync(path.resolve(__dirname, "../docs", curr), "utf8");

  const frontmatter = matter(str);
  if (isObjectEmpty(frontmatter.data)) return acc;

  const category = frontmatter.data.category;
  if (!category) return acc;

  const item = {
    text: frontmatter.data.title,
    link: curr,
  };

  const found = acc.find(({ text }) => text === category);
  if (found && found.items) {
    found.items.push(item);
  } else {
    acc.push({
      text: category,
      items: [item],
      collapsed: true,
    });
  }

  return acc;
}, sidebar);

fs.writeFileSync(
  path.resolve(__dirname, "../docs", ".vitepress", "sidebar.json"),
  JSON.stringify(sidebar.sort(sortSidebar), null, " "),
);

console.log(">>>", "generated: sidebar.json");
