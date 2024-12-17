import React, { useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";

export const GridSection = () => {
  const [activeButton, setActiveButton] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleButtonClick = (filterName) => {
    setActiveButton(filterName);
  };

  return (
    <Parallax speed={0}>
      <section className="grid-container">
        <div className="grid-container__filters">
          {["WEB SERVICE", "VIDEOS", "PHOTOSHOOTS", "BRANDING"].map(
            (filter) => (
              <button
                key={filter}
                className={`grid-container__filter-btn ${
                  activeButton === filter ? "active" : ""
                }`}
                onClick={() => handleButtonClick(filter)}
              >
                {filter}
              </button>
            )
          )}
        </div>
        <div className="grid-container__bluebox">
          <div className=" grid-container__boxitem"></div>
          <div className=" grid-container__boxitem"></div>
          <div className=" grid-container__boxitem"></div>
          <div className=" grid-container__boxitem"></div>
          <div className=" grid-container__boxitem"></div>
          <div className=" grid-container__boxitem"></div>
          <div className=" grid-container__boxitem"></div>
          <div className=" grid-container__boxitem"></div>
        </div>
      </section>
    </Parallax>
  );
};
