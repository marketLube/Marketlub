import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Brandbook1 from "../assets/Brandbook/1-01.png";
import Brandbook2 from "../assets/Brandbook/1-02.png";
import Brandbook3 from "../assets/Brandbook/1-03.png";
import Brandbook4 from "../assets/Brandbook/1-04.png";
import Brandbook5 from "../assets/Brandbook/1-05.png";
import Brandbook6 from "../assets/Brandbook/1-06.png";
import Brandbook7 from "../assets/Brandbook/1-07.png";
import Brandbook8 from "../assets/Brandbook/1-08.png";
import Brandbook9 from "../assets/Brandbook/1-09.png";
import Brandbook10 from "../assets/Brandbook/1-10.png";
import Brandbook11 from "../assets/Brandbook/1-11.png";
import Brandbook12 from "../assets/Brandbook/1-12.png";
import Brandbook13 from "../assets/Brandbook/1-13.png";
import Brandbook14 from "../assets/Brandbook/1-14.png";
import Brandbook15 from "../assets/Brandbook/1-15.png";
import Brandbook17 from "../assets/Brandbook/1-17.png";
import Brandbook18 from "../assets/Brandbook/1-18.png";
import Brandbook19 from "../assets/Brandbook/1-19.png";
import Brandbook20 from "../assets/Brandbook/1-20.png";
import Brandbook23 from "../assets/Brandbook/1-23.png";
import Brandbook24 from "../assets/Brandbook/1-24.png";
import Brandbook25 from "../assets/Brandbook/1-25.png";
import Brandbook26 from "../assets/Brandbook/1-26.png";
import Brandbook27 from "../assets/Brandbook/1-27.png";
import Brandbook28 from "../assets/Brandbook/1-28.png";

import Brandbook16 from "../assets/Brandbook/1-16.png";
import Brandbook21 from "../assets/Brandbook/1-21.png";
import Brandbook22 from "../assets/Brandbook/1-22.png";
import Brandbook29 from "../assets/Brandbook/1-29.png";

function Branding() {
  const ref = useRef(null);

  // Create an array of all Brandbook images
  const brandImages = [
    Brandbook16,
    Brandbook1,
    Brandbook2,
    Brandbook22,
    Brandbook3,
    Brandbook29,
    Brandbook4,
    Brandbook5,
    Brandbook6,
    Brandbook7,
    Brandbook8,
    Brandbook9,
    Brandbook10,
    Brandbook11,
    Brandbook12,
    Brandbook13,
    Brandbook14,
    Brandbook15,
    Brandbook17,
    Brandbook18,
    Brandbook19,
    Brandbook20,
    Brandbook21,
    Brandbook23,
    Brandbook24,
    Brandbook25,
    Brandbook26,
    Brandbook27,
    Brandbook28,
  ];

  return (
    <div className="grid-container__bluebox" ref={ref}>
      {brandImages.map((image, index) => (
        <div className="grid-container__bluebox-item" key={index}>
          <img
            key={index}
            src={image}
            alt={`Brandbook page ${index + 1}`}
            className="brand-image"
          />
        </div>
      ))}
    </div>
  );
}
export default Branding;
