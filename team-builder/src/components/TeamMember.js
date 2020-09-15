//Import dependencies
import React from 'react'

//TeamMember component
export default function TeamMember(props) {
    //Deconstruct props
    const { name, email, role } = props.info

    //Return TeamMember
    return (
        <div className='container'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    )
}