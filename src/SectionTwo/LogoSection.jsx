import React, { useEffect } from "react";

export const LogoSection = () => {
  const logos = Array.from({ length: 15 }, (_, i) => `Logo ${i + 1}`);

  return (
    <div className="logos">
      <div className="logo-slide">
        {/* Render two sets of logos for seamless looping */}
        {logos.map((logo, index) => (
          <div key={`logo-${index}`}>{logo}</div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`}>{logo}</div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`}>{logo}</div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`}>{logo}</div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`}>{logo}</div>
        ))}
      </div>
    </div>
  );
};
