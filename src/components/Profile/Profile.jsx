import Header from "../Header/Header";
import TranslationList from "./TranslationList";
import Logout from "./Logout";
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  const translations = [
    "hello",
    "coffee",
    "react",
    "tgif",
    "glitter",
    "code",
    "keyboard",
    "tea",
    "music",
    "cactus",
  ];

  return (
    <>
      <Header />
      <Container>
        <Row className="mb-5">
          <Col>
            <h2>WELCOME TO YOUR PROFILE!</h2>
          </Col>
          <Col>
            <Logout />
          </Col>
        </Row>
        <TranslationList translations={translations} />
      </Container>
    </>
  );
};

export default Profile;
