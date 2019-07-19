import React from "react";

import FormHeader from "./FormHeader";

// Main container of the website (the actual body wrapper)
const Form = props => (
  <div className="form_container">
    <form className="form">
      <FormHeader />

      <div className="form__container">{props.children}</div>
    </form>
  </div>
);

export default Form;
