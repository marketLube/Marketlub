import React, { useState, Suspense, lazy, useRef } from "react";
import { useInView } from "framer-motion";

const SplineLazy = lazy(() => import("@splinetool/react-spline"));

export const Robo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const ref = useRef(null);
  const inView = useInView(ref);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (error) => {
    console.error("Spline scene load error:", error);
    setHasError(true);
  };

  return (
    <div
      ref={ref}
      className="spline-scene-container robot-container"
      style={{
        width: "100%",
        height: "100vh",
        position: "sticky",
        overflow: "hidden",
      }}
    >
      {hasError ? (
        <div className="error-message">
          <p>Unable to load 3D scene. Please refresh or try again later.</p>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="loading-overlay">
              <p>Loading 3D Scene...</p>
            </div>
          }
        >
          {inView && (
            <SplineLazy
              scene="https://prod.spline.design/Le6MsQHhIgww0Y3B/scene.splinecode"
              onLoad={handleLoad}
              onError={handleError}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          )}
        </Suspense>
      )}
    </div>
  );
};

export default Robo;
