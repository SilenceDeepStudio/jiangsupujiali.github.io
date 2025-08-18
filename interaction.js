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
// ... existing code ...
