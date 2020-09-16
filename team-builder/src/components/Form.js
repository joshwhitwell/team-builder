//Import dependencies
import React, { useEffect } from 'react'

//Form component
export default function Form(props) {
    //Deconstruct props
    const { formValues, updateForm, submitForm, memberToEdit, memberEditer } = props

    //Input tags onChange helper
    const onChange = event => {
        //Deconstructs input name and value from event object
        const { name, value } = event.target
        //Invokes updateForm helper with name and value
        updateForm(name, value)
    }

    //Form tag onSubmit helper
    const onSubmit = event => {
        if (memberToEdit.name) {
            event.preventDefault()
            memberEditer()
        } else {
            //Prevents page reload
            event.preventDefault()
            //Invokes submitForm helper
            submitForm()
        }
    }

    //Return Form
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
                    <button disabled={!formValues.email || !formValues.name || !formValues.role}>Submit</button>
                </div>
            </div>
        </form>
    )
}