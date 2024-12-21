import React, { useRef } from "react";
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
              <div key={index} className="grid-container__image-wrapper">
                <img
                  src={imgSrc}
                  alt={`${content.name}-content-${index}`}
                  className="grid-container__hoverimage"
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Photoshoot;
