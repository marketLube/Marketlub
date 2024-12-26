import React, { useEffect } from "react";
import { Lets } from "./Footer/Lets";
import { GridSection } from "./SectionFive/GridSection";
import { Selected } from "./SectionFour/Selected";
import { WorkSection } from "./SectionFour/WorkSection";
import { Robo } from "./SectionOne/Robo";
import { Paragraph } from "./SectionThree/Paragraph";
import { Boost } from "./SectionTwo/Boost";
import SmallFooter from "./Footer/SmallFooter";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import smoothscroll from "smoothscroll-polyfill";
import Navbar from "./Nav/Navbar";
import { useRef } from "react";
import { useInView } from "framer-motion";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const handleScrollUp = (event) => {
      if (window.scrollY > window.innerHeight) return;
      if (event.deltaY > 0) {
        window.scrollTo({
          top: window.innerHeight + 5 * 16,
          behavior: "smooth",
        });
      }
    };

    const handleScrollDown = (event) => {
      if (window.scrollY > window.innerHeight) return;
      if (event.deltaY < 0) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("wheel", handleScrollUp);
    window.addEventListener("wheel", handleScrollDown);

    return () => {
      window.removeEventListener("wheel", handleScrollUp);
      window.removeEventListener("wheel", handleScrollDown);
    };
  }, []);

  return (
    <ParallaxProvider>
      <Navbar />
      {/* <Robo /> */}
      <Boost />
      <div style={{ backgroundColor: "white" }}>
        <Paragraph />
        {/* <WorkSection /> */}
        <Selected />
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
