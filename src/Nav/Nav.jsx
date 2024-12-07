import React from "react";

export const Nav = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">Home</li>
          <li className="nav__item">Service</li>
          <li className="nav__item">Portfolio</li>
          <li className="nav__item nav__item--active">Contact</li>
        </ul>
      </nav>
    </div>
  );
};
