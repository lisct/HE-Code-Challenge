import React from "react";

const Input = ({ note = false, func, desc, name, type, label }) => (
  <div className="form__input-container">
    <div className="form__input-notes">
      {note && <p className="form__notes-func">{func}</p>}
      <p className="form__notes-desc">{desc}</p>
    </div>

    <div className="form__input-items">
      <input
        className="form__input-field"
        id={name}
        type={type}
        name={name}
        required
      />
      <label className="form__input-label" htmlFor={name}>
        {label}
        <abbr title="required">*</abbr>
      </label>
    </div>
  </div>
);

export default Input;
