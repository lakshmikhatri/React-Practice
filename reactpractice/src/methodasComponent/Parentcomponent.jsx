import React, { Component } from 'react'
import Childcomponent from './Childcomponent'
 class Parentcomponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName:"parent"
    }
     this.greetParent=this.greetParent.bind(this)
    }
    greetParent() {
        alert(`hello ${this.state.parentName}`)
    }
    render() {
    return (
      <div>
        <Childcomponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default Parentcomponent
//greet parent is a method.
//in child component pass method as a prop.
