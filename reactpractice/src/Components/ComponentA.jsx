import React from 'react'
import ComponentB from './ComponentB'

class ComponentA extends React.Component {
    msg = "Good Morning"
    render() {
        return <div>
            <ComponentB message={this.msg} />
        </div>
    }
}
export default ComponentA;