import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="navbar mb-5">
      <Container>
        <Navbar.Brand>
          <img
            src="/images/Logo.png"
            width="50"
            height="50"
            alt="robot smiling"
          />{" "}
          LOST IN TRANSLATION
        </Navbar.Brand>
        <Navbar.Text>
          <Link to="/translation">
            <span className="material-icons outlined linkIcon">translate</span>
          </Link>{" "}
          <Link to="/profile">
            <span className="material-icons linkIcon">account_circle</span>
          </Link>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
