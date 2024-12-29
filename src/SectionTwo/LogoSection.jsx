import logoOne from "../assets/images/slideLogo/one.png";
import logoTwo from "../assets/images/slideLogo/two.png";
import logoFour from "../assets/images/slideLogo/four.png";
import logoSix from "../assets/images/slideLogo/six.png";
import logoEight from "../assets/images/slideLogo/eight.png";
import logoNine from "../assets/images/slideLogo/nine.png";

export const LogoSection = () => {
  const logos = [logoOne, logoTwo, logoFour, logoSix, logoEight, logoNine];

  return (
    <>
      <div className="logos">
        <div className="logo-slide">
          {/* First set with unique classes */}
          {logos.map((logo, index) => (
            <img
              key={`logo-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className={`logo-image logo-${index + 1}`}
            />
          ))}
          {/* Duplicate sets */}
          {[...Array(4)].map((_, setIndex) =>
            logos.map((logo, index) => (
              <img
                key={`logo-duplicate-${setIndex}-${index}`}
                src={logo}
                alt={`Logo ${index + 1}`}
                className={`logo-image logo-${index + 1}`}
              />
            ))
          )}
        </div>
      </div>
      <div className="logos2">
        <div className="logo-slide">
          {/* First set with unique classes */}
          {logos.map((logo, index) => (
            <img
              key={`logo-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className={`logo-image logo-${index + 1}`}
            />
          ))}
          {/* Duplicate sets */}
          {[...Array(4)].map((_, setIndex) =>
            logos.map((logo, index) => (
              <img
                key={`logo-duplicate-${setIndex}-${index}`}
                src={logo}
                alt={`Logo ${index + 1}`}
                className={`logo-image logo-${index + 1}`}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
