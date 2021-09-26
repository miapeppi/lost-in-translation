import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { loginAttemptAction } from "../../store/actions/loginActions";

const Login = () => {
  // Get an instance of he dispatcher
  const dispatch = useDispatch();
  // Get the state of the loggedIn
  const { loggedIn } = useSelector((state) => state.sessionReducer);
  // Get the state of the loginAttempting
  const { loginAttempting } = useSelector((state) => state.loginReducer);
  const [username, setUsername] = useState("");

  // Setting the username when the input field is changed
  const onUsernameInputChange = (event) => {
    setUsername(event.target.value);
  };

  // On form submit either fetching a user information or creating a new user
  const onLoginSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAttemptAction(username));
  };

  return (
    <>
      {/** If the user is logged in, the site will be redirected to translation page, 
        otherwise the login page will be  shown. */}
      {loggedIn && <Redirect to="/translation" />}
      {!loggedIn && (
        <Container>
          <Row className="Login">
            <Col className="align-self-center">
              <img src="/images/Logo-Hello.png" alt="robot saying hello" />
            </Col>
            <Col className="align-self-center text-center">
              {/** Loading animation while user information is fetched */}
              {loginAttempting && (
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              )}
              <h1 className="mb-5">WELCOME TO GET LOST IN TRANSLATION!</h1>
              <form className="mt-3 input-group" onSubmit={onLoginSubmit}>
                <input
                  id="username"
                  type="text"
                  placeholder="What's your name?"
                  className="form-control"
                  onChange={onUsernameInputChange}
                />
                <button type="submit" className="btn btn-lg">
                  LOGIN
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Login;
