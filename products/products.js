document.addEventListener("DOMContentLoaded", function () {
  // 中英文文本映射
  const translations = {
    产品展示: "Product Showcase",
    更多产品展示: "More Product Showcases",
    全部产品: "All Of Products",
    关于我们: "About Us",

    // 产品子菜单
    外观幕墙: "Exterior Curtain Wall",
    玻璃幕墙: "Glass Curtain Wall",
    预制墙板: "Prefabricated Wall Panels",
    预制浮雕: "Prefabricated Relief",

    //产品中心
    "安全可靠，安装高效": "Safe and reliable, efficient installation",
    "高可靠性，长期稳定运行": "High reliability, long-term stable operation",
    "轻质高强，施工便捷": "Lightweight and strong, convenient construction",
    上一张: "Previous",
    下一张: "Next",
    首页: "Home",
    "精选优质项目，为您提供最好的选择":
      "Selecting High-Quality Projects for You",
    "精选优质产品，为您提供最好的选择":
      "Selecting High-Quality Products for You",
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
