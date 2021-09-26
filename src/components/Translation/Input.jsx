import { useState } from "react";

const Input = ({ translateInput }) => {
  const [input, setInput] = useState("");

  // Updating the input value when the input changes
  const updateChange = (event) => {
    setInput(event.target.value);
    event.preventDefault();
  };

  // Sending the event to the Translation component, when the form is submitted 
  return (
    <form
      onSubmit={(event) => translateInput(event, input)}
      className="mb-4 input-group"
    >
      <input
        type="text"
        onChange={updateChange}
        className="form-control"
        maxLength="40"
        placeholder="What would you like to translate?"
      />
      <button type="text" className="btn btn-lg">
        TRANSLATE
      </button>
    </form>
  );
};

export default Input;
