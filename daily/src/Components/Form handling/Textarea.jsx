import React, { Component } from 'react'

class Textarea extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       comments:''
    }
  }
  handleCommentsChange= event =>
    {
     this.setState({
      comments:event.target.value
     })
    }
render(){ 
  return (
    <form>
      
      <div>
        <label>comments</label>
        <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
      </div>
    </form>
  )
}
}  
export default Textarea