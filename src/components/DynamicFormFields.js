import React, { useState } from 'react'

const DynamicFormFields = () => {

    const [formFields, setFormFields] = useState([
        {
            name: "",
            age: ""
        }
    ])

    const handleFormChange = (event, index) => {
        let data = [...formFields]
        data[index][event.target.name] = event.target.value
        setFormFields(data)

    }

    const handleAddFields = (event) => {
        event.preventDefault()
        let newField = {
            name : "",
            age : ""
        }
        setFormFields([...formFields, newField])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formFields)
    }

    const handleRemoveField = (index) => {
        let data = [...formFields]
        data.splice(index,1)
        setFormFields(data)
        
    }

    return (
        <div>
            <h2>Adding dynamic form fields</h2>
            <br />
            <form onSubmit={handleSubmit}>
                {formFields.map((elem, index) => {
                    return (
                        <div key="index">
                            <input name="name" placeholder='Name' value={elem.name} onChange={(event) => { handleFormChange(event, index) }}></input>
                            <input name="age" placeholder='Age' value={elem.age} onChange={(event) => { handleFormChange(event, index) }}></input>
                            <button onClick={()=>handleRemoveField(index)}>Remove</button>

                        </div>
                    )

                })}
                <button onClick={handleAddFields}>Add more fields!</button>
                <br />
                <button onClick={handleSubmit}>Submit</button>

            </form>


        </div>
    )
}

export default DynamicFormFields