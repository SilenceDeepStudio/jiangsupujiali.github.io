window.addEventListener("scroll", function () {
  const header = document.querySelector(".fixed-header");
  const backToTop = document.getElementById("back-to-top");

  if (window.scrollY > 50) {
    header.classList.add("py-2", "shadow-md");
    header.classList.remove("py-4");

    // 显示返回顶部按钮
    backToTop.classList.remove("opacity-0", "invisible");
    backToTop.classList.add("opacity-100", "visible");
  } else {
    header.classList.add("py-4");
    header.classList.remove("py-2", "shadow-md");

    // 隐藏返回顶部按钮
    backToTop.classList.add("opacity-0", "invisible");
    backToTop.classList.remove("opacity-100", "visible");
  }
});

// 移动端菜单切换
document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // 关闭移动端菜单（如果打开）
    document.getElementById("mobile-menu").classList.add("hidden");

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// 返回顶部功能
document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 产品标签页切换
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 移除所有活跃状态
    tabBtns.forEach((b) => {
      b.classList.remove("active", "bg-primary", "text-white");
      b.classList.add("bg-white", "text-neutral-700");
    });

    tabContents.forEach((content) => {
      content.classList.add("hidden");
      content.classList.remove("active");
    });

    // 添加当前活跃状态
    btn.classList.add("active", "bg-primary", "text-white");
    btn.classList.remove("bg-white", "text-neutral-700");

    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).classList.remove("hidden");
    document.getElementById(tabId).classList.add("active");
  });
});
// ... existing code ...
// 卷闸栏交互
document.querySelectorAll(".has-dropdown").forEach((dropdown) => {
  // 桌面端悬停效果已通过CSS实现
  // 移动端点击效果
  dropdown.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.classList.toggle("dropdown-open");
    }
  });
});

// 点击页面其他区域关闭卷闸栏
document.addEventListener("click", function (e) {
  if (!e.target.closest(".has-dropdown") && window.innerWidth <= 768) {
    document.querySelectorAll(".has-dropdown").forEach((dropdown) => {
      dropdown.classList.remove("dropdown-open");
    });
  }
});
// 等待DOM加载完成
document.addEventListener("DOMContentLoaded", function () {
  // 获取section元素
  const carouselSection = document.querySelector("[data-carousel-container]");
  if (!carouselSection) return;

  // 定义轮播图片数组（确保这些图片存在于hero_img文件夹中）
  const images = [
    "hero_img/中欧立面1.png",
    "hero_img/内廊1.png",
    "hero_img/内蒙华为立面2.png",
    "hero_img/华发立面1.png",
    "hero_img/宝业中心立面1.png",
    "hero_img/海南陵水立面1.png",
    "hero_img/环保大学立面2.png",
    "hero_img/立面1.png",
    "hero_img/芜湖华为立面1.png",
    "hero_img/花鸟岛立面2.png",
    "hero_img/青浦华为2.png",
    "hero_img/马术馆内廊.png",
  ];

  let currentIndex = 0;
  const intervalTime = 3500; // 3.5秒切换一次

  // 轮播函数
  function rotateBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselSection.style.backgroundImage = `linear-gradient(to right, rgba(0, 100, 255, 0.4), rgba(173, 216, 230, 0.1)), url('${images[currentIndex]}')`;
  }

  // 初始设置第一张图片
  carouselSection.style.backgroundImage = `linear-gradient(to right, rgba(0, 100, 255, 0.4), rgba(173, 216, 230, 0.1)), url('${images[0]}')`;

  // 设置定时器
  setInterval(rotateBackgroundImage, intervalTime);
});
//中英互译 *******************************************************************************
document.addEventListener("DOMContentLoaded", function () {
  // 中英文文本映射
  const translations = {
    // 网站标题和描述
    江苏普嘉丽预制构件有限公司:
      "Jiangsu Pujiali Prefabricated Components Co., Ltd",
    专业预制构件解决方案提供商:
      "Professional prefabricated components solution provider",
    "面向中国 走向世界": "Facing China, Going Global",

    // 导航菜单
    公司简介: "Company Profile",
    工厂实力: "Factory Strength",
    产品中心: "Product Center",
    案例展示: "Case Showcase",
    联系我们: "Contact Us",

    // 产品子菜单
    外观幕墙: "Exterior Curtain Wall",
    玻璃幕墙: "Glass Curtain Wall",
    预制墙板: "Prefabricated Wall Panels",
    预制浮雕: "Prefabricated Relief",

    // 公司简介内容
    "江苏普嘉丽预制构件有限公司位于江苏省南通市海门滨江街，成立于2019年，是一家专注于GRC、GRP、GRG、GRC、TCP及色彩艺术混凝土、PC建筑产品设计、生产、施工一体化的企业。公司自成立以来，一直以项目品质创优为先导，以打造精品工程为己任，精益求精，勇于进取，在混凝土装饰材料领域取得了多个国家级工程及省市级优秀工程项目业绩，为江苏省优质生产企业。为业内龙头企业地位。":
      "Jiangsu Pujiali Prefabricated Components Co., Ltd, located in Haimen Binjiang Street, Nantong City, Jiangsu Province, was established in 2019. It is an enterprise focusing on the integration of design, production and construction of GRC, GRP, GRG, TCP, color art concrete and PC building products. Since its establishment, the company has always taken project quality excellence as the guide, taken creating high-quality projects as its responsibility, kept improving and forged ahead. It has achieved many national-level projects and provincial and municipal excellent engineering project achievements in the field of concrete decorative materials, and has become a high-quality production enterprise in Jiangsu Province and a leading enterprise in the industry.",

    // 公司优势
    专业团队: "Professional Team",
    "现有员工280余人，配备设计、生产和项目管理全流程部门":
      "More than 280 employees, equipped with full-process departments for design, production and project management",
    全链条管理: "Full-chain Management",
    "实行全流程全链条管理，各环节均有标准量化指标控制":
      "Implement full-process and full-chain management, with standard quantitative indicators controlling each link",
    自有基地: "Owned Base",
    "完全自有资金建设的生产基地，确保企业稳健发展":
      "Production base built with completely own funds to ensure the steady development of the enterprise",
    品质保障: "Quality Assurance",
    "通过多项国际体系认证，产品质量达到行业领先水平":
      "Passed multiple international system certifications, and product quality has reached the industry-leading level",
    了解更多: "Learn More",

    // 组织架构
    组织架构: "Organizational Structure",
    董事长: "Chairman",
    总经理: "General Manager",
    副总经理: "Deputy General Manager",
    审计经理: "Audit Manager",
    研发中心: "R&D Center",
    营销中心: "Marketing Center",
    成本合约部: "Cost Contract Department",
    生产制造中心: "Production and Manufacturing Center",
    企管中心: "Enterprise Management Center",
    研发部: "R&D Department",
    技术部: "Technical Department",
    市场部: "Marketing Department",
    商务部: "Business Department",
    预算部: "Budget Department",
    投标部: "Bidding Department",
    建模部: "Modeling Department",
    生产部: "Production Department",
    品质部: "Quality Department",
    品控部: "Quality Control Department",
    人事部: "Personnel Department",
    行政部: "Administration Department",

    // 工厂实力
    "先进的生产设备和严格的质量控制体系，确保产品品质始终如一":
      "Advanced production equipment and strict quality control system ensure consistent product quality",
    证书展示: "Certificate Display",
    工厂区域: "Factory Area",
    工厂全景: "Factory Panorama",
    "现代化生产基地，占地面积40000平方米":
      "Modern production base covering an area of 40000 square meters",
    原材料存储区域: "Raw Material Storage Area",
    "原材料存储区域约为1200平方米，分为面板材料、五金材料，及其面层处理材料等区域":
      "The raw material storage area is about 1200 square meters, divided into panel materials, hardware materials, and surface treatment materials areas",
    模具制作区域: "Mold Making Area",
    "模具制作区域约2000平方米左右，分为木模，硅胶模，玻璃钢模等制作区域":
      "The mold making area is about 2000 square meters, divided into wooden molds, silicone molds, FRP molds and other production areas",
    浇筑制作区域: "Pouring Production Area",
    "浇筑制作区域约5000平方米左右，分为GRC，UHPC等制作区域":
      "The pouring production area is about 5000 square meters, divided into GRC, UHPC and other production areas",
    产品养护区域: "Product Maintenance Area",
    "成品养护区域约3000平米左右，按产品不同的养护阶段进行温度湿度的调节":
      "The finished product maintenance area is about 3000 square meters, and the temperature and humidity are adjusted according to different maintenance stages of the product",
    钢架制作区域: "Steel Frame Production Area",
    "钢架制作区域约1800平米左右，分为组合加工区域及出厂检测区域":
      "The steel frame production area is about 1800 square meters, divided into combined processing area and factory inspection area",
    包装存储区域: "Packaging and Storage Area",
    "产品包装存储区域约2000平米左右，为成品表面处理进行软包装软隔离":
      "The product packaging and storage area is about 2000 square meters, providing soft packaging and isolation for the surface treatment of finished products",
    生产工具: "Production Tools",
    自动化生产线: "Automatic Production Line",
    "高精度生产设备，确保产品一致性":
      "High-precision production equipment to ensure product consistency",
    精密检测过程: "Precision Testing Process",
    "严格质量控制，确保产品符合标准":
      "Strict quality control to ensure products meet standards",
    先进模具设备: "Advanced Mold Equipment",

    //产品中心
    "高品质预制构件,满足各类建筑需求":
      "High - quality precast components, meeting various building needs",
    产品预制件: "Product prefabricated parts",
    生产流程: "Production Process",
    产品检测: "Product Detection",
    合作供应商: "Cooperation with Suppliers",
    "江苏普嘉丽肩负着创建经典建筑艺术的使命，注重建筑材料的研发与创新应用研究，坚持科技让艺术更加完美的企业发展理念，公司设有专门的设计研究实验室。除研究实验室外，公司积极联合清华大学研究院、借助外部研发力量，采取多种形式在各类新型UHPC、GRC、GRP、GRG材料、应用方面进行研究探索。":
      "Jiangsu Pujiali shoulders the mission of creating classic architectural art, focuses on the research and development of building materials and the research on innovative application, adheres to the corporate development concept that technology makes art more perfect, and the company has a dedicated design research laboratory. In addition to the research laboratory, the company actively cooperates with the Research Institute of Tsinghua University, draws on external R & D strength, and conducts research and exploration in various forms on the application of various new UHPC, GRC, GRP, and GRG materials.",
    "安全可靠，安装高效": "Safe and reliable, efficient installation",
    "高可靠性，长期稳定运行": "High reliability, long-term stable operation",
    "轻质高强，施工便捷": "Lightweight and strong, convenient construction",
    前期准备: "Preparatory work",
    "模具准备，原材料预处理": "Mold preparation, raw material preprocessing",
    分阶段混合搅拌: "Stage-by-stage mixing and stirring",
    "UHPC搅拌 GRC搅拌": "UHPC mixing and stirring, GRC mixing and stirring",
    模具制作: "Mold Making",
    "高精度模具，确保产品尺寸准确":
      "High-precision molds, ensuring product size accuracy",
    混凝土浇筑: "Concrete pouring",
    "严格控制配合比，确保混凝土强度":
      "Strict control of mixing ratios to ensure concrete strength",
    养护成型: "Product maintenance and shaping",
    "科学养护工艺，确保产品性能":
      "Scientific maintenance process, ensuring product performance",
    抗压强度检测: "Compressive Strength Testing",
    确保产品承载能力符合设计要求:
      "Ensure that the product's bearing capacity meets the design requirements",
    尺寸偏差检测: "Size Deviation Testing",
    确保产品尺寸精度符合标准:
      "Ensure that the product's size precision meets the standard",
    外观质量检测: "Appearance Quality Testing",
    严格控制产品外观缺陷: "Strict control of product appearance defects",
    耐久性检测: "Durability Testing",
    确保产品长期使用性能:
      "Ensure that the product's long-term use performance meets the design requirements",
    优质钢材供应商: "Quality Steel Suppliers",
    "长期合作，品质保证": "Long-term cooperation, quality guarantee",
    水泥供应商: "Cement Suppliers",
    "优质原材料，稳定供应": "Quality raw materials, stable supply",
    外加剂供应商: "Additive Suppliers",
    "专业技术支持，优化产品性能":
      "Professional technical support, optimizing product performance",
    物流合作伙伴: "Logistics Partners",
    "安全高效，准时送达": "Safe and efficient, on time delivery",
    // 案例展示部分
    "精选工程案例，见证品质实力": "Selected project cases, witnessing quality",
    "定制化生产能力，满足不同需求":
      "Customized production capabilities, meeting different needs",
    点击图片查看详情: "Click to view details",
    //items
    上海宝业中心: "Shanghai Baoye Center",
    上海马术馆: "Shanghai International Equestrian Center",
    东海花鸟岛: "Huadiao Island in the East China Sea",
    东莞华为松山湖: "Dongguan Huawei Songshan Lake",
    内蒙古华为: "Inner Mongolia Huawei Technology Center",
    杭州华为基地: "Hangzhou Huawei Base",
    海南陵水: "Lingshui, Hainan",
    珠海华发大厦: "Zhuhai Huafa Building",
    罗湖一馆一中心: "Luohu One Hall and One Center",
    芜湖华为基地: "Wuhu Huawei Base",
    西安中欧产业园: "Xi'an China-Europe Industrial Park",
    阿联酋阿布扎比环保大学:
      "Abu Dhabi University of Environmental Sciences, UAE",
    青浦华为基地: "Qingpu Huawei Base",
    //footer
    联系我们: "Contact Us",
    快速链接: "Quick Links",
    关注我们: "Follow Us",
    "地址：江苏省海门市广州路2111号":
      "Jiangsu Pujiali Prefabricated Components Co., Ltd, Number 2111, Nantong, Jiangsu, China",
    "电话：0513-69956766": "Phone：0513-69956766",
    "邮箱：1056137138@qq.com": "Email：1056137138@qq.com",
  };

  // 获取语言切换按钮
  const cnBtn = document.getElementById("cn-btn");
  const enBtn = document.getElementById("en-btn");

  // 中文切换
  cnBtn.addEventListener("click", function () {
    switchLanguage("cn");
    updateButtonStyles("cn");
  });

  // 英文切换
  enBtn.addEventListener("click", function () {
    switchLanguage("en");
    updateButtonStyles("en");
  });

  // 更新按钮样式
  function updateButtonStyles(lang) {
    if (lang === "cn") {
      cnBtn.classList.remove("bg-primary", "text-white");
      cnBtn.classList.add("bg-secondary", "text-primary");
      enBtn.classList.remove("bg-secondary", "text-primary");
      enBtn.classList.add("bg-primary", "text-white");
    } else {
      enBtn.classList.remove("bg-primary", "text-white");
      enBtn.classList.add("bg-secondary", "text-primary");
      cnBtn.classList.remove("bg-secondary", "text-primary");
      cnBtn.classList.add("bg-primary", "text-white");
    }
  }

  // 语言切换函数
  function switchLanguage(lang) {
    // 只选择带有translate-item类的元素进行翻译
    document.querySelectorAll(".translate-item").forEach((element) => {
      const originalText = element.textContent.trim();

      if (lang === "en") {
        // 切换到英文：如果有对应的翻译则替换
        if (translations[originalText]) {
          element.textContent = translations[originalText];
        }
      } else {
        // 切换到中文：找到英文对应的中文
        const chineseText = findChineseText(originalText);
        if (chineseText) {
          element.textContent = chineseText;
        }
      }
    });

    // 特殊处理meta标签和标题
    if (lang === "en") {
      document
        .querySelector('meta[name="description"]')
        .setAttribute(
          "content",
          "Jiangsu Pujiali Prefabricated Components Co., Ltd, specializing in GRC, GRP, GRG, TCP and color art concrete, PC building products design, production, construction integration, providing professional prefabricated components solutions, facing China and going global."
        );
      document.title = "Jiangsu Pujiali Prefabricated Components Co., Ltd";
    } else {
      document
        .querySelector('meta[name="description"]')
        .setAttribute(
          "content",
          "江苏普嘉丽预制构建有限公司，专注于GRC、GRP、GRG、TCP及色彩艺术混凝土、PC建筑产品设计、生产、施工一体化，提供专业预制构件解决方案，面向中国走向世界。"
        );
      document.title = "江苏普嘉丽预制构建有限公司";
    }
  }

  // 辅助函数：根据英文找到对应的中文
  function findChineseText(englishText) {
    for (const [cn, en] of Object.entries(translations)) {
      if (en === englishText) {
        return cn;
      }
    }
    return null; // 找不到时返回null，保持原有文本
  }
});
