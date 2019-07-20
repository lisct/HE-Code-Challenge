import React from "react";

const Checkbox = ({ label, name, value, handleChange }) => (
  <div className="form__inline">
    <div className="form__input-items">
      <label className="form__input-label-rc" htmlFor={name}>
        {label}
        <input
          className="form__input-checkbox"
          type="checkbox"
          id={name}
          name={name}
          onChange={handleChange}
        />
        <span className="checkmark checkmark--checkbox"></span>
      </label>
    </div>
  </div>
);

export default Checkbox;
