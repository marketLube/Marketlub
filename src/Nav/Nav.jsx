import React, { useState, useRef, useEffect } from "react";

export const Nav = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [sliderStyle, setSliderStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
  });
  const containerRef = useRef(null);
  const itemRefs = useRef({});

  const handleItemClick = (item) => {
    setActiveItem(item);
    updateSliderPosition(item);
  };

  const updateSliderPosition = (activeItem) => {
    const activeElement = itemRefs.current[activeItem];
    const containerElement = containerRef.current;

    if (activeElement && containerElement) {
      const itemWidth = activeElement.offsetWidth;
      const itemLeft = activeElement.offsetLeft;
      const containerWidth = containerElement.offsetWidth;

      // Check if it's the first or last item
      const isFirst = itemLeft === 0;
      const isLast = itemLeft + itemWidth === containerWidth;

      const sliderWidth = isFirst
        ? itemLeft + itemWidth * 1.5 // Extend slider width to the right for first item
        : isLast
        ? containerWidth - itemLeft + itemWidth * 0.5 // Extend slider width to the left for last item
        : itemWidth; // Normal width for other items

      const sliderTransform = isFirst
        ? "translateX(0px)" // Align slider to the left
        : isLast
        ? `translateX(${itemLeft - itemWidth * 0.5}px)` // Adjust transform for last item
        : `translateX(${itemLeft}px)`; // Normal transform for other items

      setSliderStyle({
        width: sliderWidth,
        transform: sliderTransform,
      });
    }
  };

  useEffect(() => {
    updateSliderPosition(activeItem);

    const handleResize = () => {
      updateSliderPosition(activeItem);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeItem]);

  const navItems = [
    { name: "Home", key: "Home" },
    { name: "Service", key: "Service" },
    { name: "Portfolio", key: "Portfolio" },
    { name: "Contact", key: "Contact" },
  ];

  return (
    <div ref={containerRef} className="nav-container">
      <nav className="nav">
        <div
          className="nav__slider"
          style={{
            width: `${sliderStyle.width}px`,
            transform: sliderStyle.transform,
          }}
        ></div>
        <ul className="nav__list">
          {navItems.map((item) => (
            <li
              key={item.key}
              ref={(el) => (itemRefs.current[item.key] = el)}
              className={`nav__item ${
                activeItem === item.key ? "nav__item--active" : ""
              }`}
              onClick={() => handleItemClick(item.key)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
