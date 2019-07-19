import React from "react";

const Checkbox = ({ label, name }) => (
  <div className="form__inline">
    <div className="form__input-items">
      <label className="form__input-label-rc" htmlFor={name}>
        {label}
        <input
          className="form__input-checkbox"
          id={name}
          name={name}
          type="checkbox"
        />
        <span className="checkmark checkmark--checkbox"></span>
      </label>
    </div>
  </div>
);

export default Checkbox;
