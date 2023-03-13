import React, { Component } from 'react'

 class Refs extends Component {
    constructor(props) {
      super(props)
    this.inputRef=React.createRef()
      
    } 
    componentDidMount(){
        this.inputRef.current.focus() 
            console.log(this.inputRef)
    }
    ClickHandler= ()=>{
     alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.ClickHandler}>Click</button>
      </div> 
    )
  }
}

export default Refs
//this.inputRef isa property.React.createRef() it is common to craete the refs in the constructor.so that can 
//be refeerenced through out the Component.
//the value of input property dom note which is available in dom note as a current property.