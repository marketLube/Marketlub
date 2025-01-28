import React, { useRef } from "react";
import { useInView } from "framer-motion";
// import Brandbook1 from "../assets/Brandbook/1-01.png";
// import Brandbook2 from "../assets/Brandbook/1-02.png";
// import Brandbook3 from "../assets/Brandbook/1-03.png";
// import Brandbook4 from "../assets/Brandbook/1-04.png";
// import Brandbook5 from "../assets/Brandbook/1-05.png";
// import Brandbook6 from "../assets/Brandbook/1-06.png";
// import Brandbook7 from "../assets/Brandbook/1-07.png";
// import Brandbook8 from "../assets/Brandbook/1-08.png";
// import Brandbook9 from "../assets/Brandbook/1-09.png";
// import Brandbook10 from "../assets/Brandbook/1-10.png";
// import Brandbook11 from "../assets/Brandbook/1-11.png";
// import Brandbook12 from "../assets/Brandbook/1-12.png";
// import Brandbook13 from "../assets/Brandbook/1-13.png";
// import Brandbook14 from "../assets/Brandbook/1-14.png";
// import Brandbook15 from "../assets/Brandbook/1-15.png";
// import Brandbook17 from "../assets/Brandbook/1-17.png";
// import Brandbook18 from "../assets/Brandbook/1-18.png";
// import Brandbook19 from "../assets/Brandbook/1-19.png";
// import Brandbook20 from "../assets/Brandbook/1-20.png";
// import Brandbook23 from "../assets/Brandbook/1-23.png";
// import Brandbook24 from "../assets/Brandbook/1-24.png";
// import Brandbook25 from "../assets/Brandbook/1-25.png";
// import Brandbook26 from "../assets/Brandbook/1-26.png";
// import Brandbook27 from "../assets/Brandbook/1-27.png";
// import Brandbook28 from "../assets/Brandbook/1-28.png";
// import Brandbook16 from "../assets/Brandbook/1-16.png";
// import Brandbook21 from "../assets/Brandbook/1-21.png";
// import Brandbook22 from "../assets/Brandbook/1-22.png";
// import Brandbook29 from "../assets/Brandbook/1-29.png";

function Branding() {
  const ref = useRef(null);

  // Create an array of all Brandbook images
  const brandImages = [
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042793/1-16_izfoqj.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042781/1-01_qqjkhh.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042782/1-02_auarsn.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042795/1-22_yovydo.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042789/1-03_dz0qgq.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042799/1-29_qeimc2.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042783/1-04_zmmlcz.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042783/1-05_plhy1q.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042783/1-06_klqng3.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042783/1-07_hljlff.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042784/1-08_ekl2uz.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042792/1-09_qu6dfa.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042796/1-10_h23rwp.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042788/1-11_p2205l.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042790/1-12_u07nkn.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042786/1-13_ypbmi6.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042790/1-14_shsscr.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042792/1-15_rloxjo.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042792/1-17_otqx1h.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042795/1-18_gimthd.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042793/1-19_dahdhu.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042794/1-20_qaoe8y.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042796/1-21_ebzva4.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042797/1-23_iu4vyb.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042796/1-24_iugerj.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042797/1-25_cxfjic.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042797/1-26_dioxjj.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042798/1-27_qr5ifw.png",
    "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042799/1-28_mxplud.png",
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
