import { useRef } from "react";
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

  let k = 0;

  return (
    <div className="grid-container__bluebox" ref={ref}>
      {imageContents?.map((content, i) => {
        if (i % 4 === 0) {
          k = 0;
        }

        const translateY = isAnim ? "0" : `${scales[k] * 1.5}rem`;
        k = (k + 1) % scales.length;

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

export default Web;
