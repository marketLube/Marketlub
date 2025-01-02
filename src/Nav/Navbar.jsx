import { useState, useEffect } from "react";
import LOGO from "../assets/LOGO.png";

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [checked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (checked) {
        setIsChecked(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [checked]);

  const handleNavClick = (href) => {
    setActive(href);
    setIsChecked(false);
  };

  return (
    <div className="navbar-menu">
      <img src={LOGO} alt="Logo" className="navbar-icon" />

      <div className="navigation">
        <input
          checked={checked}
          onClick={() => setIsChecked((checked) => !checked)}
          type="checkbox"
          className="navigation__checkbox"
          id="navi__toggle"
          aria-label="Toggle navigation"
        />
        <label
          htmlFor="navi__toggle"
          className="navigation__btn"
          aria-controls="navigationMenu"
        >
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <nav
          className="navigation__nav"
          id="navigationMenu"
          aria-label="Main navigation"
        >
          <ul className="navigation__list">
            <li className="navigation__item">
              <a
                href="#home"
                className={active === "#home" ? "active" : ""}
                onClick={() => handleNavClick("#home")}
              >
                Home
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#service"
                className={active === "#service" ? "active" : ""}
                onClick={() => handleNavClick("#service")}
              >
                Service
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#portfolio"
                className={active === "#portfolio" ? "active" : ""}
                onClick={() => handleNavClick("#portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="https://wa.me/919061663675"
                target="_blank"
                rel="noopener noreferrer"
                className={active === "#contact" ? "active" : ""}
                onClick={() => handleNavClick("#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <ul className="navbar-list">
        <li className="navbar-item">
          <a
            href="#home"
            className={active === "#home" ? "active" : ""}
            onClick={() => handleNavClick("#home")}
          >
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="#service"
            className={active === "#service" ? "active" : ""}
            onClick={() => handleNavClick("#service")}
          >
            Service
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="#portfolio"
            className={active === "#portfolio" ? "active" : ""}
            onClick={() => handleNavClick("#portfolio")}
          >
            Portfolio
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="https://wa.me/919061663675"
            target="_blank"
            rel="noopener noreferrer"
            className={active === "#contact" ? "active" : ""}
            onClick={() => setActive("#contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
