import Input from "./Input";
import Signs from "./Signs";
import Header from "../Header/Header";
import { useState } from "react";
import { Container } from "react-bootstrap";

const Translation = () => {
  const [input, setInput] = useState("");

  const translateInput = (event, input) => {
    event.preventDefault();
    setInput(input);
  };
  return (
    <>
      <Header />
      <Container>
        <Input value={input} translateInput={translateInput} />
        {input && <Signs userInput={input} />}
      </Container>
    </>
  );
};

export default Translation;
