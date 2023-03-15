import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    static  getDerviedStateFromError(error){
        return{
            hasError:true 
        }
    }
    componentDidMount(error,info){
        console.log(error)
        console.log(info)
    }
  render() {
    if(this.state.hasError){
        return<h1>
            something went wrong 
        </h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary