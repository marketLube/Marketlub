import React, { useState } from "react";
// import { Parallax } from "react-scroll-parallax";
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

export const GridSection = () => {
  const [activeButton, setActiveButton] = useState("VIDEOS");

  const handleButtonClick = (filterName) => {
    setActiveButton(filterName);
  };

  return (
    // <Parallax speed={64}>
    <section className="grid-container">
      <div className="grid-container__filters">
        {["VIDEOS", "WEB SERVICES", "PHOTOSHOOTS", "BRANDING"].map((filter) => (
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
      </div>

      <div className="grid-container">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index}>{contentMap[activeButton][index]}</div>
        ))}
      </div>
    </section>
    // </Parallax>
  );
};
