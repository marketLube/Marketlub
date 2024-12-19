import { useEffect, useState } from "react";

export const useStickyEffect = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const imageDiv = document.querySelector(".work-section__imageDiv");
      const container = document.querySelector(
        ".work-section__scroll-container"
      );

      if (container && imageDiv) {
        const rect = container.getBoundingClientRect();
        if (rect.top < 0 && rect.bottom > imageDiv.offsetHeight) {
          setOffset(Math.abs(rect.top));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return offset;
};
