import React,{useState} from 'react'

function Mousecontainer() {
    const[display ,setDisplay]=useState(initialState)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle display</button>
        {display &&<HookMouse/>}
    </div>
  )
}

export default Mousecontainer