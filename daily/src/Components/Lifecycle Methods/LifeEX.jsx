import React, { Component } from 'react'
import Life from './Life'
 class LifeEX extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'ravi'
    }
    console.log('LifeEX constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifeEX getDerivedStateFromProps')
    return null
  }
  componentDidMount() {
    console.log('LifeEX componentDidMount')
  }
  render() {
    console.log('LifeEX render')
    return (<div>
     <h1>Life</h1>
     <h1>LifeEX</h1>
     </div>
    )
  }
}

export default LifeEX
//<LifeEX/> is an child class to the parent class.and Life is the parent component.  