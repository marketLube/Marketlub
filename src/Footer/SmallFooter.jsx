import React from "react";

import Icon from "@mdi/react";
import { mdiArrowTopRight } from "@mdi/js";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

function SmallFooter() {
  return (
    <Parallax className="small-footer" speed={0}>
      <div className="small-footer-contents" id="contact">
        <a
          href="https://wa.me/919061663675"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="footer-icon" />
        </a>
        <a
          href="https://www.instagram.com/marketlube/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="footer-icon" />
        </a>
        {/* <a
          href="https://facebook.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="footer-icon" />
        </a> */}
        {/* <a
          href="https://youtube.com/your-channel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="footer-icon" />
        </a> */}
        <a
          href="https://www.linkedin.com/company/marketlube/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="footer-icon" />
        </a>
      </div>
    </Parallax>
  );
}

export default SmallFooter;
