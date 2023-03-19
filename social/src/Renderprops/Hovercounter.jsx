import React, { Component } from 'react'

 class Hovercounter extends Component {
  render() {
    const{count,incrementCount}=this.props
    return (
    <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
    )
  }
}

export default Hovercounter