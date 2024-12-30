import React, { useState, useEffect } from "react";
import { Lets } from "./Footer/Lets";
import { GridSection } from "./SectionFive/GridSection";
import { Selected } from "./SectionFour/Selected";
import { WorkSection } from "./SectionFour/WorkSection";
import { Robo } from "./SectionOne/Robo";
import { Paragraph } from "./SectionThree/Paragraph";
import { Boost } from "./SectionTwo/Boost";
import Navbar from "./Nav/Navbar";
import { useRef } from "react";
import { useHomeScroll } from "./hooks/useHomeScroll";
import { MobWorkSection } from "./SectionFour/MobWorkSection";
import MobRobo from "./SectionOne/MobRobo";
import { Parallax } from "react-scroll-parallax";
import Loader from "./SectionOne/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);

  const isTab = window.innerWidth < 992;

  useHomeScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    if (loading) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "static";
    }

    return () => {
      clearTimeout(timer);
      document.body.style.position = "static";
    };
  }, [loading]);

  return (
    <Parallax>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "black",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999999999999999999999,
          }}
        >
          <Loader />
        </div>
      )}
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
    </Parallax>
  );
}

export default App;
