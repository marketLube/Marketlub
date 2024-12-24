import { Parallax, useParallax } from "react-scroll-parallax";
import LetsContent from "./LetsContent";

export const Lets = () => {
  const frog = useParallax({
    scaleY: [0, 1.3, "easeOutQuart"],
    shouldAlwaysCompleteAnimation: true,
    easing: [0.25, 0.1, 0.25, 1],
  });

  return (
    <Parallax speed={0} className="lets-container">
      <div className="lets" ref={frog.ref} id="footer"></div>
      <LetsContent
        style={{ top: "5rem", position: "absolute", color: "white" }}
      />
    </Parallax>
  );
};
