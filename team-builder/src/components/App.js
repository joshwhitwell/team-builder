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

  //Return App
  return (
    <div className='container'>
      <h1>Team Member App</h1>

      <Form />
      <TeamMember />
    </div>
  )
}
