import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:false
      }
    }
  render() {
    return this.state.isLoggedin ?(
      <div>welcome everyone</div>
    ) :(
        <div>hello world </div>
    )
  }
}

export default User