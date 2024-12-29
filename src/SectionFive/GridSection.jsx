import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Web from "../components/Web";
import Video from "../components/video";
import Photoshoot from "../components/photoshoot";
import Branding from "../components/branding";
import All from "../components/All";

export const GridSection = () => {
  const [activeButton, setActiveButton] = useState(" ALL ");

  const handleButtonClick = (filterName) => {
    setActiveButton(filterName);
  };

  return (
    <Parallax speed={0} className="grid-container" id="portfolio">
      <motion.div className="grid-container__filters">
        {[
          " ALL ",
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

      <div style={{ display: activeButton === " ALL " ? "block" : "none" }}>
        <All />
      </div>
      <div
        style={{ display: activeButton === "WEB SERVICES" ? "block" : "none" }}
      >
        <Web />
      </div>
      <div style={{ display: activeButton === "VIDEOS" ? "block" : "none" }}>
        <Video />
      </div>
      <div
        style={{ display: activeButton === "SOCIAL MEDIA" ? "block" : "none" }}
      >
        <Photoshoot />
      </div>
      <div
        style={{
          display: activeButton === "BRAND IDENTITY" ? "block" : "none",
        }}
      >
        <Branding />
      </div>
    </Parallax>
  );
};
