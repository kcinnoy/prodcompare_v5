import React, { useState } from 'react'
import ebayFetch from '../../modules/ebay-fetch'
import Result from "./results"
import Chart from "../charts/bar"

export default function Search({}) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

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
      
      <Chart data={results.map(item => item.price)} />
    </div>
  )
}