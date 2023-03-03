import React from 'react'

function Childcomponent(props) {
  return (
    <div>
        <button onClick= {props.greetHandler}>greet parent</button>
        
    </div>
  )
}

export default Childcomponent
//pass props as the parameters