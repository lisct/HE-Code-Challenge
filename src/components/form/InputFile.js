import React from "react";

const InputFile = ({ name, btn, handleChange }) => (
  <div className="form__inline form__input-file-container">
    <div className="form__input-items">
      <input
        className="form__input-file"
        type="file"
        name={name}
        id={name}
        onChange={handleChange}
      />

      <label className="form__input-file-label" htmlFor={name}>
        <figure>
          <svg
            className="profile-pic"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
          >
            <defs>
              <mask
                id="mask"
                x="0"
                y="0"
                width="120"
                height="120"
                maskUnits="userSpaceOnUse"
              >
                <g id="mask-2">
                  <circle
                    id="path-1"
                    className="cls-1"
                    cx="60"
                    cy="60"
                    r="60"
                  />
                </g>
              </mask>
            </defs>
            <title>Profile-Pic</title>
            <circle id="circle" className="cls-2" cx="60" cy="60" r="60" />
            <path
              id="mountain"
              className="cls-3"
              d="M118.08,75.12,94,49.31,58.33,85,38.76,65.38,10.39,93.75A60,60,0,0,0,118.08,75.12Z"
            />
            <g className="cls-4">
              <circle id="sun" className="cls-1" cx="52" cy="30" r="13" />
            </g>
          </svg>
        </figure>

        <div className="btn__container">
          <span className="btn btn__standard btn--lighter">{btn}</span>
        </div>
      </label>
    </div>
  </div>
);

export default InputFile;
