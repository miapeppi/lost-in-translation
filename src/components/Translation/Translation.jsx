import Input from "./Input";
import Signs from "./Signs";
import Header from "../Header/Header";
import { Container } from "react-bootstrap";
import { InputAPI } from "./InputAPI";
import { ProfileAPI } from "../Profile/ProfileAPI";
import { sessionLogoutAction } from "../../store/actions/sessionActions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";


const Translation = () => {
  const [input, setInput] = useState("");
  const [state, setState] = useState([]);
  // Get an instance of he dispatcher
  const dispatch = useDispatch();

  // Fetching user information, so translation list can be later updated
  useEffect(() => { ProfileAPI.getTranslations(username)
    .then((profile) => {
      setState(profile[0]);
    });
  });

  // Get the state of the username, id and loggedIn
  const { username, id, loggedIn } = useSelector((state) => state.sessionReducer);

  // When input form is submitted, updating the input value and adding it to the users translation list
  const translateInput = (event, input) => {
    event.preventDefault();
    setInput(input);
    const copyWithInput = [...state.translations, input];
    let tst = InputAPI.updateTranslations(id, copyWithInput);
    // if the message is logout, dispatch the sessionLogoutAction
    tst.then((msg) => {
      if (msg === "logout") dispatch(sessionLogoutAction());
    });
  };

  return (
    <>
      {/** If the user is not logged in, they will be redirected to the login page,
        else the translation page will be shown. */}
      {!loggedIn && <Redirect to="/" />}
      {loggedIn && (
        <>
          <Header />
          <Container>
            <Input value={input} translateInput={translateInput} />
            {/** If there is an input value the translation box will be shown */}
            {input && 
              <Signs userInput={input} />
            }
          </Container>
        </>
      )}
    </>
  );
};

export default Translation;
