import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo Component')
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoComp)





//in paranthesis we are destructing name.
//we have to render  in the div.