import React from "react";
import Icon from "@mdi/react";
// import { mdiArrowTopRight } from "@mdi/js";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

export const Lets = () => {
  return (
    <div>
      <div className="lets">
        <div className="lets-row">
          <h6 className="lets-h6">LET'S CRAFT A STUNNING</h6>
          {/* <Icon path={mdiArrowTopRight} className="lets-icon" /> */}
        </div>
        <h6 className="lets-h6">PROJECT TOGETHER</h6>
      </div>
      {/* <div className="divider"></div>  */}
      <div className="small-footer">
        <div className="icon-wrapper">
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="footer-icon" />
          </a>
          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="footer-icon" />
          </a>
          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="footer-icon" />
          </a>
          <a
            href="https://youtube.com/your-channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="footer-icon" />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="footer-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
