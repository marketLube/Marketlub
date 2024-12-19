import { useEffect, useRef } from "react";

const str =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde non dicta obcaecati deserunt, eum magni. Fuga sapiente eaque similique est magnam quos corporis aut ut suscipit soluta consequuntur, accusamus totam!";

export const Paragraph = () => {
  const wordsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY - 1500;
      const windowHeight = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - windowHeight;

      // Calculate how many words should be bright based on scroll position
      const progress = scrollPosition / maxScroll;
      const totalWords = str.split(" ").length;
      const activeWordIndex = Math.floor(progress * totalWords * 2);

      wordsRef.current.forEach((word, index) => {
        if (word) {
          if (index <= activeWordIndex) {
            // Current word is fully visible (bright)
            word.style.opacity = "1";
          } else if (
            index === activeWordIndex - 1 ||
            index === activeWordIndex + 1
          ) {
            // Adjacent words are partially visible
            word.style.opacity = "0.7";
          } else {
            // Other words are dim
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
    <div style={{ height: "700vh" }}>
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
