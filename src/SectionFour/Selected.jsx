import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export const Selected = () => {
  return (
    <div
      style={{
        height: "50vh",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Parallax className="selected" speed={-28}> */}
      <h1 className="selectHead">Selected Works</h1>
      {/* </Parallax> */}
    </div>
  );
};
