import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container>
      <Row className="Login">
        <Col className="align-self-center">
          <img src="/images/Logo.png" alt="robot" />
        </Col>
        <Col className="align-self-center text-center">
          <h1 className="mb-5">YOU ARE LOST IN TRANSLATION</h1>
          {/** Redirecting the user back to the site */}
          <Link to="/">
            <button type="submit" className="btn btn-lg">
              BACK TO THE SITE
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
