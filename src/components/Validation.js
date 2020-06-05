import React from "react";

const Validation = (props) => {
  let validationMessage = "Text is long enough!";
  if (props.textInputLength <= 7) {
    validationMessage = "Text input must be at least 7 symbols!";
  }
  return (
    <section>
      <code>{validationMessage}</code>
    </section>
    // <section>
    //   {props.textInputLength < 7 ? (
    //     <div>Text input must be at least 7 symbols!</div>
    //   ) : (
    //     <h5>Text is long enough!</h5>
    //   )}
    // </section>
  );
};

export default Validation;
