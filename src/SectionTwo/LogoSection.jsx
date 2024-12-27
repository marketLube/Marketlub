export const LogoSection = () => {
  const logos = [
    "src/assets/images/slideLogo/bmw.png",
    "src/assets/images/slideLogo/face.png",
    "src/assets/images/slideLogo/google.png",
    "src/assets/images/slideLogo/zara.avif",
    "src/assets/images/slideLogo/bmw.png",
    "src/assets/images/slideLogo/face.png",
    "src/assets/images/slideLogo/google.png",
    "src/assets/images/slideLogo/zara.avif",
    "src/assets/images/slideLogo/bmw.png",
    "src/assets/images/slideLogo/face.png",
    "src/assets/images/slideLogo/google.png",
    "src/assets/images/slideLogo/zara.avif",
    "src/assets/images/slideLogo/face.png",
    "src/assets/images/slideLogo/google.png",
    "src/assets/images/slideLogo/zara.avif",
  ];

  return (
    <>
      <div className="logos">
        <div className="logo-slide">
          {/* Render two sets of logos for seamless looping */}
          {logos.map((logo, index) => (
            <img
              key={`logo-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="logo-image"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`logo-duplicate-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="logo-image"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`logo-duplicate-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="logo-image"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`logo-duplicate-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="logo-image"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`logo-duplicate-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="logo-image"
            />
          ))}
        </div>
      </div>
      <div className="logos2">
        <div className="logo-slide">
          {/* Render two sets of logos for seamless looping */}
          {logos.map((logo, index) => (
            <img
              key={`logo-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="logo-image"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`logo-duplicate-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="logo-image"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`logo-duplicate-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="logo-image"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`logo-duplicate-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="logo-image"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`logo-duplicate-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="logo-image"
            />
          ))}
        </div>
      </div>
    </>
  );
};
