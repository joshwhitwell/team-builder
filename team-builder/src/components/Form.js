import React from 'react'

export default function Form(props) {
  const { formValues, updateForm, submitForm } = props

  const onChange = event => {
    const { name, value } = event.target
    updateForm(name, value)
  }

  const onSubmit = event => {
    event.preventDefault()
    submitForm()
  }

  return (
    <form className='container' onSubmit={onSubmit}>
      <div>
        <label>Name
              <input 
              type='text'
              name='name'
              onChange={onChange}
              value={formValues.name}
              placeholder='name'
              maxLength='30'
              />
        </label>

        <label>Email
          <input
            type='email'
            name='email'
            onChange={onChange}
            value={formValues.email}
            placeholder='email'
            maxLength='30'
          />
        </label>

        <label>Role
          <select
            name='role'
            value={formValues.role}
            onChange={onChange}>
              <option value='select role'>-- select role --</option>
              <option value='Front End Engineer'>Front End Engineer</option>
              <option value='Back End Engineer'>Back End Engineer</option>
              <option value='Project Manager'>Project Manager</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}