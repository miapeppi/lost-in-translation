import Input from './Input'
import Signs from './Signs'
import { useState } from 'react'

const Translation = () => {
    const [ input, setInput] = useState('')

    const translateInput = (data) => {
        console.log('YY', data)
        setInput(data)
        console.log('XX ',input)
    }
    return(
        <div>
            <h2>Translation page</h2>
            <p>{input}</p>
            <Input translateInput = { translateInput }/>
            <Signs userInput={ input }/>
        </div>
    )
}

export default Translation