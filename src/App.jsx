import React, { useEffect } from "react";
import { Lets } from "./Footer/Lets";
import { GridSection } from "./SectionFive/GridSection";
import { Selected } from "./SectionFour/Selected";
import { WorkSection } from "./SectionFour/WorkSection";
import { Robo } from "./SectionOne/Robo";
import { Paragraph } from "./SectionThree/Paragraph";
import { Boost } from "./SectionTwo/Boost";

import { ParallaxProvider } from "react-scroll-parallax";

import Navbar from "./Nav/Navbar";
import { useRef } from "react";

import { useHomeScroll } from "./hooks/useHomeScroll";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  const ref = useRef(null);

  useHomeScroll();

  return (
    <ParallaxProvider>
      <Navbar />
      <Robo />
      <Boost />
      <div style={{ backgroundColor: "white" }}>
        <Paragraph />
        <WorkSection />
        <Selected />
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          containerRef={ref}
          watch={[]}
        >
          <div>
            <div className="bottom-container" data-scroll-container ref={ref}>
              <GridSection />
              <Lets />
            </div>
          </div>
        </LocomotiveScrollProvider>
      </div>
      <div className="divider"></div>
    </ParallaxProvider>
  );
}

export default App;
