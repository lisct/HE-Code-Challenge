import React from "react";
import Errors from "./Errors";

const InlineGroup = ({ subtitle, children, errors, value }) => (
  <div className="form__input-container form__input-subtitle">
    {errors && <Errors errors={errors} />}

    {subtitle}

    <div className="form__inline">{children}</div>
  </div>
);

export default InlineGroup;
