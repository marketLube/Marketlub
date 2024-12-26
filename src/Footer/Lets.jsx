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
          <div
            className="inlineContainer"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h6 className="lets-h6">
              LET'S CRAFT A STUNNING <GoArrowUpRight className="lets-arrow" />
            </h6>
          </div>
          <h6 className="lets-h6">PROJECT TOGETHER</h6>
        </Parallax>
      </Parallax>
      <SmallFooter />
    </div>
  );
};
