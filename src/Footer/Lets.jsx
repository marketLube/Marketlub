import { Parallax, useParallax } from "react-scroll-parallax";

export const Lets = () => {
  const frog = useParallax({
    scaleY: [0.9, 1, "easeOutQuad"], // Small initial height (90%) to full height (100%)
    shouldAlwaysCompleteAnimation: true,
  });

  return (
    <Parallax speed={10}>
      <div className="lets" ref={frog.ref}>
        <div className="contents">
          <div className="lets-row">
            <h6 className="lets-h6">LET'S CRAFT A STUNNING</h6>
          </div>
          <h6 className="lets-h6">PROJECT TOGETHER</h6>
        </div>
      </div>
    </Parallax>
  );
};
