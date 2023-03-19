import React, { useState } from 'react'

function HookCounterObject() {

    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
       <form>
        <input 
        type="text" 
        value={name.firstName} 
        onChange={(event)=>setName({... name, firstName: event.target.value})}/>
        <input 
        type="text" 
        value={name.lastName}  
        onChange={(event)=>setName({... name, lastName: event.target.value})}/>
        <h2> your first name is -{name.firstName}</h2>
        <h2> your last name is -{name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
       </form>
    )
}

export default HookCounterObject
//{...name,firstName:event.target.value})}/>,copy every property in the name object.and then justvoverride
//the first name field with a different value