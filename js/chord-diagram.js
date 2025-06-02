let chordData = null;

// 使用嵌入的数据
chordData = embeddedChordData;
drawChord("TP1"); // 默认显示疫情前

function drawChord(period) {
  // 清空原有内容
  d3.select("#chord-diagram-container").selectAll("*").remove();

  // 过滤数据
  const filtered = chordData.filter((d) => d.period === period);

  // 获取所有国家
  const countries = Array.from(
    new Set(filtered.flatMap((d) => [d.origin_country, d.dest_country]))
  );

  // 构建国家索引
  const countryIndex = new Map(countries.map((c, i) => [c, i]));

  // 构建邻接矩阵
  const matrix = Array.from({ length: countries.length }, () =>
    Array(countries.length).fill(0)
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
  const color = d3
    .scaleOrdinal()
    .domain(countries)
    .range(d3.schemeCategory10.concat(d3.schemeSet3));

  const svg = d3
    .select("#chord-diagram-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

  // 弦图生成器
  const chord = d3.chord().padAngle(0.05).sortSubgroups(d3.descending);

  const chords = chord(matrix);

  // 弧生成器
  const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

  // 弦生成器
  const ribbon = d3.ribbon().radius(innerRadius);

  // 分组弧
  const group = svg.append("g").selectAll("g").data(chords.groups).join("g");

  group
    .append("path")
    .attr("fill", (d) => color(countries[d.index]))
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
    .text((d) => countries[d.index])
    .style("font-size", "16px");

  // 弦
  svg
    .append("g")
    .attr("fill-opacity", 0.75)
    .selectAll("path")
    .data(chords)
    .join("path")
    .attr("d", ribbon)
    .attr("fill", (d) => color(countries[d.source.index]))
    .attr("stroke", "#ccc")
    .on("mousemove", function (event, d) {
      tooltip
        .style("display", "block")
        .html(
          `<strong>起点：</strong>${countries[d.source.index]}<br/>
                     <strong>终点：</strong>${countries[d.target.index]}<br/>
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
    .style("background", "rgba(255,255,255,0.95)")
    .style("border", "2px solid #ccc")
    .style("padding", "8px 12px")
    .style("border-radius", "4px")
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
