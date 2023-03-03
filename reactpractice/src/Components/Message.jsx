import React from "react";
import Button from '@mui/material/Button';

class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "Hello"
        }
    }
    gmhandler = () => {
        this.setState({ msg: "Good Morning" })
    }
    gahandler = () => {
        this.setState({ msg: "Good Afternoon" })
    }
    gnhandler = () => {
        this.setState({ msg: "Good Night" })
    }
    pshandler = ()=>{
        this.setState({msg:"Welcome To ProStack"})
    }
    render() {
        console.log("Render method executing")
        return <div>
            <h2>message component</h2>
            <hr />
            <h2>Message Value: {this.state.msg}</h2>
            <Button variant="contained" onClick={this.gmhandler}>GM</Button>
            <Button variant="contained" onClick={this.gahandler}>GA</Button>
            <Button variant="contained" onClick={this.gnhandler}>GN</Button>
            <Button variant="contained" onClick={this.pshandler}>PS</Button>
        </div>
    }
}
export default Message