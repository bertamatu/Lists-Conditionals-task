import React, { useState } from "react";
import Validation from "./components/Validation";
import Char from "./components/Char";

function App() {
  const [textInputState, setTextInputState] = useState({
    textInput: "",
  });

  const textInputHandler = (e) => {
    let newTextInputValue = e.target.value;
    setTextInputState({
      textInput: newTextInputValue,
    });
  };

  const deleteCharHandler = (index) => {
    const text = textInputState.textInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    setTextInputState({ textInput: updatedText });
  };

  const charList = textInputState.textInput.split("").map((char, index) => {
    return (
      <Char
        character={char}
        key={index}
        clicked={() => deleteCharHandler(index)}
      />
    );
  });

  return (
    <div>
      <label>Enter some text: </label>
      <input
        type="text"
        onChange={textInputHandler}
        value={textInputState.textInput}
      />
      <hr />
      <small>text input: {textInputState.textInput}</small>
      {/* <h6> Amount of symbols in the text input:</h6>
      <code>{textInputState.textInputLength}</code> */}
      <hr />
      <Validation textInputLength={textInputState.textInput.length} />
      <hr />
      {charList}
    </div>
  );
}

export default App;

// 1. Create an input field(in App component) visit a change listener which outputs the length of the entered text below it.
// 2. Create a new component(Validation comp) which receives the text length as a prop.
// 3. Inside the Validation component either output “Text too short” or “Text is long enough” depending on the text length(e.g. 5min lenght).
// 4. Create another CharComponent and style it is an in -line box;
// 5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text(in the initial input field) as a prop.
// 6. When you click a CharComponent, it should be removed from the entered text.
