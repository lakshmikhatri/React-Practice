import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)
  const tick = () => {
    setCount(prevCount=>prevCount+1)
  }
  
  useEffect(() => {
    function dosomething(){
      console.log(someprop)
    }dosomething()
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [someprop])
  return (
    <div>
      {count}
    </div>
  )
}


export default IntervalHookCounter
//setCount(prevCount=>prevCount+1),if we are giving this one no need to pass [count].
//setCount(count + 1),in useEffect we have give as second argument as,[count]
//we have a prop which has to be defined as dependency