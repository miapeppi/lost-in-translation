import Input from './Input'
import Signs from './Signs'
import { useState } from 'react'

const Translation = () => {
    const [ input, setInput] = useState('')

    const translateInput = (input) => {
        console.log('YY', input)
        setInput(input)
        console.log('XX ',input)
    }
    return(
        <div>
            <h2>Translation page</h2>
            <p>{input}</p>
            <Input value={input} translateInput = { translateInput }/>
            <Signs userInput='moikka' />
            {console.log('ZZ', input)}
        </div>
    )
}

export default Translation