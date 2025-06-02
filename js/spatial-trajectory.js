// 空间轨迹模块 JavaScript

class SpatialTrajectory {
  constructor() {
    this.months = [
      "2019-01",
      "2019-02",
      "2019-03",
      "2019-04",
      "2019-05",
      "2019-06",
      "2019-07",
      "2019-08",
      "2019-09",
      "2019-10",
      "2019-11",
      "2019-12",
      "2020-01",
      "2020-02",
      "2020-03",
      "2020-04",
      "2020-05",
      "2020-06",
      "2020-07",
      "2020-08",
      "2020-09",
      "2020-10",
      "2020-11",
      "2020-12",
      "2021-01",
      "2021-02",
      "2021-03",
      "2021-04",
      "2021-05",
      "2021-06",
      "2021-07",
      "2021-08",
      "2021-09",
      "2021-10",
      "2021-11",
      "2021-12",
      "2022-01",
      "2022-02",
      "2022-03",
      "2022-04",
      "2022-05",
    ];

    this.currentView = "analysis";
    this.init();
  }

  init() {
    this.createMonthButtons();
    this.createGridView();
    this.bindEvents();
    this.showAnalysisView(); // 默认显示分析页面
  }

  createMonthButtons() {
    const monthButtonsContainer = document.getElementById(
      "spatial-month-buttons"
    );

    this.months.forEach((month) => {
      const btn = document.createElement("button");
      btn.className = "spatial-btn";
      btn.textContent = month;
      btn.dataset.month = month;
      btn.addEventListener("click", () => this.showMonthView(month));
      monthButtonsContainer.appendChild(btn);
    });
  }

  createGridView() {
    const gridContainer = document.getElementById("spatial-grid-container");

    this.months.forEach((month) => {
      const item = document.createElement("div");
      item.className = "spatial-grid-item";
      const img = document.createElement("img");
      img.src = `./img/${month}.png`;
      img.alt = month;
      img.addEventListener("click", () => this.showMonthView(month));

      const caption = document.createElement("p");
      caption.textContent = month;
      caption.addEventListener("click", () => this.showMonthView(month));

      item.appendChild(img);
      item.appendChild(caption);
      gridContainer.appendChild(item);
    });
  }

  bindEvents() {
    // 绑定主要视图切换按钮
    document.querySelectorAll(".spatial-btn[data-view]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const view = e.target.dataset.view;
        if (view === "analysis") {
          this.showAnalysisView();
        } else if (view === "overview") {
          this.showOverviewView();
        }
      });
    });
  }

  clearActiveButtons() {
    document
      .querySelectorAll(".spatial-btn")
      .forEach((el) => el.classList.remove("active"));
  }

  hideAllViews() {
    document
      .querySelectorAll(".spatial-view")
      .forEach((view) => view.classList.remove("active"));
  }

  showAnalysisView() {
    this.clearActiveButtons();
    this.hideAllViews();

    const analysisBtn = document.querySelector(
      '.spatial-btn[data-view="analysis"]'
    );
    analysisBtn.classList.add("active");

    const analysisView = document.querySelector(".spatial-analysis-view");
    analysisView.classList.add("active");

    this.currentView = "analysis";
  }

  showOverviewView() {
    this.clearActiveButtons();
    this.hideAllViews();

    const overviewBtn = document.querySelector(
      '.spatial-btn[data-view="overview"]'
    );
    overviewBtn.classList.add("active");

    const overviewView = document.querySelector(".spatial-overview-view");
    overviewView.classList.add("active");

    this.currentView = "overview";
  }

  showMonthView(month) {
    this.clearActiveButtons();
    this.hideAllViews();

    const monthBtn = document.querySelector(
      `.spatial-btn[data-month="${month}"]`
    );
    monthBtn.classList.add("active");

    const singleView = document.querySelector(".spatial-single-view");
    singleView.classList.add("active");

    const routeImage = document.querySelector("#spatial-route-image");
    routeImage.src = `img/${month}.png`;
    routeImage.alt = `${month} 航班路线图`;

    this.currentView = month;
  }
}

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", () => {
  // 确保空间轨迹部分存在时才初始化
  if (document.getElementById("spatial-trajectory")) {
    new SpatialTrajectory();
  }
});
