import React from 'react'

function NamesList() {
    const names=['ram','raj','ravi']
  return (
    <div>
        <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
    </div>
  )
}

export default NamesList