import React, { useEffect } from "react";
import { Lets } from "./Footer/Lets";
import { Navbar } from "./Nav/Navbar";
import { GridSection } from "./SectionFive/GridSection";
import { Selected } from "./SectionFour/Selected";
import { WorkSection } from "./SectionFour/WorkSection";
import { Robo } from "./SectionOne/robo";
import { Paragraph } from "./SectionThree/Paragraph";
import { Boost } from "./SectionTwo/Boost";
import { LogoSection } from "./SectionTwo/LogoSection";
import { NumberSection } from "./SectionTwo/NumberSection";

function App() {
  return (
    <>
      <Navbar />
      {/* <Robo /> */}
      <div style={{ backgroundColor: "white" }}>
        <Boost />
        <Paragraph />
        <WorkSection />
        <Selected />
        <GridSection />
        <Lets />
      </div>
    </>
  );
}

export default App;
