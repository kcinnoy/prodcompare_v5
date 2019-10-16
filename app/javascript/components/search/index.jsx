import React, { useState } from 'react'
import ebayFetch from '../../modules/ebay-fetch'
import Result from "../Results"
import Chart from "../charts/barChart"



export default function Search({}) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    ebayFetch(`item_summary/search?q=${query}`)
    .then(json => {
      setResults(json.itemSummaries)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
      <Result items={results} />
      <Chart />
    </div>
  )
}