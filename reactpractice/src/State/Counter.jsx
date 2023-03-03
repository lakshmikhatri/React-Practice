import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = { // this is an object
         count:0       //this is an property
      }
    }
    increment() {
        // //this.state.count=this.state.count+1
        // this.setState({
        //     count:this.state.count + 1//first is parameter ,it is an object  ,which sets  the statevalue
        // },()=>{console.log('callback value',this.state.count)//second is an arrow function,
    //      //here we are updating state.count value
    // }
    // )
        this.setState((prevState,props ) => ({
          count:prevState.count + 1
        }))
        console.log(this.state.count);
    }
    incrementFive(){
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
    }
  render() {
    return (    
      <div>
       <div> Count-{this.state.count}</div>
       <button onClick={()=>this.increment()}>increment</button>
       </div>          
    )
  }
}

export default Counter