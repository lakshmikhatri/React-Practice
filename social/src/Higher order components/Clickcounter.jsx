import React, { Component } from 'react'
class Clickcounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }
    render() {
        const { count } = this.state
        return (
            <button onClick={this.incrementCount}>{this.props.name}Clicked {count} times  </button>
        )
    }
}

export default Withcounter( Clickcounter,5)
//extract count from the state and include in the Jsx.