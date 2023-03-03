import React, { Component } from 'react'

export class ComponentB extends Component {
    render() {
        return (
            <div>
                <pre>{this.props.message}</pre>
            </div>
        )
    }
}
export default ComponentB