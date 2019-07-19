import React from "react";

const Radio = ({ name, label, group }) => (
  <div className="form__input-items">
    <label className="form__input-label-rc" htmlFor={name}>
      {label}
      <input
        className="form__input-radio"
        id={name}
        name={group}
        type="radio"
      />
      <span className="checkmark checkmark--radio"></span>
    </label>
  </div>
);

export default Radio;
