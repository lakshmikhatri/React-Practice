import React, { Component } from 'react'

 class Eventbind2 extends Component {
  constructor(props){ 
    super(props)
  
    this.state = {
       message:"hello"
    }
  }
    clickHandler(){
      this.setState({
   message:"goodbye"
   })
 console.log(this)
  }


render() {
    return (
      <div>
        <div>{this.state.message}</div> 
        <button onClick={()=>this.clickHandler()}>click</button>
        
      </div> 
    )
  }
}
export default Eventbind2



//within the constructor a call to super and a state property called message initialize to hello.
//content with in the div tag.
//onclick is a attribute and we are passing the event handler within the curly braces.
// to change state  we need to use the setstate method we need to change the message as good bye.