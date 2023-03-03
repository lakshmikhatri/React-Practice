import React from 'react'
import Person from './Person'

function NameList4() {
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
     const personalList=persons.map(person =><Person key={person.id}person={person}/>)
     return <div> {personalList}</div>
    }
 

export default NameList4
//personList=person.map,person as a parameter,which is passed as a  props to the persons parameter.
//in the person component,destructure the prop right in the parameter.