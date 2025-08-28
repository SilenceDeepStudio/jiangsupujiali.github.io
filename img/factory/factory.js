document.addEventListener("DOMContentLoaded", function () {
  // 中英文文本映射
  const translations = {
    工厂全景详情页: "Factory Overview Details",
    返回: "Back",
    关于我们: "About Us",
    工厂全貌: "Factory Overview",

    上一张: "Previous",
    下一张: "Next",
    "江苏普嘉丽预制构件公司工厂坐落于产业园区核心地带，总占地面积约 14000 平方米，整体布局遵循 “生产高效化、流程标准化、环境绿色化”原则，构建起从原材料加工到成品出厂的全链条智能制造体系。工厂正门入口处设有智能门禁与车辆调度区，确保人员与物流进出有序。进入厂区后，左侧为GRC构件生产主车间，车间内配备 12条自动化生产线，包括数控钢筋加工设备、高精度 GRC喷射成型机、智能养护窑等专业设备，可实现日均 200 平方米 GRC幕墙构件的生产；生产线旁设置透明观摩通道，客户可实时查看构件浇筑、脱模、打磨等工序，直观感受标准化生产流程。厂区中部为技术研发与质量检测中心，三层独栋建筑内设有材料实验室、结构力学测试室、BIM技术应用中心：材料实验室可对水泥、纤维、外加剂等原材料进行 30余项指标检测，确保源头质量可控；结构力学测试室配备 500吨级压力试验机，能模拟不同气候环境下 GRC 构件的承载性能与耐久性；BIM技术中心通过三维建模实现构件生产与现场安装的精准对接，减少施工误差。厂区右侧为成品仓储与物流配送区，10000 平方米的智能仓储库采用立体货架与AGV 机器人协同作业，可容纳 5000平方米以上的成品构件，同时配备温湿度控制系统，避免构件因环境因素受损；物流区设有3个大型装卸平台，可对接集装箱货车与工程专用运输车辆，实现成品从仓库到项目现场的无缝转运。此外，厂区内还配套建设了员工休息区、绿色景观带与雨水回收系统，既保障员工工作舒适度，又践行环保生产理念，整体呈现出“技术先进、管理规范、环境友好” 的现代化 GRC 幕墙生产基地风貌。":
      'Jiangsu Pujiali Prefabricated Components Co., Ltd. is located in the core area of the industrial park, covering a total area of approximately 14,000 square meters. The overall layout adheres to the principles of "efficient production, standardized processes, and green environment", establishing a full-chain intelligent manufacturing system from raw material processing to finished product delivery. At the entrance of the factory, there is an intelligent access control and vehicle dispatching area to ensure orderly entry and exit of personnel and logistics. After entering the factory area, the main GRC component production workshop is on the left. The workshop is equipped with 12 automated production lines, including CNC steel bar processing equipment, high-precision GRC jet molding machines, intelligent curing kilns and other professional equipment, which can realize the production of 200 square meters of GRC curtain wall components per day on average. A transparent observation channel is set up next to the production line, allowing customers to view the processes of component pouring, demolding, and polishing in real time, and intuitively experience the standardized production process. In the middle of the factory area is the Technology R&D and Quality Inspection Center. The three-story independent building houses a material laboratory, a structural mechanics testing room, and a BIM technology application center: the material laboratory can conduct more than 30 index tests on raw materials such as cement, fibers, and admixtures to ensure controllable quality at the source; the structural mechanics testing room is equipped with a 500-ton pressure testing machine, which can simulate the bearing performance and durability of GRC components under different climatic environments; the BIM technology center realizes the precise connection between component production and on-site installation through 3D modeling, reducing construction errors. On the right side of the factory area is the finished product storage and logistics distribution area. The 10,000-square-meter intelligent warehouse adopts the collaborative operation of three-dimensional shelves and AGV robots, which can accommodate more than 5,000 square meters of finished components. At the same time, it is equipped with a temperature and humidity control system to prevent damage to components due to environmental factors; the logistics area has 3 large loading and unloading platforms, which can connect with container trucks and engineering-specific transport vehicles to realize seamless transfer of finished products from the warehouse to the project site. In addition, the factory area is also equipped with an employee rest area, a green landscape belt, and a rainwater recycling system, which not only ensures the comfort of employees\' work but also practices the concept of environmentally friendly production. Overall, it presents a modern GRC curtain wall production base style featuring "advanced technology, standardized management, and environment-friendly".',
    首页: "Home",
    "精选优质项目，为您提供最好的选择":
      "Selecting High-Quality Projects for You",
    "精选优质产品，为您提供最好的选择":
      "Selecting High-Quality Products for You",
    //footer
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
