import React from "react";
import { Lets } from "./Footer/Lets";
import { GridSection } from "./SectionFive/GridSection";
import { Selected } from "./SectionFour/Selected";
import { WorkSection } from "./SectionFour/WorkSection";
import { Robo } from "./SectionOne/Robo";
import { Paragraph } from "./SectionThree/Paragraph";
import { Boost } from "./SectionTwo/Boost";
import SmallFooter from "./Footer/SmallFooter";
// import Navbar from "./Nav/Navbar";

function App() {
  return (
    <>
      <Robo />
      <Boost />
      <div style={{ backgroundColor: "white" }}>
        <Paragraph />
        <WorkSection />
        <Selected />
        <GridSection />
        <Lets />
      </div>
      <div className="divider"></div>
      {/* <SmallFooter /> */}
    </>
  );
}

export default App;
