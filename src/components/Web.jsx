import { useInView } from "framer-motion";
import React, { useRef } from "react";

const scales = [10, 20, 40, 80, 100];

function Web({ contents }) {
  const ref = useRef(null);
  const isAnim = useInView(ref);

  let k = 0;
  return (
    <div className="grid-container__bluebox" ref={ref}>
      {contents?.map((val, i) => {
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
            {val}
          </div>
        );
      })}
    </div>
  );
}

export default Web;
