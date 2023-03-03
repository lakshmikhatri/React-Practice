/* if /else using in conditional rendering*/
import React, { Component } from 'react'

class Usergreetings extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isloggedin:false
    }
  }
    render() {
      let message
      if(this.state.isloggedin){
        message=<div>welcome everyone</div>
      }
      else{
        message=<div>welcome greetings</div>
      }
      return <div>{message}</div>
        // if(this.state.isloggedin){
        // return(<div>
        //     Hello everyone
        // </div>
        // )
        // }
        // else{
        // return(
        // <div>
        //     Welcome everyone
        // </div>
        // )
        // }
    // return (
    //   <div>
    //     <div>Hello everyone</div>
    //     <div>Welcome everyone</div>
    //   </div>
   // )
  }
}

export default Usergreetings