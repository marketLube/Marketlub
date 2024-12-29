import WillM1 from "../assets/images/Poster/willmount.png";
import Shine1 from "../assets/images/Poster/shine.png";
import Evergreen1 from "../assets/images/Poster/evergreen.png";
import BigDeal1 from "../assets/images/Poster/bigDeals.png";
import Defzen1 from "../assets/images/Poster/defzen.png";
import Blazeemco1 from "../assets/images/Poster/blazeemco.png";
import Kuruva1 from "../assets/images/Poster/kuruva.png";

const imageContents = [
  WillM1,
  Shine1,
  Evergreen1,
  BigDeal1,
  Defzen1,
  Blazeemco1,
  Kuruva1,
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
