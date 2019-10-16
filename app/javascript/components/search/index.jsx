import React, { useState, useEffect, useRef } from 'react'
import ebayFetch from '../../modules/ebay-fetch'
import Result from "./results"
import BarChart from "../charts/bar"

export default function Search({}) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const ref = useRef(null)
  let vis

  useEffect(() => {
    vis = new BarChart(ref.current, results.map(data => parseFloat(data.price.value)))
  }, [results])

  function handleSubmit(e) {
    e.preventDefault()
    ebayFetch(`item_summary/search?q=${query}&limit=10`)
    .then(json => {
      setResults(json.itemSummaries || [])
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
      
      <div ref={ref} class="chart" />
    </div>
  )
}