import React from "react";
// eslint-disable-next-line
import { todayDateFormat } from "../components/utilities";

// Main Header (menu)
const Header = ({ logged, name, img }) => (
  <header className="header__wrapper">
    <div className="container">
      <div className="header">
        <div className="header__date">{logged && todayDateFormat()}</div>
        <div className="header__tittle">Code Challenge</div>
        <div className="header__user">
          {logged && (
            <div className="header__user-settings">
              <img src="/images/user.svg" alt="profile-img" />
              <p>{name}</p>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Mobile Menu Icon */}
    <div className="menu-icon">
      <div>
        <span className="icon__line-a"></span>
        <span className="icon__line-b"></span>
        <span className="icon__line-c"></span>
      </div>
    </div>
  </header>
);

export default Header;
