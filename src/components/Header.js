import React from "react";

const today = () => {
  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  return `${month}.${day}.${now.getFullYear()}`;
};

// Main Header (menu)
const Header = ({ logged, name, img }) => (
  <header className="header__wrapper">
    <div className="container">
      <div className="header">
        <div className="header__date">{logged && today()}</div>
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
