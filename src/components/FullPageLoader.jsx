import React from "react";

export const FullPageLoader = () => {
  return (
    <div className="full-page-loader">
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <p>Loading 3D Scene...</p>
      </div>
    </div>
  );
};

export default FullPageLoader;
