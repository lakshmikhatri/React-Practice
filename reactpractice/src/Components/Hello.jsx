import React from 'react';
const Hello =()=>{
//     return(
//         <div className='dummyclass'>
//             <h1>good morning</h1>
//         </div>
//     )
// 
return React.createElement(
 'div',
{id:'hello', className:'dummyClass'}, //we have to use class to the object,
React.createElement('h1',null,'hello world'))//this createElement expects threeparameters
//the first parameters is a string which specifies the html tag to be render
//we need a div tag to be render.
//second parameters we dont want any addition properties so  we are defing "null".
//third parameter is the children for the html element.
//children for the div tag.
}
export default Hello