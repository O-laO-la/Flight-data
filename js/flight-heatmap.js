// 航班热力图时间轴控制脚本
document.addEventListener("DOMContentLoaded", function () {
  const timeSlider = d3.select("#heatmap-time-slider");
  const displayImage = d3.select("#heatmap-display-image");
  const dateLabel = d3.select("#heatmap-date-label");

  // 使用嵌入的数据初始化热力图
  function initializeHeatmap() {
    try {
      const data = embeddedHeatmapData;

      // 更新时间条的最大值
      timeSlider.attr("max", data.length - 1);

      // 初始化显示第一张图片
      updateImage(data[0]);

      // 创建时间标签
      createTimeLabels(data);

      // 监听时间条变化
      timeSlider.on("input", function () {
        const selectedIndex = +this.value;
        updateImage(data[selectedIndex]);
      });

      // 更新图片和日期标签的函数
      function updateImage(imageData) {
        if (!imageData) return;

        // 添加加载效果
        displayImage.classed("heatmap-loading", true);

        // 添加图片路径前缀（使用相对路径）
        const imagePath = `./data/heatmap/${imageData.filename}`;
        displayImage.attr("src", imagePath);
        dateLabel.text(imageData.date);

        // 图片加载完成后移除加载效果
        displayImage.on("load", function () {
          d3.select(this)
            .classed("heatmap-loading", false)
            .transition()
            .duration(300)
            .style("opacity", 1);
        });

        // 处理图片加载错误
        displayImage.on("error", function () {
          d3.select(this).classed("heatmap-loading", false);
          dateLabel.text(`${imageData.date} - 图片加载失败`);
          console.error("图片加载失败:", imagePath);
        });
      }

      // 创建时间标签
      function createTimeLabels(data) {
        const labelsContainer = d3.select(".heatmap-slider-labels");
        if (labelsContainer.empty()) return;

        const firstDate = data[0]?.date || "";
        const lastDate = data[data.length - 1]?.date || "";

        labelsContainer.html(`
        <span>${firstDate}</span>
        <span>${lastDate}</span>
      `);
      }

      // 键盘控制
      document.addEventListener("keydown", function (event) {
        const currentIndex = +timeSlider.property("value");
        const maxIndex = +timeSlider.attr("max");

        if (event.key === "ArrowLeft" && currentIndex > 0) {
          timeSlider.property("value", currentIndex - 1);
          updateImage(data[currentIndex - 1]);
          event.preventDefault();
        } else if (event.key === "ArrowRight" && currentIndex < maxIndex) {
          timeSlider.property("value", currentIndex + 1);
          updateImage(data[currentIndex + 1]);
          event.preventDefault();
        }
      });

      // 自动播放功能（可选）
      let autoPlay = false;
      let autoPlayInterval;

      function startAutoPlay() {
        if (autoPlay) return;
        autoPlay = true;
        autoPlayInterval = setInterval(() => {
          const currentIndex = +timeSlider.property("value");
          const maxIndex = +timeSlider.attr("max");
          const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;

          timeSlider.property("value", nextIndex);
          updateImage(data[nextIndex]);
        }, 1000);
      }

      function stopAutoPlay() {
        autoPlay = false;
        if (autoPlayInterval) {
          clearInterval(autoPlayInterval);
          autoPlayInterval = null;
        }
      }

      // 鼠标悬停时停止自动播放，离开时恢复
      const heatmapContainer = d3.select("#flight-heatmap");
      heatmapContainer.on("mouseenter", stopAutoPlay);
      // 如果需要自动播放，可以取消下面这行的注释
      // heatmapContainer.on('mouseleave', startAutoPlay);
    } catch (error) {
      console.error("初始化热力图失败:", error);
      dateLabel.text("数据加载失败");
      displayImage.attr("src", "").attr("alt", "图片加载失败");

      // 显示错误信息
      const container = d3.select(".heatmap-image-container");
      container
        .append("div")
        .style("color", "#ef4444")
        .style("font-size", "1.1rem")
        .style("margin-top", "20px")
        .text("热力图数据加载失败，请检查数据文件是否存在。");
    }
  }

  // 初始化热力图
  initializeHeatmap();
});
