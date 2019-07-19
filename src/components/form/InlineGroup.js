import React from "react";

const InlineGroup = ({ subtitle, children }) => (
  <div className="form__input-container form__input-subtitle">
    {subtitle}

    <div className="form__inline">{children}</div>
  </div>
);

export default InlineGroup;
