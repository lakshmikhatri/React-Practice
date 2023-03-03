import React from 'react'

function Childcomponent1(props) {
  return (
    <div>
        <button onClick= { ()=>props.greetHandler('child')}>greet parent</button>
        
    </div>
  )
}

export default Childcomponent1
//pass props as the parameters
//in the child component access the method using the props object
//if we have to use parameter use arrow function syntax.