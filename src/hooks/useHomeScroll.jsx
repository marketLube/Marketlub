import { useEffect } from "react";

export const useHomeScroll = () => {
  useEffect(() => {
    const handleScrollUp = (event) => {
      if (window.scrollY > window.innerHeight) return;
      if (event.deltaY > 0) {
        window.scrollTo({
          top: window.innerHeight + 5 * 16,
          behavior: "smooth",
        });
      }
    };

    const handleScrollDown = (event) => {
      if (window.scrollY > window.innerHeight) return;
      if (event.deltaY < 0) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("wheel", handleScrollUp);
    window.addEventListener("wheel", handleScrollDown);

    return () => {
      window.removeEventListener("wheel", handleScrollUp);
      window.removeEventListener("wheel", handleScrollDown);
    };
  }, []);
};
