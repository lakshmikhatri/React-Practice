import React,{useState,useEffect} from 'react'

function HookCounter() {
    const[count,setCount]=useState(0)
    const[name,setName]=useState('') 
    useEffect(()=>{
        console.log('UseEffect-Updating document title')
      document.title=`You Clicked ${count}times`
    },[count                    ])
      
  return (
    <div>
        <input type="text" value={name} onChange={event=>setName(event.target.value)}/>
     <button onClick ={()=>setCount(count+1)}>Click{count}times</button> 
    </div>
  )
}

export default HookCounter