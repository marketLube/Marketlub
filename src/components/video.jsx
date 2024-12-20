import React, { useRef } from "react";
import { useInView } from "framer-motion";
import HIlineM from "../assets/images/hilineMob.jpeg";
import HIlineL from "../assets/images/hilineLap.jpeg";
import ProtienNutM from "../assets/images/protienNutMob.jpeg";
import ProtienNutT from "../assets/images/protienNutTab.jpeg";

const imageContents = [HIlineM, HIlineL, ProtienNutM, ProtienNutT];

const scales = [10, 20, 40, 80, 100];

function Web() {
  const ref = useRef(null);
  const isAnim = useInView(ref);

  let k = 0;
  return (
    <div className="grid-container__bluebox" ref={ref}>
      {imageContents?.map((imageSrc, i) => {
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
            }}
          >
            <img
              src={imageSrc}
              alt={`content-${i}`}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Web;
