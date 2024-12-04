import { Lets } from "./Footer/Lets";
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
      <Robo />
      <Boost />
      <NumberSection />
      <LogoSection />
      <Paragraph />
      <WorkSection />
      <Selected />
      <GridSection />
      <Lets />
    </>
  );
}

export default App;
