import React, { useEffect, useRef } from "react";

const str =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde non dicta obcaecati deserunt, eum magni. Fuga sapiente eaque similique est magnam quos corporis aut ut suscipit soluta consequuntur, accusamus totam!";

export const Paragraph = () => {
  const wordsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - windowHeight;

      // Calculate how many words should be bright based on scroll position
      const progress = scrollPosition / maxScroll;
      const totalWords = str.split(" ").length;
      const activeWordIndex = Math.floor(progress * totalWords);

      wordsRef.current.forEach((word, index) => {
        if (word) {
          if (index === activeWordIndex) {
            // Current word is fully bright
            word.style.color = "rgba(255, 255, 255, 1)";
          } else if (
            index === activeWordIndex - 1 ||
            index === activeWordIndex + 1
          ) {
            // Adjacent words are partially bright
            word.style.color = "rgba(255, 255, 255, 0.7)";
          } else {
            // Other words are dim
            word.style.color = "rgba(255, 255, 255, 0.3)";
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
    <div style={{ height: "1000vh" }}>
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
              style={{ transition: "color 0.3s ease" }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
