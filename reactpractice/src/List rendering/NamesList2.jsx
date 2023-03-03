import React from 'react'

function NamesList2() {
    const names=['ram','ravi','raj']
  return (
    <div>{
          names.map(name =><h1>{name}</h1>)
        
        }
        </div>
  )
}

export default NamesList2