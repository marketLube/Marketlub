import React from "react";
import {ParallaxProvider, Parallax } from 'react-scroll-parallax'



export const Selected = () => {
  return (
        <Parallax className="selected-works-wrap" speed={0}>
          <div className="selected">Selected Works</div>
        </Parallax>
        
  
  );
};
