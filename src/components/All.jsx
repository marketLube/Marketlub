import React, { useRef } from "react";
import { useInView } from "framer-motion";

import HIlineM from "../assets/images/hilineMob.jpeg";
import HIlineL from "../assets/images/hilineLap.jpeg";
import ProtienNutM from "../assets/images/protienNutMob.jpeg";
import ProtienNutT from "../assets/images/protienNutTab.jpeg";
import SkymarkM from "../assets/images/skymarkMob.jpeg";
import SkymarkL from "../assets/images/skymarkLap.jpeg";
import Moto from "../assets/images/moto.jpeg";
import Accordings2 from "../assets/images/accoundings2.jpeg";
import WillM1 from "../assets/images/Poster/willmount.png";
import WillM2 from "../assets/2-012.png";
import Shine1 from "../assets/images/Poster/shine.png";
import Shine2 from "../assets/2-032.png";
import Evergreen1 from "../assets/images/Poster/evergreen.png";
import Evergreen2 from "../assets/2-022.png";
import BigDeal1 from "../assets/images/Poster/bigDeals.png";
// import BigDeal2 from "../assets/images/Poster/home.png";
import Defzen1 from "../assets/images/Poster/defzen.png";
// import Defzen2 from "../assets/images/Poster/defzen2.png";
import Blazeemco1 from "../assets/images/Poster/blazeemco.png";
import Blazeemco2 from "../assets/images/Poster/blazeemco2.png";
import Ever1 from "../assets/images/Branding/Evergeen/eve1.png";
import Ever2 from "../assets/images/Branding/Evergeen/eve2.png";
import Ever3 from "../assets/images/Branding/Evergeen/eve3.png";
import Ever4 from "../assets/images/Branding/Evergeen/eve4.png";
import Ever5 from "../assets/images/Branding/Evergeen/eve5.png";
import Kurusi1 from "../assets/images/Branding/Kursii/kursii1.png";
import Kurusi2 from "../assets/images/Branding/Kursii/kursii2.png";
import Kurusi3 from "../assets/images/Branding/Kursii/kursii3.png";
import Kurusi4 from "../assets/images/Branding/Kursii/kursii4.png";
import Kurusi5 from "../assets/images/Branding/Kursii/kursii5.png";
import Kurusi6 from "../assets/images/Branding/Kursii/kursii6.png";
import Kurusi7 from "../assets/images/Branding/Kursii/kursii7.png";
import Kurusi8 from "../assets/images/Branding/Kursii/kursii8.png";
import Kurusi9 from "../assets/images/Branding/Kursii/kursii9.png";

import Tea1 from "../assets/images/Branding/TeaToday/tea1.png";
import Tea2 from "../assets/images/Branding/TeaToday/tea2.png";
import Tea3 from "../assets/images/Branding/TeaToday/tea3.png";
import Tea4 from "../assets/images/Branding/TeaToday/tea4.png";
import Tea5 from "../assets/images/Branding/TeaToday/tea5.png";
import Tea6 from "../assets/images/Branding/TeaToday/tea6.png";
import Tea7 from "../assets/images/Branding/TeaToday/tea7.png";
import Tea8 from "../assets/images/Branding/TeaToday/tea8.png";

const allImages = [
  HIlineM,
  HIlineL,
  Evergreen1,
  Evergreen2,
  Tea1,
  Tea2,
  Tea3,
  Tea4,
  Tea5,
  Tea6,
  Tea7,
  Tea8,
  Shine1,
  Shine2,
  ProtienNutM,
  ProtienNutT,
  Kurusi1,
  Kurusi2,
  Kurusi3,
  Kurusi4,
  Kurusi5,
  Kurusi6,
  Kurusi7,
  Kurusi8,
  Kurusi9,

  BigDeal1,
  // BigDeal2,
  SkymarkM,
  SkymarkL,
  Accordings2,
  Ever1,
  Ever2,
  Ever3,
  Ever4,
  Ever5,

  Moto,
  Blazeemco1,
  Blazeemco2,
  WillM1,
  WillM2,
  Defzen1,
  // Defzen2,
];

const scales = [10, 20, 40, 80, 100];

function All() {
  const ref = useRef(null);
  const isAnim = useInView(ref);

  return (
    <div className="grid-container__bluebox" ref={ref}>
      {allImages.map((imgSrc, i) => {
        const translateY = isAnim
          ? "0"
          : `${scales[i % scales.length] * 1.5}rem`;
        const opacity = isAnim ? "1" : "0";

        return (
          <div
            key={i}
            className="grid-container__boxitemAll"
            style={{
              transform: `translateY(${translateY})`,
              transition: `transform 1s ease-in-out, opacity 1s ease-in-out ${
                i * 0.2
              }s`,
            }}
          >
            <div className="grid-container__image-wrapperAll">
              <img
                src={imgSrc}
                alt={`content-${i}`}
                className="grid-container__hoverimageAll"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default All;
