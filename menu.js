const fs = require("fs").promises;
const path = require("path");
const { JSDOM } = require("jsdom");

// 菜单配置
const MENU_CONFIG = [
  {
    sourceDir: "products",
    targetId: "product-center-menu",
    linkPrefix: "products/",
  },
  {
    sourceDir: "items",
    targetId: "case-showcase-menu",
    linkPrefix: "items/",
  },
];

async function generateMenu() {
  try {
    // 读取index.html
    const htmlPath = path.join(__dirname, "index.html");
    const htmlContent = await fs.readFile(htmlPath, "utf8");
    const { document } = new JSDOM(htmlContent).window;

    // 处理每个菜单
    for (const config of MENU_CONFIG) {
      const dirPath = path.join(__dirname, config.sourceDir);
      const entries = await fs.readdir(dirPath, { withFileTypes: true });
      const subdirs = entries
        .filter((entry) => entry.isDirectory())
        .map((dir) => dir.name);

      // 生成菜单HTML
      const menuContainer = document.getElementById(config.targetId);
      menuContainer.innerHTML = ""; // 清空现有内容

      subdirs.forEach((dir) => {
        const li = document.createElement("li");
        li.className =
          "list-none w-full my-1 transition-all duration-350 ease-in-out";

        const a = document.createElement("a");
        a.className =
          "translate-item block w-full text-center text-tertiaryr px-6 py-2.5 rounded-md transition-all duration-350 ease-in-out hover:text-secondary hover:bg-[rgba(255,125,0,0.1)] hover:-translate-y-1";

        const encodedDir = encodeURIComponent(dir);
        a.href = `${config.linkPrefix}${encodedDir}/index.html`;
        a.textContent = dir;

        li.appendChild(a);
        menuContainer.appendChild(li);
      });
    }

    // 保存更新后的HTML
    const updatedHtml = new JSDOM(
      document.documentElement.outerHTML
    ).serialize();
    await fs.writeFile(htmlPath, updatedHtml);
    console.log("菜单生成成功！");
  } catch (err) {
    console.error("菜单生成失败:", err);
  }
}

generateMenu();
