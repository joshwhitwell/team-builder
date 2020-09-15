//Import dependencies
import React, { useState } from 'react'

//Import components
import Form from './Form'
import TeamMember from './TeamMember'

//Declare initial form values
const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

//App component
export default function App() {
  //Initialize state
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  //Form update helper--invoked in Form.js
  const updateForm = (key, value) => {
    setFormValues({...formValues, [key]: value})
  }

  //Form submit helper--invoked in Form.js
  const submitForm = () => {
    //Creates new member object from formValues
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    //Updates teamMembers state with newMember
    setTeamMembers([...teamMembers, newMember])
    //Resets formValues
    setFormValues(initialFormValues)
  }

  //Return App
  return (
    <div className='container'>
      <h1>Team Members</h1>

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
