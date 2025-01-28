import React from "react";
import WillM1 from "../assets/images/Poster/willmount.png";
import Shine1 from "../assets/images/Poster/shine.png";
import Evergreen1 from "../assets/images/Poster/evergreen.png";
import BigDeal1 from "../assets/images/Poster/bigDeals.png";
import Defzen1 from "../assets/images/Poster/defzen.png";
import Blazeemco1 from "../assets/images/Poster/blazeemco.png";
import Kuruva1 from "../assets/images/Poster/kuruva.png";

const imageContents = [
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042827/willmount_jfwehq.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042824/shine_jmekdf.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042822/evergreen_e5jdiq.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042820/bigDeals_gl37l3.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042822/defzen_ybrrtb.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042821/blazeemco_phwwpy.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738042823/kuruva_eygdl6.png",
];

function Photoshoot() {
  return (
    <div className="grid-container__blueboxPhoto">
      {imageContents.map((imgSrc, i) => (
        <div key={i} className="grid-container__boxitemPhoto">
          <div
            className="grid-container__image-wrapperPhoto"
            style={{ pointerEvents: "none !important" }}
          >
            <img
              src={imgSrc}
              alt={`content-${i}`}
              className="grid-container__hoverimagePhoto"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Photoshoot;
