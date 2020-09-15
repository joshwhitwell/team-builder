//Import dependencies
import React, { useState } from 'react'

import Form from './Form'
import TeamMember from './TeamMember'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

//App component
export default function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (key, value) => {
    setFormValues({...formValues, [key]: value})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeamMembers([...teamMembers, newMember])
    setFormValues(initialFormValues)
  }

  //Return App
  return (
    <div className='container'>
      <h1>Team Member App</h1>

      <Form 
      formValues={formValues}
      updateForm={updateForm}
      submitForm={submitForm}
      />

      {
        teamMembers.map((member, index) => 
          <TeamMember key={index} info={member}/>
        )
      }
    </div>
  )
}
