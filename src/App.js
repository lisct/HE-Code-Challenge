import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App grid-container">
      {/* component Header */}
      <header className="header__wrapper">
        <div className="container">
          <div className="header">
            <div className="header__date">03.21.2019</div>
            <div className="header__tittle">Code Challenge</div>
            <div className="header__user">Kenneth</div>
          </div>
        </div>

        {/* component Menu Icon */}
        <div className="menu-icon">
          <div>
            <span className="icon__line-a"></span>
            <span className="icon__line-b"></span>
            <span className="icon__line-c"></span>
          </div>
        </div>
      </header>

      {/* component main */}
      <div className="main">
        <div className="form_container">
          <form className="form">
            <div className="form__header">
              <h1 className="form__title">Create an account</h1>
              <svg
                className="form__divider"
                id="icon-squiggle"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 15"
              >
                <title>Squiggle</title>
                <path
                  id="Squiggle"
                  className="cls-1"
                  d="M56.64,0a7.41,7.41,0,0,0-5.88,2.92,7.17,7.17,0,0,0-1.34,3,15.78,15.78,0,0,1-.5,3.21c-2,4.84-9.56,3.43-9.56-1.85h0A7.43,7.43,0,0,0,28.48.89a7.34,7.34,0,0,0-3.82,6c-.17,2.55-1.41,4.8-4.15,5.26a5,5,0,0,1-5.8-4.84h0c0-6-7.29-9.39-12-5.66A7.34,7.34,0,0,0,.41,4.88c-.36,1-1,3.36.65,3.56s1.33-2.26,1.8-3.26a5,5,0,0,1,9.46,2.09h0A7.43,7.43,0,0,0,23.2,13.66a7.38,7.38,0,0,0,3.82-6c.17-2.54,1.41-4.8,4.15-5.26A5,5,0,0,1,37,7.27h0a7.37,7.37,0,0,0,6.38,7.21,7.44,7.44,0,0,0,8.08-5.32c.45-1.66.11-3.28,1.19-4.76a5,5,0,0,1,8.62,1c.31.74.15,1.68.49,2.36a1.2,1.2,0,0,0,2.19-.12c.64-1.67-.8-4.19-1.9-5.35A7.42,7.42,0,0,0,56.64,0"
                />
              </svg>
              <p className="form__required">
                <abbr title="required">*</abbr>
                Indicates Required Field
              </p>
            </div>

            <div className="form__container">
              {/* input */}
              <div className="form__input-container">
                <div className="form__input-items">
                  <input
                    className="form__input-field"
                    id="username"
                    type="text"
                    name="username"
                    required
                  />
                  <label className="form__input-label" htmlFor="username">
                    Name
                    <abbr title="required">*</abbr>
                  </label>
                </div>
              </div>

              {/* input notes */}
              <div className="form__input-container">
                <div className="form__input-notes">
                  <p className="form__notes-func">Show Password</p>
                  <p className="form__notes-desc">
                    Must contain one uppercase letter, one number, & one special
                    character.
                  </p>
                </div>

                <div className="form__input-items">
                  <input
                    className="form__input-field"
                    id="password"
                    type="text"
                    name="password"
                    required
                  />
                  <label className="form__input-label" htmlFor="password">
                    Password
                    <abbr title="required">*</abbr>
                  </label>
                </div>
              </div>

              {/* input notes */}
              <div className="form__input-container">
                <div className="form__input-notes">
                  <p className="form__notes-func">Show Password</p>
                  <p className="form__notes-desc">
                    Must contain one uppercase letter, one number, & one special
                    character.
                  </p>
                </div>

                <div className="form__input-items">
                  <input
                    className="form__input-field"
                    id="password"
                    type="text"
                    name="password"
                    required
                  />
                  <label className="form__input-label" htmlFor="password">
                    Password
                    <abbr title="required">*</abbr>
                  </label>
                </div>
              </div>

              {/* radio subtitle */}
              <div className="form__input-container form__input-subtitle">
                <div className="form__subtitle">
                  <span>
                    gender identity<abbr title="required">*</abbr>
                  </span>
                </div>

                <div className="form__inline">
                  <div className="form__input-items">
                    <label className="form__input-label-rc" htmlFor="male">
                      male
                      <input
                        className="form__input-radio"
                        id="male"
                        name="gender"
                        type="radio"
                      />
                      <span className="checkmark checkmark--radio"></span>
                    </label>
                  </div>
                  <div className="form__input-items">
                    <label className="form__input-label-rc" htmlFor="female">
                      female
                      <input
                        className="form__input-radio"
                        id="female"
                        name="gender"
                        type="radio"
                      />
                      <span className="checkmark checkmark--radio"></span>
                    </label>
                  </div>
                  <div className="form__input-items">
                    <label
                      className="form__input-label-rc"
                      htmlFor="non-binary"
                    >
                      non-binary
                      <input
                        className="form__input-radio"
                        id="non-binary"
                        name="gender"
                        type="radio"
                      />
                      <span className="checkmark checkmark--radio"></span>
                    </label>
                  </div>
                  <div className="form__input-items">
                    <label className="form__input-label-rc" htmlFor="other">
                      other
                      <input
                        className="form__input-radio"
                        id="other"
                        name="gender"
                        type="radio"
                      />
                      <span className="checkmark checkmark--radio"></span>
                    </label>
                  </div>
                </div>
              </div>

              {/* checkbox subtitle */}
              <div className="form__input-container form__input-subtitle">
                <div className="form__subtitle">
                  <span> subscribe to newsletter </span>
                </div>

                <div className="form__inline">
                  <div className="form__input-items">
                    <label className="form__input-label-rc" htmlFor="yes">
                      yes
                      <input
                        className="form__input-checkbox"
                        id="yes"
                        name="yes"
                        type="checkbox"
                      />
                      <span className="checkmark checkmark--checkbox"></span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Upload your profile pic */}
              <div className="form__input-container form__input-subtitle">
                <div className="form__subtitle">
                  <span>
                    Upload your profile pic<abbr title="required">*</abbr>
                  </span>
                </div>

                <div className="form__inline form__input-file-container">
                  <div className="form__input-items">
                    <input
                      type="file"
                      name="profile-pic"
                      id="profile-pic"
                      className="form__input-file"
                    />

                    <label
                      htmlFor="profile-pic"
                      className="form__input-file-label"
                    >
                      <figure>
                        <svg
                          id="profile-Pic"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 120 120"
                        >
                          <defs>
                            <mask
                              id="mask"
                              x="0"
                              y="0"
                              width="20"
                              height="17"
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
                          <title>profile-Pic</title>
                          <circle
                            id="circle"
                            className="cls-2"
                            cx="60"
                            cy="60"
                            r="60"
                          />
                          <path
                            id="mountain"
                            className="cls-3"
                            d="M118.08,75.12,94,49.31,58.33,85,38.76,65.38,10.39,93.75A60,60,0,0,0,118.08,75.12Z"
                          />
                          <g className="cls-4">
                            <circle
                              id="sun"
                              className="cls-1"
                              cx="52"
                              cy="30"
                              r="13"
                            />
                          </g>
                        </svg>
                      </figure>
                      <div className="btn__container">
                        <span className="btn btn__standard btn--lighter">
                          Browse
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form__input-container">
                <button
                  className="btn btn__primary btn--full btn--dark"
                  type="submit"
                >
                  Create account
                </button>

                <button className="btn btn--full btn__plain">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
