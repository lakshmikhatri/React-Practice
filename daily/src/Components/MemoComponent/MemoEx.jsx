import React, { Component } from 'react'
// import Regularcomponent from './Regularcomponent'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'

class MemoEX extends Component {
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
                <h1>Memo Example</h1>
                <MemoComp name={this.state.name} />
                {/* <Regularcomponent name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default MemoEX