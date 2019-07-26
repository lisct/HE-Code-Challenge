import React from "react";

const Errors = ({ errors }) => (
  <div className="form__input-notes">
    <p className={`form__notes-desc ${errors && "required"}`}>
      {errors ? errors : <span>&nbsp;</span>}
    </p>
  </div>
);

export default Errors;
