import React, { useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion, useInView } from "framer-motion";
import Web from "../components/Web";
import Video from "../components/video";
import Photoshoot from "../components/photoshoot";
import Branding from "../components/branding";

const contents = [0, 1, 2, 3, 4, 5, 6, 7];
export const GridSection = () => {
  const [activeButton, setActiveButton] = useState("WEB SERVICES");

  const handleButtonClick = (filterName) => {
    setActiveButton(filterName);
  };

  return (
    <Parallax speed={-20}>
      <div className="grid-container">
        <motion.div className="grid-container__filters">
          {["WEB SERVICES", "VIDEOS", "PHOTOSHOOTS", "BRANDING"].map(
            (filter) => (
              <div
                key={filter}
                className={`grid-container__filter-btn ${
                  activeButton === filter ? "active" : ""
                }`}
                onClick={() => handleButtonClick(filter)}
              >
                {filter}
              </div>
            )
          )}
        </motion.div>
        {activeButton === "WEB SERVICES" && <Web />}
        {activeButton === "VIDEOS" && <Video />}
        {activeButton === "PHOTOSHOOTS" && <Photoshoot />}
        {activeButton === "BRANDING" && <Branding />}
      </div>
    </Parallax>
  );
};
