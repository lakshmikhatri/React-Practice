import React, { Component } from 'react';
import { Button } from '@mui/material';

class Counter extends Component {
    state = {
        qty: 1
    }
    decrHandler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    render() {
        return (
            <div>
                <h1 >Qty value:{this.state.qty}</h1>
                <Button variant="contained" onClick={this.decrHandler}>decr</Button>
                <Button variant="contained" onClick={this.incrHandler}>incr</Button>
            </div>
        )
    }
}
export default Counter