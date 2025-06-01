d3.csv("data/stacked_area_top10.csv").then(function(data) {
    // 数据预处理
    data.forEach(d => {
        d.month = d3.timeParse("%Y%m%d")(d.month);
        d.flight_count = +d.flight_count;
    });

    // 按国家分组
    const countries = Array.from(new Set(data.map(d => d.country))).filter(d => d);
    // 构造宽表
    const dataByMonth = d3.rollup(
        data,
        v => {
            const obj = {month: v[0].month};
            countries.forEach(c => obj[c] = 0);
            v.forEach(d => obj[d.country] = d.flight_count);
            return obj;
        },
        d => +d.month
    );
    const stackedData = Array.from(dataByMonth.values()).sort((a, b) => a.month - b.month);

    // 画布设置
    const margin = {top: 40, right: 200, bottom: 40, left: 70},
        width = 1100 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

    const svg = d3.select("#stacked-area-container")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

    const chartArea = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // X轴
    const x = d3.scaleTime()
        .domain(d3.extent(stackedData, d => d.month))
        .range([0, width]);
    const xAxis = d3.axisBottom(x)
        .ticks(d3.timeMonth.every(3))
        .tickFormat(d3.timeFormat("%Y-%m"));

    const xAxisG = chartArea.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(xAxis)
        .selectAll("text")
        .attr("transform", "rotate(-40)")
        .style("text-anchor", "end");

    // Y轴
    const y = d3.scaleLinear()
        .domain([0, d3.max(countries, c => d3.max(stackedData, d => d[c]))])
        .range([height, 0]);
    chartArea.append("g")
        .call(d3.axisLeft(y));

    // 颜色
    const color = d3.scaleOrdinal()
        .domain(countries)
        .range(d3.schemeCategory10.concat(d3.schemeSet3));

    // Tooltip
    const tooltip = d3.select("body")
        .append("div")
        .attr("class", "stacked-tooltip")
        .style("position", "absolute")
        .style("background", "rgba(255,255,255,0.95)")
        .style("border", "1px solid #ccc")
        .style("padding", "8px 12px")
        .style("border-radius", "4px")
        .style("pointer-events", "none")
        .style("font-size", "16px")
        .style("display", "none")
        .style("z-index", 10);

    // 绘制堆叠面积的 area 生成器
    const area = d3.area()
        .x(d => x(d.data.month))
        .y0(d => y(d[0]))
        .y1(d => y(d[1]));

    // 新增：用于记录隐藏的国家
    const hiddenCountries = new Set();

    // 渲染堆叠面积图函数
    function renderStackedArea() {
        // 过滤掉隐藏的国家
        const visibleCountries = countries.filter(c => !hiddenCountries.has(c));
        const stack = d3.stack()
            .keys(visibleCountries)
            .order(d3.stackOrderNone)
            .offset(d3.stackOffsetNone);

        const series = stack(stackedData);

        // 重新计算每个月的总和，动态设置y轴domain
        const maxY = d3.max(stackedData, d =>
            d3.sum(visibleCountries, c => d[c])
        );
        y.domain([0, maxY || 1]); // 防止全隐藏时maxY为0

        // 更新Y轴
        chartArea.select("g").call(d3.axisLeft(y));

        // 更新面积
        chartArea.selectAll(".layer")
            .data(series, d => d.key)
            .join(
                enter => enter.append("path")
                    .attr("class", "layer")
                    .attr("fill", d => color(d.key))
                    .attr("opacity", 0.85)
                    .attr("d", area),
                update => update
                    .attr("fill", d => color(d.key))
                    .attr("d", area),
                exit => exit.remove()
            )
            .on("mousemove", function(event, d) {
                const [mx] = d3.pointer(event, this);
                const xm = x.invert(mx);
                const idx = d3.bisector(e => e.data.month).left(d, xm, 1);
                const datum = d[idx - 1];
                if (!datum) return;
                tooltip
                    .style("display", "block")
                    .html(
                        `<strong>国家：</strong>${d.key}<br/>
                        <strong>月份：</strong>${d3.timeFormat("%Y-%m")(datum.data.month)}<br/>
                        <strong>航班数：</strong>${datum.data[d.key]}`
                    )
                    .style("left", (event.pageX + 15) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseleave", function() {
                tooltip.style("display", "none");
            });
    }

    // 图例
    const legendHeight = height; // 图表高度
    const legendItemCount = countries.length;
    const legendItemHeight = 24; // 单个图例项高度（含间距）
    const legendSpacing = legendHeight / legendItemCount; // 等距分布

    const legend = svg.append("g")
        .attr("class", "legend-group")
        .attr("transform", `translate(${width + margin.left + 30},${margin.top})`);

    const legendItems = legend.selectAll(".legend")
        .data(countries)
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", (d, i) => `translate(0,${i * legendSpacing})`)
        .style("cursor", "pointer")
        .on("click", function(event, d) {
            // 切换隐藏状态
            if (hiddenCountries.has(d)) {
                hiddenCountries.delete(d);
            } else {
                hiddenCountries.add(d);
            }
            // 更新图例样式
            d3.select(this).classed("legend-disabled", hiddenCountries.has(d));
            // 重新渲染
            renderStackedArea();
        });

    legendItems.append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .attr("fill", d => color(d));

    legendItems.append("text")
        .attr("x", 24)
        .attr("y", 13)
        .text(d => d)
        .style("font-size", "16px");

    // 初始渲染
    renderStackedArea();

    // 缩放功能
    const zoom = d3.zoom()
        .scaleExtent([1, 10])
        .translateExtent([[0, 0], [width, height]])
        .extent([[0, 0], [width, height]])
        .on("zoom", zoomed);

    svg.call(zoom);

    function zoomed(event) {
        const newX = event.transform.rescaleX(x);
        // 更新面积
        chartArea.selectAll(".layer")
            .attr("d", d3.area()
                .x(d => newX(d.data.month))
                .y0(d => y(d[0]))
                .y1(d => y(d[1]))
            );
        // 更新X轴
        chartArea.select("g")
            .call(
                d3.axisBottom(newX)
                .ticks(d3.timeMonth.every(3))
                .tickFormat(d3.timeFormat("%Y-%m"))
            )
            .selectAll("text")
            .attr("transform", "rotate(-40)")
            .style("text-anchor", "end");
    }
});