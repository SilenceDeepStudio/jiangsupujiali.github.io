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
  const htmlContent = `
 <!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="../../img/logo-1种尺寸.ico" type="image/x-icon" />
    <title class="translate-item">${itemName} - 详情</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: '#2563eb',
              secondary: '#f8fafc',
              accent: '#f97316',
              dark: '#1e293b',
            }
          }
        }
      }
    </script>
    <script src="${
      type === "items" ? "../item.js" : "../products.js"
    }" defer=""></script>
  </head>
  <body class="min-h-[100vh] flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
    <header id="header" class="bg-white shadow-md fixed w-full top-0 z-40 transition-all duration-300">
      <div class="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 class="translate-item text-2xl font-bold text-blue-800">${
          type === "items" ? "项目展示" : "产品展示"
        }</h1>

        <nav>
          <ul class="flex space-x-8">
            <li><a href="../../index.html#${
              type === "items" ? "show_case_grid" : "product-center"
            }" class="translate-item text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">全部${
    type === "items" ? "项目" : "产品"
  }</a></li>
            <li><a href="#footer" class="translate-item text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">关于我们</a></li>
          </ul>
        </nav>
      </div>
    </header>
    
    <main class="flex-grow mt-20 mb-12">
      <section class="max-w-4xl mx-auto px-4 py-10 bg-white rounded-xl shadow-lg mb-10">
        <div class="text-center">
          <h2 class="translate-item text-4xl font-bold text-gray-800 mb-6">${itemName}</h2>
          <p class="translate-item text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">${description}</p>
        </div>
      </section>

      <section class="products-section max-w-5xl mx-auto px-4 bg-white rounded-xl shadow-lg py-8 mb-10">
        <div class="but_prvnex flex justify-center space-x-6 mb-8">
          <button class="translate-item load-more-prv bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md">
            <i class="fas fa-arrow-left mr-2"></i>上一张
          </button>
          <button class="translate-item load-more-nex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md">
            下一张<i class="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
        <div class="carousel-container rounded-2xl overflow-hidden shadow-xl">${imagesHtml}</div>
        <div class="carousel-indicators flex justify-center space-x-3 mt-6" id="carousel-indicators"></div>
      </section>
      
      <section class="max-w-4xl mx-auto px-4 text-center">
        <div>
          <a href="../../index.html#${
            type === "items" ? "show_case_grid" : "product-center"
          }"
            ><button type="button" class="translate-item load-more bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              更多${type === "items" ? "项目" : "产品"}展示
              <i class="fas fa-arrow-right ml-2"></i>
            </button></a
          >
        </div>
      </section>
    </main>

    <footer id="footer" class="bg-gray-900 text-white py-12 mt-8">
      <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="">
          <h3 class="translate-item text-2xl font-bold mb-4 text-blue-300">${
            type === "items" ? "项目展示" : "产品展示"
          }</h3>

          <p class="translate-item text-gray-300">精选优质${
            type === "items" ? "项目" : "产品"
          }，为您提供最好的选择</p>
        </div>
        <div class="">
          <h4 class="translate-item text-xl font-semibold mb-4 text-blue-300">快速链接</h4>

          <ul class="space-y-3">
            <li class="">
              <a class="translate-item text-gray-300 hover:text-white transition-colors duration-200" href="../../index.html">
                <i class="fas fa-home mr-2"></i>首页
              </a>
            </li>
            <li class="">
              <a class="translate-item text-gray-300 hover:text-white transition-colors duration-200" href="../../index.html#${
                type === "items" ? "show_case_grid" : "product-center"
              }">
                <i class="fas fa-list mr-2"></i>全部${
                  type === "items" ? "项目" : "产品"
                }
              </a>
            </li>
          </ul>
        </div>
        <div class="">
          <h4 class="translate-item text-xl font-semibold mb-4 text-blue-300">联系我们</h4>
          <ul class="space-y-3">
            <li class="translate-item text-gray-300"><i class="fas fa-map-marker-alt mr-3 text-blue-300"></i>地址：江苏省海门市广州路2111号</li>
            <li class="translate-item text-gray-300"><i class="fas fa-phone mr-3 text-blue-300"></i>电话：0513-69956766</li>
            <li class="translate-item text-gray-300"><i class="fas fa-envelope mr-3 text-blue-300"></i>邮箱：1056137138@qq.com</li>
          </ul>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-gray-700 text-center text-gray-400">
        <p>© 2023 ${
          type === "items" ? "项目展示平台" : "产品展示平台"
        }。保留所有权利。</p>
      </div>
    </footer>
    
    <div class="language-switcher fixed right-4 top-40 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
      <button id="cn-btn" class="w-12 h-12 rounded-full bg-blue-600 text-white font-bold shadow-lg flex items-center justify-center transition-transform hover:scale-110">
        中
      </button>
      <button id="en-btn" class="w-12 h-12 rounded-full bg-gray-700 text-white font-bold shadow-lg flex items-center justify-center transition-transform hover:scale-110">
        En
      </button>
    </div>
    
    <script>
      // 导航栏滚动效果
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
          header.classList.add("shadow-lg", "py-2");
          header.classList.remove("py-3");
        } else {
          header.classList.remove("shadow-lg", "py-2");
          header.classList.add("py-3");
        }
      });

      // 图片轮播功能增强
      let slideIndex = 1;
      let slideInterval;
      
      // 初始化轮播指示器
      function initCarouselIndicators() {
        const slides = document.getElementsByClassName("carousel-slide");
        const indicatorsContainer = document.getElementById("carousel-indicators");
        indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < slides.length; i++) {
          const indicator = document.createElement("div");
          indicator.classList.add("w-3", "h-3", "rounded-full", "bg-gray-300", "cursor-pointer", "transition-all", "duration-300");
          if (i === slideIndex - 1) indicator.classList.add("bg-blue-600", "scale-125");
          indicator.addEventListener("click", () => {
            slideIndex = i + 1;
            showSlides();
            resetSlideInterval();
          });
          indicatorsContainer.appendChild(indicator);
        }
      }
      
      // 显示幻灯片
      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("carousel-slide");
        let indicators = document.getElementsByClassName("carousel-indicator");
        
        if (slides.length === 0) return;
        
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        
        for (i = 0; i < indicators.length; i++) {
          indicators[i].classList.remove("bg-blue-600", "scale-125");
          indicators[i].classList.add("bg-gray-300");
        }
        
        if (slideIndex > slides.length) {slideIndex = 1}
        if (slideIndex < 1) {slideIndex = slides.length}
        
        slides[slideIndex - 1].style.display = "block";
        if (indicators.length > 0) {
          indicators[slideIndex - 1].classList.remove("bg-gray-300");
          indicators[slideIndex - 1].classList.add("bg-blue-600", "scale-125");
        }
      }
      
      // 切换幻灯片
      function plusSlides(n) {
        slideIndex += n;
        showSlides();
      }
      
      // 初始化轮播
      document.addEventListener("DOMContentLoaded", function() {
        showSlides();
        initCarouselIndicators();
   
        
        document.querySelector(".load-more-prv").addEventListener("click", () => plusSlides(-1));
        document.querySelector(".load-more-nex").addEventListener("click", () => plusSlides(1));
        
        // 平滑滚动到锚点
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
              });
            }
          });
        });
        
        // 语言切换
        document.getElementById('cn-btn').addEventListener('click', function() {
          this.classList.add('bg-blue-600');
          this.classList.remove('bg-gray-700');
          document.getElementById('en-btn').classList.add('bg-gray-700');
          document.getElementById('en-btn').classList.remove('bg-blue-600');
        });
        
        document.getElementById('en-btn').addEventListener('click', function() {
          this.classList.add('bg-blue-600');
          this.classList.remove('bg-gray-700');
          document.getElementById('cn-btn').classList.add('bg-gray-700');
          document.getElementById('cn-btn').classList.remove('bg-blue-600');
        });
      });
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
