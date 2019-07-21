import React from "react";

const InlineGroup = ({ subtitle, children, errors, value }) => (
  <div className="form__input-container form__input-subtitle">
    <div className="form__input-notes">
      <p className={`form__notes-desc ${errors && "required"}`}>
        {errors ? errors : <span>&nbsp;</span>}
      </p>
    </div>

    {subtitle}

    <div className="form__inline">{children}</div>
  </div>
);

export default InlineGroup;
