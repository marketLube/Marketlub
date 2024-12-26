import { Parallax } from "react-scroll-parallax";
import LetsContent from "./LetsContent";
import SmallFooter from "./SmallFooter";
import { useRef, useEffect, useState } from "react";

export const Lets = () => {
  const ref = useRef(null);

  return (
    <div className="lets">
      <Parallax
        className="lets-container"
        speed={0}
        shouldAlwaysCompleteAnimation={true}
        easing="easeInQuad"
      >
        <Parallax className="contents">
          <h6 className="lets-h6">LET'S CRAFT A STUNNING</h6>
          <h6 className="lets-h6">PROJECT TOGETHER</h6>
        </Parallax>
      </Parallax>
      <SmallFooter />
    </div>
  );
};
