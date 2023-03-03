import React, { Component } from 'react'
 class Shortcircuitoperator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin:true
      }
    }
  render() {
    return (
        this.state.isloggedin && <div>Welcome</div>
    
    )
  }
}

export default Shortcircuitoperator