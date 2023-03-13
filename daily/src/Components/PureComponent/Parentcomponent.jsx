import React, { Component,PureComponent } from 'react'
import Regularcomponent from './Regularcomponent'
import PureComp from './PureComp'

class Parentcomponent extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      name: "dibba cutting"
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "dibba cutting"
      })
    }, 2000);

  }
  render() {
    console.log('********************parent component render*******************')
    return (
      <div>
        <h1>Parent component</h1>
        <Regularcomponent name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default Parentcomponent