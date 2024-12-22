import React, { useRef } from "react";
import { useInView } from "framer-motion";
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
import Kurusi10 from "../assets/images/Branding/Kursii/kursii10.png";
// import MotoC1 from "../assets/images/Branding/Motocraze/moto1.png";
// import MotoC2 from "../assets/images/Branding/Motocraze/moto2.png";
// import MotoC3 from "../assets/images/Branding/Motocraze/moto3.png";
// import Protien1 from "../assets/images/Branding/Proteinut/protie1.png";
// import Protien2 from "../assets/images/Branding/Proteinut/protie1.png";
import Tea1 from "../assets/images/Branding/TeaToday/tea1.png";
import Tea2 from "../assets/images/Branding/TeaToday/tea2.png";
import Tea3 from "../assets/images/Branding/TeaToday/tea3.png";
import Tea4 from "../assets/images/Branding/TeaToday/tea4.png";
import Tea5 from "../assets/images/Branding/TeaToday/tea5.png";
import Tea6 from "../assets/images/Branding/TeaToday/tea6.png";
import Tea7 from "../assets/images/Branding/TeaToday/tea7.png";
import Tea8 from "../assets/images/Branding/TeaToday/tea8.png";
import Tea9 from "../assets/images/Branding/TeaToday/tea9.png";
import Tea10 from "../assets/images/Branding/TeaToday/tea10.png";
import Tea11 from "../assets/images/Branding/TeaToday/tea11.png";

const imageContents = [
  { name: "Evergreen", images: [Ever1, Ever2, Ever3, Ever4, Ever5] },
  {
    name: "Kursii",
    images: [
      Kurusi1,
      Kurusi2,
      Kurusi3,
      Kurusi4,
      Kurusi5,
      Kurusi6,
      Kurusi7,
      Kurusi8,
      Kurusi9,
      Kurusi10,
    ],
  },
  // { name: "Motocraze", images: [MotoC1, MotoC2, MotoC3] },
  // { name: "Proteinut", images: [Protien1, Protien2] },
  {
    name: "TeaToday",
    images: [
      Tea1,
      Tea2,
      Tea3,
      Tea4,
      Tea5,
      Tea6,
      Tea7,
      Tea8,
      // Tea9,
      // Tea10,
      // Tea11,
    ],
  },
];

const scales = [10, 20, 40, 80, 100];

function Branding() {
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
            className="grid-container__boxitemBrand"
            style={{
              transform: `translateY(${translateY})`,
              transition: "transform 1s ease",
            }}
          >
            {content.images.map((imgSrc, index) => (
              <div key={index} className="grid-container__image-wrapperBrand">
                <img
                  src={imgSrc}
                  alt={`${content.name}-content-${index}`}
                  className="grid-container__hoverimageBrand"
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Branding;
