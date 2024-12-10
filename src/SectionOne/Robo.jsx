import Spline from "@splinetool/react-spline";
import React from "react";

export const Robo = () => {
  return (
    <div
      className="robot-container"
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* <div className="robot-image" /> */}
      <script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.9.46/build/spline-viewer.js"
      ></script>
      <spline-viewer url="https://prod.spline.design/zFtU7pDI6WudFXAg/scene.splinecode"></spline-viewer>
      <Spline scene="https://prod.spline.design/zFtU7pDI6WudFXAg/scene.splinecode" />
    </div>
  );
};
