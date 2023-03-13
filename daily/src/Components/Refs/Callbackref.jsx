import React, { Component } from 'react'

 class Callbackref extends Component {
    constructor(props) {
      super(props)
    this.inputRef=React.createRef()
    this.CbRef=null
    this.setCbRef=(element) =>{
     this.CbRef=element
    }
      
    } 
    componentDidMount(){
        if(this.cbRef){
           this.cbRef.focus()

        }
   {

   }     //this.inputRef.current.focus() 
            //console.log(this.inputRef)
    }
    ClickHandler= ()=>{
     alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setCbRef}/>
        <button onClick={this.ClickHandler}>Click</button>
      </div> 
    )
  }
}

export default Callbackref