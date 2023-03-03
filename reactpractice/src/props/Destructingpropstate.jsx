import React from 'react'
// function Greet(){
//     return <h1>Hello good morning </h1>
// }
const Destructingpropstate =({name,heroName}) /*this is the destructure*/ =>{
 return(
 <div>
 <h1>hello {name}  {/*instead of props.name we are using "name"*/} a.k.a  {heroName}
 </h1>

 </div>
 )
 } 
export default Destructingpropstate
 

