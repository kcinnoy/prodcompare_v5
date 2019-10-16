import React from 'react'

const Result  = ({items}) => {
  return (
    <div>
    {
      items.map(item => <div>
        <div>{item.title}</div>
      </div>)
    }
  </div>
  )
}

export default Result