import React, { useState,useEffect } from "react";


export const GridSection = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (filterName) => {
    setActiveButton(filterName);
  };

  return (
    <section className="grid-container">
      <div className="grid-container__filters">
        {["WEB SERVICE", "VIDEOS", "PHOTOSHOOTS", "BRANDING"].map((filter) => (
          <button
            key={filter}
            className={`grid-container__filter-btn ${
              activeButton === filter ? "active" : ""
            }`}
            onClick={() => handleButtonClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid-container__bluebox">
        <div className="grid-container__boxitem grid-container__boxitem ">
          <div className=" grid-container__boxitem--tall"></div>
          <div className=" grid-container__boxitem--tall"></div>
        </div>
        <div className="grid-container__boxitem grid-container__boxitem ">
          <div className="grid-container__boxitem--medium"></div>
          <div className="grid-container__boxitem--medium"></div>
          <div className="grid-container__boxitem--medium"></div>
        </div>
        <div className="grid-container__boxitem grid-container__boxitem ">
          <div className=" grid-container__boxitem--tall"></div>
          <div className=" grid-container__boxitem--tall"></div>
        </div>

        <div className="grid-container__boxitem grid-container__boxitem ">
          <div className=" grid-container__boxitem--tall"></div>
          <div className=" grid-container__boxitem--tall"></div>
        </div>
      </div>
    </section>
  );
};
