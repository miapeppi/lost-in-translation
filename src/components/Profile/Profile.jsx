import Header from "../Header/Header";
import TranslationList from "./TranslationList";
import Logout from "./Logout";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProfileAPI } from "./ProfileAPI";
import { Redirect } from "react-router-dom";

const Profile = () => {
  const [translations, setTranslations] = useState({
    translations: [],
    fetching: true,
  });
  const { username, loggedIn } = useSelector((state) => state.sessionReducer);

  console.log(username);
  useEffect(() => {
    ProfileAPI.getTranslations(username).then((translationsList) => {
      if(translationsList.length){
        setTranslations({
        translations: translationsList[0].translations,
        fetching: false,
      })}
    });
  }, []);

  const onClickHandle = (event, index) => {
    event.preventDefault()
    console.log("1:", translations.translations, index);
    const copyOfTranslations = [...translations.translations]
    copyOfTranslations.splice(copyOfTranslations.length - (copyOfTranslations.slice(-10).length-index), 1)
    console.log("2:", copyOfTranslations);
    setTranslations({
      ...translations,
      translations: copyOfTranslations
    })
  }

  return (
    <>
          { !loggedIn && <Redirect to="/" />}

          {
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
                <TranslationList translations={translations.translations.slice(-10)} onClickHandle={onClickHandle} />
              </Container>
            </>
          }
    </>
  );
};

export default Profile;
