import React from "react";
import { useState } from "react";
const App = () => {


    const  [inputList,setInputList] =useState(" ");
    const  itemEvent =(event)=>{
        setInputList(event.target.value)    
    };
  return (
     <>
<div className="main_div">
<div className="center_div">
    <br/>
    <h1>
        Todo List
    </h1>
    <br/>
    <input type="text" placeholder="Add a items" onChange={itemEvent}/>
    <button> +</button>
    <ol>
        <li>{inputList}</li>
    </ol>
</div>
</div>
</>
);
};
export default App;