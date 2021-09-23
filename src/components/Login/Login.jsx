import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
  return (
    <Container>
      <Row className="Login">
        <Col className="align-self-center">
          <img src="/images/Logo-Hello.png" alt="robot saying hello" />
        </Col>
        <Col className="align-self-center text-center">
          <h1 className="mb-5">WELCOME TO GET LOST IN TRANSLATION!</h1>
          <form className="mt-3 input-group">
            <input
              id="username"
              type="text"
              placeholder="What's your name?"
              className="form-control"
            />
            <button type="submit" className="btn btn-lg">
              LOGIN
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
