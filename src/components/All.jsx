import React, { useRef } from "react";
import { useInView } from "framer-motion";

// import HIlineM from "../assets/images/hilineMob.jpeg";
// import HIlineL from "../assets/images/hilineLap.jpeg";
// import ProtienNutM from "../assets/images/protienNutMob.jpeg";
// import ProtienNutT from "../assets/images/protienNutTab.jpeg";
// import SkymarkM from "../assets/images/skymarkMob.jpeg";
// import SkymarkL from "../assets/images/skymarkLap.jpeg";
// import Moto from "../assets/images/moto.jpeg";
// import Accordings2 from "../assets/images/accoundings2.jpeg";
// import WillM1 from "../assets/images/Poster/willmount.png";
// import WillM2 from "../assets/2-012.png";
// import Shine1 from "../assets/images/Poster/shine.png";
// import Shine2 from "../assets/2-032.png";
// import Evergreen1 from "../assets/images/Poster/evergreen.png";
// import Evergreen2 from "../assets/2-022.png";
// import BigDeal1 from "../assets/images/Poster/bigDeals.png";
// import BigDeal2 from "../assets/images/Poster/home.png";
// import Defzen1 from "../assets/images/Poster/defzen.png";
// import Defzen2 from "../assets/images/Poster/defzen2.png";
// import Blazeemco1 from "../assets/images/Poster/blazeemco.png";
// import Blazeemco2 from "../assets/images/Poster/blazeemco2.png";
// import Ever1 from "../assets/images/Branding/Evergeen/eve1.png";
// import Ever2 from "../assets/images/Branding/Evergeen/eve2.png";
// import Ever3 from "../assets/images/Branding/Evergeen/eve3.png";
// import Ever4 from "../assets/images/Branding/Evergeen/eve4.png";
// import Ever5 from "../assets/images/Branding/Evergeen/eve5.png";
// import Kurusi1 from "../assets/images/Branding/Kursii/kursii1.png";
// import Kurusi2 from "../assets/images/Branding/Kursii/kursii2.png";
// import Kurusi3 from "../assets/images/Branding/Kursii/kursii3.png";
// import Kurusi4 from "../assets/images/Branding/Kursii/kursii4.png";
// import Kurusi5 from "../assets/images/Branding/Kursii/kursii5.png";
// import Kurusi6 from "../assets/images/Branding/Kursii/kursii6.png";
// import Kurusi7 from "../assets/images/Branding/Kursii/kursii7.png";
// import Kurusi8 from "../assets/images/Branding/Kursii/kursii8.png";
// import Kurusi9 from "../assets/images/Branding/Kursii/kursii9.png";
// import Tea1 from "../assets/images/Branding/TeaToday/tea1.png";
// import Tea2 from "../assets/images/Branding/TeaToday/tea2.png";
// import Tea3 from "../assets/images/Branding/TeaToday/tea3.png";
// import Tea4 from "../assets/images/Branding/TeaToday/tea4.png";
// import Tea5 from "../assets/images/Branding/TeaToday/tea5.png";
// import Tea6 from "../assets/images/Branding/TeaToday/tea6.png";
// import Tea7 from "../assets/images/Branding/TeaToday/tea7.png";
// import Tea8 from "../assets/images/Branding/TeaToday/tea8.png";

const allImages = [
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043358/hilineMob_ytc9dj.jpg",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043357/hilineLap_ricxmm.jpg",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042822/evergreen_e5jdiq.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053383/2a_oqo7fn.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053227/tea1_iuzve3.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053227/tea2_g58lw3.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053227/tea3_ecm0ah.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053227/tea4_gshhfd.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053228/tea5_wtstse.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053228/tea6_ep4cvl.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053233/tea7_et5mtt.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053228/tea8_cmw9yc.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042824/shine_jmekdf.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053384/2-032_kzxmqu.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043361/protienNutMob_um4pf8.jpg",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043362/protienNutTab_c4qgfs.jpg",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053037/kursii1_hae9o9.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053036/kursii2_qsamnn.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053037/kursii3_cadqoq.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053038/kursii4_etfuu0.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053038/kursii5_pxvvwb.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053039/kursii6_p9zq4q.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053038/kursii7_kacagz.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053036/kursii8_nuaaov.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053038/kursii9_mtfibc.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042820/bigDeals_gl37l3.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043366/skymarkMob_totqdl.jpg",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043363/skymarkLap_sigdsf.jpg",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043356/accoundings2_j5m31v.jpg",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042797/1-25_cxfjic.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042797/1-26_dioxjj.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042798/1-27_qr5ifw.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042799/1-28_mxplud.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042799/1-29_qeimc2.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043359/moto_sjmscf.jpg",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042821/blazeemco_phwwpy.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053384/2-032_kzxmqu.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042827/willmount_jfwehq.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738053388/2-012_nbrmz2.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042822/defzen_ybrrtb.png",
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
              transition: `transform 1s ease, opacity 1s ease ${i * 0.2}s`,
              opacity: opacity,
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
