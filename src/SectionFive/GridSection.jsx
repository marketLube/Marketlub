import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Web from "../components/Web";
import Video from "../components/video";
import Photoshoot from "../components/photoshoot";
import Branding from "../components/branding";
import All from "../components/All";

export const GridSection = () => {
  const [activeButton, setActiveButton] = useState("ALL");

  useEffect(() => {
    const hash = window.location.hash
      .replace("#", "")
      .toUpperCase()
      .replace(/-/g, " ");

    const validFilters = [
      "ALL",
      "WEB SERVICES",
      "VIDEOS",
      "SOCIAL MEDIA",
      "BRAND IDENTITY",
    ];

    if (validFilters.includes(hash)) {
      setActiveButton(hash);
    } else {
      setActiveButton("ALL");
    }
  }, []);

  const handleButtonClick = (filterName) => {
    setActiveButton(filterName);
    window.location.hash = filterName.trim().toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <Parallax speed={0} className="grid-container" id="portfolio">
      <span id="all "></span>
      <span id="web-services"></span>
      <span id="videos"></span>
      <span id="social-media"></span>
      <span id="brand-identity"></span>
      <motion.div className="grid-container__filters">
        {[
          "ALL",
          "WEB SERVICES",
          "VIDEOS",
          "SOCIAL MEDIA",
          "BRAND IDENTITY",
        ].map((filter) => (
          <div
            key={filter}
            className={`grid-container__filter-btn ${
              activeButton === filter ? "active" : ""
            }`}
            onClick={() => handleButtonClick(filter)}
          >
            {filter}
          </div>
        ))}
      </motion.div>

      <div
        style={{ display: activeButton === "ALL" ? "block" : "none" }}
        // id="all"
      >
        <All />
      </div>
      <div
        style={{ display: activeButton === "WEB SERVICES" ? "block" : "none" }}
        // id="web-services"
      >
        <Web />
      </div>
      <div
        style={{ display: activeButton === "VIDEOS" ? "block" : "none" }}
        // id="videos"
      >
        <Video />
      </div>
      <div
        style={{ display: activeButton === "SOCIAL MEDIA" ? "block" : "none" }}
        // id="social-media"
      >
        <Photoshoot />
      </div>
      <div
        style={{
          display: activeButton === "BRAND IDENTITY" ? "block" : "none",
        }}
        // id="brand-identity"
      >
        <Branding />
      </div>
    </Parallax>
  );
};
