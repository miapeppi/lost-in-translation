import { Navbar, Container } from "react-bootstrap";

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
          <span className="material-icons profileIcon">account_circle</span>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
