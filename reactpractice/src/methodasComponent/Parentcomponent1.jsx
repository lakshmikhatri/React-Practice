import React, { Component } from 'react'
import Childcomponent1 from './Childcomponent1'
 class Parentcomponent1 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName:"parent"
    }
     this.greetParent=this.greetParent.bind(this)
    }
    greetParent(childname) {
        alert(`hello ${this.state.parentName} from ${childname}`)
    }
    render() {
    return (
      <div>
        <Childcomponent1 greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default Parentcomponent1