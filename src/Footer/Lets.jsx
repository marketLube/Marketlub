import { Parallax } from "react-scroll-parallax";
import LetsContent from "./LetsContent";
import SmallFooter from "./SmallFooter";
import { useRef, useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

export const Lets = () => {
  const ref = useRef(null);

  return (
    <div className="lets">
      <Parallax
        className="lets-container"
        speed={0}
        shouldAlwaysCompleteAnimation={true}
        easing="easeInQuad"
        style={{ width: "100%" }}
      >
        <Parallax className="contents" style={{ width: "100%" }}>
          <div className="lets-main-container">
            <div>
              <div className="inline-container">
                <h6 className="lets-h6">
                  LET&apos;S CRAFT A STUNNING
                  <GoArrowUpRight className="lets-arrow" />
                </h6>
              </div>
              <h6 className="lets-h6">PROJECT TOGETHER</h6>
            </div>
            <div className="lets-info lets-info-container">
              <div className="lets-map-container">
                <div className="map-button">
                  <a
                    href="https://maps.app.goo.gl/difZZMt53BvzCKUG8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="map-background" />
                    <GoArrowUpRight className="map-arrow" />
                  </a>
                </div>
              </div>
              <div className="lets-row">
                <p className="lets-row-address" style={{ textAlign: "center" }}>
                  P1 4th floor, HiLITE Business Park,
                  <br /> Calicut
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </Parallax>
      <SmallFooter />
    </div>
  );
};
