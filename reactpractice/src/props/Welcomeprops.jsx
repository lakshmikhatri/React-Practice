import React, {Component} from 'react'//Component class from the react.
class Welcomeprops extends React.Component{
render(){
 return<h1>Welcome {this.props.name} a.k.a {this.props.heroName} </h1>
  }
}
export default Welcomeprops