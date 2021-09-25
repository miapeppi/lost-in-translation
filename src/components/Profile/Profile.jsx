import Header from "../Header/Header";
import TranslationList from "./TranslationList";
import Logout from "./Logout";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProfileAPI } from "./ProfileAPI";

const Profile = () => {
  const [translations, setTranslations] = useState({
    translations: [],
    fetching: true,
  });
  const { username } = useSelector((state) => state.sessionReducer);

  console.log(username);
  useEffect(() => {
    ProfileAPI.getTranslations(username).then((translationsList) => {
      setTranslations({
        translations: translationsList[0].translations,
        fetching: false,
      });
    });
  }, []);

  // const translations = [
  //   "hello",
  //   "coffee",
  //   "react",
  //   "tgif",
  //   "glitter",
  //   "code",
  //   "keyboard",
  //   "tea",
  //   "music",
  //   "cactus",
  // ];

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
        <TranslationList translations={translations.translations.slice(-10)} />
      </Container>
    </>
  );
};

export default Profile;
