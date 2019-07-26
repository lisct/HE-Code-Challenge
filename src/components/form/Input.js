import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      note = false,
      func,
      name,
      type,
      label,
      value,
      handleChange,
      handleFunc,
      errors
    },
    ref
  ) => {
    return (
      <div className="form__input-container">
        <div className="form__input-notes">
          {note && (
            <p
              className="form__notes-func"
              onMouseLeave={() => handleFunc("password")}
              onMouseOver={() => handleFunc("text")}
            >
              {func}
            </p>
          )}
          <p className={`form__notes-desc ${errors && "required"}`}>
            {errors ? errors : <span>&nbsp;</span>}
          </p>
        </div>

        <div className="form__input-items">
          <input
            className={`form__input-field ${errors && "required"}`}
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            autoComplete="off"
            {...(ref ? { ref: ref } : {})}
          />
          <label className="form__input-label" htmlFor={name}>
            {label}
            <abbr title="required">*</abbr>
          </label>
        </div>
      </div>
    );
  }
);

export default Input;
