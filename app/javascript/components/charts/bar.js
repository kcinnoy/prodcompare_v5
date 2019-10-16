import * as d3 from 'd3'

export default function BarChart( id, data ) {

  const width = 700, height = 500;
  const svg = d3.select(id).append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("margin-left", 100);

  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 70)
    .attr("y", (d, i) => height - d)
    .attr("width", 65)
    .attr("height", (d, i) => d * 10)
    .attr("fill", "green")

  svg.selectAll("text")
  .append("svg")
    .data(data)
    .enter()
    .append("text")
    .text((d) => d)
    .attr("x", (d, i) => i * 70)
    .attr("y", (d, i) => height - (10 * d) - 3)

}
