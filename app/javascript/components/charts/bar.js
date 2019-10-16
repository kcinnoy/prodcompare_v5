import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

import ebayFetch from '../../modules/ebay-fetch'

const width = 700, height = 500;

export default function BarChart({ data }) {
  const ref = useRef()

  useEffect(() => {
    console.dir(data)
    drawChart(data)
  }, [data])

  function drawChart(data) {
    
    const prices = data.map(price => parseFloat(price.value))
    const g = d3.select(ref.current)
    
    g.exit().remove();

    g.selectAll("rect")
      .data(prices)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => height - d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")

    g.selectAll("text")
      .data(prices)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => height - (10 * d) - 3)
  }

  return <svg width={width} height={height}>
    <g ref={ref} />
  </svg>
}
