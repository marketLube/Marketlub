import React, { useState, useEffect, Suspense, lazy, useRef } from "react";
import { useInView } from "framer-motion";
import FullPageLoader from "../components/FullPageLoader";

const SplineLazy = lazy(() => import("@splinetool/react-spline"));

export const Robo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const ref = useRef(null);
  const inView = useInView(ref);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (error) => {
    console.error("Spline scene load error:", error);
    setHasError(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollPosition > 2 * viewportHeight) {
        setOpacity(0);
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isTab = window.innerWidth < 992;

  return (
    <div
      ref={ref}
      className="spline-scene-container robot-container"
      style={{
        width: "100%",
        height: "110vh",
        position: "sticky",
        overflow: "hidden",
        // display: isVisible ? "flex" : "none",
        opacity: opacity,
        top: 0,
      }}
      id="home"
    >
      {hasError ? (
        <div className="error-message">
          <p>Unable to load 3D scene. Please refresh or try again later.</p>
        </div>
      ) : (
        <Suspense fallback={<FullPageLoader />}>
          {inView && opacity === 1 && (
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
