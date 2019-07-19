import React from "react";

// Main Header (menu)
const Header = () => (
  <header className="header__wrapper">
    <div className="container">
      <div className="header">
        <div className="header__date">03.21.2019</div>
        <div className="header__tittle">Code Challenge</div>
        <div className="header__user">Kenneth</div>
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
