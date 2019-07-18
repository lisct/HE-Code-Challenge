import React from 'react';
import './App.css';

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
        </header>

        {/* component Menu Icon */}
        <div className="menu-icon">ICON -</div>

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
                  viewBox="0 0 64 15">
                  <title>Squiggle</title>
                  <path id="Squiggle" className="cls-1" d="M56.64,0a7.41,7.41,0,0,0-5.88,2.92,7.17,7.17,0,0,0-1.34,3,15.78,15.78,0,0,1-.5,3.21c-2,4.84-9.56,3.43-9.56-1.85h0A7.43,7.43,0,0,0,28.48.89a7.34,7.34,0,0,0-3.82,6c-.17,2.55-1.41,4.8-4.15,5.26a5,5,0,0,1-5.8-4.84h0c0-6-7.29-9.39-12-5.66A7.34,7.34,0,0,0,.41,4.88c-.36,1-1,3.36.65,3.56s1.33-2.26,1.8-3.26a5,5,0,0,1,9.46,2.09h0A7.43,7.43,0,0,0,23.2,13.66a7.38,7.38,0,0,0,3.82-6c.17-2.54,1.41-4.8,4.15-5.26A5,5,0,0,1,37,7.27h0a7.37,7.37,0,0,0,6.38,7.21,7.44,7.44,0,0,0,8.08-5.32c.45-1.66.11-3.28,1.19-4.76a5,5,0,0,1,8.62,1c.31.74.15,1.68.49,2.36a1.2,1.2,0,0,0,2.19-.12c.64-1.67-.8-4.19-1.9-5.35A7.42,7.42,0,0,0,56.64,0"/>
                </svg>
                <p className="form__required">*Indicates Required Field</p>
              </div>

              <div className="form__input-container">
                <label 
                  className="form__input-label" 
                  for="username">
                    Name<abbr title="required">*</abbr>
                </label>
                <input 
                  className="form__input-field" 
                  id="username" 
                  type="text" 
                  name="username"
                />
              </div>
              
              <button type="submit">Create account</button>
              <button>Reset</button>

            </form>
          </div>

        </div>

    </div>
  );
}

export default App;
