import React from "react";

const Radio = ({ name, label, group, value, data, handleChange }) => (
  <div className="form__input-items">
    <label className="form__input-label-rc" htmlFor={name}>
      {label}
      <input
        className="form__input-radio"
        type="radio"
        id={name}
        name={group}
        value={value}
        checked={data === value}
        onChange={handleChange}
      />
      <span className="checkmark checkmark--radio"></span>
    </label>
  </div>
);

export default Radio;
