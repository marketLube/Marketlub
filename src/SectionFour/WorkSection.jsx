import { Parallax } from "react-scroll-parallax";
import Image1 from "../assets/Services/Branding & Designing 2.png";
import Image2 from "../assets/Services/perphomance.png";
import Image3 from "../assets/Services/VideoProduction 2.png";
import Image4 from "../assets/images/protienNutMob.jpeg";
import Image5 from "../assets/images/accoundings2.jpeg";
import { GoArrowDownLeft } from "react-icons/go";
import { useEffect } from "react";

export const WorkSection = () => {
  useEffect(() => {
    const images = [Image1, Image2, Image3, Image4, Image5];
    images.forEach((image) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = image;
      document.head.appendChild(link);
    });
  }, []);

  const items = [
    {
      image: Image1,
      pills: ["Webflow Development", "UI/UX Design", "Webflow Training"],
      heading: "Hacien",
      description:
        "HACIEN is a premium tequila brand supplying high-end hospitality and retail locations worldwide. They approached Phunk to undertake a comprehensive design project comprising web, packaging, and marketing assets as well as 3D renders of their signature bottles.",
      link: "https://www.phunk.co.uk/work/hacien",
    },
    {
      image: Image2,
      pills: ["Splash Screens", "Illustrations", "Lottie Animations"],
      heading: "Mobilleo",
      description:
        "Mobilleo is a SaaS solution making it easy for organisations to manage global business travel for their employees.  The team at Mobilleo approached Phunk to provide a range of design and illustration services, building on their existing brand, for use across their website and app.",
      link: "https://www.phunk.co.uk/work/mobillio",
    },
    {
      image: Image3,
      pills: ["Webflow Development", "UI/UX Design", "Webflow Training"],
      heading: "Mannson Freight",
      description:
        "Mannson Freight operates import and export consolidation services involving sea freight. They engaged Phunk to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.",
      link: "https://www.phunk.co.uk/work/mannson-freight",
    },
    {
      image: Image4,
      pills: ["Webflow Development", "UI/UX Design", "Webflow Training"],
      heading: "BOX iQ",
      description:
        "BOXiQ Performance Center in Dubai is a globally recognised boxing gym — hosting icons like Tyson Fury and Oleksandr Usyk. Working with Phunk, they now have a high-quality digital presence to match the prestige of their brand.",
      link: "https://www.phunk.co.uk/work/box-iq",
    },
    {
      image: Image5,
      pills: ["Webflow Development", "Visual Identity", "Packaging"],
      heading: "The Honest Watch Dealer",
      description:
        "The Honest Watch Dealer is a luxury watch expert renowned for his popular YouTube channel, as well as founding The Luxury Watch Company. Charlie (his real name) engaged Phunk to develop a brand identity for his channel, with applications across a range of merchandise.",
      link: "https://www.phunk.co.uk/work/honest-watch-dealer",
    },
  ];

  return (
    <div className="work-section" id="service">
      <div className="work-section__header-container">
        <h1 className="work-section__title">Dive into the work.</h1>
      </div>

      <Parallax className="work-section__cover"></Parallax>

      <div className="work-section__combo-set">
        <div className="work-section__scroll-container">
          {items.map((item, index) => (
            <div
              key={index}
              className={`work-section__sticky-section ${
                index === item.length - 1 ? "work-section__non-sticky" : ""
              }`}
            >
              <div className="work-section__imageDiv">
                <img
                  src={item.image}
                  alt={`Project ${index + 1}`}
                  className="work-section__workImage"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="work-section__second-tab">
          <div style={{ width: "100%" }}>
            {items.map((item, index) => (
              <div className="work-section__rightBottomDiv" key={index}>
                <div className="work-section__pills">
                  {item.pills.map((pill, pillIndex) => (
                    <div key={pillIndex} className="work-section__pill-item">
                      {pill}
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="work-section__heading-style">
                    {item.heading}
                  </h1>
                  <p
                    className="work-section__para-style"
                    style={{ color: "#696969", fontSize: "20px" }}
                  >
                    {item.description}
                  </p>
                </div>
                <a
                  href={item.link}
                  className="work-section__linktag"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div style={{ color: "white", fontSize: "20px" }}>
                    See full case study
                  </div>
                  <div className="work-section__icon">
                    <GoArrowDownLeft />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
