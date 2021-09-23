import { useState } from "react"
import { useDispatch } from 'react-redux'
import { loginAttemptAction } from "../../store/actions/loginActions"
import AppContainer from "../../hoc/AppContainer.jsx"


const Login = () => {

    const dispatch = useDispatch()
    
    const [username, setUsername] = useState('')

    const onInputChange = event => {
        setUsername(event.target.value)
    }

    const onFormChange = event => {
        event.preventDefault()
        dispatch(loginAttemptAction(username))
    }

    return(
        
        <AppContainer>

            <form className="mt-3 Login" onSubmit={ onFormChange } >
                <h2>Login to the Translator</h2>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input id="username" type="text" placeholder="Enter your username" className="form-control" onChange={ onInputChange } />
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
            </form>

        </AppContainer>
    )
}

export default Login