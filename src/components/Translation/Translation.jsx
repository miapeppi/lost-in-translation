import Input from "./Input";
import Signs from "./Signs";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Container } from "react-bootstrap";
import { InputAPI } from "./InputAPI";
import { ProfileAPI } from "../Profile/ProfileAPI";

const Translation = () => {
  const [input, setInput] = useState("");
  const [state, setState] = useState([])

  useEffect(() => {
    ProfileAPI.getTranslations(usernameTest)
      .then(profile => {
        setState(profile[0])
      })
  })

  const { username = '', id } = useSelector(state => state.sessionReducer)

  const idTest = 2
  const usernameTest = 'serge'

  const translateInput = (event, input) => {
    event.preventDefault();
    setInput(input);
    const copyWithInput = [...state.translations, input]
    InputAPI.updateTranslations(idTest, copyWithInput)
    console.log(username, id);
  }


  return (
    <>
      <Header />
      <Container>
        <Input value={input} translateInput={translateInput} />
        {input && <Signs userInput={input} />}
      </Container>
    </>
  )
};

export default Translation;
