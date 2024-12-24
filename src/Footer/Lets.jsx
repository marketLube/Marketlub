import { Parallax } from "react-scroll-parallax";
import LetsContent from "./LetsContent";
import SmallFooter from "./SmallFooter";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const Lets = () => {
  return (
    <div className="lets">
      <Parallax className="lets-container" speed={30}>
        <div className="contents">
          <h6 className="lets-h6">LET'S CRAFT A STUNNING</h6>
          <h6 className="lets-h6">PROJECT TOGETHER</h6>
        </div>
        <SmallFooter />
      </Parallax>
    </div>
  );
};
