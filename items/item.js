document.addEventListener("DOMContentLoaded", function () {
  // 中英文文本映射
  const translations = {
    项目展示: "Project Showcase",
    更多项目展示: "More Project Showcases",
    全部项目: "All Of Showcases",
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
    "地址：公司地址":
      "Jiangsu Pujiali Prefabricated Components Co., Ltd, 200000, Nanjing, Jiangsu, China",
    "电话：电话号码": "025-88888888",
    "邮箱：公司邮箱": "info@pujiali.com",
    "上海宝业中心是上海虹桥新中心商务区二期开发的一部分，位于上海市西面高速发展区。场地位于公路、铁路和航运交通枢纽的交汇点，也是人们在高铁从南面进入虹桥火车站前能看到的最后一座建筑，赋予了项目作为重要的城市空间的地位。场地的挑战之处在于：场地形状由城市规划的两块绿地挤压成了L形；场地的东面，南面和西面要求60%的建筑红线贴线率；场地北面紧邻一条24米高的横跨而过的高架公路。同时建筑容积率不得超过1.60，建筑高度不超过24米":
      "Shanghai Baoye Center is part of the Phase II development of the Shanghai Hongqiao New Central Business District, located in the rapidly developing area in the western part of Shanghai. The site is at the intersection of road, railway and shipping transportation hubs, and it is also the last building visible before people enter Hongqiao Railway Station from the south by high-speed rail, endowing the project with the status of an important urban space. The challenges of the site are as follows: the shape of the site is squeezed into an L-shape by two green spaces planned by the city; the east, south and west sides of the site require a 60% building setback line compliance rate; the north side of the site is adjacent to an elevated highway spanning 24 meters in height. Meanwhile, the building plot ratio shall not exceed 1.60, and the building height shall not exceed 24 meters.",
    "上海国际马术中心位于黄浦江畔世博文化公园南部，于2024年5月正式投用，是国内首座符合国际马术五星级赛事标准的永久性专业场馆。该中心占地3.32公顷，总建筑面积约8.5万平方米，配备90×60米主赛场、智能化马厩及约5000个观众席位，创新采用`马术谷`自然设计理念与全球首个群控可升降灯光平台。场馆投用后承办了2024年浪琴环球马术冠军赛十周年赛事，并举办国际马文化周系列活动，使上海成为国内唯一拥有顶级马术场馆与赛事的城市。其地下空间与地铁7/19号线及双子山公园贯通，形成立体交通网络，集成赛事举办、马匹医疗、文化教育等多元化功能":
      "The Shanghai International Equestrian Center is located in the southern part of the Expo Culture Park on the bank of the Huangpu River. It was officially put into use in May 2024 and is China's first permanent professional venue that meets the standards of international five-star equestrian events. Covering an area of 3.32 hectares with a total construction area of approximately 85,000 square meters, the center is equipped with a 90×60-meter main competition arena, intelligent stables, and about 5,000 spectator seats. It innovatively adopts the `Equestrian Valley` natural design concept and the world's first group-controlled liftable lighting platform.Since its operation, the venue has hosted the 10th anniversary event of the 2024 Longines Global Champions Tour and a series of international equestrian culture week activities, making Shanghai the only city in China with top-level equestrian venues and events. Its underground space is connected to Metro Lines 7/19 and the Twin Hills Park, forming a three-dimensional transportation network that integrates diversified functions such as event hosting, equine medical care, and cultural education.",
    "这座建筑外观极具未来感，以纯净白色为主色调，如同一朵飘逸的云朵降临大地。流畅且富有张力的曲线构成独特轮廓，层层叠叠的形态打破传统建筑的规整，仿佛在动态中凝固。大面积玻璃幕墙与白色体块交融，既引入充足光线，又营造出通透轻盈之感，与周围山海景致对话，展现出自然与建筑艺术的奇妙融合，是现代建筑美学的生动诠释 。":
      "This building has a highly futuristic appearance, with pure white as its main color, resembling an elegant cloud descending upon the earth. Its unique silhouette is formed by smooth and dynamic curves, while the layered structure breaks away from the regularity of traditional architecture, as if frozen in motion. The large-area glass curtain walls blend with the white volumes, not only allowing ample light to enter but also creating a sense of transparency and lightness. It engages in a dialogue with the surrounding mountains and seas, showcasing the wonderful integration of nature and architectural art, and serving as a vivid interpretation of modern architectural aesthetics.",
    "2013年8月，华为宣布要将终端总部从深圳迁移到东莞松山湖，后来这个总占地约1900亩，总建筑面积约126.7万平方米，仿佛童话世界，堪比5a风景区的欧洲小镇，就是华为终端总部的中心，是目前华为在全球最大的园区。除此之外，这里更是建立了许多先进的实验室，以供研发使用。自2015年以来，华为已在东莞松山湖拿下24宗地块，更多是用于周边教育、居住等配套。十多年时间，华为在东莞从制造加工产业，演变成为了科技研发的前端产业。":
      "Huawei announced in August 2013 that it would move its terminal headquarters from Shenzhen to Dongguan, the southernmost city in China. Later, this total area of 1900 square kilometers and a total construction area of 126.7 square million meters, resembling a fairy tale world, is comparable to a 5a-scenic spot in Europe. It is the center of Huawei's terminal headquarters, and is the largest park in the world. In addition to this, it has also established many advanced laboratories for research and development. Since 2015, Huawei has won 24 plots in Dongguan, with more being used for education and living support. Over the past decade, Huawei has evolved from a manufacturing and processing industry in Dongguan to a front-end industry in technology research and development.",
    "呼和浩特市华为内蒙古区域总部项目投入应用，华为内蒙古区域总部项目位于呼和浩特市新城区科技城高新技术产业园区，于2024年12月22日正式投用。该项目集综合办公、研发生产和技术推广于一体，配备信息和通信技术展厅、终端产品体验馆等设施，致力于打造数字化创新示范基地。项目通过与和林格尔智算中心联动，重点发展绿色算力、人工智能、低空经济等新兴产业，推动区域新一代信息技术产业集群升级。作为呼和浩特培育“六大产业集群”战略的重要支撑，该总部将助力首府经济高质量发展，并带动上下游产业链生态企业集聚。":
      "The Huawei Inner Mongolia Regional Headquarters project in Hohhot has been put into use. Located in the High-Tech Industrial Park of Science and Technology City, Xincheng District, Hohhot, the project was officially commissioned on December 22, 2024. Integrating comprehensive office, R&D and production, and technology promotion, it is equipped with facilities such as an information and communication technology exhibition hall and a terminal product experience hall, dedicated to building a digital innovation demonstration base. By linking with the Helingeer Intelligent Computing Center, the project focuses on developing emerging industries such as green computing power, artificial intelligence, and low-altitude economy, promoting the upgrading of the regional new-generation information technology industry cluster. As an important support for Hohhot's strategy of cultivating the `six major industrial clusters`, this headquarters will boost the high-quality economic development of the capital city and drive the agglomeration of ecological enterprises in the upstream and downstream industrial chains.",
    "该研究所位于杭州市滨江区，承担无线通信、光通信、网络技术等核心任务，并参与多项华为技术标准的制定与优化。截至2025年，其业务范围涵盖技术开发、技术服务、技术咨询及微电子产品销售。在产学融合方面，研究所与多所高校建立合作，如2024年与西安电子科技大学杭州研究院联合组织学生参访活动，并持续为杭州电子科技大学等院校提供就业岗位及科研合作机会。":
      "The research institute is located in Binjiang District, Hangzhou. It undertakes core tasks such as wireless communication, optical communication, and network technology, and participates in the formulation and optimization of multiple Huawei technical standards. As of 2025, its business scope covers technology development, technical services, technical consulting, and sales of microelectronic products. In terms of industry-university integration, the research institute has established cooperation with many universities. For example, in 2024, it jointly organized student visits with the Hangzhou Research Institute of Xidian University, and continuously provided employment positions and scientific research cooperation opportunities for institutions such as Hangzhou Dianzi University.",
    "白色主调的墙面上，规整排列的浅色石材板块，如细密的琴键，有序铺陈出简洁基底。蓝色竖条装饰如灵动音符，穿插于窗间，打破单调，为建筑注入活泼韵律；部分区域灰色构件错落，增添层次与理性质感。底部黄色饰边如温暖基座，与上方色调形成呼应，整体装饰通过色彩与材质的巧妙搭配，展现出简洁而不失活泼、规整又富有变化的现代建筑美学。":
      "On the white-dominated wall surfaces, light-colored stone panels arranged in an orderly manner, like delicate piano keys, lay out a simple base in an organized way. Blue vertical strip decorations, resembling lively musical notes, intersperse between the windows, breaking the monotony and infusing the building with a lively rhythm. In some areas, gray components are scattered in a staggered manner, adding a sense of hierarchy and rational texture. The yellow trim at the bottom, like a warm base, echoes the tones above. Through the clever combination of colors and materials, the overall decoration presents a modern architectural aesthetic that is simple yet lively, regular yet full of changes.",
    "项目用地位于珠海市金湾航空新城，邻近金湾立交，位于金湾区域的中心地带。定位为高端商务办公为主、结合住宅 ”的办公载体。设计理念以“旋”字出发，旋 字从疋, “疋”义为“绕行”，来往于各方之间 ，调和场地与周边自然、城市与生活三种要素的关系。通过“旋”，创造丰富优越的景观视线；丰富宜人的城市公共活动空间，激活城市活力；创造与周边建筑截然不同的城市形象，使设计成为新的地标性建筑。":
      "The project site is located in Jinwan Aviation New Town, Zhuhai, adjacent to Jinwan Interchange and in the central area of Jinwan. It is positioned as an office carrier mainly for high-end business offices combined with residences. The design concept starts from the character `Xuan (旋)`. `Xuan` consists of the radical `Shu (疋)`, which means `to detour` and `to move between various parties`, reconciling the relationships among three elements: the site and its surrounding nature, the city, and life. Through `Xuan`, it creates rich and superior landscape vistas; enriches pleasant urban public activity spaces to activate urban vitality; and creates an urban image completely different from the surrounding buildings, making the design a new landmark building.",
    "项目用地面积9968㎡，总建筑面积77077㎡，其中，地上建筑面积52967㎡，地下建筑面积24110㎡，包括一栋地下3层、地上17层青少年活动中心和一栋地下3层、地上21层图书馆。地下停车库及设备用房16310㎡，地上配套用房及架空绿化休闲2167㎡， 停车位地280个。":
      "The project covers a land area of 9,968 square meters with a total construction area of 77,077 square meters, including an above-ground construction area of 52,967 square meters and an underground construction area of 24,110 square meters. It comprises a Youth Activity Center with 3 underground floors and 17 above-ground floors, and a Library with 3 underground floors and 21 above-ground floors. The underground parking garage and equipment rooms occupy 16,310 square meters, while the above-ground supporting facilities and overhead green leisure spaces cover 2,167 square meters. There are 280 parking spaces available.",
    "华为云 华东 芜湖数据中心项目 江北地 块（一期）位于芜湖市 江北新区，建设内容包括 2 栋数据中心、2 栋油机平台及配套地埋油罐、1 栋综合楼、1 栋变电站等相关配套设施。 项目建成后，将面向长三角地区，以智慧城市云、工业互联网云为主要方向，成为华为云计算三大枢纽，对提升 芜湖市 乃至长三角地区信息化水平具有重要意义。":
      "Phase I of the Huawei Cloud East China Wuhu Data Center Project (Jiangbei Plot) is located in Jiangbei New Area, Wuhu City. The construction content includes 2 data centers, 2 generator platforms with supporting underground oil tanks, 1 complex building, 1 substation and other related supporting facilities. After completion, the project will target the Yangtze River Delta region, focusing on smart city cloud and industrial internet cloud, and will become one of Huawei's three major cloud computing hubs. It is of great significance for improving the informatization level of Wuhu City and even the Yangtze River Delta region.",
    "西安中欧合作产业园由西安经济技术开发区管委会与海航现代物流集团联合打造，双方将以海航现代物流集团并购德国哈恩机场为契机，共同探索建设“一带一路”中欧合作产业园海外园区，支持西安经济技术开发区内企业与德国企业开展合作。海航现代物流集团充分利用海航集团在全球范围内的优质资源，与西安经济技术开发区合作建设“一带一路”中欧合作产业园国内园区，优先将相关产业项目落户园区，先期启动冷链车辆生产项目。":
      "The Xi'an China-Europe Cooperation Industrial Park is jointly built by the Administrative Committee of Xi'an Economic and Technological Development Zone and HNA Modern Logistics Group. Taking HNA Modern Logistics Group's acquisition of Hahn Airport in Germany as an opportunity, the two parties will jointly explore the construction of overseas parks of the `Belt and Road` China-Europe Cooperation Industrial Park, and support enterprises in Xi'an Economic and Technological Development Zone to carry out cooperation with German enterprises. HNA Modern Logistics Group will make full use of the high-quality global resources of HNA Group, cooperate with Xi'an Economic and Technological Development Zone to build the domestic park of the `Belt and Road` China-Europe Cooperation Industrial Park, give priority to settling relevant industrial projects in the park, and initially launch the cold chain vehicle production project.",
    "2024年7月9日，华为上海青浦项目已全部建成，正式命名为华为练秋湖研发中心。研发中心内，“练秋湖研发中心”分区标识牌全部安装到位，研发中心分多个区，内部道路、小火车、高架立交桥等全部贯通；横跨练秋湖的月亮桥、彩虹桥、拱桥等桥梁工程正在进行收尾工作；园区内边边角角绿化工程也在收尾，练秋湖开始蓄水":
      "On July 9, 2024, the Huawei Shanghai Qingpu Project was fully completed and officially named Huawei Lianqiu Lake R&D Center. Within the R&D center, all the zoning signs of `Lianqiu Lake R&D Center` have been installed. The R&D center is divided into multiple zones, with internal roads, small trains, elevated overpasses, etc., all connected; the bridge projects such as the Moon Bridge, Rainbow Bridge, and Arch Bridge spanning Lianqiu Lake are in the finishing stage; the greening projects in the corners of the park are also being wrapped up, and Lianqiu Lake has started to store water.",
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
