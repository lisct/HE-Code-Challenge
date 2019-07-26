import React from "react";

const FormSubtitle = ({ copy, req = false }) => (
  <div className="form__subtitle">
    <span>
      {copy} {req && <abbr title="required">*</abbr>}
    </span>
  </div>
);

export default FormSubtitle;
