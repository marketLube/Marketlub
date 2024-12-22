import React, { useRef } from "react";
import { useInView } from "framer-motion";

const imageContents = [
  { name: "video-1", images: [""] },
  { name: "video-2", images: [""] },
  { name: "video-3", images: [""] },
  { name: "video-4", images: [""] },
];

const scales = [10, 20, 40, 80, 100];

function Video() {
  const ref = useRef(null);
  const isAnim = useInView(ref);

  let k = 0;
  return (
    <div className="grid-container__blueboxVideo" ref={ref}>
      {imageContents?.map((content, i) => {
        if (i % 4 === 0) {
          k = 0;
        }

        const translateY = isAnim ? "0" : `${scales[k] * 1.5}rem`;
        k = (k + 1) % scales.length;

        return (
          <div
            key={i}
            className="grid-container__boxitemVideo"
            style={{
              transform: `translateY(${translateY})`,
              transition: "transform 1s ease",
            }}
          >
            {content.images.map((imgSrc, index) => (
              <div key={index} className="grid-container__image-wrapperVideo">
                <img
                  src={imgSrc}
                  alt={`${content.name}-content-${index}`}
                  className="grid-container__hoverimageVideo"
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Video;
