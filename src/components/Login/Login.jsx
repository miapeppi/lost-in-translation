import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginAttemptAction } from "../../store/actions/loginActions"
import AppContainer from "../../hoc/AppContainer.jsx"
import { Redirect } from "react-router-dom"


const Login = () => {

    const dispatch = useDispatch()

    const { loggedIn } = useSelector(state => state.sessionReducer)
    
    const [username, setUsername] = useState('')

    const onInputChange = event => {
        setUsername(event.target.value)
    }

    const onFormChange = event => {
        event.preventDefault()
        dispatch(loginAttemptAction(username))
    }

    return(
        
        <>
            { loggedIn && <Redirect to="/translation" />}
            { !loggedIn &&
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
            }
        </>    
    )
}

export default Login