document.addEventListener("DOMContentLoaded", function () {
  // 中英文文本映射
  const translations = {
    工作环境详情页: "Work Environment Details",
    返回: "Back",
    关于我们: "About Us",
    工作环境: "Work Environment",


    上一张: "Previous",
    下一张: "Next",
    "幕墙预制构件公司管理层工作区域坐落于企业研发办公大楼的高层，既能够俯瞰整个预制构件生产厂区的有序运作，又可隔绝生产区的噪音干扰，营造出静谧且视野开阔的办公氛围。办公空间采用开放式与独立式结合的布局，管理层人员的独立办公室内配备了可调节高度的实木办公桌，桌上放置着高清双屏电脑，其中一块屏幕实时显示生产车间的预制构件加工进度、质量检测数据等核心信息，另一块则用于处理日常管理文件、开展线上会议。​办公室墙面悬挂着大型幕墙工程设计效果图与项目进度甘特图，方便管理层随时查看项目推进情况，及时调整工作部署。会议室配备了先进的全息投影设备与视频会议系统，可与异地的项目合作方、设计院进行实时沟通，高效解决幕墙预制构件设计优化、生产衔接等问题。此外，工作区域还设有小型茶水洽谈区，配备了恒温饮水机与舒适的沙发，管理层人员可在此与下属进行轻松的工作交流，也可接待来访的客户或合作伙伴。整体环境既彰显了企业对管理效率的重视，又融入了幕墙行业的专业元素，为管理层开展决策、协调、管控等工作提供了优质的空间保障。":
    "The management work area of the curtain wall precast component company is located on the upper floors of the enterprise's R&D office building. It not only offers a bird's-eye view of the orderly operation of the entire precast component production plant but also isolates noise from the production area, creating a quiet and spacious working atmosphere. The office space features a layout that combines open - plan and independent areas. The independent offices of management staff are equipped with adjustable - height solid wood desks. On the desks, there are high - definition dual - screen computers. One screen displays real - time core information such as the processing progress and quality inspection data of precast components in the production workshop, while the other is used for handling daily management documents and holding online meetings. Large - scale curtain wall engineering design renderings and project progress Gantt charts are hung on the office walls, allowing management to check the project progress at any time and adjust work arrangements promptly. The meeting rooms are equipped with advanced holographic projection equipment and video conferencing systems, enabling real - time communication with off - site project partners and design institutes to efficiently solve problems such as design optimization and production coordination of curtain wall precast components. In addition, there is a small tea - chatting area in the work area, equipped with a constant - temperature water dispenser and comfortable sofas. Management staff can have relaxed work discussions with subordinates here or receive visiting customers or partners. The overall environment not only demonstrates the enterprise's emphasis on management efficiency but also incorporates professional elements of the curtain wall industry, providing high - quality space support for management to make decisions, coordinate, and control work.",
    江苏普嘉丽: "Jiangsu Pujiali",
    "精选优质产品，为您提供最好的选择":
      "Selecting High-Quality Products for You",

    //footer
    首页: "Home",
    全部产品: "All Products",
    江苏普嘉丽: "Jiangsu Pujiali",
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
