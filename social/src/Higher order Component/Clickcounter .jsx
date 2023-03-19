import React, { Component } from 'react'
import WithCounter from './WithCounter'
class Clickcounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <button onClick={incrementCount}>
                {this.name.props}Clicked {count} times
            </button>
        )
    }
}

export default WithCounter(Clickcounter, 5)
//extract count from the state and include in the Jsx.