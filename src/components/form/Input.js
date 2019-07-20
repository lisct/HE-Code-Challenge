import React from "react";

const Input = ({
  note = false,
  func,
  name,
  type,
  label,
  value,
  handleChange,
  handleBlur,
  errors
}) => (
  <div className="form__input-container">
    <div className="form__input-notes">
      {note && <p className="form__notes-func">{func}</p>}
      <p className={`form__notes-desc ${errors[name] && "required"}`}>
        {errors[name] ? errors[name] : "errors space"}
      </p>
    </div>

    <div className="form__input-items">
      <input
        className={`form__input-field ${errors[name] && "required"}`}
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
      />
      <label className="form__input-label" htmlFor={name}>
        {label}
        <abbr title="required">*</abbr>
      </label>
    </div>
  </div>
);

export default Input;
