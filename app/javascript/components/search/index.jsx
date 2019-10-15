import React, { useState } from 'react'
import ebayFetch from '../../modules/ebay-fetch'

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

  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <input type="submit" value="Search" />
    </form>

    

    <div>
      {
        results.map(item => <div>
          <div>{item.title}</div>
        </div>)
      }
    </div>

  </div>
}