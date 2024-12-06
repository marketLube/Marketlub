import React, { useEffect, useState } from "react";
import { Paragraph } from "../SectionThree/Paragraph";
import { LogoSection } from "./LogoSection";

export const Boost = () => {
  const stats = [
    { value: "59", label: "Projects Done" },
    { value: "23", label: "Happy Clients" },
    { value: "12CR+", label: "Business" },
    { value: "96%", label: "Success Rate" },
  ];

  return (
    <div
      className="boost-performance"
      // style={{
      //   transform: `translateY(-${offsetY * 0.5}px)`, // Adjust parallax speed here
      // }}
    >
      <h1 className="boost-performance__title">Boost your</h1>
      <h2 className="boost-performance__highlight">Performance</h2>
      <p className="boost-performance__subtitle">
        Creating unmatchable digital presence
      </p>

      <div className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stats-section__item">
            <h2 className="stats-section__value">{stat.value}</h2>
            <p className="stats-section__label">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="logo-swiper">
        <LogoSection />
      </div>
    </div>
  );
};
