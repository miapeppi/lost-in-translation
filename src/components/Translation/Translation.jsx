import Input from './Input'
import Signs from './Signs'
import { useState } from 'react'

const Translation = () => {
    const [ input, setInput] = useState('')

    const translateInput = (event, input) => {
        event.preventDefault()
        setInput(input)
    }
    return(
        <div>
            <h2>Translation page</h2>
            <Input value={input} translateInput = { translateInput }/>
            <Signs userInput={input} />
        </div>
    )
}

export default Translation