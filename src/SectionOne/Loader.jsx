import React from "react";

import "./Loader.css";
export default function Loader() {
  return (
    <div className="loader">
      <div className="intern"></div>
      <div className="external-shadow">
        <div className="central"></div>
      </div>
    </div>
  );
}
