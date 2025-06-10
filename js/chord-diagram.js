let chordData = null;

// 使用嵌入的数据
chordData = embeddedChordData;

// 1. 全局收集所有国家，建立固定顺序和颜色映射
const allCountries = Array.from(
  new Set(chordData.flatMap((d) => [d.origin_country, d.dest_country]))
);
const color = d3
  .scaleOrdinal()
  .domain(allCountries)
  .range(d3.schemeCategory10.concat(d3.schemeSet3));

// 2. drawChord始终用allCountries
drawChord("TP1"); // 默认显示疫情前

function drawChord(period) {
  // 清空原有内容
  d3.select("#chord-diagram-container").selectAll("*").remove();

  // 过滤数据
  const filtered = chordData.filter((d) => d.period === period);

  // 只保留本期出现的国家，但顺序和索引来自allCountries
  const countries = allCountries.filter(
    (c) =>
      filtered.some((d) => d.origin_country === c || d.dest_country === c)
  );

  // 构建国家索引（基于allCountries）
  const countryIndex = new Map(allCountries.map((c, i) => [c, i]));

  // 构建邻接矩阵（基于allCountries长度）
  const matrix = Array.from({ length: allCountries.length }, () =>
    Array(allCountries.length).fill(0)
  );
  filtered.forEach((d) => {
    const i = countryIndex.get(d.origin_country);
    const j = countryIndex.get(d.dest_country);
    matrix[i][j] = +d.flight_count;
  });

  // 画布设置
  const width = 700,
    height = 750,
    innerRadius = 270,
    outerRadius = 290;

  const svg = d3
    .select("#chord-diagram-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

  // 弦图生成器
  const chord = d3.chord().padAngle(0.05).sortSubgroups(d3.descending);

  // 只显示本期有数据的国家对应的分组和弦
  // 但矩阵和索引始终基于allCountries
  const chords = chord(matrix);

  // 弧生成器
  const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

  // 弦生成器
  const ribbon = d3.ribbon().radius(innerRadius);

  // 分组弧
  const group = svg.append("g").selectAll("g")
    .data(chords.groups.filter(d => countries.includes(allCountries[d.index])))
    .join("g");

  group
    .append("path")
    .attr("fill", (d) => color(allCountries[d.index]))
    .attr("stroke", "#fff")
    .attr("d", arc);

  // 分组标签
  group
    .append("text")
    .each((d) => {
      d.angle = (d.startAngle + d.endAngle) / 2;
    })
    .attr("dy", ".35em")
    .attr(
      "transform",
      (d) => `
            rotate(${(d.angle * 180) / Math.PI - 90})
            translate(${outerRadius + 18})
            ${d.angle > Math.PI ? "rotate(180)" : ""}
        `
    )
    .attr("text-anchor", (d) => (d.angle > Math.PI ? "end" : "start"))
    .text((d) => allCountries[d.index])
    .style("font-size", "16px");

  // 弦
  svg
    .append("g")
    .attr("fill-opacity", 0.75)
    .selectAll("path")
    .data(chords)
    .join("path")
    .filter(d => countries.includes(allCountries[d.source.index]) && countries.includes(allCountries[d.target.index]))
    .attr("d", ribbon)
    .attr("fill", (d) => color(allCountries[d.source.index]))
    .attr("stroke", "#ccc")
    .on("mousemove", function (event, d) {
      tooltip
        .style("display", "block")
        .html(
          `<strong>起点：</strong>${allCountries[d.source.index]}<br/>
                     <strong>终点：</strong>${allCountries[d.target.index]}<br/>
                     <strong>航班数：</strong>${
                       matrix[d.source.index][d.target.index]
                     }`
        )
        .style("left", event.pageX + 15 + "px")
        .style("top", event.pageY - 28 + "px");
    })
    .on("mouseleave", function () {
      tooltip.style("display", "none");
    });

  // Tooltip
  const tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "chord-tooltip")
    .style("position", "absolute")
    .style("background", "rgba(20, 30, 60, 0.97)") // 深蓝色背景
    .style("color", "#fff") // 白色文字
    .style("border", "2px solid #3af") // 蓝色边框
    .style("box-shadow", "0 0 16px #3af, 0 0 4px #fff inset") // 发光效果
    .style("padding", "10px 16px")
    .style("border-radius", "8px")
    .style("pointer-events", "none")
    .style("font-size", "16px")
    .style("display", "none")
    .style("z-index", 10);
}

// 绑定按钮事件
document.querySelectorAll(".period-btn").forEach((btn) => {
  btn.onclick = function () {
    drawChord(this.dataset.period);
  };
});
