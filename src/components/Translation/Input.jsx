import { useState } from 'react'

const Input = ({ translateInput }) => {

    const [ input, setInput] = useState('')

    const updateChange = (event) => {
        setInput(event.target.value)
        event.preventDefault()
    } 
    return(
            <form onSubmit={ (event) => translateInput(event, input)}>
                <input type="text" onChange={ updateChange }></input>
                <button 
                    type="text" 
                    className="btn btn-primary" >
                    Translate
                </button>
            </form>
    )
}

export default Input