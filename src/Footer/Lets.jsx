import { Parallax, useParallax } from "react-scroll-parallax";
import LetsContent from "./LetsContent";

export const Lets = () => {
  const frog = useParallax({
    scaleY: [0, 1.1, "easeOutQuart"], // Start at 50% height, scale to full
    shouldAlwaysCompleteAnimation: true, // Ensure smooth completion
    easing: [0.25, 0.1, 0.25, 1], // Slow cubic-bezier easing curve
  });

  return (
    <Parallax speed={0} className="lets-container">
      <div className="lets" ref={frog.ref}></div>
      <LetsContent
        style={{ top: "5rem", position: "absolute", color: "white" }}
      />
    </Parallax>
  );
};
