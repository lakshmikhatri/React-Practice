import React, { Component } from 'react'
//import LifeEX from './LifeEX'

export class Life extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "ravi"
    }
    console.log('Life constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Life getDerivedStateFromProps')
    return null
  }
  componentDidMount() {
    console.log('Life ComponentDidMount ')
  }
  render() {
    console.log(' Life render')
    return (
      <div>Life</div>
    )
  }
}

export default Life