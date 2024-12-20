import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import HIlineM from "../assets/images/hilineMob.jpeg";
import HIlineL from "../assets/images/hilineLap.jpeg";
import ProtienNutM from "../assets/images/protienNutMob.jpeg";
import ProtienNutT from "../assets/images/protienNutTab.jpeg";
import SkymarkM from "../assets/images/skymarkMob.jpeg";
import SkymarkL from "../assets/images/skymarkLap.jpeg";
import Moto from "../assets/images/moto.jpeg";
import Accordings2 from "../assets/images/accoundings2.jpeg";

const imageContents = [
  { name: "HIline", images: [HIlineM, HIlineL] },
  { name: "ProtienNut", images: [ProtienNutM, ProtienNutT] },
  { name: "Skymark", images: [SkymarkM, SkymarkL, Accordings2] },
  { name: "Moto", images: [Moto] },
];

const scales = [10, 20, 40, 80, 100];

function Web() {
  const ref = useRef(null);
  const isAnim = useInView(ref);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const intervals = useRef({}); 

  useEffect(() => {
    return () => {
      // Clear intervals on unmount
      Object.values(intervals.current).forEach((interval) =>
        clearInterval(interval)
      );
    };
  }, []);

  const handleMouseEnter = (contentIndex) => {
    setHoveredIndex(contentIndex);
    let index = 0;

    // Start cycling through images
    intervals.current[contentIndex] = setInterval(() => {
      setCurrentImageIndexes((prev) => ({
        ...prev,
        [contentIndex]: index,
      }));
      index = (index + 1) % imageContents[contentIndex].images.length;
    }, 1000);
  };

  const handleMouseLeave = (contentIndex) => {
    clearInterval(intervals.current[contentIndex]); // Clear interval
    delete intervals.current[contentIndex]; // Remove interval from tracking
    setHoveredIndex(null);
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [contentIndex]: 0, // Reset to the first image
    }));
  };

  let k = 0;
  return (
    <div className="grid-container__bluebox" ref={ref}>
      {imageContents?.map((content, i) => {
        if (i % 4 === 0) {
          k = 0; // Reset `k` at the start of every 4-item group
        }

        const translateY = isAnim ? "0" : `${scales[k] * 1.5}rem`;
        k = (k + 1) % scales.length; // Increment `k` safely within bounds

        return (
          <div
            key={i}
            className="grid-container__boxitem"
            style={{
              transform: `translateY(${translateY})`,
              transition: "transform 1s ease",
            }}
          >
            {content.images.map((imgSrc, index) => (
              <img
                key={index}
                src={
                  hoveredIndex === i
                    ? content.images[currentImageIndexes[i] || 0]
                    : content.images[0]
                }
                alt={`${content.name}-content-${index}`}
                className={`grid-container__hoverimage ${
                  index === currentImageIndexes[i] ? "" : "hidden"
                }`}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Web;
