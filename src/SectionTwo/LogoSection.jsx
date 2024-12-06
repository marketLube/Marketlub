import React, { useEffect } from "react";

export const LogoSection = () => {
  useEffect(() => {
    const logosSlide = document.querySelector(".logos-slide");
    if (logosSlide) {
      const copy = logosSlide.cloneNode(true);
      document.querySelector(".logo-slider").appendChild(copy);
    }
  }, []);
  return (
    <div className="logo-slider">
      <div className="logos-slide">
        <div className>logo</div>
        <div className>logo</div>
        <div className>logo</div>
        <div className>logo</div>
        <div className>logo</div>
        <div className>logo</div>
        <div className>logo</div>
        <div className>logo</div>
        <div className>logo</div>
      </div>
    </div>
  );
};
