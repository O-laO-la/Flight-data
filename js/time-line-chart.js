// 时间折线图JavaScript代码
(function () {
  // 全局变量
  let allData = [];
  let activeAirports = new Set();
  let focusLine;

  // 初始化图表配置
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const width = 900 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;
  const svg = d3
    .select("#time-line-svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleBand().range([0, width]).padding(0.1);

  const y = d3.scaleLinear().range([height, 0]);

  const color = d3.scaleOrdinal(d3.schemeTableau10);

  // 添加网格线
  svg
    .append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickSize(-height).tickFormat(""));

  svg
    .append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(y).tickSize(-width).tickFormat(""));

  // 添加X轴和Y轴
  const xAxis = svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .attr("class", "x-axis");

  const yAxis = svg.append("g").attr("class", "y-axis");

  // 添加轴标题
  svg
    .append("text")
    .attr("class", "axis-title")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 10)
    .text("月份");

  svg
    .append("text")
    .attr("class", "axis-title")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .text("航班数量");

  // 添加焦点线
  focusLine = svg
    .append("line")
    .attr("class", "focus-line")
    .attr("y1", 0)
    .attr("y2", height);

  // 创建线生成器
  const line = d3
    .line()
    .x((d) => x(d.month) + x.bandwidth() / 2)
    .y((d) => y(d.flight_count))
    .curve(d3.curveMonotoneX); // 选择器引用
  const yearSelect = d3.select("#time-line-chart #yearSelect");
  const originDestinationSelect = d3.select(
    "#time-line-chart #originDestinationSelect"
  );
  const continentSelect = d3.select("#time-line-chart #continentSelect");
  const tooltip = d3.select("#time-line-chart #time-line-tooltip");
  const legend = d3.select("#time-line-chart #time-line-legend"); // 加载数据
  async function loadData() {
    try {
      console.log("开始加载数据...");

      // 使用嵌入的数据而不是从CSV文件加载
      const originData = embeddedOriginData;
      const destinationData = embeddedDestinationData;

      console.log("数据加载成功:", originData.length, destinationData.length);

      // 处理数据
      originData.forEach((d) => {
        d.type = "origin";
        d.flight_count = +d.flight_count;
        d.month = +d.month;
        d.year = +d.year;
      });

      destinationData.forEach((d) => {
        d.type = "destination";
        d.flight_count = +d.flight_count;
        d.month = +d.month;
        d.year = +d.year;
      });

      // 合并数据
      allData = [...originData, ...destinationData];

      // 填充大洲选择器（添加"所有洲"选项）
      const continents = [...new Set(allData.map((d) => d.continent))];
      continentSelect.append("option").attr("value", "").text("所有洲");
      continents.forEach((continent) => {
        continentSelect
          .append("option")
          .attr("value", continent)
          .text(continent);
      });

      // 初始化图表
      updateChart();

      // 添加事件监听器
      yearSelect.on("change", updateChart);
      originDestinationSelect.on("change", updateChart);
      continentSelect.on("change", updateChart);

      // 添加鼠标交互监听
      svg
        .append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "transparent")
        .on("mousemove", handleMouseMove)
        .on("mouseout", handleMouseOut);
    } catch (error) {
      console.error("Error loading data:", error);
      alert("数据加载失败，请检查路径是否正确");
    }
  }

  // 更新图表
  function updateChart() {
    const selectedYear = yearSelect.property("value");
    const selectedType = originDestinationSelect.property("value");
    const selectedContinent = continentSelect.property("value");

    // 过滤数据
    let filteredData = allData.filter((d) => {
      return (
        d.year.toString() === selectedYear &&
        selectedType === d.type &&
        (selectedContinent === "" || d.continent === selectedContinent)
      );
    });

    // 获取唯一的机场列表
    const airports = [...new Set(filteredData.map((d) => d.airport))];

    // 如果没有数据，显示提示信息
    if (filteredData.length === 0) {
      svg.selectAll(".line").remove();
      legend.html(
        "<div style='color: #666; font-style: italic;'>没有匹配的数据</div>"
      );
      return;
    }

    // 设置X轴定义域（月份）
    const months = [...new Set(filteredData.map((d) => d.month))].sort(
      (a, b) => a - b
    );
    x.domain(months);

    // 设置Y轴定义域（航班数量）
    const maxFlightCount = d3.max(filteredData, (d) => +d.flight_count);
    y.domain([0, maxFlightCount * 1.1]); // 留出一些空间

    // 更新坐标轴
    xAxis
      .transition()
      .duration(500)
      .call(
        d3.axisBottom(x).tickFormat((d) => {
          const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          return monthNames[d - 1];
        })
      );

    yAxis.transition().duration(500).call(d3.axisLeft(y));

    // 按机场分组数据
    const airportData = d3.group(filteredData, (d) => d.airport);

    // 绘制线条
    const lines = svg
      .selectAll(".line")
      .data(Array.from(airportData), (d) => d[0]);

    // 进入阶段
    lines
      .enter()
      .append("path")
      .attr("class", "line")
      .attr("d", (d) => line(d[1]))
      .attr("stroke", (d) => color(d[0]))
      .attr("opacity", (d) =>
        activeAirports.has(d[0]) || activeAirports.size === 0 ? 1 : 0.2
      )
      .merge(lines)
      .transition()
      .duration(750)
      .attr("d", (d) => line(d[1]))
      .attr("stroke", (d) => color(d[0]));

    // 退出阶段
    lines.exit().remove();

    // 更新图例
    updateLegend(airports);
  }

  // 更新图例
  function updateLegend(airports) {
    legend.html("");

    airports.forEach((airport) => {
      const isActive = activeAirports.has(airport) || activeAirports.size === 0;

      const item = legend
        .append("div")
        .attr("class", "legend-item")
        .style("opacity", isActive ? 1 : 0.5)
        .on("click", () => toggleAirport(airport));

      item
        .append("div")
        .attr("class", "legend-color")
        .style("background-color", color(airport));

      item.append("span").attr("class", "legend-text").text(airport);
    });
  }

  // 切换机场显示状态
  function toggleAirport(airport) {
    if (activeAirports.has(airport)) {
      activeAirports.delete(airport);
    } else {
      activeAirports.add(airport);
    }

    // 如果没有选中的机场，显示所有
    if (activeAirports.size === 0) {
      svg.selectAll(".line").attr("opacity", 1);
    } else {
      svg
        .selectAll(".line")
        .attr("opacity", (d) => (activeAirports.has(d[0]) ? 1 : 0.2));
    }

    updateLegend([...new Set(allData.map((d) => d.airport))]);
  }

  // 鼠标移动处理函数
  function handleMouseMove(event) {
    const mouse = d3.pointer(event, svg.node());
    const xPos = mouse[0];

    // 显示焦点线
    focusLine.attr("opacity", 1).attr("x1", xPos).attr("x2", xPos);

    // 找到最接近的月份
    const closestMonth = findClosestMonth(xPos);
    if (!closestMonth) return;

    // 获取当前选择的年份和类型
    const selectedYear = yearSelect.property("value");
    const selectedType = originDestinationSelect.property("value");
    const selectedContinent = continentSelect.property("value");

    // 过滤数据
    let filteredData = allData.filter((d) => {
      return (
        d.year.toString() === selectedYear &&
        selectedType === d.type &&
        (selectedContinent === "" || d.continent === selectedContinent) &&
        d.month === closestMonth
      );
    });

    // 显示工具提示
    if (filteredData.length > 0) {
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const formattedMonth = monthNames[closestMonth - 1];

      // 构建工具提示内容
      let tooltipContent = `<div><strong>${formattedMonth} ${selectedYear}</strong></div>`;

      // 按机场分组并添加到工具提示
      const airportData = d3.group(filteredData, (d) => d.airport);
      airportData.forEach((value, key) => {
        const flightCount = value[0].flight_count;
        tooltipContent += `
            <div style="margin-top:5px; display:flex; align-items:center;">
              <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background-color:${color(
                key
              )}; margin-right:5px;"></span>
              <span><strong>${key}:</strong> ${flightCount}</span>
            </div>
          `;
      });

      // 更新工具提示
      tooltip
        .html(tooltipContent)
        .style("left", event.pageX + 15 + "px")
        .style("top", event.pageY - 28 + "px")
        .style("opacity", 0.9);
    }
  }

  // 找到最接近鼠标位置的月份
  function findClosestMonth(xPos) {
    const months = x.domain();
    let closestMonth = null;
    let minDistance = Infinity;

    months.forEach((month) => {
      const monthPos = x(month) + x.bandwidth() / 2;
      const distance = Math.abs(monthPos - xPos);

      if (distance < minDistance) {
        minDistance = distance;
        closestMonth = month;
      }
    });

    return closestMonth;
  }

  // 鼠标离开处理函数
  function handleMouseOut() {
    // 隐藏焦点线和工具提示
    focusLine.attr("opacity", 0);
    tooltip.style("opacity", 0);
  }

  // 启动数据加载
  loadData();
})();
