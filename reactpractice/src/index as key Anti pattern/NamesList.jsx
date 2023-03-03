import React from 'react'
import Person from './Person'

function NameList() {
    const names=['raj','ram','ravi','raj']
    const  persons=[
        {
        id:1,
        name:'ravi',
        age:30,
        skill:'react'
        },
        {
        id:2,
        name:'raj',
        age:32,
        skill:'angular'
        },
        {id:3,
        name:'ram',
        age:30,
        skill:'vue'
        }
     ]
     //const nameList=names.map(name => <h2 key={name}>{name}</h2>)
     const nameList=names.map((name,index) =><h2 keys= {index} > {index} {name}</h2>)
     //key = index.to display the index again we are giving index.
     return <div> {nameList}</div>
    }
    export default NameList
 
