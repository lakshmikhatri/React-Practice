import React, { Component } from 'react'
import LifeEx from '../Lifecycle Methods/LifeEX'

class Life extends Component {
   constructor(props) {
     super(props)
    
     this.state = {
        name:"ravi"
     }
     console.log('LifeEX constructor')
   }
   static getDerivedStateFromProps(props,state){
     console.log('LifeEX getDerivedStateFromProps')
     return null
   }
   shouldComponentUpdate(){
    console.log('LifeEx shouldComponentUpdate' )
    return true
}
getSnapshotBeforeUpdate(prevState,prevProps){
    console.log('LifeEx getSnapshotBeforeUpdate')
     return null
}
componentDidUpdate(){
    console.log('LifeEX ComponentDidUpdate ')
}
   componentDidMount(){
     console.log('LifeEX ComponentDidMount ')
   }
   ChangeState=()=>
   {
    this.setState({
      name:'ram'
    })
   }
 render() {
   console.log('LifeEX render')
   return (
   <div>
       <div>Life</div>
       <button onClick={this.changeState}>Change State</button> 
       <LifeEX /> 
       </div>)
 }
}

export default Life