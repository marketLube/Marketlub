import React from "react";
import { Parallax } from "react-scroll-parallax";

export const Selected = () => {
  return (
    <div
      style={{
        height: "50vh",
        backgroundColor: "black",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="selectWork"
    >
      <Parallax className="selected" speed={-24}>
        <h1 className="selectHead">Selected Works</h1>
      </Parallax>
    </div>
  );
};
