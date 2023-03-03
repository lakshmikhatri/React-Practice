import React from 'react'
class Magic extends React.Component{
    constructor(){
        super()
        this.state={
            message:'welcome visitors '
        }
    }
    changeMessage(){//define the method
  //state of the component we need to call setstate.
  this.setState({//this method is new state of the component.
    message:"hello world"
  })//

    }
 render(){
    return(
        <div>
              <h1>{this.state.message}</h1>
              <button onClick={()=>this.changeMessage()}>Action</button>
        </div>)
        
    
    }
            }
export default Magic