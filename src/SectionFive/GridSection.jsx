import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const contentMap = {
  VIDEOS: [
    "Video 1",
    "Video 2",
    "Video 3",
    "Video 4",
    "Video 5",
    "Video 6",
    "Video 7",
    "Video 8",
  ],
  "WEB SERVICES": [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
    "Service 5",
    "Service 6",
    "Service 7",
    "Service 8",
  ],
  PHOTOSHOOTS: [
    "Photo 1",
    "Photo 2",
    "Photo 3",
    "Photo 4",
    "Photo 5",
    "Photo 6",
    "Photo 7",
    "Photo 8",
  ],
  BRANDING: [
    "Branding 1",
    "Branding 2",
    "Branding 3",
    "Branding 4",
    "Branding 5",
    "Branding 6",
    "Branding 7",
    "Branding 8",
  ],
};
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
};

export const GridSection = () => {
  const [activeButton, setActiveButton] = useState("VIDEOS");

  const handleButtonClick = (filterName) => {
    setActiveButton(filterName);
  };

  return (
    <Parallax speed={23}>
      <motion.div className="grid-container" variants={containerVariants}>
        <motion.div className="grid-container__filters" variants={itemVariants}>
          {["VIDEOS", "WEB SERVICES", "PHOTOSHOOTS", "BRANDING"].map(
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

        <motion.div className="grid-container2" variants={itemVariants}>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index}>{contentMap[activeButton][index]}</div>
          ))}
        </motion.div>
      </motion.div>
    </Parallax>
  );
};
