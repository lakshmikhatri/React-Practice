import React from 'react'
// function Greet(){
//     return <h1>Hello good morning </h1>
// }
const DestructingEx1 =props => {
    const{name,heroName}=props
 return(
 <div>
 <h1>hello {name}  {/*instead of props.name we are using "name"*/} a.k.a  {heroName}
 </h1>

 </div>
 )
 } 
export default DestructingEx1
//destructurate in the function body.