import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import WillM1 from "../assets/images/Poster/willmount.png";
import WillM2 from "../assets/images/Poster/summer.png";

import Shine1 from "../assets/images/Poster/shine.png";
import Shine2 from "../assets/images/Poster/bathroom.png";

import Evergreen1 from "../assets/images/Poster/evergreen.png";
import Evergreen2 from "../assets/images/Poster/evergreen2.png";

import BigDeal1 from "../assets/images/Poster/bigDeals.png";
import BigDeal2 from "../assets/images/Poster/home.png";

import Defzen1 from "../assets/images/Poster/defzen.png";
import Defzen2 from "../assets/images/Poster/defzen2.png";

import Blazeemco1 from "../assets/images/Poster/blazeemco.png";
import Blazeemco2 from "../assets/images/Poster/blazeemco2.png";

import Kuruva1 from "../assets/images/Poster/kuruva.png";
import Kuruva2 from "../assets/images/Poster/natureLove.png";

const imageContents = [
  { name: "WillMount", images: [WillM1, WillM2] },
  { name: "Shine", images: [Shine1, Shine2] },
  { name: "Evergreen", images: [Evergreen1, Evergreen2] },
  { name: "BigDeal", images: [BigDeal1, BigDeal2] },
  { name: "Defzen", images: [Defzen1, Defzen2] },
  { name: "Blazeemco", images: [Blazeemco1, Blazeemco2] },
  { name: "kuruva", images: [Kuruva1, Kuruva2] },
];

const scales = [10, 20, 40, 80, 100];

function Photoshoot() {
  const ref = useRef(null);
  const isAnim = useInView(ref);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const intervals = useRef({});

  useEffect(() => {
    return () => {
      Object.values(intervals.current).forEach((interval) =>
        clearInterval(interval)
      );
    };
  }, []);

  const handleMouseEnter = (contentIndex) => {
    setHoveredIndex(contentIndex);
    let index = 0;

    intervals.current[contentIndex] = setInterval(() => {
      setCurrentImageIndexes((prev) => ({
        ...prev,
        [contentIndex]: index,
      }));
      index = (index + 1) % imageContents[contentIndex].images.length;
    }, 1000);
  };

  const handleMouseLeave = (contentIndex) => {
    clearInterval(intervals.current[contentIndex]);
    delete intervals.current[contentIndex];
    setHoveredIndex(null);
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [contentIndex]: 0,
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
                  index === currentImageIndexes[i] ? "slide" : "hidden"
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

export default Photoshoot;
