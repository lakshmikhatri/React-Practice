import React, { Component } from 'react'

class CounterEffect extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }
    componentDidMount(){
        document.title=`Clicked ${this.state.count}times`
    }
    componentDidUpdate(preprops,prevState){
        console.log('Updating document title')
        if(prevState.count ===! this.state.count){
            console.log('Updating document title')
            document.title=`Clicked ${this.state.count}times`
        }
      
    }
    
  render() {
    return (
      <div>
        <input 
        type='text' 
        value={this.state.name} 
        onChange={event=>{this.setState({name:event.target.value})
      }}/>
        <button onClick={()=>this.setState({count:this.state.count +1})}>
            Click {this.state.count} times
        </button>
      </div> 
    )
  }
}

export default CounterEffect