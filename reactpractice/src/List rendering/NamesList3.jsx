import React from 'react'

function NamesList3() {
  const names = ['ram', 'raj', 'ravi']
  const NameList = names.map(name => <h1>{name}</h1>)
  return (
    <div>{NameList}</div>
  )
}

export default NamesList3