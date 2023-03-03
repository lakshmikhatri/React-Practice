import React from 'react'

function FunctionClick() {
  function clickHandler(){
  console.log('Button clicked')
  }
  return (
    <div>
      <button onClick={clickHandler}>click</button>{/*clickHandler() is a fuunction ,pass as a event handler*/}
    </div>
  )
}


export default FunctionClick