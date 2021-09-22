import { useState } from 'react'

const Input = ({ value, translateInput }) => {

    const [ input, setInput] = useState('')

    const updateChange = (event) => {
        setInput(event.target.value)
        event.preventDefault()
        console.log('Test: ', input)
    } 
    return(
            <form>
                <input type="text" onChange={ updateChange }></input>
                <button 
                    type="submit" 
                    className="btn btn-primary" 
                    onClick={ () => translateInput(input) }
                >
                    Translate
                </button>
            </form>
    )
}

export default Input