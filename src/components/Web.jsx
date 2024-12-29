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
  HIlineM,
  HIlineL,
  ProtienNutM,
  ProtienNutT,
  SkymarkM,
  SkymarkL,
  Accordings2,
  Moto,
];

const scales = [10, 20, 40, 80, 100];

function Web() {
  const ref = useRef(null);
  const isAnim = useInView(ref);

  let k = 0;
  return (
    <div className="grid-container__bluebox" ref={ref}>
      {imageContents.map((imgSrc, i) => {
        if (i % 4 === 0) {
          k = 0;
        }

        const translateY = isAnim ? "0" : `${scales[k] * 1.5}rem`;
        k = (k + 1) % scales.length;
        const opacity = isAnim ? "1" : "0";

        return (
          <div
            key={i}
            className="grid-container__boxitemWeb"
            style={{
              transform: `translateY(${translateY})`,
              transition: `transform 1s ease, opacity 1s ease ${i * 0.2}s`,
              opacity: opacity,
            }}
          >
            <div className="grid-container__image-wrapperWeb">
              <img
                src={imgSrc}
                alt={`content-${i}`}
                className="grid-container__hoverimageWeb"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Web;
