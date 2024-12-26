import React from "react";
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
import { MobWorkSection } from "./SectionFour/MobWorkSection";
import MobRobo from "./SectionOne/MobRobo";

function App() {
  const ref = useRef(null);

  const isTab = window.innerWidth < 992;

  useHomeScroll();

  return (
    <ParallaxProvider>
      <Navbar />
      {isTab ? <MobRobo /> : <Robo />}
      <Boost />
      <div style={{ backgroundColor: "white" }}>
        <Paragraph />
        {isTab ? <MobWorkSection /> : <WorkSection />}
        {!isTab ? <Selected /> : null}
        <div className="bottom-container">
          <GridSection />
          <Lets />
        </div>
      </div>
      <div className="divider"></div>
    </ParallaxProvider>
  );
}

export default App;
