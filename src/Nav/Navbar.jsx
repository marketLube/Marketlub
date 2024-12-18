import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar-logo">
        <img src="your-icon-url.png" alt="Logo" className="navbar-icon" />
      </div>

      <nav className="navbar-menu">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#service">Service</a>
          </li>
          <li className="navbar-item">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="navbar-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
