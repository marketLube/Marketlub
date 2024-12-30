import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowLogo(false);
      } else {
        setShowLogo(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMenuScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener("scroll", handleMenuScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleMenuScroll);
    };
  }, [menuOpen]);

  return (
    <div className="navbar-menu">
      {showLogo ? (
        <img src={logo} alt="Logo" className="navbar-icon" />
      ) : (
        <div className="dummyLogo"></div>
      )}
      {menuOpen === false && (
        <button
          className="hamburger-menu"
          style={{ cursor: "pointer" }}
          onClick={() => setMenuOpen((val) => !val)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}

      <div className="splash-container">
        <div className={`splash ${menuOpen ? "active" : ""}`}></div>
      </div>

      <ul className={`navbar-list ${menuOpen ? "open" : ""}`}>
        {menuOpen && (
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            style={{
              color: "white",
              position: "absolute",
              top: "3rem",
              right: "2.2rem",
              background: "none",
              fontSize: "1.5rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
        <li className="navbar-item">
          <a
            href="#home"
            className={active === "#home" ? "active" : ""}
            onClick={() => {
              setActive("#home");
              setMenuOpen(false);
            }}
          >
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="#service"
            className={active === "#service" ? "active" : ""}
            onClick={() => {
              setActive("#service");
              setMenuOpen(false);
            }}
          >
            Service
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="#portfolio"
            className={active === "#portfolio" ? "active" : ""}
            onClick={() => {
              setActive("#portfolio");
              setMenuOpen(false);
            }}
          >
            Portfolio
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={active === "#contact" ? "active" : ""}
            onClick={() => {
              setActive("#contact");
              setMenuOpen(false);
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
