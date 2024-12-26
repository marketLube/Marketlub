import { useEffect, useRef } from "react";
import { Boost } from "../SectionTwo/Boost";

const str =
  "Lorem ipsum amet consectetur, adipisicing elit. Unde non dicta obcaecati deserunt, eum magni";

export const Paragraph = () => {
  const wordsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY - 1000;
      const windowHeight = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - windowHeight;

      // Calculate how many words should be bright based on scroll position
      const progress = scrollPosition / maxScroll;
      const totalWords = str.split(" ").length;
      const activeWordIndex = Math.floor(progress * totalWords * 4);

      wordsRef.current.forEach((word, index) => {
        if (word) {
          if (index <= activeWordIndex) {
            word.style.opacity = "1";
          } else {
            word.style.opacity = "0.3";
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="paragraph-container" id="paragraph">
      <div className="paragraph">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          {str.split(" ").map((word, index) => (
            <span
              key={index}
              ref={(el) => (wordsRef.current[index] = el)}
              style={{
                color: "white",
                opacity: "0.3",
                transition: "opacity 0.3s ease",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
