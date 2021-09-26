import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAttemptAction } from "../../store/actions/loginActions";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Login = () => {

    const dispatch = useDispatch()

    const { loggedIn } = useSelector(state => state.sessionReducer)
    const { loginAttempting } = useSelector(state => state.loginReducer)
    
    const [username, setUsername] = useState('')

    const onInputChange = event => {
        setUsername(event.target.value)
    }

    const onLoginSubmit = event => {
        event.preventDefault()
        dispatch(loginAttemptAction(username))
    }

    return(
        
        <>
            { loggedIn && <Redirect to="/translation" />}
            { !loggedIn &&
      
              <Container>
                <Row className="Login">
                  <Col className="align-self-center">
                    <img src="/images/Logo-Hello.png" alt="robot saying hello" />
                  </Col>
                  <Col className="align-self-center text-center">
                    { loginAttempting && 
                      <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                      </div>
                    }
                    <h1 className="mb-5">WELCOME TO GET LOST IN TRANSLATION!</h1>
                    <form className="mt-3 input-group" onSubmit={ onLoginSubmit }>
                      <input
                        id="username"
                        type="text"
                        placeholder="What's your name?"
                        className="form-control"
                        onChange={ onInputChange }
                      />
                      <button type="submit" className="btn btn-lg">
                        LOGIN
                      </button>
                    </form>
                  </Col>
                </Row>
              </Container>
            }
        </>    
    )
}

export default Login;
