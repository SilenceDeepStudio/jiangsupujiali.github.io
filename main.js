const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const { JSDOM } = require("jsdom");

// 转换fs回调函数为Promise风格
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// 支持的图片文件扩展名
const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".avif",
]);

/**
 * 判断文件是否为图片
 * @param {string} filename - 文件名
 * @returns {boolean} 是否为图片文件
 */
function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return IMAGE_EXTENSIONS.has(ext);
}

/**
 * 生成详情页（通用函数，支持不同文件夹，均放在自身子文件夹内）
 * @param {string} itemName - 项目名称（文件夹名）
 * @param {string} itemPath - 项目文件夹路径
 * @param {string} description - 描述内容
 * @param {string[]} imageFiles - 图片文件数组
 * @param {string} type - 类型
 */
async function generateDetailPage(
  itemName,
  itemPath,
  description,
  imageFiles,
  type
) {
  // 生成图片部分
  const imagesHtml = imageFiles
    .map(
      (img) => `
      <div class="overflow-hidden rounded-lg mb-4 carousel-slide">
        <img src="./${img}" 
             alt="${itemName}" 
             class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500">
      </div>
    `
    )
    .join("");

  // 详情页HTML内容
  const htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="../../img/logo-1种尺寸.ico" type="image/x-icon" />
    <title class="translate-item">${itemName} - 详情</title>
    <link rel="stylesheet" href="../../src/output.css" />
    <link rel="stylesheet" href="${
      type === "items" ? "../item.css" : "../product.css"
    }" />
    <script src="${
      type === "items" ? "../item.js" : "../products.js"
    }" defer=""></script>
  </head>
  <body>
    <header id="header">
      <div class="header-content">
        <h1 class="translate-item logo">${
          type === "items" ? "项目展示" : "产品展示"
        }</h1>

        <nav>
          <ul>
            <li><a href="../../index.html#${
              type === "items" ? "show_case_grid" : "product-center"
            }" class="translate-item">全部${
    type === "items" ? "项目" : "产品"
  }</a></li>
            <li><a href="#footer" class="translate-item">关于我们</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <section class="hero">
      <div class="container">
        <h2 class="translate-item">${itemName}</h2>
        <p class="translate-item">${description}</p>
      </div>
    </section>

    <section class="products-section">
      <div class="but_prvnex">
        <button class="translate-item load-more-prv">上一张</button>
        <button class="translate-item load-more-nex">下一张</button>
      </div>
      <div class="carousel-container">${imagesHtml}</div>
    </section>
    <section class="text-center">
      <div>
        <a href="../../index.html#${
          type === "items" ? "show_case_grid" : "product-center"
        }"
          ><button type="button" class="translate-item load-more">更多${
            type === "items" ? "项目" : "产品"
          }展示</button></a
        >
      </div>
    </section>

    <footer id="footer" class="flex flex-col items-center justify-center">
      <div>
        <div class="footer-column">
          <h3 class="translate-item">${
            type === "items" ? "项目展示" : "产品展示"
          }</h3>

          <p class="translate-item">精选优质${
            type === "items" ? "项目" : "产品"
          }，为您提供最好的选择</p>
        </div>
        <div class="footer-column">
          <h4 class="translate-item ">快速链接</h4>

          <ul>
            <li class="footer-item">
              <a class="translate-item footer-link" href="../../index.html">首页</a>

            </li>
            <li class="footer-item">
              <a class="translate-item footer-link" href="../../index.html#${
                type === "items" ? "show_case_grid" : "product-center"
              }"
                >全部${type === "items" ? "项目" : "产品"}</a
              >
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h4 class="translate-item">联系我们</h4>
          <ul>
            <li class="translate-item footer-item"><i class="fa fa-map-marker mr-2"></i>地址：江苏省海门市广州路2111号</li>
            <li class="translate-item footer-item"><i class="fa fa-phone mr-2"></i>电话：0513-69956766</li>
            <li class="translate-item footer-item"><i class="fa fa-envelope mr-2"></i>邮箱：1056137138@qq.com</li>
          </ul>
        </div>
      </div>
    </footer>
    <div class="language-switcher fixed right-4 top-40 transform -translate-y-1/2 z-50">
      <button id="cn-btn" class="px-3 py-1 bg-secondary text-primary font-bold rounded-l">
        中
      </button>
      <button id="en-btn" class="px-3 py-1 bg-primary text-white font-bold rounded-r">
        En
      </button>
    </div>
    <script>
      // 导航栏滚动效果
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
          header.style.padding = "10px 0";
          header.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        } else {
          header.style.padding = "15px 0";
          header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        }
      });

      // 图片轮播功能
      let slideIndex = 1;
      showSlides();

      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("carousel-slide");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        if (slideIndex > slides.length) {slideIndex = 1}
        if (slideIndex < 1) {slideIndex = slides.length}
        slides[slideIndex - 1].style.display = "block";
      }

      document.querySelector(".load-more-prv").addEventListener("click", () => plusSlides(-1));
      document.querySelector(".load-more-nex").addEventListener("click", () => plusSlides(1));

      function plusSlides(n) {
        slideIndex += n;
        showSlides();
      }
    </script>
  </body>
</html>
`;

  // 详情页统一放在自身子文件夹内，命名为index.html（与products保持一致）
  const detailPagePath = path.join(itemPath, "index.html");
  await writeFile(detailPagePath, htmlContent, "utf8");
  console.log(`已生成${type}详情页: ${detailPagePath}`);
}

/**
 * 生成产品卡片（products专用）
 * @param {string} productName - 产品名称
 * @param {string} firstImage - 第一张图片
 * @param {string} description - 描述
 * @returns {string} 卡片HTML
 */
function generateProductCardHtml(productName, firstImage, description) {
  const shortDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  return `
    <div class="product-item bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-custom group">
      <a href="products/${productName}/index.html" class="block overflow-hidden">
        <img
          src="products/${productName}/${firstImage}"
          alt="${productName}"
          class="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </a>
      <div class="p-4">
        <h4 class="translate-item font-semibold text-lg mb-2 text-neutral-800">${productName}</h4>
        <p class="translate-item text-neutral-600">${shortDescription}</p>
      </div>
    </div>
  `;
}

/**
 * 生成项目卡片（items专用，按用户提供的样式）
 * @param {string} itemName - 项目名称
 * @param {string} firstImage - 第一张图片
 * @param {string} description - 描述
 * @returns {string} 卡片HTML
 */
function generateItemCardHtml(itemName, firstImage, description) {
  const shortDescription =
    description.length > 80
      ? description.substring(0, 80) + "..."
      : description;
  return `
    <div class="fade-in relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-custom aspect-[4/3] group">
      <a href="items/${itemName}/index.html"> 
        <img src="items/${itemName}/${firstImage}" 
             alt="${itemName}" 
             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
      
      <div class="case-overlay absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
        <h4 class="translate-item font-semibold text-lg">${itemName}</h4>
              <button class="translate-item text-left">
                  点击图片查看详情
                </button>
      </div>
      </a>
    </div>
  `;
}

/**
 * 更新主页指定容器的内容
 * @param {string} contentHtml - 要插入的HTML内容
 * @param {string} containerId - 主页容器ID
 */
async function updateIndexContainer(contentHtml, containerId) {
  const indexPath = path.join(__dirname, "index.html");

  try {
    const indexContent = await readFile(indexPath, "utf8");
    const dom = new JSDOM(indexContent);
    const document = dom.window.document;
    const container = document.getElementById(containerId);

    if (container) {
      container.innerHTML = contentHtml;
      await writeFile(indexPath, dom.serialize(), "utf8");
      console.log(`主页${containerId}容器已更新`);
    } else {
      console.error(`未找到id为${containerId}的容器`);
    }
  } catch (error) {
    console.error(`更新主页${containerId}时出错:`, error);
  }
}

/**
 * 处理单个文件夹（通用函数，支持products和items）
 * @param {string} folderType - 文件夹类型（"products" 或 "items"）
 * @param {string} containerId - 主页容器ID
 * @param {Function} cardGenerator - 卡片生成函数
 */
async function processFolder(folderType, containerId, cardGenerator) {
  const baseDir = path.join(__dirname, folderType);
  let allCardsHtml = "";

  try {
    // 读取文件夹下的所有子目录
    const items = await readdir(baseDir, { withFileTypes: true });
    const subFolders = items
      .filter((item) => item.isDirectory())
      .map((item) => item.name);

    console.log(`发现 ${subFolders.length} 个${folderType}子文件夹`);

    // 处理每个子文件夹
    for (const folderName of subFolders) {
      const folderPath = path.join(baseDir, folderName);
      const files = await readdir(folderPath);

      // 读取描述文件
      const txtFile = files.find(
        (file) => path.extname(file).toLowerCase() === ".txt"
      );
      const description = txtFile
        ? await readFile(path.join(folderPath, txtFile), "utf8")
        : `暂无${folderType === "items" ? "项目" : "产品"}描述`;

      // 读取图片文件
      const imageFiles = files.filter((file) => isImageFile(file));
      if (imageFiles.length === 0) {
        console.warn(`警告: ${folderType}/${folderName} 中未找到图片`);
        continue;
      }
      const firstImage = imageFiles[0];

      // 生成卡片HTML
      allCardsHtml += cardGenerator(folderName, firstImage, description);

      // 生成详情页（放在自身子文件夹内）
      await generateDetailPage(
        folderName,
        folderPath,
        description,
        imageFiles,
        folderType
      );
    }

    // 更新主页容器
    await updateIndexContainer(allCardsHtml, containerId);
  } catch (error) {
    console.error(`处理${folderType}文件夹时出错:`, error);
  }
}

/**
 * 主函数：同时处理products和items，保持一致的路径风格
 */
async function processAll() {
  console.log("开始处理products文件夹...");
  await processFolder(
    "products",
    "prefabricated-content",
    generateProductCardHtml
  );

  console.log("\n开始处理items文件夹...");
  await processFolder("items", "show_case_grid", generateItemCardHtml);

  console.log("\n所有文件夹处理完成！");
}

// 执行主函数
processAll();
