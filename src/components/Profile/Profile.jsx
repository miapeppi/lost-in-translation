import Header from "../Header/Header";
import TranslationList from "./TranslationList";
import Logout from "./Logout";
import { ProfileAPI } from "./ProfileAPI";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Profile = () => {
  const [translations, setTranslations] = useState({
    translations: [],
    fetching: true,
  });

  // Get the state of the username and loggedIn
  const { username, loggedIn } = useSelector((state) => state.sessionReducer);

  // Getting the list of saved translations
  useEffect(() => { ProfileAPI.getTranslations(username)
    .then((translationsList) => {
      if (translationsList.length) {
        setTranslations({
          translations: translationsList[0].translations,
          fetching: false,
        });
      }
    });
  }, []);

  // Handling the click of "Delete translation" button, by hiding the TranslationListItem at the profile page
  const onClickHandleDelete = (event, index) => {
    event.preventDefault();
    const copyOfTranslations = [...translations.translations];
    copyOfTranslations.splice(
      copyOfTranslations.length -
        (copyOfTranslations.slice(-10).length - index),
      1
    );

    setTranslations({
      ...translations,
      translations: copyOfTranslations,
    });
  };

  return (
    <>
      {/** If the user is not logged in, they will be redirected to the login page,
        else the profile page will be shown. */}
      {!loggedIn && <Redirect to="/" />}
      {loggedIn && (
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
            {translations.fetching && <h2>LOADING...</h2>}
            {/** Sending a props of sliced list of saved translations to the TranslationList and onClickHandleDelete */}
            <TranslationList
              translations={translations.translations.slice(-10)}
              onClickHandleDelete={onClickHandleDelete}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default Profile;
