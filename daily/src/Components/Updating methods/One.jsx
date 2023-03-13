import React, { Component } from 'react'

 class Life extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"ravi"
      }
      console.log('Life constructor')
    }
    static getDerivedStateFromProps(props,state){
      console.log('Life getDerivedStateFromProps')
      return null
    }
    componentDidMount(){
      console.log('Life ComponentDidMount ')
    }
    shouldComponentUpdate(){
        console.log('Life shouldComponentUpdate' )
        return true
    }
    getSnapshotBeforeUpdate(prevState,prevProps){
        console.log('Life getSnapshotBeforeUpdate')

    }
    componentDidUpdate(){
        console.log('Life ComponentDidUpdate ')
    }


  render() {
    console.log(' Life render')
    return (
      <div>Life</div>
    )
  }
}

export default Life