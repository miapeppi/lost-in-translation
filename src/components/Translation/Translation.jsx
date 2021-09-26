import Input from "./Input";
import Signs from "./Signs";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Container } from "react-bootstrap";
import { InputAPI } from "./InputAPI";
import { ProfileAPI } from "../Profile/ProfileAPI";
import { Redirect } from "react-router-dom"
import { useDispatch } from "react-redux";
import { sessionLogoutAction } from "../../store/actions/sessionActions";

const Translation = () => {
  const [input, setInput] = useState("");
  const [state, setState] = useState([])

  useEffect(() => {
    ProfileAPI.getTranslations(username)
      .then(profile => {
        setState(profile[0])
      })
  })

  const dispatch = useDispatch()

  const { username , id, loggedIn } = useSelector(state => state.sessionReducer)

  const translateInput = (event, input) => {
    event.preventDefault();
    setInput(input);
    const copyWithInput = [...state.translations, input]
    let tst = InputAPI.updateTranslations(id, copyWithInput)
    tst.then(msg => {
      if(msg === 'logout')
        dispatch(sessionLogoutAction())
    })
  }


  return (
    <>
        { !loggedIn && <Redirect to="/" /> }
        { loggedIn &&
          <>
              <Header />
            <Container>
              <Input value={input} translateInput={translateInput} />
              {input && <Signs userInput={input} />}
            </Container>
          </>
        }
    </>
  )
};

export default Translation;
