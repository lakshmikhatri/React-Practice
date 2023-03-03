import React from 'react'
// function Greet(){
//     return <h1>Hello good morning </h1>
// }
 const Greetprops =(props) =>{
 console.log(props)
 return(
 <div>
 <h1>hello {props.name} a.k.a  {props.heroName}
 </h1>
 {props.children}
 </div>
 )
 } 
export default Greetprops; 