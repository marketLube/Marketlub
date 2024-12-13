import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";

export const GridSection = () => {
  const [activeButton, setActiveButton] = useState("");
  const [visibleItem1, setVisibleItem1] = useState(false);
  const [visibleItem2, setVisibleItem2] = useState(false);
  const [visibleItem3, setVisibleItem3] = useState(false);
  const [visibleItem4, setVisibleItem4] = useState(false);

  const handleButtonClick = (filterName) => {
    setActiveButton(filterName);
  };

  useEffect(() => {
    // Set timeouts for each individual item
    setTimeout(() => setVisibleItem1(true), 500); // First item appears after 500ms
    setTimeout(() => setVisibleItem2(true), 1000); // Second item appears after 1000ms
    setTimeout(() => setVisibleItem3(true), 1500); // Third item appears after 1500ms
    setTimeout(() => setVisibleItem4(true), 2000); // Fourth item appears after 2000ms
  }, []);

  return (
    <Parallax speed={63}>
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
          {/* First item */}
          <div
            className={`grid-container__boxitem ${
              visibleItem1 ? "visible" : ""
            }`}
          >
            <div className="grid-container__boxitem--tall"></div>
            <div className="grid-container__boxitem--tall"></div>
          </div>
          {/* Second item */}
          <div
            className={`grid-container__boxitem ${
              visibleItem2 ? "visible" : ""
            }`}
          >
            <div className="grid-container__boxitem--tall"></div>
            <div className="grid-container__boxitem--tall"></div>
          </div>
          {/* Third item */}
          <div
            className={`grid-container__boxitem ${
              visibleItem3 ? "visible" : ""
            }`}
          >
            <div className="grid-container__boxitem--tall"></div>
            <div className="grid-container__boxitem--tall"></div>
          </div>
          {/* Fourth item */}
          <div
            className={`grid-container__boxitem ${
              visibleItem4 ? "visible" : ""
            }`}
          >
            <div className="grid-container__boxitem--tall"></div>
            <div className="grid-container__boxitem--tall"></div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};
