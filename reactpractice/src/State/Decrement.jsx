import React, { Component } from 'react'

class Decrement extends Component {
  constructor(props) {
    super(props)

    this.state = { // this is an object
      count: 10      //this is an property
    }
  }
  decrement() {
    // //this.state.count=this.state.count+1
    // this.setState({
    //     count:this.state.count + 1//first is parameter ,it is an object  ,which sets  the statevalue
    // },()=>{console.log('callback value',this.state.count)//second is an arrow function,
    //      //here we are updating state.count value
    // }
    // )
    this.setState((prevState, props) => ({
      count: prevState.count - 1
    }))
    console.log(this.state.count);
  }
  decrementFive() {
    this.decrement()
    this.decrement()
    this.decrement()
    this.decrement()
    this.decrement()
  }
  render() {
    return (
      <div>
        <div> Count-{this.state.count}</div>
        <button onClick={() => this.decrement()}>decrement</button>
      </div>
    )
  }
}

export default Counter