import { useState } from "react";

const Input = ({ translateInput }) => {
  const [input, setInput] = useState("");

  const updateChange = (event) => {
    setInput(event.target.value);
    event.preventDefault();
  };
  return (
    <form
      onSubmit={(event) => translateInput(event, input)}
      className="mb-4 input-group"
    >
      <input
        type="text"
        onChange={updateChange}
        className="form-control"
        placeholder="What would you like to translate?"
      />
      <button type="text" className="btn btn-lg">
        TRANSLATE
      </button>
    </form>
  );
};

export default Input;
