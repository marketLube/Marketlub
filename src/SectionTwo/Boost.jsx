import React, { useEffect, useState } from "react";
import { Paragraph } from "../SectionThree/Paragraph";
import { LogoSection } from "./LogoSection";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const Boost = () => {
  const [counterState, setCounterState] = useState(false);

  const stats = [
    { value: "59", label: "Projects Done" },
    { value: "23", label: "Happy Clients" },
    { value: "12CR+", label: "Business" },
    { value: "96%", label: "Success Rate" },
  ];

  return (
    <div
      className="boost-performance" 
    >
      <h1 className="boost-performance__title">Boost your</h1>
      <h2 className="boost-performance__highlight">Performance</h2>
      <p className="boost-performance__subtitle">
        CREATING UNMATCHABLE DIGITAL PRESENCE
      </p>
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="stats-section">
          {counterState && (
            <div className="stats-section__item">
              <h2 className="stats-section__value">
                <CountUp start={0} end={59} duration={1.5}></CountUp>
              </h2>
              <p className="stats-section__label">Projects Done</p>
            </div>
          )}

          {counterState && (
            <div className="stats-section__item">
              <h2 className="stats-section__value">
                <CountUp start={0} end={23} duration={1.5}></CountUp>
              </h2>
              <p className="stats-section__label">Happy Clients</p>
            </div>
          )}
          {counterState && (
            <div className="stats-section__item">
              <h2 className="stats-section__value">
                <CountUp start={0} end={12} duration={1.5}></CountUp>CR+
              </h2>
              <p className="stats-section__label">Business</p>
            </div>
          )}
          {counterState && (
            <div className="stats-section__item">
              <h2 className="stats-section__value">
                <CountUp start={0} end={96} duration={1.5}></CountUp>%
              </h2>
              <p className="stats-section__label">Success Rate</p>
            </div>
          )}
        </div>
      </ScrollTrigger>

      {/* <div className="logo-swiper"> */}
      <LogoSection />
      {/* </div> */}
    </div>
  );
};
