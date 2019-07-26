import React from "react";

import FormHeader from "./FormHeader";

// Main container of the website (the actual body wrapper)
const Form = ({ handleEvent, children }) => (
  <div className="form_container">
    <form
      className="form"
      method="get"
      id="create-account"
      onSubmit={handleEvent}
    >
      <FormHeader copy="CREATE AN ACCOUNT" required={true} />

      <div className="form__container">{children}</div>
    </form>
  </div>
);

export default Form;
